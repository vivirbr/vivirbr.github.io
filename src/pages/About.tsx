
import Layout from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/section-heading";
import TeamSection from "@/components/sections/TeamSection";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-16">
        <SectionHeading
          title="About Diversa"
          subtitle="A socio-environmental consulting firm founded and led by two Brazilian women scientists with extensive experience in civil society."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              Diversa Socio-Environmental Consulting was founded with a mission to provide expert solutions for complex socio-environmental challenges. Our approach combines rigorous scientific knowledge with practical expertise and a deep commitment to sustainability and human rights.
            </p>
            <p className="text-lg text-gray-700">
              We operate with a unique collaborative model that prioritizes fair compensation and brings together specialists across various disciplines to deliver comprehensive solutions for our clients.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://placekitten.com/800/500" 
              alt="Diversa team" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 max-w-3xl">
            We are committed to democratizing data access, promoting sustainable practices in commodity chains, and ensuring human rights are protected throughout supply chains. Our goal is to create meaningful impact through expert consulting that addresses both environmental and social dimensions of sustainability.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-diversa-orange">
              <h3 className="font-semibold text-xl mb-3">Value-Driven Approach</h3>
              <p className="text-gray-600">
                We prioritize deeply understanding client needs before developing solutions to deliver maximum value.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-diversa-teal">
              <h3 className="font-semibold text-xl mb-3">Fair Collaboration</h3>
              <p className="text-gray-600">
                Our profit-sharing model focuses on execution, paying collaborators significantly above market rates.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-diversa-orange">
              <h3 className="font-semibold text-xl mb-3">Scientific Expertise</h3>
              <p className="text-gray-600">
                We base all our work on rigorous scientific methods and evidence-based approaches.
              </p>
            </div>
          </div>
        </div>
      </div>

      <TeamSection />
    </Layout>
  );
};

export default About;
