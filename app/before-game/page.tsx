"use client";
import Link from "next/link";
import Image from "next/image";

export default function RulesPage() {
  return (
    <main style={{ 
      minHeight: "100vh", 
      background: "#0a0a0a", // Dark background
      backgroundImage: "radial-gradient(circle at top center, #151515 0%, #050505 100%)",
      padding: "120px 24px 60px", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center" 
    }}>
      
      {/* Top Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "8px" }}>
        <span style={{ fontSize: "3rem", color: "var(--minecraft-gold)" }}>⚖️</span>
        <h1 className="pixel-font" style={{ fontSize: "4rem", color: "#dcb871", textShadow: "3px 3px 0 #111", margin: 0, letterSpacing: "2px" }}>
          3D Minecraft Courtroom
        </h1>
        <span style={{ fontSize: "3rem", color: "var(--minecraft-gold)" }}>⚖️</span>
      </div>

      {/* Decorative Divider */}
      <div className="title-divider-container" style={{ marginBottom: "32px", opacity: 0.8 }}>
        <div className="title-line" style={{ width: "80px", background: "#8B6914", height: "2px" }}></div>
        <span className="title-diamond" style={{ color: "#dcb871", fontSize: "0.8rem" }}>♦</span>
        <div className="title-line" style={{ width: "80px", background: "#8B6914", height: "2px" }}></div>
      </div>

      <div style={{ maxWidth: "800px", width: "100%", display: "flex", flexDirection: "column", gap: "24px" }}>
        
        {/* Main Image Container */}
        <div style={{ 
          width: "100%", 
          height: "400px", 
          position: "relative", 
          border: "4px solid #3d2e0f",
          borderTopColor: "#6d5423",
          borderLeftColor: "#6d5423",
          borderRadius: "8px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.8), inset 0 0 20px rgba(0,0,0,0.8)",
          overflow: "hidden"
        }}>
          <Image src="/iso_courtroom.png" alt="Courtroom" fill style={{ objectFit: 'cover' }} />
          {/* Subtle inner dark vignette for cinematic feel */}
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle, transparent 40%, rgba(0,0,0,0.7) 100%)", pointerEvents: "none" }}></div>
          <div style={{ position: "absolute", inset: 0, border: "2px solid #111", borderRadius: "4px", pointerEvents: "none" }}></div>
        </div>

        {/* Rules Panel */}
        <div style={{
          background: "#181410",
          border: "4px solid #36261a",
          borderTopColor: "#4a3525",
          borderLeftColor: "#4a3525",
          borderRadius: "12px",
          padding: "32px 40px",
          boxShadow: "inset 0 0 0 2px #0d0a08, 0 10px 20px rgba(0,0,0,0.5)"
        }}>
          
          {/* Rules Title */}
          <div className="title-divider-container" style={{ marginBottom: "32px" }}>
            <div className="title-line" style={{ width: "40px", background: "#4a3525", boxShadow: "none" }}></div>
            <span className="title-diamond" style={{ color: "#88705b", fontSize: "0.8rem" }}>♦</span>
            <h2 className="pixel-font" style={{ fontSize: "2rem", color: "#e0d3c1", margin: "0 16px", letterSpacing: "1px", textShadow: "2px 2px 0 #000" }}>Courtroom Rules</h2>
            <span className="title-diamond" style={{ color: "#88705b", fontSize: "0.8rem" }}>♦</span>
            <div className="title-line" style={{ width: "40px", background: "#4a3525", boxShadow: "none" }}></div>
          </div>

          {/* Rules List */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            
            {/* Rule 1 */}
            <div style={{ display: "flex", alignItems: "center", gap: "24px", padding: "16px 0", borderBottom: "2px solid #291e15" }}>
              <div className="pixel-font" style={{ 
                width: "48px", height: "48px", 
                background: "#362215", 
                border: "2px solid #754f30", 
                borderBottomColor: "#1f130b", borderRightColor: "#1f130b",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#e0c78d", fontSize: "1.8rem", borderRadius: "6px",
                textShadow: "2px 2px 0 #000"
              }}>1</div>
              <div className="pixel-font" style={{ flex: 1, fontSize: "1.5rem", color: "#d1d1d1", textShadow: "1px 1px 0 #000" }}>
                Do not probear.
              </div>
              <div style={{ fontSize: "1.8rem", filter: "drop-shadow(2px 2px 0 #000)", opacity: 0.8 }}>🚫</div>
            </div>

            {/* Rule 2 */}
            <div style={{ display: "flex", alignItems: "center", gap: "24px", padding: "16px 0", borderBottom: "2px solid #291e15" }}>
              <div className="pixel-font" style={{ 
                width: "48px", height: "48px", 
                background: "#362215", 
                border: "2px solid #754f30", 
                borderBottomColor: "#1f130b", borderRightColor: "#1f130b",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#e0c78d", fontSize: "1.8rem", borderRadius: "6px",
                textShadow: "2px 2px 0 #000"
              }}>2</div>
              <div className="pixel-font" style={{ flex: 1, fontSize: "1.5rem", color: "#d1d1d1", textShadow: "1px 1px 0 #000" }}>
                Respect the Judge's rulings.
              </div>
              <div style={{ fontSize: "1.8rem", filter: "drop-shadow(2px 2px 0 #000)", color: "var(--minecraft-gold)" }}>⚖️</div>
            </div>

            {/* Rule 3 */}
            <div style={{ display: "flex", alignItems: "center", gap: "24px", padding: "16px 0", borderBottom: "none" }}>
              <div className="pixel-font" style={{ 
                width: "48px", height: "48px", 
                background: "#362215", 
                border: "2px solid #754f30", 
                borderBottomColor: "#1f130b", borderRightColor: "#1f130b",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#e0c78d", fontSize: "1.8rem", borderRadius: "6px",
                textShadow: "2px 2px 0 #000"
              }}>3</div>
              <div className="pixel-font" style={{ flex: 1, fontSize: "1.5rem", color: "#d1d1d1", textShadow: "1px 1px 0 #000" }}>
                Submit evidence in "block form" (PDF, screenshots, logs).
              </div>
              <div style={{ fontSize: "1.8rem", filter: "drop-shadow(2px 2px 0 #000)" }}>📄</div>
            </div>

          </div>
        </div>

        {/* Action buttons (Not visible in Figma but required for flow) */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}>
          <Link href="#" className="mc-btn mc-btn-green" style={{ fontSize: "1.5rem", padding: "16px 48px" }}>
            I Agree, Enter Courtroom &gt;
          </Link>
        </div>

      </div>
    </main>
  );
}
