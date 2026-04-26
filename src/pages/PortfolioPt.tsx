import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import ispnLogo from '@/assets/clients/ispn.png';
import wwfLogo from '@/assets/clients/wwf.png';
import imafloraLogo from '@/assets/clients/imaflora.webp';
import traseLogo from '@/assets/clients/trase.png';
import boiNaLinhaLogo from '@/assets/clients/boi-na-linha.svg';

type Project = {
  name: string;
  client: string;
  logos: { src: string; alt: string }[];
  description: string;
  link: string;
  linkLabel: string;
  tags: string[];
  accent: 'orange' | 'green';
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const { elementRef, isVisible } = useScrollReveal(0.15);
  const isReverse = index % 2 === 1;
  const accentColor = project.accent === 'orange' ? 'diversa-orange' : 'diversa-green';

  return (
    <div
      ref={elementRef}
      className={`relative grid lg:grid-cols-12 gap-8 lg:gap-12 items-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className={`lg:col-span-5 ${isReverse ? 'lg:order-2' : ''}`}>
        <div className="relative aspect-square max-w-md mx-auto">
          <div
            className={`absolute inset-0 rounded-[2.5rem] bg-${accentColor}/10 rotate-6 transition-transform duration-500`}
          />
          <div
            className={`absolute inset-0 rounded-full bg-${accentColor}/5 -rotate-3`}
          />
          <div className="absolute inset-4 bg-white rounded-[2rem] shadow-modern-lg flex flex-col items-center justify-center p-8 overflow-hidden">
            <div className="absolute top-6 left-6 text-7xl font-heading font-bold text-foreground/5 leading-none">
              0{index + 1}
            </div>
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  'radial-gradient(circle, hsl(var(--foreground) / 0.06) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
            />
            <div className="relative flex items-center justify-center gap-6 flex-wrap z-10">
              {project.logos.map((logo, i) => (
                <div
                  key={i}
                  className="h-20 w-20 md:h-24 md:w-24 rounded-2xl bg-background flex items-center justify-center p-3 shadow-modern"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
            <div
              className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${
                project.accent === 'orange'
                  ? 'from-diversa-orange via-diversa-orange/60 to-transparent'
                  : 'from-diversa-green via-diversa-green/60 to-transparent'
              }`}
            />
          </div>
        </div>
      </div>

      <div className={`lg:col-span-7 ${isReverse ? 'lg:order-1' : ''}`}>
        <div className="flex items-center gap-3 mb-4">
          <span className={`inline-block w-10 h-px bg-${accentColor}`} />
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em]">
            Projeto 0{index + 1} · {project.client}
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-foreground leading-tight mb-5">
          {project.name}
        </h2>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className={`text-xs font-medium px-3 py-1 rounded-full bg-${accentColor}/10 text-${accentColor === 'diversa-orange' ? 'diversa-orange' : 'diversa-green'}`}
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

const PortfolioPt = () => {
  const projects: Project[] = [
    {
      name: 'Observatório Socioambiental',
      client: 'ISPN e WWF',
      logos: [
        { src: ispnLogo, alt: 'ISPN' },
        { src: wwfLogo, alt: 'WWF' },
      ],
      description:
        'Atuamos como facilitadores estratégicos deste fórum da sociedade civil, sendo responsáveis por estabelecer e gerir a governança do grupo e por convocar as organizações parceiras. Nosso papel técnico central envolve a coleta, organização e processamento inteligente de dados para alimentar a Plataforma Socioambiental — um sistema interativo que monitora violações de direitos humanos, desmatamento e a expansão da agricultura industrial, fortalecendo o controle social e apoiando a devida diligência em cadeias de valor.',
      link: 'https://www.observatoriosocioambiental.com.br',
      linkLabel: 'Acessar a plataforma',
      tags: ['Governança', 'Plataforma de Dados', 'Direitos Humanos', 'Devida Diligência'],
      accent: 'orange',
    },
    {
      name: 'Boi na Linha',
      client: 'Imaflora',
      logos: [
        { src: boiNaLinhaLogo, alt: 'Boi na Linha' },
        { src: imafloraLogo, alt: 'Imaflora' },
      ],
      description:
        'O Boi na Linha é uma iniciativa do Imaflora voltada à transparência e ao monitoramento de boas práticas da cadeia da pecuária na Amazônia Brasileira. A Diversa liderou o desenvolvimento técnico da plataforma painel.boinalinha.org — desde a estruturação científica e engenharia de dados até design e desenvolvimento web. O resultado é um painel interativo que transforma dados geoespaciais complexos em informações acessíveis para empresas, pesquisadores e formuladores de políticas.',
      link: 'https://painel.boinalinha.org/',
      linkLabel: 'Abrir o painel',
      tags: ['Geoespacial', 'Engenharia de Dados', 'Plataforma Web', 'Cadeia da Pecuária'],
      accent: 'green',
    },
    {
      name: 'Devida Diligência em Direitos Humanos para Cadeias de Commodities',
      client: 'WWF',
      logos: [{ src: wwfLogo, alt: 'WWF' }],
      description:
        'Em colaboração com o WWF-Brasil, desenvolvemos um guia técnico essencial para empresas que operam em cadeias de commodities no Brasil. O projeto foca na implementação da Devida Diligência em Direitos Humanos (DDDH) — um processo contínuo que responsabiliza o setor privado pelos impactos de suas operações. O guia destaca a urgência de proteger biomas vulneráveis como o Cerrado e fornece um mapeamento detalhado de fontes de dados públicas brasileiras sobre questões agrárias, conflitos rurais e direitos trabalhistas.',
      link: 'https://wwfbrnew.awsassets.panda.org/downloads/devida-diligencia-em-direitos-humanos-para-cadeias-de-commodities.pdf',
      linkLabel: 'Acessar o guia (PDF)',
      tags: ['Políticas', 'Direitos Humanos', 'Commodities', 'Pesquisa'],
      accent: 'orange',
    },
    {
      name: 'Detecção de Silos de Soja com IA',
      client: 'Trase',
      logos: [{ src: traseLogo, alt: 'Trase' }],
      description:
        'Apoiamos a Trase no uso de Inteligência Artificial e modelos geoespaciais avançados para fechar a lacuna de rastreabilidade na cadeia da soja no Brasil. Através de fluxos de trabalho automatizados que analisam imagens de satélite de alta resolução, expandimos o universo conhecido de instalações para mais de 9.300 unidades, detectando centenas de silos em áreas remotas que não constavam em registros oficiais — permitindo identificar riscos de desmatamento indireto.',
      link: 'https://trase.earth/insights/trase-uses-ai-to-close-the-traceability-gap-in-the-soy-supply-chain',
      linkLabel: 'Leia em trase.earth',
      tags: ['IA / Machine Learning', 'Imagens de Satélite', 'Cadeia da Soja', 'Rastreabilidade'],
      accent: 'green',
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      <Navigation />

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
              Portfólio
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-semibold text-foreground leading-[1.05] mb-6">
              Projetos selecionados com{' '}
              <span className="gradient-text">nossos clientes</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Quatro projetos que mostram como traduzimos dados socioambientais complexos em ferramentas, guias e plataformas que geram impacto mensurável em cadeias de valor.
            </p>
          </div>

          <div className="hidden lg:block absolute top-32 right-12 w-24 h-24 rounded-3xl bg-diversa-orange/10 rotate-12 animate-float" />
          <div className="hidden lg:block absolute bottom-12 right-32 w-16 h-16 rounded-full bg-diversa-green/15 animate-float-delayed" />
          <div className="hidden lg:block absolute top-48 right-60 w-8 h-8 rounded-lg bg-diversa-orange/20 -rotate-12 animate-float-slow" />
        </div>
      </section>

      <section className="relative py-20 section-bg-cream">
        <div className="floating-blob blob-orange w-96 h-96 -top-20 -right-20 opacity-50" />
        <div className="floating-blob blob-green w-96 h-96 top-1/2 -left-32 opacity-40" />
        <div className="floating-blob blob-orange w-80 h-80 bottom-20 right-1/4 opacity-30" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-28 lg:space-y-40">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="floating-blob blob-green w-[500px] h-[500px] -top-40 left-1/2 -translate-x-1/2 opacity-30" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="section-divider mb-8" />
          <h2 className="text-3xl md:text-5xl font-heading font-semibold text-foreground mb-6">
            Tem um projeto em mente?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Vamos transformar seus dados e ambições no próximo case.
          </p>
          <Button
            asChild
            size="lg"
            className="gradient-primary text-white hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-modern-lg text-base px-10 py-7 h-auto rounded-full"
          >
            <a href="/pt#contact">
              Iniciar conversa
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPt;
