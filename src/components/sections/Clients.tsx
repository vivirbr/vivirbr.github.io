import { Card, CardContent } from "@/components/ui/card";
import imafloraLogo from "@/assets/clients/imaflora.webp";
import globalCanopyLogo from "@/assets/clients/global-canopy.png";
import ispnLogo from "@/assets/clients/ispn.png";
import boiNaLinhaLogo from "@/assets/clients/boi-na-linha.png";
import traseLogo from "@/assets/clients/trase.png";
import fernLogo from "@/assets/clients/fern.jpeg";
import wwfLogo from "@/assets/clients/wwf.png";

export const Clients = () => {
  const clients = [
    { name: "Imaflora", logo: imafloraLogo, id: 1 },
    { name: "Global Canopy", logo: globalCanopyLogo, id: 2 },
    { name: "ISPN", logo: ispnLogo, id: 3 },
    { name: "Boi na Linha", logo: boiNaLinhaLogo, id: 4 },
    { name: "Trase", logo: traseLogo, id: 5 },
    { name: "Fern", logo: fernLogo, id: 6 },
    { name: "WWF", logo: wwfLogo, id: 7 },
    { name: "Imaflora", logo: imafloraLogo, id: 8 },
    { name: "Global Canopy", logo: globalCanopyLogo, id: 9 },
    { name: "ISPN", logo: ispnLogo, id: 10 },
  ];

  return (
    <section id="clients" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">
            Trusted by leading organizations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We work with forward-thinking organizations committed to creating sustainable impact through data-driven
            decision making.
          </p>
        </div>

        {/* Horizontal Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex gap-8 animate-scroll-x">
            {/* First set */}
            {clients.map((client) => (
              <Card
                key={`first-${client.id}`}
                className="border-border hover:shadow-lg transition-smooth group flex-shrink-0 w-64 bg-background"
              >
                <CardContent className="p-6 flex items-center justify-center h-32">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-20 object-contain filter grayscale hover:grayscale-0 transition-smooth"
                  />
                </CardContent>
              </Card>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client) => (
              <Card
                key={`second-${client.id}`}
                className="border-border hover:shadow-lg transition-smooth group flex-shrink-0 w-64 bg-background"
              >
                <CardContent className="p-6 flex items-center justify-center h-32">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-20 object-contain filter grayscale hover:grayscale-0 transition-smooth"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
