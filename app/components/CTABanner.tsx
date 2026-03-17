export default function CTABanner() {
  return (
    <section className="py-14 md:py-20 px-4 sm:px-6 hero-gradient text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-5">Let&apos;s talk about your technology.</h2>
        <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
          Whether you&apos;re modernizing a legacy system, scaling your data infrastructure, or need a strategic IT roadmap — we&apos;re ready to help.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center bg-white text-brand-700 font-bold px-10 py-4 rounded-xl hover:bg-brand-50 transition-colors text-base shadow-xl"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
