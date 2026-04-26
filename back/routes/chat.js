const express = require('express')
const router = express.Router()
const supabase = require('../lib/supabase')
const { protect } = require('../lib/middleware')
const { client, MODEL } = require('../lib/ai')

// ── ASK LEXAI ──
router.post('/query', protect, async (req, res) => {
  const { message, session_id } = req.body
  const user_id = req.user.id

  if (!message) return res.status(400).json({ error: 'Message is required.' })

  let currentSessionId = session_id
  if (!currentSessionId) {
    const { data: session } = await supabase
      .from('chat_sessions')
      .insert({ user_id, title: message.slice(0, 60) })
      .select()
      .single()
    currentSessionId = session.id
  }

  // Get chat history
  const { data: history } = await supabase
    .from('chat_messages')
    .select('role, content')
    .eq('session_id', currentSessionId)
    .order('created_at', { ascending: true })
    .limit(6)

  // Save user message
  await supabase.from('chat_messages').insert({
    session_id: currentSessionId,
    role: 'user',
    content: message
  })

  let reply
  try {
    const completion = await client.chat.completions.create({
      model: MODEL,
      messages: [
        {
          role: 'system',
          content: `You are LexAI, an expert Indian legal assistant inside BarresterBox — a law student learning platform.
You help students understand Indian law clearly and educationally.
You can explain IPC sections, constitutional articles, landmark cases, legal procedures, and moot court prep.
Always mention this is for LEARNING only, not real legal advice.
Be encouraging, clear, and helpful like a professor.`
        },
        ...(history || []),
        { role: 'user', content: message }
      ],
      temperature: 0.6
    })

    reply = completion.choices[0].message.content

  } catch (err) {
    console.error('LexAI Error:', err.message)
    return res.status(500).json({ error: 'LexAI failed to respond. Try again.' })
  }

  // Save AI reply
  await supabase.from('chat_messages').insert({
    session_id: currentSessionId,
    role: 'assistant',
    content: reply
  })

  res.json({
    reply,
    session_id: currentSessionId,
    disclaimer: '⚠️ Educational purposes only. Not real legal advice.'
  })
})

// ── GET MY CHAT SESSIONS ──
router.get('/sessions', protect, async (req, res) => {
  const { data, error } = await supabase
    .from('chat_sessions')
    .select('id, title, created_at')
    .eq('user_id', req.user.id)
    .order('created_at', { ascending: false })

  if (error) return res.status(400).json({ error: error.message })
  res.json(data)
})

// ── GET ONE SESSION'S MESSAGES ──
router.get('/sessions/:id', protect, async (req, res) => {
  const { data, error } = await supabase
    .from('chat_messages')
    .select('*')
    .eq('session_id', req.params.id)
    .order('created_at')

  if (error) return res.status(400).json({ error: error.message })
  res.json(data)
})

module.exports = router