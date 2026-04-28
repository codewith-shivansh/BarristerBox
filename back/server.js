require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()

// ── Middleware ──
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:8000',
    'https://barrister-box.vercel.app',      // ← your Vercel URL
    'https://barristerbox.vercel.app',        // ← any other Vercel URLs
  ],
  credentials: true
}))
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
    disclaimer: 'This is a learning tool. Not real legal advice.',
    routes: {
      auth:       ['POST /auth/signup', 'POST /auth/login', 'GET /auth/profile'],
      cases:      ['GET /cases', 'GET /cases/:id'],
      simulation: ['POST /simulation/start', 'POST /simulation/argue', 'POST /simulation/end', 'GET /simulation/my'],
      learning:   ['GET /learning/my', 'GET /learning/simulation/:id'],
      chat:       ['POST /chat/query', 'GET /chat/sessions', 'GET /chat/sessions/:id'],
      progress:   ['GET /progress/me', 'GET /progress/leaderboard']
    }
  })
})

// ── Test AI Route ──
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
  res.status(404).json({
    error: '🏛️ This courtroom door does not exist.',
    hint: 'Check GET / for all available routes'
  })
})

// ── Global Error Handler ──
app.use((err, req, res, next) => {
  console.error('Server Error:', err)
  res.status(500).json({ error: 'Something went wrong on our end.' })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`🏛️  BarresterBox Backend running on http://localhost:${PORT}`)
  console.log(`⚖️  Supabase: ${process.env.SUPABASE_URL}`)
  console.log(`🤖  AI Model: ${process.env.OPENROUTER_API_KEY ? 'OpenRouter connected' : '⚠️ No API key found'}`)
  console.log(`📋  Routes: /auth /cases /simulation /learning /chat /progress`)
})