const express = require('express')
const router = express.Router()
const supabase = require('../lib/supabase')
const { protect } = require('../lib/middleware')

// ── GET MY LEARNING HISTORY ──
router.get('/my', protect, async (req, res) => {
  const { data, error } = await supabase
    .from('learning_logs')
    .select('*, simulation_rounds(user_argument, judge_verdict)')
    .eq('user_id', req.user.id)
    .order('created_at', { ascending: false })
    .limit(20)

  if (error) return res.status(400).json({ error: error.message })
  res.json(data)
})

// ── GET FEEDBACK FOR ONE SIMULATION ──
router.get('/simulation/:simulation_id', protect, async (req, res) => {
  const { data, error } = await supabase
    .from('learning_logs')
    .select('*')
    .eq('simulation_id', req.params.simulation_id)
    .eq('user_id', req.user.id)

  if (error) return res.status(400).json({ error: error.message })
  res.json(data)
})

module.exports = router