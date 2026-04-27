"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleLogin = async () => {
    if (!email || !password) {
      setMessage("❌ Please fill in all fields.")
      return
    }
    setLoading(true)
    setMessage("")
    try {
      const { login } = await import('../lib/api')
      const result = await login(email, password)
      if (result.token) {
        setMessage("✅ Login successful! Redirecting to courtroom...")
        setTimeout(() => window.location.href = "/simulator", 1500)
      } else {
        setMessage("❌ " + (result.error || "Login failed. Check your email and password."))
      }
    } catch (err) {
      setMessage("❌ Something went wrong. check your connection and try again.")
    }
    setLoading(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleLogin()
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
            <Image src="/iso_courtroom.png" alt="Courtroom Background" fill style={{ objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(20,50,30,0.9) 0%, rgba(10,30,20,0.7) 100%)" }} />
          </div>
          <div style={{ position: "relative", zIndex: 1, maxWidth: "700px" }}>
            <h1 style={{ fontSize: "3.5rem", fontWeight: 700, margin: "0 0 16px 0", lineHeight: 1.1 }}>
              Welcome Back,<br />Counsellor ⚖️
            </h1>
            <p style={{ fontSize: "1.2rem", margin: 0, color: "#e2e8f0", lineHeight: 1.5 }}>
              The courtroom is waiting. Log in to continue<br />your legal journey.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{
        width: "100%", maxWidth: "1200px", padding: "40px 24px 80px",
        display: "flex", gap: "24px", alignItems: "flex-start", flexWrap: "wrap"
      }}>

        {/* Left Column — Login Form */}
        <div style={{ flex: 2, display: "flex", flexDirection: "column", gap: "24px", minWidth: "350px" }}>

          <div style={{ background: "#22252e", borderRadius: "12px", padding: "32px", border: "1px solid #333" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 600, margin: "0 0 8px 0" }}>
              Login to Your Account
            </h2>
            <p style={{ color: "#6b7280", fontSize: "0.9rem", margin: "0 0 24px 0" }}>
              Enter your credentials to access the courtroom simulator
            </p>

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
                  onKeyDown={handleKeyDown}
                  style={{
                    width: "100%", padding: "14px 16px", borderRadius: "6px",
                    border: "2px solid #86efac", background: "#fff", color: "#111",
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
                  placeholder="Your password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  onKeyDown={handleKeyDown}
                  style={{
                    width: "100%", padding: "14px 16px", borderRadius: "6px",
                    border: "1px solid #444", background: "#fff", color: "#111",
                    fontSize: "1rem", outline: "none", boxSizing: "border-box"
                  }}
                />
              </div>

              {/* Login Button */}
              <button
                onClick={handleLogin}
                disabled={loading}
                style={{
                  width: "100%", padding: "16px",
                  background: loading
                    ? "#374151"
                    : "linear-gradient(180deg, #fde047 0%, #eab308 100%)",
                  color: loading ? "#9ca3af" : "#422006",
                  fontSize: "1.1rem", fontWeight: "bold", border: "none",
                  borderRadius: "6px", cursor: loading ? "not-allowed" : "pointer",
                  marginTop: "8px",
                  boxShadow: loading ? "none" : "0 4px 0 #ca8a04",
                  transition: "all 0.2s",
                  fontFamily: "'Inter', sans-serif"
                }}
              >
                {loading ? "⚖️ Logging in..." : "⚔️ Enter the Courtroom"}
              </button>

              {/* Divider */}
              <div style={{
                display: "flex", alignItems: "center", gap: "12px",
                margin: "8px 0"
              }}>
                <div style={{ flex: 1, height: "1px", background: "#374151" }} />
                <span style={{ color: "#6b7280", fontSize: "0.85rem" }}>or</span>
                <div style={{ flex: 1, height: "1px", background: "#374151" }} />
              </div>

              {/* Signup Link */}
              <div style={{ textAlign: "center" }}>
                <span style={{ color: "#9ca3af", fontSize: "0.95rem" }}>
                  Don't have an account?{" "}
                </span>
                <Link href="/signup-student" style={{
                  color: "#4ade80", textDecoration: "none",
                  fontWeight: 600, fontSize: "0.95rem"
                }}>
                  Sign up free →
                </Link>
              </div>
            </div>
          </div>

          {/* Hint Box */}
          <div style={{
            background: "#111827", borderRadius: "10px", padding: "20px",
            border: "1px solid #1f2937"
          }}>
            <div style={{ color: "#eab308", fontSize: "0.85rem", fontWeight: 600, marginBottom: "10px" }}>
              💡 Having trouble logging in?
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {[
                "Check that you used the same email you signed up with",
                "Password is case-sensitive"
              ].map((hint, i) => (
                <div key={i} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                  <span style={{ color: "#4b5563", fontSize: "0.8rem", marginTop: "1px" }}>→</span>
                  <span style={{ color: "#6b7280", fontSize: "0.82rem", lineHeight: 1.5 }}>{hint}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column — Student Pack (same as signup) */}
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
            <Image src="/student_char.png" alt="Student Pack" fill style={{ objectFit: "contain", padding: "16px" }} />
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

          {/* Back to simulation */}
          <div style={{
            marginTop: "32px", padding: "16px", background: "#111827",
            borderRadius: "8px", border: "1px solid #374151", width: "100%"
          }}>
            <div style={{ color: "#eab308", fontSize: "0.85rem", fontWeight: 600, marginBottom: "8px" }}>
              ⚔️ Quick Access
            </div>
            <div style={{ color: "#9ca3af", fontSize: "0.82rem", lineHeight: 1.6, marginBottom: "12px" }}>
              After logging in you'll go straight to the courtroom simulator.
            </div>
            <Link href="/simulator" style={{
              display: "block", textAlign: "center",
              padding: "10px", background: "#1f2937",
              color: "#9ca3af", border: "1px solid #374151",
              borderRadius: "6px", textDecoration: "none",
              fontSize: "0.85rem", transition: "all 0.2s"
            }}>
              → Go to Simulator directly
            </Link>
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