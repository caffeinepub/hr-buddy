import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Schedule Demo', href: '#demo-booking' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 flex-shrink-0"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <img
              src="/assets/generated/hrbuddy-logo.dim_320x80.png"
              alt="HR Buddy"
              className="h-8 lg:h-10 w-auto"
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-accent ${
                  link.href === '#demo-booking'
                    ? 'text-primary-600 hover:text-primary-500 font-semibold'
                    : 'text-slate-600 hover:text-primary-500'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-600 hover:text-primary-500"
              onClick={() => handleNavClick('#email-capture')}
            >
              Sign In
            </Button>
            <Button
              size="sm"
              className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-5 rounded-full shadow-card transition-all hover:shadow-card-hover"
              onClick={() => handleNavClick('#email-capture')}
            >
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-md text-slate-600 hover:text-primary-500 hover:bg-accent transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-border py-4 px-2 space-y-1 shadow-lg">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`block w-full text-left px-4 py-3 text-sm font-medium hover:bg-accent rounded-md transition-colors ${
                  link.href === '#demo-booking'
                    ? 'text-primary-600 hover:text-primary-500 font-semibold'
                    : 'text-slate-700 hover:text-primary-500'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-border mt-3 space-y-2 px-2">
              <Button
                className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-full"
                onClick={() => handleNavClick('#email-capture')}
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
