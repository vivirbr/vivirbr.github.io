import { Card, CardContent } from '@/components/ui/card';
import { Building2 } from 'lucide-react';

export const Clients = () => {
  // Create 10 placeholder organizations
  const clients = Array.from({ length: 10 }, (_, i) => ({
    name: `Organization ${i + 1}`,
    id: i + 1
  }));

  return (
    <section id="clients" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">
            Trusted by Leading Organizations and Companies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We work with forward-thinking organizations committed to creating 
            sustainable impact through data-driven decision making.
          </p>
        </div>

        {/* Horizontal Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex gap-8 animate-scroll-x">
            {/* First set */}
            {clients.map((client) => (
              <Card key={`first-${client.id}`} className="border-border hover:shadow-lg transition-smooth group flex-shrink-0 w-48">
                <CardContent className="p-6 flex flex-col items-center justify-center h-32">
                  <div className="w-16 h-16 mb-3 gradient-primary circle-accent flex items-center justify-center group-hover:scale-110 transition-smooth">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-xs text-center text-muted-foreground font-medium">
                    {client.name}
                  </p>
                </CardContent>
              </Card>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client) => (
              <Card key={`second-${client.id}`} className="border-border hover:shadow-lg transition-smooth group flex-shrink-0 w-48">
                <CardContent className="p-6 flex flex-col items-center justify-center h-32">
                  <div className="w-16 h-16 mb-3 gradient-primary circle-accent flex items-center justify-center group-hover:scale-110 transition-smooth">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-xs text-center text-muted-foreground font-medium">
                    {client.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};