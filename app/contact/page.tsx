import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from './ContactForm';
import PageHero from '../components/PageHero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Main Street Tech',
  description:
    'Get in touch with the Main Street Tech team. Ready to help with database management, enterprise applications, data analytics, and more.',
  openGraph: {
    title: 'Contact Us | Main Street Tech',
    description:
      'Get in touch with the Main Street Tech team. Ready to help with database management, enterprise applications, data analytics, and more.',
    url: 'https://www.mainstreettech.com/contact',
    images: [{ url: '/images/default-og.png' }],
  },
  twitter: {
    title: 'Contact Us | Main Street Tech',
    description:
      'Get in touch with the Main Street Tech team. Ready to help with database management, enterprise applications, data analytics, and more.',
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* ── Page Hero ─────────────────────────────────── */}
        <PageHero
          serviceName="We&apos;d love to hear from you"
          headline="Let&apos;s talk about"
          headlineAccent="your business"
          description="Whether you have a specific project in mind or just want to explore your options, we&apos;re happy to have a no-pressure conversation."
          backgroundImage="/images/page-hero-backgrounds/advisory-bg.png"
          showBreadcrumb={false}
        />

        {/* ── Contact Body ──────────────────────────────── */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Left: Info */}
            <div className="lg:col-span-2 space-y-10">

              {/* Contact details */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Email</p>
                      <a href="mailto:Info@mainstreetdbas.com" className="text-brand-600 font-medium hover:text-brand-800 transition-colors">
                        Info@mainstreetdbas.com
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Phone</p>
                      <a href="tel:+18776825300" className="text-brand-600 font-medium hover:text-brand-800 transition-colors">
                        1-877-682-5300
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Location</p>
                      <p className="text-slate-700 font-medium">Cincinnati, Ohio, USA</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Response time note */}
              <div className="bg-brand-50 rounded-2xl p-6 border border-brand-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-100 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-brand-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="font-semibold text-slate-900 text-sm">Fast Response</p>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  We typically respond within one business day. For urgent matters, call us directly at 1-877-682-5300.
                </p>
              </div>

              {/* What to expect */}
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">What to Expect</h3>
                <ul className="space-y-3">
                  {[
                    'A no-pressure discovery call at your convenience',
                    'Honest assessment of whether we are the right fit',
                    'Clear scope and pricing before any commitment',
                    'Senior practitioners on every engagement',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                      <svg className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200">
                <h2 className="text-xl font-bold text-slate-900 mb-1">Send us a message</h2>
                <p className="text-slate-500 text-sm mb-6">
                  Fill out the form and we&apos;ll be in touch within one business day.
                </p>
                <ContactForm />
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
