const API_URL = 'http://localhost:8000'

// Get token from localStorage
export const getToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('barresterbox_token')
  }
  return null
}

// Save token after login
export const saveToken = (token: string) => {
  localStorage.setItem('barresterbox_token', token)
}

// Auth headers
export const authHeaders = () => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${getToken()}`
})

// ── AUTH ──
export const signup = async (email: string, password: string, full_name: string, college: string) => {
  const res = await fetch(`${API_URL}/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, full_name, college })
  })
  return res.json()
}

export const login = async (email: string, password: string) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })
  const data = await res.json()
  if (data.token) saveToken(data.token)
  return data
}

// ── CASES ──
export const getCases = async () => {
  const res = await fetch(`${API_URL}/cases`)
  return res.json()
}

// ── SIMULATION ──
export const startSimulation = async (case_id: string) => {
  const res = await fetch(`${API_URL}/simulation/start`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify({ case_id })
  })
  return res.json()
}

export const submitArgument = async (
  simulation_id: string,
  user_argument: string,
  round_number: number
) => {
  const res = await fetch(`${API_URL}/simulation/argue`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify({ simulation_id, user_argument, round_number })
  })
  return res.json()
}

export const endSimulation = async (simulation_id: string) => {
  const res = await fetch(`${API_URL}/simulation/end`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify({ simulation_id })
  })
  return res.json()
}

// ── CHAT ──
export const askLexAI = async (message: string, session_id?: string) => {
  const res = await fetch(`${API_URL}/chat/query`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify({ message, session_id })
  })
  return res.json()
}

// ── PROGRESS ──
export const getProgress = async () => {
  const res = await fetch(`${API_URL}/progress/me`, {
    headers: authHeaders()
  })
  return res.json()
}