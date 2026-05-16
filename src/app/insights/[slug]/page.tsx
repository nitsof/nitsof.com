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
      <Link className="post-back" href="/insights">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 5 5 12 12 19" />
        </svg>
        All insights
      </Link>

      <div className="post-header">
        <span className="post-cat">{post.category}</span>
        <h1>{post.title}</h1>
        <p className="post-excerpt">{post.excerpt}</p>
      </div>

      <div className="post-meta">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span>{post.author}</span>
      </div>

      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <div className="post-footer">
        <Link className="post-footer-link" href="/insights">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 5 5 12 12 19" />
          </svg>
          All insights
        </Link>
        <a className="post-footer-link" href="mailto:hello@nitsof.com">
          Get in touch
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </div>
  );
}
