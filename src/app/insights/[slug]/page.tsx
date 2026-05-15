import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllInsights, getInsightBySlug, formatDate } from "@/lib/insights";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllInsights().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsightBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — NITSOF`,
    description: post.excerpt,
  };
}

export default async function InsightPost({ params }: Props) {
  const { slug } = await params;
  const post = getInsightBySlug(slug);
  if (!post) notFound();

  return (
    <div className="post-page">
      <Link href="/insights" className="post-back">
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
          <path d="M19 12H5M11 5l-7 7 7 7" />
        </svg>
        All insights
      </Link>

      <div className="post-meta">
        <span className="post-cat">{post.category}</span>
        <span style={{ color: "var(--ink-mute)", fontSize: "10px" }}>&middot;</span>
        <time className="post-date" dateTime={post.date}>
          {formatDate(post.date)}
        </time>
        <span style={{ color: "var(--ink-mute)", fontSize: "10px" }}>&middot;</span>
        <span className="post-author">{post.author}</span>
      </div>

      <h1 className="post-title">{post.title}</h1>
      <p className="post-excerpt">{post.excerpt}</p>

      <hr className="post-divider" />

      <div
        className="prose-hybrid"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <hr className="post-divider" />

      <div className="post-footer">
        <Link href="/insights" className="post-footer-link">
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
            <path d="M19 12H5M11 5l-7 7 7 7" />
          </svg>
          All insights
        </Link>
        <a href="mailto:hello@nitsof.com" className="post-footer-link">
          Get in touch
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
        </a>
      </div>
    </div>
  );
}
