import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Database, FileBarChart, Users, ArrowUpRight } from "lucide-react";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Data Solutions", "Policy Analysis", "Community Engagement"];

  const projects = [
    {
      title: "Socioenvironmental Observatory",
      client: "ISPN & WWF",
      category: "Data Solutions",
      description:
        "We act as strategic facilitators of this civil society forum, responsible for governance and for the collection, organization, and intelligent processing of data that powers the Socioenvironmental Platform — an interactive system monitoring human rights violations, deforestation, and the expansion of industrial agriculture in Brazil.",
      technologies: ["Data Platform", "Governance", "Geospatial Data", "Due Diligence"],
      outcomes: [
        "Interactive platform monitoring human rights violations and deforestation",
        "Strengthened social oversight across value chains",
        "Support for corporate due diligence processes",
      ],
      link: "https://www.observatoriosocioambiental.com.br",
    },
    {
      title: "Do Pasto ao Prato",
      client: "Trase & Stockholm Environment Institute",
      category: "Community Engagement",
      description:
        "A citizen science initiative bringing transparency to the Brazilian beef supply chain. By scanning product labels at the supermarket, consumers uncover the environmental and social risks connected to the meat they buy. Diversa developed both the mobile app and the website, translating complex traceability data into an accessible tool.",
      technologies: ["Mobile App", "Web Platform", "Traceability", "Citizen Science"],
      outcomes: [
        "Consumers can scan labels to uncover environmental and social risks",
        "Complex traceability data translated into an accessible tool",
        "Empowers conscious consumption in the beef chain",
      ],
      link: "https://www.dopastoaoprato.com.br/",
    },
    {
      title: "Beef on Track",
      client: "Imaflora",
      category: "Data Solutions",
      description:
        "Beef on Track is an Imaflora initiative focused on transparency and good practices in the cattle ranching chain in the Brazilian Amazon. Diversa led the technical development of painel.boinalinha.org — from scientific structuring and data engineering to design and web development.",
      technologies: ["Geospatial", "Data Engineering", "Web Platform", "Cattle Chain"],
      outcomes: [
        "Interactive dashboard for monitoring the cattle chain in the Brazilian Amazon",
        "Complex geospatial data made accessible to companies, researchers, and policymakers",
      ],
      link: "https://painel.boinalinha.org/",
    },
    {
      title: "Human Rights Due Diligence for Commodity Chains",
      client: "WWF",
      category: "Policy Analysis",
      description:
        "In collaboration with WWF-Brazil, we developed an essential technical guide on Human Rights Due Diligence (HRDD) for companies operating in commodity chains in Brazil, highlighting the urgency of protecting vulnerable biomes like the Cerrado.",
      technologies: ["Policy Research", "Human Rights", "Public Data Mapping"],
      outcomes: [
        "Detailed mapping of Brazilian public data on agrarian issues, rural conflicts, and labor rights",
        "Practical guidance for private-sector accountability on human rights impacts",
      ],
      link: "https://wwfbrnew.awsassets.panda.org/downloads/devida-diligencia-em-direitos-humanos-para-cadeias-de-commodities.pdf",
    },
    {
      title: "Soy Silo Detection with AI",
      client: "Trase & Global Canopy",
      category: "Data Solutions",
      description:
        "We supported Trase in using Artificial Intelligence and advanced geospatial models to close the traceability gap in Brazil's soy supply chain, through automated workflows analyzing high-resolution satellite imagery.",
      technologies: ["AI / Machine Learning", "Satellite Imagery", "Traceability"],
      outcomes: [
        "Expanded the known universe of soy facilities to over 9,300 units",
        "Detected hundreds of silos in remote areas missing from official records",
        "Enabled governments and companies to identify indirect deforestation risks",
      ],
      link: "https://trase.earth/insights/trase-uses-ai-to-close-the-traceability-gap-in-the-soy-supply-chain",
    },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Data Solutions":
        return Database;
      case "Policy Analysis":
        return FileBarChart;
      case "Community Engagement":
        return Users;
      default:
        return Database;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Data Solutions":
        return "gradient-orange";
      case "Policy Analysis":
        return "gradient-green";
      case "Community Engagement":
        return "gradient-primary";
      default:
        return "gradient-primary";
    }
  };

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 circle-bg-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Data solutions, policy analysis, and community engagement — see how our services come to life in real
              projects delivered with our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Projects Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground text-center mb-10">
            Selected <span className="gradient-text">case studies</span>
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => {
              const Icon = category !== "All" ? getCategoryIcon(category) : null;
              return (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`${
                    selectedCategory === category
                      ? "gradient-primary text-white"
                      : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  } transition-smooth`}
                >
                  {Icon && <Icon className="h-4 w-4 mr-2" />}
                  {category}
                </Button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => {
              const Icon = getCategoryIcon(project.category);
              const colorClass = getCategoryColor(project.category);

              return (
                <Card key={index} className="border-border hover:shadow-lg transition-smooth">
                  <CardHeader>
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`w-12 h-12 ${colorClass} circle-accent flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <Badge className="mb-2">{project.category}</Badge>
                        <CardTitle className="text-xl font-heading font-semibold text-foreground">
                          {project.title}
                        </CardTitle>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">Client: {project.client}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-heading font-semibold text-foreground text-sm mb-2">
                          Technologies & Methods
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-heading font-semibold text-foreground text-sm mb-2">Key Outcomes</h4>
                        <ul className="space-y-1">
                          {project.outcomes.map((outcome, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 circle-accent bg-primary mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground text-sm">{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-border">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                        >
                          Learn more about this project
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                Every successful project starts with understanding your unique challenges and objectives. Let's discuss
                how we can help transform your sustainability data into actionable solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:info@diversa.earth?subject=Project Consultation Request" className="inline-block">
                  <Button size="lg" className="gradient-primary text-white hover:opacity-90 transition-smooth">
                    Get in touch
                  </Button>
                </a>
                <a href="/portfolio" className="inline-block">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                  >
                    View Our Portfolio
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
