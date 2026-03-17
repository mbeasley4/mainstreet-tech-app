'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

/* ── Service panel data ─────────────────────────────────────── */
const slides = [
  {
    name: 'Database Management',
    headline: 'Your Data,\nAlways Available',
    sub: 'Expert DBAs keeping your systems fast, secure, and online — around the clock.',
    href: '/services/database/',
    bg: 'linear-gradient(160deg, rgba(4,18,50,0.97) 0%, rgba(3,45,110,0.93) 100%)',
    accent: '#38a3f7',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <ellipse cx="20" cy="10" rx="13" ry="5" stroke="currentColor" strokeWidth="2" />
        <path d="M7 10v8c0 2.761 5.82 5 13 5s13-2.239 13-5v-8" stroke="currentColor" strokeWidth="2" />
        <path d="M7 18v8c0 2.761 5.82 5 13 5s13-2.239 13-5v-8" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: 'Enterprise Applications',
    headline: 'ERP That\nActually Works',
    sub: 'JD Edwards, PeopleSoft, and beyond — deployed, integrated, and supported end to end.',
    href: '/services/applications/',
    bg: 'linear-gradient(160deg, rgba(3,30,80,0.97) 0%, rgba(5,60,140,0.93) 100%)',
    accent: '#60b5ff',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <rect x="4" y="6" width="32" height="22" rx="2.5" stroke="currentColor" strokeWidth="2" />
        <path d="M13 34h14M20 28v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M11 17h6M11 22h10M23 17h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Data & Analytics',
    headline: 'From Data\nto Decisions',
    sub: 'Pipelines, dashboards, and reporting that give leadership clear, actionable visibility.',
    href: '/services/data-analytics/',
    bg: 'linear-gradient(160deg, rgba(5,35,90,0.97) 0%, rgba(10,80,160,0.93) 100%)',
    accent: '#7dd3fc',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <path d="M6 30V20M12 30V15M18 30V8M24 30V18M30 30V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M4 32h32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'IT Advisory',
    headline: 'Strategy Meets\nExecution',
    sub: 'Fractional CIO guidance and technology roadmaps aligned to your business goals.',
    href: '/services/advisory/',
    bg: 'linear-gradient(160deg, rgba(6,25,65,0.97) 0%, rgba(14,100,185,0.93) 100%)',
    accent: '#93c5fd',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <circle cx="20" cy="16" r="8" stroke="currentColor" strokeWidth="2" />
        <circle cx="20" cy="16" r="3" fill="currentColor" />
        <path d="M20 24v4M16 32h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 11c1.5-3.5 4.5-6 8-6s6.5 2.5 8 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Hosting',
    headline: 'Infrastructure\nYou Can Trust',
    sub: 'Managed hosting, disaster recovery, and uptime monitoring so your team can focus.',
    href: '/services/hosting/',
    bg: 'linear-gradient(160deg, rgba(3,22,60,0.97) 0%, rgba(4,60,120,0.93) 100%)',
    accent: '#bae6fd',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <rect x="4" y="6" width="32" height="9" rx="2" stroke="currentColor" strokeWidth="2" />
        <rect x="4" y="19" width="32" height="9" rx="2" stroke="currentColor" strokeWidth="2" />
        <circle cx="32" cy="10.5" r="1.8" fill="currentColor" />
        <circle cx="32" cy="23.5" r="1.8" fill="currentColor" />
        <path d="M8 32c0 2 12 3.5 12 3.5s12-1.5 12-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

/* ── Arrow icon ──────────────────────────────────────────────── */
function ArrowRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className ?? 'w-4 h-4'} aria-hidden="true">
      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
    </svg>
  );
}

/* ── Main component ──────────────────────────────────────────── */
export default function Hero() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((idx: number) => {
    setActive(idx);
  }, []);

  const next = useCallback(() => {
    setActive((i) => (i + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setActive((i) => (i - 1 + slides.length) % slides.length);
  }, []);

  // Auto-advance
  useEffect(() => {
    if (!playing) return;
    intervalRef.current = setInterval(next, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [playing, next]);

  // Reset timer when user manually navigates
  const manualNav = useCallback((fn: () => void) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    fn();
    if (playing) {
      intervalRef.current = setInterval(next, 5000);
    }
  }, [playing, next]);

  return (
    <section
      className="relative"
      style={{ minHeight: 'clamp(480px, 60vh, 88vh)' }}
      onPointerEnter={(e) => { if (e.pointerType !== 'touch') setPlaying(false); }}
      onPointerLeave={(e) => { if (e.pointerType !== 'touch') setPlaying(true); }}
    >

      {/* ── Single shared background image ───────────────────── */}
      <img
        src="/images/homepage-hero-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* ── DESKTOP: 5 panels side by side ──────────────────── */}
      <div className="hidden lg:flex h-full relative z-10" style={{ minHeight: '88vh' }}>
        {slides.map((slide, i) => {
          const isActive = i === active;
          return (
            <div
              key={slide.href}
              className="relative flex-1 overflow-hidden cursor-pointer group"
              style={{
                flex: isActive ? '0 0 32%' : '0 0 17%',
                transition: 'flex 0.6s cubic-bezier(0.4,0,0.2,1)',
              }}
              onMouseEnter={() => goTo(i)}
            >
              {/* color overlay */}
              <div className="absolute inset-0" style={{ background: slide.bg }} />

              {/* active indicator bar at top */}
              <div
                className="absolute top-0 left-0 right-0 h-1 z-10"
                style={{
                  background: isActive ? slide.accent : 'transparent',
                  transition: 'background 0.4s ease',
                }}
              />

              {/* right divider */}
              {i < slides.length - 1 && (
                <div className="absolute top-0 right-0 bottom-0 w-px z-10" style={{ background: 'rgba(255,255,255,0.1)' }} />
              )}

              {/* ── Collapsed label (icon + rotated name) ── */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-5 z-10 px-2"
                style={{
                  opacity: isActive ? 0 : 1,
                  transition: 'opacity 0.2s ease',
                  pointerEvents: isActive ? 'none' : 'auto',
                }}
              >
                <div style={{ color: slide.accent }}>{slide.icon}</div>
                <span
                  className="font-semibold tracking-widest uppercase text-white text-xs"
                  style={{
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                    transform: 'rotate(180deg)',
                    letterSpacing: '0.18em',
                    whiteSpace: 'nowrap',
                    textShadow: '0 1px 6px rgba(0,0,0,0.6)',
                  }}
                >
                  {slide.name}
                </span>
              </div>

              {/* ── Expanded content ── */}
              <div
                className="absolute inset-0 flex flex-col justify-end z-10"
                style={{
                  opacity: isActive ? 1 : 0,
                  transition: 'opacity 0.3s ease 0.2s',
                  pointerEvents: isActive ? 'auto' : 'none',
                }}
              >
                {/* large BG number for texture */}
                <span
                  className="absolute top-8 right-6 font-black text-white select-none"
                  style={{ fontSize: '7rem', lineHeight: 1, opacity: 0.04 }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="p-8 pb-24">
                  {/* service label */}
                  <p
                    className="text-xs font-bold uppercase tracking-[0.2em] mb-4"
                    style={{ color: slide.accent }}
                  >
                    {slide.name}
                  </p>

                  {/* icon */}
                  <div style={{ color: slide.accent }} className="mb-5">
                    {slide.icon}
                  </div>

                  {/* headline */}
                  <h2
                    className="font-extrabold text-white leading-none mb-5"
                    style={{ fontSize: 'clamp(1.9rem, 2.4vw, 2.75rem)', letterSpacing: '-0.03em' }}
                  >
                    {slide.headline.split('\n').map((line, li) => (
                      <span key={li} style={{ display: 'block' }}>{line}</span>
                    ))}
                  </h2>

                  {/* divider */}
                  <div className="w-10 h-0.5 rounded-full mb-5" style={{ background: slide.accent }} />

                  {/* sub */}
                  <p className="text-blue-100/80 leading-relaxed mb-8 max-w-xs" style={{ fontSize: '0.875rem' }}>
                    {slide.sub}
                  </p>

                  {/* CTA */}
                  <a
                    href={slide.href}
                    className="inline-flex items-center gap-2 font-semibold text-sm group/link"
                    style={{ color: slide.accent }}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── MOBILE: single-slide carousel ───────────────────── */}
      <div className="lg:hidden flex flex-col relative z-10" style={{ minHeight: 'clamp(480px, 60vh, 88vh)' }}>
        {/* slide track */}
        <div className="relative flex-1 overflow-hidden">
          <div
            className="flex h-full"
            style={{
              transform: `translateX(-${active * (100 / slides.length)}%)`,
              transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
              width: `${slides.length * 100}%`,
            }}
          >
            {slides.map((slide) => (
              <div
                key={slide.href}
                className="relative flex flex-col justify-end"
                style={{ width: `${100 / slides.length}%`, minHeight: 'clamp(480px, 60vh, 88vh)' }}
              >
                {/* color overlay only — bg image is shared on the section */}
                <div className="absolute inset-0" style={{ background: slide.bg }} />

                {/* top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 z-10" style={{ background: slide.accent }} />

                {/* content */}
                <div className="relative z-10 px-6 pb-16 pt-14">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: slide.accent }}>
                    {slide.name}
                  </p>
                  <div style={{ color: slide.accent }} className="mb-4">{slide.icon}</div>
                  <h2
                    className="font-extrabold text-white leading-none mb-3"
                    style={{ fontSize: 'clamp(1.8rem, 8vw, 2.8rem)', letterSpacing: '-0.03em' }}
                  >
                    {slide.headline.split('\n').map((line, li) => (
                      <span key={li} style={{ display: 'block' }}>{line}</span>
                    ))}
                  </h2>
                  <div className="w-10 h-0.5 rounded-full mb-4" style={{ background: slide.accent }} />
                  <p className="text-blue-100/80 leading-relaxed mb-6" style={{ fontSize: '0.875rem' }}>
                    {slide.sub}
                  </p>
                  <a
                    href={slide.href}
                    className="inline-flex items-center gap-2 font-semibold text-sm"
                    style={{ color: slide.accent }}
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* bottom controls: dots (left) + arrows + play/pause (right) */}
        <div className="absolute bottom-5 left-0 right-0 z-20 flex items-center justify-between px-5 lg:hidden">
          {/* dot indicators */}
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => manualNav(() => goTo(i))}
                aria-label={`Go to slide ${i + 1}`}
                className="transition-all duration-300"
                style={{
                  width: active === i ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: active === i ? slides[active].accent : 'rgba(255,255,255,0.35)',
                }}
              />
            ))}
          </div>

          {/* arrows + play/pause grouped right */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => manualNav(prev)}
              className="w-9 h-9 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors backdrop-blur-sm"
              aria-label="Previous slide"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
              </svg>
            </button>
            <button
              onClick={() => manualNav(next)}
              className="w-9 h-9 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors backdrop-blur-sm"
              aria-label="Next slide"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setPlaying((p) => !p)}
              className="w-9 h-9 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors backdrop-blur-sm"
              aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
            >
              {playing ? (
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
                  <path d="M5.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75A.75.75 0 007.25 3h-1.5zM12.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75h-1.5z" />
                </svg>
              ) : (
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ── Desktop bottom bar: dots + play/pause ───────────── */}
      <div className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-20 items-center gap-4">
        <div className="flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => manualNav(() => goTo(idx))}
              aria-label={`Go to slide ${idx + 1}`}
              className="transition-all duration-300"
              style={{
                width: active === idx ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: active === idx ? slides[active].accent : 'rgba(255,255,255,0.30)',
              }}
            />
          ))}
        </div>
        <button
          onClick={() => setPlaying((p) => !p)}
          className="w-8 h-8 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors backdrop-blur-sm"
          aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
        >
          {playing ? (
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
              <path d="M5.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75A.75.75 0 007.25 3h-1.5zM12.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75h-1.5z" />
            </svg>
          ) : (
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          )}
        </button>
      </div>

    </section>
  );
}
