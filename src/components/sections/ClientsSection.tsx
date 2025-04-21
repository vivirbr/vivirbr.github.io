
import { SectionHeading } from "@/components/ui/section-heading";

const ClientsSection = () => {
  const clients = [
    {
      name: "Stockholm Environment Institute",
      country: "Sweden",
      logo: "https://placekitten.com/200/80" // Placeholder, replace with actual logos
    },
    {
      name: "Fern",
      country: "Belgium",
      logo: "https://placekitten.com/201/80"
    },
    {
      name: "Imaflora",
      country: "Brazil",
      logo: "https://placekitten.com/202/80"
    },
    {
      name: "Global Canopy",
      country: "UK",
      logo: "https://placekitten.com/203/80"
    },
    {
      name: "WWF",
      country: "International",
      logo: "https://placekitten.com/204/80"
    },
    {
      name: "Beyond Borders",
      country: "Netherlands",
      logo: "https://placekitten.com/205/80"
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Our Trusted Partners"
          subtitle="We're proud to collaborate with leading organizations making a difference across the globe."
          centered
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow w-full aspect-[3/2] flex items-center justify-center">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="max-h-12 max-w-full"
                />
              </div>
              <p className="mt-3 text-center font-medium text-gray-700">{client.name}</p>
              <p className="text-sm text-gray-500">{client.country}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
