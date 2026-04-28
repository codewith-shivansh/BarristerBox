"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function LexAIPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "⚖️ Namaste! I'm LexAI, your Indian legal assistant. Ask me anything about IPC sections, constitutional articles, landmark cases, or legal arguments. Remember: this is for learning only, not real legal advice!"
    }
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [sessionId, setSessionId] = useState<string | undefined>()
  const [error, setError] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSend = async () => {
    if (!inputMessage.trim() || loading) return

    const userMessage = inputMessage.trim()
    setInputMessage("")
    setError("")

    // Add user message immediately
    setMessages(prev => [...prev, { role: "user", content: userMessage }])
    setLoading(true)

    try {
      const token = localStorage.getItem("barresterbox_token")

      if (!token) {
        setError("Please login first to use LexAI!")
        setLoading(false)
        return
      }

      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'
      const res = await fetch(`${API_URL}/chat/query`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          message: userMessage,
          session_id: sessionId
        })
      })

      const data = await res.json()

      if (data.reply) {
        setMessages(prev => [...prev, { role: "assistant", content: data.reply }])
        setSessionId(data.session_id)
      } else {
        setError(data.error || "LexAI failed to respond. Try again.")
        // Remove the user message if AI failed
        setMessages(prev => prev.slice(0, -1))
      }
    } catch (err) {
      setError("Cannot connect to backend. Is it running on port 3000?")
      setMessages(prev => prev.slice(0, -1))
    }

    setLoading(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const quickQuestions = [
    "Explain IPC Section 302",
    "What is Article 21?",
    "Explain burden of proof",
    "What is habeas corpus?",
    "Explain Section 65B Evidence Act",
    "What is mens rea?"
  ]

  return (
    <main style={{
      minHeight: "100vh",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "100px 24px 60px",
      fontFamily: "'Inter', sans-serif"
    }}>

      {/* Background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image src="/iso_courtroom.png" alt="Courtroom Background" fill style={{ objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(10, 10, 15, 0.88)" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at top, transparent 0%, rgba(0,0,0,0.7) 100%)" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "960px", display: "flex", flexDirection: "column", gap: "24px" }}>

        {/* Header */}
        <div style={{ marginBottom: "8px" }}>
          <h1 className="pixel-font" style={{
            fontSize: "4rem",
            color: "#eab308",
            margin: "0 0 12px 0",
            textShadow: "3px 3px 0 #2a1c11, 0 8px 16px rgba(0,0,0,0.5)",
            letterSpacing: "1px"
          }}>
            ⚖️ LexAI: Legal Assistant
          </h1>
          <p className="pixel-font" style={{ fontSize: "1.5rem", color: "#e2e8f0", margin: 0, textShadow: "2px 2px 0 #000" }}>
            Ask anything about Indian law. Get instant explanations and argument suggestions.
          </p>
        </div>

        {/* Quick Questions */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {quickQuestions.map((q, i) => (
            <button
              key={i}
              onClick={() => setInputMessage(q)}
              style={{
                padding: "8px 16px",
                background: "rgba(234,179,8,0.1)",
                border: "1px solid rgba(234,179,8,0.3)",
                borderRadius: "20px",
                color: "#eab308",
                fontSize: "0.85rem",
                cursor: "pointer",
                transition: "all 0.2s",
                fontFamily: "'Inter', sans-serif"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(234,179,8,0.2)"
                e.currentTarget.style.borderColor = "#eab308"
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(234,179,8,0.1)"
                e.currentTarget.style.borderColor = "rgba(234,179,8,0.3)"
              }}
            >
              {q}
            </button>
          ))}
        </div>

        {/* Chat Window */}
        <div style={{
          background: "#111418",
          border: "2px solid #1f2937",
          borderRadius: "16px",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 20px 40px rgba(0,0,0,0.8)",
          overflow: "hidden",
          minHeight: "500px"
        }}>

          {/* Chat Header */}
          <div style={{
            padding: "16px 24px",
            borderBottom: "1px solid #1f2937",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "#0d0f12"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{
                width: "40px", height: "40px", background: "#1f2937",
                borderRadius: "10px", display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: "1.3rem"
              }}>⚖️</div>
              <div>
                <div style={{ fontWeight: 600, color: "#fff", fontSize: "1rem" }}>LexAI</div>
                <div style={{ color: "#4ade80", fontSize: "0.8rem", display: "flex", alignItems: "center", gap: "4px" }}>
                  <div style={{ width: "6px", height: "6px", background: "#4ade80", borderRadius: "50%" }}></div>
                  Indian Legal Assistant · Online
                </div>
              </div>
            </div>
            <div style={{ color: "#6b7280", fontSize: "0.8rem" }}>
              Session: {sessionId ? sessionId.slice(0, 8) + "..." : "New"}
            </div>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1,
            overflowY: "auto",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            minHeight: "380px",
            maxHeight: "480px"
          }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                display: "flex",
                justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                alignItems: "flex-end",
                gap: "10px"
              }}>

                {/* AI Avatar */}
                {msg.role === "assistant" && (
                  <div style={{
                    width: "32px", height: "32px", background: "#1f2937",
                    borderRadius: "8px", display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: "1rem", flexShrink: 0
                  }}>⚖️</div>
                )}

                {/* Message Bubble */}
                <div style={{
                  maxWidth: "75%",
                  padding: "14px 18px",
                  borderRadius: msg.role === "user"
                    ? "18px 18px 4px 18px"
                    : "18px 18px 18px 4px",
                  background: msg.role === "user"
                    ? "linear-gradient(135deg, #854d0e, #713f12)"
                    : "#1e2530",
                  border: msg.role === "user"
                    ? "1px solid #92400e"
                    : "1px solid #2d3748",
                  color: "#e2e8f0",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  whiteSpace: "pre-wrap"
                }}>
                  {msg.content}

                  {/* AI badge */}
                  {msg.role === "assistant" && (
                    <div style={{
                      marginTop: "8px",
                      paddingTop: "8px",
                      borderTop: "1px solid #2d3748",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center"
                    }}>
                      <span style={{
                        background: "#14532d", color: "#86efac",
                        padding: "2px 8px", borderRadius: "4px",
                        fontSize: "0.7rem", fontWeight: 600
                      }}>LexAI</span>
                      <span style={{ color: "#4b5563", fontSize: "0.75rem" }}>
                        ⚠️ Learning only · Not legal advice
                      </span>
                    </div>
                  )}
                </div>

                {/* User Avatar */}
                {msg.role === "user" && (
                  <div style={{
                    width: "32px", height: "32px", background: "#854d0e",
                    borderRadius: "8px", display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: "1rem", flexShrink: 0
                  }}>🎓</div>
                )}
              </div>
            ))}

            {/* Loading indicator */}
            {loading && (
              <div style={{ display: "flex", alignItems: "flex-end", gap: "10px" }}>
                <div style={{
                  width: "32px", height: "32px", background: "#1f2937",
                  borderRadius: "8px", display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: "1rem"
                }}>⚖️</div>
                <div style={{
                  padding: "14px 18px", background: "#1e2530",
                  border: "1px solid #2d3748", borderRadius: "18px 18px 18px 4px"
                }}>
                  <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                    {[0, 1, 2].map(i => (
                      <div key={i} style={{
                        width: "8px", height: "8px", background: "#eab308",
                        borderRadius: "50%",
                        animation: `bounce 1s infinite ${i * 0.2}s`
                      }}></div>
                    ))}
                    <span style={{ color: "#6b7280", fontSize: "0.85rem", marginLeft: "8px" }}>
                      LexAI is thinking...
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Error message */}
            {error && (
              <div style={{
                padding: "12px 16px",
                background: "#7f1d1d",
                border: "1px solid #ef4444",
                borderRadius: "8px",
                color: "#fca5a5",
                fontSize: "0.9rem"
              }}>
                ❌ {error}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div style={{
            padding: "20px 24px",
            borderTop: "1px solid #1f2937",
            background: "#0d0f12"
          }}>
            <div style={{
              background: "#1a1d24",
              border: "1px solid #2d3748",
              borderRadius: "12px",
              padding: "12px 16px",
              display: "flex",
              alignItems: "flex-end",
              gap: "12px"
            }}>
              <textarea
                value={inputMessage}
                onChange={e => setInputMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask LexAI a legal question... (Enter to send, Shift+Enter for new line)"
                disabled={loading}
                rows={2}
                style={{
                  flex: 1,
                  background: "transparent",
                  border: "none",
                  color: "#fff",
                  fontSize: "1rem",
                  outline: "none",
                  resize: "none",
                  fontFamily: "'Inter', sans-serif",
                  lineHeight: 1.6
                }}
              />
              <button
                onClick={handleSend}
                disabled={loading || !inputMessage.trim()}
                style={{
                  width: "44px", height: "44px",
                  background: loading || !inputMessage.trim() ? "#374151" : "#eab308",
                  border: "none", borderRadius: "10px",
                  cursor: loading || !inputMessage.trim() ? "not-allowed" : "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, transition: "all 0.2s"
                }}
              >
                {loading ? (
                  <span style={{ fontSize: "1.2rem" }}>⏳</span>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={inputMessage.trim() ? "#111" : "#6b7280"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                )}
              </button>
            </div>
            <div style={{ color: "#4b5563", fontSize: "0.75rem", marginTop: "8px", textAlign: "center" }}>
              ⚠️ LexAI is for educational purposes only. Not real legal advice. · Press Enter to send
            </div>
          </div>
        </div>

        {/* Advanced Features */}
        <div style={{
          background: "#111418",
          border: "2px solid #1f2937",
          borderRadius: "16px",
          padding: "24px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.6)"
        }}>
          <h3 style={{ color: "#e2e8f0", fontSize: "1.1rem", margin: "0 0 20px 0", fontWeight: 600 }}>
            ⚡ Advanced Features
          </h3>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {[
              { icon: "🔨", title: "Generate Argument", subtitle: "Build case arguments", href: "/generate-arguments" },
              { icon: "📜", title: "Find Precedent", subtitle: "Search landmark cases", action: () => setInputMessage("Find relevant precedents for murder cases under IPC Section 302") },
              { icon: "⚔️", title: "Opponent View", subtitle: "Counter-argument prep", action: () => setInputMessage("What arguments would the prosecution make in a theft case?") }
            ].map((feature, i) => (
              feature.href ? (
                <Link key={i} href={feature.href} style={{
                  flex: 1, minWidth: "200px", background: "#1a1d24",
                  border: "1px solid #2d3748", borderRadius: "10px",
                  padding: "16px", display: "flex", alignItems: "center",
                  gap: "16px", textDecoration: "none", transition: "all 0.2s"
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = "#eab308"}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "#2d3748"}
                >
                  <div style={{
                    width: "48px", height: "48px", background: "#111827",
                    border: "1px solid #374151", borderRadius: "10px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.5rem"
                  }}>{feature.icon}</div>
                  <div>
                    <div style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "0.95rem" }}>{feature.title}</div>
                    <div style={{ color: "#6b7280", fontSize: "0.8rem", marginTop: "2px" }}>{feature.subtitle}</div>
                  </div>
                </Link>
              ) : (
                <button key={i} onClick={feature.action}
                  style={{
                    flex: 1, minWidth: "200px", background: "#1a1d24",
                    border: "1px solid #2d3748", borderRadius: "10px",
                    padding: "16px", display: "flex", alignItems: "center",
                    gap: "16px", cursor: "pointer", transition: "all 0.2s",
                    fontFamily: "'Inter', sans-serif"
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = "#eab308"}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "#2d3748"}
                >
                  <div style={{
                    width: "48px", height: "48px", background: "#111827",
                    border: "1px solid #374151", borderRadius: "10px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.5rem"
                  }}>{feature.icon}</div>
                  <div style={{ textAlign: "left" }}>
                    <div style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "0.95rem" }}>{feature.title}</div>
                    <div style={{ color: "#6b7280", fontSize: "0.8rem", marginTop: "2px" }}>{feature.subtitle}</div>
                  </div>
                </button>
              )
            ))}
          </div>
        </div>

        {/* Not logged in warning */}
        <div style={{
          background: "#111827",
          border: "1px solid #374151",
          borderRadius: "10px",
          padding: "16px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <span style={{ color: "#9ca3af", fontSize: "0.9rem" }}>
            🔐 Not logged in? You need an account to use LexAI.
          </span>
          <Link href="/signup-student" style={{
            padding: "8px 20px", background: "#eab308", color: "#111",
            borderRadius: "6px", textDecoration: "none",
            fontWeight: 600, fontSize: "0.9rem"
          }}>
            Sign Up Free
          </Link>
        </div>

      </div>

      {/* Bounce animation */}
      <style>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-8px); }
        }
      `}</style>
    </main>
  )
}