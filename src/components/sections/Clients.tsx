import { Card, CardContent } from '@/components/ui/card';

export const Clients = () => {
  const clientLogos = [
    { name: 'International NGO', sector: 'Environmental Conservation' },
    { name: 'Government Agency', sector: 'Policy Development' },
    { name: 'Tech Company', sector: 'Sustainability Reporting' },
    { name: 'Research Institute', sector: 'Academic Research' },
    { name: 'UN Organization', sector: 'Global Development' },
    { name: 'Private Foundation', sector: 'Climate Action' },
  ];

  const testimonials = [
    {
      quote: "Diversa transformed our complex environmental data into clear, actionable insights that drove real policy change.",
      author: "Environmental Policy Director",
      company: "International Conservation Organization"
    },
    {
      quote: "Their community engagement approach helped us build unprecedented stakeholder alignment for our sustainability initiative.",
      author: "Sustainability Manager",
      company: "Global Technology Company"
    },
    {
      quote: "The data solutions they developed became the foundation for our organization's evidence-based decision making.",
      author: "Research Director",
      company: "Climate Research Institute"
    }
  ];

  return (
    <section id="clients" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We partner with diverse organizations worldwide to create sustainable impact 
            through data-driven solutions and community engagement.
          </p>
        </div>

        {/* Client Types */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {clientLogos.map((client, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 gradient-primary circle-accent flex items-center justify-center">
                  <span className="text-white font-heading font-semibold text-sm">
                    {client.name.split(' ').map(word => word[0]).join('')}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {client.name}
                </h3>
                <p className="text-sm text-muted-foreground">{client.sector}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border bg-card">
              <CardContent className="p-6">
                <p className="text-muted-foreground italic leading-relaxed mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-heading font-semibold text-foreground text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};