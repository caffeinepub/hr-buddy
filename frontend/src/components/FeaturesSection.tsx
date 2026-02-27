import { Brain, ListChecks, Scale, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Brain,
    iconBg: 'bg-primary-100',
    iconColor: 'text-primary-500',
    image: '/assets/generated/icon-ai-analysis.dim_128x128.png',
    title: 'AI Candidate Analysis',
    description:
      'Our intelligent engine parses every CV in seconds, scoring candidates against your job criteria with remarkable accuracy. Get structured insights on skills, experience, and cultural fit — without the manual effort.',
    tag: 'Core AI',
    tagColor: 'bg-primary-50 text-primary-600 border-primary-200',
  },
  {
    icon: ListChecks,
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-500',
    image: '/assets/generated/icon-shortlisting.dim_128x128.png',
    title: 'Smart Shortlisting',
    description:
      'Automatically rank and shortlist your top candidates based on weighted criteria you define. HR Buddy surfaces the best matches first, so your team spends time on interviews — not inbox management.',
    tag: 'Automation',
    tagColor: 'bg-amber-50 text-amber-600 border-amber-200',
  },
  {
    icon: Scale,
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    image: '/assets/generated/icon-bias-reduction.dim_128x128.png',
    title: 'Bias-Reduction Tools',
    description:
      'Promote fair, equitable hiring with anonymised screening that removes identifying information during initial evaluation. Build diverse teams with confidence, backed by structured, objective assessments.',
    tag: 'Fair Hiring',
    tagColor: 'bg-green-50 text-green-700 border-green-200',
  },
  {
    icon: BarChart3,
    iconBg: 'bg-primary-100',
    iconColor: 'text-primary-500',
    image: '/assets/generated/icon-insights.dim_128x128.png',
    title: 'Hiring Insights',
    description:
      'Clear dashboards and data-driven recommendations help you understand your hiring pipeline at a glance. Track time-to-hire, candidate quality trends, and team performance to continuously improve your process.',
    tag: 'Analytics',
    tagColor: 'bg-primary-50 text-primary-600 border-primary-200',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 text-primary-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            Platform Features
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 mb-4 leading-tight">
            Everything You Need to{' '}
            <span className="text-gradient-teal">Hire Smarter</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            From first CV to final offer, HR Buddy streamlines every step of your recruitment workflow with intelligent automation and clear insights.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative bg-white border border-border rounded-2xl p-8 hover:shadow-card-hover hover:border-primary-200 transition-all duration-300"
              >
                {/* Top row: icon + tag */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-xl ${feature.iconBg} flex items-center justify-center flex-shrink-0`}>
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <Icon size={24} className={`${feature.iconColor} hidden`} />
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${feature.tagColor}`}>
                    {feature.tag}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {feature.description}
                </p>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-primary-400 to-primary-200 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
