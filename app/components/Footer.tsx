import Logo from './Logo';

const services = [
  { href: '/services', label: 'Database Services' },
  { href: '/services', label: 'Enterprise Applications' },
  { href: '/services', label: 'Data & Analytics' },
  { href: '/services', label: 'Hosting' },
  { href: '/#services', label: 'IT Advisory' },
];

const company = [
  { href: '/about', label: 'About Us' },
  { href: '/insights', label: 'Insights' },
  { href: '/careers', label: 'Careers' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">

      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand column */}
        <div className="lg:col-span-1">
          <a href="/">
            <Logo variant="dark" className="h-10 w-auto mb-5" />
          </a>
          <p className="text-sm leading-relaxed text-slate-400 mb-6">
            Enterprise-grade database management, application services, data analytics, IT advisory, and hosting — built for organizations that demand reliability.
          </p>
          {/* Client Login CTA */}
          <a
            href="https://mainstreet.halopsa.com/portal/home" target="_blank"
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Client Login
          </a>
        </div>

        {/* Services column */}
        <div>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Services</p>
          <ul className="space-y-2.5">
            {services.map(({ href, label }) => (
              <li key={label}>
                <a href={href} className="text-sm hover:text-white transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company column */}
        <div>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Company</p>
          <ul className="space-y-2.5">
            {company.map(({ href, label }) => (
              <li key={label}>
                <a href={href} className="text-sm hover:text-white transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact column */}
        <div>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Get In Touch</p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <svg className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:Info@mainstreetdbas.com" className="text-sm hover:text-white transition-colors">
                Info@mainstreetdbas.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+18776825300" className="text-sm hover:text-white transition-colors">
                1-877-682-5300
              </a>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm text-slate-400">Cincinnati, Ohio, USA</span>
            </li>
          </ul>
          <div className="mt-6">
            <a
              href="/contact"
              className="inline-flex items-center border border-slate-700 hover:border-brand-500 text-slate-300 hover:text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>&copy; 2026 Main Street Tech. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
