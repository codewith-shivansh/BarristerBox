const express = require('express')
const router = express.Router()
const supabase = require('../lib/supabase')
const { protect } = require('../lib/middleware')

// ── GET ALL CASES (public) ──
router.get('/', async (req, res) => {
  const { domain, difficulty } = req.query

  let query = supabase
    .from('cases')
    .select('id, title, domain, difficulty, key_issues, applicable_laws')
    .eq('is_active', true)

  if (domain)     query = query.eq('domain', domain)
  if (difficulty) query = query.eq('difficulty', difficulty)

  const { data, error } = await query

  if (error) return res.status(400).json({ error: error.message })
  res.json({ cases: data, count: data.length })
})

// ── GET ONE CASE (public) ──
router.get('/:id', async (req, res) => {
  const { data, error } = await supabase
    .from('cases')
    .select('*')
    .eq('id', req.params.id)
    .eq('is_active', true)
    .single()

  if (error) return res.status(404).json({ error: 'Case not found' })
  res.json(data)
})

module.exports = router