"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Scrolling ticker — home page flavour, always visible */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          <span className="ticker-item ticker-item--live">
            <span className="ticker-dot" />
            <strong>Now shipping</strong> · Carrier Rates v2.1 — live in 240+ stores
          </span>
          <span className="ticker-item">
            <span className="ticker-dot" />
            AI-augmented delivery · est. 2024
          </span>
          <span className="ticker-item">
            <span className="ticker-dot" />
            Currently accepting Q3 engagements
          </span>
          <span className="ticker-item">
            <span className="ticker-dot" />
            Software ↔ thought · velocity 4.2×
          </span>
          {/* Duplicate set for seamless loop */}
          <span className="ticker-item ticker-item--live">
            <span className="ticker-dot" />
            <strong>Now shipping</strong> · Carrier Rates v2.1 — live in 240+ stores
          </span>
          <span className="ticker-item">
            <span className="ticker-dot" />
            AI-augmented delivery · est. 2024
          </span>
          <span className="ticker-item">
            <span className="ticker-dot" />
            Currently accepting Q3 engagements
          </span>
          <span className="ticker-item">
            <span className="ticker-dot" />
            Software ↔ thought · velocity 4.2×
          </span>
        </div>
      </div>

      {/* Sticky nav */}
      <header className="nav">
        <Link className="wordmark" href="/">
          NITSOF<span className="dot" aria-hidden="true" />
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          <Link href="/#capabilities">Capabilities</Link>
          <Link href="/#work">Work</Link>
          <Link href="/#process">Process</Link>
          <Link href="/#about">Studio</Link>
          <Link href="/insights">Insights</Link>
        </nav>

        <Link className="nav-cta" href="/#contact">
          Start a project
          <svg
            className="arrow"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </Link>

        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* Full-screen mobile menu */}
      <nav
        className={`mobile-menu${menuOpen ? " open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <Link href="/#capabilities" onClick={closeMenu}>Capabilities</Link>
        <Link href="/#work" onClick={closeMenu}>Work</Link>
        <Link href="/#process" onClick={closeMenu}>Process</Link>
        <Link href="/#about" onClick={closeMenu}>Studio</Link>
        <Link href="/insights" onClick={closeMenu}>Insights</Link>
        <Link className="menu-cta" href="/#contact" onClick={closeMenu}>
          Start a project
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </Link>
      </nav>
    </>
  );
}
