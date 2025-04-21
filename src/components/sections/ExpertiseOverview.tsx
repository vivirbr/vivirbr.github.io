
import { BarChart, Database, Globe, Users, FileText, Folder } from "lucide-react";
import { ExpertiseCard } from "@/components/ui/expertise-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ExpertiseOverview = () => {
  const expertiseAreas = [
    {
      title: "Socio-Environmental Impact Assessment",
      description: "Specialized assessments related to international agricultural commodity markets, helping organizations understand and mitigate environmental impacts.",
      icon: <BarChart size={24} />,
    },
    {
      title: "Socio-Biodiversity Chains",
      description: "Understanding the relationship between communities/families and the environment, market access, and financial challenges for sustainable livelihoods.",
      icon: <Users size={24} />,
    },
    {
      title: "Human Rights in Supply Chains",
      description: "Analyzing and addressing human rights violations within international commodity chains, including labor issues and land disputes.",
      icon: <Globe size={24} />,
    },
    {
      title: "Data Science & Spatial Analysis",
      description: "Extensive capability in data science, spatial analysis, and producing complex spatial databases for environmental and social applications.",
      icon: <Database size={24} />,
    },
    {
      title: "Technology & Platforms",
      description: "Development of custom technology solutions including mobile apps, web platforms, and internal dashboards focused on democratizing data access.",
      icon: <Folder size={24} />,
    },
    {
      title: "Value-Driven Approach",
      description: "We prioritize deeply understanding client needs before developing solutions to deliver maximum value and impact.",
      icon: <FileText size={24} />,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Our Areas of Expertise"
          subtitle="Combining scientific knowledge, technical skills, and a deep understanding of socio-environmental challenges to deliver impactful solutions."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {expertiseAreas.map((area, index) => (
            <ExpertiseCard
              key={index}
              title={area.title}
              description={area.description}
              icon={area.icon}
            />
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="bg-diversa-teal hover:bg-diversa-teal/90">
            <Link to="/expertise">Learn More About Our Expertise</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseOverview;
