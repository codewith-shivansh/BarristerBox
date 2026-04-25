import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BarresterBox — Fight Smarter. Simulate Victory.",
  description: "An AI-powered Minecraft courtroom simulator for law students and lawyers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <Link href="/" className="nav-logo">
            <span style={{ fontSize: "2rem" }}>🔨</span> BarresterBox
          </Link>
          <ul className="nav-links">
            <li><Link href="/quests">Simulator</Link></li>
            <li><Link href="/learning">Learning</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/lexai">LexAI</Link></li>
          </ul>
          <Link href="/quests" className="mc-btn">Start Simulation &gt;</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}