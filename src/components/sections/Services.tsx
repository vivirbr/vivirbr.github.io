import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, FileBarChart, Users } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Services = () => {
  const { elementRef, isVisible } = useScrollReveal();
  const services = [
    {
      icon: Database,
      title: "Data solutions",
      description: "Comprehensive data services that transform information into actionable insights",
      features: ["Methodologies", "Databases", "Dashboards", "Toolkits", "Apps and platforms"],
      color: "orange",
    },
    {
      icon: FileBarChart,
      title: "Policy analysis",
      description: "Evidence-based research and analysis for informed decision-making",
      features: ["Reports", "Guidelines", "Policy briefs", "White papers", "Articles"],
      color: "green",
    },
    {
      icon: Users,
      title: "Community engagement",
      description: "Building bridges between stakeholders for sustainable impact",
      features: ["Letters to policy makers", "Workshop facilitation", "Media content", "Alignment building"],
      color: "primary",
    },
  ];

  return (
    <section id="services" className="py-24 bg-background section-with-shapes relative">
      {/* Section divider at top */}
      <div className="section-divider mb-20"></div>

      <div ref={elementRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">What We Do</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">Our services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions that bridge the gap between complex social and sustainability data and meaningful
            action on the ground.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const glowClass =
              service.color === "orange"
                ? "hover-glow-orange"
                : service.color === "green"
                  ? "hover-glow-green"
                  : "hover-glow-primary";
            const borderClass =
              service.color === "orange"
                ? "gradient-border-orange"
                : service.color === "green"
                  ? "gradient-border-green"
                  : "gradient-border-primary";
            return (
              <Card
                key={index}
                className={`bg-white shadow-modern-lg hover-lift ${glowClass} transition-all duration-300 group border-0 ${borderClass} ${
                  isVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="text-center pb-6 pt-8">
                  <div
                    className={`w-24 h-24 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-modern-lg ${
                      service.color === "orange"
                        ? "gradient-orange"
                        : service.color === "green"
                          ? "gradient-green"
                          : "gradient-primary"
                    }`}
                  >
                    <Icon className="h-12 w-12 text-white transition-transform duration-300 group-hover:rotate-12" />
                  </div>
                  <CardTitle className="text-2xl font-heading font-bold text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center px-8 pb-8">
                  <p className="text-muted-foreground mb-8 leading-relaxed text-base">{service.description}</p>
                  <ul className="space-y-3 text-sm text-left">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div
                          className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                            service.color === "orange"
                              ? "bg-diversa-orange"
                              : service.color === "green"
                                ? "bg-diversa-green"
                                : "bg-primary"
                          }`}
                        ></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};
