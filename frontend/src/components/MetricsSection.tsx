const metrics = [
  {
    value: '75%',
    label: 'Faster Screening',
    sublabel: 'vs. manual CV review',
    color: 'text-primary-400',
  },
  {
    value: '10K+',
    label: 'Candidates Processed',
    sublabel: 'across all industries',
    color: 'text-amber-400',
  },
  {
    value: '92%',
    label: 'Hiring Manager Satisfaction',
    sublabel: 'based on user surveys',
    color: 'text-primary-300',
  },
  {
    value: '3×',
    label: 'Shortlisting Accuracy',
    sublabel: 'more precise than manual',
    color: 'text-amber-300',
  },
];

export default function MetricsSection() {
  return (
    <section id="metrics" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary-500 opacity-5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-amber-400 opacity-5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-primary-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Proven Results
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
            Numbers That Speak for Themselves
          </h2>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="text-center p-6 lg:p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 transition-colors"
            >
              <div className={`text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold mb-2 ${metric.color}`}>
                {metric.value}
              </div>
              <div className="text-white font-semibold text-sm sm:text-base mb-1">
                {metric.label}
              </div>
              <div className="text-slate-400 text-xs sm:text-sm">
                {metric.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
