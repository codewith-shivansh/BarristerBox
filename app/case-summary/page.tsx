"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CaseSummaryPage() {
  return (
    <div style={{ 
      position: "fixed", inset: 0, zIndex: 9999, 
      background: "#0a0c10", color: "#e2e8f0", 
      display: "flex", flexDirection: "column",
      fontFamily: "'Inter', sans-serif"
    }}>
      
      {/* Dark overlay with background image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image src="/iso_courtroom.png" alt="Courtroom Background" fill style={{ objectFit: 'cover', opacity: 0.15 }} />
      </div>

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
        
        {/* Top Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 24px", borderBottom: "1px solid #1e293b" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontSize: "1.8rem", color: "#eab308" }}>⚖️</span>
            <span style={{ fontSize: "1.4rem", fontWeight: 700, color: "#fff" }}>BaresterBox™</span>
          </div>
          <div style={{ 
            width: "36px", height: "36px", background: "#1e293b", borderRadius: "6px", 
            display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" 
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
        </div>

        {/* Navigation Bar (Simulated) */}
        <div style={{ display: "flex", gap: "8px", padding: "16px 24px", borderBottom: "1px solid #1e293b" }}>
          <Link href="/simulator" style={{ padding: "8px 24px", border: "1px solid #1e293b", color: "#94a3b8", borderRadius: "6px", textDecoration: "none", background: "#111827" }}>
            Battle
          </Link>
          <Link href="/judge-insights" style={{ padding: "8px 24px", border: "1px solid #1e293b", color: "#94a3b8", borderRadius: "6px", display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
            👨‍⚖️ Judge Insights
          </Link>
          <Link href="/opponent-analysis" style={{ padding: "8px 24px", border: "1px solid #1e293b", color: "#94a3b8", borderRadius: "6px", display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
            🤖 Opponent Analysis
          </Link>
          <Link href="/learning-mode" style={{ padding: "8px 24px", border: "1px solid #1e293b", color: "#94a3b8", borderRadius: "6px", display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
            📚 Learning Mode
          </Link>
          <div style={{ padding: "8px 24px", border: "1px solid #166534", color: "#86efac", borderRadius: "6px", background: "#14532d", marginLeft: "auto" }}>
            Start Simulation
          </div>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: "32px 24px", display: "flex", flexDirection: "column", maxWidth: "1000px", margin: "0 auto", width: "100%" }}>
          
          {/* Title Button */}
          <div style={{ marginBottom: "32px" }}>
            <div style={{ 
              display: "inline-block", padding: "12px 32px", 
              background: "#1f1b11", border: "2px solid #ca8a04", borderRadius: "8px",
              color: "#fde047", fontSize: "1.5rem", fontWeight: 700,
              boxShadow: "0 4px 15px rgba(202, 138, 4, 0.2)"
            }}>
              Case Summary
            </div>
            <div style={{ marginTop: "16px", height: "1px", background: "linear-gradient(90deg, #1e293b 0%, #334155 50%, transparent 100%)", width: "40%" }}></div>
          </div>

          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            
            {/* Left Column: Case Details */}
            <div style={{ 
              flex: 1, minWidth: "350px", background: "rgba(15, 23, 42, 0.6)", 
              border: "1px solid #1e293b", borderRadius: "12px", padding: "32px",
              backdropFilter: "blur(10px)", boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
            }}>
              <h1 style={{ fontSize: "2rem", fontWeight: 700, margin: "0 0 8px 0", color: "#f8fafc" }}>State vs. R. Sharma</h1>
              <div style={{ color: "#eab308", fontSize: "1.1rem", fontWeight: 600, marginBottom: "24px" }}>
                Criminal Law - IPC Chapter VII
              </div>
              
              <ul style={{ 
                paddingLeft: "20px", color: "#cbd5e1", fontSize: "1.1rem", 
                lineHeight: 1.6, marginBottom: "32px", display: "flex", flexDirection: "column", gap: "8px" 
              }}>
                <li>Accused allegedly committed theft under Section 378 IPC. Video evidence from public camera is the main proof.</li>
                <li>Defense claims misidentification.</li>
              </ul>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px", color: "#94a3b8", fontSize: "1.1rem" }}>
                <div>• Date: 02/26/2026</div>
                <div>• Time: 14:30 EST</div>
                <div>• Location: City Supermarket</div>
              </div>
            </div>

            {/* Right Column: Objectives & Concepts */}
            <div style={{ flex: 1, minWidth: "350px", display: "flex", flexDirection: "column", gap: "24px" }}>
              
              {/* Objective Card */}
              <div style={{ 
                background: "rgba(15, 23, 42, 0.6)", border: "1px solid #1e293b", 
                borderRadius: "12px", padding: "24px", backdropFilter: "blur(10px)",
                position: "relative", overflow: "hidden"
              }}>
                {/* Faint character silhouette bg */}
                <div style={{ position: "absolute", right: "-20px", bottom: "-20px", opacity: 0.05, fontSize: "8rem" }}>👨‍⚖️</div>
                <h2 style={{ fontSize: "1.3rem", fontWeight: 600, margin: "0 0 16px 0", color: "#f8fafc" }}>Your Objective</h2>
                <p style={{ color: "#cbd5e1", fontSize: "1.1rem", lineHeight: 1.6, margin: 0, position: "relative", zIndex: 1 }}>
                  Understand the facts, identify key precedents, and prepare arguments.
                </p>
              </div>

              {/* Key Legal Concepts Card */}
              <div style={{ 
                background: "rgba(15, 23, 42, 0.6)", border: "1px solid #1e293b", 
                borderRadius: "12px", padding: "24px", backdropFilter: "blur(10px)"
              }}>
                <h2 style={{ fontSize: "1.3rem", fontWeight: 600, margin: "0 0 20px 0", color: "#eab308", display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontSize: "1.2rem" }}>📦</span> Key Legal Concepts
                </h2>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "#cbd5e1", fontSize: "1.05rem" }}>
                    <span style={{ color: "#ef4444" }}>❌</span> Burden of Proof
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "#cbd5e1", fontSize: "1.05rem", paddingLeft: "30px" }}>
                    Section 65B Evidence Act
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "#cbd5e1", fontSize: "1.05rem", paddingLeft: "30px" }}>
                    Beyond Reasonable Doubt
                  </div>
                </div>

                <div style={{ background: "#0f172a", border: "1px solid #1e293b", borderRadius: "8px", padding: "16px" }}>
                  <div style={{ color: "#e2e8f0", fontSize: "1rem", textAlign: "center", marginBottom: "12px" }}>
                    Review Progress
                  </div>
                  <div style={{ height: "12px", background: "#1e293b", borderRadius: "6px", overflow: "hidden" }}>
                    <div style={{ width: "35%", height: "100%", background: "linear-gradient(90deg, #ea580c 0%, #eab308 100%)" }}></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
          {/* Bottom Button */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: "auto", paddingTop: "40px" }}>
            <Link href="/simulator" style={{ 
              background: "#1f1b11", border: "2px solid #ca8a04", borderRadius: "8px",
              padding: "16px 48px", color: "#fde047", fontSize: "1.2rem", fontWeight: 600,
              textDecoration: "none", boxShadow: "0 4px 15px rgba(202, 138, 4, 0.2)",
              transition: "transform 0.2s"
            }}>
              Return to Courtroom
            </Link>
          </div>

        </div>

        {/* Footer Text */}
        <div style={{ textAlign: "center", padding: "20px", color: "#64748b", fontSize: "0.9rem" }}>
          Every case. A quest. Every client our ally.
        </div>

      </div>
    </div>
  );
}
