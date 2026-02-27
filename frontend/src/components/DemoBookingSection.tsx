import { useState } from 'react';
import { Calendar, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useSubmitDemoRequest } from '@/hooks/useQueries';

const TEAM_SIZES = [
  { value: '1-10', label: '1–10 employees' },
  { value: '11-50', label: '11–50 employees' },
  { value: '51-200', label: '51–200 employees' },
  { value: '200+', label: '200+ employees' },
];

const PREFERRED_TIMES = [
  { value: 'morning', label: 'Morning (9am – 12pm)' },
  { value: 'afternoon', label: 'Afternoon (12pm – 5pm)' },
  { value: 'evening', label: 'Evening (5pm – 8pm)' },
  { value: 'flexible', label: 'Flexible / Any time' },
];

interface FormState {
  name: string;
  email: string;
  company: string;
  teamSize: string;
  preferredTime: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  teamSize?: string;
  preferredTime?: string;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = 'Full name is required.';
  if (!form.email.trim()) {
    errors.email = 'Work email is required.';
  } else if (!validateEmail(form.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!form.company.trim()) errors.company = 'Company name is required.';
  if (!form.teamSize) errors.teamSize = 'Please select your team size.';
  if (!form.preferredTime) errors.preferredTime = 'Please select a preferred time.';
  return errors;
}

export default function DemoBookingSection() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    teamSize: '',
    preferredTime: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});

  const { mutate, isPending, isSuccess, isError, error } = useSubmitDemoRequest();

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const newErrors = validate({ ...form, [field]: value });
      setErrors((prev) => ({ ...prev, [field]: newErrors[field] }));
    }
  };

  const handleBlur = (field: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const newErrors = validate(form);
    setErrors((prev) => ({ ...prev, [field]: newErrors[field] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = Object.keys(form).reduce(
      (acc, k) => ({ ...acc, [k]: true }),
      {} as Record<keyof FormState, boolean>,
    );
    setTouched(allTouched);
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    mutate({
      name: form.name.trim(),
      company: form.company.trim(),
      teamSize: form.teamSize,
      preferredTime: form.preferredTime,
      email: form.email.trim(),
    });
  };

  return (
    <section id="demo-booking" className="section-padding bg-slate-50">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            <Calendar size={13} />
            Book a Live Demo
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 mb-4 leading-tight">
            See HR Buddy in{' '}
            <span className="text-gradient-teal">Action</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            Schedule a personalised 30-minute demo with our team and discover how HR Buddy can transform your hiring workflow.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-card border border-border p-8 sm:p-10">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
                <CheckCircle size={32} className="text-primary-500" />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900">
                You're on the list!
              </h3>
              <p className="text-slate-500 max-w-sm leading-relaxed">
                Thanks! A member of our team will reach out shortly to confirm your demo. We look forward to speaking with you.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Row 1: Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <Label htmlFor="demo-name" className="text-sm font-semibold text-slate-700">
                    Full Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="demo-name"
                    type="text"
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    onBlur={() => handleBlur('name')}
                    disabled={isPending}
                    className={`rounded-xl ${errors.name ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive flex items-center gap-1 mt-1">
                      <AlertCircle size={11} /> {errors.name}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="demo-email" className="text-sm font-semibold text-slate-700">
                    Work Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="demo-email"
                    type="email"
                    placeholder="jane@company.com"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    onBlur={() => handleBlur('email')}
                    disabled={isPending}
                    className={`rounded-xl ${errors.email ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive flex items-center gap-1 mt-1">
                      <AlertCircle size={11} /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Company + Team Size */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <Label htmlFor="demo-company" className="text-sm font-semibold text-slate-700">
                    Company Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="demo-company"
                    type="text"
                    placeholder="Acme Corp"
                    value={form.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                    onBlur={() => handleBlur('company')}
                    disabled={isPending}
                    className={`rounded-xl ${errors.company ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                  />
                  {errors.company && (
                    <p className="text-xs text-destructive flex items-center gap-1 mt-1">
                      <AlertCircle size={11} /> {errors.company}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label className="text-sm font-semibold text-slate-700">
                    Team Size <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={form.teamSize}
                    onValueChange={(v) => handleChange('teamSize', v)}
                    disabled={isPending}
                  >
                    <SelectTrigger
                      className={`rounded-xl ${errors.teamSize ? 'border-destructive focus:ring-destructive' : ''}`}
                    >
                      <SelectValue placeholder="Select team size" />
                    </SelectTrigger>
                    <SelectContent>
                      {TEAM_SIZES.map((s) => (
                        <SelectItem key={s.value} value={s.value}>
                          {s.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.teamSize && (
                    <p className="text-xs text-destructive flex items-center gap-1 mt-1">
                      <AlertCircle size={11} /> {errors.teamSize}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 3: Preferred Contact Time */}
              <div className="space-y-1.5">
                <Label className="text-sm font-semibold text-slate-700">
                  Preferred Contact Time <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={form.preferredTime}
                  onValueChange={(v) => handleChange('preferredTime', v)}
                  disabled={isPending}
                >
                  <SelectTrigger
                    className={`rounded-xl ${errors.preferredTime ? 'border-destructive focus:ring-destructive' : ''}`}
                  >
                    <SelectValue placeholder="When works best for you?" />
                  </SelectTrigger>
                  <SelectContent>
                    {PREFERRED_TIMES.map((t) => (
                      <SelectItem key={t.value} value={t.value}>
                        {t.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.preferredTime && (
                  <p className="text-xs text-destructive flex items-center gap-1 mt-1">
                    <AlertCircle size={11} /> {errors.preferredTime}
                  </p>
                )}
              </div>

              {/* Backend error */}
              {isError && (
                <div className="flex items-start gap-2 bg-destructive/10 border border-destructive/20 text-destructive rounded-xl px-4 py-3 text-sm">
                  <AlertCircle size={15} className="mt-0.5 flex-shrink-0" />
                  <span>
                    {error instanceof Error
                      ? error.message
                      : 'Something went wrong. Please try again.'}
                  </span>
                </div>
              )}

              {/* Submit */}
              <Button
                type="submit"
                size="lg"
                disabled={isPending}
                className="w-full bg-primary-500 hover:bg-primary-400 text-white font-bold rounded-full shadow-glow hover:shadow-card-hover transition-all text-base"
              >
                {isPending ? (
                  <>
                    <Loader2 size={17} className="mr-2 animate-spin" />
                    Booking your demo…
                  </>
                ) : (
                  <>
                    <Calendar size={17} className="mr-2" />
                    Schedule My Demo
                  </>
                )}
              </Button>

              <p className="text-center text-xs text-slate-400">
                No credit card required. Our team typically responds within 1 business day.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
