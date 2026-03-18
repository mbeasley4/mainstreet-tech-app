import Image from 'next/image';

interface PageHeroButton {
  label: string;
  href: string;
}

interface PageHeroProps {
  serviceName: string;
  headline: string;
  headlineAccent: string;
  description: string;
  primaryButton?: PageHeroButton;
  secondaryButton?: PageHeroButton;
  backgroundImage?: string;
  showBreadcrumb?: boolean;
  breadcrumbParent?: { label: string; href: string };
}

function ArrowIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

export default function PageHero({
  serviceName,
  headline,
  headlineAccent,
  description,
  primaryButton,
  secondaryButton = { label: 'All Services', href: '/services' },
  backgroundImage,
  showBreadcrumb = true,
  breadcrumbParent = { label: 'Services', href: '/services' },
}: PageHeroProps) {
  return (
    <section className="hero-gradient min-h-[580px] pt-36 pb-16 px-6 text-white relative overflow-hidden">
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover opacity-10 mix-blend-overlay"
          priority
          aria-hidden="true"
        />
      )}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-0 right-10 w-72 h-72 rounded-full bg-brand-400 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-brand-800 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto relative">
        {showBreadcrumb && (
          <div className="flex items-center gap-2 mb-4">
            <a href={breadcrumbParent.href} className="text-blue-200 hover:text-white text-sm transition-colors">{breadcrumbParent.label}</a>
            <span className="text-white/30 text-sm">/</span>
            <span className="text-sm text-white/70">{serviceName}</span>
          </div>
        )}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-medium mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          {serviceName}
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
          {headline}<br />
          <span className="text-brand-300">{headlineAccent}</span>
        </h1>
        <p className="text-blue-100 leading-relaxed max-w-2xl mb-8">
          {description}
        </p>
        {primaryButton && (
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={primaryButton.href}
              className="inline-flex items-center gap-2 bg-white text-brand-700 font-bold px-8 py-3.5 rounded-xl hover:bg-brand-50 transition-colors text-sm shadow-lg"
            >
              {primaryButton.label}
              <ArrowIcon className="w-4 h-4" />
            </a>
            <a
              href={secondaryButton.href}
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-colors text-sm"
            >
              {secondaryButton.label}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
