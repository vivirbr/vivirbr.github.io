import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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
    <section className="pt-16 min-h-screen flex items-center relative overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full bg-diversa-orange/20 blur-[120px] animate-float-slow" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-diversa-green/25 blur-[100px] animate-float-delayed" />
          <div className="absolute top-[30%] left-[20%] w-[40%] h-[40%] rounded-full bg-diversa-orange/10 blur-[80px] animate-float" />
        </div>
        {/* Subtle dot grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--foreground) / 0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          {/* Badge */}
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/8 border border-primary/15 text-primary rounded-full text-sm font-semibold backdrop-blur-sm">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Sustainability Data Experts
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-semibold text-foreground leading-[1.05] animate-fade-up animation-delay-100">
            Translating complex{' '}
            <span className="gradient-text">sustainability data</span>{' '}
            into actionable change
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto animate-fade-up animation-delay-200">
            We combine analytical integrity with on-the-ground 
            experience and respect for diverse perspectives to create meaningful, lasting change.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-300">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="gradient-primary text-white hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-modern-lg text-base px-10 py-7 h-auto rounded-full"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={scrollToServices}
              variant="outline" 
              size="lg"
              className="border-2 border-foreground/15 text-foreground hover:bg-foreground hover:text-background hover:scale-105 transition-all duration-300 text-base px-10 py-7 h-auto rounded-full backdrop-blur-sm"
            >
              Our Services
            </Button>
          </div>

          {/* Stats bar */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 pt-8 animate-fade-up animation-delay-400">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground">10+</div>
              <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-border hidden md:block" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground">3</div>
              <div className="text-sm text-muted-foreground mt-1">Core Services</div>
            </div>
            <div className="w-px h-12 bg-border hidden md:block" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text text-3xl md:text-4xl font-bold">Global</div>
              <div className="text-sm text-muted-foreground mt-1">Reach & Expertise</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-muted/30 to-transparent pointer-events-none" />
    </section>
  );
};
