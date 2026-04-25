"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function GenerateArgumentsPage() {
  return (
    <div style={{ 
      position: "fixed", inset: 0, zIndex: 9999, 
      background: "#1e1e24", color: "#e2e8f0", 
      display: "flex", flexDirection: "column",
      fontFamily: "'Inter', sans-serif"
    }}>
      
      {/* Top Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 32px", background: "#1a1b21", borderBottom: "1px solid #2a2b33" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "1.8rem", color: "#facc15" }}>B</span>
          <span style={{ fontSize: "1.5rem", fontWeight: 700, color: "#fff" }}>BaresterBox</span>
        </div>
        <div style={{ padding: "10px 24px", background: "#4ade80", color: "#14532d", borderRadius: "4px", fontWeight: 600, cursor: "pointer" }}>
          Start Simulation
        </div>
      </div>

      {/* Navigation Tabs */}
      <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "24px 0", background: "#1a1b21" }}>
        <Link href="/simulator" style={{ padding: "10px 24px", color: "#e2e8f0", textDecoration: "none", fontSize: "1.05rem" }}>
          Battle
        </Link>
        <Link href="/judge-insights" style={{ padding: "10px 24px", color: "#e2e8f0", fontSize: "1.05rem", textDecoration: "none", borderBottom: "2px solid #facc15", paddingBottom: "8px" }}>
          Judge Insights
        </Link>
        <Link href="/opponent-analysis" style={{ padding: "10px 24px", color: "#e2e8f0", textDecoration: "none", fontSize: "1.05rem" }}>
          Opponent Analysis
        </Link>
        <Link href="/learning-mode" style={{ padding: "10px 24px", color: "#e2e8f0", textDecoration: "none", fontSize: "1.05rem" }}>
          Learning Mode
        </Link>
        <Link href="/case-summary" style={{ padding: "10px 24px", color: "#e2e8f0", textDecoration: "none", fontSize: "1.05rem" }}>
          Case Summary
        </Link>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, padding: "32px 40px", display: "flex", justifyContent: "center", overflowY: "auto" }}>
        
        {/* Bordered Container */}
        <div style={{ 
          width: "100%", maxWidth: "1000px", background: "#25262b", 
          border: "4px solid #facc15", borderRadius: "8px", padding: "40px",
          display: "flex", flexDirection: "column",
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
        }}>
          
          {/* Header Texts */}
          <div style={{ marginBottom: "40px" }}>
            <h1 style={{ fontSize: "3rem", fontWeight: 700, margin: "0 0 16px 0", color: "#fff", lineHeight: 1.2 }}>
              Craft Your Argument for<br/>State vs. R. Sharma
            </h1>
            <p style={{ fontSize: "1.3rem", color: "#e2e8f0", margin: 0 }}>
              Utilize evidence and legal concepts to build your case
            </p>
          </div>

          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", marginBottom: "40px" }}>
            
            {/* Left Column: Info & Prompt */}
            <div style={{ flex: 1, minWidth: "350px", display: "flex", flexDirection: "column", gap: "24px" }}>
              
              {/* Case Information */}
              <div style={{ background: "#2c2e35", borderRadius: "8px", border: "1px solid #3c3e47", overflow: "hidden" }}>
                <div style={{ background: "#33353e", padding: "16px 20px", borderBottom: "1px solid #3c3e47" }}>
                  <h3 style={{ margin: 0, fontSize: "1.1rem", color: "#fff", fontWeight: 600 }}>Case Information</h3>
                </div>
                <div style={{ padding: "24px 20px", display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ color: "#e2e8f0", fontSize: "1.05rem" }}>
                    <span style={{ fontWeight: 600 }}>Charge:</span> Theft (IPC 378)
                  </div>
                  <div style={{ color: "#e2e8f0", fontSize: "1.05rem" }}>
                    <span style={{ fontWeight: 600 }}>Key Evidence:</span> Video footage
                  </div>
                  <div style={{ color: "#e2e8f0", fontSize: "1.05rem" }}>
                    <span style={{ fontWeight: 600 }}>Defense Claim:</span> Misidentification
                  </div>
                  <div style={{ color: "#e2e8f0", fontSize: "1.05rem" }}>
                    <span style={{ fontWeight: 600 }}>Legal Concepts:</span> Burden of Proof, Sec 65B
                  </div>
                </div>
              </div>

              {/* Strategy Prompt */}
              <div style={{ background: "#2c2e35", borderRadius: "8px", border: "1px solid #3c3e47", padding: "20px" }}>
                <h3 style={{ margin: "0 0 16px 0", fontSize: "1.1rem", color: "#fff", fontWeight: 600 }}>Your Strategy/Prompt:</h3>
                <div style={{ 
                  background: "#e2e8f0", borderRadius: "6px", padding: "12px 16px",
                  display: "flex", gap: "12px", alignItems: "flex-start"
                }}>
                  <span style={{ fontSize: "1.2rem", color: "#64748b", marginTop: "2px" }}>🔍</span>
                  <input type="text" placeholder="e.g., Challenge video authenticity & highlight misidentification..." style={{ 
                    background: "transparent", border: "none", width: "100%", outline: "none",
                    color: "#1e293b", fontSize: "1rem"
                  }} />
                </div>
              </div>

            </div>

            {/* Right Column: Generated Arguments */}
            <div style={{ flex: 1.2, minWidth: "400px", display: "flex", flexDirection: "column" }}>
              <div style={{ background: "#2c2e35", borderRadius: "8px", border: "1px solid #3c3e47", display: "flex", flexDirection: "column", flex: 1, overflow: "hidden" }}>
                <div style={{ background: "#33353e", padding: "16px 20px", borderBottom: "1px solid #3c3e47", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h3 style={{ margin: 0, fontSize: "1.1rem", color: "#fff", fontWeight: 600 }}>Generated Arguments</h3>
                  <span style={{ fontSize: "1.2rem", color: "#9ca3af" }}>📄</span>
                </div>
                
                <div style={{ padding: "24px 20px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "24px", position: "relative" }}>
                  {/* Scrollbar UI element (visual only to match mock) */}
                  <div style={{ position: "absolute", right: "8px", top: "24px", bottom: "24px", width: "6px", background: "#9ca3af", borderRadius: "3px" }}></div>
                  
                  <div>
                    <h4 style={{ color: "#facc15", margin: "0 0 8px 0", fontSize: "1.1rem", fontWeight: 600 }}>Argument 1 (Video Challenge):</h4>
                    <p style={{ margin: 0, color: "#e2e8f0", fontSize: "1.05rem", lineHeight: 1.5 }}>
                      "Your Honor, the prosecution's primary evidence fails to meet the strict standards of Section 65B of the Evidence Act. There is no certificate of authenticity, rendering its chain of custody dubious and its contents unreliable."
                    </p>
                  </div>

                  <div>
                    <h4 style={{ color: "#facc15", margin: "0 0 8px 0", fontSize: "1.1rem", fontWeight: 600 }}>Argument 2 (Misidentification):</h4>
                    <p style={{ margin: 0, color: "#e2e8f0", fontSize: "1.05rem", lineHeight: 1.5 }}>
                      "The defense maintains that the blurry video evidence leads to a case of mistaken identity. Without corroborating witnesses or clear forensic evidence, the burden of proof beyond reasonable doubt is simply not met."
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Generate Button Area */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "auto" }}>
            <button style={{ 
              background: "linear-gradient(180deg, #fde047 0%, #eab308 100%)", 
              color: "#422006", border: "4px solid #854d0e", 
              padding: "16px 48px", fontSize: "1.5rem", fontWeight: 700, 
              borderRadius: "4px", cursor: "pointer", marginBottom: "16px",
              boxShadow: "0 6px 0 #ca8a04, 0 10px 20px rgba(0,0,0,0.5)"
            }}>
              Generate Arguments
            </button>
            <div style={{ color: "#cbd5e1", fontSize: "1.1rem", fontWeight: 500 }}>
              Powered by LexAI
            </div>
          </div>

        </div>

      </div>

      {/* Footer Text */}
      <div style={{ background: "#25262b", padding: "16px 32px", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", borderTop: "1px solid #333" }}>
        <div style={{ fontSize: "1.2rem", color: "#fff", fontWeight: 500 }}>Every case a quest. Every client our ally.</div>
        <div style={{ color: "#9ca3af", fontSize: "0.95rem" }}>
          BaresterBox • AI-powered Minecraft simulator • "Advisory only" • Terms • Privacy • Contact
        </div>
      </div>

    </div>
  );
}
