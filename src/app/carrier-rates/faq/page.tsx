import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Live Carrier Rates FAQ — Frequently Asked Questions | NITSOF",
  description:
    "Answers to common questions about setting up Live Carrier Rates, connecting carriers, configuring markup rules, and troubleshooting your Shopify integration.",
};

const faqs = [
  {
    q: "What carriers do you support?",
    a: "Live Carrier Rates currently supports Australia Post, FedEx, UPS, USPS, DHL Express, StarTrack, Sendle, and Aramex. We add new carriers regularly — if yours isn't listed, contact us at support@nitsof.com and we'll prioritise it.",
  },
  {
    q: "How are shipping rates calculated?",
    a: "Rates are fetched in real-time from each carrier's API at the moment your customer enters a shipping address. The calculation uses the items in the cart (weight, dimensions, quantity) and the destination address. Rates are never cached or estimated — they reflect what the carrier would charge for that exact shipment right now.",
  },
  {
    q: "Can I add a markup or discount to the rates?",
    a: "Yes. You can add a flat amount or percentage markup per carrier, per service level, or per destination region. You can also apply discounts for specific customer tags (e.g. wholesale or loyalty customers). Rules stack in priority order and are evaluated at checkout.",
  },
  {
    q: "Do I need a carrier account to use this app?",
    a: "For most carriers, yes — you'll need your own carrier account number and credentials to access negotiated or discounted rates. Without a carrier account the app can still use publicly available rate tables, but your contracted rates will be lower and more competitive.",
  },
  {
    q: "Will this slow down my checkout?",
    a: "No. Rate requests are made asynchronously and are typically resolved in under 500ms. We use parallel requests where multiple carriers are configured so the slowest carrier doesn't block the others. If a carrier API is unavailable, the app falls back gracefully without breaking the checkout.",
  },
  {
    q: "What happens if a carrier API is down?",
    a: "Live Carrier Rates detects API failures automatically. If a carrier is unreachable, that carrier's rates are silently excluded from the checkout and the remaining carriers continue to show. You can configure a fallback flat rate to display in case all carriers are unavailable, ensuring customers can always complete a purchase.",
  },
];

export default function CarrierRatesFAQ() {
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
        <Link href="/carrier-rates" style={{ color: "var(--ink-mute)" }}>Live Carrier Rates</Link>
        <span style={{ margin: "0 0.5rem" }}>·</span>
        <span style={{ color: "var(--ink)" }}>FAQ</span>
      </nav>

      {/* Header */}
      <section
        style={{
          maxWidth: "var(--max)",
          margin: "0 auto",
          padding: "4rem var(--pad) 3rem",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "var(--ink)",
            margin: "0 0 1rem",
          }}
        >
          Frequently asked questions
        </h1>
        <p style={{ fontSize: "1rem", color: "var(--ink-mute)", lineHeight: 1.6, margin: 0 }}>
          Common setup, configuration, and troubleshooting questions for Live Carrier Rates.
        </p>
      </section>

      {/* FAQ List */}
      <section
        style={{
          maxWidth: "var(--max)",
          margin: "0 auto",
          padding: "3rem var(--pad)",
        }}
      >
        <div style={{ maxWidth: "52rem" }}>
          {faqs.map((faq) => (
            <div
              key={faq.q}
              style={{
                borderBottom: "1px solid var(--rule)",
                padding: "2rem 0",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.0625rem",
                  fontWeight: 600,
                  color: "var(--ink)",
                  margin: "0 0 0.75rem",
                }}
              >
                {faq.q}
              </h2>
              <p style={{ fontSize: "0.9375rem", color: "var(--ink-mute)", lineHeight: 1.65, margin: 0 }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        {/* Back link */}
        <div style={{ marginTop: "3rem" }}>
          <Link
            href="/carrier-rates"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--cobalt)",
            }}
          >
            ← Back to Live Carrier Rates
          </Link>
        </div>
      </section>
    </div>
  );
}
