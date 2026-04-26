import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/ui/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import ispnLogo from '@/assets/clients/ispn.png';
import wwfLogo from '@/assets/clients/wwf.png';
import imafloraLogo from '@/assets/clients/imaflora.webp';
import traseLogo from '@/assets/clients/trase.png';
import boiNaLinhaLogo from '@/assets/clients/boi-na-linha.svg';

const Portfolio = () => {
  const { elementRef, isVisible } = useScrollReveal();

  const projects = [
    {
      name: 'Socioenvironmental Observatory',
      client: 'ISPN & WWF',
      logos: [
        { src: ispnLogo, alt: 'ISPN' },
        { src: wwfLogo, alt: 'WWF' },
      ],
      description:
        'We act as strategic facilitators of this civil society forum, responsible for establishing and managing the group\'s governance and convening partner organizations. Our central technical role involves the collection, organization, and intelligent processing of data to power the Socioenvironmental Platform. This tool consolidates information from diverse sources into an interactive system that monitors human rights violations, deforestation, and the expansion of industrial agriculture. The project aims to strengthen social oversight and support due diligence in value chains, highlighting the leadership of Indigenous peoples and local communities in environmental conservation.',
      link: 'https://www.observatoriosocioambiental.com.br',
      linkLabel: 'observatoriosocioambiental.com.br',
    },
    {
      name: 'Beef on Track (Boi na Linha)',
      client: 'Imaflora',
      logos: [
        { src: boiNaLinhaLogo, alt: 'Beef on Track' },
        { src: imafloraLogo, alt: 'Imaflora' },
      ],
      description:
        'Beef on Track is an Imaflora initiative focused on transparency and monitoring good practices in the cattle ranching chain in the Brazilian Amazon. In partnership with the Institute, Diversa was responsible for the technical development of the painel.boinalinha.org platform, covering everything from scientific structuring and data engineering to design and web development. The work involved creating robust pipelines to integrate and harmonize large geospatial and tabular databases, ensuring accuracy in data and indicator communication and an intuitive visual experience for users. The result is an interactive dashboard that transforms complex data into accessible and useful information for companies, researchers, and policymakers working toward sustainability in cattle ranching.',
      link: 'https://painel.boinalinha.org/',
      linkLabel: 'painel.boinalinha.org',
    },
    {
      name: 'Human Rights Due Diligence for Commodity Chains: An Introductory Guide for Companies Operating in Brazil',
      client: 'WWF',
      logos: [{ src: wwfLogo, alt: 'WWF' }],
      description:
        'In collaboration with WWF-Brazil, we developed an essential technical guide for companies operating in commodity chains in Brazil. The project focuses on the implementation of Human Rights Due Diligence (HRDD), an ongoing process that holds the private sector accountable for the impacts of its operations throughout the supply chain. The work highlights the urgency of protecting vulnerable biomes such as the Cerrado, and provides a detailed mapping of Brazilian public data sources on agrarian issues, rural conflicts, and labor rights. The guide serves as a roadmap for corporations to identify, prevent, and mitigate socioenvironmental risks, ensuring respect for the rights of traditional communities.',
      link: 'https://wwfbrnew.awsassets.panda.org/downloads/devida-diligencia-em-direitos-humanos-para-cadeias-de-commodities.pdf',
      linkLabel: 'Read the guide (PDF)',
    },
    {
      name: 'Soy Silo Detection with AI',
      client: 'Trase',
      logos: [{ src: traseLogo, alt: 'Trase' }],
      description:
        'We supported Trase in using Artificial Intelligence and advanced geospatial models to close the traceability gap in Brazil\'s soy supply chain. The project focuses on the so-called "hidden middle" of the chain — the network of silos, warehouses, and processing facilities where visibility into product origin is often lost. Through automated workflows that analyze high-resolution satellite imagery, it was possible to expand the known universe of facilities to over 9,300 units, detecting hundreds of silos in remote areas not listed in official records. This technological solution enables governments and companies to identify indirect deforestation risks and ensure more transparent and sustainable supply chains.',
      link: 'https://trase.earth/insights/trase-uses-ai-to-close-the-traceability-gap-in-the-soy-supply-chain',
      linkLabel: 'Read on trase.earth',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-background">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-diversa-orange/20 blur-[120px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-diversa-green/25 blur-[100px]" />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/8 border border-primary/15 text-primary rounded-full text-sm font-semibold mb-6">
            Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-foreground mb-6">
            Selected work with <span className="gradient-text">our clients</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A few projects that illustrate how we translate complex socioenvironmental data into tools, guides, and platforms that drive real impact.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-14">
        <div ref={elementRef} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`bg-white shadow-modern-lg border-0 hover-lift transition-all duration-300 overflow-hidden ${
                  isVisible ? 'animate-fade-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <CardContent className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                    <div className="flex items-center gap-4 flex-shrink-0">
                      {project.logos.map((logo, i) => (
                        <div
                          key={i}
                          className="h-14 w-14 md:h-16 md:w-16 rounded-lg bg-muted/40 flex items-center justify-center p-2"
                        >
                          <img
                            src={logo.src}
                            alt={logo.alt}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                        Client: {project.client}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground leading-tight">
                        {project.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="gap-2"
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      {project.linkLabel}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
