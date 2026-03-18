import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Main Street Tech',
  description:
    'From database management and enterprise applications to data analytics, hosting, and IT advisory — Main Street Tech delivers senior-level expertise across every layer of your technology stack.',
  openGraph: {
    title: 'Services | Main Street Tech',
    description:
      'From database management and enterprise applications to data analytics, hosting, and IT advisory — Main Street Tech delivers senior-level expertise across every layer of your technology stack.',
    url: 'https://www.mainstreettech.com/services',
    images: [{ url: '/images/default-og.png' }],
  },
  twitter: {
    title: 'Services | Main Street Tech',
    description:
      'From database management and enterprise applications to data analytics, hosting, and IT advisory — Main Street Tech delivers senior-level expertise across every layer of your technology stack.',
  },
};

function ArrowIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

const services = [
  {
    href: '/services/database',
    label: 'Database Services',
    tagline: 'Always-on support for your most critical data assets.',
    desc: 'Remote DBA, health assessments, performance monitoring, query tuning, version upgrades, and database development across all major relational and cloud-native platforms.',
    features: ['Remote DBA (24×7)', 'Health Assessments', 'Performance Tuning', 'Version Upgrades', 'Database Development', 'Migrations & DR'],
    icon: (
      <>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5v4c0 1.657 4.03 3 9 3s9-1.343 9-3V5M3 9v4c0 1.657 4.03 3 9 3s9-1.343 9-3V9M3 13v4c0 1.657 4.03 3 9 3s9-1.343 9-3v-4" />
      </>
    ),
  },
  {
    href: '/services/application',
    label: 'Enterprise Applications',
    tagline: 'Keep your ERP and business platforms running at peak.',
    desc: 'TAMS, FAMS, cloud strategy, system integrations, and version upgrades for JD Edwards, PeopleSoft, Oracle E-Business Suite, and Nextworld.',
    features: ['TAMS & FAMS', 'JD Edwards', 'PeopleSoft', 'Oracle E-Business Suite', 'Nextworld', 'Cloud Strategy'],
    icon: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4" />
      </>
    ),
  },
  {
    href: '/services/data-analytics',
    label: 'Data & Analytics',
    tagline: 'Turn raw data into decisions your team can act on.',
    desc: 'Data strategy, governance, warehousing, visualization, and integration — from raw architecture to Power BI and Tableau dashboards your leadership team depends on.',
    features: ['Data Strategy', 'Governance', 'Data Warehousing', 'Power BI & Tableau', 'Data Integration', 'AI/ML Enablement'],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    ),
  },
  {
    href: '/services/hosting',
    label: 'Hosting',
    tagline: 'Reliable infrastructure built for compliance and scale.',
    desc: 'Enterprise hosting, IaaS, disaster recovery, hybrid cloud architecture, and scalable infrastructure designed for high availability and regulated environments.',
    features: ['Enterprise Hosting', 'IaaS', 'Disaster Recovery', 'Hybrid Cloud', 'AWS / Azure / GCP / OCI', 'Compliance-Ready'],
    icon: (
      <>
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </>
    ),
  },
  {
    href: '/services/advisory',
    label: 'IT Advisory',
    tagline: 'Strategic guidance from practitioners who&apos;ve done it.',
    desc: 'Strategic IT planning, fractional CIO services, digital transformation roadmaps, and staff augmentation for organizations navigating major technology decisions.',
    features: ['Strategic IT Planning', 'Fractional CIO', 'Digital Transformation', 'Staff Augmentation', 'IT Assessments', 'Technology Roadmaps'],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>

        {/* ── Page Hero ─────────────────────────────────── */}
        <PageHero
          serviceName="Our Services"
          headline="Enterprise services."
          headlineAccent="Practical delivery."
          description="From database reliability to strategic IT planning, we cover the full technology stack that enterprise operations depend on — with senior practitioners at every level."
          backgroundImage="/images/page-hero-backgrounds/services-bg.png"
          showBreadcrumb={false}
          primaryButton={{ label: 'Talk to an Expert', href: '/contact' }}
          secondaryButton={{ label: 'About Our Team', href: '/about' }}
        />

        {/* ── Divider ───────────────────────────────────── */}
        <div className="section-divider" />

        {/* ── Service Cards ─────────────────────────────── */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">What We Do</span>
              <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-4">
                Five practice areas. One accountable team.
              </h2>
              <p className="text-slate-500 text-lg">
                Whether you need ongoing managed support or a targeted engagement, we staff every project with senior experts who are accountable from kickoff to delivery.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(({ href, label, tagline, desc, features, icon }) => (
                <a
                  key={label}
                  href={href}
                  className="group bg-white rounded-2xl p-8 border border-slate-200 card-hover flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-5 group-hover:bg-brand-100 transition-colors">
                    <svg className="w-6 h-6 text-brand-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      {icon}
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{label}</h3>
                  <p className="text-brand-600 font-medium text-sm mb-3" dangerouslySetInnerHTML={{ __html: tagline }} />
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{desc}</p>
                  <div className="flex flex-wrap gap-2 mt-auto mb-5">
                    {features.map((f) => (
                      <span key={f} className="bg-brand-50 text-brand-700 text-xs font-medium px-2.5 py-1 rounded-full">
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-brand-600 font-semibold text-sm group-hover:gap-2.5 transition-all">
                    Learn more about {label} <ArrowIcon className="w-4 h-4" />
                  </div>
                </a>
              ))}

              {/* Standout "Not sure?" card */}
              <div className="hero-gradient rounded-2xl p-8 flex flex-col justify-between text-white">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-5">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Not sure where to start?</h3>
                  <p className="text-blue-100 text-sm leading-relaxed mb-6">
                    Tell us what&apos;s keeping you up at night. We&apos;ll listen, ask the right questions, and point you toward the engagement that actually makes sense for your situation.
                  </p>
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-brand-700 font-bold px-6 py-3 rounded-xl hover:bg-brand-50 transition-colors text-sm"
                >
                  Talk to an Expert
                  <ArrowIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Divider ───────────────────────────────────── */}
        <div className="section-divider" />

        {/* ── Why Main Street ──────────────────────────── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">Why Main Street Tech</span>
              <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-4">
                The same senior team from scoping through delivery
              </h2>
              <p className="text-slate-500 text-lg">
                Large firms hand work off to junior staff after the sales meeting. We don&apos;t. The experts who assess your environment are the ones who fix it.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Senior talent on every project',
                  desc: 'No bait-and-switch. Senior practitioners scope and deliver every engagement.',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />,
                },
                {
                  title: 'Fixed-scope pricing',
                  desc: 'Every engagement starts with a defined scope, timeline, and cost you can plan around.',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />,
                },
                {
                  title: 'Vendor-agnostic advice',
                  desc: "We carry no vendor quotas. Recommendations are based entirely on what&apos;s best for your environment.",
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />,
                },
                {
                  title: 'US-based team, always',
                  desc: 'Our team works in your time zone. No rotating offshore shifts or account-manager relays.',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />,
                },
              ].map(({ title, desc, icon }) => (
                <div key={title} className="bg-slate-50 rounded-2xl p-7 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-brand-700" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                      {icon}
                    </svg>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: desc }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────── */}
        <section className="py-20 px-6 hero-gradient text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-5">Ready to get started?</h2>
            <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
              Tell us about your environment and your goals. We&apos;ll put together a clear scope and cost — no obligation, no sales pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-700 font-bold px-10 py-4 rounded-xl hover:bg-brand-50 transition-colors text-base shadow-xl"
              >
                Get in Touch
                <ArrowIcon />
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-10 py-4 rounded-xl hover:bg-white/10 transition-colors text-base"
              >
                About Our Team
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
