const express = require('express')
const router = express.Router()
const supabase = require('../lib/supabase')
const { protect } = require('../lib/middleware')

// ── MY FULL PROGRESS DASHBOARD ──
router.get('/me', protect, async (req, res) => {
  const user_id = req.user.id

  const [profile, simulations, badges] = await Promise.all([
    supabase.from('profiles').select('*').eq('id', user_id).single(),
    supabase.from('simulations').select('outcome, user_score, xp_earned, cases(title, domain)').eq('user_id', user_id),
    supabase.from('user_badges').select('earned_at, badges(name, icon_emoji, description)').eq('user_id', user_id)
  ])

  const sims = simulations.data || []
  const stats = {
    total_simulations: sims.length,
    wins:   sims.filter(s => s.outcome === 'win').length,
    losses: sims.filter(s => s.outcome === 'loss').length,
    draws:  sims.filter(s => s.outcome === 'draw').length,
    total_xp: sims.reduce((sum, s) => sum + (s.xp_earned || 0), 0)
  }

  res.json({
    profile:    profile.data,
    stats,
    badges:     badges.data || [],
    recent_simulations: sims.slice(0, 5)
  })
})

// ── LEADERBOARD ──
router.get('/leaderboard', async (req, res) => {
  const { data, error } = await supabase
    .from('leaderboard')
    .select('*')
    .limit(10)

  if (error) return res.status(400).json({ error: error.message })
  res.json(data)
})

module.exports = router