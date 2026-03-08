import { useScrollReveal } from "@/hooks/useScrollReveal";
import imafloraLogo from "@/assets/clients/imaflora.webp";
import globalCanopyLogo from "@/assets/clients/global-canopy.png";
import ispnLogo from "@/assets/clients/ispn.png";
import boiNaLinhaLogo from "@/assets/clients/boi-na-linha.png";
import traseLogo from "@/assets/clients/trase.png";
import fernLogo from "@/assets/clients/fern.jpeg";
import wwfLogo from "@/assets/clients/wwf.png";
import beyondBordersLogo from "@/assets/clients/beyond-borders-media.png";

export const Clients = () => {
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

  // Double the array for seamless loop
  const marqueeClients = [...clients, ...clients];

  return (
    <section id="clients" className="py-14 bg-muted/30 relative overflow-hidden">
      <div className="section-divider mb-10"></div>

      <div ref={elementRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-10 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold">
              Our Partners
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Trusted by leading organizations
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We work with forward-thinking organizations committed to creating sustainable impact through data-driven
            decision making.
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div className={`relative ${isVisible ? "animate-fade-up animation-delay-200" : "opacity-0"}`}>
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-muted/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-muted/80 to-transparent z-10 pointer-events-none" />
        
        <div className="flex animate-scroll-x hover:[animation-play-state:paused]">
          {marqueeClients.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="flex-shrink-0 mx-3 md:mx-5"
            >
              <div className="bg-white rounded-2xl shadow-modern hover-lift transition-all duration-300 p-6 w-36 h-24 flex items-center justify-center group">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-16 object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
