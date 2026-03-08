import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/ui/footer';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import vivianPhoto from '@/assets/team/gabriela-russo-lopes.jpg';
import gabrielaPhoto from '@/assets/team/vivian-ribeiro.jpg';
import waynerPhoto from '@/assets/team/wayner-maia.jpg';
import marianaPhoto from '@/assets/team/mariana-oliveira.png';

const About = () => {
  const { elementRef, isVisible } = useScrollReveal();

  const team = [
    {
      name: 'Vivian Ribeiro',
      role: 'Co-Founder & Principal Consultant',
      photo: vivianPhoto,
      description:
        'Team leader and digital product manager with over ten years of experience using data and technology to create sustainable and impactful solutions for agricultural commodity supply chains, with emphasis on domestic and international trade of beef, soy, palm oil, coffee, and cocoa.',
    },
    {
      name: 'Gabriela Russo Lopes',
      role: 'Co-Founder & Principal Consultant',
      photo: gabrielaPhoto,
      description:
        'Over eight years of experience with socio-environmental issues in research institutions, civil society, and international organizations. Focus on public policy formulation and implementation in the soy sector, engagement with local communities, and analysis of social impacts of agricultural expansion in Brazil.',
    },
    {
      name: 'Wayner Maia',
      role: 'Senior Developer — JavaScript | Vue | Flutter',
      photo: waynerPhoto,
      description:
        'Senior developer with over 8 years of experience in front-end, web, and mobile development. Led the development of several companies and initiatives such as Zupp, Mitra, and do Pasto ao Prato. Expert in creating high-performance, secure, and scalable applications.',
    },
    {
      name: 'Mariana Oliveira',
      role: 'UX/UI Designer',
      photo: marianaPhoto,
      description:
        'Designer with 10 years of experience exclusively dedicated to UI/UX projects. Works primarily in startups and tech companies, from discovery phase, wireframing to final design. Over 12 products delivered with high usability value and user-friendly interfaces.',
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
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-foreground mb-6">
            The team behind <span className="gradient-text">Diversa</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We are a multidisciplinary team passionate about translating complex sustainability data into actionable change that creates lasting impact.
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

export default About;
