'use client';

import { useState, type FormEvent } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left: Info */}
          <div>
            <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-5">Let&apos;s talk about your business</h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              Whether you have a specific project in mind or just want to explore your options, we&apos;re happy to have a no-pressure conversation.
            </p>
            <div className="space-y-6">
              {[
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
                  label: 'Call or Text Us',
                  value: 'Update with your phone number',
                  valueClass: 'text-brand-600 font-medium',
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
                  label: 'Email Us',
                  value: 'Update with your email',
                  valueClass: 'text-brand-600 font-medium',
                },
                {
                  icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></>,
                  label: 'Our Location',
                  value: 'Update with your city/state',
                  valueClass: 'text-slate-500',
                },
              ].map(({ icon, label, value, valueClass }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">{icon}</svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{label}</div>
                    <div className={valueClass}>{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Send us a message</h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">First Name</label>
                  <input type="text" required placeholder="Jane" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent bg-white text-sm transition" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Last Name</label>
                  <input type="text" required placeholder="Doe" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent bg-white text-sm transition" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
                <input type="email" required placeholder="jane@example.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent bg-white text-sm transition" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Business Name (optional)</label>
                <input type="text" placeholder="Acme LLC" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent bg-white text-sm transition" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">How can we help?</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent bg-white text-sm transition">
                  <option value="">Select a service...</option>
                  <option>Database Management</option>
                  <option>Enterprise Applications</option>
                  <option>Data &amp; Analytics</option>
                  <option>IT Advisory</option>
                  <option>Hosting</option>
                  <option>Multiple services / not sure yet</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
                <textarea rows={4} required placeholder="Tell us a bit about your project or question..." className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent bg-white text-sm transition resize-none" />
              </div>
              <button type="submit" className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2">
                Send Message
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
            {submitted && (
              <div className="mt-4 bg-green-50 border border-green-200 text-green-800 rounded-xl px-5 py-4 text-sm font-medium">
                Thanks! We&apos;ll be in touch within one business day.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
