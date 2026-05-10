import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import project1Image from '@/assets/portfolio/project-1-observatorio.png';
import project2Image from '@/assets/portfolio/project-2-boi-na-linha.png';
import project3Image from '@/assets/portfolio/project-3-devida-diligencia.png';
import project4Image from '@/assets/portfolio/project-4-trase-silos.png';

type Item = {
  name: string;
  client: string;
  image: string;
  tag: string;
  accent: 'orange' | 'green';
  className: string;
};

type PortfolioPreviewProps = {
  language?: 'en' | 'pt';
};

const COPY = {
  en: {
    eyebrow: 'Selected Work',
    title: 'Where data becomes impact',
    description:
      'A glimpse of the platforms, guides, and tools we have shipped with leading socioenvironmental organizations.',
    cta: 'Explore the full portfolio',
    portfolioPath: '/portfolio',
  },
  pt: {
    eyebrow: 'Trabalhos selecionados',
    title: 'Onde dados viram impacto',
    description:
      'Um recorte das plataformas, guias e ferramentas que entregamos com organizações socioambientais de referência.',
    cta: 'Ver o portfólio completo',
    portfolioPath: '/pt/portfolio',
  },
};

export const PortfolioPreview = ({ language = 'en' }: PortfolioPreviewProps) => {
  const { elementRef, isVisible } = useScrollReveal(0.1);
  const copy = COPY[language];

  const items: Item[] = [
    {
      name: language === 'pt' ? 'Observatório Socioambiental' : 'Socioenvironmental Observatory',
      client: 'ISPN & WWF',
      image: project1Image,
      tag: language === 'pt' ? 'Plataforma de Dados' : 'Data Platform',
      accent: 'orange',
      // Large feature tile (top-left, spans 2 cols + 2 rows on lg)
      className: 'lg:col-span-2 lg:row-span-2',
    },
    {
      name: language === 'pt' ? 'Boi na Linha' : 'Beef on Track',
      client: 'Imaflora',
      image: project2Image,
      tag: language === 'pt' ? 'Geoespacial' : 'Geospatial',
      accent: 'green',
      className: 'lg:col-span-2',
    },
    {
      name: language === 'pt' ? 'Devida Diligência' : 'Human Rights Due Diligence',
      client: 'WWF',
      image: project3Image,
      tag: language === 'pt' ? 'Política & Pesquisa' : 'Policy & Research',
      accent: 'orange',
      className: '',
    },
    {
      name: language === 'pt' ? 'Detecção de Silos com IA' : 'Soy Silo Detection with AI',
      client: 'Trase',
      image: project4Image,
      tag: language === 'pt' ? 'IA & Satélite' : 'AI & Satellite',
      accent: 'green',
      className: '',
    },
  ];

  return (
    <section className="py-14 section-bg-cream section-with-shapes relative overflow-hidden">
      {/* Floating blobs */}
      <div className="floating-blob blob-orange w-[300px] h-[300px] top-[10%] right-[-5%] animate-float-slow" />
      <div className="floating-blob blob-green w-[260px] h-[260px] bottom-[5%] left-[-6%] animate-float" />

      <div className="section-divider mb-10" />

      <div ref={elementRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 bg-diversa-orange/10 text-diversa-orange rounded-full text-sm font-semibold mb-4">
              {copy.eyebrow}
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight">
              {copy.title}
            </h2>
            <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
              {copy.description}
            </p>
          </div>
          <Link
            to={copy.portfolioPath}
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-foreground border-b-2 border-diversa-orange pb-1 hover:gap-3 transition-all whitespace-nowrap"
          >
            {copy.cta}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Bento grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-5 lg:gap-6 auto-rows-[260px] lg:auto-rows-[280px] ${
            isVisible ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-500`}
        >
          {items.map((item, index) => {
            const accentBar =
              item.accent === 'orange'
                ? 'from-diversa-orange via-diversa-orange/60 to-transparent'
                : 'from-diversa-green via-diversa-green/60 to-transparent';
            const chip =
              item.accent === 'orange'
                ? 'bg-diversa-orange/15 text-diversa-orange'
                : 'bg-diversa-green/15 text-diversa-green';

            return (
              <Link
                key={index}
                to={copy.portfolioPath}
                className={`group relative overflow-hidden rounded-3xl bg-white shadow-modern-lg hover-lift transition-all duration-500 ${
                  item.className
                } ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent" />
                {/* Accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${accentBar}`} />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm ${chip}`}>
                      {item.tag}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-white/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0">
                      <ArrowUpRight className="h-4 w-4 text-foreground" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-white/75 uppercase tracking-[0.18em] mb-2">
                      {item.client}
                    </p>
                    <h3 className="text-xl md:text-2xl font-heading font-semibold text-white leading-tight">
                      {item.name}
                    </h3>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Mobile CTA */}
        <div className="mt-10 flex justify-center md:hidden">
          <Link
            to={copy.portfolioPath}
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground border-b-2 border-diversa-orange pb-1"
          >
            {copy.cta}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
