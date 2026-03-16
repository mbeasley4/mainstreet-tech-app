const testimonials = [
  {
    quote:
      "Main Street Tech took over our SQL Server environment and immediately identified three performance bottlenecks we'd been living with for years. Query times dropped by 60% within the first two weeks.",
    name: 'Sarah M.',
    role: 'VP of Operations, Regional Healthcare Network',
    initial: 'S',
  },
  {
    quote:
      'We brought in Main Street Tech for IT advisory during a major ERP migration. Their guidance prevented what would have been a catastrophic data integration failure. Worth far more than what we paid.',
    name: 'James T.',
    role: 'CTO, Mid-Market Logistics Company',
    initial: 'J',
  },
  {
    quote:
      'The analytics dashboards Main Street Tech built gave our executive team real-time visibility we\'d never had before. Decisions that used to take weeks now happen in hours.',
    name: 'Rachel K.',
    role: 'Director of Finance, Municipal Government',
    initial: 'R',
  },
];

function StarIcon() {
  return (
    <svg className="w-5 h-5 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">Client Stories</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-4">
            Trusted by organizations that can&apos;t afford downtime
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, role, initial }) => (
            <div key={name} className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100 card-hover">
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">&ldquo;{quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center font-bold text-brand-700">
                  {initial}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{name}</div>
                  <div className="text-slate-400 text-xs">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
