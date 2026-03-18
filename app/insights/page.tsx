import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import type { Metadata } from 'next';
import { client } from '../../sanity/lib/client';
import { urlFor } from '../../sanity/lib/image';

export const metadata: Metadata = {
  title: 'Insights | Main Street Tech',
  description:
    'Technology insights, best practices, and expert perspectives from the Main Street Tech team.',
  openGraph: {
    title: 'Insights | Main Street Tech',
    description:
      'Technology insights, best practices, and expert perspectives from the Main Street Tech team.',
    url: 'https://www.mainstreettech.com/insights',
    images: [{ url: '/images/default-og.png' }],
  },
  twitter: {
    title: 'Insights | Main Street Tech',
    description:
      'Technology insights, best practices, and expert perspectives from the Main Street Tech team.',
  },
};

const POSTS_PER_PAGE = 9;

interface Category {
  _id: string;
  title: string;
  slug: { current: string };
}


interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  mainImage?: { asset: { _ref: string }; hotspot?: { x: number; y: number } };
  categories?: Category[];
  excerpt?: string;
}

async function getCategories(): Promise<Category[]> {
  return client.fetch(`*[_type == "category"] | order(title asc) { _id, title, slug }`);
}


async function getPosts(page: number, categorySlug?: string, tagSlug?: string) {
  const start = (page - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;

  const filter = categorySlug
    ? `*[_type == "post" && $categorySlug in categories[]->slug.current]`
    : tagSlug
    ? `*[_type == "post" && $tagSlug in tags[]->slug.current]`
    : `*[_type == "post"]`;

  const [posts, total] = await Promise.all([
    client.fetch<Post[]>(
      `${filter} | order(publishedAt desc) [$start...$end] {
        _id,
        title,
        slug,
        publishedAt,
        mainImage,
        "categories": categories[]->{ _id, title, slug },
        "excerpt": coalesce(excerpt, pt::text(body)[0..240])
      }`,
      { start, end, categorySlug: categorySlug ?? '', tagSlug: tagSlug ?? '' }
    ),
    client.fetch<number>(
      `count(${filter})`,
      { categorySlug: categorySlug ?? '', tagSlug: tagSlug ?? '' }
    ),
  ]);

  return { posts, total };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function InsightsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; category?: string; tag?: string }>;
}) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page ?? '1', 10) || 1);
  const categorySlug = params.category ?? undefined;
  const tagSlug = params.tag ?? undefined;

  const [{ posts, total }, categories] = await Promise.all([
    getPosts(page, categorySlug, tagSlug),
    getCategories(),
  ]);

  const totalPages = Math.ceil(total / POSTS_PER_PAGE);

  function categoryHref(slug?: string, p = 1) {
    const base = slug ? `?category=${slug}` : '?';
    return p > 1 ? `${base}&page=${p}` : slug ? base : '/insights';
  }

  function tagHref(slug?: string, p = 1) {
    const base = slug ? `?tag=${slug}` : '?';
    return p > 1 ? `${base}&page=${p}` : slug ? base : '/insights';
  }

  const activeFilter = categorySlug ? 'category' : tagSlug ? 'tag' : 'none';

  return (
    <>
      <Header />
      <main>
        {/* ── Page Hero ─────────────────────────────────── */}
        <PageHero 
          serviceName="From the Team"
          headline="Insights "
          headlineAccent="&amp; Perspectives"
          description=" Expert commentary on data management, enterprise technology, and the trends shaping how organizations operate."
          backgroundImage="/images/page-hero-backgrounds/about-bg.png"
          showBreadcrumb={false}
          primaryButton={{ label: 'Talk to an Expert', href: '/contact' }}
          secondaryButton={{ label: 'Services We Offer', href: '/services' }}
        />

        {/* ── Filters ───────────────────────────────────── */}
        {categories.length > 0 && (
          <div className="bg-white border-b border-slate-100 z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-2">
              <Link
                href="/insights"
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === 'none'
                    ? 'bg-brand-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                All
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat._id}
                  href={categoryHref(cat.slug.current)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    categorySlug === cat.slug.current
                      ? 'bg-brand-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat.title}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* ── Post Grid ─────────────────────────────────── */}
        <section className="py-14 md:py-20 px-4 sm:px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            {posts.length === 0 ? (
              <p className="text-center text-slate-500 py-20">No posts published yet.</p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                  <Link
                    key={post._id}
                    href={`/insights/${post.slug.current}`}
                    className="animate-fade-up group bg-white rounded-2xl overflow-hidden flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300 border border-slate-100"
                    style={{ animationDelay: `${index * 60}ms` }}
                  >
                    {/* Thumbnail */}
                    <div className="aspect-video relative overflow-hidden">
                      {post.mainImage?.asset ? (
                        <>
                          <Image
                            src={urlFor(post.mainImage).width(640).height(360).fit('crop').url()}
                            alt={post.title}
                            width={640}
                            height={360}
                            className="w-full h-full object-cover grayscale brightness-125 transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-brand-700/40 mix-blend-multiply" />
                          <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
                        </>
                      ) : (
                        <>
                          <Image
                            src="/images/insights/insights-placehoder.png"
                            alt={post.title}
                            width={640}
                            height={360}
                            className="w-full h-full object-cover grayscale brightness-125 transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-brand-700/40 mix-blend-multiply" />
                          <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
                        </>
                      )}

                      {/* Category badge over image */}
                      {post.categories && post.categories.length > 0 && (
                        <div className="absolute bottom-3 left-3 right-3 flex flex-nowrap items-center gap-1.5 overflow-hidden">
                          {post.categories.map((cat) => (
                            <span
                              key={cat._id}
                              className="shrink-0 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-sm text-brand-700 text-xs font-semibold shadow-sm"
                            >
                              {cat.title}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      {post.publishedAt && (
                        <p className="text-brand-500 text-xs font-semibold uppercase tracking-wider mb-2">
                          {formatDate(post.publishedAt)}
                        </p>
                      )}
                      <h2 className="text-lg font-bold text-slate-900 mb-3 leading-snug group-hover:text-brand-700 transition-colors">
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-1">
                          {post.excerpt}
                        </p>
                      )}
                      <span className="mt-5 text-brand-600 text-sm font-semibold group-hover:underline underline-offset-2">
                        Read more
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* ── Pagination ────────────────────────────── */}
            {totalPages > 1 && (
              <div className="mt-14 flex items-center justify-center gap-2">
                {page > 1 && (
                  <Link
                    href={tagSlug ? tagHref(tagSlug, page - 1) : categoryHref(categorySlug, page - 1)}
                    className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-slate-700 text-sm font-medium hover:border-brand-400 hover:text-brand-700 transition-colors"
                  >
                    ← Previous
                  </Link>
                )}

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <Link
                    key={p}
                    href={tagSlug ? tagHref(tagSlug, p) : categoryHref(categorySlug, p)}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-semibold transition-colors ${
                      p === page
                        ? 'bg-brand-600 text-white shadow'
                        : 'bg-white border border-slate-200 text-slate-700 hover:border-brand-400 hover:text-brand-700'
                    }`}
                  >
                    {p}
                  </Link>
                ))}

                {page < totalPages && (
                  <Link
                    href={tagSlug ? tagHref(tagSlug, page + 1) : categoryHref(categorySlug, page + 1)}
                    className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-slate-700 text-sm font-medium hover:border-brand-400 hover:text-brand-700 transition-colors"
                  >
                    Next →
                  </Link>
                )}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
