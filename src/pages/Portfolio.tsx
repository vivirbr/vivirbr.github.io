import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import project1Image from '@/assets/portfolio/project-1-observatorio.png';
import project2Image from '@/assets/portfolio/project-2-boi-na-linha.png';
import project3Image from '@/assets/portfolio/project-3-devida-diligencia.png';
import project4Image from '@/assets/portfolio/project-4-trase-silos.png';

type Project = {
  name: string;
  client: string;
  image: string;
  imageAlt: string;
  description: string;
  link: string;
  linkLabel: string;
  tags: string[];
  accent: 'orange' | 'green';
};

const ACCENT_STYLES = {
  orange: {
    softBg: 'bg-diversa-orange/10',
    veryFaint: 'bg-diversa-orange/5',
    line: 'bg-diversa-orange',
    chip: 'bg-diversa-orange/10 text-diversa-orange',
    barGradient: 'from-diversa-orange via-diversa-orange/60 to-transparent',
  },
  green: {
    softBg: 'bg-diversa-green/10',
    veryFaint: 'bg-diversa-green/5',
    line: 'bg-diversa-green',
    chip: 'bg-diversa-green/10 text-diversa-green',
    barGradient: 'from-diversa-green via-diversa-green/60 to-transparent',
  },
} as const;

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const { elementRef, isVisible } = useScrollReveal(0.15);
  const isReverse = index % 2 === 1;
  const styles = ACCENT_STYLES[project.accent];

  return (
    <div
      ref={elementRef}
      className={`relative grid lg:grid-cols-12 gap-8 lg:gap-12 items-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Visual / Project image block */}
      <div className={`lg:col-span-5 ${isReverse ? 'lg:order-2' : ''}`}>
        <div className="relative aspect-square max-w-md mx-auto">
          {/* Decorative geometric layers */}
          <div className={`absolute -inset-3 rounded-[2.5rem] ${styles.softBg} rotate-6 transition-transform duration-500`} />
          <div className={`absolute -inset-2 rounded-[2rem] ${styles.veryFaint} -rotate-3`} />
          <div className={`absolute -top-4 -right-4 w-16 h-16 rounded-2xl ${styles.softBg} rotate-12 hidden md:block`} />
          <div className={`absolute -bottom-5 -left-5 w-12 h-12 rounded-full ${styles.softBg} hidden md:block`} />

          {/* Image card */}
          <div className="absolute inset-0 bg-white rounded-[2rem] shadow-modern-lg overflow-hidden group">
            <div className="absolute top-4 left-5 text-6xl font-heading font-bold text-white/70 mix-blend-overlay leading-none z-20 pointer-events-none drop-shadow-sm">
              0{index + 1}
            </div>
            <img
              src={project.image}
              alt={project.imageAlt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${styles.barGradient} z-10`} />
          </div>
        </div>
      </div>

      {/* Text content */}
      <div className={`lg:col-span-7 ${isReverse ? 'lg:order-1' : ''}`}>
        <div className="flex items-center gap-3 mb-4">
          <span className={`inline-block w-10 h-px ${styles.line}`} />
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em]">
            Project 0{index + 1} · {project.client}
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-foreground leading-tight mb-5">
          {project.name}
        </h2>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className={`text-xs font-medium px-3 py-1 rounded-full ${styles.chip}`}
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
          {project.description}
        </p>
        <Button
          variant="outline"
          asChild
          className="gap-2 rounded-full border-2 hover:bg-foreground hover:text-background hover:border-foreground transition-all group/btn"
        >
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            {project.linkLabel}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </a>
        </Button>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const projects: Project[] = [
    {
      name: 'Socioenvironmental Observatory',
      client: 'ISPN & WWF',
      image: project1Image,
      imageAlt: 'Socioenvironmental Observatory dashboard showing social conflict data in Brazil',
      description:
        'We act as strategic facilitators of this civil society forum, responsible for establishing and managing the group\'s governance and convening partner organizations. Our central technical role involves the collection, organization, and intelligent processing of data to power the Socioenvironmental Platform — an interactive system that monitors human rights violations, deforestation, and the expansion of industrial agriculture, strengthening social oversight and supporting due diligence in value chains.',
      link: 'https://www.observatoriosocioambiental.com.br',
      linkLabel: 'Visit the platform',
      tags: ['Governance', 'Data Platform', 'Human Rights', 'Due Diligence'],
      accent: 'orange',
    },
    {
      name: 'Beef on Track',
      client: 'Imaflora',
      image: project2Image,
      imageAlt: 'Beef on Track interactive map showing slaughterhouse locations in the Brazilian Amazon',
      description:
        'Beef on Track is an Imaflora initiative focused on transparency and monitoring good practices in the cattle ranching chain in the Brazilian Amazon. Diversa led the technical development of painel.boinalinha.org — from scientific structuring and data engineering to design and web development. The result is an interactive dashboard that transforms complex geospatial data into accessible information for companies, researchers, and policymakers.',
      link: 'https://painel.boinalinha.org/',
      linkLabel: 'Open the dashboard',
      tags: ['Geospatial', 'Data Engineering', 'Web Platform', 'Cattle Chain'],
      accent: 'green',
    },
    {
      name: 'Human Rights Due Diligence for Commodity Chains',
      client: 'WWF',
      image: project3Image,
      imageAlt: 'Cover of the Human Rights Due Diligence guide for commodity chains in Brazil',
      description:
        'In collaboration with WWF-Brazil, we developed an essential technical guide for companies operating in commodity chains in Brazil. The project focuses on Human Rights Due Diligence (HRDD) — an ongoing process that holds the private sector accountable for its impacts. The guide highlights the urgency of protecting vulnerable biomes like the Cerrado and provides a detailed mapping of Brazilian public data sources on agrarian issues, rural conflicts, and labor rights.',
      link: 'https://wwfbrnew.awsassets.panda.org/downloads/devida-diligencia-em-direitos-humanos-para-cadeias-de-commodities.pdf',
      linkLabel: 'Read the guide (PDF)',
      tags: ['Policy', 'Human Rights', 'Commodities', 'Research'],
      accent: 'orange',
    },
    {
      name: 'Soy Silo Detection with AI',
      client: 'Trase',
      image: project4Image,
      imageAlt: 'Satellite image of a soy storage facility detected through AI analysis',
      description:
        'We supported Trase in using Artificial Intelligence and advanced geospatial models to close the traceability gap in Brazil\'s soy supply chain. Through automated workflows analyzing high-resolution satellite imagery, we expanded the known universe of facilities to over 9,300 units, detecting hundreds of silos in remote areas not listed in official records — enabling governments and companies to identify indirect deforestation risks.',
      link: 'https://trase.earth/insights/trase-uses-ai-to-close-the-traceability-gap-in-the-soy-supply-chain',
      linkLabel: 'Read on trase.earth',
      tags: ['AI / Machine Learning', 'Satellite Imagery', 'Soy Chain', 'Traceability'],
      accent: 'green',
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-background">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-diversa-orange/20 blur-[120px] animate-float-slow" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-diversa-green/25 blur-[100px] animate-float-delayed" />
            <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] rounded-full bg-diversa-orange/10 blur-[80px] animate-float" />
          </div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle, hsl(var(--foreground) / 0.04) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/8 border border-primary/15 text-primary rounded-full text-sm font-semibold backdrop-blur-sm mb-8">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Portfolio
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-semibold text-foreground leading-[1.05] mb-6">
              Selected work with{' '}
              <span className="gradient-text">our clients</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Four projects that show how we translate complex socioenvironmental data into tools, guides, and platforms driving measurable impact across supply chains.
            </p>
          </div>

          {/* Floating geometric markers */}
          <div className="hidden lg:block absolute top-32 right-12 w-24 h-24 rounded-3xl bg-diversa-orange/10 rotate-12 animate-float" />
          <div className="hidden lg:block absolute bottom-12 right-32 w-16 h-16 rounded-full bg-diversa-green/15 animate-float-delayed" />
          <div className="hidden lg:block absolute top-48 right-60 w-8 h-8 rounded-lg bg-diversa-orange/20 -rotate-12 animate-float-slow" />
        </div>
      </section>

      {/* Projects */}
      <section className="relative py-20 section-bg-cream">
        {/* Decorative blobs */}
        <div className="floating-blob blob-orange w-96 h-96 -top-20 -right-20 opacity-50" />
        <div className="floating-blob blob-green w-96 h-96 top-1/2 -left-32 opacity-40" />
        <div className="floating-blob blob-orange w-80 h-80 bottom-20 right-1/4 opacity-30" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-28 lg:space-y-40">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="floating-blob blob-green w-[500px] h-[500px] -top-40 left-1/2 -translate-x-1/2 opacity-30" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="section-divider mb-8" />
          <h2 className="text-3xl md:text-5xl font-heading font-semibold text-foreground mb-6">
            Have a project in mind?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's translate your data and ambitions into the next case study.
          </p>
          <Button
            asChild
            size="lg"
            className="gradient-primary text-white hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-modern-lg text-base px-10 py-7 h-auto rounded-full"
          >
            <a href="/#contact">
              Start a conversation
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
