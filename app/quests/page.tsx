"use client";
import Link from "next/link";
import Image from "next/image";

export default function QuestsPage() {
  return (
    <main style={{ 
      minHeight: "100vh", 
      position: "relative",
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center",
      padding: "120px 24px 60px",
      overflow: "hidden"
    }}>
      
      {/* Background Image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image src="/iso_courtroom.png" alt="Minecraft Courtroom Background" fill style={{ objectFit: 'cover' }} />
        {/* Very dark overlay to match the image's moody lighting */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(10, 10, 10, 0.85)" }}></div>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at center 30%, transparent 0%, rgba(0,0,0,0.9) 100%)" }}></div>
      </div>

      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "1000px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        
        {/* Top Header Section */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "60px", textAlign: "center" }}>
          
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "8px" }}>
            <div style={{ height: "2px", width: "40px", background: "#c89f3a" }}></div>
            <span style={{ fontSize: "2rem", color: "#c89f3a" }}>⚖️</span>
            <div style={{ height: "2px", width: "40px", background: "#c89f3a" }}></div>
          </div>
          
          <h1 className="pixel-font" style={{ 
            fontSize: "5.5rem", 
            color: "#eab308", 
            margin: "0 0 16px 0", 
            textShadow: "4px 4px 0 #3e2723, 0 8px 16px rgba(0,0,0,0.8)",
            letterSpacing: "2px"
          }}>
            Legal Quests
          </h1>

          <div className="pixel-font" style={{ 
            background: "#1a1a1a", 
            border: "2px solid #333", 
            borderTopColor: "#444", borderLeftColor: "#444",
            padding: "8px 24px", 
            borderRadius: "4px",
            fontSize: "1.8rem",
            color: "#d1d1d1",
            marginBottom: "24px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.5)"
          }}>
            (Practice Areas)
          </div>

          <p className="pixel-font" style={{ fontSize: "1.4rem", color: "#e2e8f0", maxWidth: "500px", lineHeight: 1.4, textShadow: "2px 2px 0 #000" }}>
            Accept a case-quest and let our attorneys level up your defense.
          </p>

        </div>

        {/* Quest Cards Container */}
        <div style={{ display: "flex", justifyContent: "center", gap: "32px", width: "100%", flexWrap: "wrap" }}>
          
          {/* Civil Litigation (Brown) */}
          <div style={{ 
            flex: 1, minWidth: "280px", maxWidth: "320px", 
            background: "#2a1c11", 
            border: "4px solid #1a1009", 
            borderTopColor: "#3d2b1f", borderLeftColor: "#3d2b1f",
            borderRadius: "8px", 
            position: "relative",
            padding: "50px 24px 32px",
            display: "flex", flexDirection: "column", alignItems: "center",
            boxShadow: "0 10px 30px rgba(0,0,0,0.8), inset 0 0 20px rgba(0,0,0,0.5)",
            marginTop: "30px" // Space for floating icon
          }}>
            {/* Floating Icon */}
            <div style={{
              position: "absolute", top: "-40px", left: "50%", transform: "translateX(-50%)",
              width: "80px", height: "80px",
              background: "#3d2b1f",
              border: "4px solid #1a1009",
              borderTopColor: "#4a3525", borderLeftColor: "#4a3525",
              borderRadius: "8px",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 8px 16px rgba(0,0,0,0.6)"
            }}>
              <span style={{ fontSize: "3rem", filter: "drop-shadow(2px 2px 0 #000)" }}>⚖️</span>
            </div>

            <h2 className="pixel-font" style={{ fontSize: "1.8rem", color: "#fff", margin: "0 0 16px 0", display: "flex", alignItems: "center", gap: "8px", textShadow: "2px 2px 0 #000" }}>
              <span style={{ fontSize: "1.2rem" }}>⚖️</span> Civil Litigation
            </h2>
            
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px", opacity: 0.6 }}>
              <div style={{ height: "2px", width: "24px", background: "#88705b" }}></div>
              <span style={{ color: "#88705b", fontSize: "0.8rem" }}>♦</span>
              <div style={{ height: "2px", width: "24px", background: "#88705b" }}></div>
            </div>

            <p className="pixel-font" style={{ color: "#d1d1d1", fontSize: "1.2rem", textAlign: "center", lineHeight: 1.5, flex: 1, margin: "0 0 32px 0" }}>
              Disputes over contracts, property, and damages.
            </p>

            <Link href="/before-game" className="pixel-font" style={{
              width: "100%", padding: "16px",
              background: "#b08d44", border: "2px solid #5c4415", borderTopColor: "#dcb871", borderLeftColor: "#dcb871", borderBottomWidth: "4px",
              color: "#fff", fontSize: "1.4rem", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", textShadow: "2px 2px 0 rgba(0,0,0,0.5)",
              transition: "transform 0.1s"
            }}>
              Choose Quest <span>🗡️</span>
            </Link>
          </div>

          {/* Criminal Defense (Dark) */}
          <div style={{ 
            flex: 1, minWidth: "280px", maxWidth: "320px", 
            background: "#151515", 
            border: "4px solid #050505", 
            borderTopColor: "#2a2a2a", borderLeftColor: "#2a2a2a",
            borderRadius: "8px", 
            position: "relative",
            padding: "50px 24px 32px",
            display: "flex", flexDirection: "column", alignItems: "center",
            boxShadow: "0 10px 30px rgba(0,0,0,0.8), inset 0 0 20px rgba(0,0,0,0.5)",
            marginTop: "30px"
          }}>
            <div style={{
              position: "absolute", top: "-40px", left: "50%", transform: "translateX(-50%)",
              width: "80px", height: "80px",
              background: "#222",
              border: "4px solid #050505",
              borderTopColor: "#333", borderLeftColor: "#333",
              borderRadius: "8px",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 8px 16px rgba(0,0,0,0.6)"
            }}>
              <span style={{ fontSize: "3rem", filter: "drop-shadow(2px 2px 0 #000)" }}>⚔️</span>
            </div>

            <h2 className="pixel-font" style={{ fontSize: "1.8rem", color: "#fff", margin: "0 0 16px 0", display: "flex", alignItems: "center", gap: "8px", textShadow: "2px 2px 0 #000" }}>
              <span style={{ fontSize: "1.2rem" }}>⚔️</span> Criminal Defense
            </h2>
            
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px", opacity: 0.6 }}>
              <div style={{ height: "2px", width: "24px", background: "#888" }}></div>
              <span style={{ color: "#888", fontSize: "0.8rem" }}>♦</span>
              <div style={{ height: "2px", width: "24px", background: "#888" }}></div>
            </div>

            <p className="pixel-font" style={{ color: "#d1d1d1", fontSize: "1.2rem", textAlign: "center", lineHeight: 1.5, flex: 1, margin: "0 0 32px 0" }}>
              Misdemeanors, felonies, and "charged blocks".
            </p>

            <Link href="/before-game" className="pixel-font" style={{
              width: "100%", padding: "16px",
              background: "#8b0000", border: "2px solid #4a0000", borderTopColor: "#b30000", borderLeftColor: "#b30000", borderBottomWidth: "4px",
              color: "#fff", fontSize: "1.4rem", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", textShadow: "2px 2px 0 rgba(0,0,0,0.5)",
              transition: "transform 0.1s"
            }}>
              Choose Quest <span>🗡️</span>
            </Link>
          </div>

          {/* Business & IP (Green) */}
          <div style={{ 
            flex: 1, minWidth: "280px", maxWidth: "320px", 
            background: "#112613", 
            border: "4px solid #081209", 
            borderTopColor: "#1d3d20", borderLeftColor: "#1d3d20",
            borderRadius: "8px", 
            position: "relative",
            padding: "50px 24px 32px",
            display: "flex", flexDirection: "column", alignItems: "center",
            boxShadow: "0 10px 30px rgba(0,0,0,0.8), inset 0 0 20px rgba(0,0,0,0.5)",
            marginTop: "30px"
          }}>
            <div style={{
              position: "absolute", top: "-40px", left: "50%", transform: "translateX(-50%)",
              width: "80px", height: "80px",
              background: "#1d3d20",
              border: "4px solid #081209",
              borderTopColor: "#2e5c32", borderLeftColor: "#2e5c32",
              borderRadius: "8px",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 8px 16px rgba(0,0,0,0.6)"
            }}>
              <span style={{ fontSize: "3rem", filter: "drop-shadow(2px 2px 0 #000)" }}>📜</span>
            </div>

            <h2 className="pixel-font" style={{ fontSize: "1.8rem", color: "#fff", margin: "0 0 16px 0", display: "flex", alignItems: "center", gap: "8px", textShadow: "2px 2px 0 #000" }}>
              <span style={{ fontSize: "1.2rem" }}>📜</span> Business & IP
            </h2>
            
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px", opacity: 0.6 }}>
              <div style={{ height: "2px", width: "24px", background: "#66bb6a" }}></div>
              <span style={{ color: "#66bb6a", fontSize: "0.8rem" }}>♦</span>
              <div style={{ height: "2px", width: "24px", background: "#66bb6a" }}></div>
            </div>

            <p className="pixel-font" style={{ color: "#d1d1d1", fontSize: "1.2rem", textAlign: "center", lineHeight: 1.5, flex: 1, margin: "0 0 32px 0" }}>
              Startups, trademarks, NFTs, and mod-style IP.
            </p>

            <Link href="/before-game" className="pixel-font" style={{
              width: "100%", padding: "16px",
              background: "#2e5c32", border: "2px solid #142e16", borderTopColor: "#438249", borderLeftColor: "#438249", borderBottomWidth: "4px",
              color: "#fff", fontSize: "1.4rem", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", textShadow: "2px 2px 0 rgba(0,0,0,0.5)",
              transition: "transform 0.1s"
            }}>
              Choose Quest <span>🗡️</span>
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}
