import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { getAllInsights, formatDate } from "@/lib/insights";

const ArrowIcon = ({ size = 14 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

const DiagArrow = () => (
  <svg
    className="cap-arrow"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 17L17 7M9 7h8v8" />
  </svg>
);

export default function Home() {
  const insights = getAllInsights().slice(0, 3);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="hero" id="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-glow-2" aria-hidden="true" />

        <div className="hero-inner">
          <p className="hero-eyebrow reveal">An AI-native software studio</p>
          <h1 className="reveal">
            Software,
            <br />
            shipped at the speed
            <br />
            of <em>thought</em>.
          </h1>

          <div className="hero-actions reveal">
            <a className="btn btn--primary" href="#work">
              See selected work
              <ArrowIcon />
            </a>
            <a className="btn btn--ghost" href="#contact">
              Begin a project
            </a>
          </div>
        </div>

        <div className="hero-bar">
          <div className="hero-stat">
            <span className="stat-label">Capacity</span>
            <span className="stat-value">
              <span className="live-dot" />
              Open · Q3 2026
            </span>
          </div>
          <div className="hero-stat">
            <span className="stat-label">From</span>
            <span className="stat-value">Australia · Worldwide</span>
          </div>
          <div className="hero-stat">
            <span className="stat-label">Est.</span>
            <span className="stat-value">2024</span>
          </div>
          <div className="hero-stat">
            <span className="stat-label">Velocity</span>
            <span className="stat-value">4.2× faster delivery</span>
          </div>
        </div>
      </section>

      {/* ── Bridge ────────────────────────────────────────────────────── */}
      <div className="bridge" id="hero-bridge" aria-hidden="true" />

      {/* ── Client Strip ──────────────────────────────────────────────── */}
      <div className="clients reveal">
        <span className="clients-label">Trusted by</span>
        <div className="clients-logos">
          <span className="client-name">Apex Logistics</span>
          <span className="client-name">Stackborn</span>
          <span className="client-name">Mercia Health</span>
          <span className="client-name">Nordpath Retail</span>
          <span className="client-name">LiveCarrierRates</span>
        </div>
      </div>

      {/* ── Manifesto ─────────────────────────────────────────────────── */}
      <section className="manifesto">
        <div className="manifesto-inner">
          <div className="principle reveal">
            <span className="principle-num">01 — Principle</span>
            <h3>
              Simplicity is <em>the</em> feature.
            </h3>
            <p>
              We strip out everything that doesn&rsquo;t earn its place. Fewer dependencies,
              fewer screens, fewer meetings. The shortest path from problem to production.
            </p>
          </div>
          <div className="principle reveal">
            <span className="principle-num">02 — Principle</span>
            <h3>
              Confidence in <em>craft</em>.
            </h3>
            <p>
              We don&rsquo;t ship demos. We ship software our clients depend on to run their
              business — measured in uptime, revenue, and the quality of a sleepless night
              avoided.
            </p>
          </div>
          <div className="principle reveal">
            <span className="principle-num">03 — Principle</span>
            <h3>
              Building the <em>future</em>, now.
            </h3>
            <p>
              AI sits inside our delivery loop, not as a feature on a slide. The pace this
              enables is the only thing that lets a four-person team out-ship a fifty-person
              one.
            </p>
          </div>
        </div>
      </section>

      {/* ── Capabilities ──────────────────────────────────────────────── */}
      <section className="section" id="capabilities">
        <div className="section-head">
          <span className="label">§ Capabilities</span>
          <h2>
            Four disciplines, <em>one</em> studio.
          </h2>
          <p className="aside">
            Each engagement is led by a senior engineer who stays through delivery. No handoffs,
            no juniors learning on your time.
          </p>
        </div>

        <div className="capabilities">
          <article className="cap reveal">
            <span className="cap-num">01 / Strategy</span>
            <DiagArrow />
            <h3>Product archaeology.</h3>
            <p className="cap-desc">
              We map what&rsquo;s actually there before adding anything new — most teams already
              have 70% of what they need, just badly arranged.
            </p>
          </article>
          <article className="cap reveal">
            <span className="cap-num">02 / Build</span>
            <DiagArrow />
            <h3>AI-augmented engineering.</h3>
            <p className="cap-desc">
              Senior engineers paired with AI throughout — design, code, review, QA. Same craft,
              3–5× the throughput.
            </p>
          </article>
          <article className="cap reveal">
            <span className="cap-num">03 / Ship</span>
            <DiagArrow />
            <h3>Production from day one.</h3>
            <p className="cap-desc">
              Every commit deploys. No staging-forever environments — real users, real load,
              measured from the first week.
            </p>
          </article>
          <article className="cap reveal">
            <span className="cap-num">04 / Iterate</span>
            <DiagArrow />
            <h3>Stay in the loop.</h3>
            <p className="cap-desc">
              We don&rsquo;t disappear at launch. Monthly cadence, real metrics, the kind of
              partner you keep on speed dial.
            </p>
          </article>
        </div>
      </section>

      {/* ── Selected Work ─────────────────────────────────────────────── */}
      <section className="section" id="work" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <span className="label">§ Selected work</span>
          <h2>
            Built in <em>production</em>. Not in a deck.
          </h2>
          <p className="aside">
            A small selection of the studio&rsquo;s recent work. Full case studies on request.
          </p>
        </div>

        <div className="work">
          {/* Live Carrier Rates */}
          <article className="case reveal">
            <div className="case-frame case-frame--carrier">
              <div className="window-bar">
                <div className="dots">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="url">checkout.acme-store.com</div>
              </div>
              <div className="checkout">
                <div className="checkout-title">
                  Shipping <small>Step 2 of 3</small>
                </div>
                <div className="rate">
                  <div>
                    <strong>USPS Ground Advantage · 3–5 day tracked</strong>
                    <div className="rate-eta">Arrives Mon 25 May</div>
                  </div>
                  <div className="rate-price">$4.85</div>
                </div>
                <div className="rate rate--active">
                  <div>
                    <strong>FedEx Priority Overnight · before 12:00</strong>
                    <div className="rate-eta">Arrives Wed 20 May</div>
                  </div>
                  <div className="rate-price">$24.40</div>
                </div>
                <div className="rate">
                  <div>
                    <strong>Australia Post · Express 2 day</strong>
                    <div className="rate-eta">Arrives Thu 21 May</div>
                  </div>
                  <div className="rate-price">$7.60</div>
                </div>
                <div className="rate">
                  <div>
                    <strong>DHL Express Worldwide</strong>
                    <div className="rate-eta">Arrives Fri 22 May</div>
                  </div>
                  <div className="rate-price">$32.50</div>
                </div>
              </div>
            </div>
            <div className="case-meta">
              <span className="case-status">
                <span className="dot" />
                Live
              </span>
              <div />
              <h3 className="case-name">Live Carrier Rates</h3>
              <p className="case-desc">
                A published Shopify app that surfaces real-time carrier pricing inside checkout
                — the moment shoppers decide to buy or bail.
              </p>
              <a
                className="case-link"
                href="https://apps.shopify.com/live-carrier-rates"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on the Shopify App Store
                <ArrowIcon />
              </a>
            </div>
          </article>

          {/* SKU Manager */}
          <article className="case reveal">
            <div className="case-frame case-frame--sku">
              <div className="window-bar">
                <div className="dots">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="url">app.skumanager.com — Catalog</div>
              </div>
              <div className="dash">
                <div className="dash-head">
                  12,408 SKUs <small>Updated 3 min ago</small>
                </div>
                <div className="dash-table">
                  <div className="th">SKU</div>
                  <div className="th">Variant</div>
                  <div className="th">Stock</div>
                  <div className="th">Status</div>
                  <div className="td">NSF-1184-BLK</div>
                  <div className="td">Standard</div>
                  <div className="td">412</div>
                  <div className="td">
                    <span className="pill pill--live">Live</span>
                  </div>
                  <div className="td">NSF-2210-GRY</div>
                  <div className="td">Premium</div>
                  <div className="td">38</div>
                  <div className="td">
                    <span className="pill pill--live">Live</span>
                  </div>
                  <div className="td">NSF-9001-EVG</div>
                  <div className="td">Limited</div>
                  <div className="td">0</div>
                  <div className="td">
                    <span className="pill pill--draft">Draft</span>
                  </div>
                  <div className="td">NSF-4470-RED</div>
                  <div className="td">Standard</div>
                  <div className="td">1,204</div>
                  <div className="td">
                    <span className="pill pill--live">Live</span>
                  </div>
                  <div className="td">NSF-7732-CRM</div>
                  <div className="td">Bundle</div>
                  <div className="td">29</div>
                  <div className="td">
                    <span className="pill pill--live">Live</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="case-meta">
              <span className="case-status">
                <span className="dot" />
                Live
              </span>
              <div />
              <h3 className="case-name">SKU Manager</h3>
              <p className="case-desc">
                Operations tooling for merchandising teams running complex catalogues at scale.
                Built for the businesses where product data is the business.
              </p>
              <a
                className="case-link"
                href="https://skumanager.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit skumanager.com
                <ArrowIcon />
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────────────────── */}
      <section className="process" id="process">
        <div className="process-inner">
          <div className="section-head process-head">
            <span className="label">§ How we work</span>
            <h2>
              Four weeks, <em>not</em> four months.
            </h2>
            <p className="aside">
              Most engagements run 4–12 weeks. We rebuild this timeline together at the start.
            </p>
          </div>
          <div className="timeline">
            <article className="step reveal">
              <span className="step-num">Week 01</span>
              <p>
                We map the system, the team, and the constraints. Output: one page that everyone
                signs.
              </p>
              <h4>
                Frame the <em>real</em> problem.
              </h4>
            </article>
            <article className="step reveal">
              <span className="step-num">Week 02</span>
              <p>
                First commit on day two. By Friday it&rsquo;s in front of users — even if rough.
              </p>
              <h4>Ship something that runs.</h4>
            </article>
            <article className="step reveal">
              <span className="step-num">Week 03</span>
              <p>
                Measure, cut, sharpen. AI handles the boilerplate so humans do the judgement work.
              </p>
              <h4>
                Refine in <em>public</em>.
              </h4>
            </article>
            <article className="step reveal">
              <span className="step-num">Week 04+</span>
              <p>
                Permanent ownership transfer or a monthly retainer — your call, every quarter.
              </p>
              <h4>Hand over, or stay close.</h4>
            </article>
          </div>
        </div>
      </section>

      {/* ── Pull Quote ────────────────────────────────────────────────── */}
      <section className="pullquote" id="about">
        <blockquote className="reveal">
          &ldquo;NITSOF cut our expected delivery timeline in <em>half</em>. The AI-first
          approach isn&rsquo;t a pitch — it&rsquo;s just how they actually work, every day,
          every meeting.&rdquo;
        </blockquote>
        <div className="attribution reveal">
          <div className="name">James Harlow</div>
          <div className="role">CTO · Apex Logistics Group</div>
          <div className="others">
            <div className="o">
              <span>Priya Mehta</span>
              <span>Stackborn</span>
            </div>
            <div className="o">
              <span>Daniel Osei</span>
              <span>Mercia Health</span>
            </div>
            <div className="o" style={{ border: 0 }}>
              <span>Maya Lindgren</span>
              <span>Nordpath Retail</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Insights Preview ──────────────────────────────────────────── */}
      {insights.length > 0 && (
        <section className="insights-preview" id="insights">
          <div className="section-label reveal">§ Insights</div>
          <h2 className="section-title reveal">
            Thinking out loud
            <br />
            on software &amp; <em>craft</em>.
          </h2>
          <div className="insights-grid">
            {insights.map((post) => (
              <Link
                key={post.slug}
                className="insight-card reveal"
                href={`/insights/${post.slug}`}
              >
                <span className="insight-cat">{post.category}</span>
                <h3 className="insight-title">{post.title}</h3>
                <p className="insight-excerpt">{post.excerpt}</p>
                <span className="insight-meta">{formatDate(post.date)}</span>
              </Link>
            ))}
          </div>
          <Link className="insights-all" href="/insights">
            All insights
            <svg
              width="12"
              height="12"
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
        </section>
      )}

      {/* ── CTA / Contact ─────────────────────────────────────────────── */}
      <section className="cta" id="contact">
        <div className="cta-card">
          <div className="reveal">
            <h2>
              Have something you&rsquo;d ship if it were <em>easy</em>?
            </h2>
            <p className="lead">
              Tell us what you&rsquo;re trying to build. We respond within one working day —
              with either a plan or an honest reason why we&rsquo;re not the right studio for
              it.
            </p>
            <p className="direct-line" style={{ marginTop: "2rem" }}>
              Or email us directly:{" "}
              <a href="mailto:hello@nitsof.com">hello@nitsof.com</a>
            </p>
          </div>
          <div className="reveal">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
