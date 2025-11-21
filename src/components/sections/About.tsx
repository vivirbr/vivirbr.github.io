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
    <section id="about" className="py-24 bg-muted/30 section-with-shapes relative">
      {/* Section divider at top */}
      <div className="section-divider mb-20"></div>

      <div ref={elementRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold">
              Who We Are
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">Bridging data and action</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We build custom data solutions and leverage our international and fieldwork expertise to produce strategic
            reports and policy briefs. We also specialize in community engagement and advocacy to build stakeholder
            alignment.
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
                className={`bg-white shadow-modern hover-lift hover-glow-primary transition-all duration-300 border-0 ${
                  isOrange ? "border-l-accent-orange" : "border-l-accent-green"
                } ${isVisible ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-20 h-20 mx-auto mb-6 ${gradientClass} rounded-2xl flex items-center justify-center shadow-modern-lg`}
                  >
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-4">{capability.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{capability.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
