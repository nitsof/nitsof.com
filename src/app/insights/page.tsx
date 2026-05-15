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
    <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-24 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-blue-400">
          Insights
        </p>
        <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
          Thinking out loud
        </h1>
        <p className="mt-4 text-lg text-gray-400">
          Notes on software delivery, AI-native development, and building
          products that last.
        </p>
      </div>

      <div className="mt-16 divide-y divide-gray-800">
        {posts.map((post) => (
          <article key={post.slug} className="py-10 first:pt-0">
            <div className="flex items-center gap-4">
              <span className="text-xs font-medium uppercase tracking-widest text-blue-400">
                {post.category}
              </span>
              <span className="text-xs text-gray-600">·</span>
              <time className="text-xs text-gray-500" dateTime={post.date}>
                {formatDate(post.date)}
              </time>
            </div>
            <h2 className="mt-3 text-2xl font-bold text-white">
              <Link
                href={`/insights/${post.slug}`}
                className="transition hover:text-blue-400"
              >
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 text-gray-400">{post.excerpt}</p>
            <Link
              href={`/insights/${post.slug}`}
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300"
            >
              Read more
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
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
