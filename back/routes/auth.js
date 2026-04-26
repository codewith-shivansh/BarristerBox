const express = require('express')
const router = express.Router()
const supabase = require('../lib/supabase')
const { protect } = require('../lib/middleware')

// ── SIGNUP ──
router.post('/signup', async (req, res) => {
  const { email, password, full_name, college } = req.body

  if (!email || !password || !full_name) {
    return res.status(400).json({ error: 'Email, password and name are required.' })
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name, college }
    }
  })

  if (error) return res.status(400).json({ error: error.message })

  res.json({
    message: '✅ Signup successful! Check your email to verify.',
    user_id: data.user?.id
  })
})

// ── LOGIN ──
router.post('/login', async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' })
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) return res.status(400).json({ error: error.message })

  res.json({
    message: '✅ Login successful!',
    token: data.session.access_token,   // frontend saves this
    user: {
      id: data.user.id,
      email: data.user.email,
      full_name: data.user.user_metadata?.full_name
    }
  })
})

// ── GET MY PROFILE (protected) ──
router.get('/profile', protect, async (req, res) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', req.user.id)
    .single()

  if (error) return res.status(404).json({ error: 'Profile not found' })
  res.json(data)
})

// ── UPDATE PROFILE (protected) ──
router.put('/profile', protect, async (req, res) => {
  const { full_name, college } = req.body

  const { data, error } = await supabase
    .from('profiles')
    .update({ full_name, college })
    .eq('id', req.user.id)
    .select()
    .single()

  if (error) return res.status(400).json({ error: error.message })
  res.json({ message: '✅ Profile updated!', profile: data })
})

module.exports = router