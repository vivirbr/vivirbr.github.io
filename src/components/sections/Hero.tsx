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
    <section className="pt-16 min-h-screen flex items-center circle-bg-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-foreground leading-tight">
                Translating complex{' '}
                <span className="text-primary">sustainability data</span>{' '}
                into actionable change
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Technology with impact. We combine analytical integrity with on-the-ground 
                experience and respect for diverse perspectives to create meaningful, lasting change.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="gradient-primary text-white hover:opacity-90 transition-smooth shadow-orange"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                onClick={scrollToServices}
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                Our Services
              </Button>
            </div>

          </div>

          {/* Right Content - Dynamic Animated Circles */}
          <div className="relative h-96 overflow-hidden">
            <div className="absolute inset-0">
              {/* Large primary ball */}
              <div className="absolute top-10 left-20 w-32 h-32 gradient-primary circle-accent opacity-40 animate-float"></div>
              
              {/* Medium orange balls */}
              <div className="absolute top-40 right-10 w-24 h-24 gradient-orange circle-accent opacity-50 animate-float-delayed"></div>
              <div className="absolute bottom-20 left-10 w-20 h-20 gradient-orange circle-accent opacity-45 animate-float-slow"></div>
              
              {/* Medium green balls */}
              <div className="absolute top-20 right-40 w-28 h-28 gradient-green circle-accent opacity-35 animate-float-slow"></div>
              <div className="absolute bottom-32 right-20 w-24 h-24 gradient-green circle-accent opacity-40 animate-float"></div>
              
              {/* Small accent balls */}
              <div className="absolute top-60 left-40 w-16 h-16 bg-primary circle-accent opacity-30 animate-float-delayed"></div>
              <div className="absolute bottom-10 left-32 w-14 h-14 bg-secondary circle-accent opacity-35 animate-float"></div>
              <div className="absolute top-32 left-60 w-12 h-12 bg-diversa-orange circle-accent opacity-30 animate-float-slow"></div>
              <div className="absolute bottom-40 right-32 w-18 h-18 bg-diversa-green circle-accent opacity-25 animate-float-delayed"></div>
              
              {/* Tiny accent balls */}
              <div className="absolute top-12 left-12 w-8 h-8 gradient-primary circle-accent opacity-25 animate-float"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};