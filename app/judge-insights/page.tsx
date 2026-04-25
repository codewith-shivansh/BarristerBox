"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function JudgeInsightsPage() {
  return (
    <div style={{ 
      position: "fixed", inset: 0, zIndex: 9999, 
      background: "#111", color: "#e2e8f0", 
      display: "flex", flexDirection: "column",
      fontFamily: "'Inter', sans-serif"
    }}>
      
      {/* Dark overlay with background image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image src="/iso_courtroom.png" alt="Courtroom Background" fill style={{ objectFit: 'cover', opacity: 0.2, filter: "blur(2px)" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
        
        {/* Navigation Bar (Simulated) */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 32px", background: "rgba(10,10,10,0.8)", backdropFilter: "blur(10px)", borderBottom: "1px solid #222" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontSize: "1.8rem", color: "#eab308" }}>⚖️</span>
            <span style={{ fontSize: "1.5rem", fontWeight: 700, color: "#fff" }}>BaresterBox</span>
          </div>
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <Link href="/simulator" style={{ color: "#9ca3af", textDecoration: "none", fontSize: "1.05rem" }}>Battle</Link>
            <div style={{ padding: "8px 16px", background: "#3b2313", color: "#facc15", borderRadius: "4px", fontWeight: 600, fontSize: "1.05rem", border: "1px solid #78350f" }}>
              Judge Insights
            </div>
            <Link href="/opponent-analysis" style={{ color: "#9ca3af", textDecoration: "none", fontSize: "1.05rem" }}>Opponent Analysis</Link>
            <Link href="/learning-mode" style={{ color: "#9ca3af", textDecoration: "none", fontSize: "1.05rem" }}>Learning Mode</Link>
            <Link href="/case-summary" style={{ color: "#9ca3af", textDecoration: "none", fontSize: "1.05rem" }}>Case Summary</Link>
          </div>
          <Link href="/simulator" style={{ padding: "10px 24px", background: "#4ade80", color: "#14532d", borderRadius: "4px", fontWeight: 600, textDecoration: "none" }}>
            Return to Trial
          </Link>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: "60px 24px", display: "flex", justifyContent: "center" }}>
          
          {/* Judge Insights Panel */}
          <div style={{ 
            width: "100%", maxWidth: "800px", background: "rgba(15, 10, 5, 0.9)", 
            borderRadius: "4px", border: "4px solid #36261a",
            boxShadow: "0 20px 50px rgba(0,0,0,0.8)",
            display: "flex", flexDirection: "column"
          }}>
            
            {/* Panel Header */}
            <div style={{ 
              display: "flex", alignItems: "center", borderBottom: "4px solid #36261a", 
              background: "linear-gradient(90deg, #1f130b 0%, #110a05 100%)",
              position: "relative"
            }}>
              
              {/* Red Ribbon with Scale */}
              <div style={{ 
                background: "#7f1d1d", borderRight: "4px solid #450a0a", borderBottom: "4px solid #450a0a",
                padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                <span style={{ fontSize: "2.5rem", color: "#facc15", filter: "drop-shadow(2px 2px 0 #450a0a)" }}>⚖️</span>
              </div>

              <h1 className="pixel-font" style={{ 
                margin: "0 0 0 24px", fontSize: "3rem", color: "#e2e8f0", 
                textShadow: "3px 3px 0 #000", letterSpacing: "2px" 
              }}>
                Judge Insights
              </h1>

              <div style={{ 
                marginLeft: "auto", paddingRight: "32px", color: "#36261a", 
                fontSize: "1.2rem", fontWeight: 900, letterSpacing: "4px",
                textTransform: "uppercase"
              }}>
                Law is our greatest power
              </div>
            </div>

            {/* Panel Body */}
            <div style={{ padding: "40px 48px", display: "flex", flexDirection: "column", gap: "24px" }}>
              
              <p className="pixel-font" style={{ margin: 0, fontSize: "1.4rem", color: "#d1d5db", lineHeight: 1.6, textShadow: "1px 1px 0 #000" }}>
                The Judge is closely evaluating the chain of custody for the video evidence presented by the prosecution. Ensure your counter-arguments address the potential tampering mentioned in Section 65B of the Evidence Act.
              </p>

              <p className="pixel-font" style={{ margin: 0, fontSize: "1.4rem", color: "#d1d5db", lineHeight: 1.6, textShadow: "1px 1px 0 #000" }}>
                <span style={{ color: "#facc15" }}>Next Steps:</span><br/>
                Review the case precedent you cited. The Judge seems skeptical about its relevance to this specific IPC section. Prepare to defend your interpretation or pivot to a stronger supporting case.
              </p>

              <p className="pixel-font" style={{ margin: 0, fontSize: "1.4rem", color: "#d1d5db", lineHeight: 1.6, textShadow: "1px 1px 0 #000" }}>
                The defense's claim of misidentification is gaining some traction. If you are the prosecution, you need to bolster the reliability of your primary witness and connect them directly to the events at the City Supermarket.
              </p>

              <p className="pixel-font" style={{ margin: 0, fontSize: "1.4rem", color: "#d1d5db", lineHeight: 1.6, textShadow: "1px 1px 0 #000" }}>
                Overall posture: The court is leaning slightly towards the defense due to procedural loopholes. Tighten your arguments and rely on hard facts rather than circumstantial assumptions.
              </p>

              <p className="pixel-font" style={{ margin: 0, fontSize: "1.4rem", color: "#d1d5db", lineHeight: 1.6, textShadow: "1px 1px 0 #000" }}>
                You have limited time remaining for cross-examination. Focus on the core contradictions.
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
