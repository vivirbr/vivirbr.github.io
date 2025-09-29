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

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-heading font-semibold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <div className="text-2xl font-heading font-semibold text-foreground">25+</div>
                <div className="text-sm text-muted-foreground">Clients</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-accent/20 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl font-heading font-semibold text-foreground">15+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative">
            <div className="relative z-10">
              {/* Large circular design inspired by logo */}
              <div className="w-96 h-96 mx-auto relative">
                <div className="absolute inset-0 gradient-primary circle-accent opacity-20"></div>
                <div className="absolute inset-8 bg-secondary circle-accent opacity-30"></div>
                <div className="absolute inset-16 bg-background circle-accent shadow-green"></div>
                <div className="absolute inset-24 gradient-green circle-accent opacity-80"></div>
                <div className="absolute inset-32 bg-diversa-cream circle-accent flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                      Data Driven
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Sustainable Solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-10 left-10 w-16 h-16 gradient-orange circle-accent opacity-60 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-12 h-12 gradient-green circle-accent opacity-70 animate-pulse delay-150"></div>
            <div className="absolute top-1/2 -left-6 w-8 h-8 bg-primary circle-accent opacity-50 animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};