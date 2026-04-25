"use client";
import Link from "next/link";
import Image from "next/image";

export default function LawyerSignUpPage() {
  return (
    <main style={{ 
      minHeight: "100vh", 
      color: "#fff", 
      fontFamily: "'Inter', sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative"
    }}>
      
      {/* Full Background Image */}
      <div style={{ position: "fixed", inset: 0, zIndex: -1 }}>
         <Image src="/iso_courtroom.png" alt="Library Background" fill style={{ objectFit: 'cover' }} />
         {/* Warm dark overlay for text readability */}
         <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(30,15,10,0.85) 0%, rgba(10,5,5,0.95) 100%)" }} />
      </div>

      {/* Top Banner Text */}
      <div style={{ 
        width: "100%", maxWidth: "1000px", marginTop: "120px", padding: "0 24px",
        textAlign: "center", marginBottom: "40px"
      }}>
        <h1 style={{ fontSize: "3.5rem", fontWeight: 700, margin: "0 0 16px 0", lineHeight: 1.1, textShadow: "0 4px 10px rgba(0,0,0,0.5)" }}>
          Empower Your Legal Practice
        </h1>
        <p style={{ fontSize: "1.2rem", margin: 0, color: "#e2e8f0", lineHeight: 1.6, textShadow: "0 2px 5px rgba(0,0,0,0.5)" }}>
          Access case upload + strategy + scenario testing, and exportable reports.<br/>
          Elevate our profession with BaresterBox.
        </p>
      </div>

      {/* Main Content Area */}
      <div style={{ 
        width: "100%", maxWidth: "1000px", padding: "0 24px 80px",
        display: "flex", flexDirection: "column", gap: "24px"
      }}>
        
        {/* Two Columns for Account & Features */}
        <div style={{ display: "flex", gap: "24px", alignItems: "stretch", flexWrap: "wrap" }}>
          
          {/* Left Column: Create Account */}
          <div style={{ 
            flex: 1, minWidth: "320px", background: "#22252e", 
            borderRadius: "12px", padding: "32px", border: "1px solid #333",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
          }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 600, margin: "0 0 24px 0", color: "#e2e8f0" }}>Create Your Lawyer Account</h2>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <input type="text" placeholder="Lawyer Name (In-Game or Real)&#10;e.g. @PixelAdvocate" style={{ 
                  width: "100%", padding: "14px 16px", borderRadius: "6px", 
                  border: "1px solid #444", background: "#333", color: "#fff", 
                  fontSize: "1rem", outline: "none"
                }} />
              </div>
              
              <div>
                <input type="text" placeholder="Email / Discord" style={{ 
                  width: "100%", padding: "14px 16px", borderRadius: "6px", 
                  border: "1px solid #444", background: "#333", color: "#fff", 
                  fontSize: "1rem", outline: "none", marginBottom: "8px"
                }} />
                <input type="text" placeholder="Bar Association ID" style={{ 
                  width: "100%", padding: "14px 16px", borderRadius: "6px", 
                  border: "1px solid #444", background: "#333", color: "#fff", 
                  fontSize: "1rem", outline: "none"
                }} />
              </div>

              <div>
                <input type="password" placeholder="Password" style={{ 
                  width: "100%", padding: "14px 16px", borderRadius: "6px", 
                  border: "1px solid #444", background: "#333", color: "#fff", 
                  fontSize: "1rem", outline: "none", marginBottom: "8px"
                }} />
                <input type="password" placeholder="Confirm Password" style={{ 
                  width: "100%", padding: "14px 16px", borderRadius: "6px", 
                  border: "1px solid #444", background: "#333", color: "#fff", 
                  fontSize: "1rem", outline: "none"
                }} />
              </div>

              <button style={{ 
                width: "100%", padding: "16px", background: "linear-gradient(180deg, #fde047 0%, #eab308 100%)",
                color: "#422006", fontSize: "1.1rem", fontWeight: "bold", border: "none",
                borderRadius: "6px", cursor: "pointer", marginTop: "16px",
                boxShadow: "0 4px 0 #ca8a04"
              }}>
                Continue to Payment
              </button>

              <div style={{ textAlign: "center", marginTop: "8px" }}>
                <Link href="#" style={{ color: "#9ca3af", textDecoration: "none", fontSize: "0.95rem" }}>
                  Already have account? Log in
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Lawyer Pack */}
          <div style={{ 
            flex: 1, minWidth: "320px", background: "#22252e", 
            borderRadius: "12px", padding: "40px 32px", border: "1px solid #333", 
            display: "flex", flexDirection: "column", alignItems: "center",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
          }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 600, margin: "0 0 32px 0", color: "#e2e8f0" }}>Your Lawyer Pack</h2>
            
            <div style={{ 
              width: "160px", height: "160px", position: "relative", marginBottom: "24px",
            }}>
              <Image src="/lawyer_char.png" alt="Lawyer Pack" fill style={{ objectFit: 'contain' }} />
            </div>

            <div style={{ fontSize: "3rem", fontWeight: 700, color: "#fde047", marginBottom: "32px", textAlign: "center" }}>
              ₹999 <span style={{ fontSize: "1.5rem", color: "#eab308" }}>/ month</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%", maxWidth: "260px" }}>
              {[
                "Case upload + strategy",
                "Scenario testing",
                "Exportable reports",
                "Priority LexAI Access"
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ fontSize: "1.2rem", color: "#4ade80" }}>✔</div>
                  <span style={{ fontSize: "1.1rem", color: "#e2e8f0" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Secure Subscription Bottom Bar */}
        <div style={{ 
          background: "#22252e", borderRadius: "12px", padding: "24px 32px", 
          border: "1px solid #333", boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
        }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 600, margin: "0 0 20px 0", color: "#e2e8f0" }}>
            Secure Your Professional Subscription
          </h2>
          
          <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
            <button style={{ 
              padding: "16px 32px", background: "linear-gradient(180deg, #fde047 0%, #eab308 100%)",
              color: "#422006", fontSize: "1.1rem", fontWeight: "bold", border: "none",
              borderRadius: "6px", cursor: "pointer", whiteSpace: "nowrap"
            }}>
              Subscribe for ₹999/month
            </button>
            
            <div style={{ flex: 1, display: "flex", gap: "8px", minWidth: "300px" }}>
              <input type="text" placeholder="Card Number Expiry (MM/YY)" style={{ 
                flex: 1, padding: "14px 16px", borderRadius: "6px", 
                border: "1px solid #444", background: "#333", color: "#fff", 
                fontSize: "1rem", outline: "none"
              }} disabled />
              <input type="text" placeholder="CVC" style={{ 
                width: "80px", padding: "14px 16px", borderRadius: "6px", 
                border: "1px solid #444", background: "#333", color: "#fff", 
                fontSize: "1rem", outline: "none"
              }} disabled />
            </div>
          </div>

          <p style={{ fontSize: "0.85rem", color: "#9ca3af", margin: "12px 0 0 0" }}>
            By clicking "Subscribe", you agree our Terms and Privacy Policy
          </p>
        </div>

      </div>

      {/* Footer */}
      <footer style={{ width: "100%", padding: "32px 64px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#1a1c23", borderTop: "1px solid #333", marginTop: "auto", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", color: "#888", fontSize: "0.9rem" }}>
          <span style={{ color: "#e2e8f0", fontWeight: 600 }}>BarestterBox</span>
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
