import Header from '../components/Header';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Main Street Tech',
  description:
    'Main Street Tech is an enterprise technology firm built on a simple promise: senior experts, no handoffs, and technology decisions made in your best interest.',
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
    <svg className="w-4 h-4 text-brand-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

const values = [
  {
    title: 'Senior talent on every engagement',
    desc: 'Large firms sell you on experienced partners, then hand the work to junior associates. At Main Street Tech, the senior practitioners who scoped your project are the ones delivering it.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    ),
  },
  {
    title: 'Transparent, fixed-scope pricing',
    desc: 'No surprise invoices, no runaway retainers. Every engagement starts with a clear scope, a defined timeline, and a cost you can plan around.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
    ),
  },
  {
    title: 'Vendor-agnostic recommendations',
    desc: "We don't carry quotas for any platform or vendor. Our advice is shaped entirely by what works best for your environment, your team, and your budget.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    ),
  },
  {
    title: 'Direct access to your team',
    desc: 'You can reach the people actually doing the work — not an account manager relay. Questions get answered fast because there are no layers to navigate.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    ),
  },
  {
    title: 'Built for compliance and security',
    desc: 'We work in regulated industries. Our documentation, audit trails, and security standards hold up under scrutiny — so you never have to worry about what we leave behind.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
  },
  {
    title: 'Local team, always',
    desc: 'Our team is based in the US and works in your time zone. When something needs immediate attention, you get the same people — not a rotating offshore shift.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    ),
  },
];

const stats = [
  { value: '200+', label: 'Clients Served' },
  { value: '10+', label: 'Years of Experience' },
  { value: '98%', label: 'Client Retention Rate' },
  { value: '<2hr', label: 'Average Response Time' },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>

        {/* ── Page Hero ─────────────────────────────────── */}
        <section className="hero-gradient pt-36 pb-16 px-6 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-10 w-72 h-72 rounded-full bg-brand-400 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-brand-800 blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto relative">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-medium mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              About Main Street Tech
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
              Enterprise expertise.<br/>
              <span className="text-brand-300">Without the enterprise overhead.</span>
            </h1>
            <p className="text-blue-100 leading-relaxed max-w-2xl">
              Organizations deserve senior technology professionals fully invested in their success — not the cheapest resource or the highest-margin vendor recommendation.
            </p>
          </div>
        </section>

        {/* ── Our Story ─────────────────────────────────── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Visual card */}
            <div className="relative">
              <div className="hero-gradient rounded-3xl p-10 text-white">
                <div className="mb-6">
                  <Logo variant="dark" className="h-12 w-auto" />
                </div>
                <blockquote className="text-blue-100 text-lg leading-relaxed italic mb-6">
                  &ldquo;We started Main Street Tech because we saw too many businesses paying premium consulting rates and getting junior talent. Our clients deserve the real thing — and that&apos;s what we deliver.&rdquo;
                </blockquote>
                <p className="text-white font-semibold">— Main Street Tech Leadership Team</p>
                <div className="mt-8 border-t border-white/20 pt-6 grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-2xl p-4 text-center">
                    <div className="text-3xl font-extrabold">10+</div>
                    <div className="text-blue-200 text-xs mt-1">Years in Business</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4 text-center">
                    <div className="text-3xl font-extrabold">US-Based</div>
                    <div className="text-blue-200 text-xs mt-1">Team, Always</div>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-slate-100">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">5-star rated</div>
                  <div className="text-slate-400 text-xs">on Google Reviews</div>
                </div>
              </div>
            </div>

            {/* Right: Story text */}
            <div>
              <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <p className="text-slate-400 font-medium text-base mt-1">Welcome to Main Street</p>
              <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-3">
                We enable, deliver, and innovate through end-to-end data&nbsp;services.
              </h2>
              <div className="space-y-4 text-slate-500 text-lg leading-relaxed mb-8">
                <p>
                  Whether your business needs 24x7 support for critical systems, better insights from your data, or <a href="/advisory-services" className="text-brand-600 hover:underline">strategic IT planning</a>, Main Street Technical Services offers flexible services to meet your challenges.
                </p>
                <p>
                  Founded by senior practitioners who'd seen too many engagements go wrong, we built a firm where the experts who scope your project are the ones who deliver it — no handoffs, no junior stand-ins, no surprises.
                </p>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[
                  { value: '56', label: 'U.S. Based Employees' },
                  { value: '150+', label: 'Satisfied Customers' },
                  { value: '50', label: 'Supported Platforms' },
                  { value: '20+', label: 'Specialized Technologies' },
                ].map(({ value, label }) => (
                  <div key={label} className="bg-brand-50 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-extrabold text-brand-700">{value}</div>
                    <div className="text-slate-500 text-xs mt-1 leading-tight">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Divider ───────────────────────────────────── */}
        <div className="section-divider" />

        {/* ── History / Timeline ────────────────────────── */}
        <section className="py-24 px-6 bg-brand-950 overflow-hidden relative">
          {/* Background glow blobs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-brand-800 opacity-20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-brand-600 opacity-10 blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto relative">
            {/* Section header */}
            <div className="text-center mb-20">
              <span className="text-brand-400 font-semibold text-sm uppercase tracking-widest">History</span>
              <h2 className="text-5xl font-extrabold text-white mt-3">
                Our <span className="text-brand-300">Story</span>
              </h2>
              <p className="text-brand-300 mt-4 text-lg">25 years of growth, focus, and evolution.</p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Center vertical line */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-linear-to-b from-brand-400 via-brand-500 to-brand-700 hidden md:block" />
              {/* Mobile left line */}
              <div className="absolute left-5 top-0 bottom-0 w-px bg-linear-to-b from-brand-400 via-brand-500 to-brand-700 md:hidden" />

              <div className="space-y-16">
                {[
                  {
                    year: '2000',
                    label: 'Company Founded',
                    heading: 'TPSi Founded',
                    desc: 'TPSi began as a technical staffing company focused on building trusted client relationships.',
                    current: false,
                  },
                  {
                    year: '2006',
                    label: 'Database Specialization',
                    heading: 'Focusing on Database',
                    desc: 'TPSi shifted its focus towards niche database management services, specializing in Oracle support.',
                    current: false,
                  },
                  {
                    year: '2008',
                    label: 'Expanding Capabilities',
                    heading: 'Broader Database Support',
                    desc: 'TPSi expanded its services to include SQL, DBL, MySQL, and Sybase support.',
                    current: false,
                  },
                  {
                    year: '2015',
                    label: 'Evolving into Main Street',
                    heading: 'Rebranding as Main Street DBAs',
                    desc: 'TPSi evolved into Main Street DBAs, adding cloud database support with AWS and Azure.',
                    current: false,
                  },
                  {
                    year: '2019',
                    label: 'Launching APPs',
                    heading: 'Launch of Main Street APPs',
                    desc: 'Main Street expands into enterprise applications and data analytics as Main Street APPs.',
                    current: false,
                  },
                  {
                    year: '2025',
                    label: 'Full-Service Leader',
                    heading: 'Main Street Technical Services',
                    desc: "Main Street DBAs and Main Street APPs unite to form Main Street Technical Services — a full-service data management firm dedicated to empowering clients to discover what's next.",
                    current: true,
                  },
                ].map(({ year, label, heading, desc, current }, i) => {
                  const isRight = i % 2 === 0;
                  return (
                    <div key={year} className="relative flex items-center">

                      {/* ── Desktop alternating layout ── */}
                      {/* Left slot — card when !isRight, ghost year when isRight */}
                      <div className="hidden md:flex w-1/2 pr-12 justify-end items-center">
                        {isRight
                          ? <p className="text-7xl font-extrabold text-white/5 select-none">{year}</p>
                          : (
                            <div className={`w-full max-w-sm rounded-2xl p-6 border ${current ? 'bg-brand-600 border-brand-400 shadow-[0_0_40px_rgba(56,163,247,0.3)]' : 'bg-white/5 border-white/10'} backdrop-blur-sm`}>
                              <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${current ? 'text-brand-200' : 'text-brand-400'}`}>{label}</p>
                              <h3 className="text-xl font-bold text-white mb-2">{heading}</h3>
                              <p className={`text-sm leading-relaxed ${current ? 'text-brand-100' : 'text-brand-300'}`}>{desc}</p>
                              {current && (
                                <div className="mt-4 inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 text-xs font-semibold text-white">
                                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                  Today
                                </div>
                              )}
                            </div>
                          )
                        }
                      </div>

                      {/* Center dot — absolutely centered on the line, pointer-events-none so it never blocks clicks */}
                      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 z-10 pointer-events-none">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-sm ${current ? 'bg-brand-400 text-white shadow-[0_0_20px_rgba(56,163,247,0.6)]' : 'bg-brand-800 text-brand-300 border border-brand-600'}`}>
                          {year.slice(2)}
                        </div>
                      </div>

                      {/* Right slot — card when isRight, ghost year when !isRight */}
                      <div className="hidden md:flex w-1/2 pl-12 justify-start items-center">
                        {isRight
                          ? (
                            <div className={`w-full max-w-sm rounded-2xl p-6 border ${current ? 'bg-brand-600 border-brand-400 shadow-[0_0_40px_rgba(56,163,247,0.3)]' : 'bg-white/5 border-white/10'} backdrop-blur-sm`}>
                              <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${current ? 'text-brand-200' : 'text-brand-400'}`}>{label}</p>
                              <h3 className="text-xl font-bold text-white mb-2">{heading}</h3>
                              <p className={`text-sm leading-relaxed ${current ? 'text-brand-100' : 'text-brand-300'}`}>{desc}</p>
                              {current && (
                                <div className="mt-4 inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 text-xs font-semibold text-white">
                                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                  Today
                                </div>
                              )}
                            </div>
                          )
                          : <p className="text-7xl font-extrabold text-white/5 select-none">{year}</p>
                        }
                      </div>

                      {/* ── Mobile layout ── */}
                      <div className="md:hidden flex items-start gap-5 pl-12 w-full">
                        <div className={`absolute left-0 z-10 w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-xs shrink-0 ${current ? 'bg-brand-400 text-white shadow-[0_0_16px_rgba(56,163,247,0.5)]' : 'bg-brand-800 text-brand-300 border border-brand-600'}`}>
                          {year.slice(2)}
                        </div>
                        <div className={`w-full rounded-2xl p-5 border ${current ? 'bg-brand-600 border-brand-400 shadow-[0_0_30px_rgba(56,163,247,0.25)]' : 'bg-white/5 border-white/10'}`}>
                          <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${current ? 'text-brand-200' : 'text-brand-400'}`}>{label}</p>
                          <h3 className="text-lg font-bold text-white mb-1.5">{heading}</h3>
                          <p className={`text-sm leading-relaxed ${current ? 'text-brand-100' : 'text-brand-300'}`}>{desc}</p>
                          {current && (
                            <div className="mt-3 inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 text-xs font-semibold text-white">
                              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                              Today
                            </div>
                          )}
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── Divider ───────────────────────────────────── */}
        <div className="section-divider" />

        {/* ── Our Values ────────────────────────────────── */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">What We Stand For</span>
              <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-4">
                The principles behind every engagement
              </h2>
              <p className="text-slate-500 text-lg">
                These aren&apos;t marketing talking points. They&apos;re the commitments our team makes — and is held to — on every project we take on.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map(({ title, desc, icon }) => (
                <div key={title} className="bg-white rounded-2xl p-7 border border-slate-100 card-hover">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-5">
                    <svg className="w-6 h-6 text-brand-600" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                      {icon}
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Divider ───────────────────────────────────── */}
        <div className="section-divider" />

        {/* ── What We Do ────────────────────────────────── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">Our Capabilities</span>
              <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-4">
                The critical infrastructure layer your organization depends on
              </h2>
              <p className="text-slate-500 text-lg">
                From database reliability to AI enablement, we cover the full technology stack that enterprise operations run on.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  label: 'Database Services',
                  desc: 'Remote DBA, health assessments, performance monitoring, query tuning, version upgrades, and database development across all major platforms.',
                  icon: <><ellipse cx="12" cy="5" rx="9" ry="3" /><path strokeLinecap="round" strokeLinejoin="round" d="M3 5v4c0 1.657 4.03 3 9 3s9-1.343 9-3V5M3 9v4c0 1.657 4.03 3 9 3s9-1.343 9-3V9M3 13v4c0 1.657 4.03 3 9 3s9-1.343 9-3v-4" /></>,
                },
                {
                  label: 'Enterprise Applications',
                  desc: 'TAMS, FAMS, cloud strategy, system integrations, and version upgrades for JD Edwards, PeopleSoft, Oracle E-Business Suite, and Nextworld.',
                  icon: <><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4" /></>,
                },
                {
                  label: 'Data & Analytics',
                  desc: 'Data strategy, governance, warehousing, visualization, and integration — from raw architecture to Power BI and Tableau dashboards your team can act on.',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
                },
                {
                  label: 'Artificial Intelligence',
                  desc: 'Machine learning implementations and low/no-code AI solutions that integrate with your existing data infrastructure and business processes.',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />,
                },
                {
                  label: 'Hosting',
                  desc: 'Enterprise hosting, IaaS, disaster recovery, hybrid cloud architecture, and scalable infrastructure designed for compliance and high availability.',
                  icon: <><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></>,
                },
                {
                  label: 'IT Advisory',
                  desc: 'Strategic IT planning, fractional CIO services, digital transformation roadmaps, and staff augmentation for organizations navigating major technology decisions.',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />,
                },
              ].map(({ label, desc, icon }) => (
                <div key={label} className="flex flex-col gap-4 p-6 rounded-2xl border border-slate-100 bg-slate-50 card-hover">
                  <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      {icon}
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{label}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Divider ───────────────────────────────────── */}
        <div className="section-divider" />

        {/* ── Leadership Team ───────────────────────────── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">Leadership</span>
              <h2 className="text-4xl font-bold text-slate-900 mt-2">Meet The Team</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: 'Matt Bender',
                  title: 'Founder and CEO',
                  img: 'https://static.wixstatic.com/media/d15ec0_46156d5d0b0d4befb54eaeee41dc9452~mv2.png/v1/fill/w_612,h_612,al_c,q_85,enc_avif,quality_auto/profile-pic%20(1).png',
                  position: '50% 50%',
                },
                {
                  name: 'Matt Batchler',
                  title: 'Chief Technology Officer',
                  img: 'https://static.wixstatic.com/media/d15ec0_95a99cc6957f403ea2f9b981c5524dca~mv2.jpg/v1/fill/w_800,h_800,fp_0.56_0.29,q_85,enc_avif,quality_auto/1724161275673_edited.jpg',
                  position: '56% 29%',
                },
                {
                  name: 'Ashlie Stapleton',
                  title: 'Chief Administrative Officer',
                  img: 'https://static.wixstatic.com/media/d15ec0_1f997d9ae8f84649a434051a7f3a14a7~mv2.jpg/v1/fill/w_958,h_958,al_c,q_85,enc_avif,quality_auto/Ashlie_edited_edited_edited.jpg',
                  position: '50% 50%',
                },
                {
                  name: 'Brian Green',
                  title: 'Director of Finance',
                  img: 'https://static.wixstatic.com/media/d15ec0_c89de7d6c8564a69bf3bed0fa940c7ec~mv2.jpg/v1/fill/w_476,h_476,fp_0.44_0.50,q_85,enc_avif,quality_auto/Brian_edited_edited.jpg',
                  position: '44% 50%',
                },
              ].map(({ name, title, img, position }) => (
                <div key={name} className="flex flex-col items-center text-center group">
                  <div className="w-full aspect-square rounded-2xl overflow-hidden mb-5 bg-slate-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img}
                      alt={name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ objectPosition: position }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{name}</h3>
                  <p className="text-brand-600 font-medium text-sm mt-1">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────── */}
        <section className="py-20 px-6 hero-gradient text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-5">Ready to meet the team?</h2>
            <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
              Let&apos;s start a conversation. We&apos;ll listen to where you are, where you want to go, and tell you honestly whether we&apos;re the right fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-700 font-bold px-10 py-4 rounded-xl hover:bg-brand-50 transition-colors text-base shadow-xl"
              >
                Get in Touch
                <ArrowIcon />
              </a>
              <a
                href="/#services"
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
