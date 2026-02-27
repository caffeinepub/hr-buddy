import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="relative bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900 rounded-3xl overflow-hidden px-8 py-16 sm:px-16 sm:py-20 text-center">
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-primary-500 opacity-10 blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-amber-400 opacity-10 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_oklch(0.48_0.12_195_/_0.15)_0%,_transparent_70%)]" />
          </div>

          {/* Content */}
          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-primary-500/20 border border-primary-400/30 text-primary-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
              Limited Early Access — Free for 30 Days
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white mb-5 leading-tight">
              Ready to Transform Your{' '}
              <span className="text-gradient-teal">Hiring Process?</span>
            </h2>

            <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto leading-relaxed">
              Join hundreds of forward-thinking companies already using HR Buddy to hire smarter, faster, and more fairly. No credit card required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary-500 hover:bg-primary-400 text-white font-bold px-10 py-4 rounded-full shadow-glow hover:shadow-card-hover transition-all text-base group"
                onClick={() => scrollTo('#email-capture')}
              >
                Start Your Free Trial
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 font-semibold px-10 py-4 rounded-full transition-all text-base"
                onClick={() => scrollTo('#demo-booking')}
              >
                <Calendar size={16} className="mr-2" />
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
