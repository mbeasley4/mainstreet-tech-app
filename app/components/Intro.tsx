const pillars = [
  {
    label: 'Personalized',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'On-Shore',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Senior-Level',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'End-to-End',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Intro() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 px-4 sm:px-6 bg-white">

      {/* subtle background orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 w-150 h-150 rounded-full opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, #0e84e8 0%, transparent 70%)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-40 w-125 h-125 rounded-full opacity-[0.05]"
        style={{ background: 'radial-gradient(circle, #0351a1 0%, transparent 70%)' }}
      />

      <div className="relative max-w-5xl mx-auto text-center">

        {/* eyebrow */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-brand-200 bg-brand-50">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
          <span className="text-brand-700 font-semibold text-xs uppercase tracking-widest">
            Who We Are
          </span>
        </div>

        {/* headline */}
        <h2
          className="font-extrabold text-slate-900 leading-none mb-8"
          style={{ fontSize: 'clamp(2.75rem, 6vw, 5rem)', letterSpacing: '-0.04em' }}
        >
          We Are{' '}
          <span
            style={{
              backgroundImage: 'linear-gradient(135deg, #0267c7 0%, #0e84e8 50%, #38a3f7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            What&apos;s Next.
          </span>
        </h2>

        {/* body */}
        <p
          className="text-slate-500 leading-relaxed mb-14 max-w-3xl mx-auto"
          style={{ fontSize: 'clamp(1.0625rem, 1.5vw, 1.25rem)' }}
        >
          Main Street Technical Services partners with mid-sized to enterprise companies to provide
          end-to-end data solutions through our{' '}
          <strong className="text-slate-700 font-semibold">personalized, on-shore,</strong> and{' '}
          <strong className="text-slate-700 font-semibold">senior-level</strong> support team.
        </p>

        {/* pillars */}
        <div className="flex flex-wrap justify-center gap-3">
          {pillars.map(({ label, icon }) => (
            <div
              key={label}
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-slate-50 border border-slate-100 text-slate-700 font-semibold text-sm shadow-sm"
            >
              <span className="text-brand-500">{icon}</span>
              {label}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
