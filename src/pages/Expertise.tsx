
import Layout from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { BarChart, Database, Globe, Users, FileText, Folder } from "lucide-react";
import { ExpertiseCard } from "@/components/ui/expertise-card";
import CtaSection from "@/components/sections/CtaSection";

const Expertise = () => {
  const expertiseAreas = [
    {
      title: "Socio-Environmental Impact Assessment",
      description: "We specialize in comprehensive assessments related to international agricultural commodity markets. Our team evaluates the complex interplay of environmental impacts, social consequences, and economic factors to provide a complete picture of sustainability challenges and opportunities.",
      icon: <BarChart size={24} />,
    },
    {
      title: "Socio-Biodiversity Chains",
      description: "Our approach focuses on understanding the relationship between communities/families and their environment, addressing challenges related to market access, financial barriers, land tenure, and security for dignified livelihoods. We help build sustainable value chains that benefit both people and nature.",
      icon: <Users size={24} />,
    },
    {
      title: "Human Rights in Supply Chains",
      description: "We analyze and address human rights violations within international commodity chains, including violence, slave labor, water contamination, and land disputes. Our work helps organizations identify risks, implement safeguards, and ensure ethical practices throughout their supply networks.",
      icon: <Globe size={24} />,
    },
    {
      title: "Data Science & Spatial Analysis",
      description: "With extensive capability in data science and spatial analysis, we produce complex spatial databases including land use/cover mapping, vector data for protected areas, indigenous lands, conservation units, and cadastral data. Our analytical approach brings clarity to complex environmental and social data.",
      icon: <Database size={24} />,
    },
    {
      title: "Technology & Platforms",
      description: "We develop custom technology solutions that meet specific client needs. In the last 2 years alone, we've built 5 platforms, including a mobile app (Android/iOS), 3 web platforms, and an internal dashboard. Our focus is on democratizing data access through intuitive technological interfaces.",
      icon: <Folder size={24} />,
    },
    {
      title: "Value-Driven Approach",
      description: "Our consulting approach prioritizes deeply understanding client needs, both external project goals and internal company alignment challenges, before developing solutions. This ensures we deliver maximum value and create meaningful impact aligned with organizational objectives.",
      icon: <FileText size={24} />,
    },
  ];

  return (
    <Layout>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Our Areas of Expertise"
            subtitle="At Diversa, we combine scientific knowledge, technical skills, and a deep understanding of socio-environmental challenges to deliver impactful solutions across multiple domains."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {expertiseAreas.map((area, index) => (
              <ExpertiseCard
                key={index}
                title={area.title}
                description={area.description}
                icon={area.icon}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Our Approach"
            subtitle="How we combine our areas of expertise to deliver comprehensive solutions"
          />

          <div className="max-w-3xl">
            <p className="text-lg text-gray-700 mb-6">
              At Diversa, we take a holistic approach to socio-environmental consulting. Rather than treating environmental and social challenges as separate issues, we recognize their inherent interconnection and develop integrated solutions that address multiple dimensions simultaneously.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our process begins with deep listening and understanding. Before proposing any solution, we work closely with clients to comprehend their specific needs, goals, and constraints. This foundation of understanding allows us to design tailored approaches that deliver maximum value.
            </p>
            <p className="text-lg text-gray-700">
              We leverage our diverse expertise across impact assessment, human rights, data science, and technology development to create comprehensive strategies that not only address immediate challenges but build long-term sustainability and resilience.
            </p>
          </div>
        </div>
      </div>

      <CtaSection />
    </Layout>
  );
};

export default Expertise;
