import { Card, CardContent } from '@/components/ui/card';
import { Database, FileText, Users2, Target } from 'lucide-react';

export const About = () => {
  const capabilities = [
    {
      icon: Database,
      title: 'Data Solutions',
      description: 'We build methodologies, databases, dashboards, toolkits, apps and platforms that transform raw information into clear insights.',
    },
    {
      icon: FileText,
      title: 'Policy Analysis',
      description: 'We produce compelling reports, policy briefs, and white papers that guide your strategy with international and fieldwork expertise.',
    },
    {
      icon: Users2,
      title: 'Community Engagement',
      description: 'From media content and advocacy campaigns to building critical alignment between diverse stakeholders.',
    },
    {
      icon: Target,
      title: 'Impact Focus',
      description: 'We bridge the gap between complex data and action on the ground by navigating global, national and local dimensions.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">
            Who We Are
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We bridge the gap between complex data and action on the ground by navigating 
            global, national and local dimensions with analytical integrity and respect 
            for diverse perspectives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <Card key={index} className="border-border hover:shadow-lg transition-smooth bg-card">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 gradient-primary circle-accent flex items-center justify-center">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {capability.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-6">
                Technology with Impact
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                We combine analytical integrity with on-the-ground experience and respect 
                for diverse perspectives to create meaningful, lasting change. Our approach 
                ensures that complex sustainability data becomes the foundation for 
                actionable strategies that work in the real world.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};