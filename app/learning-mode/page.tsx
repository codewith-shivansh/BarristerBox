"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function LearningModePage() {
  return (
    <div style={{ 
      position: "fixed", inset: 0, zIndex: 9999, 
      background: "#2b2d31", color: "#e2e8f0", 
      display: "flex", flexDirection: "column",
      fontFamily: "'Inter', sans-serif"
    }}>
      
      {/* Top Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 32px", background: "#1e1f22", borderBottom: "1px solid #111214" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "1.8rem", color: "#4ade80" }}>B</span>
          <span style={{ fontSize: "1.5rem", fontWeight: 700, color: "#fff" }}>BaresterBox™</span>
        </div>
        <div style={{ padding: "10px 24px", background: "#4ade80", color: "#14532d", borderRadius: "4px", fontWeight: 600, cursor: "pointer" }}>
          Start Simulation
        </div>
      </div>

      {/* Navigation Tabs */}
      <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "24px 0", background: "#2b2d31" }}>
        <Link href="/simulator" style={{ padding: "10px 24px", color: "#e2e8f0", textDecoration: "none", fontSize: "1rem" }}>
          Battle
        </Link>
        <Link href="/judge-insights" style={{ padding: "10px 24px", color: "#e2e8f0", fontSize: "1rem", cursor: "pointer", textDecoration: "none" }}>
          Judge Insights
        </Link>
        <Link href="/opponent-analysis" style={{ padding: "10px 24px", color: "#e2e8f0", fontSize: "1rem", cursor: "pointer", textDecoration: "none" }}>
          Opponent Analysis
        </Link>
        <div style={{ padding: "10px 24px", color: "#e2e8f0", fontSize: "1rem", border: "2px solid #ca8a04", borderRadius: "4px", fontWeight: 600 }}>
          Learning Mode
        </div>
        <Link href="/case-summary" style={{ padding: "10px 24px", color: "#e2e8f0", textDecoration: "none", fontSize: "1rem" }}>
          Case Summary
        </Link>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, display: "flex", gap: "24px", padding: "0 40px 40px", maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        
        {/* Left Panel: Learning Modules List */}
        <div style={{ 
          flex: 1, background: "#1e1f22", borderRadius: "12px", border: "1px solid #111214",
          display: "flex", flexDirection: "column", overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
        }}>
          <div style={{ padding: "24px", borderBottom: "2px solid #2b2d31" }}>
            <h2 style={{ margin: 0, fontSize: "1.4rem", fontWeight: 600, color: "#fff", lineHeight: 1.4 }}>
              Learning Modules for<br/>State vs. R. Sharma
            </h2>
          </div>
          
          <div style={{ flex: 1, overflowY: "auto", padding: "12px 0" }}>
            
            {[
              { icon: "🔨", text: "Section 378 IPC: Theft Basics" },
              { icon: "📜", text: "Section 65B Evidence Act", active: true },
              { icon: "🔍", text: "Challenging Video Evidence" },
              { icon: "🧠", text: "Burden of Proof in Criminal Cases" },
              { icon: "⚖️", text: "Burden of Misidentification" },
              { icon: "🎭", text: "Defense of Misidentification" },
              { icon: "📖", text: "Relevant Precedents for Theft" }
            ].map((module, i) => (
              <div key={i} style={{ 
                padding: "16px 24px", display: "flex", alignItems: "center", gap: "16px",
                background: module.active ? "rgba(255,255,255,0.05)" : "transparent",
                borderBottom: "1px solid #2b2d31", cursor: "pointer",
                transition: "background 0.2s"
              }}>
                <span style={{ fontSize: "1.5rem" }}>{module.icon}</span>
                <span style={{ fontSize: "1.1rem", color: module.active ? "#fff" : "#cbd5e1" }}>{module.text}</span>
              </div>
            ))}

          </div>
        </div>

        {/* Right Panel: Interactive Lesson */}
        <div style={{ 
          flex: 1, background: "#1e1f22", borderRadius: "12px", border: "1px solid #111214",
          display: "flex", flexDirection: "column",
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
        }}>
          <div style={{ padding: "24px", borderBottom: "2px solid #2b2d31" }}>
            <h2 style={{ margin: 0, fontSize: "1.4rem", fontWeight: 600, color: "#fff", lineHeight: 1.4 }}>
              Interactive Lesson:<br/>Module: Section 65B Evidence Act
            </h2>
          </div>
          
          <div style={{ padding: "24px", flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: "24px" }}>
            
            <div>
              <h3 style={{ color: "#4ade80", fontSize: "1.1rem", margin: "0 0 8px 0" }}>Explanation:</h3>
              <p style={{ margin: 0, color: "#e2e8f0", fontSize: "1.05rem", lineHeight: 1.6 }}>
                Section 65B deals with admissibility of electronic records. For video evidence, strict conditions apply...
              </p>
            </div>

            <div>
              <h3 style={{ color: "#4ade80", fontSize: "1.1rem", margin: "0 0 8px 0" }}>Case Example:</h3>
              <p style={{ margin: 0, color: "#e2e8f0", fontSize: "1.05rem", lineHeight: 1.6 }}>
                In *Anvar P.V. v. P.K. Basheer (2014)*, the Supreme Court laid down principles for electronic evidence...
              </p>
            </div>

            <div style={{ height: "1px", background: "#2b2d31", margin: "8px 0" }}></div>

            <div>
              <h3 style={{ color: "#4ade80", fontSize: "1.1rem", margin: "0 0 8px 0" }}>Practice Question:</h3>
              <p style={{ margin: 0, color: "#e2e8f0", fontSize: "1.05rem", lineHeight: 1.6 }}>
                If the camera was tampered with, under which clause of 65B could evidence be challenged?
              </p>
              <div style={{ marginTop: "12px", color: "#cbd5e1", fontSize: "1.05rem" }}>
                [Options: (A) 65B(1), (B) 65B(4), (C) 65B(5)]
              </div>
            </div>

          </div>

          <div style={{ padding: "24px", borderTop: "2px solid #2b2d31", display: "flex", gap: "12px" }}>
            <button style={{ padding: "10px 20px", background: "#2b2d31", color: "#fff", border: "none", borderRadius: "4px", fontSize: "1rem", cursor: "pointer" }}>Previous</button>
            <button style={{ padding: "10px 20px", background: "#2b2d31", color: "#fff", border: "none", borderRadius: "4px", fontSize: "1rem", cursor: "pointer" }}>Lesson</button>
            <button style={{ padding: "10px 20px", background: "#2b2d31", color: "#fff", border: "none", borderRadius: "4px", fontSize: "1rem", cursor: "pointer" }}>Next</button>
            <Link href="/simulator" style={{ padding: "10px 24px", background: "#4ade80", color: "#14532d", border: "none", borderRadius: "4px", fontSize: "1rem", fontWeight: 600, cursor: "pointer", marginLeft: "auto", textDecoration: "none" }}>Apply to Case</Link>
          </div>
        </div>

      </div>

      {/* Footer Text */}
      <div style={{ textAlign: "center", padding: "20px", color: "#9ca3af", fontSize: "0.95rem", background: "#1e1f22" }}>
        <div style={{ color: "#fff", fontSize: "1.2rem", marginBottom: "8px" }}>Every case a quest. Every client is our ally.</div>
        <div>BaresterBox • AI-powered Minecraft courtroom simulator • Privacy • "Advisory only"</div>
      </div>

    </div>
  );
}
