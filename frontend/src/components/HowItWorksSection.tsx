import { Upload, Cpu, CheckSquare, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    number: '01',
    icon: Upload,
    title: 'Upload & Define',
    description:
      'Upload your CVs in bulk and define your job criteria — required skills, experience levels, and must-have qualifications. HR Buddy learns your preferences instantly.',
    color: 'text-primary-500',
    bg: 'bg-primary-50',
    border: 'border-primary-200',
  },
  {
    number: '02',
    icon: Cpu,
    title: 'AI Screens & Ranks',
    description:
      "HR Buddy's AI engine analyses every application, scores candidates against your criteria, removes bias, and automatically builds a ranked shortlist — in minutes, not days.",
    color: 'text-amber-500',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
  },
  {
    number: '03',
    icon: CheckSquare,
    title: 'Review & Decide',
    description:
      'Review your curated shortlist with clear AI-generated summaries and scores. Compare candidates side-by-side and make confident, data-backed hiring decisions with ease.',
    color: 'text-green-600',
    bg: 'bg-green-50',
    border: 'border-green-200',
  },
];

export default function HowItWorksSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="how-it-works" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 text-primary-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            Simple Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 mb-4 leading-tight">
            From CVs to Shortlist{' '}
            <span className="text-gradient-teal">in 3 Simple Steps</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            No complex setup. No steep learning curve. HR Buddy gets you from job posting to confident hiring decision faster than ever before.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Desktop connector line */}
          <div className="hidden lg:block absolute top-16 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-0.5 bg-gradient-to-r from-primary-200 via-amber-200 to-green-200" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative flex flex-col items-center lg:items-start text-center lg:text-left">
                  {/* Mobile connector */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center w-full my-4">
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-0.5 h-6 bg-primary-200" />
                        <ArrowRight size={16} className="text-primary-300 rotate-90" />
                      </div>
                    </div>
                  )}

                  {/* Step card */}
                  <div className={`relative w-full bg-white border ${step.border} rounded-2xl p-8 shadow-xs hover:shadow-card transition-all duration-300`}>
                    {/* Number badge */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${step.bg} border ${step.border} mb-5`}>
                      <span className={`text-lg font-heading font-extrabold ${step.color}`}>{step.number}</span>
                    </div>

                    {/* Icon */}
                    <div className={`w-10 h-10 rounded-lg ${step.bg} flex items-center justify-center mb-4`}>
                      <Icon size={20} className={step.color} />
                    </div>

                    <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-sm">
                      {step.description}
                    </p>

                    {/* Desktop arrow connector */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white border border-border rounded-full items-center justify-center shadow-xs">
                        <ArrowRight size={14} className="text-primary-400" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Button
            size="lg"
            className="bg-primary-500 hover:bg-primary-600 text-white font-bold px-10 rounded-full shadow-card hover:shadow-card-hover transition-all"
            onClick={() => scrollTo('#email-capture')}
          >
            Get Started Free
            <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
