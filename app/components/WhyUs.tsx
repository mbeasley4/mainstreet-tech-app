const checkmarks = [
  {
    title: 'Transparent, fixed-scope pricing',
    desc: 'No surprise invoices. Every engagement starts with a clear scope, timeline, and cost.',
  },
  {
    title: 'Direct access to your team',
    desc: 'Reach the people actually doing the work. No account managers standing in the way.',
  },
  {
    title: 'Vendor-agnostic recommendations',
    desc: "We recommend what's right for your environment — not whatever pays us the best referral fee.",
  },
  {
    title: "Built for your industry's compliance needs",
    desc: 'Security, audit trails, and documentation standards that hold up under scrutiny.',
  },
];

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-brand-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function WhyUs() {
  return (
    <section id="why-us" className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Visual */}
          <div className="relative">
            <div className="hero-gradient rounded-3xl p-10 text-white">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { stat: '24/7', label: 'Support Available' },
                  { stat: '<2hr', label: 'Avg. Response Time' },
                  { stat: 'No', label: 'Long-term Contracts' },
                  { stat: 'Local', label: 'Team, Always' },
                ].map(({ stat, label }) => (
                  <div key={label} className="bg-white/10 rounded-2xl p-6 text-center">
                    <div className="text-4xl font-extrabold">{stat}</div>
                    <div className="text-blue-200 text-sm mt-1">{label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 border-t border-white/20 pt-6 text-center">
                <p className="text-blue-100 text-sm">&ldquo;We treat your business like it&apos;s our own — because our reputation depends on it.&rdquo;</p>
                <p className="text-white font-semibold mt-2">— Main Street Tech Team</p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl p-4 hidden sm:flex items-center gap-3 border border-slate-100">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-slate-900 text-sm">5-star rated</div>
                <div className="text-slate-400 text-xs">on Google Reviews</div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">Why Main Street Tech</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-6">Senior expertise. No handoffs to juniors.</h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Large consulting firms load up on junior staff after the sale. At Main Street Tech, experienced practitioners lead and deliver every engagement — from day one through go-live.
            </p>
            <ul className="space-y-5">
              {checkmarks.map(({ title, desc }) => (
                <li key={title} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckIcon />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{title}</div>
                    <div className="text-slate-500 text-sm mt-0.5">{desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
