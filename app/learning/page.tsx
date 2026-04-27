"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export default function LearningPage() {
  const tracksRef = useRef<HTMLDivElement>(null);

  const scrollToTracks = () => {
    tracksRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const tracks = [
    {
      id: "criminal",
      icon: "/icons/criminal.png",
      fallbackEmoji: "⚔️",
      title: "Criminal Law",
      color: "#ef4444",
      borderColor: "#7f1d1d",
      bgColor: "#1a0a0a",
      tag: "Most Popular",
      tagColor: "#ef4444",
      desc: "Dive into offenses, defenses, and courtroom procedure. Master IPC sections, evidence law, and criminal trials.",
      topics: ["IPC Section 302 — Murder", "Burden of Proof", "Bail & Anticipatory Bail", "Section 65B Evidence Act"],
      cases: 12,
      difficulty: "Beginner → Advanced"
    },
    {
      id: "constitutional",
      icon: "/icons/constitutional.png",
      fallbackEmoji: "📜",
      title: "Constitutional Law",
      color: "#3b82f6",
      borderColor: "#1e3a8a",
      bgColor: "#050d1a",
      tag: "Recommended",
      tagColor: "#3b82f6",
      desc: "Examine fundamental rights, government powers, and landmark judgments that shaped modern India.",
      topics: ["Article 21 — Right to Life", "Article 19 — Freedom", "Kesavananda Bharati", "Writs & Remedies"],
      cases: 8,
      difficulty: "Intermediate"
    },
    {
      id: "contract",
      icon: "/icons/contract.png",
      fallbackEmoji: "🤝",
      title: "Contract Law",
      color: "#4ade80",
      borderColor: "#14532d",
      bgColor: "#050f08",
      tag: "Essential",
      tagColor: "#4ade80",
      desc: "Learn about agreements, obligations, and dispute resolution. Find templates and master contract drafting.",
      topics: ["Offer & Acceptance", "Breach of Contract", "Specific Performance", "Damages & Remedies"],
      cases: 10,
      difficulty: "Beginner → Intermediate"
    }
  ];

  const journeySteps = [
    {
      level: "Beginner",
      icon: "🗡️",
      color: "#4ade80",
      borderColor: "#14532d",
      bg: "#0a1a0d",
      desc: "Foundations & Basics",
      detail: "Core legal concepts, simple cases, guided arguments"
    },
    {
      level: "Intermediate",
      icon: "🛡️",
      color: "#3b82f6",
      borderColor: "#1e3a8a",
      bg: "#050d1a",
      desc: "Advanced Cases",
      detail: "Complex precedents, multi-round simulations"
    },
    {
      level: "Advanced",
      icon: "⭐",
      color: "#a855f7",
      borderColor: "#581c87",
      bg: "#0d0514",
      desc: "Mastery & Strategy",
      detail: "Supreme Court cases, full trial simulations"
    },
    {
      level: "Specialization",
      icon: "👑",
      color: "#eab308",
      borderColor: "#713f12",
      bg: "#140e02",
      desc: "Expert Level",
      detail: "Constitutional cases, landmark judgments"
    }
  ];

  const resources = [
    { icon: "📖", title: "IPC Handbook", desc: "Complete guide to Indian Penal Code sections", tag: "FREE" },
    { icon: "⚖️", title: "Landmark Cases", desc: "100+ Supreme Court judgments summarized", tag: "FREE" },
    { icon: "📝", title: "Moot Court Scripts", desc: "Ready-to-use oral argument templates", tag: "PRO" },
    { icon: "🎯", title: "Practice Questions", desc: "500+ MCQs for law entrance exams", tag: "PRO" }
  ];

  return (
    <main style={{ minHeight: "100vh", background: "#0d0d0f", color: "#fff", fontFamily: "'Inter', sans-serif" }}>

      {/* ── HERO SECTION ── */}
      <section style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "120px 64px 80px",
        overflow: "hidden"
      }}>

        {/* Background */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image src="/mc_forest_bg.png" alt="Minecraft Landscape" fill style={{ objectFit: "cover", opacity: 0.5 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(5,5,8,0.95) 0%, rgba(5,5,8,0.6) 50%, rgba(5,5,8,0.85) 100%)" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "200px", background: "linear-gradient(0deg, #0d0d0f 0%, transparent 100%)" }} />
        </div>

        <div style={{ position: "relative", zIndex: 1, maxWidth: "680px" }}>

          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(234,179,8,0.1)", border: "1px solid rgba(234,179,8,0.3)",
            borderRadius: "20px", padding: "6px 16px", marginBottom: "24px"
          }}>
            <span style={{ fontSize: "1rem" }}>⚔️</span>
            <span style={{ color: "#eab308", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "1px" }}>
              LEGAL MASTERY ACADEMY
            </span>
          </div>

          <h1 style={{
            fontSize: "4.5rem", fontWeight: 800, lineHeight: 1.1,
            marginBottom: "20px", letterSpacing: "-1px"
          }}>
            Master the Law.<br />
            <span style={{
              background: "linear-gradient(135deg, #eab308, #f59e0b)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
            }}>
              Level Up Your Skills
            </span>
          </h1>

          <p style={{
            fontSize: "1.2rem", color: "#9ca3af", marginBottom: "40px",
            lineHeight: 1.7, maxWidth: "520px"
          }}>
            Explore law tracks, access resources, and forge your legal expertise through interactive simulations and AI-powered learning.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <button
              onClick={scrollToTracks}
              style={{
                background: "linear-gradient(135deg, #eab308, #ca8a04)",
                color: "#111", border: "none",
                padding: "16px 36px", fontSize: "1.1rem", fontWeight: 700,
                borderRadius: "10px", cursor: "pointer",
                boxShadow: "0 8px 24px rgba(234,179,8,0.3)",
                display: "flex", alignItems: "center", gap: "10px",
                transition: "all 0.2s"
              }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
            >
              ⚔️ Explore All Tracks
            </button>
            <Link href="/simulator" style={{
              background: "transparent",
              color: "#fff", border: "2px solid #374151",
              padding: "16px 36px", fontSize: "1.1rem", fontWeight: 600,
              borderRadius: "10px", textDecoration: "none",
              display: "flex", alignItems: "center", gap: "10px",
              transition: "all 0.2s"
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "#eab308"
                e.currentTarget.style.color = "#eab308"
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "#374151"
                e.currentTarget.style.color = "#fff"
              }}
            >
              ⚖️ Start Simulation
            </Link>
          </div>

          {/* Stats row */}
          <div style={{ display: "flex", gap: "32px", marginTop: "56px" }}>
            {[
              { num: "30+", label: "Practice Cases" },
              { num: "3", label: "Law Tracks" },
              { num: "AI", label: "Powered Judge" }
            ].map((stat, i) => (
              <div key={i}>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "#eab308" }}>{stat.num}</div>
                <div style={{ color: "#6b7280", fontSize: "0.85rem", marginTop: "2px" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div
          onClick={scrollToTracks}
          style={{
            position: "absolute", bottom: "40px", left: "50%",
            transform: "translateX(-50%)", zIndex: 1,
            display: "flex", flexDirection: "column", alignItems: "center",
            gap: "8px", cursor: "pointer", opacity: 0.6,
            transition: "opacity 0.2s"
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = "1"}
          onMouseLeave={e => e.currentTarget.style.opacity = "0.6"}
        >
          <span style={{ color: "#9ca3af", fontSize: "0.8rem", letterSpacing: "2px" }}>SCROLL TO EXPLORE</span>
          <div style={{
            width: "24px", height: "40px", border: "2px solid #374151",
            borderRadius: "12px", display: "flex", justifyContent: "center",
            paddingTop: "6px"
          }}>
            <div style={{
              width: "4px", height: "10px", background: "#eab308",
              borderRadius: "2px", animation: "scrollBounce 1.5s infinite"
            }}></div>
          </div>
        </div>
      </section>

      {/* ── LEARNING TRACKS SECTION ── */}
      <section ref={tracksRef} style={{ padding: "100px 64px", background: "#0d0d0f" }}>

        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(234,179,8,0.1)", border: "1px solid rgba(234,179,8,0.2)",
            borderRadius: "20px", padding: "6px 16px", marginBottom: "20px"
          }}>
            <span style={{ color: "#eab308", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "1px" }}>
              📚 CHOOSE YOUR SPECIALIZATION
            </span>
          </div>
          <h2 style={{
            fontSize: "3rem", fontWeight: 800, marginBottom: "16px",
            letterSpacing: "-0.5px"
          }}>
            Learning Tracks
          </h2>
          <p style={{ color: "#9ca3af", fontSize: "1.1rem", maxWidth: "480px", margin: "0 auto" }}>
            Pick your area of law and start your journey from beginner to expert.
          </p>
        </div>

        {/* Track Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "1100px", margin: "0 auto" }}>
          {tracks.map((track, i) => (
            <div key={i} style={{
              background: track.bgColor,
              border: `2px solid ${track.borderColor}`,
              borderRadius: "20px", padding: "40px",
              display: "flex", gap: "40px", alignItems: "flex-start",
              transition: "all 0.3s",
              position: "relative", overflow: "hidden"
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = track.color
                e.currentTarget.style.transform = "translateY(-4px)"
                e.currentTarget.style.boxShadow = `0 20px 50px ${track.color}22`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = track.borderColor
                e.currentTarget.style.transform = "translateY(0)"
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              {/* Glow effect */}
              <div style={{
                position: "absolute", top: 0, right: 0,
                width: "300px", height: "300px",
                background: `radial-gradient(circle, ${track.color}08 0%, transparent 70%)`,
                pointerEvents: "none"
              }} />

              {/* Icon */}
              <div style={{
                width: "100px", height: "100px", flexShrink: 0,
                background: `${track.color}15`,
                border: `2px solid ${track.borderColor}`,
                borderRadius: "20px",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "3.5rem"
              }}>
                {track.fallbackEmoji}
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                  <h3 style={{ fontSize: "1.8rem", fontWeight: 700, margin: 0, color: "#fff" }}>
                    {track.title}
                  </h3>
                  <span style={{
                    background: `${track.color}22`,
                    border: `1px solid ${track.color}`,
                    color: track.color,
                    padding: "3px 12px", borderRadius: "20px",
                    fontSize: "0.75rem", fontWeight: 700
                  }}>
                    {track.tag}
                  </span>
                </div>

                <p style={{ color: "#9ca3af", lineHeight: 1.7, marginBottom: "20px", fontSize: "1rem" }}>
                  {track.desc}
                </p>

                {/* Topics grid */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px" }}>
                  {track.topics.map((topic, j) => (
                    <span key={j} style={{
                      background: "#1f2937", border: "1px solid #374151",
                      borderRadius: "6px", padding: "6px 12px",
                      color: "#9ca3af", fontSize: "0.82rem"
                    }}>
                      {topic}
                    </span>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "24px", color: "#6b7280", fontSize: "0.85rem" }}>
                  <span>📁 {track.cases} Practice Cases</span>
                  <span>📊 {track.difficulty}</span>
                </div>
              </div>

              {/* CTA */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", flexShrink: 0 }}>
                <Link href="/simulator" style={{
                  padding: "14px 28px",
                  background: `linear-gradient(135deg, ${track.color}, ${track.color}bb)`,
                  color: "#111", border: "none", borderRadius: "10px",
                  fontWeight: 700, fontSize: "1rem", textDecoration: "none",
                  display: "flex", alignItems: "center", gap: "8px",
                  transition: "all 0.2s", whiteSpace: "nowrap"
                }}>
                  Start Track ⚔️
                </Link>
                <button style={{
                  padding: "12px 28px", background: "transparent",
                  color: "#9ca3af", border: "1px solid #374151",
                  borderRadius: "10px", cursor: "pointer", fontSize: "0.9rem",
                  fontFamily: "'Inter', sans-serif", transition: "all 0.2s"
                }}>
                  View Resources
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── LEARNING JOURNEY SECTION ── */}
      <section style={{ padding: "100px 64px", background: "#090909" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "16px" }}>
            Your Learning Journey
          </h2>
          <p style={{ color: "#9ca3af", fontSize: "1.1rem" }}>
            Progress from beginner to specialization at your own pace
          </p>
        </div>

        {/* Steps */}
        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>

          {/* Connecting Line */}
          <div style={{
            position: "absolute", top: "60px", left: "calc(12.5% + 40px)",
            right: "calc(12.5% + 40px)", height: "2px",
            background: "linear-gradient(90deg, #4ade80, #3b82f6, #a855f7, #eab308)",
            zIndex: 0
          }} />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
            {journeySteps.map((step, i) => (
              <div key={i} style={{
                display: "flex", flexDirection: "column", alignItems: "center",
                textAlign: "center", position: "relative", zIndex: 1
              }}>

                {/* Icon Circle */}
                <div style={{
                  width: "80px", height: "80px",
                  background: step.bg,
                  border: `3px solid ${step.color}`,
                  borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "2rem", marginBottom: "20px",
                  boxShadow: `0 0 24px ${step.color}33`
                }}>
                  {step.icon}
                </div>

                <div style={{
                  background: "#111418", border: `1px solid ${step.borderColor}`,
                  borderRadius: "12px", padding: "20px 16px", width: "100%"
                }}>
                  <h4 style={{ color: step.color, fontWeight: 700, fontSize: "1.1rem", marginBottom: "6px" }}>
                    {step.level}
                  </h4>
                  <p style={{ color: "#9ca3af", fontSize: "0.85rem", marginBottom: "8px" }}>
                    {step.desc}
                  </p>
                  <p style={{ color: "#6b7280", fontSize: "0.78rem", lineHeight: 1.5, margin: 0 }}>
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESOURCES SECTION ── */}
      <section style={{ padding: "100px 64px", background: "#0d0d0f" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "16px" }}>
              Learning Resources
            </h2>
            <p style={{ color: "#9ca3af", fontSize: "1.1rem" }}>
              Everything you need to ace your legal studies
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
            {resources.map((r, i) => (
              <div key={i} style={{
                background: "#111418", border: "1px solid #1f2937",
                borderRadius: "16px", padding: "28px",
                display: "flex", alignItems: "center", gap: "20px",
                transition: "all 0.2s", cursor: "pointer"
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "#eab308"
                  e.currentTarget.style.background = "#151a20"
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "#1f2937"
                  e.currentTarget.style.background = "#111418"
                }}
              >
                <div style={{
                  width: "60px", height: "60px", background: "#1f2937",
                  borderRadius: "14px", display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: "1.8rem", flexShrink: 0
                }}>
                  {r.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                    <h4 style={{ color: "#fff", fontWeight: 600, fontSize: "1.05rem", margin: 0 }}>
                      {r.title}
                    </h4>
                    <span style={{
                      background: r.tag === "FREE" ? "#14532d" : "#78350f",
                      color: r.tag === "FREE" ? "#4ade80" : "#fb923c",
                      border: `1px solid ${r.tag === "FREE" ? "#166534" : "#9a3412"}`,
                      padding: "2px 8px", borderRadius: "4px",
                      fontSize: "0.7rem", fontWeight: 700
                    }}>
                      {r.tag}
                    </span>
                  </div>
                  <p style={{ color: "#6b7280", fontSize: "0.9rem", margin: 0 }}>{r.desc}</p>
                </div>
                <div style={{ color: "#374151", fontSize: "1.5rem" }}>→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section style={{
        padding: "100px 64px",
        background: "linear-gradient(135deg, #0d0d0f 0%, #1a1205 50%, #0d0d0f 100%)",
        borderTop: "1px solid #1f2937"
      }}>
        <div style={{
          maxWidth: "700px", margin: "0 auto", textAlign: "center"
        }}>
          <div style={{ fontSize: "4rem", marginBottom: "24px" }}>⚖️</div>
          <h2 style={{
            fontSize: "3rem", fontWeight: 800, marginBottom: "20px",
            lineHeight: 1.2
          }}>
            Ready to Forge Your<br />
            <span style={{
              background: "linear-gradient(135deg, #eab308, #f59e0b)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
            }}>Legal Destiny?</span>
          </h2>
          <p style={{ color: "#9ca3af", fontSize: "1.1rem", marginBottom: "40px", lineHeight: 1.7 }}>
            Join thousands of law students mastering Indian law through AI-powered courtroom simulations.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/simulator" style={{
              background: "linear-gradient(135deg, #eab308, #ca8a04)",
              color: "#111", border: "none",
              padding: "18px 40px", fontSize: "1.15rem", fontWeight: 700,
              borderRadius: "12px", textDecoration: "none",
              boxShadow: "0 10px 30px rgba(234,179,8,0.3)",
              display: "flex", alignItems: "center", gap: "10px",
              transition: "all 0.2s"
            }}>
              ⚔️ Start Your First Simulation
            </Link>
            <Link href="/lexai" style={{
              background: "transparent", color: "#fff",
              border: "2px solid #374151",
              padding: "18px 40px", fontSize: "1.15rem", fontWeight: 600,
              borderRadius: "12px", textDecoration: "none",
              display: "flex", alignItems: "center", gap: "10px",
              transition: "all 0.2s"
            }}>
              🤖 Ask LexAI
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        padding: "32px 64px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        background: "#080808", borderTop: "1px solid #1f2937"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", color: "#4b5563", fontSize: "0.9rem" }}>
          <span style={{ color: "#eab308", fontWeight: 700, fontSize: "1.1rem" }}>⚖️ BarresterBox</span>
          <span>•</span>
          <span>AI-powered courtroom simulator</span>
          <span>•</span>
          <span>"Advisory only"</span>
        </div>
        <div style={{ display: "flex", gap: "24px", color: "#4b5563", fontSize: "0.9rem" }}>
          <Link href="#" style={{ color: "#4b5563", textDecoration: "none" }}>Terms</Link>
          <Link href="#" style={{ color: "#4b5563", textDecoration: "none" }}>Privacy</Link>
          <Link href="#" style={{ color: "#4b5563", textDecoration: "none" }}>Contact</Link>
        </div>
      </footer>

      <style>{`
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(8px); opacity: 0.3; }
        }
      `}</style>
    </main>
  );
}