import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | NITSOF",
  description:
    "NITSOF's privacy policy — what data we collect, how we use it, and how we protect it.",
};

export default function PrivacyPolicy() {
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
        <span style={{ color: "var(--ink)" }}>Privacy Policy</span>
      </nav>

      <div
        style={{
          maxWidth: "52rem",
          margin: "0 auto",
          padding: "4rem var(--pad)",
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
          Privacy Policy
        </h1>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "var(--ink-mute)",
            margin: "0 0 3rem",
          }}
        >
          Last updated: May 2026
        </p>

        {[
          {
            title: "1. Introduction",
            body: (
              <p>
                NITSOF (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the nitsof.com website and
                develops Shopify applications (our &ldquo;Apps&rdquo;). This policy outlines our practices for
                collecting, using, and disclosing your personal data when you use our website and Apps.
              </p>
            ),
          },
          {
            title: "2. Information We Collect",
            body: (
              <>
                <p>We collect different types of information to provide and improve our services.</p>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 600, color: "var(--ink)", margin: "1.5rem 0 0.5rem" }}>
                  2.1. Data You Provide
                </h3>
                <p>When using our website, we may ask for personally identifiable information (&ldquo;Personal Data&rdquo;), including:</p>
                <ul style={{ paddingLeft: "1.25rem", margin: "0.5rem 0" }}>
                  <li>Email address</li>
                  <li>First and last name</li>
                  <li>Cookies and Usage Data</li>
                </ul>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 600, color: "var(--ink)", margin: "1.5rem 0 0.5rem" }}>
                  2.2. Data from Shopify Apps
                </h3>
                <p>When you install our Apps, we access information from your Shopify account:</p>
                <ul style={{ paddingLeft: "1.25rem", margin: "0.5rem 0" }}>
                  <li>
                    <strong>Shopify Account Information:</strong> Your shop&rsquo;s name, email, and domain.
                  </li>
                  <li>
                    <strong>App-Related Data:</strong> To function, our Apps may access and process data from your store, such as customer, order, and product information. The specific data accessed depends on the App.
                  </li>
                </ul>
              </>
            ),
          },
          {
            title: "3. How We Use Your Data",
            body: (
              <>
                <p>We use the collected data to:</p>
                <ul style={{ paddingLeft: "1.25rem", margin: "0.5rem 0" }}>
                  <li>Provide and maintain our Apps and website.</li>
                  <li>Notify you about service changes.</li>
                  <li>Enable interactive features.</li>
                  <li>Provide customer support.</li>
                  <li>Improve our services through analysis.</li>
                  <li>Monitor service usage.</li>
                  <li>Address technical issues.</li>
                </ul>
              </>
            ),
          },
          {
            title: "4. Data Transfer and Sharing",
            body: (
              <p>
                We do not sell your Personal Data. We may share your information with third-party service
                providers for hosting, analytics, and support. These providers are obligated to protect your
                data and are prohibited from using it for other purposes.
              </p>
            ),
          },
          {
            title: "5. Data Security",
            body: (
              <p>
                While we strive to use commercially acceptable means to protect your Personal Data, no method
                of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee
                its absolute security.
              </p>
            ),
          },
          {
            title: "6. Changes to This Policy",
            body: (
              <p>
                We may update this Privacy Policy periodically. We will notify you of any changes by posting
                the new policy on this page.
              </p>
            ),
          },
          {
            title: "7. Contact Us",
            body: (
              <p>
                If you have any questions, please contact us at{" "}
                <a href="mailto:support@nitsof.com" style={{ color: "var(--cobalt)", textDecoration: "underline" }}>
                  support@nitsof.com
                </a>
                .
              </p>
            ),
          },
        ].map(({ title, body }) => (
          <div
            key={title}
            style={{
              borderTop: "1px solid var(--rule)",
              paddingTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.125rem",
                fontWeight: 600,
                color: "var(--ink)",
                margin: "0 0 1rem",
              }}
            >
              {title}
            </h2>
            <div style={{ fontSize: "0.9375rem", color: "var(--ink-mute)", lineHeight: 1.65 }}>
              {body}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
