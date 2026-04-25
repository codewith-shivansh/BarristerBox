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
          <Link href="#" className="mc-btn" style={{ fontSize: "1.5rem", padding: "16px 32px" }}>
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
        <h2 className="section-title">
          <span style={{ color: "var(--minecraft-gold)" }}>✦</span> 
          Legal Quests (Core Features) 
          <span style={{ color: "var(--minecraft-gold)" }}>✦</span>
        </h2>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
          {[
            { title: "AI Courtroom Simulator", icon: "⚖️", desc: "Battle an AI opponent, react to an AI judge, and sharpen your arguments." },
            { title: "Strategy Generator", icon: "🧠", desc: "Get AI-generated arguments and counter-arguments before your \"trial\"." },
            { title: "Learning Engine", icon: "📚", desc: "After each round: strengths, weaknesses, and legal concepts that powered you." },
            { title: "LexAI Assistant", icon: "🤖", desc: "Ask legal questions, summarize cases, and test your best-argument theories." }
          ].map((f, i) => (
            <div key={i} className="mc-panel mc-panel-gold" style={{ padding: "32px 24px" }}>
              <h3 className="pixel-font" style={{ fontSize: "1.5rem", color: "var(--minecraft-gold)", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                <span>{f.icon}</span> {f.title}
              </h3>
              <p style={{ color: "#bbb", fontSize: "1rem", lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Progression Section */}
      <section style={{ padding: "80px 64px" }}>
        <div className="mc-panel" style={{ padding: "60px", textAlign: "center", backgroundImage: "linear-gradient(to bottom, #1e1e1e 0%, #151515 100%)" }}>
          <h2 className="pixel-font" style={{ fontSize: "3rem", marginBottom: "16px", textShadow: "2px 2px 0 #000" }}>Level Up Your Legal Skills</h2>
          <p style={{ color: "#aaa", marginBottom: "48px" }}>Beginner → Intermediate → Advanced with tracks in Criminal, Constitutional, and Contract Law.</p>
          
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
            <div className="mc-panel mc-panel-green" style={{ padding: "16px 32px", display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ fontSize: "2rem" }}>🗡️</span>
              <span className="pixel-font" style={{ fontSize: "1.8rem" }}>Beginner</span>
            </div>
            <div style={{ color: "#555", letterSpacing: "4px", fontSize: "1.5rem" }}>-----&gt;</div>
            <div className="mc-panel mc-panel-gold" style={{ padding: "16px 32px", display: "flex", alignItems: "center", gap: "16px", borderColor: "#2196f3" }}>
              <span style={{ fontSize: "2rem" }}>🛡️</span>
              <span className="pixel-font" style={{ fontSize: "1.8rem" }}>Intermediate</span>
            </div>
            <div style={{ color: "#555", letterSpacing: "4px", fontSize: "1.5rem" }}>-----&gt;</div>
            <div className="mc-panel mc-panel-purple" style={{ padding: "16px 32px", display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ fontSize: "2rem" }}>⭐</span>
              <span className="pixel-font" style={{ fontSize: "1.8rem" }}>Advanced</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section style={{ padding: "80px 64px 120px" }}>
        <h2 className="section-title">
          <span style={{ color: "var(--minecraft-gold)" }}>✦</span> 
          Join the Legal Guild
          <span style={{ color: "var(--minecraft-gold)" }}>✦</span>
        </h2>

        <div style={{ display: "flex", justifyContent: "center", gap: "40px", maxWidth: "1000px", margin: "0 auto", flexWrap: "wrap" }}>
          
          {/* Student Card */}
          <div className="mc-panel mc-panel-green" style={{ flex: 1, minWidth: "300px", padding: "40px", display: "flex", gap: "24px" }}>
             <div style={{ width: "100px", height: "180px", position: "relative", flexShrink: 0 }}>
               <Image src="/student_char.png" alt="Student" fill style={{ objectFit: 'contain' }} />
             </div>
             <div style={{ flex: 1 }}>
               <h3 className="pixel-font" style={{ fontSize: "2rem", color: "#81c784", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>
                 🎓 Students
               </h3>
               <div className="pixel-font" style={{ fontSize: "3rem", color: "#fff", marginBottom: "24px", textShadow: "2px 2px 0 #000" }}>
                 ₹99 <span style={{ fontSize: "1.2rem", color: "#aaa" }}>/ month</span>
               </div>
               <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px 0", color: "#ccc", lineHeight: 2 }}>
                 <li>✅ Access to all cases</li>
                 <li>✅ LexAI basic</li>
                 <li>✅ Leaderboard + XP</li>
               </ul>
               <button className="mc-btn mc-btn-green" style={{ width: "100%" }}>Sign Up (Student) &gt;</button>
             </div>
          </div>

          {/* Lawyer Card */}
          <div className="mc-panel mc-panel-purple" style={{ flex: 1, minWidth: "300px", padding: "40px", display: "flex", gap: "24px" }}>
             <div style={{ width: "100px", height: "180px", position: "relative", flexShrink: 0 }}>
               <Image src="/lawyer_char.png" alt="Lawyer" fill style={{ objectFit: 'contain' }} />
             </div>
             <div style={{ flex: 1 }}>
               <h3 className="pixel-font" style={{ fontSize: "2rem", color: "#ba68c8", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>
                 💼 Lawyers
               </h3>
               <div className="pixel-font" style={{ fontSize: "3rem", color: "#fff", marginBottom: "24px", textShadow: "2px 2px 0 #000" }}>
                 ₹999 <span style={{ fontSize: "1.2rem", color: "#aaa" }}>/ month</span>
               </div>
               <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px 0", color: "#ccc", lineHeight: 2 }}>
                 <li>✅ Case upload + strategy</li>
                 <li>✅ Scenario testing</li>
                 <li>✅ Exportable reports</li>
               </ul>
               <button className="mc-btn mc-btn-purple" style={{ width: "100%" }}>Join as Lawyer &gt;</button>
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
