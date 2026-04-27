"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { startSimulation, submitArgument, endSimulation, getCases, getToken } from "../lib/api";

interface Judge { reaction: string; reasoning: string }
interface Learning { strength: string; mistake: string; improved_argument: string; relevant_law: string }
interface RoundResult {
  opponent: string
  judge: Judge
  learning: Learning
  round_score: number
  round_number: number
}

export default function SimulatorPage() {
  const [cases, setCases] = useState<any[]>([])
  const [selectedCase, setSelectedCase] = useState<any>(null)
  const [simulationId, setSimulationId] = useState<string | null>(null)
  const [userArgument, setUserArgument] = useState("")
  const [roundNumber, setRoundNumber] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<RoundResult | null>(null)
  const [totalScore, setTotalScore] = useState(0)
  const [gamePhase, setGamePhase] = useState<"select" | "briefing" | "battle" | "ended">("select")
  const [error, setError] = useState("")
  const [pendingCase, setPendingCase] = useState<any>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    getCases().then(data => {
      if (data.cases) setCases(data.cases)
    })
  }, [])

  // When user clicks a case → show briefing first
  const handleSelectCase = (caseItem: any) => {
    if (!getToken()) {
      setError("Please login first!")
      return
    }
    setPendingCase(caseItem)
    setGamePhase("briefing")
    setError("")
  }

  // After reading briefing → actually start simulation
  const handleEnterCourtroom = async () => {
    setIsLoading(true)
    setError("")
    const data = await startSimulation(pendingCase.id)
    setIsLoading(false)
    if (data.simulation_id) {
      setSimulationId(data.simulation_id)
      setSelectedCase(pendingCase)
      setGamePhase("battle")
    } else {
      setError(data.error || "Failed to start. Try again.")
    }
  }

  const handleSubmitArgument = async () => {
    if (!userArgument.trim() || !simulationId) return
    setIsLoading(true)
    setError("")
    setResult(null)

    const data = await submitArgument(simulationId, userArgument, roundNumber)
    setIsLoading(false)

    if (data.opponent) {
      setResult({ ...data, round_number: roundNumber })
      setTotalScore(prev => prev + (data.round_score || 0))
      setRoundNumber(prev => prev + 1)
      setUserArgument("")
    } else {
      setError(data.error || "AI failed to respond. Try again.")
    }
  }

  const handleEndSimulation = async () => {
    if (!simulationId) return
    setIsLoading(true)
    await endSimulation(simulationId)
    setIsLoading(false)
    setGamePhase("ended")
  }

  const verdictColor = (r: string) =>
    r === "accepted" ? "#4ade80" : r === "doubted" ? "#facc15" : "#ef4444"
  const verdictEmoji = (r: string) =>
    r === "accepted" ? "✅" : r === "doubted" ? "⚠️" : "❌"

  // ── CASE SELECTION SCREEN ──
  if (gamePhase === "select") {
    return (
      <div style={{
        minHeight: "100vh", background: "#0d0d0f",
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", padding: "120px 24px 60px",
        fontFamily: "'Inter', sans-serif"
      }}>
        <h1 className="pixel-font" style={{
          fontSize: "3.5rem", color: "#eab308", marginBottom: "8px",
          textShadow: "3px 3px 0 #000", textAlign: "center"
        }}>⚖️ Choose Your Case</h1>
        <p style={{ color: "#9ca3af", marginBottom: "48px", fontSize: "1.1rem" }}>
          Select a case to receive your briefing before entering the courtroom
        </p>

        {error && (
          <div style={{
            background: "#7f1d1d", border: "1px solid #ef4444",
            borderRadius: "8px", padding: "16px 24px", marginBottom: "24px",
            color: "#fca5a5", maxWidth: "600px", width: "100%", textAlign: "center"
          }}>{error}</div>
        )}

        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", justifyContent: "center", maxWidth: "960px" }}>
          {cases.map((c) => (
            <div key={c.id} onClick={() => handleSelectCase(c)}
              style={{
                background: "#1e1e24", border: "2px solid #1f2937",
                borderRadius: "16px", padding: "32px", width: "280px",
                cursor: "pointer", transition: "all 0.2s",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "#eab308"
                e.currentTarget.style.transform = "translateY(-4px)"
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "#1f2937"
                e.currentTarget.style.transform = "translateY(0)"
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "16px" }}>
                {c.domain === "criminal" ? "⚔️" : c.domain === "constitutional" ? "📜" : "⚖️"}
              </div>
              <h3 style={{ color: "#fff", fontSize: "1.2rem", marginBottom: "12px", lineHeight: 1.3 }}>
                {c.title}
              </h3>
              <p style={{ color: "#9ca3af", fontSize: "0.9rem", marginBottom: "20px", lineHeight: 1.6 }}>
                {c.facts?.slice(0, 100)}...
              </p>
              <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
                <span style={{
                  background: "#1f2937", border: "1px solid #374151",
                  borderRadius: "4px", padding: "4px 10px", color: "#9ca3af",
                  fontSize: "0.8rem", textTransform: "capitalize"
                }}>{c.domain}</span>
                <span style={{
                  background: c.difficulty === "beginner" ? "#14532d" : "#78350f",
                  borderRadius: "4px", padding: "4px 10px", color: "#fff",
                  fontSize: "0.8rem", textTransform: "capitalize"
                }}>{c.difficulty}</span>
              </div>
              <div style={{
                width: "100%", padding: "12px", background: "#eab308",
                color: "#111", border: "none", borderRadius: "8px",
                fontWeight: 700, fontSize: "1rem", textAlign: "center"
              }}>
                📋 View Case Briefing →
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "32px", color: "#6b7280", fontSize: "0.9rem" }}>
          Not logged in? <Link href="/signup-student" style={{ color: "#eab308" }}>Sign up here</Link>
        </div>
      </div>
    )
  }

  // ── CASE BRIEFING SCREEN ──
  if (gamePhase === "briefing" && pendingCase) {
    return (
      <div style={{
        minHeight: "100vh", background: "#0d0d0f",
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", padding: "40px 24px",
        fontFamily: "'Inter', sans-serif", position: "relative"
      }}>

        {/* Background */}
        <div style={{ position: "fixed", inset: 0, zIndex: 0 }}>
          <Image src="/iso_courtroom.png" alt="Courtroom" fill style={{ objectFit: "cover", opacity: 0.1 }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(5,5,8,0.92)" }} />
        </div>

        <div style={{
          position: "relative", zIndex: 1,
          width: "100%", maxWidth: "860px",
          display: "flex", flexDirection: "column", gap: "0"
        }}>

          {/* TOP BANNER */}
          <div style={{
            background: "linear-gradient(135deg, #78350f, #451a03)",
            border: "2px solid #92400e",
            borderBottom: "none",
            borderRadius: "16px 16px 0 0",
            padding: "24px 40px",
            display: "flex", alignItems: "center", justifyContent: "space-between"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ fontSize: "2.5rem" }}>📋</span>
              <div>
                <div style={{ color: "#fbbf24", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "4px" }}>
                  CASE BRIEFING
                </div>
                <h1 style={{ color: "#fff", fontSize: "1.8rem", fontWeight: 700, margin: 0, lineHeight: 1.2 }}>
                  {pendingCase.title}
                </h1>
              </div>
            </div>
            <div style={{
              background: "rgba(0,0,0,0.3)", border: "1px solid #92400e",
              borderRadius: "8px", padding: "8px 16px", textAlign: "center"
            }}>
              <div style={{ color: "#fbbf24", fontSize: "0.75rem", marginBottom: "2px" }}>DIFFICULTY</div>
              <div style={{ color: "#fff", fontWeight: 700, textTransform: "capitalize" }}>
                {pendingCase.difficulty}
              </div>
            </div>
          </div>

          {/* MAIN BRIEFING CONTENT */}
          <div style={{
            background: "#111418",
            border: "2px solid #1f2937",
            borderTop: "none",
            padding: "40px",
            display: "flex", flexDirection: "column", gap: "28px"
          }}>

            {/* Case Facts */}
            <div>
              <div style={{
                display: "flex", alignItems: "center", gap: "10px",
                marginBottom: "16px", paddingBottom: "12px",
                borderBottom: "1px solid #1f2937"
              }}>
                <span style={{ fontSize: "1.3rem" }}>📁</span>
                <h2 style={{ color: "#eab308", fontSize: "1.1rem", fontWeight: 700, margin: 0, letterSpacing: "1px" }}>
                  CASE FACTS
                </h2>
              </div>
              <p style={{
                color: "#e2e8f0", fontSize: "1.05rem", lineHeight: 1.8,
                margin: 0, padding: "16px 20px",
                background: "#0d0f12", borderRadius: "8px",
                border: "1px solid #1f2937"
              }}>
                {pendingCase.facts}
              </p>
            </div>

            {/* Two column: Your Role + Opponent Role */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>

              {/* Your Role */}
              <div style={{
                background: "linear-gradient(135deg, #14532d22, #052e1622)",
                border: "2px solid #166534",
                borderRadius: "12px", padding: "24px"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                  <div style={{
                    width: "40px", height: "40px", background: "#14532d",
                    borderRadius: "10px", display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: "1.3rem"
                  }}>🎓</div>
                  <div>
                    <div style={{ color: "#4ade80", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "1px" }}>YOUR ROLE</div>
                    <div style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem" }}>Defence Counsel</div>
                  </div>
                </div>
                <p style={{ color: "#86efac", fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>
                  You are the <strong>defence lawyer</strong>. Your job is to protect your client and challenge the prosecution's case. Raise doubts, cite legal precedents, and argue for your client's innocence.
                </p>
                <div style={{
                  marginTop: "16px", padding: "12px 16px",
                  background: "#14532d", borderRadius: "8px"
                }}>
                  <div style={{ color: "#4ade80", fontSize: "0.8rem", fontWeight: 600, marginBottom: "4px" }}>
                    🎯 YOUR GOAL
                  </div>
                  <div style={{ color: "#86efac", fontSize: "0.9rem" }}>
                    Create reasonable doubt. Challenge evidence. Protect your client.
                  </div>
                </div>
              </div>

              {/* Opponent Role */}
              <div style={{
                background: "linear-gradient(135deg, #7f1d1d22, #45051022)",
                border: "2px solid #991b1b",
                borderRadius: "12px", padding: "24px"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                  <div style={{
                    width: "40px", height: "40px", background: "#7f1d1d",
                    borderRadius: "10px", display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: "1.3rem"
                  }}>⚔️</div>
                  <div>
                    <div style={{ color: "#fca5a5", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "1px" }}>AI OPPONENT</div>
                    <div style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem" }}>Prosecution Counsel</div>
                  </div>
                </div>
                <p style={{ color: "#fca5a5", fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>
                  The <strong>AI prosecution</strong> will counter every argument you make. It will cite evidence, present witnesses, and try to prove guilt beyond reasonable doubt.
                </p>
                <div style={{
                  marginTop: "16px", padding: "12px 16px",
                  background: "#7f1d1d", borderRadius: "8px"
                }}>
                  <div style={{ color: "#fca5a5", fontSize: "0.8rem", fontWeight: 600, marginBottom: "4px" }}>
                    ⚠️ OPPONENT STRATEGY
                  </div>
                  <div style={{ color: "#fecaca", fontSize: "0.9rem" }}>
                    Will use evidence, precedents, and logical arguments against you.
                  </div>
                </div>
              </div>
            </div>

            {/* Judge Info */}
            <div style={{
              background: "#1a1d24",
              border: "1px solid #374151",
              borderRadius: "12px", padding: "20px",
              display: "flex", alignItems: "center", gap: "20px"
            }}>
              <div style={{
                width: "56px", height: "56px", background: "#1f2937",
                borderRadius: "12px", display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: "2rem", flexShrink: 0
              }}>👨‍⚖️</div>
              <div>
                <div style={{ color: "#fbbf24", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "1px", marginBottom: "4px" }}>
                  AI JUDGE — INDIAN HIGH COURT
                </div>
                <div style={{ color: "#e2e8f0", fontSize: "0.95rem", lineHeight: 1.6 }}>
                  The judge will evaluate every argument you make and give a verdict of <span style={{ color: "#4ade80" }}>Accepted</span>, <span style={{ color: "#facc15" }}>Doubted</span>, or <span style={{ color: "#ef4444" }}>Rejected</span>. Be precise, cite laws, and stay professional.
                </div>
              </div>
            </div>

            {/* Key Issues */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>

              {/* Key Legal Issues */}
              <div>
                <div style={{
                  display: "flex", alignItems: "center", gap: "8px",
                  marginBottom: "12px"
                }}>
                  <span style={{ fontSize: "1.1rem" }}>⚖️</span>
                  <h3 style={{ color: "#9ca3af", fontSize: "0.85rem", fontWeight: 700, margin: 0, letterSpacing: "1px", textTransform: "uppercase" }}>
                    Key Legal Issues
                  </h3>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {(pendingCase.key_issues || []).map((issue: string, i: number) => (
                    <div key={i} style={{
                      display: "flex", alignItems: "flex-start", gap: "10px",
                      padding: "10px 14px", background: "#0d0f12",
                      borderRadius: "8px", border: "1px solid #1f2937"
                    }}>
                      <span style={{ color: "#eab308", flexShrink: 0 }}>💡</span>
                      <span style={{ color: "#e2e8f0", fontSize: "0.9rem", lineHeight: 1.5 }}>{issue}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applicable Laws */}
              <div>
                <div style={{
                  display: "flex", alignItems: "center", gap: "8px",
                  marginBottom: "12px"
                }}>
                  <span style={{ fontSize: "1.1rem" }}>📜</span>
                  <h3 style={{ color: "#9ca3af", fontSize: "0.85rem", fontWeight: 700, margin: 0, letterSpacing: "1px", textTransform: "uppercase" }}>
                    Applicable Laws
                  </h3>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {(pendingCase.applicable_laws || []).map((law: string, i: number) => (
                    <div key={i} style={{
                      display: "flex", alignItems: "flex-start", gap: "10px",
                      padding: "10px 14px", background: "#0d0f12",
                      borderRadius: "8px", border: "1px solid #1f2937"
                    }}>
                      <span style={{ color: "#60a5fa", flexShrink: 0 }}>📋</span>
                      <span style={{ color: "#e2e8f0", fontSize: "0.9rem", lineHeight: 1.5 }}>{law}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tips Box */}
            <div style={{
              background: "linear-gradient(135deg, #1e1b4b22, #312e8122)",
              border: "1px solid #4338ca",
              borderRadius: "12px", padding: "20px"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                <span style={{ fontSize: "1.2rem" }}>🧠</span>
                <h3 style={{ color: "#818cf8", fontSize: "0.9rem", fontWeight: 700, margin: 0, letterSpacing: "1px" }}>
                  PRO TIPS FOR THIS CASE
                </h3>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                {[
                  "Always cite specific IPC sections or articles",
                  "Challenge the burden of proof on prosecution",
                  "Use 'Your Honour' when addressing the judge",
                  "Reference landmark Supreme Court cases when possible"
                ].map((tip, i) => (
                  <div key={i} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                    <span style={{ color: "#818cf8", flexShrink: 0, fontSize: "0.9rem" }}>→</span>
                    <span style={{ color: "#c7d2fe", fontSize: "0.88rem", lineHeight: 1.5 }}>{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BOTTOM ACTION BAR */}
          <div style={{
            background: "#0d0f12",
            border: "2px solid #1f2937",
            borderTop: "none",
            borderRadius: "0 0 16px 16px",
            padding: "24px 40px",
            display: "flex", alignItems: "center", justifyContent: "space-between"
          }}>
            <button
              onClick={() => setGamePhase("select")}
              style={{
                padding: "12px 24px", background: "transparent",
                color: "#9ca3af", border: "1px solid #374151",
                borderRadius: "8px", cursor: "pointer", fontSize: "1rem",
                fontFamily: "'Inter', sans-serif"
              }}
            >
              ← Back to Cases
            </button>

            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              {error && (
                <span style={{ color: "#fca5a5", fontSize: "0.9rem" }}>❌ {error}</span>
              )}
              <button
                onClick={handleEnterCourtroom}
                disabled={isLoading}
                style={{
                  padding: "16px 48px",
                  background: isLoading
                    ? "#374151"
                    : "linear-gradient(135deg, #eab308, #ca8a04)",
                  color: isLoading ? "#6b7280" : "#111",
                  border: "none", borderRadius: "10px",
                  fontWeight: 800, fontSize: "1.2rem",
                  cursor: isLoading ? "not-allowed" : "pointer",
                  boxShadow: isLoading ? "none" : "0 8px 24px rgba(234,179,8,0.3)",
                  transition: "all 0.2s",
                  fontFamily: "'Inter', sans-serif",
                  display: "flex", alignItems: "center", gap: "12px"
                }}
              >
                {isLoading ? (
                  <>⏳ Setting up courtroom...</>
                ) : (
                  <>⚖️ Enter the Courtroom →</>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ── ENDED SCREEN ──
  if (gamePhase === "ended") {
    return (
      <div style={{
        minHeight: "100vh", background: "#0d0d0f",
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", padding: "60px 24px",
        fontFamily: "'Inter', sans-serif"
      }}>
        <div style={{
          background: "#1e1e24", border: "2px solid #eab308",
          borderRadius: "16px", padding: "60px 48px",
          maxWidth: "500px", textAlign: "center",
          boxShadow: "0 20px 50px rgba(0,0,0,0.8)"
        }}>
          <div style={{ fontSize: "5rem", marginBottom: "24px" }}>🏛️</div>
          <h1 className="pixel-font" style={{ fontSize: "3rem", color: "#eab308", marginBottom: "16px" }}>
            Simulation Complete!
          </h1>
          <div style={{ fontSize: "4rem", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>
            {totalScore}
          </div>
          <div style={{ color: "#9ca3af", marginBottom: "32px" }}>Total XP Earned across {roundNumber - 1} rounds</div>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <button
              onClick={() => {
                setGamePhase("select")
                setResult(null)
                setRoundNumber(1)
                setTotalScore(0)
                setSimulationId(null)
                setPendingCase(null)
              }}
              style={{
                padding: "12px 24px", background: "#eab308", color: "#111",
                border: "none", borderRadius: "8px", fontWeight: 700,
                cursor: "pointer", fontSize: "1rem"
              }}
            >
              Try Another Case
            </button>
            <Link href="/" style={{
              padding: "12px 24px", background: "#1f2937", color: "#fff",
              border: "1px solid #374151", borderRadius: "8px",
              fontWeight: 600, textDecoration: "none", fontSize: "1rem"
            }}>
              Return Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // ── MAIN BATTLE SCREEN ──
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: "#0d0d0f", color: "#e2e8f0",
      display: "flex", flexDirection: "column",
      fontFamily: "'Inter', sans-serif", overflow: "hidden"
    }}>
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image src="/iso_courtroom.png" alt="Courtroom" fill style={{ objectFit: "cover", opacity: 0.15 }} />
      </div>

      {/* TOP NAV */}
      <div style={{
        position: "relative", zIndex: 10,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "12px 24px", background: "rgba(10,10,14,0.95)",
        borderBottom: "1px solid #1f2937"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "1.5rem", color: "#eab308" }}>⚖️</span>
          <span className="pixel-font" style={{ fontSize: "1.4rem", color: "#fff" }}>BarresterBox</span>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          {["Battle", "Judge Insights", "Opponent Analysis", "Learning Mode", "Case Summary"].map((tab, i) => (
            <div key={i} style={{
              padding: "8px 16px", borderRadius: "6px", fontSize: "0.9rem",
              background: i === 0 ? "#1f2937" : "transparent",
              border: i === 0 ? "1px solid #374151" : "none",
              color: i === 0 ? "#fff" : "#6b7280", cursor: "pointer"
            }}>{tab}</div>
          ))}
        </div>
        <button onClick={handleEndSimulation} style={{
          padding: "8px 20px", background: "#7f1d1d", color: "#fff",
          border: "1px solid #ef4444", borderRadius: "6px",
          cursor: "pointer", fontWeight: 600
        }}>End Simulation</button>
      </div>

      {/* MAIN LAYOUT */}
      <div style={{
        position: "relative", zIndex: 1, flex: 1,
        display: "grid", gridTemplateColumns: "280px 1fr 280px",
        overflow: "hidden"
      }}>

        {/* LEFT PANEL */}
        <div style={{
          padding: "16px", background: "rgba(10,10,14,0.9)",
          borderRight: "1px solid #1f2937", overflowY: "auto",
          display: "flex", flexDirection: "column", gap: "12px"
        }}>
          <div style={{ background: "#111827", border: "1px solid #1f2937", borderRadius: "8px", padding: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
              <span style={{ color: "#eab308" }}>📋</span>
              <span style={{ fontWeight: 600, fontSize: "0.9rem" }}>Case Summary</span>
            </div>
            <div style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "4px", color: "#fff" }}>
              {selectedCase?.title}
            </div>
            <div style={{ color: "#eab308", fontSize: "0.8rem", marginBottom: "12px", textTransform: "capitalize" }}>
              {selectedCase?.domain} Law
            </div>
            <ul style={{ color: "#9ca3af", fontSize: "0.85rem", paddingLeft: "16px", lineHeight: 1.8 }}>
              {selectedCase?.facts?.split('.').slice(0, 3).map((fact: string, i: number) => (
                fact.trim() && <li key={i}>{fact.trim()}.</li>
              ))}
            </ul>
          </div>

          <div style={{ background: "#111827", border: "1px solid #1f2937", borderRadius: "8px", padding: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <span style={{ color: "#9ca3af", fontSize: "0.85rem" }}>Round</span>
              <span style={{ color: "#fff", fontWeight: 700 }}>{roundNumber}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#9ca3af", fontSize: "0.85rem" }}>Total Score</span>
              <span style={{ color: "#eab308", fontWeight: 700 }}>+{totalScore} XP</span>
            </div>
          </div>

          <div style={{ background: "#111827", border: "1px solid #1f2937", borderRadius: "8px", padding: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
              <span>🧠</span>
              <span style={{ fontWeight: 600, fontSize: "0.9rem" }}>Your Role</span>
            </div>
            <div style={{
              background: "#14532d", borderRadius: "6px", padding: "10px 12px",
              color: "#86efac", fontSize: "0.85rem", lineHeight: 1.5
            }}>
              🎓 <strong>Defence Counsel</strong><br/>
              Protect your client. Challenge the prosecution.
            </div>
          </div>

          <div style={{ background: "#111827", border: "1px solid #1f2937", borderRadius: "8px", padding: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
              <span>📜</span>
              <span style={{ fontWeight: 600, fontSize: "0.9rem" }}>Key Laws</span>
            </div>
            {selectedCase?.applicable_laws?.map((law: string, i: number) => (
              <div key={i} style={{
                background: "#1f2937", borderRadius: "4px", padding: "6px 10px",
                marginBottom: "6px", color: "#9ca3af", fontSize: "0.8rem"
              }}>{law}</div>
            ))}
          </div>
        </div>

        {/* CENTER PANEL */}
        <div style={{
          display: "flex", flexDirection: "column",
          background: "rgba(5,5,8,0.7)", overflow: "hidden"
        }}>

          {/* Courtroom Scene */}
          <div style={{
            flex: 1, position: "relative",
            display: "flex", alignItems: "center", justifyContent: "center",
            minHeight: "300px", maxHeight: "350px"
          }}>
            <Image src="/iso_courtroom.png" alt="Courtroom" fill style={{ objectFit: "cover", opacity: 0.4 }} />

            {/* Judge Speech Bubble */}
            <div style={{ position: "absolute", top: "20px", left: "50%", transform: "translateX(-50%)", zIndex: 2, width: "380px" }}>
              <div style={{
                background: "rgba(15,15,20,0.97)",
                border: `2px solid ${result ? verdictColor(result.judge.reaction) : "#374151"}`,
                borderRadius: "12px", padding: "14px 20px", textAlign: "center",
                boxShadow: `0 0 24px ${result ? verdictColor(result.judge.reaction) + "44" : "transparent"}`
              }}>
                <div style={{ fontSize: "0.8rem", color: "#6b7280", marginBottom: "6px" }}>👨‍⚖️ Judge · Indian High Court</div>
                <div style={{ fontSize: "0.95rem", color: "#e2e8f0", lineHeight: 1.6 }}>
                  {isLoading ? "⚖️ Evaluating arguments..." :
                   result ? `${verdictEmoji(result.judge.reaction)} ${result.judge.reasoning}` :
                   "Present your argument. I'm listening carefully."}
                </div>
              </div>
            </div>

            {/* Opponent Speech Bubble */}
            {result && (
              <div style={{ position: "absolute", bottom: "16px", right: "16px", zIndex: 2, maxWidth: "260px" }}>
                <div style={{
                  background: "rgba(127,29,29,0.95)", border: "1px solid #ef4444",
                  borderRadius: "12px", padding: "12px 16px"
                }}>
                  <div style={{ fontSize: "0.75rem", color: "#fca5a5", marginBottom: "6px" }}>
                    ⚔️ Prosecution Counsel
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "#fee2e2", lineHeight: 1.5 }}>
                    "{result.opponent}"
                  </div>
                </div>
              </div>
            )}

            {/* Loading overlay */}
            {isLoading && (
              <div style={{
                position: "absolute", inset: 0, display: "flex",
                alignItems: "center", justifyContent: "center",
                background: "rgba(0,0,0,0.6)", zIndex: 3
              }}>
                <div style={{ color: "#eab308", fontSize: "1.2rem", textAlign: "center" }}>
                  <div style={{ fontSize: "3rem", marginBottom: "12px" }}>⚖️</div>
                  <div>AI is deliberating...</div>
                  <div style={{ color: "#6b7280", fontSize: "0.85rem", marginTop: "6px" }}>
                    This may take 10-20 seconds
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Round Results */}
          {result && (
            <div style={{
              background: "rgba(10,10,14,0.97)",
              borderTop: "1px solid #1f2937",
              padding: "16px 24px"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "1.2rem" }}>🏆</span>
                  <span style={{ fontWeight: 600 }}>Round {result.round_number} Results</span>
                </div>
                <div style={{
                  padding: "6px 16px", borderRadius: "20px",
                  background: verdictColor(result.judge.reaction) + "22",
                  border: `1px solid ${verdictColor(result.judge.reaction)}`,
                  color: verdictColor(result.judge.reaction),
                  fontWeight: 700, fontSize: "0.9rem"
                }}>
                  {verdictEmoji(result.judge.reaction)} {result.judge.reaction.toUpperCase()} · +{result.round_score} XP
                </div>
              </div>
              <div style={{ height: "6px", background: "#1f2937", borderRadius: "3px", marginBottom: "10px", overflow: "hidden" }}>
                <div style={{
                  width: `${(result.round_score / 10) * 100}%`,
                  height: "100%", background: verdictColor(result.judge.reaction),
                  transition: "width 1s ease"
                }}></div>
              </div>
              <div style={{ display: "flex", gap: "20px", fontSize: "0.85rem" }}>
                <span style={{ color: "#4ade80" }}>✅ {result.learning.strength}</span>
                <span style={{ color: "#ef4444" }}>❌ {result.learning.mistake}</span>
              </div>
            </div>
          )}

          {/* INPUT AREA */}
          <div style={{
            background: "rgba(10,10,14,0.97)",
            borderTop: "1px solid #1f2937",
            padding: "16px 24px"
          }}>
            {error && (
              <div style={{
                background: "#7f1d1d", border: "1px solid #ef4444",
                borderRadius: "6px", padding: "8px 16px", marginBottom: "12px",
                color: "#fca5a5", fontSize: "0.9rem"
              }}>{error}</div>
            )}
            <div style={{ display: "flex", gap: "12px", alignItems: "flex-end" }}>
              <div style={{ flex: 1 }}>
                <div style={{ color: "#6b7280", fontSize: "0.8rem", marginBottom: "6px" }}>
                  🎤 Your Honour, I submit that... (Round {roundNumber})
                </div>
                <textarea
                  ref={inputRef}
                  value={userArgument}
                  onChange={e => setUserArgument(e.target.value)}
                  placeholder="Present your legal argument here. Cite IPC sections, precedents, and challenge the prosecution's evidence..."
                  disabled={isLoading}
                  rows={3}
                  style={{
                    width: "100%", background: "#111827",
                    border: "1px solid #374151", borderRadius: "8px",
                    padding: "12px 16px", color: "#fff", fontSize: "1rem",
                    outline: "none", resize: "none",
                    fontFamily: "'Inter', sans-serif",
                    opacity: isLoading ? 0.5 : 1,
                    boxSizing: "border-box"
                  }}
                  onKeyDown={e => { if (e.key === "Enter" && e.ctrlKey) handleSubmitArgument() }}
                />
                <div style={{ color: "#4b5563", fontSize: "0.75rem", marginTop: "4px" }}>
                  Ctrl+Enter to submit quickly
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <button onClick={handleSubmitArgument}
                  disabled={isLoading || !userArgument.trim()}
                  style={{
                    padding: "12px 24px",
                    background: isLoading || !userArgument.trim() ? "#374151" : "#eab308",
                    color: isLoading || !userArgument.trim() ? "#6b7280" : "#111",
                    border: "none", borderRadius: "8px", fontWeight: 700,
                    cursor: isLoading || !userArgument.trim() ? "not-allowed" : "pointer",
                    fontSize: "1rem", minWidth: "160px",
                    fontFamily: "'Inter', sans-serif"
                  }}>
                  {isLoading ? "⚖️ Thinking..." : "⚔️ Present Argument"}
                </button>
                <button onClick={handleEndSimulation} disabled={isLoading}
                  style={{
                    padding: "10px 24px", background: "#1f2937",
                    color: "#9ca3af", border: "1px solid #374151",
                    borderRadius: "8px", cursor: "pointer", fontSize: "0.9rem",
                    fontFamily: "'Inter', sans-serif"
                  }}>
                  🏁 End Simulation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div style={{
          padding: "16px", background: "rgba(10,10,14,0.9)",
          borderLeft: "1px solid #1f2937", overflowY: "auto",
          display: "flex", flexDirection: "column", gap: "12px"
        }}>

          {/* Judge Reaction */}
          <div style={{ background: "#111827", border: "1px solid #1f2937", borderRadius: "8px", padding: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
              <span>👨‍⚖️</span>
              <span style={{ fontWeight: 600, fontSize: "0.9rem" }}>Judge Reaction</span>
            </div>
            {result ? (
              <>
                <div style={{
                  display: "inline-block", padding: "6px 16px", borderRadius: "6px",
                  background: verdictColor(result.judge.reaction) + "22",
                  border: `1px solid ${verdictColor(result.judge.reaction)}`,
                  color: verdictColor(result.judge.reaction),
                  fontWeight: 700, marginBottom: "12px", fontSize: "1rem"
                }}>
                  {verdictEmoji(result.judge.reaction)} {result.judge.reaction.charAt(0).toUpperCase() + result.judge.reaction.slice(1)}
                </div>
                <p style={{ color: "#9ca3af", fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>
                  {result.judge.reasoning}
                </p>
              </>
            ) : (
              <p style={{ color: "#4b5563", fontSize: "0.85rem", fontStyle: "italic" }}>
                Awaiting your first argument...
              </p>
            )}
          </div>

          {/* Opponent */}
          <div style={{ background: "#111827", border: "1px solid #1f2937", borderRadius: "8px", padding: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
              <span>⚔️</span>
              <span style={{ fontWeight: 600, fontSize: "0.9rem" }}>Prosecution Counsel</span>
            </div>
            {result ? (
              <p style={{ color: "#fca5a5", fontSize: "0.85rem", lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>
                "{result.opponent}"
              </p>
            ) : (
              <p style={{ color: "#4b5563", fontSize: "0.85rem", fontStyle: "italic" }}>
                Prosecution is preparing their case...
              </p>
            )}
          </div>

          {/* Outcome Meter */}
          <div style={{ background: "#111827", border: "1px solid #1f2937", borderRadius: "8px", padding: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
              <span>📊</span>
              <span style={{ fontWeight: 600, fontSize: "0.9rem" }}>Outcome Meter</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "#6b7280", marginBottom: "6px" }}>
              <span>Weak</span><span>Balanced</span><span>Strong</span>
            </div>
            <div style={{ height: "8px", background: "#1f2937", borderRadius: "4px", overflow: "hidden" }}>
              <div style={{
                width: result ? `${Math.min((totalScore / (roundNumber * 10)) * 100, 100)}%` : "50%",
                height: "100%",
                background: "linear-gradient(90deg, #ef4444, #eab308, #4ade80)",
                transition: "width 0.8s ease"
              }}></div>
            </div>
            <div style={{ textAlign: "center", marginTop: "8px", color: "#eab308", fontWeight: 700 }}>
              {totalScore} XP total
            </div>
          </div>

          {/* Learning Tab */}
          <div style={{ background: "#111827", border: "1px solid #1f2937", borderRadius: "8px", padding: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
              <span>📚</span>
              <span style={{ fontWeight: 600, fontSize: "0.9rem" }}>Learning Tab</span>
            </div>
            {result ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                  <span style={{ color: "#4ade80", flexShrink: 0 }}>✅</span>
                  <span style={{ color: "#9ca3af", fontSize: "0.85rem", lineHeight: 1.5 }}>{result.learning.strength}</span>
                </div>
                <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                  <span style={{ color: "#ef4444", flexShrink: 0 }}>❌</span>
                  <span style={{ color: "#9ca3af", fontSize: "0.85rem", lineHeight: 1.5 }}>{result.learning.mistake}</span>
                </div>
                <div style={{ background: "#1f2937", borderRadius: "6px", padding: "10px" }}>
                  <div style={{ color: "#eab308", fontSize: "0.75rem", marginBottom: "4px" }}>💡 Better version:</div>
                  <div style={{ color: "#e2e8f0", fontSize: "0.82rem", lineHeight: 1.5, fontStyle: "italic" }}>
                    "{result.learning.improved_argument}"
                  </div>
                </div>
                <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                  <span style={{ color: "#60a5fa", flexShrink: 0 }}>📜</span>
                  <span style={{ color: "#9ca3af", fontSize: "0.82rem", lineHeight: 1.5 }}>{result.learning.relevant_law}</span>
                </div>
              </div>
            ) : (
              <p style={{ color: "#4b5563", fontSize: "0.85rem", fontStyle: "italic" }}>
                Learning feedback will appear after each argument.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}