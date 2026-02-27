import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      "HR Buddy completely transformed how we handle recruitment. What used to take our team two weeks now takes two days. The AI shortlisting is incredibly accurate — we've hired three brilliant people in the last month alone.",
    name: 'Sarah Mitchell',
    title: 'Head of People & Culture',
    company: 'Brightwave Digital',
    initials: 'SM',
    avatarBg: 'bg-primary-100',
    avatarColor: 'text-primary-600',
  },
  {
    quote:
      "As a small business owner, I was skeptical about AI hiring tools. HR Buddy proved me wrong. It's intuitive, fair, and genuinely saves us hours every week. The bias-reduction features give me real confidence in our hiring decisions.",
    name: 'James Okafor',
    title: 'Founder & CEO',
    company: 'Nexus Consulting',
    initials: 'JO',
    avatarBg: 'bg-amber-100',
    avatarColor: 'text-amber-600',
  },
  {
    quote:
      "We were drowning in CVs for a recent campaign. HR Buddy processed 200+ applications overnight and gave us a shortlist of 12 exceptional candidates by morning. The insights dashboard is a game-changer for our HR team.",
    name: 'Priya Sharma',
    title: 'HR Manager',
    company: 'TechForward Solutions',
    initials: 'PS',
    avatarBg: 'bg-green-100',
    avatarColor: 'text-green-700',
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            Customer Stories
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 mb-4 leading-tight">
            Trusted by Hiring Teams{' '}
            <span className="text-gradient-teal">Everywhere</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Join hundreds of HR professionals and business owners who've transformed their hiring process with HR Buddy.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative bg-white border border-border rounded-2xl p-8 hover:shadow-card-hover hover:border-primary-200 transition-all duration-300 flex flex-col"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote size={40} className="text-primary-500" />
              </div>

              {/* Stars */}
              <StarRating />

              {/* Quote */}
              <blockquote className="mt-4 mb-6 text-slate-600 leading-relaxed text-sm flex-1">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className={`w-10 h-10 rounded-full ${testimonial.avatarBg} flex items-center justify-center flex-shrink-0`}>
                  <span className={`text-sm font-bold ${testimonial.avatarColor}`}>
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-xs text-slate-400">
                    {testimonial.title} · {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
