import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart3, Users, Globe } from 'lucide-react';

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-16 min-h-screen flex items-center bg-background relative overflow-hidden">
      {/* Modern geometric shapes */}
      <div className="geometric-accent top-20 right-10 w-96 h-96 bg-diversa-orange opacity-[0.07] rounded-[60px] rotate-12 animate-float-slow"></div>
      <div className="geometric-accent bottom-32 left-10 w-80 h-80 bg-diversa-green opacity-[0.06] rounded-full animate-float-delayed"></div>
      <div className="geometric-accent top-40 left-1/3 w-64 h-64 bg-primary opacity-[0.04] rounded-[40px] -rotate-12 animate-float"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  Sustainability Data Experts
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-tight">
                Translating complex{' '}
                <span className="relative inline-block">
                  <span className="gradient-text">sustainability data</span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                    <path d="M0 4C50 1 100 1 150 4C150 4 175 6 200 4" stroke="url(#gradient)" strokeWidth="3" fill="none"/>
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(20, 90%, 42%)" />
                        <stop offset="100%" stopColor="hsl(164, 28%, 51%)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>{' '}
                into actionable change
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Technology with impact. We combine analytical integrity with on-the-ground 
                experience and respect for diverse perspectives to create meaningful, lasting change.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animation-delay-200 animate-fade-up">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="gradient-primary text-white hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-modern-lg text-base px-8 py-6 h-auto"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                onClick={scrollToServices}
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300 text-base px-8 py-6 h-auto"
              >
                Our Services
              </Button>
            </div>
          </div>

          {/* Right Content - Stats/Features */}
          <div className="grid grid-cols-2 gap-6 animation-delay-300 animate-fade-up">
            <div className="bg-white p-6 rounded-2xl shadow-modern hover-lift hover-glow-orange transition-all duration-300 border-l-accent-orange">
              <BarChart3 className="h-10 w-10 text-primary mb-3" />
              <div className="text-3xl font-bold text-foreground mb-1">Data</div>
              <div className="text-sm text-muted-foreground">Solutions & Analytics</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-modern hover-lift hover-glow-green transition-all duration-300 border-l-accent-green mt-8">
              <Users className="h-10 w-10 text-secondary mb-3" />
              <div className="text-3xl font-bold text-foreground mb-1">Community</div>
              <div className="text-sm text-muted-foreground">Engagement & Impact</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-modern hover-lift hover-glow-primary transition-all duration-300 border-l-accent-orange">
              <Globe className="h-10 w-10 text-primary mb-3" />
              <div className="text-3xl font-bold text-foreground mb-1">Global</div>
              <div className="text-sm text-muted-foreground">Reach & Expertise</div>
            </div>
            <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-2xl shadow-modern-lg hover-lift transition-all duration-300 mt-8">
              <div className="text-white">
                <div className="text-4xl font-bold mb-1">10+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};