
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      title: "Project Execution Consulting",
      description: "Expert guidance and support throughout the lifecycle of your socio-environmental projects."
    },
    {
      title: "Report Writing & Elaboration",
      description: "Professional, detailed reports backed by scientific research and data analysis."
    },
    {
      title: "Proposal Development",
      description: "Strategic development of proposals for funding, partnerships, and project implementation."
    },
    {
      title: "Data Science & Engineering",
      description: "Advanced data collection, processing, analysis, and visualization services."
    },
    {
      title: "Custom Platform Development",
      description: "Bespoke web and mobile platforms tailored to your specific needs and objectives."
    },
    {
      title: "Dashboard Development",
      description: "Interactive dashboards for monitoring KPIs, project progress, and impact metrics."
    },
    {
      title: "Data Analysis & Benchmarking",
      description: "Comprehensive analysis and identification of industry benchmarks and best practices."
    },
    {
      title: "Strategic Resolution Planning",
      description: "Clear roadmaps and strategies to address complex socio-environmental challenges."
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive solutions to address your socio-environmental challenges and opportunities"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 h-full flex flex-col"
            >
              <div className="w-12 h-12 bg-diversa-teal/10 rounded-full flex items-center justify-center mb-4 text-diversa-teal">
                <span className="font-bold text-lg">{index + 1}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 text-sm flex-grow">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild className="bg-diversa-orange hover:bg-diversa-orange/90">
            <Link to="/services">Learn More About Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
