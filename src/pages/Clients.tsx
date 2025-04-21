
import Layout from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/section-heading";
import CtaSection from "@/components/sections/CtaSection";

const Clients = () => {
  const clients = [
    {
      name: "Stockholm Environment Institute",
      country: "Sweden",
      logo: "https://placekitten.com/300/200",
      description: "A leading international research organization focused on environment and development challenges."
    },
    {
      name: "Fern",
      country: "Belgium",
      logo: "https://placekitten.com/301/200",
      description: "An NGO focused on protecting forests and the rights of people who depend on them."
    },
    {
      name: "Imaflora",
      country: "Brazil",
      logo: "https://placekitten.com/302/200",
      description: "A Brazilian environmental organization working on sustainable land use and forest conservation."
    },
    {
      name: "Global Canopy",
      country: "UK",
      logo: "https://placekitten.com/303/200",
      description: "An environmental organization focusing on the transition to a deforestation-free economy."
    },
    {
      name: "WWF",
      country: "International",
      logo: "https://placekitten.com/304/200",
      description: "One of the world's largest conservation organizations working to protect wildlife and habitats."
    },
    {
      name: "Beyond Borders",
      country: "Netherlands",
      logo: "https://placekitten.com/305/200",
      description: "An organization dedicated to addressing cross-border environmental and social challenges."
    },
  ];

  const testimonials = [
    {
      text: "Diversa's expertise in socio-environmental assessment and data analysis helped us understand complex sustainability challenges in our supply chain that we hadn't been able to identify before.",
      author: "Environmental Director",
      organization: "International Research Organization"
    },
    {
      text: "The technology platform developed by Diversa has dramatically improved our ability to monitor and respond to human rights concerns in key agricultural regions. Their approach is both technically sophisticated and deeply empathetic.",
      author: "Program Manager",
      organization: "European NGO"
    },
    {
      text: "Working with Diversa has transformed how we approach data-driven decision making. Their ability to combine rigorous scientific methods with practical implementation strategies sets them apart.",
      author: "Sustainability Lead",
      organization: "Conservation Organization"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-6 py-16">
        <SectionHeading
          title="Our Clients & Partners"
          subtitle="We're proud to collaborate with leading organizations making a difference across the globe"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md flex flex-col border border-gray-100"
            >
              <div className="h-40 bg-gray-50 rounded-lg flex items-center justify-center p-4 mb-6">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="max-h-32 max-w-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{client.name}</h3>
              <p className="text-diversa-teal font-medium mb-4">{client.country}</p>
              <p className="text-gray-600">{client.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Client Testimonials"
            subtitle="What our clients say about working with Diversa"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-md border border-gray-100 flex flex-col"
              >
                <div className="mb-6 text-diversa-orange">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>
                <p className="text-gray-700 italic mb-6 flex-grow">{testimonial.text}</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-500">{testimonial.organization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <SectionHeading
          title="Client Success Stories"
          subtitle="Examples of our impactful work with clients across the globe"
        />

        <div className="mt-8 space-y-12">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Democratizing Data Access in Agricultural Supply Chains</h3>
            <p className="text-gray-600 mb-6">
              We developed a custom web platform for a leading environmental institute that brought together previously siloed data on agricultural supply chains, enabling stakeholders from producers to policymakers to make more informed decisions about sustainability practices.
            </p>
            <div className="flex items-center text-diversa-teal">
              <span className="font-medium">Results:</span>
              <ul className="ml-4 list-disc pl-4">
                <li>50% increase in data accessibility for key stakeholders</li>
                <li>New insights into environmental risk hotspots</li>
                <li>Improved decision-making for sustainable sourcing</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Human Rights Monitoring in Commodity Production</h3>
            <p className="text-gray-600 mb-6">
              For an international NGO, we developed a mobile application that enabled field teams to document and report human rights concerns in agricultural regions, creating a real-time monitoring system that improved response times and intervention effectiveness.
            </p>
            <div className="flex items-center text-diversa-teal">
              <span className="font-medium">Results:</span>
              <ul className="ml-4 list-disc pl-4">
                <li>75% reduction in reporting time for field incidents</li>
                <li>Created comprehensive database of human rights concerns</li>
                <li>Enabled data-driven policy advocacy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <CtaSection />
    </Layout>
  );
};

export default Clients;
