import Header from '../../components/Header';
import Footer from '../../components/Footer';
import type { Metadata } from 'next'; 

export const metadata: Metadata = {
  title: 'Data & Analytics Services | Main Street Tech',
  description:
    'Data strategy, governance, warehousing, visualization, and integration — from raw architecture to Power BI and Tableau dashboards your team can act on.',
  openGraph: {
    title: 'Data & Analytics Services | Main Street Tech',
    description:
      'Data strategy, governance, warehousing, visualization, and integration — from raw architecture to Power BI and Tableau dashboards your team can act on.',
    url: 'https://www.mainstreettech.com/services/data-analytics',
  },
  twitter: {
    title: 'Data & Analytics Services | Main Street Tech',
    description:
      'Data strategy, governance, warehousing, visualization, and integration — from raw architecture to Power BI and Tableau dashboards your team can act on.',
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
    title: 'Data Strategy & Roadmap',
    desc: 'Before you invest in tools and platforms, you need a clear strategy. We assess your current data landscape, align on business objectives, and deliver a prioritized roadmap that ensures every data investment is purposeful.',
    features: [
      'Current-state data assessment',
      'Business objective alignment',
      'Technology selection guidance',
      'Prioritized investment roadmap',
    ],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    ),
  },
  {
    title: 'Data Governance',
    desc: "Data governance is what turns raw data into a trusted asset. We establish policies, ownership models, and quality standards so your organization can confidently use data to make decisions — and hold up to regulatory scrutiny.",
    features: [
      'Data ownership and stewardship frameworks',
      'Data quality standards and monitoring',
      'Metadata management',
      'Compliance and regulatory alignment',
    ],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
  },
  {
    title: 'Data Warehousing & Architecture',
    desc: 'A well-designed data warehouse is the foundation for reliable reporting and analytics. We architect and build modern data platforms — on-premises or cloud — that scale with your organization.',
    features: [
      'Dimensional and normalized modeling',
      'Cloud data warehouse (Snowflake, Redshift)',
      'ETL/ELT pipeline design and development',
      'Lakehouse and hybrid architectures',
    ],
    icon: (
      <>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5v4c0 1.657 4.03 3 9 3s9-1.343 9-3V5M3 9v4c0 1.657 4.03 3 9 3s9-1.343 9-3V9M3 13v4c0 1.657 4.03 3 9 3s9-1.343 9-3v-4" />
      </>
    ),
  },
  {
    title: 'Business Intelligence & Visualization',
    desc: 'Dashboards that no one uses are wasted effort. We build BI solutions around the decisions your teams actually need to make — designing reports and visualizations that drive action, not just display numbers.',
    features: [
      'Power BI report and dashboard development',
      'Tableau workbook design and publishing',
      'KPI definition and metric frameworks',
      'Self-service BI enablement',
    ],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    ),
  },
  {
    title: 'Data Integration',
    desc: 'Data locked in silos is data that cannot be used. We design and implement integration pipelines that bring together data from ERP systems, databases, SaaS platforms, and external sources — reliably and in near real-time.',
    features: [
      'Boomi and MuleSoft integration development',
      'API-based and file-based integration patterns',
      'Real-time and batch pipeline design',
      'Integration monitoring and alerting',
    ],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    ),
  },
  {
    title: 'AI & Machine Learning Enablement',
    desc: 'AI is only as good as the data behind it. We help organizations lay the data foundation needed for machine learning — and build practical, low/no-code AI solutions that integrate with your existing platforms.',
    features: [
      'ML-ready data pipeline architecture',
      'Low/no-code AI solution development',
      'Predictive analytics and forecasting',
      'AI integration with existing systems',
    ],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
    ),
  },
];

const tools = [
  'Power BI', 'Tableau', 'Snowflake', 'Amazon Redshift',
  'Azure Synapse', 'Boomi', 'MuleSoft', 'dbt',
  'AWS Glue', 'Azure Data Factory', 'Power Automate', 'Python',
];

export default function DataAnalyticsServicesPage() {
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
              <span className="text-sm text-white/70">Data & Analytics</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-medium mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Data & Analytics
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
              Turn raw data into<br />
              <span className="text-brand-300">decisions you can act on.</span>
            </h1>
            <p className="text-blue-100 leading-relaxed max-w-2xl mb-8">
              From data strategy and governance to warehousing, visualization, and AI enablement — we build the data infrastructure that modern organizations depend on to compete.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-brand-700 font-bold px-8 py-3.5 rounded-xl hover:bg-brand-50 transition-colors text-sm shadow-lg"
              >
                Talk to a Data Architect
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
                Data services from strategy through delivery
              </h2>
              <p className="text-slate-500 text-lg">
                We work across the full data lifecycle — helping organizations build a trusted data foundation and extract real business value from their information assets.
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

        {/* ── Tools & Platforms ─────────────────────────── */}
        <section id="platforms" className="py-24 px-6 bg-brand-950 relative overflow-hidden">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-brand-600 opacity-10 blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-brand-400 font-semibold text-sm uppercase tracking-widest">Tools & Platforms</span>
              <h2 className="text-4xl font-extrabold text-white mt-3 mb-4">
                Platform-agnostic. Best-fit recommendations.
              </h2>
              <p className="text-brand-300 text-lg">
                We work across the leading data and analytics platforms — and recommend based on what fits your environment, not what pays us the best referral.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((t) => (
                <span key={t} className="bg-white/5 border border-white/10 text-white font-medium px-5 py-2.5 rounded-full text-sm hover:bg-white/10 transition-colors">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Divider ───────────────────────────────────── */}
        <div className="section-divider" />

        {/* ── Data Maturity / Value Prop ────────────────── */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">The Data Journey</span>
              <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-4">
                Where are you on the data maturity curve?
              </h2>
              <p className="text-slate-500 text-lg">
                We work with organizations at every stage — from those just starting to centralize their data to those ready to build predictive models on top of a mature platform.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  stage: 'Foundation',
                  label: 'Getting data organized',
                  desc: "You're dealing with siloed data, manual reporting, and no single source of truth. We help you build the foundational infrastructure — warehouses, pipelines, and governance frameworks.",
                  color: 'bg-brand-50 border-brand-100',
                  labelColor: 'text-brand-700',
                },
                {
                  stage: 'Scale',
                  label: 'Making data accessible',
                  desc: "You have data infrastructure in place but need better visualization, self-service reporting, and integration across systems. We build the analytics layer your teams can actually use.",
                  color: 'bg-white border-slate-100',
                  labelColor: 'text-brand-600',
                },
                {
                  stage: 'Innovate',
                  label: 'Driving insight and prediction',
                  desc: "Your data foundation is solid and you're ready to build ML models, automate decisions, and use AI to create competitive advantage. We help you move from descriptive to predictive.",
                  color: 'bg-brand-950 border-brand-800',
                  labelColor: 'text-brand-300',
                },
              ].map(({ stage, label, desc, color, labelColor }) => (
                <div key={stage} className={`rounded-2xl p-8 border ${color}`}>
                  <div className={`text-xs font-bold uppercase tracking-widest mb-1 ${labelColor}`}>{stage}</div>
                  <h3 className={`text-xl font-bold mb-3 ${color.includes('brand-950') ? 'text-white' : 'text-slate-900'}`}>{label}</h3>
                  <p className={`text-sm leading-relaxed ${color.includes('brand-950') ? 'text-brand-300' : 'text-slate-500'}`}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────── */}
        <section className="py-20 px-6 hero-gradient text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-5">Ready to unlock the value in your data?</h2>
            <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
              Tell us where you are today and where you want to go. We&apos;ll put together a clear plan for getting there.
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
