import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Live Carrier Rates — Real-time Shopify Shipping Rates | NITSOF",
  description:
    "Live Carrier Rates connects your Shopify store to major carriers for real-time, accurate shipping rates at checkout. No more flat rates or lost margin.",
  openGraph: {
    title: "Live Carrier Rates — Real-time Shopify Shipping Rates",
    description:
      "Connect your Shopify store to real carrier APIs. Show live rates at checkout from Australia Post, FedEx, UPS, USPS, DHL and more.",
    url: "https://nitsof.com/carrier-rates",
  },
};

const carriers = [
  "Australia Post",
  "FedEx",
  "UPS",
  "USPS",
  "DHL Express",
  "StarTrack",
  "Sendle",
  "Aramex",
];

const features = [
  {
    title: "Live rates at checkout",
    body: "Rates are fetched in real-time from carrier APIs the moment your customer enters their address — always accurate, never stale.",
  },
  {
    title: "Markup & discount rules",
    body: "Add a percentage or flat markup to protect margin, or apply discounts for loyalty customers. Rules stack and can be scoped to carrier, service, or destination.",
  },
  {
    title: "Multi-carrier comparison",
    body: "Show your customers multiple carrier options in a single checkout step. Let them choose on price, speed, or carrier preference.",
  },
  {
    title: "Dimension-based rating",
    body: "Rates account for package dimensions, not just weight. Cubiscan-accurate pricing means you never under-charge a large, light shipment.",
  },
];

export default function CarrierRatesPage() {
  return (
    <div style={{ background: "var(--cream)", color: "var(--ink)", paddingTop: "6rem" }}>
      {/* Breadcrumb */}
      <nav
        aria-label="breadcrumb"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "var(--ink-mute)",
          padding: "1.5rem var(--pad)",
          borderBottom: "1px solid var(--rule)",
          maxWidth: "var(--max)",
          margin: "0 auto",
        }}
      >
        <Link href="/" style={{ color: "var(--ink-mute)" }}>NITSOF</Link>
        <span style={{ margin: "0 0.5rem" }}>·</span>
        <span style={{ color: "var(--ink)" }}>Live Carrier Rates</span>
      </nav>

      {/* Hero */}
      <section
        style={{
          maxWidth: "var(--max)",
          margin: "0 auto",
          padding: "4rem var(--pad)",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <div style={{ maxWidth: "48rem" }}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--cobalt)",
              marginBottom: "1.25rem",
            }}
          >
            Shopify App
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "var(--ink)",
              margin: "0 0 1.5rem",
            }}
          >
            Real-time shipping rates,
            <br />
            straight from the{" "}
            <span style={{ color: "var(--cobalt)", fontStyle: "italic" }}>carriers</span>.
          </h1>
          <p
            style={{
              fontSize: "1.125rem",
              color: "var(--ink-mute)",
              lineHeight: 1.6,
              maxWidth: "38rem",
              margin: "0 0 2rem",
            }}
          >
            Connect your Shopify store to the carriers your customers trust. Live Carrier
            Rates fetches accurate rates at checkout so you never over-charge or under-charge
            on shipping again.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href="https://apps.shopify.com/live-carrier-rates"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "var(--cobalt)",
                color: "#fff",
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "0.75rem 1.5rem",
                borderRadius: "2px",
              }}
            >
              Install on Shopify →
            </a>
            <Link
              href="/carrier-rates/faq"
              style={{
                display: "inline-block",
                border: "1px solid var(--rule)",
                color: "var(--ink-mute)",
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "0.75rem 1.5rem",
                borderRadius: "2px",
              }}
            >
              FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        style={{
          maxWidth: "var(--max)",
          margin: "0 auto",
          padding: "4rem var(--pad)",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            color: "var(--ink)",
            marginBottom: "2.5rem",
          }}
        >
          How it works
        </h2>
        <ol
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
          }}
        >
          {[
            { n: "01", title: "Install the app", text: "Add Live Carrier Rates from the Shopify App Store. No coding required." },
            { n: "02", title: "Connect your carriers", text: "Enter your carrier account credentials. We support all major carriers out of the box." },
            { n: "03", title: "Configure your rules", text: "Set markups, discounts, and display preferences to match your business." },
            { n: "04", title: "Go live", text: "Your customers see real, live rates the next time they reach checkout." },
          ].map((step) => (
            <li key={step.n}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  color: "var(--cobalt)",
                  marginBottom: "0.75rem",
                }}
              >
                {step.n}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "var(--ink)",
                  margin: "0 0 0.5rem",
                }}
              >
                {step.title}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--ink-mute)", lineHeight: 1.55, margin: 0 }}>
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Supported Carriers */}
      <section
        style={{
          maxWidth: "var(--max)",
          margin: "0 auto",
          padding: "4rem var(--pad)",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            color: "var(--ink)",
            marginBottom: "2rem",
          }}
        >
          Supported carriers
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          {carriers.map((c) => (
            <span
              key={c}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--ink)",
                border: "1px solid var(--rule)",
                padding: "0.5rem 1rem",
                borderRadius: "2px",
              }}
            >
              {c}
            </span>
          ))}
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "var(--ink-mute)",
              padding: "0.5rem 0",
            }}
          >
            + more
          </span>
        </div>
      </section>

      {/* Key Features */}
      <section
        style={{
          maxWidth: "var(--max)",
          margin: "0 auto",
          padding: "4rem var(--pad)",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            color: "var(--ink)",
            marginBottom: "2.5rem",
          }}
        >
          Key features
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2rem",
          }}
        >
          {features.map((f) => (
            <div
              key={f.title}
              style={{
                borderTop: "2px solid var(--cobalt)",
                paddingTop: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "var(--ink)",
                  margin: "0 0 0.75rem",
                }}
              >
                {f.title}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--ink-mute)", lineHeight: 1.55, margin: 0 }}>
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Teaser */}
      <section
        style={{
          maxWidth: "var(--max)",
          margin: "0 auto",
          padding: "4rem var(--pad)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
                fontWeight: 600,
                letterSpacing: "-0.01em",
                color: "var(--ink)",
                margin: "0 0 0.5rem",
              }}
            >
              Have questions?
            </h2>
            <p style={{ fontSize: "0.9rem", color: "var(--ink-mute)", margin: 0 }}>
              See answers to the most common setup and configuration questions.
            </p>
          </div>
          <Link
            href="/carrier-rates/faq"
            style={{
              display: "inline-block",
              border: "1px solid var(--ink)",
              color: "var(--ink)",
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "0.75rem 1.5rem",
              borderRadius: "2px",
              whiteSpace: "nowrap",
            }}
          >
            View all FAQs →
          </Link>
        </div>
      </section>
    </div>
  );
}
