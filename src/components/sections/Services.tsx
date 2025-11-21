import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, FileBarChart, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
    <section id="services" className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10 section-with-circles relative">
      {/* Section divider at top */}
      <div className="section-divider mb-20"></div>
      
      <div ref={elementRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">Our services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions that bridge the gap between complex social and sustainability data and meaningful
            action on the ground.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const glowClass = service.color === "orange" 
              ? "hover-glow-orange" 
              : service.color === "green" 
                ? "hover-glow-green" 
                : "hover-glow-primary";
            const borderClass = service.color === "orange" 
              ? "gradient-border-orange" 
              : service.color === "green" 
                ? "gradient-border-green" 
                : "gradient-border-primary";
            return (
              <Card 
                key={index} 
                className={`border-0 ${borderClass} hover-lift ${glowClass} transition-all duration-300 group ${
                  isVisible ? 'animate-fade-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-20 h-20 mx-auto mb-4 circle-accent flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                      service.color === "orange"
                        ? "gradient-orange"
                        : service.color === "green"
                          ? "gradient-green"
                          : "gradient-primary"
                    }`}
                  >
                    <Icon className="h-10 w-10 text-white transition-transform duration-300 group-hover:rotate-12" />
                  </div>
                  <CardTitle className="text-xl font-heading font-semibold text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 text-sm text-left">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div
                          className={`w-2 h-2 circle-accent mt-2 ${
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

        <div className={`text-center ${isVisible ? 'animate-fade-up animation-delay-500' : 'opacity-0'}`}>
          <Link to="/services">
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300"
            >
              View our project portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
