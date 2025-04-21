
// Symbolic hero illustration with lightened text style for home
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf, Users, Database } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background waves in brand colors */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-diversa-orange/10 -z-10 rounded-bl-[200px]"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-diversa-teal/10 -z-10 rounded-tr-[150px]"></div>
      
      <div className="container mx-auto px-6 py-16 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Driving <span className="text-diversa-orange">Sustainable</span> Solutions with <span className="text-diversa-teal">Data</span> & <span className="text-diversa-teal">Expertise</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600">
                A woman-led consultancy providing expert solutions for socio-environmental challenges through science, data, and technology.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-diversa-orange hover:bg-diversa-orange/90">
                <Link to="/expertise">Our Expertise</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-diversa-teal text-diversa-teal hover:bg-diversa-teal/10">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
          
          {/* Visual: abstract agriculture, society, data */}
          <div className="flex justify-center items-center">
            {/* Use the logo with a trio of small icons overlapping for agriculture (Leaf), community (Users), data (Database) */}
            <div className="relative w-64 h-64 flex items-center justify-center">
              <img
                src="/lovable-uploads/20981c5c-0387-4719-a2aa-a94fdbc3e699.png"
                alt="Diversa logo"
                className="w-56 h-56 object-contain shadow-xl rounded-full bg-white"
              />
              {/* Thematic Lucide icons */}
              <Leaf 
                className="absolute left-0 bottom-6 bg-white rounded-full p-2 text-diversa-teal shadow-md"
                color="#519889"
                size={38}
                strokeWidth={2}
              />
              <Users 
                className="absolute right-0 top-[40%] bg-white rounded-full p-2 text-diversa-orange shadow-md"
                color="#E85504"
                size={38}
                strokeWidth={2}
              />
              <Database 
                className="absolute left-[38%] -top-7 bg-white rounded-full p-2 text-gray-500 shadow-md"
                color="#888"
                size={38}
                strokeWidth={2}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Curved divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white -mb-1 rounded-t-[50%]"></div>
    </section>
  );
};

export default Hero;
