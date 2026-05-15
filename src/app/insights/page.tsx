import Link from "next/link";
import { getAllInsights, formatDate } from "@/lib/insights";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights — NITSOF",
  description:
    "Thinking out loud on software delivery, AI-native development, and building products that last.",
};

export default function InsightsPage() {
  const posts = getAllInsights();

  return (
    <div className="insights-page">
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--cobalt)",
          marginBottom: "0.75rem",
        }}
      >
        &sect; Insights
      </p>
      <h1 className="insights-page-heading">
        Thinking out <em>loud</em>.
      </h1>
      <p className="insights-page-sub">
        Notes on software delivery, AI-native development, and building
        products that last.
      </p>

      <div className="insights-post-list">
        {posts.map((post) => (
          <article key={post.slug} className="insights-post">
            <div className="insights-post-meta">
              <span className="insights-post-cat">{post.category}</span>
              <span style={{ color: "var(--ink-mute)", fontSize: "10px" }}>&middot;</span>
              <time className="insights-post-date" dateTime={post.date}>
                {formatDate(post.date)}
              </time>
            </div>
            <Link
              href={`/insights/${post.slug}`}
              className="insights-post-title"
            >
              {post.title}
            </Link>
            <p className="insights-post-excerpt">{post.excerpt}</p>
            <Link href={`/insights/${post.slug}`} className="insights-read-more">
              Read more
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
          </article>
        ))}
      </div>
    </div>
  );
}
