import Link from "next/link";

/** Renders a single service capability card with a title and description. */
const CapabilityCard = ({ title, description }: { title: string; description: string }) => (
  <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6 transition-all hover:border-blue-500/50 hover:bg-gray-900">
    <h3 className="text-lg font-bold text-white">{title}</h3>
    <p className="mt-2 text-sm text-gray-400">{description}</p>
  </div>
);

/** Renders a client testimonial card with a quote and attribution. */
const TestimonialCard = ({ quote, attribution }: { quote: string; attribution: string }) => (
  <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6">
    <p className="text-gray-300 italic">&ldquo;{quote}&rdquo;</p>
    <p className="mt-4 text-sm font-medium text-blue-400">{attribution}</p>
  </div>
);

export default function Home() {
  return (
    <div className="relative z-10">
      {/* Hero Section */}
      <section className="mx-auto flex h-screen min-h-[700px] max-w-screen-xl items-center px-4 py-32 lg:px-8">
        <div className="max-w-3xl text-left">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl">
            Deliver Software Faster with AI
          </h1>

          <p className="mt-4 max-w-xl text-lg text-gray-300 sm:text-xl/relaxed">
            NITSOF is an AI specialist firm that helps businesses build, ship, and iterate on software at a pace that wasn&apos;t possible before — from early-stage startups to established enterprises.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/#portfolio"
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-white/75 sm:w-auto"
            >
              See Our Work
            </Link>
            <Link
              href="/#about"
              className="block w-full rounded border border-white px-12 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-gray-900 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            >
              Work With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Services / Capabilities Section */}
      <section id="services" className="mx-auto max-w-screen-xl px-4 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            How We Help You Move Faster
          </h2>
          <p className="mt-4 text-gray-400">
            We put AI at the center of software delivery — not as a gimmick, but as a methodology that cuts time-to-market without cutting quality.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <CapabilityCard
            title="AI-Powered Development"
            description="We use AI throughout the entire build process — from scoping and design to code and QA. The result is faster delivery with fewer blind spots."
          />
          <CapabilityCard
            title="Production-Grade Engineering"
            description="What we ship runs in production at scale. No demos, no fragile prototypes — real software built to last and grow with your business."
          />
          <CapabilityCard
            title="End-to-End Partnership"
            description="We stay involved from strategy through deployment and beyond. You're not handed off at launch — we iterate with you as your needs evolve."
          />
          <CapabilityCard
            title="Built for Any Scale"
            description="Startup or enterprise, 5 people or 500 — our approach adapts to your size, your stack, and the pace you need to move at."
          />
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="mx-auto max-w-screen-xl px-4 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            What We&apos;ve Built
          </h2>
          <p className="mt-4 text-gray-400">
            We build our own products and deliver client work — both prove that our approach works in production.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-8 transition-all hover:border-blue-500/50 hover:bg-gray-900">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gray-800 text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-2.1 0-3.5-1.4-3.5-3.5s1.4-3.5 3.5-3.5h15c2.1 0 3.5 1.4 3.5 3.5s-1.4 3.5-3.5 3.5h-15Z" /><path d="m8 16-1.5-1.5L8 13" /><path d="M16 8l1.5 1.5L16 11" /></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Carrier Rates</h3>
                <span className="text-xs font-medium text-green-400">Live</span>
              </div>
            </div>
            <p className="mt-4 text-gray-400">
              Shoppers abandon carts when shipping costs are a surprise. Carrier Rates connects your Shopify store directly to carrier APIs so customers see live, accurate shipping costs at checkout — before they decide to leave. One integration, fewer lost sales.
            </p>
            <Link
              href="/carrier-rates"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300"
            >
              Explore Carrier Rates
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </Link>
          </div>

          <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-8 transition-all hover:border-blue-500/50 hover:bg-gray-900">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gray-800 text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 8h10"/><path d="M7 12h4"/></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">SKU Manager</h3>
              </div>
            </div>
            <p className="mt-4 text-gray-400">
              Managing complex product catalogs at scale is harder than it looks. SKU Manager gives operations and merchandising teams the tools to organize, search, and maintain product data without the mess — built for businesses where inventory complexity is a real problem.
            </p>
            <a
              href="https://skumanager.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300"
            >
              Visit skumanager.com
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="mx-auto max-w-screen-xl px-4 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Why We Exist
          </h2>
          <p className="prose prose-lg prose-invert mx-auto mt-6">
            Most businesses are moving slower than they should — not because of their people, but because of how software gets built. NITSOF exists to change that. We&apos;re an AI specialist firm that embeds AI throughout the software delivery lifecycle, so our clients build better software faster. Whether you&apos;re a founder racing to ship your next product or a CTO trying to modernize a legacy stack, we bring the expertise and tools to get there.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="mx-auto max-w-screen-xl px-4 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-blue-400">
            Partnering with startups and enterprises to ship faster
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            What Our Clients Say
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <TestimonialCard
            quote="NITSOF cut our expected delivery timeline in half. The AI-first approach isn't a pitch — it's how they actually work."
            attribution="James Harlow, CTO — Apex Logistics Group"
          />
          <TestimonialCard
            quote="We needed a partner who understood both the technical depth and the business pressure we were under. NITSOF delivered on both."
            attribution="Priya Mehta, Founder — Stackborn"
          />
          <TestimonialCard
            quote="The quality is enterprise-grade but the speed feels like a startup. That combination is rare."
            attribution="Daniel Osei, VP of Product — Mercia Health"
          />
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="mx-auto max-w-screen-xl px-4 py-16 sm:py-24 lg:px-8">
        <div className="rounded-xl border border-gray-800 bg-gray-900/50 px-8 py-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to build faster?
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Let&apos;s talk about what AI-powered delivery could mean for your next project.
          </p>
          <div className="mt-8">
            <a
              href="mailto:hello@nitsof.com"
              className="inline-block rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-white/75"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
