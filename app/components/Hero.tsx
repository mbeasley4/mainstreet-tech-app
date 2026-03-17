export default function Hero() {
  return (
    <section className="relative min-h-[72vh] flex flex-col justify-center overflow-hidden">

      {/* ── Full-bleed background image ───────────────── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/homepage-hero-bg.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        {/* layered gradient: deep navy at top-left fading to semi-transparent at right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(120deg, rgba(7,36,74,0.92) 0%, rgba(3,81,161,0.78) 50%, rgba(14,132,232,0.45) 100%)',
          }}
        />
        {/* bottom fade so the section below starts cleanly */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-white/10 to-transparent" />
      </div>

      {/* ── Content ───────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-4">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/25 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium text-white mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Enterprise technology, personal service
        </div>

        {/* Headline — wide, full layout */}
        <h1
          className="font-extrabold leading-none mb-8 max-w-4xl"
          style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 5.5rem)',
            letterSpacing: '-0.04em',
          }}
        >
          {/* "We Are" — pure white with subtle shadow */}
          <span
            style={{
              display: 'block',
              color: '#ffffff',
              textShadow: '0 2px 16px rgba(0,0,0,0.4)',
            }}
          >
            We Are
          </span>
          {/* "What's Next." — vivid cyan-to-blue gradient */}
          <span
            style={{
              display: 'block',
              color: 'transparent',
              backgroundImage: 'linear-gradient(110deg, #38a3f7 0%, #7dd3fc 45%, #0e84e8 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 4px 24px rgba(56,163,247,0.55))',
            }}
          >
            What&apos;s Next.
          </span>
        </h1>

        {/* Sub-copy */}
        <p
          className="text-base sm:text-xl md:text-2xl text-blue-100 leading-relaxed mb-10 max-w-3xl"
          style={{ textShadow: '0 1px 8px rgba(0,0,0,0.3)' }}
        >
          Main Street Technical Services partners with mid-sized to enterprise companies
          to provide end-to-end data solutions through our personalized, on-shore, and
          senior-level support team.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a
            href="#contact"
            className="hero-btn inline-flex items-center justify-center bg-white text-brand-900 font-semibold px-9 py-4 rounded-lg text-base shadow-lg transition-colors hover:bg-blue-50"
          >
            Let&apos;s Talk
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white font-semibold px-9 py-4 rounded-lg text-base hover:border-white hover:bg-white/10 transition-colors backdrop-blur-sm"
          >
            See Our Services
          </a>
        </div>
      </div>

    </section>
  );
}
