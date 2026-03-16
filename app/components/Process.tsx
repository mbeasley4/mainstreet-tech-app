const steps = [
  {
    number: '1',
    title: 'Discovery Call',
    desc: 'We listen first. Tell us about your business and challenges — no sales pitch, just honest conversation.',
  },
  {
    number: '2',
    title: 'Custom Plan',
    desc: 'We put together a clear proposal with scope, timeline, and pricing — everything written in plain English.',
  },
  {
    number: '3',
    title: 'We Build & Deploy',
    desc: "Our team executes with regular updates. You're always in the loop — no surprises at delivery.",
  },
  {
    number: '4',
    title: 'Ongoing Support',
    desc: "We don't disappear after launch. Ongoing support plans keep everything running smoothly long-term.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-16 md:py-24 px-4 sm:px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-4">Simple, clear process</h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            From first call to ongoing support — here&apos;s exactly what to expect when you work with us.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-brand-200 via-brand-400 to-brand-200"></div>

          {steps.map(({ number, title, desc }) => (
            <div key={number} className="text-center relative">
              <div className="w-16 h-16 rounded-2xl hero-gradient flex items-center justify-center mx-auto mb-5 shadow-lg shadow-brand-200">
                <span className="text-white font-bold text-xl">{number}</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
