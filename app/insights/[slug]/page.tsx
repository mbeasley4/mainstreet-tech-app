import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import type { Metadata } from 'next';
import { client } from '../../../sanity/lib/client';
import { urlFor } from '../../../sanity/lib/image';

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  readingTime?: string;
  excerpt?: string;
  mainImage?: { asset: { _ref: string }; hotspot?: { x: number; y: number } };
  author?: { name: string; image?: { asset: { _ref: string } } };
  categories?: { _id: string; title: string; slug: { current: string } }[];
  tags?: { _id: string; title: string; slug: { current: string } }[];
  body?: unknown[];
}

async function getPost(slug: string): Promise<Post | null> {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id, title, slug, publishedAt, readingTime, excerpt, mainImage,
      "categories": categories[defined(@->)]->{ _id, title, slug }[defined(slug.current)],
      "tags": tags[defined(@->)]->{ _id, title, slug }[defined(slug.current)], body,
      author->{ name, image }
    }`,
    { slug }
  );
}

export async function generateStaticParams() {
  const slugs = await client.fetch<{ slug: { current: string } | null }[]>(
    `*[_type == "post" && defined(slug.current)]{ slug }`
  );
  return slugs.filter((s) => s.slug?.current).map((s) => ({ slug: s.slug!.current }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  const title = `${post.title} | Main Street Tech`;
  const description = post.excerpt ?? 'Read the latest insights and expert perspectives from the Main Street Tech team.';
  const ogImage = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).url()
    : '/og-image.png';
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://www.mainstreettech.com/insights/${slug}`,
      type: 'article',
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

const ptComponents: Parameters<typeof PortableText>[0]['components'] = {
  types: {
    image: ({ value }: { value: { asset?: { _ref: string }; alt?: string; caption?: string } }) => {
      if (!value?.asset) return null;
      return (
        <figure className="float-right ml-8 mb-6 w-1/2 clear-right">
          <div className="rounded-xl overflow-hidden shadow-md ring-1 ring-slate-900/10">
            <Image
              src={urlFor(value).width(500).fit('max').url()}
              alt={value.alt ?? ''}
              width={500}
              height={350}
              className="w-full h-auto object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-2 text-center text-xs text-slate-400 italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    normal: ({ children }) => (
      <p className="mb-6 leading-[1.85] text-slate-600 text-[1.0625rem]">{children}</p>
    ),
    h1: ({ children }) => (
      <h1 className="text-3xl font-extrabold text-slate-900 mt-12 mb-4 leading-tight">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 pb-3 border-b border-slate-100 leading-tight">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold text-slate-900 mt-10 mb-3 leading-snug">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-semibold text-slate-800 mt-8 mb-2">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-brand-400 pl-6 pr-4 py-1 my-8 bg-brand-50 rounded-r-xl text-slate-600 italic text-[1.0625rem] leading-relaxed">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-6 pl-6 space-y-2 text-slate-600 text-[1.0625rem]" style={{ listStyleType: 'disc' }}>
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-6 pl-6 space-y-2 text-slate-600 text-[1.0625rem]" style={{ listStyleType: 'decimal' }}>
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="leading-[1.75] pl-1">{children}</li>
    ),
    number: ({ children }) => (
      <li className="leading-[1.75] pl-1">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-slate-800">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-slate-100 text-brand-600 px-1.5 py-0.5 rounded font-mono text-[0.875em]">{children}</code>
    ),
    link: ({ value, children }) => (
      <a href={value?.href} className="text-brand-600 underline underline-offset-2 hover:text-brand-800 transition-colors">
        {children}
      </a>
    ),
  },
};

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <>
      <Header />
      <main>
        {/* ── Hero ─────────────────────────────────────── */}
        <section className="hero-gradient pt-28 md:pt-36 pb-14 md:pb-20 px-4 sm:px-6 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-10 w-72 h-72 rounded-full bg-brand-400 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-brand-800 blur-3xl" />
          </div>
          <div className="max-w-3xl mx-auto relative">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-blue-200 hover:text-white text-sm mb-8 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to Insights
            </Link>

            {/* Category pills */}
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-5 items-center">
                {post.categories.filter((cat) => cat?.slug?.current).map((cat) => (
                  <Link
                    key={cat._id}
                    href={`/insights?category=${cat.slug.current}`}
                    className="px-3 py-1 rounded-full bg-white/15 border border-white/30 text-white text-xs font-semibold tracking-wide hover:bg-white/25 transition-colors"
                  >
                    {cat.title}
                  </Link>
                ))}
              </div>
            )}

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-8">
              {post.title}
            </h1>

            {/* Author / meta bar */}
            <div className="flex items-center gap-4 pt-6 border-t border-white/20">
              {post.author?.image?.asset ? (
                <Image
                  src={urlFor(post.author.image).width(80).height(80).fit('crop').url()}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="rounded-full ring-2 ring-white/30 object-cover shrink-0"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              )}
              <div className="flex flex-col gap-0.5">
                {post.author?.name && (
                  <span className="text-white font-semibold text-sm leading-none">
                    {post.author.name}
                  </span>
                )}
                <div className="flex items-center gap-3 text-blue-200 text-xs">
                  {post.publishedAt && (
                    <span>{formatDate(post.publishedAt)}</span>
                  )}
                  {post.readingTime && (
                    <>
                      <span className="opacity-40">·</span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {post.readingTime}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ── Body ─────────────────────────────────────── */}
        <section className="px-4 sm:px-6 bg-white">
          <div className={`max-w-3xl mx-auto ${post.mainImage?.asset ? 'pt-12' : 'pt-16'} pb-20`}>
            {post.body && (
              <div className="after:content-[''] after:block after:clear-both">
                <PortableText
                  value={post.body as Parameters<typeof PortableText>[0]['value']}
                  components={ptComponents}
                />
              </div>
            )}

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-14 pt-10 border-t border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Tagged</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.filter((tag) => tag?.slug?.current).map((tag) => (
                    <Link
                      key={tag._id}
                      href={`/insights?tag=${tag.slug.current}`}
                      className="px-4 py-1.5 rounded-full bg-brand-600 text-white text-xs font-semibold tracking-wide shadow-sm shadow-brand-600/30 hover:bg-brand-700 transition-colors"
                    >
                      {tag.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* ── Back Link ──────────────────────────── */}
            <div className="mt-12">
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-800 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                Back to all Insights
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
