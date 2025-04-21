
import Layout from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/section-heading";
import CtaSection from "@/components/sections/CtaSection";

const Technology = () => {
  const technologies = [
    {
      title: "Mobile Apps",
      description: "Custom Android and iOS applications designed for field data collection, community engagement, and on-the-go access to critical information.",
      image: "https://placekitten.com/600/400",
      count: "1"
    },
    {
      title: "Web Platforms",
      description: "Sophisticated web-based platforms that democratize access to socio-environmental data, enable collaboration, and support decision-making processes.",
      image: "https://placekitten.com/601/400",
      count: "3"
    },
    {
      title: "Internal Dashboards",
      description: "Bespoke dashboards for monitoring KPIs, project delivery milestones, and impact metrics, providing real-time visibility into performance.",
      image: "https://placekitten.com/602/400",
      count: "1"
    }
  ];

  const capabilities = [
    {
      title: "Data Science",
      description: "Advanced statistical analysis, machine learning, and predictive modeling to extract meaningful insights from complex datasets.",
      examples: ["Predictive modeling for deforestation risk", "Statistical analysis of social indicators", "Pattern recognition in environmental data"]
    },
    {
      title: "Spatial Analysis",
      description: "Geographic Information System (GIS) expertise for analyzing spatial relationships, creating detailed maps, and visualizing geographical data.",
      examples: ["Land use/cover mapping", "Protected area analysis", "Indigenous land mapping", "Conservation unit delineation"]
    },
    {
      title: "UX/UI Design",
      description: "Human-centered design approaches that ensure our technology solutions are intuitive, accessible, and effective for all users.",
      examples: ["User research with diverse stakeholders", "Inclusive design practices", "Multilingual interface development"]
    },
    {
      title: "Full-Stack Development",
      description: "Comprehensive development capabilities from database architecture to frontend interfaces, ensuring seamless integration across all system components.",
      examples: ["Custom APIs for data integration", "Responsive web applications", "Cross-platform mobile development"]
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-6 py-16">
        <SectionHeading
          title="Our Technology Solutions"
          subtitle="Custom platforms and applications that democratize data access and empower decision-making"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={tech.image} 
                  alt={tech.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-diversa-orange text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  {tech.count}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-3">{tech.title}</h3>
                <p className="text-gray-600 flex-grow">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-lg text-gray-700 max-w-3xl">
            Over the past two years, we've built 5 different technology platforms, demonstrating our capability to develop custom solutions that address specific client needs and democratize access to critical data.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Our Technical Capabilities"
            subtitle="The expertise that powers our technology solutions"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {capabilities.map((capability, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              >
                <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                <p className="text-gray-600 mb-4">{capability.description}</p>
                
                <h4 className="font-medium text-gray-900 mb-2">Example Applications:</h4>
                <ul className="list-disc pl-5 text-gray-600">
                  {capability.examples.map((example, exIndex) => (
                    <li key={exIndex}>{example}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <SectionHeading
          title="Our Technology Approach"
          subtitle="How we develop solutions that create real value"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="bg-white p-6 rounded-xl shadow-md text-center border-t-4 border-diversa-orange">
            <h3 className="font-semibold text-xl mb-4">1. Understand the Need</h3>
            <p className="text-gray-600">
              We begin by deeply understanding the specific challenges you're facing and how technology can address them effectively.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center border-t-4 border-diversa-teal">
            <h3 className="font-semibold text-xl mb-4">2. Design for Impact</h3>
            <p className="text-gray-600">
              Our solutions are designed with the end user in mind, focusing on accessibility, usability, and delivering meaningful impact.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center border-t-4 border-diversa-orange">
            <h3 className="font-semibold text-xl mb-4">3. Build for Sustainability</h3>
            <p className="text-gray-600">
              We develop robust, scalable solutions that can evolve with your needs and continue delivering value long-term.
            </p>
          </div>
        </div>
      </div>

      <CtaSection />
    </Layout>
  );
};

export default Technology;
