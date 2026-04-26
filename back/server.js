require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()

// ── Middleware ──
app.use(cors())
app.use(express.json())

// ── Routes ──
app.use('/auth',       require('./routes/auth'))
app.use('/cases',      require('./routes/cases'))
app.use('/simulation', require('./routes/simulation'))
app.use('/learning',   require('./routes/learning'))
app.use('/chat',       require('./routes/chat'))
app.use('/progress',   require('./routes/progress'))

// ── Health Check ──
app.get('/', (req, res) => {
  res.json({
    message: '⚖️ BarresterBox API is LIVE!',
    version: '1.0.0',
    status: 'running',
    disclaimer: 'This is a learning tool. Not real legal advice.'
  })
})

// test route to verify AI integration is working
app.get('/test-ai', async (req, res) => {
  const { client, MODEL } = require('./lib/ai')
  try {
    const completion = await client.chat.completions.create({
      model: MODEL,
      messages: [{ role: 'user', content: 'Say hello in exactly 5 words' }]
    })
    res.json({
      success: true,
      model: MODEL,
      reply: completion.choices[0].message.content,
      key_prefix: process.env.OPENROUTER_API_KEY?.slice(0, 15) + '...'
    })
  } catch (err) {
    res.json({
      success: false,
      error: err.message,
      key_prefix: process.env.OPENROUTER_API_KEY?.slice(0, 15) + '...'
    })
  }
})

// ── 404 Handler ──
app.use((req, res) => {
  res.status(404).json({ error: '🏛️ This courtroom door does not exist.' })
})

// ── Global Error Handler ──
app.use((err, req, res, next) => {
  console.error('Server Error:', err)
  res.status(500).json({ error: 'Something went wrong on our end.' })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`🏛️  BarresterBox Backend running on http://localhost:${PORT}`)
  console.log(`⚖️  Supabase connected: ${process.env.SUPABASE_URL}`)
})