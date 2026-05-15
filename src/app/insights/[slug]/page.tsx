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
    <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-24 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/insights"
          className="mb-10 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
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

        <div className="flex items-center gap-4">
          <span className="text-xs font-medium uppercase tracking-widest text-blue-400">
            {post.category}
          </span>
          <span className="text-xs text-gray-600">·</span>
          <time className="text-xs text-gray-500" dateTime={post.date}>
            {formatDate(post.date)}
          </time>
          <span className="text-xs text-gray-600">·</span>
          <span className="text-xs text-gray-500">{post.author}</span>
        </div>

        <h1 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-gray-400">{post.excerpt}</p>

        <hr className="my-10 border-gray-800" />

        <div
          className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:text-white prose-p:text-gray-300 prose-a:text-blue-400 prose-strong:text-white prose-hr:border-gray-800"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <hr className="my-12 border-gray-800" />

        <div className="flex items-center justify-between">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
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
          <a
            href="mailto:hello@nitsof.com"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300"
          >
            Get in touch
            <svg
              xmlns="http://www.w3.org/2000/svg"
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
    </div>
  );
}
