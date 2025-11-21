import { Card, CardContent } from "@/components/ui/card";
import { Database, FileText, Users2, Target } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const About = () => {
  const { elementRef, isVisible } = useScrollReveal();
  const capabilities = [
    {
      icon: Database,
      title: "Data solutions",
      description:
        "We build methodologies, databases, dashboards, toolkits, apps, and platforms that transform raw information into clear insights.",
    },
    {
      icon: FileText,
      title: "Policy analysis",
      description:
        "We produce compelling reports, policy briefs, and white papers that guide your strategy with international and fieldwork expertise.",
    },
    {
      icon: Users2,
      title: "Community engagement",
      description:
        "From media content and advocacy campaigns to building critical alignment between diverse stakeholders.",
    },
    {
      icon: Target,
      title: "Impact focus",
      description:
        "We bridge the gap between complex data and action on the ground by navigating global, national, and local dimensions.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-secondary/10 via-muted/30 to-secondary/5 section-with-circles relative">
      {/* Section divider at top */}
      <div className="section-divider mb-20"></div>
      
      <div ref={elementRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">Who we are</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We bridge the gap between complex data and action on the ground by navigating global, national, and local
            dimensions. We build data solutions such as dashboards, databases, platforms, and apps, transforming raw
            information into clear insights. Based on our international and fieldwork expertise, we produce compelling
            reports, policy briefs, and white papers that guide your strategy. Beyond the data, we specialise in
            community engagement, from developing media content and advocacy campaigns to build critical alignment
            between diverse stakeholders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            const isOrange = index % 2 === 0;
            const gradientClass = isOrange ? "gradient-orange" : "gradient-green";
            const borderClass = isOrange ? "gradient-border-orange" : "gradient-border-green";
            
            return (
              <Card 
                key={index} 
                className={`border-0 ${borderClass} hover-lift hover-glow-primary transition-all duration-300 bg-card ${
                  isVisible ? 'animate-fade-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 ${gradientClass} circle-accent flex items-center justify-center`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-3">{capability.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{capability.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className={`mt-20 ${isVisible ? 'animate-scale-in animation-delay-400' : 'opacity-0'}`}>
          <Card className="border-0 gradient-border-primary hover-lift hover-glow-orange transition-all duration-300 bg-gradient-to-r from-primary/10 via-card to-secondary/10">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-6">
                Technology with impact
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                We combine analytical integrity with on-the-ground experience and respect for diverse perspectives to
                create meaningful, lasting change. Our approach ensures that complex sustainability data becomes the
                foundation for actionable strategies that work in the real world.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
