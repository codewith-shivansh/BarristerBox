"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function LexAIPage() {
  return (
    <main style={{ 
      minHeight: "100vh", 
      position: "relative",
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center",
      padding: "120px 24px 60px",
      fontFamily: "'Inter', sans-serif"
    }}>
      
      {/* Background Image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image src="/iso_courtroom.png" alt="Courtroom Background" fill style={{ objectFit: 'cover' }} />
        {/* Dark overlay */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(15, 15, 15, 0.85)" }}></div>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at top, transparent 0%, rgba(0,0,0,0.8) 100%)" }}></div>
      </div>

      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "900px", display: "flex", flexDirection: "column" }}>
        
        {/* Header Section */}
        <div style={{ marginBottom: "40px" }}>
          <h1 className="pixel-font" style={{ 
            fontSize: "4.5rem", 
            color: "#eab308", 
            margin: "0 0 16px 0", 
            textShadow: "3px 3px 0 #2a1c11, 0 8px 16px rgba(0,0,0,0.5)",
            letterSpacing: "1px"
          }}>
            LexAI: Your Legal AI Assistant
          </h1>
          <p className="pixel-font" style={{ fontSize: "1.8rem", color: "#e2e8f0", margin: 0, textShadow: "2px 2px 0 #000" }}>
            Ask anything. Get instant legal explanations, and argument suggestions
          </p>
        </div>

        {/* Main Chat Interface */}
        <div style={{ 
          background: "#151515", 
          border: "2px solid #333",
          borderRadius: "12px", 
          display: "flex", 
          flexDirection: "column",
          boxShadow: "0 20px 40px rgba(0,0,0,0.8)",
          marginBottom: "32px",
          overflow: "hidden"
        }}>
          
          {/* Chat Header */}
          <div style={{ padding: "20px 24px", borderBottom: "1px solid #2a2a2a", display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontSize: "2rem", color: "#eab308", filter: "drop-shadow(2px 2px 0 #000)" }}>⚖️</span>
            <h2 style={{ fontSize: "1.2rem", color: "#e2e8f0", margin: 0, fontWeight: 600 }}>Criminal Law Assistant</h2>
          </div>

          {/* Chat Messages Area */}
          <div style={{ padding: "32px 24px", display: "flex", flexDirection: "column", gap: "24px", minHeight: "400px" }}>
            
            {/* User Message 1 */}
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <div style={{ 
                background: "#333", color: "#e2e8f0", padding: "16px 24px", 
                borderRadius: "20px", borderTopLeftRadius: "4px",
                maxWidth: "80%", fontSize: "1.1rem", position: "relative"
              }}>
                Explain the concept of "reasonable doubt" in criminal law
                {/* Tail */}
                <div style={{ position: "absolute", top: "0", left: "-8px", width: 0, height: 0, borderTop: "16px solid #333", borderLeft: "16px solid transparent" }}></div>
              </div>
            </div>

            {/* AI Message 1 */}
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <div style={{ 
                background: "#2e5c32", color: "#e2e8f0", padding: "16px 24px", 
                borderRadius: "20px", borderTopRightRadius: "4px",
                maxWidth: "80%", fontSize: "1.05rem", position: "relative",
                lineHeight: 1.6, border: "1px solid #438249"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <span>Under LexAI that, a core tenet of criminal law is that the burden of proof rests on the prosecution. It is the State's duty to prove the defendant's guilt beyond a "reasonable doubt".</span>
                  <span style={{ background: "#438249", padding: "2px 6px", borderRadius: "4px", fontSize: "0.7rem", fontWeight: "bold", marginLeft: "12px" }}>AI</span>
                </div>
                <span>This does not mean an absolute certainty, but rather a moral certainty. If there is any logical explanation that points to the defendant's innocence based on the evidence presented, the jury must acquit. The standard is extremely high to protect individuals from wrongful conviction.</span>
                {/* Tail */}
                <div style={{ position: "absolute", top: "0", right: "-8px", width: 0, height: 0, borderTop: "16px solid #2e5c32", borderRight: "16px solid transparent" }}></div>
              </div>
            </div>

            {/* User Message 2 */}
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <div style={{ 
                background: "#333", color: "#e2e8f0", padding: "16px 24px", 
                borderRadius: "20px", borderTopLeftRadius: "4px",
                maxWidth: "80%", fontSize: "1.1rem", position: "relative"
              }}>
                And precedents?
                {/* Tail */}
                <div style={{ position: "absolute", top: "0", left: "-8px", width: 0, height: 0, borderTop: "16px solid #333", borderLeft: "16px solid transparent" }}></div>
              </div>
            </div>

            {/* AI Message 2 */}
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <div style={{ 
                background: "#2e5c32", color: "#e2e8f0", padding: "16px 24px", 
                borderRadius: "20px", borderTopRightRadius: "4px",
                maxWidth: "80%", fontSize: "1.05rem", position: "relative",
                lineHeight: 1.6, border: "1px solid #438249"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                  <span style={{ flex: 1 }}>Your Honor, refer to the foundational case In re Winship (397 U.S. 358, 1970), where the Supreme Court explicitly ruled that the "beyond a reasonable doubt" standard is constitutionally required under the Due Process Clause for criminal convictions.</span>
                  <span style={{ background: "#438249", padding: "2px 6px", borderRadius: "4px", fontSize: "0.7rem", fontWeight: "bold", marginLeft: "12px" }}>AI</span>
                </div>
                {/* Tail */}
                <div style={{ position: "absolute", top: "0", right: "-8px", width: 0, height: 0, borderTop: "16px solid #2e5c32", borderRight: "16px solid transparent" }}></div>
              </div>
            </div>

          </div>

          {/* Chat Input Area */}
          <div style={{ padding: "20px 24px", borderTop: "1px solid #2a2a2a", background: "#111" }}>
            <div style={{ 
              background: "#222", border: "1px solid #333", borderRadius: "8px", 
              padding: "16px", display: "flex", alignItems: "center", gap: "16px" 
            }}>
              <input 
                type="text" 
                placeholder="AskAI your legal question..." 
                style={{ 
                  flex: 1, background: "transparent", border: "none", color: "#fff", 
                  fontSize: "1.1rem", outline: "none", fontFamily: "'Inter', sans-serif" 
                }} 
              />
              <button style={{ 
                background: "transparent", border: "none", color: "#888", 
                cursor: "pointer", fontSize: "1.5rem", display: "flex", alignItems: "center", justifyContent: "center" 
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
          </div>

        </div>

        {/* Advanced Features Section */}
        <div style={{ 
          background: "#151515", 
          border: "2px solid #333",
          borderRadius: "12px", 
          padding: "24px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.6)"
        }}>
          <h3 style={{ color: "#e2e8f0", fontSize: "1.2rem", margin: "0 0 20px 0", fontWeight: 600 }}>Advanced Features</h3>
          
          <div style={{ display: "flex", gap: "20px" }}>
            
            {/* Feature 1 */}
            <Link href="/generate-arguments" style={{ 
              flex: 1, background: "#111", border: "1px solid #333", borderRadius: "8px", 
              padding: "16px", display: "flex", alignItems: "center", gap: "16px",
              cursor: "pointer", transition: "background 0.2s", textDecoration: "none"
            }}>
              <div style={{ 
                width: "48px", height: "48px", background: "#3d2e0f", border: "2px solid #6d5423", 
                borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.8rem"
              }}>🔨</div>
              <div style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "1.1rem", lineHeight: 1.3 }}>
                Generate<br/>Argument
              </div>
            </Link>

            {/* Feature 2 */}
            <div style={{ 
              flex: 1, background: "#111", border: "1px solid #333", borderRadius: "8px", 
              padding: "16px", display: "flex", alignItems: "center", gap: "16px",
              cursor: "pointer", transition: "background 0.2s"
            }}>
              <div style={{ 
                width: "48px", height: "48px", background: "#3d2e0f", border: "2px solid #6d5423", 
                borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.8rem"
              }}>📜</div>
              <div style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "1.1rem", lineHeight: 1.3 }}>
                Find<br/>Precedent
              </div>
            </div>

            {/* Feature 3 */}
            <div style={{ 
              flex: 1, background: "#111", border: "1px solid #333", borderRadius: "8px", 
              padding: "16px", display: "flex", alignItems: "center", gap: "16px",
              cursor: "pointer", transition: "background 0.2s"
            }}>
              <div style={{ 
                width: "48px", height: "48px", background: "#3d2e0f", border: "2px solid #6d5423", 
                borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.8rem"
              }}>⚔️</div>
              <div style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "1.1rem", lineHeight: 1.3 }}>
                Find<br/>Opponent View
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}
