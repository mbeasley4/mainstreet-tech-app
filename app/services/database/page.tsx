import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageHero from '../../components/PageHero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Database Services | Main Street Tech',
  description:
    'Remote DBA support, health assessments, performance monitoring, query tuning, version upgrades, and database development across all major platforms — available 24×7.',
  openGraph: {
    title: 'Database Services | Main Street Tech',
    description:
      'Remote DBA support, health assessments, performance monitoring, query tuning, version upgrades, and database development across all major platforms — available 24×7.',
    url: 'https://www.mainstreettech.com/services/database',
    images: [{ url: '/images/default-og.png' }],
  },
  twitter: {
    title: 'Database Services | Main Street Tech',
    description:
      'Remote DBA support, health assessments, performance monitoring, query tuning, version upgrades, and database development across all major platforms — available 24×7.',
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
    title: 'Remote DBA Support',
    desc: 'Around-the-clock monitoring and support for your databases. Our senior DBAs handle incidents, alerts, and routine maintenance — without requiring you to staff a 24×7 database team internally.',
    features: [
      '24×7 proactive monitoring',
      'Incident response and escalation',
      'Routine maintenance and patching',
      'On-call DBA coverage',
    ],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    title: 'Database Health Assessments',
    desc: 'A structured, senior-led review of your database environment. We identify performance bottlenecks, security gaps, configuration risks, and architectural concerns — then deliver a prioritized action plan.',
    features: [
      'Full configuration review',
      'Security and compliance audit',
      'Performance baseline analysis',
      'Prioritized remediation roadmap',
    ],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    title: 'Performance Monitoring & Tuning',
    desc: 'Slow queries, resource contention, and poor indexing strategies silently drag down your operations. We instrument your environment, identify root causes, and implement lasting improvements.',
    features: [
      'Continuous performance monitoring',
      'Query execution plan analysis',
      'Index strategy optimization',
      'Resource contention resolution',
    ],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    ),
  },
  {
    title: 'Version Upgrades & Migrations',
    desc: 'Falling behind on database versions exposes you to security vulnerabilities and loses you access to performance improvements. We plan and execute upgrades with minimal downtime and zero surprises.',
    features: [
      'Full pre-upgrade compatibility assessment',
      'Rollback planning and testing',
      'Cutover with minimal downtime',
      'Post-upgrade validation and tuning',
    ],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    ),
  },
  {
    title: 'Database Development',
    desc: 'From data model design to stored procedure development, our senior engineers build databases that are performant, maintainable, and aligned with your application requirements.',
    features: [
      'Logical and physical data modeling',
      'Stored procedures, triggers, and views',
      'ETL development and optimization',
      'Schema design and normalization',
    ],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    ),
  },
  {
    title: 'Disaster Recovery & High Availability',
    desc: 'We design, implement, and test DR solutions that hold up when it matters. Replication, failover clustering, backup strategies, and documented runbooks built for your RTO and RPO requirements.',
    features: [
      'RTO/RPO-aligned DR architecture',
      'Replication setup and monitoring',
      'Backup strategy and restoration testing',
      'Failover and HA configuration',
    ],
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </>
    ),
  },
];

const platforms = [
  'MySQL', 'SQL Server', 'PostgreSQL', 'Oracle', 'DB2',
  'Amazon Aurora', 'MariaDB', 'MongoDB', 'Amazon Redshift', 'Snowflake',
];

export default function DatabaseServicesPage() {
  return (
    <>
      <Header />
      <main>

        {/* ── Page Hero ─────────────────────────────────── */}
        <PageHero
          serviceName="Database Services"
          headline="Always-on support for"
          headlineAccent="your most critical data."
          description="Your databases are the foundation everything else runs on. Our senior DBAs monitor, maintain, tune, and evolve your database environment — so your team can focus on the business."
          primaryButton={{ label: 'Talk to a DBA', href: '/contact' }}
          backgroundImage="/images/page-hero-backgrounds/data-bg.png"
        />

        {/* ── Divider ───────────────────────────────────── */}
        <div className="section-divider" />

        {/* ── Service Offerings ─────────────────────────── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">What We Deliver</span>
              <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-4">
                Full-spectrum database management
              </h2>
              <p className="text-slate-500 text-lg">
                From proactive monitoring to complex migrations, every engagement is staffed with senior DBAs who know your platform and care about the outcome.
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
        <section id="platforms" className="py-24 px-6 bg-brand-950 relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-brand-800 opacity-20 blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-brand-400 font-semibold text-sm uppercase tracking-widest">Platform Support</span>
              <h2 className="text-4xl font-extrabold text-white mt-3 mb-4">
                We support the databases you actually run
              </h2>
              <p className="text-brand-300 text-lg">
                Relational, cloud-native, and NoSQL — our team holds deep expertise across all major platforms, so you get skilled help regardless of your stack.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {platforms.map((p) => (
                <span key={p} className="bg-white/5 border border-white/10 text-white font-medium px-5 py-2.5 rounded-full text-sm hover:bg-white/10 transition-colors">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Divider ───────────────────────────────────── */}
        <div className="section-divider" />

        {/* ── Stats / Social Proof ──────────────────────── */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { value: '24×7', label: 'Monitoring & On-Call Coverage' },
                { value: '10+', label: 'Database Platforms Supported' },
                { value: '150+', label: 'Database Clients Served' },
                { value: '<2hr', label: 'Average Incident Response Time' },
              ].map(({ value, label }) => (
                <div key={label} className="bg-brand-50 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-extrabold text-brand-700 mb-1">{value}</div>
                  <div className="text-slate-500 text-sm leading-tight">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────── */}
        <section className="py-20 px-6 hero-gradient text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-5">Ready to stabilize your database environment?</h2>
            <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
              Let&apos;s start with a conversation. We&apos;ll learn your environment, identify your biggest risks, and tell you what a realistic engagement looks like.
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
