
import { SectionHeading } from "@/components/ui/section-heading";

const ValuesSection = () => {
  const values = [
    {
      title: "Value-Driven Approach",
      description: "We prioritize deeply understanding client needs before developing solutions to deliver maximum value and impact."
    },
    {
      title: "Fair Collaboration",
      description: "Our unique profit-sharing model focuses on execution, paying collaborators significantly above market rates to attract and retain top talent."
    },
    {
      title: "Cooperative Expertise",
      description: "We leverage a trusted network of long-term expert collaborators across various fields including economic, social, environmental, and data science."
    },
    {
      title: "Women-Led Science",
      description: "Founded and led by two Brazilian women scientists with extensive experience in civil society and providing innovative solutions."
    }
  ];

  return (
    <section className="py-20 bg-diversa-cream/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-diversa-orange/10 rounded-full -translate-y-1/4 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-diversa-teal/10 rounded-full translate-y-1/4 -translate-x-1/4"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          title="Our Values & Differentiators"
          subtitle="What makes Diversa unique in our approach to socio-environmental consulting"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md border-l-4 border-diversa-orange"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
