import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, FileBarChart, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Services = () => {
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
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            return (
              <Card key={index} className="border-border hover:shadow-lg transition-smooth group">
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-20 h-20 mx-auto mb-4 circle-accent flex items-center justify-center ${
                      service.color === "orange"
                        ? "gradient-orange"
                        : service.color === "green"
                          ? "gradient-green"
                          : "gradient-primary"
                    }`}
                  >
                    <Icon className="h-10 w-10 text-white" />
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

        <div className="text-center">
          <Link to="/services">
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
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
