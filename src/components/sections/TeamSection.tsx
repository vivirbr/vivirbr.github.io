
import { SectionHeading } from "@/components/ui/section-heading";

const TeamSection = () => {
  const team = [
    {
      name: "Gabriela Russo Lopes, Ph.D.",
      title: "Co-CEO",
      bio: "Environmental scientist (Ph.D.) with extensive experience in civil society and sustainable solutions.",
      image: "https://placekitten.com/300/300"
    },
    {
      name: "Vivian Ribeiro, Ph.D.",
      title: "Co-CEO",
      bio: "Social scientist (Ph.D.) specializing in community relations and socio-environmental impact assessment.",
      image: "https://placekitten.com/301/300"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Meet Our Leadership"
          subtitle="Founded and led by two Brazilian women Ph.D. scientists with extensive experience in civil society and providing innovative solutions."
          centered
        />

        <div className="flex flex-col md:flex-row gap-10 justify-center items-stretch max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="flex-1 bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-diversa-orange font-medium mb-4">{member.title}</p>
                <p className="text-gray-600 flex-grow">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our team expands through a trusted network of long-term expert collaborators across various fields, functioning like a cooperative of specialists who share our commitment to excellence and impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
