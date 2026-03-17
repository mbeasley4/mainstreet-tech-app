const services = [
  {
    icon: (
      <>
        <ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" strokeWidth="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5v4c0 1.657 4.03 3 9 3s9-1.343 9-3V5M3 9v4c0 1.657 4.03 3 9 3s9-1.343 9-3V9M3 13v4c0 1.657 4.03 3 9 3s9-1.343 9-3v-4" />
      </>
    ),
    title: 'Database Management',
    description:
      'Design, optimize, and maintain the databases your operations depend on. We handle performance tuning, migrations, security hardening, and disaster recovery across SQL and NoSQL platforms.',
    href: '/services#database-management',
  },
  {
    icon: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4" />
      </>
    ),
    title: 'Enterprise Applications',
    description:
      'Implement, integrate, and support the enterprise software your teams rely on. From ERP and CRM rollouts to custom integrations, we bridge the gap between platforms and processes.',
    href: '/services#enterprise-applications',
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    ),
    title: 'Data & Analytics',
    description:
      'Turn raw data into decisions. We build data pipelines, dashboards, and reporting infrastructure that give your leadership team clear, actionable visibility into what matters most.',
    href: '/services#data-analytics',
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    ),
    title: 'IT Advisory',
    description:
      'Strategic guidance from experienced practitioners. We assess your current environment, identify gaps, and deliver a clear technology roadmap aligned to your business goals and budget.',
    href: '/services#it-advisory',
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12H3m18 0h-2M5.636 5.636L4.222 4.222m15.556 15.556l-1.414-1.414M12 5V3m0 18v-2m6.364-13.364l-1.414 1.414M5.636 18.364l-1.414 1.414M12 8a4 4 0 100 8 4 4 0 000-8z" />
    ),
    title: 'Hosting',
    description:
      'Reliable, managed hosting for applications, databases, and websites. We handle the infrastructure — uptime monitoring, security patching, backups, and scaling — so your team doesn\'t have to.',
    href: '/services#hosting',
  },
];

function ServiceCard({ icon, title, description, href }: { icon: React.ReactNode; title: string; description: string; href: string }) {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 border-l-4 border-l-brand-500 card-hover flex flex-col">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center shrink-0">
          <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {icon}
          </svg>
        </div>
        <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      </div>
      <p className="text-slate-600 leading-relaxed text-sm flex-1">{description}</p>
      <a href={href} className="inline-flex items-center text-brand-600 font-semibold text-sm mt-5 hover:text-brand-700 transition-all">
        Learn more
      </a>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 px-4 sm:px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">What We Do</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-4">Enterprise services. Practical delivery.</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            From managing mission-critical databases to advising on technology strategy, we bring enterprise-grade expertise to every engagement.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
