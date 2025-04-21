
import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import ExpertiseOverview from "@/components/sections/ExpertiseOverview";
import ValuesSection from "@/components/sections/ValuesSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TeamSection from "@/components/sections/TeamSection";
import ClientsSection from "@/components/sections/ClientsSection";
import CtaSection from "@/components/sections/CtaSection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ExpertiseOverview />
      <ValuesSection />
      <ServicesSection />
      <TeamSection />
      <ClientsSection />
      <CtaSection />
    </Layout>
  );
};

export default Index;
