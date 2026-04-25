"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SimulatorPage() {
  return (
    <div style={{ 
      position: "fixed", inset: 0, zIndex: 9999, 
      background: "#080c13", color: "#e2e8f0", 
      display: "flex", flexDirection: "column",
      fontFamily: "'Inter', sans-serif"
    }}>
      
      {/* Top Navigation Bar */}
      <div style={{ 
        display: "flex", gap: "8px", padding: "12px 24px", 
        background: "#05080c", borderBottom: "1px solid #1e293b",
        overflowX: "auto"
      }}>
        <div style={{ padding: "8px 24px", border: "1px solid #c89f3a", color: "#c89f3a", borderRadius: "6px", display: "flex", alignItems: "center", gap: "8px", background: "#1f1b11", fontWeight: 600, fontSize: "0.95rem" }}>
          ⚔️ Battle
        </div>
        <Link href="/judge-insights" style={{ padding: "8px 24px", border: "1px solid #1e293b", color: "#94a3b8", borderRadius: "6px", display: "flex", alignItems: "center", gap: "8px", fontSize: "0.95rem", cursor: "pointer", textDecoration: "none" }}>
          👨‍⚖️ Judge Insights
        </Link>
        <Link href="/opponent-analysis" style={{ padding: "8px 24px", border: "1px solid #1e293b", color: "#94a3b8", borderRadius: "6px", display: "flex", alignItems: "center", gap: "8px", fontSize: "0.95rem", cursor: "pointer", textDecoration: "none" }}>
          🤖 Opponent Analysis
        </Link>
        <Link href="/learning-mode" style={{ padding: "8px 24px", border: "1px solid #1e293b", color: "#94a3b8", borderRadius: "6px", display: "flex", alignItems: "center", gap: "8px", fontSize: "0.95rem", cursor: "pointer", textDecoration: "none" }}>
          📚 Learning Mode
        </Link>
        <Link href="/case-summary" style={{ padding: "8px 24px", border: "1px solid #1e293b", color: "#94a3b8", borderRadius: "6px", display: "flex", alignItems: "center", gap: "8px", fontSize: "0.95rem", cursor: "pointer", textDecoration: "none" }}>
          📄 Case Summary
        </Link>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, display: "flex", gap: "16px", padding: "16px", overflow: "hidden" }}>
        
        {/* Left Column */}
        <div style={{ width: "300px", display: "flex", flexDirection: "column", gap: "16px", overflowY: "auto" }}>
          
          {/* Case Summary */}
          <div style={{ background: "#0d131f", border: "1px solid #1e293b", borderRadius: "8px", padding: "16px" }}>
            <h3 style={{ color: "#c89f3a", fontSize: "1rem", margin: "0 0 12px 0", display: "flex", alignItems: "center", gap: "8px" }}>
              📁 Case Summary
            </h3>
            <h4 style={{ fontSize: "1.1rem", margin: "0 0 4px 0", color: "#fff" }}>State vs. R. Sharma</h4>
            <div style={{ fontSize: "0.85rem", color: "#c89f3a", marginBottom: "16px" }}>Criminal Law - IPC Chapter VII</div>
            <ul style={{ paddingLeft: "16px", margin: 0, fontSize: "0.85rem", color: "#cbd5e1", display: "flex", flexDirection: "column", gap: "8px" }}>
              <li>Accused allegedly committed theft under Section 378 IPC.</li>
              <li>Video evidence from public camera is the main proof.</li>
              <li>Defense claims misidentification.</li>
            </ul>
          </div>

          {/* Strategy Generator */}
          <div style={{ background: "#0d131f", border: "1px solid #1e293b", borderRadius: "8px", padding: "16px" }}>
            <h3 style={{ color: "#c89f3a", fontSize: "1rem", margin: "0 0 12px 0", display: "flex", alignItems: "center", gap: "8px" }}>
              🧠 Strategy Generator
            </h3>
            <button style={{ width: "100%", padding: "10px", background: "transparent", border: "1px solid #c89f3a", color: "#c89f3a", borderRadius: "6px", marginBottom: "12px", cursor: "pointer" }}>
              Generate Arguments
            </button>
            <div style={{ background: "#061a15", border: "1px solid #0f4c3a", borderRadius: "6px", padding: "12px", fontSize: "0.85rem", color: "#a7f3d0", marginBottom: "8px", display: "flex", gap: "8px", alignItems: "flex-start" }}>
              <span>💡</span> Challenge the video chain-of-custody under Section 65B Evidence Act.
            </div>
            <div style={{ background: "#061a15", border: "1px solid #0f4c3a", borderRadius: "6px", padding: "12px", fontSize: "0.85rem", color: "#a7f3d0", display: "flex", gap: "8px", alignItems: "flex-start" }}>
              <span>💡</span> Argue that mere presence in the area does not equal guilt.
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ background: "#0d131f", border: "1px solid #1e293b", borderRadius: "8px", padding: "16px", flex: 1 }}>
            <h3 style={{ color: "#c89f3a", fontSize: "1rem", margin: "0 0 12px 0", display: "flex", alignItems: "center", gap: "8px" }}>
              ⚔️ Action Buttons
            </h3>
            <button style={{ width: "100%", padding: "12px", background: "transparent", border: "1px solid #334155", color: "#f1f5f9", borderRadius: "6px", marginBottom: "8px", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>
              🎤 Present Argument
            </button>
            <button style={{ width: "100%", padding: "12px", background: "transparent", border: "1px solid #c89f3a", color: "#c89f3a", borderRadius: "6px", marginBottom: "8px", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>
              ⚔️ Cross Opponent
            </button>
            <button style={{ width: "100%", padding: "12px", background: "transparent", border: "1px solid #334155", color: "#f1f5f9", borderRadius: "6px", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>
              📁 Submit Evidence
            </button>
          </div>

        </div>

        {/* Center Column (Live Courtroom) */}
        <div style={{ flex: 1, position: "relative", borderRadius: "8px", border: "1px solid #1e293b", overflow: "hidden", background: "#000" }}>
          {/* Header overlay */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, padding: "16px", zIndex: 10 }}>
             <h2 style={{ fontSize: "1.2rem", margin: 0, color: "#c89f3a", display: "flex", alignItems: "center", gap: "8px", textShadow: "1px 1px 2px #000" }}>
               ⚖️ Live Courtroom
             </h2>
          </div>
          
          {/* Main Image */}
          <Image src="/iso_courtroom.png" alt="Live Courtroom" fill style={{ objectFit: 'cover' }} />

          {/* Speech Bubbles */}
          <div style={{ position: "absolute", top: "15%", left: "45%", transform: "translateX(-50%)", background: "rgba(15, 23, 42, 0.9)", border: "1px solid #334155", borderRadius: "8px", padding: "10px 16px", color: "#fff", fontSize: "0.9rem", zIndex: 10 }}>
            I'm listening carefully now...
            {/* Arrow pointing down */}
            <div style={{ position: "absolute", bottom: "-6px", left: "50%", transform: "translateX(-50%)", width: 0, height: 0, borderLeft: "6px solid transparent", borderRight: "6px solid transparent", borderTop: "6px solid rgba(15, 23, 42, 0.9)" }}></div>
          </div>

          <div style={{ position: "absolute", top: "30%", left: "20%", background: "rgba(15, 23, 42, 0.9)", border: "1px solid #334155", borderRadius: "8px", padding: "10px 16px", color: "#fff", fontSize: "0.9rem", zIndex: 10, maxWidth: "180px" }}>
            Your Honor, I submit that the video...
          </div>

          <div style={{ position: "absolute", top: "30%", right: "20%", background: "rgba(15, 23, 42, 0.9)", border: "1px solid #334155", borderRadius: "8px", padding: "10px 16px", color: "#fff", fontSize: "0.9rem", zIndex: 10, maxWidth: "180px" }}>
            Your Honor, the video is clear.
          </div>

          {/* Center Evidence Overlay */}
          <div style={{ position: "absolute", top: "45%", left: "50%", transform: "translateX(-50%)", background: "rgba(15, 23, 42, 0.9)", border: "1px solid #3b82f6", borderRadius: "8px", padding: "6px 12px", color: "#93c5fd", fontSize: "0.8rem", zIndex: 10 }}>
            Evidence: CCTV footage (Day 3)
          </div>
          
          <div style={{ position: "absolute", top: "52%", left: "50%", transform: "translateX(-50%)", width: "120px", height: "80px", background: "#111", border: "2px solid #333", zIndex: 10 }}>
             <Image src="/iso_courtroom.png" alt="Evidence" fill style={{ objectFit: 'cover', filter: "grayscale(100%) brightness(0.5)" }} />
          </div>

          {/* Simulation Results Modal */}
          <div style={{ position: "absolute", bottom: "30px", left: "50%", transform: "translateX(-50%)", width: "550px", background: "#0d131f", border: "1px solid #c89f3a", borderRadius: "12px", padding: "24px", zIndex: 20, boxShadow: "0 10px 25px rgba(0,0,0,0.8)" }}>
             <div style={{ display: "flex", gap: "20px" }}>
               {/* Left Content */}
               <div style={{ flex: 1 }}>
                 <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                   <span style={{ fontSize: "2rem" }}>🏆</span>
                   <div>
                     <h3 style={{ margin: 0, fontSize: "1.2rem", color: "#fff" }}>Simulation Results</h3>
                     <div style={{ fontSize: "0.9rem", color: "#94a3b8" }}>Your performance in the courtroom</div>
                   </div>
                 </div>

                 {/* Progress Bar */}
                 <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                   <div style={{ flex: 1, height: "8px", background: "linear-gradient(90deg, #ef4444 0%, #eab308 50%, #22c55e 100%)", borderRadius: "4px" }}>
                     {/* Marker */}
                     <div style={{ width: "2px", height: "16px", background: "#fff", position: "relative", left: "65%", top: "-4px" }}></div>
                   </div>
                   <div style={{ fontSize: "0.9rem", color: "#22c55e", fontWeight: "bold" }}>65%</div>
                 </div>

                 <div style={{ fontSize: "0.85rem", color: "#4ade80", marginBottom: "4px" }}>Strength: Strong argument framing</div>
                 <div style={{ fontSize: "0.85rem", color: "#f87171", marginBottom: "16px" }}>Weak: Lack of precise case-law references</div>

                 <div style={{ fontSize: "0.9rem", color: "#fff", marginBottom: "8px" }}>Key Concepts:</div>
                 <ul style={{ paddingLeft: "16px", margin: 0, fontSize: "0.85rem", color: "#a7f3d0", display: "flex", flexDirection: "column", gap: "4px" }}>
                   <li>Burden of Proof in Criminal Cases</li>
                   <li>Section 65B Evidence Act</li>
                   <li>Standard: Beyond Reasonable Doubt</li>
                 </ul>
               </div>

               {/* Right Scale & XP */}
               <div style={{ width: "120px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "16px" }}>
                 <span style={{ fontSize: "4rem", color: "#c89f3a" }}>⚖️</span>
                 <div style={{ background: "#c89f3a", color: "#452e04", padding: "4px 12px", borderRadius: "4px", fontSize: "0.9rem", fontWeight: "bold", display: "flex", alignItems: "center", gap: "4px" }}>
                   <span>🎉</span> XP +150
                 </div>
               </div>
             </div>

             <div style={{ display: "flex", gap: "16px", marginTop: "24px" }}>
               <button style={{ flex: 1, padding: "12px", background: "transparent", border: "1px solid #3b82f6", color: "#60a5fa", borderRadius: "6px", cursor: "pointer" }}>Retry Case</button>
               <Link href="/" style={{ flex: 1, padding: "12px", background: "transparent", border: "1px solid #c89f3a", color: "#c89f3a", borderRadius: "6px", cursor: "pointer", textAlign: "center", textDecoration: "none" }}>Return to Dashboard</Link>
             </div>
          </div>

        </div>

        {/* Right Column */}
        <div style={{ width: "320px", display: "flex", flexDirection: "column", gap: "16px", overflowY: "auto" }}>
          
          {/* Judge Reaction */}
          <div style={{ background: "#0d131f", border: "1px solid #1e293b", borderRadius: "8px", padding: "16px" }}>
            <h3 style={{ color: "#c89f3a", fontSize: "1rem", margin: "0 0 12px 0", display: "flex", alignItems: "center", gap: "8px" }}>
              👨‍⚖️ Judge Reaction
            </h3>
            <div style={{ color: "#f59e0b", fontSize: "1.1rem", fontWeight: "bold", display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
              ⚠️ Doubtful
            </div>
            <div style={{ fontSize: "0.85rem", color: "#cbd5e1", fontStyle: "italic" }}>
              "Judge prefers strong precedents and clear burden-of-proof shifts."
            </div>
          </div>

          {/* Opponent Tab */}
          <div style={{ background: "#0d131f", border: "1px solid #1e293b", borderRadius: "8px", padding: "16px" }}>
            <h3 style={{ color: "#c89f3a", fontSize: "1rem", margin: "0 0 12px 0", display: "flex", alignItems: "center", gap: "8px" }}>
              🤖 Opponent Tab
            </h3>
            <div style={{ fontSize: "0.85rem", color: "#94a3b8", marginBottom: "8px" }}>Latest argument:</div>
            <div style={{ fontSize: "0.85rem", color: "#cbd5e1", marginBottom: "12px", fontStyle: "italic" }}>
              "The video is strong circumstantial evidence."
            </div>
            <Link href="/generate-arguments" style={{ padding: "8px 16px", background: "transparent", border: "1px solid #c89f3a", color: "#c89f3a", borderRadius: "6px", fontSize: "0.85rem", cursor: "pointer", textDecoration: "none", display: "inline-block" }}>
              Counter Suggestion
            </Link>
          </div>

          {/* Outcome Meter */}
          <div style={{ background: "#0d131f", border: "1px solid #1e293b", borderRadius: "8px", padding: "16px" }}>
            <h3 style={{ color: "#c89f3a", fontSize: "1rem", margin: "0 0 16px 0", display: "flex", alignItems: "center", gap: "8px" }}>
              📊 Outcome Meter
            </h3>
            <div style={{ height: "12px", background: "linear-gradient(90deg, #ef4444 0%, #eab308 50%, #22c55e 100%)", borderRadius: "6px", position: "relative" }}>
               {/* Arrow marker */}
               <div style={{ position: "absolute", top: "14px", left: "50%", transform: "translateX(-50%)", width: 0, height: 0, borderLeft: "6px solid transparent", borderRight: "6px solid transparent", borderBottom: "6px solid #fff" }}></div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "#94a3b8", marginTop: "16px" }}>
              <span>Weak</span>
              <span>Balanced</span>
              <span>Strong</span>
            </div>
          </div>

          {/* Learning Tab */}
          <div style={{ background: "#0d131f", border: "1px solid #1e293b", borderRadius: "8px", padding: "16px", flex: 1 }}>
            <h3 style={{ color: "#c89f3a", fontSize: "1rem", margin: "0 0 12px 0", display: "flex", alignItems: "center", gap: "8px" }}>
              📚 Learning Tab
            </h3>
            <div style={{ display: "flex", gap: "8px", alignItems: "flex-start", fontSize: "0.85rem", color: "#cbd5e1", marginBottom: "12px" }}>
              <span style={{ color: "#22c55e" }}>✅</span> Good use of "burden of proof" phrasing.
            </div>
            <div style={{ display: "flex", gap: "8px", alignItems: "flex-start", fontSize: "0.85rem", color: "#cbd5e1", marginBottom: "12px" }}>
              <span style={{ color: "#ef4444" }}>❌</span> Lacks specific precedent like State v. X (2023).
            </div>
            <div style={{ display: "flex", gap: "8px", alignItems: "flex-start", fontSize: "0.85rem", color: "#cbd5e1" }}>
              <span style={{ color: "#eab308" }}>💡</span> Better version: "Your Honor, the burden is on the prosecution to prove identity beyond reasonable doubt."
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div style={{ height: "70px", background: "#05080c", borderTop: "1px solid #1e293b", display: "flex", alignItems: "center", padding: "0 24px", gap: "16px", flexShrink: 0 }}>
        <div style={{ flex: 1, background: "#0f172a", borderRadius: "6px", padding: "0 16px", display: "flex", gap: "12px", alignItems: "center", border: "1px solid #1e293b", height: "48px" }}>
          <span style={{ color: "#94a3b8" }}>🎤</span> 
          <input type="text" placeholder="Speak your argument..." style={{ background: "transparent", border: "none", color: "#fff", width: "100%", height: "100%", outline: "none", fontSize: "0.95rem" }} />
        </div>
        <button style={{ height: "48px", padding: "0 24px", background: "transparent", border: "1px solid #3b82f6", color: "#60a5fa", borderRadius: "6px", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", fontSize: "0.95rem" }}>
          <span>🔄</span> Retry Move
        </button>
        <Link href="/" style={{ height: "48px", padding: "0 24px", background: "#1f1118", border: "1px solid #7f1d1d", color: "#fca5a5", borderRadius: "6px", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", fontSize: "0.95rem", textDecoration: "none" }}>
          <span>🏁</span> End Simulation
        </Link>
      </div>

    </div>
  );
}
