'use client';

import { useState, useRef } from 'react';
import Logo from './Logo';

function ChevronIcon() {
  return (
    <svg className="mega-chevron w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}


function MegaItem({ label, panelWidth, children }: { label: string; panelWidth: number; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openPanel() {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpen(true);
  }
  function closePanel() {
    timerRef.current = setTimeout(() => setOpen(false), 120);
  }

  return (
    <li
      className={`relative mega-item${open ? ' open' : ''}`}
      onMouseEnter={openPanel}
      onMouseLeave={closePanel}
    >
      <button className="nav-link hover:text-brand-600 transition-colors flex items-center gap-1 py-1 uppercase tracking-wider text-sm">
        {label}
        <ChevronIcon />
      </button>
      <div
        className={`mega-panel${open ? ' open' : ''}`}
        style={{ width: panelWidth }}
        onMouseEnter={openPanel}
        onMouseLeave={closePanel}
      >
        {children}
      </div>
    </li>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobileTech, setMobileTech] = useState(false);

  return (
    <header id="top" className="fixed top-0 left-0 right-0 z-50 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.18),0_1px_4px_-1px_rgba(0,0,0,0.08)]">

      {/* Main nav */}
      <div className="bg-white/95 backdrop-blur-md border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-8">

        {/* Logo */}
        <a href="/" className="flex items-center group">
          <Logo variant="light" className="h-12 md:h-16 w-auto" />
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-6 text-base font-medium text-slate-600 ml-auto">
          <li><a href="/about" className="nav-link hover:text-brand-600 transition-colors uppercase tracking-wider text-sm">About</a></li>

          {/* Services mega menu */}
          <MegaItem label="Services" panelWidth={820}>
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex">
              {/* Sidebar */}
              <div className="w-52 shrink-0 bg-brand-950 p-6 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-bold text-brand-400 uppercase tracking-widest mb-2">What We Do</p>
                  <p className="text-white text-sm font-semibold leading-snug mt-3">Expert-led technology services for the enterprise.</p>
                  <p className="text-brand-300 text-xs leading-relaxed mt-2">Vendor-agnostic guidance tailored to your environment.</p>
                </div>
                <a href="/contact/" className="mt-6 inline-flex items-center justify-center bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors">
                  Get in Touch
                </a>
              </div>
              {/* Grid */}
              <div className="flex-1 p-5">
                <div className="grid grid-cols-2 gap-2">
                  {[
                    {
                      url: '/services/database/',
                      icon: <><ellipse cx="12" cy="5" rx="9" ry="3" /><path strokeLinecap="round" strokeLinejoin="round" d="M3 5v4c0 1.657 4.03 3 9 3s9-1.343 9-3V5M3 9v4c0 1.657 4.03 3 9 3s9-1.343 9-3V9M3 13v4c0 1.657 4.03 3 9 3s9-1.343 9-3v-4" /></>,
                      label: 'Database Services',
                      desc: 'Remote DBA · Monitoring · Tuning · Upgrades',
                    },
                    {
                      url: '/services/applications/',
                      icon: <><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4" /></>,
                      label: 'Enterprise Applications',
                      desc: 'JD Edwards · PeopleSoft · Cloud Strategy',
                    },
                    {
                      url: '/services/data-analytics/',
                      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
                      label: 'Data & Analytics',
                      desc: 'Governance · Visualization · Architecture',
                    },
                    {
                      url: '/services/artificial-intelligence/',
                      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />,
                      label: 'Artificial Intelligence',
                      desc: 'Machine Learning · Low/No Code Solutions',
                    },
                    {
                      url: '/services/hosting/',
                      icon: <><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></>,
                      label: 'Hosting',
                      desc: 'IaaS · Disaster Recovery · Hybrid Cloud',
                    },
                    {
                      url: '/services/advisory/',
                      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />,
                      label: 'IT Advisory',
                      desc: 'Fractional CIO · Digital Transformation',
                    },
                  ].map(({ url, icon, label, desc }) => (
                    <a key={label} href={url} className="flex items-start gap-3 p-3.5 rounded-xl hover:bg-brand-50 border border-transparent hover:border-brand-100 transition-all group">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-brand-100 transition-colors flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-brand-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">{icon}</svg>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm leading-snug">{label}</p>
                        <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{desc}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </MegaItem>

          {/* Technologies mega menu */}
          <MegaItem label="Technologies" panelWidth={780}>
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-5">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Technology Stack</p>
                  <div className="flex items-center gap-1.5 text-brand-500">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs text-slate-400 italic">Vendor-agnostic — we recommend what&apos;s right for your environment.</span>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-5">
                  {[
                    {
                      icon: <><ellipse cx="12" cy="5" rx="9" ry="3" /><path strokeLinecap="round" strokeLinejoin="round" d="M3 5v4c0 1.657 4.03 3 9 3s9-1.343 9-3V5M3 9v4c0 1.657 4.03 3 9 3s9-1.343 9-3V9M3 13v4c0 1.657 4.03 3 9 3s9-1.343 9-3v-4" /></>,
                      heading: 'Databases',
                      url: '/services/database/#platforms',
                      items: ['MySQL', 'SQL Server', 'PostgreSQL', 'DB2', 'Oracle', 'Amazon Aurora', 'MariaDB', 'MongoDB', 'Redshift', 'Snowflake'],
                    },
                    {
                      icon: <><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4" /></>,
                      heading: 'App Platforms',
                      url: '/services/applications/#platforms',
                      items: ['Oracle Platforms', 'JD Edwards', 'PeopleSoft', 'Nextworld', 'E-Business Suite'],
                    },
                    {
                      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />,
                      heading: 'Cloud',
                      url: '/services/hosting/#platforms',
                      items: ['Amazon AWS', 'Microsoft Azure', 'Google Cloud (GCP)', 'Oracle Cloud (OCI)'],
                    },
                    {
                      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
                      heading: 'BI & Low-Code',
                      url: '/services/data-analytics/#platforms',
                      items: ['Power BI', 'Tableau', 'Power Apps', 'Power Automate', 'Boomi'],
                    },
                  ].map(({ icon, heading, url, items }) => (
                    <div key={heading}>
                      <a href={url} className="flex items-center gap-2 mb-3 pb-2.5 border-b border-slate-100 group hover:border-brand-200 transition-colors">
                        <div className="w-6 h-6 rounded-md bg-brand-50 group-hover:bg-brand-100 flex items-center justify-center shrink-0 transition-colors">
                          <svg className="w-3.5 h-3.5 text-brand-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">{icon}</svg>
                        </div>
                        <span className="text-xs font-bold text-slate-700 group-hover:text-brand-600 uppercase tracking-wide transition-colors">{heading}</span>
                      </a>
                      <ul className="space-y-1.5">
                        {items.map((item) => (
                          <li key={item}>
                            <a href={url} className="text-sm text-slate-500 hover:text-brand-600 flex items-center gap-2 transition-colors">
                              <span className="w-1 h-1 rounded-full bg-brand-300 shrink-0"></span>
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </MegaItem>

          <li><a href="/insights/" className="nav-link hover:text-brand-600 transition-colors uppercase tracking-wider text-sm">Insights</a></li>
        </ul>

        {/* Desktop CTA */}
        <a href="/contact/" className="hidden lg:inline-flex items-center bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">
          Get Started
        </a>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      </div>

      {/* Mobile backdrop */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile drawer — slides in from right */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-[320px] max-w-[90vw] bg-white z-50 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 shrink-0">
          <Logo variant="light" className="h-12 w-auto" />
          <button
            className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          >
            <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer nav — scrollable */}
        <nav className="flex-1 overflow-y-auto px-6 py-4">
          <ul className="flex flex-col font-medium text-slate-700">
            <li className="border-b border-slate-100">
              <a href="/about" className="block py-4 text-lg hover:text-brand-600 transition-colors" onClick={() => setMobileOpen(false)}>About</a>
            </li>

            {/* Services expandable */}
            <li className="border-b border-slate-100">
              <button
                className="w-full flex items-center justify-between py-4 text-lg hover:text-brand-600 transition-colors"
                onClick={() => setMobileServices((v) => !v)}
              >
                Services
                <svg className={`w-5 h-5 transition-transform duration-200 ${mobileServices ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileServices && (
                <div className="pb-4 pl-2 space-y-1">
                  {[
                    { label: 'Database Services', href: '/services/database/' },
                    { label: 'Enterprise Applications', href: '/services/applications/' },
                    { label: 'Data & Analytics', href: '/services/data-analytics/' },
                    { label: 'Artificial Intelligence', href: '/services/artificial-intelligence/' },
                    { label: 'Hosting', href: '/services/hosting/' },
                    { label: 'IT Advisory', href: '/services/advisory/' },
                  ].map(({ label, href }) => (
                    <a key={label} href={href} className="flex items-center gap-3 py-2 text-base text-slate-500 hover:text-brand-600 transition-colors" onClick={() => setMobileOpen(false)}>
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                      {label}
                    </a>
                  ))}
                </div>
              )}
            </li>

            {/* Technologies expandable */}
            <li className="border-b border-slate-100">
              <button
                className="w-full flex items-center justify-between py-4 text-lg hover:text-brand-600 transition-colors"
                onClick={() => setMobileTech((v) => !v)}
              >
                Technologies
                <svg className={`w-5 h-5 transition-transform duration-200 ${mobileTech ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileTech && (
                <div className="pb-4 pl-2 space-y-4">
                  {[
                    { heading: 'Databases', items: 'MySQL · SQL Server · PostgreSQL · DB2 · Oracle · Aurora · MariaDB · MongoDB · Redshift · Snowflake' },
                    { heading: 'App Platforms', items: 'JD Edwards · PeopleSoft · Nextworld · E-Business Suite' },
                    { heading: 'Cloud', items: 'AWS · Azure · GCP · OCI' },
                    { heading: 'BI & Low-Code', items: 'Power BI · Tableau · Power Apps · Boomi' },
                  ].map(({ heading, items }) => (
                    <div key={heading}>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5">{heading}</p>
                      <p className="text-base text-slate-500 leading-relaxed">{items}</p>
                    </div>
                  ))}
                </div>
              )}
            </li>

            <li className="border-b border-slate-100">
              <a href="/insights" className="block py-4 text-lg hover:text-brand-600 transition-colors" onClick={() => setMobileOpen(false)}>Insights</a>
            </li>
          </ul>
        </nav>

        {/* Drawer footer CTAs */}
        <div className="px-6 py-5 border-t border-slate-100 shrink-0 space-y-3">
          <a
            href="/contact/"
            className="block bg-brand-600 hover:bg-brand-700 text-white text-center py-3.5 rounded-xl font-semibold text-base transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Get Started
          </a>
          <a
            href="/contact/"
            className="block border border-brand-600 text-brand-600 hover:bg-brand-50 text-center py-3.5 rounded-xl font-semibold text-base transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );  
}
