import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import MetricsSection from './components/MetricsSection';
import TestimonialsSection from './components/TestimonialsSection';
import PartnersSection from './components/PartnersSection';
import CTASection from './components/CTASection';
import DemoBookingSection from './components/DemoBookingSection';
import EmailCaptureSection from './components/EmailCaptureSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <MetricsSection />
        <TestimonialsSection />
        <PartnersSection />
        <CTASection />
        <DemoBookingSection />
        <EmailCaptureSection />
      </main>
      <Footer />
    </div>
  );
}
