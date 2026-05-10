import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
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
    hint: 'Drag to explore →',
    portfolioPath: '/portfolio',
  },
  pt: {
    eyebrow: 'Trabalhos selecionados',
    title: 'Onde dados viram impacto',
    description:
      'Um recorte das plataformas, guias e ferramentas que entregamos com organizações socioambientais de referência.',
    cta: 'Ver o portfólio completo',
    hint: 'Arraste para explorar →',
    portfolioPath: '/pt/portfolio',
  },
};

export const PortfolioPreview = ({ language = 'en' }: PortfolioPreviewProps) => {
  const { elementRef, isVisible } = useScrollReveal(0.1);
  const copy = COPY[language];

  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollRef = useRef(0);

  const items: Item[] = [
    {
      name: language === 'pt' ? 'Observatório Socioambiental' : 'Socioenvironmental Observatory',
      client: 'ISPN & WWF',
      image: project1Image,
      tag: language === 'pt' ? 'Plataforma de Dados' : 'Data Platform',
      accent: 'orange',
    },
    {
      name: language === 'pt' ? 'Boi na Linha' : 'Beef on Track',
      client: 'Imaflora',
      image: project2Image,
      tag: language === 'pt' ? 'Geoespacial' : 'Geospatial',
      accent: 'green',
    },
    {
      name: language === 'pt' ? 'Devida Diligência' : 'Human Rights Due Diligence',
      client: 'WWF',
      image: project3Image,
      tag: language === 'pt' ? 'Política & Pesquisa' : 'Policy & Research',
      accent: 'orange',
    },
    {
      name: language === 'pt' ? 'Detecção de Silos com IA' : 'Soy Silo Detection with AI',
      client: 'Trase',
      image: project4Image,
      tag: language === 'pt' ? 'IA & Satélite' : 'AI & Satellite',
      accent: 'green',
    },
  ];

  // Duplicate for seamless loop
  const loopItems = [...items, ...items];

  // Auto-scroll loop
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let rafId: number;
    let lastTs = performance.now();
    const speed = 40; // px per second

    const tick = (ts: number) => {
      const dt = (ts - lastTs) / 1000;
      lastTs = ts;
      if (!isPaused && !isDraggingRef.current) {
        const halfWidth = el.scrollWidth / 2;
        let next = el.scrollLeft + speed * dt;
        if (next >= halfWidth) next -= halfWidth;
        el.scrollLeft = next;
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isPaused]);

  // Drag handlers
  const onPointerDown = (e: React.PointerEvent) => {
    const el = scrollerRef.current;
    if (!el) return;
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartScrollRef.current = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
    el.style.cursor = 'grabbing';
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const el = scrollerRef.current;
    if (!el) return;
    const dx = e.clientX - dragStartXRef.current;
    el.scrollLeft = dragStartScrollRef.current - dx;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    isDraggingRef.current = false;
    const el = scrollerRef.current;
    if (el) {
      el.style.cursor = 'grab';
      try { el.releasePointerCapture(e.pointerId); } catch { /* noop */ }
    }
  };

  return (
    <section className="py-14 section-bg-cream section-with-shapes relative overflow-hidden">
      <div className="floating-blob blob-orange w-[300px] h-[300px] top-[10%] right-[-5%] animate-float-slow" />
      <div className="floating-blob blob-green w-[260px] h-[260px] bottom-[5%] left-[-6%] animate-float" />

      <div className="section-divider mb-10" />

      <div ref={elementRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
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
          <div className="flex flex-col items-start md:items-end gap-2">
            <Link
              to={copy.portfolioPath}
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground border-b-2 border-diversa-orange pb-1 hover:gap-3 transition-all whitespace-nowrap"
            >
              {copy.cta}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <span className="text-xs text-muted-foreground hidden md:block">{copy.hint}</span>
          </div>
        </div>
      </div>

      {/* Edge fade gradients */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 z-20 bg-gradient-to-r from-[hsl(var(--background))] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24 z-20 bg-gradient-to-l from-[hsl(var(--background))] to-transparent" />

        <div
          ref={scrollerRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className={`flex gap-6 overflow-x-auto overflow-y-hidden scrollbar-none px-4 sm:px-6 lg:px-8 py-4 cursor-grab select-none ${
            isVisible ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-500`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {loopItems.map((item, index) => {
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
                draggable={false}
                onClick={(e) => {
                  // Prevent navigation if user was dragging
                  if (Math.abs(dragStartXRef.current - (e as unknown as PointerEvent).clientX) > 6) {
                    e.preventDefault();
                  }
                }}
                className="group relative flex-shrink-0 w-[300px] md:w-[360px] h-[440px] md:h-[480px] rounded-3xl overflow-hidden bg-white shadow-modern-lg hover:shadow-2xl transition-all duration-500"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  draggable={false}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/35 to-transparent pointer-events-none" />
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${accentBar} pointer-events-none`} />

                <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none">
                  <div className="flex items-start justify-between">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm ${chip}`}>
                      {item.tag}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-white/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
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
      </div>
    </section>
  );
};
