import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageHero from '../../components/PageHero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IT Advisory Services | Main Street Tech',
  description:
    'Enterprise IT advisory services tailored to mid-to-large enterprises — from strategy and planning to fractional CIO, digital transformation, and staff augmentation.',
  openGraph: {
    title: 'IT Advisory Services | Main Street Tech',
    description:
      'Enterprise IT advisory services tailored to mid-to-large enterprises — from strategy and planning to fractional CIO, digital transformation, and staff augmentation.',
    url: 'https://www.mainstreettech.com/services/advisory',
    images: [{ url: '/images/default-og.png' }],
  },
  twitter: {
    title: 'IT Advisory Services | Main Street Tech',
    description:
      'Enterprise IT advisory services tailored to mid-to-large enterprises — from strategy and planning to fractional CIO, digital transformation, and staff augmentation.',
  },
};

function ArrowIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-brand-600 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

const offerings = [
  {
    title: 'Enterprise IT Advisory Services',
    desc: 'We develop long-term partnerships with business and IT leaders to help implement strategies that provide value back to the business. Whether your organization is considering a software selection, migrating to a cloud environment, or modernizing critical business applications — Main Street is here to help prepare you for what\'s next.',
    features: [
      'Software selection and evaluation',
      'Cloud environment planning',
      'Business application modernization',
      'Long-term IT partnership',
    ],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    ),
  },
  {
    title: 'IT Strategy Adoption',
    desc: 'Successful strategy adoption hinges on consistent training and employee engagement. Our IT consulting team works with IT leaders to develop programs that ensure successful strategy implementation across your organization.',
    features: [
      'Strategy implementation programs',
      'Employee engagement planning',
      'Training and change management',
      'Adoption measurement and reporting',
    ],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    ),
  },
  {
    title: 'Fractional CIO',
    desc: 'For companies seeking executive-level IT leadership, our CIO services provide strategic guidance to drive IT initiatives and align them with business goals. Our experienced CIOs offer insight into emerging technologies, risk management, and cost optimization strategies.',
    features: [
      'Executive IT leadership on demand',
      'Emerging technology guidance',
      'IT risk management',
      'Cost optimization strategies',
    ],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    ),
  },
  {
    title: 'Digital Transformation',
    desc: 'Staying up to date with technology trends is essential for IT organizations to fuel their business in an ever-changing climate. We help businesses transform and evolve quickly to seize the opportunities new technologies create.',
    features: [
      'Technology trend assessment',
      'Transformation roadmapping',
      'New technology enablement',
      'Business evolution planning',
    ],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    ),
  },
  {
    title: 'Staff Augmentation',
    desc: 'Our IT staff augmentation services provide highly skilled IT professionals to fill gaps in your team. Whether you need project-based support or ongoing expertise, we can supplement your internal resources to ensure you meet deadlines and project goals efficiently.',
    features: [
      'Project-based IT staffing',
      'Ongoing expertise support',
      'Deadline and goal alignment',
      'Seamless team integration',
    ],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    ),
  },
  {
    title: 'IT Assessments',
    desc: 'A clear-eyed view of your current environment is the foundation for making good technology decisions. We assess your IT infrastructure, processes, and capabilities — then deliver actionable recommendations grounded in what your organization actually needs.',
    features: [
      'Infrastructure and architecture review',
      'Process and capability assessment',
      'Risk and gap identification',
      'Prioritized recommendations',
    ],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    ),
  },
];

const whyReasons = [
  {
    number: '01',
    title: 'Executive Level Advisors',
    desc: 'Our advisors bring C-suite and director-level experience from real enterprise environments. You get practitioners who have owned IT strategy — not analysts delivering slide decks.',
  },
  {
    number: '02',
    title: 'Flexible IT Strategy Solutions',
    desc: 'Whether you need a focused engagement or a long-term advisory partner, we structure our services to fit your timeline, budget, and business objectives.',
  },
  {
    number: '03',
    title: 'Enterprise IT Expertise',
    desc: 'Our team has deep experience across complex enterprise environments — spanning infrastructure, applications, data, cloud, and security.',
  },
  {
    number: '04',
    title: 'National Presence',
    desc: 'We serve enterprise clients across the US with a US-based team. Same time zones, direct communication, no handoff delays.',
  },
];

export default function AdvisoryServicesPage() {
  return (
    <>
      <Header />
      <main>

        {/* ── Page Hero ─────────────────────────────────── */}
        <PageHero
          serviceName="IT Advisory"
          headline="Expert guidance to propel you"
          headlineAccent="to what's next."
          description="Helping IT executives develop and implement strategies that drive value back to their business. We serve as a trusted partner from strategy through execution."
          primaryButton={{ label: 'Talk to a Consultant', href: '/contact' }}
          backgroundImage="/images/page-hero-backgrounds/advisory-bg.png"
        />

        {/* ── Divider ───────────────────────────────────── */}
        <div className="section-divider" />

        {/* ── Intro ─────────────────────────────────────── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">What We Do</span>
              <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-6">
                Enterprise IT advisory services built for mid-to-large organizations
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-6">
                At Main Street Technical Services we provide enterprise IT advisory services tailored to mid-to-large enterprises. Our comprehensive services encompass everything from strategy and planning to staffing support and leadership.
              </p>
              <p className="text-slate-500 text-lg leading-relaxed">
                Our experienced team works as an extension of your organization, providing guidance and solutions that empower your IT department to achieve its full potential.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Strategic IT Planning', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /> },
                { label: 'Fractional CIO', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /> },
                { label: 'Digital Transformation', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /> },
                { label: 'Staff Augmentation', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /> },
                { label: 'IT Assessments', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /> },
                { label: 'Technology Roadmaps', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /> },
              ].map(({ label, icon }) => (
                <div key={label} className="bg-slate-50 border border-slate-100 rounded-xl p-5 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-100 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-brand-700" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                      {icon}
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-slate-800">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Divider ───────────────────────────────────── */}
        <div className="section-divider" />

        {/* ── Service Offerings ─────────────────────────── */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
              <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-4">
                What we deliver
              </h2>
              <p className="text-slate-500 text-lg">
                From long-term strategic partnerships to targeted advisory engagements, our senior team brings executive-level guidance to every project.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offerings.map(({ title, desc, features, icon }) => (
                <div key={title} className="bg-white rounded-2xl p-7 border border-slate-200 card-hover">
                  <div className="w-11 h-11 rounded-xl bg-brand-100 flex items-center justify-center mb-5">
                    <svg className="w-5 h-5 text-brand-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      {icon}
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{desc}</p>
                  <ul className="space-y-2">
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckIcon />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Divider ───────────────────────────────────── */}
        <div className="section-divider" />

        {/* ── Why Main Street ───────────────────────────── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">On-shore, senior level leadership</span>
              <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-4">
                Why work with Main Street?
              </h2>
              <p className="text-slate-500 text-lg">
                Discover why organizations trust Main Street Technical Services for their IT advisory needs.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyReasons.map(({ number, title, desc }) => (
                <div key={number} className="bg-slate-50 rounded-2xl p-7 border border-slate-100">
                  <div className="text-brand-600 font-extrabold text-2xl mb-4">{number}</div>
                  <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Divider ───────────────────────────────────── */}
        <div className="section-divider" />

        {/* ── CTA ───────────────────────────────────────── */}
        <section className="py-20 px-6 hero-gradient text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-5">We are what&apos;s next.</h2>
            <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
              Main Street takes you to what&apos;s next. Talk to one of our senior advisors about your IT challenges and where you want to go.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-700 font-bold px-10 py-4 rounded-xl hover:bg-brand-50 transition-colors text-base shadow-xl"
              >
                Talk to a Consultant
                <ArrowIcon />
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-10 py-4 rounded-xl hover:bg-white/10 transition-colors text-base"
              >
                View All Services
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
