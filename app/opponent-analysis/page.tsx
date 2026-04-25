"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function OpponentAnalysisPage() {
  return (
    <div style={{ 
      position: "fixed", inset: 0, zIndex: 9999, 
      background: "#1a1b1e", color: "#e2e8f0", 
      display: "flex", flexDirection: "column",
      fontFamily: "'Inter', sans-serif"
    }}>
      
      {/* Dark overlay with background image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image src="/iso_courtroom.png" alt="Courtroom Background" fill style={{ objectFit: 'cover', opacity: 0.1, filter: "blur(4px)" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%", overflowY: "auto" }}>
        
        {/* Navigation Bar (Simulated) */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 32px", background: "#111", borderBottom: "1px solid #222" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontSize: "1.8rem", color: "#facc15" }}>B</span>
            <span style={{ fontSize: "1.5rem", fontWeight: 700, color: "#fff" }}>BaresterBox</span>
          </div>
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <Link href="/simulator" style={{ color: "#9ca3af", textDecoration: "none", fontSize: "1.05rem" }}>Battle</Link>
            <Link href="/judge-insights" style={{ color: "#9ca3af", fontSize: "1.05rem", cursor: "pointer", textDecoration: "none" }}>Judge Insights</Link>
            <div style={{ padding: "8px 16px", background: "#facc15", color: "#111", borderRadius: "4px", fontWeight: 600, fontSize: "1.05rem" }}>
              Opponent Analysis
            </div>
            <Link href="/learning-mode" style={{ color: "#9ca3af", textDecoration: "none", fontSize: "1.05rem" }}>Learning Mode</Link>
            <Link href="/case-summary" style={{ color: "#9ca3af", textDecoration: "none", fontSize: "1.05rem" }}>Case Summary</Link>
          </div>
          <div style={{ padding: "10px 24px", background: "#4ade80", color: "#14532d", borderRadius: "4px", fontWeight: 600, cursor: "pointer" }}>
            Start Simulation
          </div>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: "40px 24px", display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "1000px", margin: "0 auto", width: "100%" }}>
          
          {/* Title Box */}
          <div style={{ 
            width: "100%", background: "#25262b", border: "4px solid #facc15", 
            borderRadius: "8px", padding: "20px", textAlign: "center", marginBottom: "32px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.5)"
          }}>
            <h1 style={{ margin: 0, fontSize: "2.2rem", fontWeight: 700, color: "#fff" }}>Opponent Analysis</h1>
          </div>

          <div style={{ display: "flex", gap: "24px", width: "100%", flexWrap: "wrap", marginBottom: "24px" }}>
            
            {/* Left Column: Strategy */}
            <div style={{ 
              flex: 1, minWidth: "350px", background: "#25262b", 
              borderRadius: "12px", padding: "32px", border: "1px solid #333",
              boxShadow: "0 10px 30px rgba(0,0,0,0.4)"
            }}>
              <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 24px 0", color: "#fff", lineHeight: 1.4 }}>
                Opponent's Strategy for<br/>State vs. R. Sharma
              </h2>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <span style={{ color: "#ef4444", fontSize: "1.2rem", marginTop: "2px" }}>❌</span>
                  <span style={{ color: "#e2e8f0", fontSize: "1.1rem", lineHeight: 1.5 }}>Main Argument: Video evidence is conclusive proof.</span>
                </div>
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <span style={{ color: "#ef4444", fontSize: "1.2rem", marginTop: "2px" }}>❌</span>
                  <span style={{ color: "#e2e8f0", fontSize: "1.1rem", lineHeight: 1.5 }}>Reinforcement: Cites "State of Block v. Pixelton" precedent.</span>
                </div>
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <span style={{ color: "transparent", fontSize: "1.2rem", marginTop: "2px" }}>❌</span>
                  <span style={{ color: "#e2e8f0", fontSize: "1.1rem", lineHeight: 1.5 }}>Expected Counter: Will challenge defense's misidentification claim.</span>
                </div>
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <span style={{ color: "#ef4444", fontSize: "1.2rem", marginTop: "2px" }}>❌</span>
                  <span style={{ color: "#e2e8f0", fontSize: "1.1rem", lineHeight: 1.5 }}>Focus: Establish clear chain of custody for video.</span>
                </div>
              </div>
            </div>

            {/* Right Column: Weaknesses */}
            <div style={{ 
              flex: 1, minWidth: "350px", background: "#25262b", 
              borderRadius: "12px", padding: "32px", border: "1px solid #333",
              boxShadow: "0 10px 30px rgba(0,0,0,0.4)"
            }}>
              <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 24px 0", color: "#fff", lineHeight: 1.4 }}>
                Exploitable<br/>Weaknesses
              </h2>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <span style={{ color: "#4ade80", fontSize: "1.2rem", marginTop: "2px" }}>✔️</span>
                  <span style={{ color: "#e2e8f0", fontSize: "1.1rem", lineHeight: 1.5 }}>Video quality is poor in low light.</span>
                </div>
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <span style={{ color: "#4ade80", fontSize: "1.2rem", marginTop: "2px" }}>✔️</span>
                  <span style={{ color: "#e2e8f0", fontSize: "1.1rem", lineHeight: 1.5 }}>No secondary witnesses corroborate.</span>
                </div>
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <span style={{ color: "#4ade80", fontSize: "1.2rem", marginTop: "2px" }}>✔️</span>
                  <span style={{ color: "#e2e8f0", fontSize: "1.1rem", lineHeight: 1.5 }}>Precedent cited is for different section of IPC.</span>
                </div>
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", marginTop: "16px" }}>
                  <span style={{ color: "transparent", fontSize: "1.2rem", marginTop: "2px" }}>✔️</span>
                  <span style={{ color: "#e2e8f0", fontSize: "1.1rem", lineHeight: 1.5 }}>Challenge chain of custody (Section 65B).</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Box: Counter-Argument */}
          <div style={{ 
            width: "100%", background: "#25262b", borderRadius: "12px", 
            padding: "32px", border: "1px solid #333", textAlign: "center",
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)", marginBottom: "32px"
          }}>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 700, margin: "0 0 24px 0", color: "#fff" }}>Suggest Counter-Argument</h2>
            
            <Link href="/generate-arguments" style={{ 
              background: "#facc15", color: "#422006", border: "none", 
              padding: "16px 48px", fontSize: "1.3rem", fontWeight: 700, 
              borderRadius: "4px", cursor: "pointer", marginBottom: "24px",
              boxShadow: "0 4px 0 #ca8a04", display: "inline-block", textDecoration: "none"
            }}>
              Generate Counter
            </Link>

            <div style={{ 
              background: "#1a1b1e", border: "1px solid #444", borderRadius: "4px", 
              padding: "16px", maxWidth: "500px", margin: "0 auto 24px", color: "#fff",
              fontSize: "1.2rem", fontWeight: 600, textAlign: "left"
            }}>
              Opponent Favored
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "24px" }}>
              <span style={{ fontSize: "1.2rem", fontWeight: 600, color: "#fff" }}>Win Probability Meter</span>
              <div style={{ width: "400px", height: "8px", background: "#333", borderRadius: "4px", overflow: "hidden" }}>
                <div style={{ width: "45%", height: "100%", background: "#facc15" }}></div>
              </div>
            </div>
          </div>

          {/* Bottom Buttons */}
          <div style={{ display: "flex", gap: "24px", justifyContent: "center", marginBottom: "40px" }}>
            <Link href="/simulator" style={{ 
              background: "#25262b", border: "2px solid #facc15", borderRadius: "4px",
              padding: "12px 32px", color: "#fff", fontSize: "1.1rem", fontWeight: 600,
              textDecoration: "none"
            }}>Return to Trial</Link>
            <button style={{ 
              background: "#25262b", border: "2px solid #facc15", borderRadius: "4px",
              padding: "12px 32px", color: "#fff", fontSize: "1.1rem", fontWeight: 600,
              cursor: "pointer"
            }}>Review Evidence</button>
            <Link href="/" style={{ 
              background: "#25262b", border: "2px solid #facc15", borderRadius: "4px",
              padding: "12px 32px", color: "#fff", fontSize: "1.1rem", fontWeight: 600,
              textDecoration: "none"
            }}>End Simulation</Link>
          </div>

        </div>

      </div>
    </div>
  );
}
