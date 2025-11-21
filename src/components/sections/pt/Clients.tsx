import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import imafloraLogo from "@/assets/clients/imaflora.webp";
import globalCanopyLogo from "@/assets/clients/global-canopy.png";
import ispnLogo from "@/assets/clients/ispn.png";
import boiNaLinhaLogo from "@/assets/clients/boi-na-linha.png";
import traseLogo from "@/assets/clients/trase.png";
import fernLogo from "@/assets/clients/fern.jpeg";
import wwfLogo from "@/assets/clients/wwf.png";
import beyondBordersLogo from "@/assets/clients/beyond-borders-media.png";

export const ClientsPt = () => {
  const { elementRef, isVisible } = useScrollReveal();
  const clients = [
    { name: "WWF", logo: wwfLogo, id: 1 },
    { name: "Global Canopy", logo: globalCanopyLogo, id: 2 },
    { name: "Trase", logo: traseLogo, id: 3 },
    { name: "Fern", logo: fernLogo, id: 4 },
    { name: "Imaflora", logo: imafloraLogo, id: 5 },
    { name: "Boi na Linha", logo: boiNaLinhaLogo, id: 6 },
    { name: "ISPN", logo: ispnLogo, id: 7 },
    { name: "Beyond Borders Media", logo: beyondBordersLogo, id: 8 },
  ];

  return (
    <section id="clients" className="py-24 bg-gradient-subtle-green section-with-shapes relative">
      {/* Section divider at top */}
      <div className="section-divider mb-20"></div>

      <div ref={elementRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold">
              Nossos Parceiros
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Confiados por organizações líderes
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Trabalhamos com organizações inovadoras comprometidas em criar impacto sustentável através de 
            decisões baseadas em dados.
          </p>
        </div>

        {/* Logo Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {clients.map((client, index) => (
            <Card
              key={client.id}
              className={`bg-white border-0 shadow-modern hover-lift hover-glow-green transition-all duration-300 group ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <CardContent className="p-8 flex items-center justify-center h-36">
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
    </section>
  );
};