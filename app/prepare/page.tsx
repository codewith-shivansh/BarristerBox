"use client";
import Link from "next/link";
import Image from "next/image";

export default function PrepareTrialPage() {
  return (
    <main style={{ 
      minHeight: "100vh", 
      background: "#111",
      backgroundImage: "radial-gradient(circle at center, #1a1a1a 0%, #050505 100%)",
      padding: "60px 24px", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center",
      fontFamily: "'Inter', sans-serif"
    }}>
      
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 className="pixel-font" style={{ 
          fontSize: "4rem", 
          color: "#eab308", // Gold
          textShadow: "4px 4px 0 #2a1c11", 
          margin: "0 0 16px 0", 
          textTransform: "uppercase",
          letterSpacing: "2px"
        }}>
          Prepare For Your Trial
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#e2e8f0", margin: 0 }}>
          Select your role, choose your case, and step into the BaresterBox.
        </p>
      </div>

      {/* Main Container */}
      <div style={{ 
        width: "100%", 
        maxWidth: "900px", 
        position: "relative", 
        border: "2px solid #333",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 20px 50px rgba(0,0,0,0.8)"
      }}>
        
        {/* Courtroom Background Image */}
        <div style={{ position: "relative", width: "100%", height: "600px" }}>
          <Image src="/iso_courtroom.png" alt="Courtroom Setup" fill style={{ objectFit: 'cover' }} />
          {/* Subtle gradient overlay to make settings pop */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)" }}></div>
        </div>

        {/* Case Settings Overlay */}
        <div style={{ 
          position: "absolute", 
          bottom: "30px", 
          left: "50%", 
          transform: "translateX(-50%)",
          width: "90%",
          maxWidth: "600px",
          background: "#181410",
          border: "4px solid #36261a",
          borderTopColor: "#4a3525",
          borderLeftColor: "#4a3525",
          borderRadius: "12px",
          padding: "24px 32px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.9)"
        }}>
          
          <h2 style={{ color: "#e2e8f0", fontSize: "1.4rem", textAlign: "center", margin: "0 0 20px 0", fontWeight: 600 }}>
            Case Settings
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            
            {/* Setting 1: Your Role */}
            <div style={{ 
              background: "#221c16", border: "1px solid #4a3525", borderRadius: "8px", 
              padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" 
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ fontSize: "1.2rem" }}>🔨</span>
                <span style={{ color: "#e2e8f0", fontWeight: 600 }}>Your Role:</span>
                <span style={{ color: "#cbd5e1" }}>Plaintiff Counsel</span>
              </div>
              <span style={{ fontSize: "1.2rem", color: "#eab308" }}>🔨</span>
            </div>

            {/* Setting 2: Case Type */}
            <div style={{ 
              background: "#221c16", border: "1px solid #4a3525", borderRadius: "8px", 
              padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" 
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ color: "#e2e8f0", fontWeight: 600 }}>Case Type:</span>
                <span style={{ color: "#cbd5e1" }}>Civil Litigation</span>
              </div>
              <span style={{ fontSize: "1.2rem" }}>📓</span>
            </div>

            {/* Setting 3: Category */}
            <div style={{ 
              background: "#221c16", border: "1px solid #4a3525", borderRadius: "8px", 
              padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" 
            }}>
              <div style={{ color: "#cbd5e1" }}>Criminal Defense Business & IP</div>
              <span style={{ fontSize: "1.2rem" }}>📜</span>
            </div>

            {/* Scenario Selection Section */}
            <div style={{ marginTop: "8px" }}>
              <h3 style={{ color: "#e2e8f0", fontSize: "1.1rem", margin: "0 0 12px 0", fontWeight: 600 }}>Scenario Selection</h3>
              <div style={{ 
                background: "#221c16", border: "1px solid #4a3525", borderRadius: "8px", 
                padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" 
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontSize: "1.5rem", color: "#4ade80", fontWeight: "bold" }}>+</span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ color: "#cbd5e1", fontSize: "0.95rem" }}>State vs. R. Sharma (Block Corp (Contract Dispute)</span>
                    <span style={{ color: "#cbd5e1", fontSize: "0.95rem" }}>Pisel Builders vs Bomract Dispute)</span>
                  </div>
                </div>
                <span style={{ fontSize: "1.2rem" }}>📜</span>
              </div>
            </div>

          </div>

          {/* Begin Trial Button */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: "24px" }}>
            <Link href="/simulator" style={{ 
              background: "linear-gradient(180deg, #fde047 0%, #eab308 100%)", 
              border: "3px solid #854d0e",
              borderRadius: "6px",
              padding: "12px 48px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              cursor: "pointer",
              textDecoration: "none",
              boxShadow: "0 4px 0 #854d0e, 0 8px 16px rgba(0,0,0,0.4)"
            }}>
              <span style={{ fontSize: "1.2rem", color: "#422006" }}>⚖️</span>
              <span className="pixel-font" style={{ fontSize: "2rem", color: "#422006", fontWeight: "bold", textShadow: "1px 1px 0 rgba(255,255,255,0.5)" }}>
                Begin Trial
              </span>
              <span style={{ fontSize: "1.2rem", color: "#422006" }}>⚖️</span>
            </Link>
          </div>

        </div>
      </div>

      {/* Footer Text */}
      <div style={{ textAlign: "center", marginTop: "32px" }}>
        <p style={{ color: "#e2e8f0", fontSize: "1.1rem", marginBottom: "24px", lineHeight: 1.6 }}>
          Every case, a quest. Every client our ally.<br/>
          Justice. Strategy, Victory.
        </p>
        <p style={{ color: "#64748b", fontSize: "0.85rem" }}>
          BaresterBox • AI-powered Minecraft courtroom simulator • *Advisory only.
        </p>
      </div>

    </main>
  );
}
