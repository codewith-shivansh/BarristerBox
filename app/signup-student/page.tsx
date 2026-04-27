"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function StudentSignUpPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [fullName, setFullName] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleSignup = async () => {
    if (!email || !password || !fullName) {
      setMessage("❌ Please fill in all fields.")
      return
    }
    if (password !== confirmPassword) {
      setMessage("❌ Passwords do not match.")
      return
    }
    setLoading(true)
    setMessage("")
    try {
      const { signup, login } = await import('../lib/api')
      const signupResult = await signup(email, password, fullName, "Law Student")
      if (signupResult.user_id) {
        const loginResult = await login(email, password)
        if (loginResult.token) {
          setMessage("✅ Account created! Redirecting to courtroom...")
          setTimeout(() => window.location.href = "/simulator", 1500)
        } else {
          setMessage("✅ Account created! Please login.")
          setTimeout(() => window.location.href = "/login", 1500)
        }
      } else {
        setMessage("❌ " + (signupResult.error || "Signup failed. Try a different email."))
      }
    } catch (err) {
      setMessage("❌ Something went wrong. Is your backend running?")
    }
    setLoading(false)
  }

  return (
    <main style={{ 
      minHeight: "100vh", 
      background: "#181a20", 
      color: "#fff", 
      fontFamily: "'Inter', sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      
      {/* Top Banner */}
      <div style={{ 
        width: "100%", maxWidth: "1200px", marginTop: "100px", padding: "0 24px"
      }}>
        <div style={{ 
          position: "relative", width: "100%", height: "280px", 
          borderRadius: "16px", overflow: "hidden",
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "0 60px", boxShadow: "0 15px 35px rgba(0,0,0,0.4)"
        }}>
          <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
             <Image src="/iso_courtroom.png" alt="Library Background" fill style={{ objectFit: 'cover' }} />
             <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(120,40,30,0.85) 0%, rgba(40,20,30,0.7) 100%)" }} />
          </div>
          <div style={{ position: "relative", zIndex: 1, maxWidth: "700px" }}>
            <h1 style={{ fontSize: "3.5rem", fontWeight: 700, margin: "0 0 16px 0", lineHeight: 1.1 }}>
              Unlock Your<br/>Student Potential
            </h1>
            <p style={{ fontSize: "1.2rem", margin: 0, color: "#e2e8f0", lineHeight: 1.5 }}>
              Access all cases, LexAI basic, Leaderboard + XP.<br/>
              Your journey to legal mastery begins here.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ 
        width: "100%", maxWidth: "1200px", padding: "40px 24px 80px",
        display: "flex", gap: "24px", alignItems: "flex-start", flexWrap: "wrap"
      }}>
        
        {/* Left Column */}
        <div style={{ flex: 2, display: "flex", flexDirection: "column", gap: "24px", minWidth: "350px" }}>
          
          {/* Create Account Card */}
          <div style={{ background: "#22252e", borderRadius: "12px", padding: "32px", border: "1px solid #333" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 600, margin: "0 0 24px 0" }}>
              Create Your Student Account
            </h2>

            {/* Message Box */}
            {message && (
              <div style={{ 
                padding: "12px 16px", borderRadius: "8px", marginBottom: "20px",
                background: message.startsWith("✅") ? "#14532d" : "#7f1d1d",
                border: `1px solid ${message.startsWith("✅") ? "#4ade80" : "#ef4444"}`,
                color: message.startsWith("✅") ? "#86efac" : "#fca5a5",
                fontSize: "0.95rem"
              }}>
                {message}
              </div>
            )}
            
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

              {/* Full Name */}
              <div>
                <label style={{ display: "block", marginBottom: "8px", color: "#e2e8f0", fontSize: "0.9rem" }}>
                  Student Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Lakshya Singh"
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                  style={{ 
                    width: "100%", padding: "14px 16px", borderRadius: "6px", 
                    border: "2px solid #86efac", background: "#fff", color: "#111", 
                    fontSize: "1rem", outline: "none", boxSizing: "border-box"
                  }}
                />
              </div>

              {/* Email */}
              <div>
                <label style={{ display: "block", marginBottom: "8px", color: "#e2e8f0", fontSize: "0.9rem" }}>
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@gmail.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  style={{ 
                    width: "100%", padding: "14px 16px", borderRadius: "6px", 
                    border: "1px solid #444", background: "#fff", color: "#111", 
                    fontSize: "1rem", outline: "none", boxSizing: "border-box"
                  }}
                />
              </div>

              {/* Password */}
              <div>
                <label style={{ display: "block", marginBottom: "8px", color: "#e2e8f0", fontSize: "0.9rem" }}>
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Minimum 6 characters"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  style={{ 
                    width: "100%", padding: "14px 16px", borderRadius: "6px", 
                    border: "1px solid #444", background: "#fff", color: "#111", 
                    fontSize: "1rem", outline: "none", marginBottom: "12px",
                    boxSizing: "border-box"
                  }}
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  style={{ 
                    width: "100%", padding: "14px 16px", borderRadius: "6px", 
                    border: "1px solid #444", background: "#fff", color: "#111", 
                    fontSize: "1rem", outline: "none", boxSizing: "border-box"
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSignup}
                disabled={loading}
                style={{ 
                  width: "100%", padding: "16px",
                  background: loading ? "#374151" : "linear-gradient(180deg, #fde047 0%, #eab308 100%)",
                  color: loading ? "#9ca3af" : "#422006",
                  fontSize: "1.1rem", fontWeight: "bold", border: "none",
                  borderRadius: "6px", cursor: loading ? "not-allowed" : "pointer",
                  marginTop: "8px", boxShadow: loading ? "none" : "0 4px 0 #ca8a04",
                  transition: "all 0.2s"
                }}
              >
                {loading ? "⚖️ Creating Account..." : "🎓 Create Account & Enter Courtroom"}
              </button>

              <div style={{ textAlign: "center", marginTop: "8px" }}>
                <Link href="/login" style={{ color: "#4ade80", textDecoration: "none", fontSize: "0.95rem" }}>
                  Already have an account? Log in
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column — Student Pack */}
        <div style={{ 
          flex: 1, minWidth: "300px", background: "#22252e", 
          borderRadius: "12px", padding: "32px", border: "1px solid #333", 
          display: "flex", flexDirection: "column", alignItems: "center" 
        }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 600, margin: "0 0 32px 0", textAlign: "center" }}>
            Your Student Pack
          </h2>
          
          <div style={{ 
            width: "200px", height: "200px", background: "#fde047", 
            borderRadius: "16px", position: "relative", marginBottom: "24px",
            boxShadow: "0 10px 20px rgba(0,0,0,0.5)"
          }}>
            <Image src="/student_char.png" alt="Student Pack" fill style={{ objectFit: 'contain', padding: "16px" }} />
          </div>

          <div style={{ fontSize: "2.5rem", fontWeight: 700, color: "#fde047", marginBottom: "32px", textAlign: "center" }}>
            Free <span style={{ fontSize: "1.2rem", color: "#eab308" }}>to start</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%", maxWidth: "260px" }}>
            {[
              "Access to all practice cases",
              "LexAI legal assistant",
              "Leaderboard + XP system",
              "AI judge + opponent battles",
              "Learning feedback after each round"
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ 
                  width: "20px", height: "20px", background: "#4ade80", 
                  borderRadius: "4px", display: "flex", alignItems: "center", 
                  justifyContent: "center", flexShrink: 0 
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span style={{ fontSize: "0.95rem", color: "#e2e8f0" }}>{item}</span>
              </div>
            ))}
          </div>

          {/* Quick test note */}
          <div style={{ 
            marginTop: "32px", padding: "16px", background: "#111827", 
            borderRadius: "8px", border: "1px solid #374151", width: "100%"
          }}>
            <div style={{ color: "#eab308", fontSize: "0.85rem", fontWeight: 600, marginBottom: "8px" }}>
              💡 Quick Start
            </div>
            <div style={{ color: "#9ca3af", fontSize: "0.82rem", lineHeight: 1.6 }}>
              After signing up you'll go straight to the courtroom simulator. Make sure your backend is running on port 3000!
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ 
        width: "100%", padding: "32px 64px", 
        display: "flex", justifyContent: "space-between", alignItems: "center", 
        background: "#1a1c23", borderTop: "1px solid #333" 
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", color: "#888", fontSize: "0.9rem" }}>
          <span style={{ color: "#e2e8f0", fontWeight: 600 }}>BarresterBox</span>
          <span>•</span>
          <span>AI-powered courtroom simulator</span>
          <span>•</span>
          <span>"Advisory only"</span>
        </div>
        <div style={{ display: "flex", gap: "24px", color: "#888", fontSize: "0.9rem" }}>
          <Link href="#" style={{ color: "#888", textDecoration: "none" }}>Terms</Link>
          <Link href="#" style={{ color: "#888", textDecoration: "none" }}>Privacy</Link>
          <Link href="#" style={{ color: "#888", textDecoration: "none" }}>Contact</Link>
        </div>
      </footer>
    </main>
  )
}