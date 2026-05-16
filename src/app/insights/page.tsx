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
    <>
      <div className="insights-page-header">
        <p className="eyebrow">§ Insights</p>
        <h1>Thinking out loud</h1>
        <p>
          Notes on software delivery, AI-native development, and building products that last.
        </p>
      </div>

      <div className="insights-list">
        {posts.map((post) => (
          <article key={post.slug}>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <span className="post-cat">{post.category}</span>
              <time className="post-date" dateTime={post.date}>
                {formatDate(post.date)}
              </time>
            </div>
            <Link className="post-title-link" href={`/insights/${post.slug}`}>
              {post.title}
            </Link>
            <p className="post-excerpt">{post.excerpt}</p>
            <Link className="post-read-more" href={`/insights/${post.slug}`}>
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
    </>
  );
}
