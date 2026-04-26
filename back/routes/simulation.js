const express = require('express')
const router = express.Router()
const supabase = require('../lib/supabase')
const { protect } = require('../lib/middleware')
const { client, MODEL } = require('../lib/ai')

// ── START SIMULATION ──
router.post('/start', protect, async (req, res) => {
  const { case_id } = req.body
  const user_id = req.user.id

  const { data: caseData, error: caseError } = await supabase
    .from('cases')
    .select('*')
    .eq('id', case_id)
    .single()

  if (caseError) return res.status(404).json({ error: 'Case not found' })

  const { data, error } = await supabase
    .from('simulations')
    .insert({ user_id, case_id, status: 'in_progress' })
    .select()
    .single()

  if (error) return res.status(400).json({ error: error.message })

  res.json({
    message: '⚔️ Courtroom battle started!',
    simulation_id: data.id,
    case: {
      title: caseData.title,
      domain: caseData.domain,
      facts: caseData.facts,
      key_issues: caseData.key_issues,
      applicable_laws: caseData.applicable_laws
    }
  })
})


// ── SUBMIT ARGUMENT ──
router.post('/argue', protect, async (req, res) => {
  const { simulation_id, user_argument, round_number } = req.body
  const user_id = req.user.id

  if (!simulation_id || !user_argument || !round_number) {
    return res.status(400).json({
      error: 'simulation_id, user_argument and round_number are required.'
    })
  }

  // Get simulation + case
  const { data: sim, error: simError } = await supabase
    .from('simulations')
    .select('*, cases(*)')
    .eq('id', simulation_id)
    .eq('user_id', user_id)
    .single()

  if (simError) return res.status(404).json({ error: 'Simulation not found.' })
  if (sim.status === 'completed') {
    return res.status(400).json({ error: 'This simulation is already completed.' })
  }

  const { cases } = sim

  // ── BUILD PROMPT ──
  const prompt = `You are simulating a real Indian courtroom for a law student learning app called BarresterBox.

CASE DETAILS:
- Title: ${cases.title}
- Domain: ${cases.domain}
- Facts: ${cases.facts}
- Key Legal Issues: ${(cases.key_issues || []).join(', ')}
- Applicable Laws: ${(cases.applicable_laws || []).join(', ')}

CURRENT ROUND: ${round_number}

STUDENT'S ARGUMENT:
"${user_argument}"

YOUR TASKS — Play 3 roles simultaneously:

ROLE 1 — OPPONENT LAWYER:
Give a strong, aggressive but legally sound counter-argument.
Keep it under 80 words. Be realistic like a senior advocate.

ROLE 2 — JUDGE (Indian High Court):
Evaluate ONLY the student's argument.
Pick exactly ONE verdict: "accepted" OR "doubted" OR "rejected"
Give 1-2 sentence judicial reasoning. Be strict but fair.

ROLE 3 — LEARNING COACH:
- One specific strength of their argument
- One specific weakness or mistake  
- One improved version of the argument
- One real Indian law, IPC section, article, or landmark case that applies

SCORING:
- "accepted" → round_score between 8 and 10
- "doubted" → round_score between 4 and 7
- "rejected" → round_score between 1 and 3

RULES:
- Base everything on real Indian law
- Do NOT invent fake case names
- Be educational and encouraging
- This is a learning tool, not real legal advice

YOU MUST RESPOND ONLY IN THIS EXACT JSON FORMAT.
No text before or after. No markdown. No code blocks. Just raw JSON:

{
  "opponent": "counter argument text here",
  "judge": {
    "reaction": "accepted",
    "reasoning": "judicial reasoning here"
  },
  "learning": {
    "strength": "what they did well",
    "mistake": "what was weak",
    "improved_argument": "better version of their argument",
    "relevant_law": "IPC Section X or Article Y or Case Name"
  },
  "round_score": 7
}`

  // ── CALL OPENROUTER ──
  let aiResponse
  try {
    const completion = await client.chat.completions.create({
      model: MODEL,
      messages: [
        {
          role: 'system',
          content: 'You are a courtroom simulation engine for Indian law. Always respond in valid JSON only. No markdown. No code blocks. No extra text. Just raw JSON.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.7
    })

    let rawText = completion.choices[0].message.content
    console.log('AI raw response:', rawText)

    // Clean any markdown if model adds it
    rawText = rawText
      .replace(/```json/g, '')
      .replace(/```/g, '')
      .trim()

    aiResponse = JSON.parse(rawText)

  } catch (err) {
    console.error('OpenRouter Error:', err.message)
    return res.status(500).json({
      error: '🤖 AI failed to respond. Please try again.',
      details: err.message
    })
  }

  // ── SAVE ROUND ──
  const { data: round, error: roundError } = await supabase
    .from('simulation_rounds')
    .insert({
      simulation_id,
      round_number,
      user_argument,
      opponent_response: aiResponse.opponent,
      judge_reaction: aiResponse.judge.reasoning,
      judge_verdict: aiResponse.judge.reaction,
      round_score: aiResponse.round_score
    })
    .select()
    .single()

  if (roundError) return res.status(400).json({ error: roundError.message })

  // ── SAVE LEARNING FEEDBACK ──
  await supabase.from('learning_logs').insert({
    user_id,
    simulation_id,
    round_id: round.id,
    strengths: [aiResponse.learning.strength],
    weaknesses: [aiResponse.learning.mistake],
    concepts_used: [aiResponse.learning.relevant_law],
    better_argument: aiResponse.learning.improved_argument
  })

  // ── UPDATE XP ──
  try {
    await supabase.rpc('update_user_xp', {
      p_user_id: user_id,
      p_xp_to_add: aiResponse.round_score,
      p_outcome: aiResponse.judge.reaction
    })
  } catch (xpErr) {
    console.log('XP update skipped:', xpErr.message)
  }

  // ── SEND RESPONSE ──
  res.json({
    round_number,
    opponent: aiResponse.opponent,
    judge: aiResponse.judge,
    learning: aiResponse.learning,
    round_score: aiResponse.round_score,
    disclaimer: '⚠️ BarresterBox is a learning tool. Not real legal advice.'
  })
})


// ── END SIMULATION ──
router.post('/end', protect, async (req, res) => {
  const { simulation_id } = req.body
  const user_id = req.user.id

  const { data: rounds, error: roundsError } = await supabase
    .from('simulation_rounds')
    .select('round_score, judge_verdict')
    .eq('simulation_id', simulation_id)

  if (roundsError || !rounds.length) {
    return res.status(400).json({ error: 'No rounds found for this simulation.' })
  }

  const totalScore = rounds.reduce((sum, r) => sum + (r.round_score || 0), 0)
  const wins = rounds.filter(r => r.judge_verdict === 'accepted').length
  const losses = rounds.filter(r => r.judge_verdict === 'rejected').length
  const outcome = wins > losses ? 'win' : losses > wins ? 'loss' : 'draw'
  const xpEarned = outcome === 'win' ? totalScore + 20 : totalScore

  await supabase
    .from('simulations')
    .update({
      status: 'completed',
      outcome,
      user_score: totalScore,
      xp_earned: xpEarned,
      completed_at: new Date().toISOString()
    })
    .eq('id', simulation_id)
    .eq('user_id', user_id)

  res.json({
    message: outcome === 'win' ? '🏆 You won!' : outcome === 'loss' ? '📚 Keep practicing!' : '🤝 Draw!',
    outcome,
    total_score: totalScore,
    xp_earned: xpEarned,
    rounds_played: rounds.length
  })
})


// ── MY SIMULATIONS ──
router.get('/my', protect, async (req, res) => {
  const { data, error } = await supabase
    .from('simulations')
    .select('*, cases(title, domain, difficulty)')
    .eq('user_id', req.user.id)
    .order('started_at', { ascending: false })

  if (error) return res.status(400).json({ error: error.message })
  res.json(data)
})


// ── ONE SIMULATION WITH ALL ROUNDS ──
router.get('/:id', protect, async (req, res) => {
  const { data: sim } = await supabase
    .from('simulations')
    .select('*, cases(*)')
    .eq('id', req.params.id)
    .eq('user_id', req.user.id)
    .single()

  const { data: rounds } = await supabase
    .from('simulation_rounds')
    .select('*')
    .eq('simulation_id', req.params.id)
    .order('round_number')

  const { data: feedback } = await supabase
    .from('learning_logs')
    .select('*')
    .eq('simulation_id', req.params.id)

  res.json({ simulation: sim, rounds, feedback })
})

module.exports = router