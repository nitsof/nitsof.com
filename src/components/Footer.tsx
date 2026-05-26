import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <Link className="footer-cta" href="/#contact">
        Start a project →
      </Link>
      <span className="footer-flag">
        <svg
          width="14"
          height="11"
          viewBox="0 0 14 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <clipPath id="au-canton">
              <rect width="7" height="5.5" />
            </clipPath>
          </defs>
          {/* Blue ensign background */}
          <rect width="14" height="11" rx="1" fill="#00008B" />
          {/* Union Jack — upper-left canton only */}
          <g clipPath="url(#au-canton)">
            <line x1="0" y1="0" x2="7" y2="5.5" stroke="white" strokeWidth="1.8" />
            <line x1="7" y1="0" x2="0" y2="5.5" stroke="white" strokeWidth="1.8" />
            <line x1="0" y1="0" x2="7" y2="5.5" stroke="#CC0000" strokeWidth="1" />
            <line x1="7" y1="0" x2="0" y2="5.5" stroke="#CC0000" strokeWidth="1" />
            <rect y="2" width="7" height="1.5" fill="white" />
            <rect x="2.75" y="0" width="1.5" height="5.5" fill="white" />
            <rect y="2.25" width="7" height="1" fill="#CC0000" />
            <rect x="3" y="0" width="1" height="5.5" fill="#CC0000" />
          </g>
          {/* Commonwealth Star (below canton, left side) */}
          <circle cx="3.5" cy="8.5" r="0.7" fill="white" />
          {/* Southern Cross — Gamma (top), Delta (upper-right), Beta (left), Alpha (bottom), Epsilon (small) */}
          <circle cx="8.6" cy="2.8" r="0.55" fill="white" />
          <circle cx="11.8" cy="3.6" r="0.55" fill="white" />
          <circle cx="8.6" cy="6.2" r="0.6" fill="white" />
          <circle cx="10.8" cy="9.2" r="0.65" fill="white" />
          <circle cx="10.4" cy="5.5" r="0.35" fill="white" />
        </svg>
        Made in Australia
      </span>
      <span>
        © {new Date().getFullYear()} NITSOF ·{" "}
        <Link href="/privacy">Privacy</Link> ·{" "}
        <a href="mailto:hello@nitsof.com">hello@nitsof.com</a>
      </span>
      <div className="footer-social">
        <a
          href="https://linkedin.com/company/nitsof"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          LinkedIn
        </a>
        <a
          href="https://github.com/nitsof"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
          GitHub
        </a>
      </div>
    </footer>
  );
}
