const { createClient } = require('@supabase/supabase-js')
require('dotenv').config()

const supabaseAuth = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
)

const protect = async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: '🔒 No token. Please login first.' })
  }

  const token = authHeader.split(' ')[1]

  const { data: { user }, error } = await supabaseAuth.auth.getUser(token)

  if (error || !user) {
    return res.status(401).json({ error: '🔒 Invalid or expired token.' })
  }

  req.user = user  // attach user to request
  next()
}

module.exports = { protect }