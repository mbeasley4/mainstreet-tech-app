import Header from '../../components/Header';
import Footer from '../../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Artificial Intelligence Services | Main Street Tech',
  description:
    'AI strategy, model integration, and intelligent automation — practical approaches to adopting AI that create real business value without unnecessary complexity.',
  openGraph: {
    title: 'Artificial Intelligence Services | Main Street Tech',
    description:
      'AI strategy, model integration, and intelligent automation — practical approaches to adopting AI that create real business value without unnecessary complexity.',
    url: 'https://www.mainstreettech.com/services/artificial-intelligence',
  },
  twitter: {
    title: 'Artificial Intelligence Services | Main Street Tech',
    description:
      'AI strategy, model integration, and intelligent automation — practical approaches to adopting AI that create real business value without unnecessary complexity.',
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
    title: 'Technology Application Managed Services (TAMS)',
    desc: 'Ongoing technical support for your enterprise application infrastructure — including server administration, database layers, patches, performance, and integrations. We keep the technology stack healthy so your team can stay focused on business operations.',
    features: [
      'Infrastructure and server administration',
      'Database layer support and tuning',
      'Patch management and version currency',
      'Integration monitoring and maintenance',
    ],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12H3m18 0h-2M5.636 5.636L4.222 4.222m15.556 15.556l-1.414-1.414M12 5V3m0 18v-2m6.364-13.364l-1.414 1.414M5.636 18.364l-1.414 1.414M12 8a4 4 0 100 8 4 4 0 000-8z" />
    ),
  },
  {
    title: 'Functional Application Managed Services (FAMS)',
    desc: "Application-level support for end users and business teams. Our functional consultants resolve issues, support configuration changes, and act as an extension of your internal team — without the overhead of full-time ERP headcount.",
    features: [
      'Tier 2 and Tier 3 functional support',
      'Configuration and setup changes',
      'Business process troubleshooting',
      'End-user training support',
    ],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    ),
  },
  {
    title: 'Cloud Strategy & Migration',
    desc: 'Moving your ERP or enterprise applications to the cloud requires careful planning. We assess your current environment, design a migration approach, and execute the transition with minimal disruption to your operations.',
    features: [
      'Cloud readiness assessment',
      'Architecture design (AWS, Azure, OCI)',
      'Lift-and-shift and re-platform planning',
      'Post-migration optimization',
    ],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    ),
  },
  {
    title: 'System Integrations',
    desc: 'Your enterprise applications rarely operate in isolation. We design and build integrations between your ERP, databases, third-party systems, and cloud services — using proven patterns that are maintainable and resilient.',
    features: [
      'ERP-to-ERP and ERP-to-SaaS integrations',
      'API design and development',
      'Middleware configuration (Boomi, MuleSoft)',
      'Integration monitoring and support',
    ],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    ),
  },
  {
    title: 'Version Upgrades',
    desc: 'Staying current on your ERP platform protects you from security vulnerabilities, keeps you eligible for vendor support, and unlocks new functionality. We plan, test, and execute upgrades with a structured approach that minimizes risk.',
    features: [
      'Pre-upgrade fit-gap analysis',
      'Test planning and UAT support',
      'Cutover coordination and rollback planning',
      'Post-upgrade stabilization support',
    ],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    ),
  },
  {
    title: 'Implementation & Deployment',
    desc: 'Deploying a new enterprise application or module is a high-stakes project. Our senior consultants lead implementations from requirements through go-live — with the experience to anticipate problems before they become costly.',
    features: [
      'Requirements gathering and scoping',
      'Configuration and data migration',
      'User acceptance testing coordination',
      'Go-live support and hypercare',
    ],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    ),
  },
];

const platforms = [
  { name: 'JD Edwards', desc: 'EnterpriseOne and World' },
  { name: 'PeopleSoft', desc: 'HCM, FSCM, and Campus Solutions' },
  { name: 'Oracle E-Business Suite', desc: 'Full suite including Financials, SCM, and HCM' },
  { name: 'Nextworld', desc: 'Modern cloud ERP platform' },
];

export default function ApplicationServicesPage() {
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
            <div className="flex items-center gap-2 mb-4">
              <a href="/services" className="text-blue-200 hover:text-white text-sm transition-colors">Services</a>
              <span className="text-white/30 text-sm">/</span>
              <span className="text-sm text-white/70">Enterprise Applications</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-medium mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Enterprise Applications
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
              Keep your ERP platforms<br />
              <span className="text-brand-300">running at peak performance.</span>
            </h1>
            <p className="text-blue-100 leading-relaxed max-w-2xl mb-8">
              Enterprise applications are the backbone of your business operations. Our senior consultants support, optimize, and evolve your platforms — without the overhead of a large system integrator.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 bg-white text-brand-700 font-bold px-8 py-3.5 rounded-xl hover:bg-brand-50 transition-colors text-sm shadow-lg"
              >
                Talk to a Consultant
                <ArrowIcon className="w-4 h-4" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-colors text-sm"
              >
                All Services
              </a>
            </div>
          </div>
        </section>

        {/* ── Divider ───────────────────────────────────── */}
        <div className="section-divider" />

        {/* ── Service Offerings ─────────────────────────── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">What We Deliver</span>
              <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-4">
                End-to-end enterprise application services
              </h2>
              <p className="text-slate-500 text-lg">
                Whether you need ongoing managed support or a targeted project engagement, our consultants bring deep platform expertise to every task.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offerings.map(({ title, desc, features, icon }) => (
                <div key={title} className="bg-slate-50 rounded-2xl p-7 border border-slate-100 card-hover">
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

        {/* ── Platforms ─────────────────────────────────── */}
        <section className="py-24 px-6 bg-brand-950 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-brand-700 opacity-15 blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-brand-400 font-semibold text-sm uppercase tracking-widest">Supported Platforms</span>
              <h2 className="text-4xl font-extrabold text-white mt-3 mb-4">
                Deep expertise in the platforms you depend on
              </h2>
              <p className="text-brand-300 text-lg">
                Our team holds certifications and years of hands-on experience across all major Oracle-based enterprise platforms.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {platforms.map(({ name, desc }) => (
                <div key={name} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-brand-600/30 flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-brand-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-white mb-1">{name}</h3>
                  <p className="text-brand-300 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Divider ───────────────────────────────────── */}
        <div className="section-divider" />

        {/* ── Differentiators ───────────────────────────── */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">Why Main Street Tech</span>
              <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-6">
                The difference between us and a large SI
              </h2>
              <div className="space-y-5">
                {[
                  {
                    title: 'No junior hand-offs',
                    desc: 'Large system integrators sell you on experienced partners, then staff your project with junior associates. With us, the senior consultants who scoped your project deliver it.',
                  },
                  {
                    title: 'Right-sized engagements',
                    desc: "You don't need a 50-person program team for a version upgrade. We scope what's needed, staff accordingly, and keep costs predictable.",
                  },
                  {
                    title: 'Vendor-agnostic advice',
                    desc: "We don't carry Oracle or any other vendor quota. Our recommendations are shaped by what's right for your business — not what maximizes our referral fees.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-brand-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-gradient rounded-3xl p-10 text-white">
              <h3 className="text-2xl font-bold mb-4">What a typical engagement looks like</h3>
              <div className="space-y-6">
                {[
                  { step: '01', label: 'Discovery call', desc: 'We listen to your challenges, ask the right questions, and identify what type of engagement makes sense.' },
                  { step: '02', label: 'Scoping & proposal', desc: 'We document a clear scope, timeline, and fixed-cost proposal — no surprise invoices.' },
                  { step: '03', label: 'Senior team assigned', desc: 'The same senior consultants who scoped the work lead the delivery.' },
                  { step: '04', label: 'Delivery & support', desc: "We deliver the engagement, document everything, and stay available for questions once you're live." },
                ].map(({ step, label, desc }) => (
                  <div key={step} className="flex gap-4">
                    <div className="text-brand-300 font-extrabold text-lg w-8 shrink-0">{step}</div>
                    <div>
                      <div className="font-semibold text-white mb-0.5">{label}</div>
                      <div className="text-blue-200 text-sm leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────── */}
        <section className="py-20 px-6 hero-gradient text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-5">Let&apos;s talk about your applications.</h2>
            <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
              Whether you&apos;re dealing with a support backlog, planning an upgrade, or evaluating a cloud move — we can help you think it through.
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
