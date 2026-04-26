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

const PortfolioPt = () => {
  const { elementRef, isVisible } = useScrollReveal();

  const projects = [
    {
      name: 'Observatório Socioambiental',
      client: 'ISPN e WWF',
      logos: [
        { src: ispnLogo, alt: 'ISPN' },
        { src: wwfLogo, alt: 'WWF' },
      ],
      description:
        'Atuamos como facilitadores estratégicos deste fórum da sociedade civil, sendo responsáveis por estabelecer e gerir a governança do grupo e por convocar as organizações parceiras. Nosso papel técnico central envolve a coleta, organização e processamento inteligente de dados para alimentar a Plataforma Socioambiental. Esta ferramenta consolida informações de diversas fontes em um sistema interativo que monitora violações de direitos humanos, desmatamento e a expansão da agricultura industrial. O projeto visa fortalecer o controle social e apoiar a devida diligência em cadeias de valor, destacando o protagonismo de povos indígenas e comunidades locais na conservação ambiental.',
      link: 'https://www.observatoriosocioambiental.com.br',
      linkLabel: 'observatoriosocioambiental.com.br',
    },
    {
      name: 'Boi na Linha (Beef on Track)',
      client: 'Imaflora',
      logos: [
        { src: boiNaLinhaLogo, alt: 'Boi na Linha' },
        { src: imafloraLogo, alt: 'Imaflora' },
      ],
      description:
        'O Boi na Linha é uma iniciativa do Imaflora voltada à transparência e ao monitoramento de boas práticas da cadeia da pecuária na Amazônia Brasileira. Em parceria com o Instituto, a Diversa foi responsável pelo desenvolvimento técnico da plataforma painel.boinalinha.org, abrangendo desde a estruturação científica e engenharia de dados até o design e desenvolvimento web. O trabalho envolveu a criação de pipelines robustos para integração e harmonização de grandes bases de dados geoespaciais e tabulares, garantindo precisão na comunicação dos dados e indicadores e uma experiência visual intuitiva para os usuários. O resultado é um painel interativo que transforma dados complexos em informações acessíveis e úteis para empresas, pesquisadores e formuladores de políticas que atuam pela sustentabilidade na pecuária.',
      link: 'https://painel.boinalinha.org/',
      linkLabel: 'painel.boinalinha.org',
    },
    {
      name: 'Devida Diligência em Direitos Humanos para Cadeias de Commodities: Um guia introdutório para empresas que operam no Brasil',
      client: 'WWF',
      logos: [{ src: wwfLogo, alt: 'WWF' }],
      description:
        'Em colaboração com o WWF-Brasil, desenvolvemos um guia técnico essencial para empresas que operam em cadeias de commodities no Brasil. O projeto foca na implementação da Devida Diligência em Direitos Humanos (DDDH), um processo contínuo que responsabiliza o setor privado pelos impactos de suas operações em toda a cadeia de suprimentos. O trabalho destaca a urgência de proteger biomas vulneráveis, como o Cerrado, e fornece um mapeamento detalhado de fontes de dados públicas brasileiras sobre questões agrárias, conflitos rurais e direitos trabalhistas. O guia serve como um roteiro para que corporações identifiquem, previnam e mitiguem riscos socioambientais, garantindo o respeito aos direitos das comunidades tradicionais.',
      link: 'https://wwfbrnew.awsassets.panda.org/downloads/devida-diligencia-em-direitos-humanos-para-cadeias-de-commodities.pdf',
      linkLabel: 'Acessar o guia (PDF)',
    },
    {
      name: 'Detecção de Silos de Soja com IA',
      client: 'Trase',
      logos: [{ src: traseLogo, alt: 'Trase' }],
      description:
        'Apoiamos a Trase no uso de Inteligência Artificial e modelos geoespaciais avançados para fechar a lacuna de rastreabilidade na cadeia da soja no Brasil. O projeto foca no chamado "meio oculto" da cadeia — a rede de silos, armazéns e instalações de processamento onde a visibilidade da origem do produto costuma se perder. Através de fluxos de trabalho automatizados que analisam imagens de satélite de alta resolução, foi possível expandir o universo conhecido de instalações para mais de 9.300 unidades, detectando centenas de silos em áreas remotas que não constavam em registros oficiais. Esta solução tecnológica permite que governos e empresas identifiquem riscos de desmatamento indireto e garantam cadeias de suprimentos mais transparentes e sustentáveis.',
      link: 'https://trase.earth/insights/trase-uses-ai-to-close-the-traceability-gap-in-the-soy-supply-chain',
      linkLabel: 'Leia em trase.earth',
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
            Portfólio
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-foreground mb-6">
            Projetos selecionados com <span className="gradient-text">nossos clientes</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Alguns projetos que ilustram como traduzimos dados socioambientais complexos em ferramentas, guias e plataformas que geram impacto real.
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
                        Cliente: {project.client}
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

export default PortfolioPt;
