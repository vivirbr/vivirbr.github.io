import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/ui/footer';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import vivianPhoto from '@/assets/team/vivian-ribeiro.jpg';
import gabrielaPhoto from '@/assets/team/gabriela-russo-lopes.jpg';
import waynerPhoto from '@/assets/team/wayner-maia.jpg';
import marianaPhoto from '@/assets/team/mariana-oliveira.png';

const AboutPt = () => {
  const { elementRef, isVisible } = useScrollReveal();

  const team = [
    {
      name: 'Vivian Ribeiro',
      role: 'Co-founder e Consultora Principal',
      photo: vivianPhoto,
      description:
        'Líder de equipe e gerente de produtos digitais, com mais de dez anos de experiência utilizando dados e tecnologia para criar soluções sustentáveis e impactantes para cadeias de commodities agrícolas, com ênfase no comércio doméstico e internacional de carne, soja, óleo de palma, café e cacau.',
    },
    {
      name: 'Gabriela Russo Lopes',
      role: 'Co-founder e Consultora Principal',
      photo: gabrielaPhoto,
      description:
        'Mais de oito anos de experiência com temas socioambientais em instituições de pesquisa, sociedade civil e organizações internacionais. Enfoque em formulação e implementação de políticas públicas no setor da soja, articulação com comunidades locais e análise de impactos sociais da expansão de áreas agrícolas no Brasil.',
    },
    {
      name: 'Wayner Maia',
      role: 'Desenvolvedor Sênior — JavaScript | Vue | Flutter',
      photo: waynerPhoto,
      description:
        'Desenvolvedor sênior com mais de 8 anos de experiência em front-end e desenvolvimento web e mobile. Liderou o desenvolvimento de diversas empresas e iniciativas como Zupp, Mitra e do Pasto ao Prato. Especialista na criação de aplicações de alta performance, seguras e escaláveis.',
    },
    {
      name: 'Mariana Oliveira',
      role: 'Designer UX/UI',
      photo: marianaPhoto,
      description:
        'Designer com 10 anos de experiência exclusivamente dedicada a projetos de UI/UX. Atua principalmente em startups e empresas de tecnologia, desde fase de descoberta, elaboração de wireframe e design final. Mais de 12 produtos entregues com alto valor de usabilidade e interface amigável.',
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
            Quem Somos
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-foreground mb-6">
            A equipe por trás da <span className="gradient-text">Diversa</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Somos uma equipe multidisciplinar apaixonada por traduzir dados complexos de sustentabilidade em mudanças concretas que geram impacto duradouro.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="py-14">
        <div ref={elementRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className={`bg-white shadow-modern-lg border-0 hover-lift transition-all duration-300 overflow-hidden ${
                  isVisible ? 'animate-fade-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-40 sm:h-auto h-48 flex-shrink-0 overflow-hidden">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex-1">
                      <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm font-semibold text-primary mb-3">
                        {member.role}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </div>
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

export default AboutPt;
