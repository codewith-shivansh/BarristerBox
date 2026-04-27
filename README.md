# ⚖️ BarristerBox

**BarristerBox** is an AI-powered legal simulation platform where users can practice courtroom arguments, receive real-time feedback, and improve their legal reasoning skills.

> 🚀 Built for students, aspiring lawyers, and anyone interested in understanding legal argumentation.

---

## 🌟 Features

* ⚔️ **Courtroom Simulation**

  * Argue real legal cases against an AI opponent
  * Structured rounds with argument submission

* 🤖 **AI Opponent**

  * Responds intelligently to your arguments
  * Challenges weak reasoning and highlights gaps

* 🧑‍⚖️ **Judge Insights**

  * Evaluates performance
  * Provides strengths, weaknesses, and suggestions

* 📚 **Learning Mode**

  * Personalized feedback based on your arguments
  * Tracks improvement over time

* 💬 **LexAI Assistant**

  * Ask legal questions instantly
  * Get simplified explanations of laws and concepts

* 📊 **Progress Tracking**

  * Monitor performance and growth
  * Leaderboard (competitive learning)

---

## 🏗️ Tech Stack

### Frontend

* Next.js (App Router)
* React
* Tailwind / Custom Styling

### Backend

* Node.js
* Express.js
* Supabase (Database + Auth)

### AI Integration

* OpenRouter API
* LLaMA / Auto models

---

## ⚙️ Project Structure

```
BarristerBox/
├── app/        # Frontend (Next.js)
├── back/       # Backend (Express API)
├── public/     # Assets
└── README.md
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repo

```bash
git clone https://github.com/your-username/BarristerBox.git
cd BarristerBox
```

---

### 2️⃣ Setup Backend

```bash
cd back
npm install
```

Create `.env` file:

```env
PORT=8000
SUPABASE_URL=your_url
SUPABASE_KEY=your_key
OPENROUTER_API_KEY=your_key
```

Run backend:

```bash
npm run dev
```

👉 Backend runs on:
`http://localhost:8000`

---

### 3️⃣ Setup Frontend

```bash
cd ..
npm install
npm run dev
```

👉 Frontend runs on:
`http://localhost:3000`

---

## 🔌 API Endpoints

### Auth

* `POST /auth/signup`
* `POST /auth/login`

### Cases

* `GET /cases`

### Simulation

* `POST /simulation/start`
* `POST /simulation/argue`
* `POST /simulation/end`
* `GET /simulation/history`

### Learning

* `GET /learning`

### Chat (LexAI)

* `POST /chat`

### Progress

* `GET /progress`

---

## 🧪 Testing Flow

1. Signup → Login → Copy Token
2. Get cases → Copy case_id
3. Start simulation → Copy simulation_id
4. Submit argument
5. End simulation
6. Check history, feedback, progress

---

## 🧠 How It Works

1. User submits argument
2. Backend sends it to AI model
3. AI generates:

   * Opponent response
   * Judge feedback
4. Results stored in database
5. Frontend displays insights

---

## 📌 Disclaimer

This is a **learning tool only**.
It does **not provide real legal advice**.

---

## 👨‍💻 Author

Built by Shivansh kumar and Lakshyaa singh @lakshucodes

---

## 💡 Future Improvements

* Real-time chat UI (streaming responses)
* Advanced judge scoring system
* Multiplayer courtroom battles
* Case difficulty levels
* Voice-based arguments

---

## ⭐ Support

If you like this project:

* Star ⭐ the repo
* Share it with others
* Contribute!

---
