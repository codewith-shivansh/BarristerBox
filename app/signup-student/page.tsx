"use client";
import Link from "next/link";
import Image from "next/image";

export default function StudentSignUpPage() {
  return (
    <main style={{ 
      minHeight: "100vh", 
      background: "#181a20", 
      color: "#fff", 
      fontFamily: "'Inter', sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      
      {/* Top Banner */}
      <div style={{ 
        width: "100%", maxWidth: "1200px", marginTop: "100px", padding: "0 24px"
      }}>
        <div style={{ 
          position: "relative", width: "100%", height: "280px", 
          borderRadius: "16px", overflow: "hidden",
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "0 60px", boxShadow: "0 15px 35px rgba(0,0,0,0.4)"
        }}>
          {/* Background image & gradient */}
          <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
             <Image src="/iso_courtroom.png" alt="Library Background" fill style={{ objectFit: 'cover' }} />
             <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(120,40,30,0.85) 0%, rgba(40,20,30,0.7) 100%)" }} />
          </div>
          
          <div style={{ position: "relative", zIndex: 1, maxWidth: "700px" }}>
            <h1 style={{ fontSize: "3.5rem", fontWeight: 700, margin: "0 0 16px 0", lineHeight: 1.1 }}>
              Unlock Your<br/>Student Potential
            </h1>
            <p style={{ fontSize: "1.2rem", margin: 0, color: "#e2e8f0", lineHeight: 1.5 }}>
              Access all cases, LexAI basic, Leaderboard + XP.<br/>
              Your journey to legal mastery begins here.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ 
        width: "100%", maxWidth: "1200px", padding: "40px 24px 80px",
        display: "flex", gap: "24px", alignItems: "flex-start", flexWrap: "wrap"
      }}>
        
        {/* Left Column */}
        <div style={{ flex: 2, display: "flex", flexDirection: "column", gap: "24px", minWidth: "350px" }}>
          
          {/* Create Account Card */}
          <div style={{ background: "#22252e", borderRadius: "12px", padding: "32px", border: "1px solid #333" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 600, margin: "0 0 24px 0" }}>Create Your Student Account</h2>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <label style={{ display: "block", marginBottom: "8px", color: "#e2e8f0" }}>Student Name (In-Game or Real)</label>
                <input type="text" placeholder="e.g. @PixelScholar" style={{ 
                  width: "100%", padding: "14px 16px", borderRadius: "6px", 
                  border: "2px solid #86efac", background: "#fff", color: "#111", 
                  fontSize: "1rem", outline: "none"
                }} />
              </div>
              
              <div>
                <label style={{ display: "block", marginBottom: "8px", color: "#e2e8f0" }}>Email / Discord</label>
                <input type="text" style={{ 
                  width: "100%", padding: "14px 16px", borderRadius: "6px", 
                  border: "1px solid #444", background: "#fff", color: "#111", 
                  fontSize: "1rem", outline: "none"
                }} />
              </div>

              <div>
                <label style={{ display: "block", marginBottom: "8px", color: "#e2e8f0" }}>Password</label>
                <input type="password" placeholder="Password" style={{ 
                  width: "100%", padding: "14px 16px", borderRadius: "6px", 
                  border: "1px solid #444", background: "#fff", color: "#111", 
                  fontSize: "1rem", outline: "none", marginBottom: "12px"
                }} />
                <input type="password" placeholder="Confirm Password" style={{ 
                  width: "100%", padding: "14px 16px", borderRadius: "6px", 
                  border: "1px solid #444", background: "#fff", color: "#111", 
                  fontSize: "1rem", outline: "none"
                }} />
              </div>

              <button style={{ 
                width: "100%", padding: "16px", background: "linear-gradient(180deg, #fde047 0%, #eab308 100%)",
                color: "#422006", fontSize: "1.1rem", fontWeight: "bold", border: "none",
                borderRadius: "6px", cursor: "pointer", marginTop: "8px",
                boxShadow: "0 4px 0 #ca8a04"
              }}>
                Continue to Payment
              </button>

              <div style={{ textAlign: "center", marginTop: "8px" }}>
                <Link href="#" style={{ color: "#4ade80", textDecoration: "none", fontSize: "0.95rem" }}>
                  Already have account? Log in
                </Link>
              </div>
            </div>
          </div>

          {/* Secure Subscription Card */}
          <div style={{ background: "#22252e", borderRadius: "12px", padding: "32px", border: "1px solid #333" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 600, margin: "0 0 24px 0" }}>Secure Your Subscription</h2>
            
            <div style={{ display: "flex", gap: "16px", marginBottom: "24px" }}>
              <div style={{ flex: 2 }}>
                <label style={{ display: "block", marginBottom: "8px", color: "#e2e8f0" }}>Card Number</label>
                <input type="text" style={{ 
                  width: "100%", padding: "14px 16px", borderRadius: "6px", 
                  border: "1px solid #444", background: "#1a1c23", color: "#fff", 
                  fontSize: "1rem", outline: "none"
                }} disabled />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: "block", marginBottom: "8px", color: "#e2e8f0" }}>Expiry Date (MM/YY)</label>
                <input type="text" style={{ 
                  width: "100%", padding: "14px 16px", borderRadius: "6px", 
                  border: "1px solid #444", background: "#1a1c23", color: "#fff", 
                  fontSize: "1rem", outline: "none", marginBottom: "12px"
                }} disabled />
                <label style={{ display: "block", marginBottom: "8px", color: "#e2e8f0" }}>CVC</label>
                <input type="text" style={{ 
                  width: "100%", padding: "14px 16px", borderRadius: "6px", 
                  border: "1px solid #444", background: "#1a1c23", color: "#fff", 
                  fontSize: "1rem", outline: "none"
                }} disabled />
              </div>
            </div>

            <button style={{ 
              width: "100%", padding: "16px", background: "#fff",
              color: "#111", fontSize: "1.1rem", fontWeight: "bold", border: "none",
              borderRadius: "6px", cursor: "pointer", marginBottom: "12px"
            }}>
              Subscribe for ₹99/month
            </button>
            <p style={{ fontSize: "0.85rem", color: "#9ca3af", margin: 0, textAlign: "center" }}>
              By clicking "Subscribe", you agree our Terms and Privacy Policy
            </p>
          </div>

        </div>

        {/* Right Column (Student Pack) */}
        <div style={{ flex: 1, minWidth: "300px", background: "#22252e", borderRadius: "12px", padding: "32px", border: "1px solid #333", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 600, margin: "0 0 32px 0", textAlign: "center" }}>Your Student Pack</h2>
          
          <div style={{ 
            width: "200px", height: "200px", background: "#fde047", 
            borderRadius: "16px", position: "relative", marginBottom: "24px",
            boxShadow: "0 10px 20px rgba(0,0,0,0.5)"
          }}>
            <Image src="/student_char.png" alt="Student Pack" fill style={{ objectFit: 'contain', padding: "16px" }} />
          </div>

          <div style={{ fontSize: "2.5rem", fontWeight: 700, color: "#fde047", marginBottom: "32px", textAlign: "center" }}>
            ₹99 <span style={{ fontSize: "1.2rem", color: "#eab308" }}>/ month</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%", maxWidth: "260px" }}>
            {[
              "Access to all cases",
              "LexAI basic",
              "Leaderboard + XP",
              "Dedicated Student Support"
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ 
                  width: "20px", height: "20px", background: "#4ade80", 
                  borderRadius: "4px", display: "flex", alignItems: "center", 
                  justifyContent: "center", flexShrink: 0 
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span style={{ fontSize: "0.95rem", color: "#e2e8f0" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer style={{ width: "100%", padding: "32px 64px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#1a1c23", borderTop: "1px solid #333" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", color: "#888", fontSize: "0.9rem" }}>
          <span style={{ color: "#e2e8f0", fontWeight: 600 }}>BaresterBox</span>
          <span>•</span>
          <span>AI-powered Minecraft courtroom simulator</span>
          <span>•</span>
          <span>"Advisory only"</span>
        </div>
        <div style={{ display: "flex", gap: "24px", color: "#888", fontSize: "0.9rem" }}>
          <Link href="#" style={{ color: "#888", textDecoration: "none" }}>Terms</Link>
          <Link href="#" style={{ color: "#888", textDecoration: "none" }}>Privacy</Link>
          <Link href="#" style={{ color: "#888", textDecoration: "none" }}>Contact</Link>
        </div>
      </footer>

    </main>
  );
}
