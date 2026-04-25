"use client";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--dark-bg)" }}>

      {/* Hero Section */}
      <section style={{ 
        position: "relative",
        height: "85vh", 
        minHeight: "600px",
        display: "flex",
        alignItems: "center",
        padding: "0 64px",
        overflow: "hidden"
      }}>
        {/* Background image container */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image src="/hero_courtroom.png" alt="Minecraft Courtroom" fill style={{ objectFit: 'cover', opacity: 0.6 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%)" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "150px", background: "linear-gradient(0deg, var(--dark-bg) 0%, transparent 100%)" }} />
        </div>

        <div style={{ position: "relative", zIndex: 1, maxWidth: "600px" }}>
          <h1 style={{ fontFamily: "'VT323', monospace", fontSize: "5rem", lineHeight: 1.1, color: "#fff", textShadow: "4px 4px 0 #000", marginBottom: "24px" }}>
            Fight Smarter.<br />
            <span style={{ color: "var(--minecraft-gold)" }}>Simulate Victory.</span>
          </h1>
          <p style={{ fontSize: "1.2rem", color: "#ddd", marginBottom: "40px", lineHeight: 1.6 }}>
            An AI-powered Minecraft courtroom simulator for law students and lawyers.
          </p>
          <Link href="/prepare" className="mc-btn" style={{ fontSize: "1.5rem", padding: "16px 32px" }}>
            Enter the Courtroom &gt;
          </Link>
        </div>
      </section>

      {/* Interactive Courtroom Section */}
      <section style={{ padding: "80px 64px", position: "relative", zIndex: 2 }}>
        <div className="mc-panel" style={{ display: "flex", alignItems: "center", gap: "40px", padding: "40px", borderRadius: "8px" }}>
          <div style={{ flex: 1 }}>
            <h2 className="pixel-font" style={{ fontSize: "2.5rem", marginBottom: "16px", textShadow: "2px 2px 0 #000" }}>
              Interactive<br/>Minecraft Courtroom
            </h2>
            <p style={{ color: "#aaa", fontSize: "1.1rem", lineHeight: 1.6 }}>
              Step into the bench, choose your side, and start your trial.
            </p>
          </div>
          <div style={{ flex: 2, position: "relative", height: "350px", borderRadius: "8px", overflow: "hidden", border: "4px solid #333" }}>
             <Image src="/iso_courtroom.png" alt="Isometric Courtroom" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: "80px 64px" }}>
        <div className="title-divider-container">
          <div className="title-line"></div>
          <span className="title-diamond">♦</span>
          <div className="title-line"></div>
          <h2 className="section-title">Legal Quests (Core Features)</h2>
          <div className="title-line"></div>
          <span className="title-diamond">♦</span>
          <div className="title-line"></div>
        </div>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
          {[
            { title: "AI Courtroom\nSimulator", icon: "⚖️", desc: "Battle an AI opponent, react to an AI judge, and sharpen your arguments." },
            { title: "Strategy\nGenerator", icon: "🧠", desc: "Get AI-generated arguments and counter-arguments before your \"trial\"." },
            { title: "Learning\nEngine", icon: "📖", desc: "After each round: strengths, weaknesses, and legal concepts that powered you." },
            { title: "LexAI\nAssistant", icon: "🤖", desc: "Ask legal questions, summarize cases, and test your best-argument theories." }
          ].map((f, i) => (
            <div key={i} className="mc-panel mc-panel-gold" style={{ padding: "32px 24px", background: "#151515" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "16px" }}>
                <span style={{ fontSize: "2rem", lineHeight: 1 }}>{f.icon}</span>
                <h3 className="pixel-font" style={{ fontSize: "1.5rem", color: "var(--minecraft-gold)", whiteSpace: "pre-line", lineHeight: 1.2, margin: 0 }}>
                  {f.title}
                </h3>
              </div>
              <p style={{ color: "#bbb", fontSize: "1rem", lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Progression Section */}
      <section style={{ padding: "80px 64px" }}>
        <div className="mc-panel mc-panel-gold" style={{ 
          padding: "60px", 
          textAlign: "center", 
          position: "relative",
          overflow: "hidden"
        }}>
          {/* Background Image */}
          <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
             <Image src="/mc_forest_bg.png" alt="Minecraft Landscape" fill style={{ objectFit: 'cover' }} />
             <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)" }} />
          </div>

          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 className="pixel-font" style={{ fontSize: "3rem", marginBottom: "16px", textShadow: "2px 2px 0 #000" }}>Level Up Your Legal Skills</h2>
            <p style={{ color: "#aaa", marginBottom: "48px", textShadow: "1px 1px 0 #000" }}>Beginner → Intermediate → Advanced with tracks in Criminal,<br/>Constitutional, and Contract Law.</p>
            
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
              <div className="mc-panel mc-panel-green" style={{ padding: "16px 32px", display: "flex", alignItems: "center", gap: "16px", background: "rgba(30,30,30,0.8)" }}>
                <span style={{ fontSize: "2rem" }}>🗡️</span>
                <span className="pixel-font" style={{ fontSize: "1.8rem" }}>Beginner</span>
              </div>
              <div style={{ color: "#aaa", letterSpacing: "4px", fontSize: "1.5rem", textShadow: "2px 2px 0 #000" }}>-----&gt;</div>
              <div className="mc-panel" style={{ padding: "16px 32px", display: "flex", alignItems: "center", gap: "16px", borderTopColor: "#64b5f6", borderLeftColor: "#64b5f6", borderBottomColor: "#1976d2", borderRightColor: "#1976d2", background: "rgba(30,30,30,0.8)" }}>
                <span style={{ fontSize: "2rem" }}>🛡️</span>
                <span className="pixel-font" style={{ fontSize: "1.8rem" }}>Intermediate</span>
              </div>
              <div style={{ color: "#aaa", letterSpacing: "4px", fontSize: "1.5rem", textShadow: "2px 2px 0 #000" }}>-----&gt;</div>
              <div className="mc-panel mc-panel-purple" style={{ padding: "16px 32px", display: "flex", alignItems: "center", gap: "16px", background: "rgba(30,30,30,0.8)" }}>
                <span style={{ fontSize: "2rem" }}>⭐</span>
                <span className="pixel-font" style={{ fontSize: "1.8rem" }}>Advanced</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section style={{ padding: "80px 64px 120px" }}>
        <div className="title-divider-container">
          <div className="title-line"></div>
          <span className="title-diamond">♦</span>
          <div className="title-line"></div>
          <h2 className="section-title">Join the Legal Guild</h2>
          <div className="title-line"></div>
          <span className="title-diamond">♦</span>
          <div className="title-line"></div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "24px", maxWidth: "900px", margin: "0 auto", flexWrap: "wrap" }}>
          
          {/* Student Card */}
          <div className="pricing-card-container pricing-card-student">
             <div style={{ width: "130px", position: "relative", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
               <div style={{ width: "100%", height: "240px", position: "relative", zIndex: 1 }}>
                 <Image src="/student_char.png" alt="Student" fill style={{ objectFit: 'contain', objectPosition: 'center' }} />
               </div>
             </div>
             <div style={{ flex: 1, paddingLeft: "12px" }}>
               <h3 className="pixel-font" style={{ fontSize: "1.6rem", color: "#76c62e", marginBottom: "4px", display: "flex", alignItems: "center", gap: "8px" }}>
                 🎓 Students
               </h3>
               <div className="pixel-font" style={{ fontSize: "3.5rem", color: "#76c62e", marginBottom: "16px", textShadow: "2px 2px 0 rgba(0,0,0,0.5)", lineHeight: 1 }}>
                 ₹99 <span style={{ fontSize: "1.4rem", color: "#666", textShadow: "none" }}>/ month</span>
               </div>
               <ul className="pixel-font" style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0", color: "#aaa", lineHeight: 1.6, fontSize: "1.2rem" }}>
                 <li style={{ display: "flex", alignItems: "center", marginBottom: "4px" }}><span className="mc-bullet-green"></span> Access to all cases</li>
                 <li style={{ display: "flex", alignItems: "center", marginBottom: "4px" }}><span className="mc-bullet-green"></span> LexAI basic</li>
                 <li style={{ display: "flex", alignItems: "center", marginBottom: "4px" }}><span className="mc-bullet-green"></span> Leaderboard + XP</li>
               </ul>
               <button className="pricing-btn pricing-btn-green">Sign Up (Student) &gt;</button>
             </div>
          </div>

          {/* Lawyer Card */}
          <div className="pricing-card-container pricing-card-lawyer">
             <div style={{ width: "130px", position: "relative", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
               <div style={{ width: "100%", height: "240px", position: "relative", zIndex: 1 }}>
                 <Image src="/lawyer_char.png" alt="Lawyer" fill style={{ objectFit: 'contain', objectPosition: 'center' }} />
               </div>
             </div>
             <div style={{ flex: 1, paddingLeft: "12px" }}>
               <h3 className="pixel-font" style={{ fontSize: "1.6rem", color: "#a243d6", marginBottom: "4px", display: "flex", alignItems: "center", gap: "8px" }}>
                 💼 Lawyers
               </h3>
               <div className="pixel-font" style={{ fontSize: "3.5rem", color: "#a243d6", marginBottom: "16px", textShadow: "2px 2px 0 rgba(0,0,0,0.5)", lineHeight: 1 }}>
                 ₹999 <span style={{ fontSize: "1.4rem", color: "#666", textShadow: "none" }}>/ month</span>
               </div>
               <ul className="pixel-font" style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0", color: "#aaa", lineHeight: 1.6, fontSize: "1.2rem" }}>
                 <li style={{ display: "flex", alignItems: "center", marginBottom: "4px" }}><span className="mc-bullet-purple"></span> Case upload + strategy</li>
                 <li style={{ display: "flex", alignItems: "center", marginBottom: "4px" }}><span className="mc-bullet-purple"></span> Scenario testing</li>
                 <li style={{ display: "flex", alignItems: "center", marginBottom: "4px" }}><span className="mc-bullet-purple"></span> Exportable reports</li>
               </ul>
               <button className="pricing-btn pricing-btn-purple">Join as Lawyer &gt;</button>
             </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "32px 64px", borderTop: "2px solid #333", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#0a0a0a" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", color: "#888", fontSize: "0.9rem" }}>
          <span className="pixel-font" style={{ fontSize: "1.5rem", color: "var(--minecraft-gold)" }}>🔨 BarresterBox</span>
          <span>•</span>
          <span>AI-powered Minecraft courtroom simulator</span>
          <span>•</span>
          <span>"Advisory only"</span>
        </div>
        <div style={{ display: "flex", gap: "24px", color: "#888", fontSize: "0.9rem" }}>
          <Link href="#" style={{ color: "#888", textDecoration: "none" }}>Terms</Link>
          <span>|</span>
          <Link href="#" style={{ color: "#888", textDecoration: "none" }}>Privacy</Link>
          <span>|</span>
          <Link href="#" style={{ color: "#888", textDecoration: "none" }}>Contact</Link>
        </div>
      </footer>
    </main>
  );
}
