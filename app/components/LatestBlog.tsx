import Link from 'next/link';
import { client } from '../../sanity/lib/client';

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  categories?: { _id: string; title: string }[];
  excerpt?: string;
}

async function getLatestPosts(): Promise<Post[]> {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) [0...3] {
      _id,
      title,
      slug,
      publishedAt,
      "categories": categories[]->{ _id, title },
      "excerpt": coalesce(excerpt, pt::text(body)[0..240])
    }`,
    {},
    { next: { revalidate: 3600 } }
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function LatestBlog() {
  const posts = await getLatestPosts();

  if (!posts.length) return null;

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">
              Insights
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">
              Latest Insights
            </h2>
          </div>
          <Link
            href="/insights/"
            className="text-brand-600 font-semibold text-sm hover:text-brand-700 transition-colors whitespace-nowrap"
          >
            View all insights →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post._id}
              href={`/insights/${post.slug.current}`}
              className="group flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  {post.categories && post.categories.length > 0 && (
                    <>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
                        {post.categories[0].title}
                      </span>
                      <span className="text-slate-300">·</span>
                    </>
                  )}
                  <span className="text-xs text-slate-400">{formatDate(post.publishedAt)}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors leading-snug">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="text-slate-500 text-sm leading-relaxed flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                )}
                <div className="mt-6 text-brand-600 text-sm font-semibold flex items-center gap-1">
                  Read more
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
