import { Card, CardContent } from "@/components/ui/card";
import { Database, FileText, Users2, Target } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const AboutPt = () => {
  const { elementRef, isVisible } = useScrollReveal();
  const capabilities = [
    {
      icon: Database,
      title: "Soluções de dados",
      description:
        "Construímos metodologias, bancos de dados, dashboards, kits de ferramentas, aplicativos e plataformas que transformam informação bruta em insights claros.",
    },
    {
      icon: FileText,
      title: "Análise de políticas",
      description:
        "Produzimos relatórios convincentes, policy briefs e white papers que orientam sua estratégia com experiência internacional e de campo.",
    },
    {
      icon: Users2,
      title: "Engajamento comunitário",
      description:
        "De conteúdo de mídia e campanhas de advocacy até a construção de alinhamento crítico entre diversos stakeholders.",
    },
    {
      icon: Target,
      title: "Foco em impacto",
      description:
        "Fazemos a ponte entre dados complexos e ação no campo ao navegar dimensões globais, nacionais e locais.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30 section-with-shapes relative">
      {/* Section divider at top */}
      <div className="section-divider mb-20"></div>

      <div ref={elementRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold">
              Quem Somos
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">Conectando dados e ação</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Construímos soluções de dados customizadas e aproveitamos nossa experiência internacional e de campo para produzir relatórios estratégicos e policy briefs. Também nos especializamos em engajamento comunitário e advocacy para construir alinhamento entre stakeholders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            const isOrange = index % 2 === 0;
            const gradientClass = isOrange ? "gradient-orange" : "gradient-green";
            const borderClass = isOrange ? "gradient-border-orange" : "gradient-border-green";

            return (
              <Card
                key={index}
                className={`bg-white shadow-modern hover-lift hover-glow-primary transition-all duration-300 border-0 ${
                  isOrange ? "border-l-accent-orange" : "border-l-accent-green"
                } ${isVisible ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-20 h-20 mx-auto mb-6 ${gradientClass} rounded-2xl flex items-center justify-center shadow-modern-lg`}
                  >
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-4">{capability.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{capability.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
