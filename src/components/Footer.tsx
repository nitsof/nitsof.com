import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <nav className="footer-links">
        <Link href="/insights">Insights</Link>
        <a
          href="https://apps.shopify.com/live-carrier-rates"
          target="_blank"
          rel="noopener noreferrer"
        >
          Carrier Rates
        </a>
      </nav>
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
          <rect width="14" height="11" rx="1" fill="#00008B" />
          <line x1="0" y1="0" x2="14" y2="11" stroke="white" strokeWidth="1.8" />
          <line x1="14" y1="0" x2="0" y2="11" stroke="white" strokeWidth="1.8" />
          <line x1="0" y1="0" x2="14" y2="11" stroke="#CC0000" strokeWidth="1" />
          <line x1="14" y1="0" x2="0" y2="11" stroke="#CC0000" strokeWidth="1" />
          <rect y="4" width="14" height="3" fill="white" />
          <rect x="5.5" y="0" width="3" height="11" fill="white" />
          <rect y="4.5" width="14" height="2" fill="#CC0000" />
          <rect x="6" y="0" width="2" height="11" fill="#CC0000" />
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
