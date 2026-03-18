import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageHero from '../../components/PageHero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hosting Services | Main Street Tech',
  description:
    'Enterprise hosting, IaaS, disaster recovery, and hybrid cloud architecture designed for compliance, high availability, and scalability — across AWS, Azure, GCP, and OCI.',
  openGraph: {
    title: 'Hosting Services | Main Street Tech',
    description:
      'Enterprise hosting, IaaS, disaster recovery, and hybrid cloud architecture designed for compliance, high availability, and scalability — across AWS, Azure, GCP, and OCI.',
    url: 'https://www.mainstreettech.com/services/hosting',
    images: [{ url: '/images/default-og.png' }],
  },
  twitter: {
    title: 'Hosting Services | Main Street Tech',
    description:
      'Enterprise hosting, IaaS, disaster recovery, and hybrid cloud architecture designed for compliance, high availability, and scalability — across AWS, Azure, GCP, and OCI.',
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
    title: 'Enterprise Hosting',
    desc: 'Managed hosting for your most critical applications and databases. We handle the infrastructure layer — provisioning, patching, monitoring, and incident response — so your team can focus on delivering business value.',
    features: [
      '24×7 infrastructure monitoring',
      'Proactive patching and maintenance',
      'Capacity planning and scaling',
      'Dedicated account and operations support',
    ],
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
    title: 'Infrastructure as a Service (IaaS)',
    desc: 'Flexible, cloud-based compute, storage, and networking — without the capital expenditure of on-premises hardware. We design and manage your IaaS environment to deliver the performance and reliability your workloads require.',
    features: [
      'Cloud infrastructure design and provisioning',
      'Virtual machine and container management',
      'Storage architecture and optimization',
      'Network design and security configuration',
    ],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    ),
  },
  {
    title: 'Disaster Recovery',
    desc: "When your systems go down, every minute costs money. We design DR solutions that match your recovery time and recovery point objectives — and test them regularly to ensure they hold up when you actually need them.",
    features: [
      'RTO/RPO-aligned DR architecture',
      'Automated failover and failback',
      'Regular DR testing and runbook documentation',
      'Cross-region and cross-cloud DR design',
    ],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    ),
  },
  {
    title: 'Hybrid Cloud Architecture',
    desc: 'Most enterprise environments are neither fully on-premises nor fully in the cloud. We design hybrid architectures that give you the best of both — on-premises control where compliance requires it, cloud scalability where it makes business sense.',
    features: [
      'Hybrid connectivity design (VPN, ExpressRoute, Direct Connect)',
      'Workload placement strategy',
      'Identity and access management across environments',
      'Cost optimization and right-sizing',
    ],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    ),
  },
  {
    title: 'Security & Compliance',
    desc: 'Hosting in regulated industries means your infrastructure must hold up under audit. We implement security controls, document configurations, and help you maintain compliance with frameworks like HIPAA, SOC 2, and PCI-DSS.',
    features: [
      'Security hardening and configuration baselines',
      'Vulnerability scanning and patching',
      'Compliance documentation and audit support',
      'Access control and identity management',
    ],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
  },
  {
    title: 'Backup & Recovery',
    desc: 'A backup strategy that has never been tested is not a backup strategy. We design, implement, and regularly validate backup solutions — ensuring your data can be recovered quickly and completely in any failure scenario.',
    features: [
      'Automated backup scheduling and monitoring',
      'Regular restoration testing',
      'Offsite and cross-region backup storage',
      'Retention policy design and enforcement',
    ],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
    ),
  },
];

const cloudProviders = [
  { name: 'Amazon AWS', desc: 'EC2, RDS, S3, VPC, and the full AWS ecosystem' },
  { name: 'Microsoft Azure', desc: 'Azure VMs, Azure SQL, AKS, and hybrid connectivity' },
  { name: 'Google Cloud (GCP)', desc: 'Compute Engine, Cloud SQL, GKE, and BigQuery' },
  { name: 'Oracle Cloud (OCI)', desc: 'Optimized for Oracle workloads and ERP platforms' },
];

export default function HostingServicesPage() {
  return (
    <>
      <Header />
      <main>

        {/* ── Page Hero ─────────────────────────────────── */}
        <PageHero
          serviceName="Hosting Services"
          headline="Reliable infrastructure built"
          headlineAccent="for compliance and scale."
          description="Enterprise-grade hosting, IaaS, disaster recovery, and hybrid cloud — managed by senior engineers who understand the uptime and compliance requirements your business depends on."
          primaryButton={{ label: 'Talk to an Engineer', href: '/contact' }}
          backgroundImage="/images/page-hero-backgrounds/hosting-bg.png"
        />

        {/* ── Divider ───────────────────────────────────── */}
        <div className="section-divider" />

        {/* ── Service Offerings ─────────────────────────── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">What We Deliver</span>
              <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-4">
                Infrastructure you can depend on
              </h2>
              <p className="text-slate-500 text-lg">
                We manage the full hosting stack — from physical and virtual infrastructure to cloud environments — with the security posture and documentation your organization requires.
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

        {/* ── Cloud Providers ───────────────────────────── */}
        <section id="platforms" className="py-24 px-6 bg-brand-950 relative overflow-hidden">
          <div className="absolute top-0 right-1/3 w-96 h-96 rounded-full bg-brand-700 opacity-15 blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-brand-400 font-semibold text-sm uppercase tracking-widest">Cloud Providers</span>
              <h2 className="text-4xl font-extrabold text-white mt-3 mb-4">
                Multi-cloud capable. Vendor-agnostic.
              </h2>
              <p className="text-brand-300 text-lg">
                We work across all major cloud providers and recommend the right platform for your workloads — not the one with the biggest referral incentive.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cloudProviders.map(({ name, desc }) => (
                <div key={name} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-brand-600/30 flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-brand-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
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

        {/* ── SLA / Uptime Commitment ───────────────────── */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { value: '99.9%', label: 'Uptime SLA Target' },
                { value: '24×7', label: 'Infrastructure Monitoring' },
                { value: '<1hr', label: 'Critical Incident Response' },
                { value: '100%', label: 'US-Based Operations Team' },
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
            <h2 className="text-4xl md:text-5xl font-extrabold mb-5">Ready to modernize your infrastructure?</h2>
            <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
              Whether you&apos;re moving to the cloud, hardening an on-premises environment, or building a DR strategy from scratch — let&apos;s talk.
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
