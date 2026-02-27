import { useState } from 'react';
import { CheckCircle2, Loader2, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCaptureEmail } from '@/hooks/useQueries';

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export default function EmailCaptureSection() {
  const [email, setEmail] = useState('');
  const [validationError, setValidationError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const { mutate: captureEmail, isPending, isError, error } = useCaptureEmail();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    if (!email.trim()) {
      setValidationError('Please enter your email address.');
      return;
    }
    if (!isValidEmail(email)) {
      setValidationError('Please enter a valid email address.');
      return;
    }

    captureEmail(email.trim(), {
      onSuccess: () => {
        setSubmitted(true);
        setEmail('');
      },
      onError: () => {
        // error handled via isError state
      },
    });
  };

  return (
    <section id="email-capture" className="section-padding bg-slate-50">
      <div className="max-w-2xl mx-auto text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-100 mb-6">
          <Mail size={28} className="text-primary-500" />
        </div>

        <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 text-primary-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
          Free Early Access
        </div>

        <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 mb-4 leading-tight">
          Get Early Access to{' '}
          <span className="text-gradient-teal">HR Buddy</span>
        </h2>
        <p className="text-lg text-slate-500 mb-10 leading-relaxed">
          Be among the first to experience smarter hiring. Enter your work email and we'll reach out with your free trial details.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-8">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 size={32} className="text-green-600" />
            </div>
            <div>
              <p className="text-xl font-heading font-bold text-slate-900 mb-1">
                You're on the list! 🎉
              </p>
              <p className="text-slate-500">
                Thanks! We'll be in touch soon with your early access details.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (validationError) setValidationError('');
                  }}
                  className={`h-12 rounded-full px-5 border-2 text-sm focus-visible:ring-primary-300 ${
                    validationError ? 'border-destructive' : 'border-border focus:border-primary-300'
                  }`}
                  disabled={isPending}
                  aria-label="Email address"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={isPending}
                className="h-12 bg-primary-500 hover:bg-primary-600 text-white font-bold px-8 rounded-full shadow-card hover:shadow-card-hover transition-all whitespace-nowrap"
              >
                {isPending ? (
                  <>
                    <Loader2 size={16} className="mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Get Early Access
                    <ArrowRight size={16} className="ml-2" />
                  </>
                )}
              </Button>
            </div>

            {/* Validation error */}
            {validationError && (
              <p className="mt-3 text-sm text-destructive text-center">{validationError}</p>
            )}

            {/* Backend error */}
            {isError && !validationError && (
              <p className="mt-3 text-sm text-destructive text-center">
                {error instanceof Error ? error.message : 'Something went wrong. Please try again.'}
              </p>
            )}

            <p className="mt-4 text-xs text-slate-400">
              No spam, ever. Unsubscribe at any time. By signing up you agree to our Privacy Policy.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
