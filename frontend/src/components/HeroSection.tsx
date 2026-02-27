import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const trustPoints = [
  'No credit card required',
  'Setup in under 5 minutes',
  'Cancel anytime',
];

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-hero-pattern overflow-hidden pt-20"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary-100 opacity-60 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-amber-100 opacity-50 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary-50 opacity-40 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 text-primary-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              AI-Powered Recruitment Platform
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
              Hire Smarter.{' '}
              <span className="text-gradient-teal">Screen Faster.</span>{' '}
              Decide with Confidence.
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-slate-500 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              HR Buddy automates CV screening, intelligently shortlists top candidates, and delivers clear hiring insights — so your team can focus on what matters most: finding the right people.
            </p>

            {/* Trust points */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 mb-10">
              {trustPoints.map((point) => (
                <span key={point} className="flex items-center gap-1.5 text-sm text-slate-500">
                  <CheckCircle2 size={15} className="text-primary-500 flex-shrink-0" />
                  {point}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary-500 hover:bg-primary-600 text-white font-bold px-8 py-4 rounded-full shadow-card hover:shadow-card-hover transition-all text-base group"
                onClick={() => scrollTo('#email-capture')}
              >
                Start Free Trial
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-slate-200 text-slate-700 hover:border-primary-300 hover:text-primary-600 font-semibold px-8 py-4 rounded-full transition-all text-base group"
                onClick={() => scrollTo('#how-it-works')}
              >
                <Play size={16} className="mr-2 text-primary-500" />
                See How It Works
              </Button>
            </div>
          </div>

          {/* Right: Dashboard Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-2xl">
              {/* Glow effect behind image */}
              <div className="absolute inset-4 bg-primary-200 rounded-3xl blur-2xl opacity-30" />
              <div className="relative rounded-2xl overflow-hidden shadow-[0_24px_80px_-12px_oklch(0.48_0.12_195_/_0.3)] border border-primary-100">
                <img
                  src="/assets/generated/hero-dashboard.dim_1200x700.png"
                  alt="HR Buddy Dashboard — AI-powered candidate screening interface"
                  className="w-full h-auto block"
                />
              </div>
              {/* Floating stat badge */}
              <div className="absolute -bottom-4 -left-4 sm:-left-8 bg-white rounded-2xl shadow-card border border-border px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-500 font-bold text-sm">75%</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-800">Faster Screening</p>
                  <p className="text-xs text-slate-400">vs. manual review</p>
                </div>
              </div>
              {/* Floating accuracy badge */}
              <div className="absolute -top-4 -right-4 sm:-right-8 bg-white rounded-2xl shadow-card border border-border px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-600 font-bold text-sm">92%</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-800">Satisfaction Rate</p>
                  <p className="text-xs text-slate-400">hiring managers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
