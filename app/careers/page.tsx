import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import JobListings from './JobListings';
import { client } from '../../sanity/lib/client';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | Main Street Tech',
  description:
    'Join the Main Street Tech team. We\'re always looking for senior practitioners who want to do meaningful work with great clients.',
  openGraph: {
    title: 'Careers | Main Street Tech',
    description:
      'Join the Main Street Tech team. We\'re always looking for senior practitioners who want to do meaningful work with great clients.',
    url: 'https://www.mainstreettech.com/about/careers',
  },
  twitter: {
    title: 'Careers | Main Street Tech',
    description:
      'Join the Main Street Tech team. We\'re always looking for senior practitioners who want to do meaningful work with great clients.',
  },
};

async function getJobs() {
  return client.fetch(
    `*[_type == "job" && isActive == true] | order(postedAt desc) {
      _id,
      title,
      slug,
      department,
      location,
      employmentType,
      summary,
      description,
      requirements,
      postedAt
    }`
  );
}

export default async function CareersPage() {
  const jobs = await getJobs();

  return (
    <>
      <Header />
      <main>
        {/* ── Page Hero ─────────────────────────────────── */}
        <PageHero
          serviceName="Careers"
          headline="Build something."
          headlineAccent="Do it right."
          description="We hire senior practitioners who take pride in their craft. No politics, no handoffs — just meaningful work with clients who value expertise."
          backgroundImage="/images/page-hero-backgrounds/about-bg.png"
          breadcrumbParent={{ label: 'About', href: '/about' }}
          primaryButton={{ label: 'See Open Roles', href: '#open-roles' }}
          secondaryButton={{ label: 'About Our Team', href: '/about' }}
        />

        {/* ── Why Work Here ──────────────────────────────── */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">Why Main Street Tech</span>
              <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-4">A different kind of firm</h2>
              <p className="text-slate-500 text-lg">
                We built the company we always wanted to work for — one where senior people do senior work and everyone has a real stake in client success.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Senior work, always',
                  desc: 'You were hired for your expertise. We keep it that way — no bait-and-switch, no junior handoffs.',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />,
                },
                {
                  title: 'US-based team',
                  desc: 'Everyone on our team works in your time zone. Real collaboration, zero timezone friction.',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />,
                },
                {
                  title: 'Clients who value expertise',
                  desc: 'We work with organizations that respect their technology partners. Expect to be heard, not just tasked.',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
                },
                {
                  title: 'Flexible engagements',
                  desc: 'Our work spans project-based, managed services, and staff augmentation — so there is always something interesting on the horizon.',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />,
                },
                {
                  title: 'Transparent culture',
                  desc: 'No hidden politics, no opaque incentives. We tell you how the business works and how your role fits.',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />,
                },
                {
                  title: 'Real impact',
                  desc: 'The systems you build and support are critical to how our clients operate. Your work matters — and you will see it.',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />,
                },
              ].map(({ title, desc, icon }) => (
                <div key={title} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-brand-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      {icon}
                    </svg>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1.5">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── Open Roles ─────────────────────────────────── */}
        <section id="open-roles" className="py-20 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">We&apos;re Hiring</span>
              <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-3">Open Roles</h2>
              <p className="text-slate-500">
                Click any listing to see the full description and apply directly.
              </p>
            </div>

            <JobListings jobs={jobs} />
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────── */}
        <section className="py-20 px-6 hero-gradient text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-5">Don&apos;t see the right role?</h2>
            <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
              We&apos;re always interested in connecting with great people. Send us a note and tell us what you do best.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-700 font-bold px-10 py-4 rounded-xl hover:bg-brand-50 transition-colors text-base shadow-xl"
            >
              Get in Touch
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
