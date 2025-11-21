import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Database, FileBarChart, Users, MapPin, Calendar } from "lucide-react";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Data Solutions", "Policy Analysis", "Community Engagement"];

  const projects = [
    {
      title: "Global Climate Data Dashboard",
      client: "International Environmental Organization",
      category: "Data Solutions",
      description:
        "Developed an interactive dashboard that aggregates climate data from 50+ countries, enabling real-time monitoring of environmental indicators and policy impacts.",
      technologies: ["Python", "D3.js", "PostgreSQL", "React"],
      outcomes: [
        "Reduced data analysis time by 75%",
        "Enabled evidence-based policy recommendations",
        "Improved stakeholder engagement through visual storytelling",
      ],
      timeline: "6 months",
      location: "Global",
    },
    {
      title: "Sustainable Agriculture Policy Framework",
      client: "Government Ministry",
      category: "Policy Analysis",
      description:
        "Conducted comprehensive analysis of agricultural sustainability practices and developed policy recommendations for national implementation.",
      technologies: ["Statistical Analysis", "GIS Mapping", "Stakeholder Interviews"],
      outcomes: [
        "Informed national agriculture strategy",
        "Identified 15 key policy interventions",
        "Projected 30% reduction in environmental impact",
      ],
      timeline: "8 months",
      location: "Latin America",
    },
    {
      title: "Community Water Management Platform",
      client: "Local Water Authority",
      category: "Data Solutions",
      description:
        "Built a comprehensive water resource management system that tracks usage, quality, and distribution across multiple communities.",
      technologies: ["IoT Integration", "Mobile App", "Cloud Infrastructure"],
      outcomes: [
        "Improved water distribution efficiency by 40%",
        "Reduced water waste through better monitoring",
        "Enhanced community participation in conservation",
      ],
      timeline: "4 months",
      location: "Sub-Saharan Africa",
    },
    {
      title: "Stakeholder Alignment Workshop Series",
      client: "International Development NGO",
      category: "Community Engagement",
      description:
        "Facilitated multi-stakeholder workshops to align diverse groups around shared sustainability goals and develop collaborative action plans.",
      technologies: ["Workshop Facilitation", "Conflict Resolution", "Action Planning"],
      outcomes: [
        "Achieved consensus among 12 diverse stakeholder groups",
        "Developed unified sustainability action plan",
        "Established ongoing collaboration framework",
      ],
      timeline: "3 months",
      location: "Southeast Asia",
    },
    {
      title: "Biodiversity Conservation Database",
      client: "Research Institute",
      category: "Data Solutions",
      description:
        "Designed and implemented a comprehensive database system for tracking biodiversity metrics across protected areas and conservation sites.",
      technologies: ["PostgreSQL", "R", "ArcGIS", "Python"],
      outcomes: [
        "Centralized data from 25 conservation sites",
        "Enabled predictive modeling for species protection",
        "Improved research collaboration and data sharing",
      ],
      timeline: "5 months",
      location: "Global",
    },
    {
      title: "Corporate Sustainability Reporting Toolkit",
      client: "Fortune 500 Company",
      category: "Policy Analysis",
      description:
        "Developed comprehensive toolkit and guidelines for ESG reporting alignment with international sustainability standards.",
      technologies: ["ESG Frameworks", "Data Visualization", "Compliance Mapping"],
      outcomes: [
        "Streamlined reporting process by 60%",
        "Achieved alignment with GRI and SASB standards",
        "Improved stakeholder transparency and trust",
      ],
      timeline: "7 months",
      location: "North America",
    },
    {
      title: "Indigenous Community Media Campaign",
      client: "Conservation Partnership",
      category: "Community Engagement",
      description:
        "Created culturally-sensitive media content and advocacy materials to amplify indigenous voices in forest conservation efforts.",
      technologies: ["Content Creation", "Social Media Strategy", "Cultural Consultation"],
      outcomes: [
        "Reached 2M+ people with conservation message",
        "Strengthened indigenous land rights advocacy",
        "Built lasting community partnerships",
      ],
      timeline: "5 months",
      location: "Amazon Region",
    },
    {
      title: "Urban Air Quality Monitoring System",
      client: "City Government",
      category: "Data Solutions",
      description:
        "Implemented IoT sensor network and data platform for real-time urban air quality monitoring and public health alerts.",
      technologies: ["IoT Sensors", "Real-time Analytics", "Public Dashboard"],
      outcomes: [
        "Deployed 50+ monitoring stations",
        "Provided real-time data to 500K+ residents",
        "Informed targeted pollution reduction policies",
      ],
      timeline: "9 months",
      location: "Asia",
    },
    {
      title: "Climate Adaptation Policy Brief Series",
      client: "Regional Government Alliance",
      category: "Policy Analysis",
      description:
        "Produced evidence-based policy briefs on climate adaptation strategies tailored to regional vulnerabilities and capacities.",
      technologies: ["Climate Modeling", "Economic Analysis", "Policy Research"],
      outcomes: [
        "Published 8 comprehensive policy briefs",
        "Influenced regional climate action plans",
        "Facilitated inter-governmental coordination",
      ],
      timeline: "6 months",
      location: "Caribbean",
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
              Our <span className="text-primary">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of successful projects that demonstrate our commitment to transforming complex
              sustainability data into actionable solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Projects Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

                      <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {project.timeline}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {project.location}
                        </div>
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
              <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-6">
                Ready to Start Your Project?
              </h3>
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
                <a href="/#services" className="inline-block">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                  >
                    View Our Services
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
