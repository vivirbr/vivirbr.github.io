
import Layout from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/section-heading";
import CtaSection from "@/components/sections/CtaSection";

const Services = () => {
  const services = [
    {
      title: "Project Execution Consulting",
      description: "Expert guidance and support throughout the lifecycle of your socio-environmental projects, ensuring efficient implementation and maximum impact.",
      details: [
        "Project planning and methodology development",
        "Implementation oversight and quality assurance",
        "Stakeholder engagement and management",
        "Risk assessment and mitigation strategies"
      ]
    },
    {
      title: "Report Writing & Elaboration",
      description: "Professional, detailed reports backed by scientific research and data analysis, presenting complex information in accessible formats.",
      details: [
        "Comprehensive environmental impact reports",
        "Social impact assessments and documentation",
        "Research synthesis and literature reviews",
        "Data visualization and presentation"
      ]
    },
    {
      title: "Proposal Development & Intermediation",
      description: "Strategic development of proposals for funding, partnerships, and project implementation with a high success rate.",
      details: [
        "Grant and funding proposal preparation",
        "Partnership development and facilitation",
        "Project scoping and planning",
        "Budget development and justification"
      ]
    },
    {
      title: "Data Science & Data Engineering Services",
      description: "Advanced data collection, processing, analysis, and visualization services that turn complex information into actionable insights.",
      details: [
        "Spatial data analysis and GIS mapping",
        "Environmental and social data collection",
        "Statistical analysis and modeling",
        "Data cleaning, processing, and management"
      ]
    },
    {
      title: "Custom Platform Development",
      description: "Bespoke web and mobile platforms tailored to your specific needs and objectives, making data accessible and actionable.",
      details: [
        "Web platform design and development",
        "Mobile app development (Android/iOS)",
        "User experience design and testing",
        "Integration with existing systems and data sources"
      ]
    },
    {
      title: "Custom Dashboard Development",
      description: "Interactive dashboards for monitoring KPIs, project progress, and impact metrics, providing clear visibility into performance.",
      details: [
        "Performance tracking dashboards",
        "Impact measurement systems",
        "Real-time monitoring solutions",
        "Executive and stakeholder reporting tools"
      ]
    },
    {
      title: "Data Analysis & Benchmark Identification",
      description: "Comprehensive analysis and identification of industry benchmarks and best practices to guide strategy and improve performance.",
      details: [
        "Competitive landscape analysis",
        "Best practice identification",
        "Performance gap analysis",
        "Continuous improvement recommendations"
      ]
    },
    {
      title: "Strategic Resolution Planning",
      description: "Clear roadmaps and strategies to address complex socio-environmental challenges with practical, implementable solutions.",
      details: [
        "Problem definition and root cause analysis",
        "Solution development and prioritization",
        "Implementation planning and resource allocation",
        "Monitoring and evaluation frameworks"
      ]
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-6 py-16">
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive solutions to address your socio-environmental challenges and opportunities"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-diversa-teal/10 flex items-center justify-center mb-4">
                  <span className="text-diversa-teal font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-5">{service.description}</p>
                
                <h4 className="font-medium text-gray-900 mb-2">What we offer:</h4>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Our Service Approach"
            subtitle="How we deliver exceptional value through our service delivery model"
            centered
          />

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-8">
              Our unique service delivery model is built around understanding your specific needs first, then assembling the perfect team of experts to address your challenges. We believe in fair compensation for top talent, transparent processes, and measurable outcomes that demonstrate real impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-10">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-diversa-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-diversa-orange font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-3">Understand</h3>
              <p className="text-gray-600">
                We begin by deeply understanding your needs, goals, and challenges before proposing solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-diversa-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-diversa-teal font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-3">Collaborate</h3>
              <p className="text-gray-600">
                We assemble the ideal team of specialists to address your specific needs from our network.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-diversa-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-diversa-orange font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-3">Deliver</h3>
              <p className="text-gray-600">
                We execute with excellence, maintain transparent communication, and ensure measurable impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CtaSection />
    </Layout>
  );
};

export default Services;
