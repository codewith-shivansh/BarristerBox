"use client";
import Link from "next/link";
import Image from "next/image";

export default function LearningPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#1f2228", color: "#fff", fontFamily: "'Inter', sans-serif" }}>
      
      {/* Hero Section */}
      <section style={{ 
        position: "relative",
        minHeight: "500px",
        display: "flex",
        alignItems: "center",
        padding: "120px 64px 60px", // Top padding for fixed nav
        overflow: "hidden"
      }}>
        {/* Background image container */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image src="/mc_forest_bg.png" alt="Minecraft Landscape" fill style={{ objectFit: 'cover', opacity: 0.7 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(15,20,30,0.9) 0%, rgba(15,20,30,0.4) 50%, rgba(15,20,30,0.1) 100%)" }} />
        </div>

        <div style={{ position: "relative", zIndex: 1, maxWidth: "600px" }}>
          <h1 style={{ fontSize: "3.5rem", fontWeight: 700, lineHeight: 1.2, marginBottom: "20px" }}>
            Master the Law.<br />
            Level Up Your Skills
          </h1>
          <p style={{ fontSize: "1.2rem", color: "#d1d5db", marginBottom: "32px", lineHeight: 1.6 }}>
            Explore tracks, access resources, and forge your legal expertise.
          </p>
          <button style={{ 
            background: "#eab308", color: "#1a1c23", border: "none", 
            padding: "14px 32px", fontSize: "1.1rem", fontWeight: 600, 
            borderRadius: "6px", cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0,0,0,0.3)"
          }}>
            Explore All Tracks
          </button>
        </div>
      </section>

      {/* Learning Tracks Section */}
      <section style={{ padding: "80px 64px", background: "#252830" }}>
        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "8px" }}>Learning Tracks</h2>
          <p style={{ color: "#9ca3af", fontSize: "1.1rem" }}>Choose your specialization</p>
        </div>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
          
          {/* Card 1: Criminal Law */}
          <div style={{ background: "#1a1d24", borderRadius: "12px", padding: "32px", border: "1px solid #333842", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", boxShadow: "0 10px 25px rgba(0,0,0,0.4)" }}>
            <div style={{ fontSize: "3rem", marginBottom: "16px" }}>🔨</div>
            <h3 style={{ fontSize: "1.4rem", fontWeight: 600, marginBottom: "16px" }}>Criminal Law</h3>
            <p style={{ color: "#9ca3af", lineHeight: 1.6, marginBottom: "32px", flex: 1 }}>
              Delve into offenses, defenses, and courtroom procedure. Access case studies & guides.
            </p>
            <button style={{ background: "#eab308", color: "#1a1c23", border: "none", padding: "10px 24px", fontSize: "1rem", fontWeight: 600, borderRadius: "6px", cursor: "pointer", width: "100%" }}>
              View Resources
            </button>
          </div>

          {/* Card 2: Constitutional */}
          <div style={{ background: "#1a1d24", borderRadius: "12px", padding: "32px", border: "1px solid #333842", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", boxShadow: "0 10px 25px rgba(0,0,0,0.4)" }}>
            <div style={{ fontSize: "3rem", marginBottom: "16px", color: "#3b82f6" }}>⚙️</div>
            <h3 style={{ fontSize: "1.4rem", fontWeight: 600, marginBottom: "16px" }}>Constitutional</h3>
            <p style={{ color: "#9ca3af", lineHeight: 1.6, marginBottom: "32px", flex: 1 }}>
              Examine fundamental rights, government powers, & Explore articles & debates.
            </p>
            <button style={{ background: "#eab308", color: "#1a1c23", border: "none", padding: "10px 24px", fontSize: "1rem", fontWeight: 600, borderRadius: "6px", cursor: "pointer", width: "100%" }}>
              View Resources
            </button>
          </div>

          {/* Card 3: Contract Law */}
          <div style={{ background: "#1a1d24", borderRadius: "12px", padding: "32px", border: "1px solid #333842", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", boxShadow: "0 10px 25px rgba(0,0,0,0.4)" }}>
            <div style={{ fontSize: "3rem", marginBottom: "16px" }}>🤝</div>
            <h3 style={{ fontSize: "1.4rem", fontWeight: 600, marginBottom: "16px" }}>Contract Law</h3>
            <p style={{ color: "#9ca3af", lineHeight: 1.6, marginBottom: "32px", flex: 1 }}>
              Learn about agreements, obligations, and dispute resolution in Find templates and tutorials.
            </p>
            <button style={{ background: "#eab308", color: "#1a1c23", border: "none", padding: "10px 24px", fontSize: "1rem", fontWeight: 600, borderRadius: "6px", cursor: "pointer", width: "100%" }}>
              View Resources
            </button>
          </div>

        </div>
      </section>

      {/* Your Learning Journey Section */}
      <section style={{ padding: "80px 64px", background: "#252830" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "60px" }}>Your Learning Journey</h2>
        
        <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-start", maxWidth: "1000px", margin: "0 auto" }}>
          {/* Dashed Line */}
          <div style={{ position: "absolute", top: "50px", left: "20px", right: "20px", height: "2px", borderBottom: "2px dashed #4b5563", zIndex: 0 }}></div>

          {/* Step 1 */}
          <div style={{ position: "relative", zIndex: 1, display: "flex", gap: "16px", background: "#252830", paddingRight: "16px" }}>
            <div style={{ fontSize: "2.5rem" }}>🟩</div>
            <div>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "4px" }}>Beginner</h4>
              <p style={{ color: "#9ca3af", fontSize: "0.9rem", margin: 0 }}>Foundations & Basics</p>
            </div>
            {/* Node dot */}
            <div style={{ position: "absolute", bottom: "-14px", left: "16px", width: "10px", height: "10px", background: "#eab308", borderRadius: "50%" }}></div>
          </div>

          {/* Step 2 */}
          <div style={{ position: "relative", zIndex: 1, display: "flex", gap: "16px", background: "#252830", padding: "0 16px" }}>
            <div style={{ fontSize: "2.5rem", color: "#3b82f6" }}>⚙️</div>
            <div>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "4px" }}>Intermediate</h4>
              <p style={{ color: "#9ca3af", fontSize: "0.9rem", margin: 0 }}>Advanced Cases & Strategy</p>
            </div>
            <div style={{ position: "absolute", bottom: "-14px", left: "24px", width: "10px", height: "10px", background: "#eab308", borderRadius: "50%" }}></div>
          </div>

          {/* Step 3 */}
          <div style={{ position: "relative", zIndex: 1, display: "flex", gap: "16px", background: "#252830", padding: "0 16px" }}>
            <div style={{ fontSize: "2.5rem", color: "#8b5cf6" }}>🌟</div>
            <div>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "4px" }}>Advanced</h4>
              <p style={{ color: "#9ca3af", fontSize: "0.9rem", margin: 0 }}>& Mastery</p>
            </div>
            <div style={{ position: "absolute", bottom: "-14px", left: "24px", width: "10px", height: "10px", background: "#eab308", borderRadius: "50%" }}></div>
          </div>

          {/* Step 4 */}
          <div style={{ position: "relative", zIndex: 1, display: "flex", gap: "16px", background: "#252830", paddingLeft: "16px" }}>
            <div style={{ fontSize: "2.5rem", color: "#8b5cf6" }}>🌟</div>
            <div>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "4px" }}>Specialization</h4>
              <p style={{ color: "#9ca3af", fontSize: "0.9rem", margin: 0 }}>& Mastery</p>
            </div>
            <div style={{ position: "absolute", bottom: "-14px", left: "24px", width: "10px", height: "10px", background: "#eab308", borderRadius: "50%" }}></div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: "60px 64px 80px", background: "#252830", borderBottom: "1px solid #333842" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "24px" }}>Ready to Forge Your Legal Destiny?</h2>
        <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
          <button style={{ 
            background: "#4ade80", color: "#14532d", border: "none", 
            padding: "12px 24px", fontSize: "1.1rem", fontWeight: 600, 
            borderRadius: "6px", cursor: "pointer"
          }}>
            Access All Learning Resources
          </button>
          <button style={{ 
            background: "#eab308", color: "#1a1c23", border: "none", 
            padding: "12px 32px", fontSize: "1.1rem", fontWeight: 600, 
            borderRadius: "6px", cursor: "pointer"
          }}>
            Start Your Path
          </button>
        </div>
        <p style={{ color: "#9ca3af", fontSize: "1rem" }}>Join thousands of aspiring legal minds in BarresterBox</p>
      </section>

      {/* Footer */}
      <footer style={{ padding: "32px 64px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#1f2228" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", color: "#888", fontSize: "0.9rem" }}>
          <span className="pixel-font" style={{ fontSize: "1.5rem", color: "var(--minecraft-gold)" }}>🔨 BarresterBox</span>
          <span>•</span>
          <span>AI-powered Minecraft courtroom simulator</span>
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
  );
}
