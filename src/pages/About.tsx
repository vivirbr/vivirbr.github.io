import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/ui/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Globe, Users, Target, Lightbulb, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Impact-Driven',
      description: 'Every project we undertake is designed to create meaningful, measurable change in the world.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We leverage cutting-edge technology and creative thinking to solve complex sustainability challenges.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We maintain the highest standards of analytical rigor and ethical practice in all our work.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of diverse perspectives and inclusive stakeholder engagement.',
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Our international experience allows us to navigate complex global, national, and local dimensions.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every deliverable, from data visualizations to policy recommendations.',
    },
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Founder & Lead Consultant',
      expertise: 'Environmental Data Science, Policy Analysis',
      background: '15+ years in international development and sustainability research',
    },
    {
      name: 'Miguel Rodriguez',
      role: 'Data Solutions Director',
      expertise: 'Database Architecture, Dashboard Development',
      background: 'Former tech lead at major environmental NGO',
    },
    {
      name: 'Aisha Patel',
      role: 'Community Engagement Lead',
      expertise: 'Stakeholder Facilitation, Campaign Development',
      background: 'Extensive experience in multi-stakeholder processes',
    },
    {
      name: 'Dr. James Wilson',
      role: 'Policy Research Specialist',
      expertise: 'Environmental Policy, White Paper Development',
      background: 'Former policy advisor to international organizations',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 circle-bg-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-6">
              About <span className="text-primary">Diversa</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are a team of passionate professionals dedicated to transforming 
              complex sustainability data into actionable change that creates 
              lasting impact for communities and environments worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-8">
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                  Our Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To bridge the gap between complex data and action on the ground by navigating 
                  global, national and local dimensions. We build data solutions such as dashboards, 
                  databases, platforms, and apps, transforming raw information into clear insights. 
                  Based on our international and fieldwork expertise, we produce compelling reports, 
                  policy briefs, and white papers that guide your strategy. Beyond the data, we 
                  specialise in community engagement, from developing media content and advocacy 
                  campaigns to building critical alignment between diverse stakeholders.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-secondary/20 bg-gradient-to-br from-secondary/10 to-secondary/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                  Our Vision
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  A world where sustainability decisions are informed by accessible, 
                  actionable data and where all stakeholders have the tools and 
                  understanding they need to create positive environmental and 
                  social impact in their communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-semibold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core values guide every decision we make and every project we undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-border hover:shadow-lg transition-smooth">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 gradient-primary circle-accent flex items-center justify-center">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-semibold text-foreground mb-4">
              Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the experts who combine diverse backgrounds and deep expertise 
              to deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 gradient-primary circle-accent flex items-center justify-center">
                    <span className="text-white font-heading font-semibold text-lg">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-xs mb-3">
                    {member.expertise}
                  </p>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {member.background}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-semibold text-foreground mb-4">
              Our Approach
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-border">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 gradient-primary circle-accent flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-heading font-semibold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-2">
                        Listen & Understand
                      </h3>
                      <p className="text-muted-foreground">
                        We begin every project by deeply understanding your context, 
                        challenges, and objectives through comprehensive stakeholder engagement.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 gradient-green circle-accent flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-heading font-semibold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-2">
                        Analyze & Design
                      </h3>
                      <p className="text-muted-foreground">
                        We apply rigorous analytical methods to transform complex data 
                        into clear insights and design solutions tailored to your needs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 gradient-primary circle-accent flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-heading font-semibold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-2">
                        Implement & Engage
                      </h3>
                      <p className="text-muted-foreground">
                        We work collaboratively to implement solutions and build 
                        the capacity needed for sustainable, long-term impact.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;