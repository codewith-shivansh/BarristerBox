const OpenAI = require('openai')
require('dotenv').config()

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: 'https://openrouter.ai/api/v1',
  defaultHeaders: {
    'HTTP-Referer': 'http://localhost:3000',
    'X-Title': 'BarresterBox'
  }
})

// Try these models in order — change this line if one fails
const MODEL = 'meta-llama/llama-3-8b-instruct'

module.exports = { client, MODEL }