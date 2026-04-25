"use client";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <main style={{ minHeight: "100vh", position: "relative", display: "flex", overflow: "hidden" }}>
      {/* Full screen background image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image 
          src="/about_bg.png" 
          alt="Minecraft Courtroom" 
          fill 
          style={{ objectFit: 'cover', opacity: 0.8 }} 
        />
        {/* Dark vignette overlay */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle, transparent 20%, rgba(0,0,0,0.8) 100%)" }} />
      </div>

      {/* Main Content Container */}
      <div style={{ position: "relative", zIndex: 1, display: "flex", width: "100%", padding: "120px 64px 40px", boxSizing: "border-box", justifyContent: "space-between" }}>
        
        {/* Left Column: Form Panels */}
        <div style={{ width: "450px", display: "flex", flexDirection: "column", gap: "16px" }}>
          
          {/* Top Panel (Header) */}
          <div style={{ 
            background: "#1a1612", 
            border: "4px solid #3d3b38",
            borderTopColor: "#52504c",
            borderLeftColor: "#52504c",
            padding: "24px",
            position: "relative",
            boxShadow: "inset 0 0 0 2px #0a0a0a, 4px 4px 10px rgba(0,0,0,0.5)"
          }}>
            {/* Banner with Scale */}
            <div style={{
              position: "absolute",
              left: "-16px",
              top: "-16px",
              width: "64px",
              height: "80px",
              background: "#6b1414",
              border: "4px solid #8b1c1c",
              borderBottom: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "2px 2px 0 rgba(0,0,0,0.5)"
            }}>
              {/* Banner bottom pointy part using clip-path */}
              <div style={{
                position: "absolute",
                bottom: "-16px",
                left: "-4px",
                width: "64px",
                height: "20px",
                background: "#6b1414",
                borderLeft: "4px solid #8b1c1c",
                borderRight: "4px solid #8b1c1c",
                clipPath: "polygon(0 0, 100% 0, 50% 100%)"
              }}></div>
              <span style={{ fontSize: "2rem", zIndex: 1, color: "var(--minecraft-gold)" }}>⚖️</span>
            </div>

            <div style={{ paddingLeft: "60px" }}>
              <h1 className="pixel-font" style={{ fontSize: "2.8rem", lineHeight: 1.1, margin: "0 0 16px 0", textShadow: "2px 2px 0 #000" }}>
                <span style={{ color: "var(--minecraft-gold)" }}>⚡</span> <span style={{ color: "#fff" }}>Join Our</span><br />
                <span style={{ color: "var(--minecraft-gold)" }}>Legal Guild</span>
              </h1>
              <p className="pixel-font" style={{ color: "#d1d1d1", fontSize: "1.2rem", lineHeight: 1.5, margin: 0 }}>
                Whether you're PNGU (Player-Not-Guilty) or a corporate client, book your free "session".
              </p>
            </div>
          </div>

          {/* Bottom Panel (Form) */}
          <div style={{ 
            background: "#1a1612", 
            border: "4px solid #3d3b38",
            borderTopColor: "#52504c",
            borderLeftColor: "#52504c",
            padding: "24px",
            boxShadow: "inset 0 0 0 2px #0a0a0a, 4px 4px 10px rgba(0,0,0,0.5)"
          }}>
            <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              
              {/* Field 1 */}
              <div>
                <label className="pixel-font" style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--minecraft-gold)", fontSize: "1.3rem", marginBottom: "8px" }}>
                  👦 Player Name (In-Game or Real)
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. @PixelLawyer"
                  className="pixel-font"
                  style={{
                    width: "100%",
                    padding: "12px",
                    background: "#0a0a0a",
                    border: "2px solid #3d3b38",
                    color: "#fff",
                    fontSize: "1.2rem",
                    outline: "none",
                    boxSizing: "border-box"
                  }}
                />
              </div>

              {/* Field 2 */}
              <div>
                <label className="pixel-font" style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--minecraft-gold)", fontSize: "1.3rem", marginBottom: "8px" }}>
                  ✉️ Email / Discord
                </label>
                <input 
                  type="text" 
                  placeholder="your@email.com"
                  className="pixel-font"
                  style={{
                    width: "100%",
                    padding: "12px",
                    background: "#0a0a0a",
                    border: "2px solid #3d3b38",
                    color: "#fff",
                    fontSize: "1.2rem",
                    outline: "none",
                    boxSizing: "border-box"
                  }}
                />
              </div>

              {/* Field 3 */}
              <div>
                <label className="pixel-font" style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--minecraft-gold)", fontSize: "1.3rem", marginBottom: "8px" }}>
                  📖 Case Type
                </label>
                <select 
                  className="pixel-font"
                  style={{
                    width: "100%",
                    padding: "12px",
                    background: "#0a0a0a",
                    border: "2px solid #3d3b38",
                    color: "#fff",
                    fontSize: "1.2rem",
                    outline: "none",
                    boxSizing: "border-box",
                    appearance: "none",
                    backgroundImage: "url('data:image/svg+xml;utf8,<svg fill=\"%23ffd700\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 10l5 5 5-5z\"/></svg>')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 8px center"
                  }}
                >
                  <option>Civil</option>
                  <option>Criminal</option>
                  <option>Corporate</option>
                </select>
              </div>

              {/* Submit Button */}
              <button 
                type="button"
                className="pixel-font"
                style={{
                  width: "100%",
                  marginTop: "8px",
                  padding: "16px",
                  background: "#b08d44",
                  border: "2px solid #6d5423",
                  borderTopColor: "#dcb871",
                  borderLeftColor: "#dcb871",
                  borderBottomWidth: "4px",
                  color: "#fff",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  textShadow: "2px 2px 0 rgba(0,0,0,0.5)",
                  transition: "all 0.1s"
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.borderBottomWidth = "2px";
                  e.currentTarget.style.transform = "translateY(2px)";
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.borderBottomWidth = "4px";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Summon Your Attorney <span>🔨</span>
              </button>

            </form>
          </div>

          {/* Footer Under Form */}
          <div style={{ 
            background: "#1a1612", 
            border: "4px solid #3d3b38",
            borderTopColor: "#52504c",
            borderLeftColor: "#52504c",
            padding: "16px 24px",
            boxShadow: "inset 0 0 0 2px #0a0a0a, 4px 4px 10px rgba(0,0,0,0.5)",
            textAlign: "center"
          }}>
            <p className="pixel-font" style={{ color: "#d1d1d1", fontSize: "1.2rem", margin: 0 }}>
              <span style={{ marginRight: "8px" }}>🗡️</span> Justice. Strategy. Victory.
            </p>
          </div>

        </div>

        {/* Right Bottom Panel */}
        <div style={{ alignSelf: "flex-end", marginBottom: "40px" }}>
          <div style={{ 
            background: "#1a1612", 
            border: "4px solid #3d3b38",
            borderTopColor: "#52504c",
            borderLeftColor: "#52504c",
            padding: "20px 32px",
            boxShadow: "inset 0 0 0 2px #0a0a0a, 4px 4px 10px rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            gap: "20px"
          }}>
            <span style={{ fontSize: "3rem", color: "var(--minecraft-gold)" }}>⚖️</span>
            <div className="pixel-font" style={{ color: "#d1d1d1", fontSize: "1.4rem", lineHeight: 1.4 }}>
              Every case is a quest.<br/>
              Every client is our ally.
            </div>
          </div>
        </div>

      </div>

    </main>
  );
}
