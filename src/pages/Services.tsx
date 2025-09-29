import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/ui/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Database, FileBarChart, Users, ExternalLink, Calendar, MapPin } from 'lucide-react';

const Services = () => {
  const projects = [
    {
      title: 'Global Climate Data Dashboard',
      client: 'International Environmental Organization',
      category: 'Data Solutions',
      description: 'Developed an interactive dashboard that aggregates climate data from 50+ countries, enabling real-time monitoring of environmental indicators and policy impacts.',
      technologies: ['Python', 'D3.js', 'PostgreSQL', 'React'],
      outcomes: [
        'Reduced data analysis time by 75%',
        'Enabled evidence-based policy recommendations',
        'Improved stakeholder engagement through visual storytelling'
      ],
      timeline: '6 months',
      location: 'Global',
      image: 'dashboard'
    },
    {
      title: 'Sustainable Agriculture Policy Framework',
      client: 'Government Ministry',
      category: 'Policy Analysis',
      description: 'Conducted comprehensive analysis of agricultural sustainability practices and developed policy recommendations for national implementation.',
      technologies: ['Statistical Analysis', 'GIS Mapping', 'Stakeholder Interviews'],
      outcomes: [
        'Informed national agriculture strategy',
        'Identified 15 key policy interventions',
        'Projected 30% reduction in environmental impact'
      ],
      timeline: '8 months',
      location: 'Latin America',
      image: 'policy'
    },
    {
      title: 'Community Water Management Platform',
      client: 'Local Water Authority',
      category: 'Data Solutions',
      description: 'Built a comprehensive water resource management system that tracks usage, quality, and distribution across multiple communities.',
      technologies: ['IoT Integration', 'Mobile App', 'Cloud Infrastructure'],
      outcomes: [
        'Improved water distribution efficiency by 40%',
        'Reduced water waste through better monitoring',
        'Enhanced community participation in conservation'
      ],
      timeline: '4 months',
      location: 'Sub-Saharan Africa',
      image: 'water'
    },
    {
      title: 'Stakeholder Alignment Workshop Series',
      client: 'International Development NGO',
      category: 'Community Engagement',
      description: 'Facilitated multi-stakeholder workshops to align diverse groups around shared sustainability goals and develop collaborative action plans.',
      technologies: ['Workshop Facilitation', 'Conflict Resolution', 'Action Planning'],
      outcomes: [
        'Achieved consensus among 12 diverse stakeholder groups',
        'Developed unified sustainability action plan',
        'Established ongoing collaboration framework'
      ],
      timeline: '3 months',
      location: 'Southeast Asia',
      image: 'workshop'
    },
    {
      title: 'Biodiversity Conservation Database',
      client: 'Research Institute',
      category: 'Data Solutions',
      description: 'Designed and implemented a comprehensive database system for tracking biodiversity metrics across protected areas and conservation sites.',
      technologies: ['PostgreSQL', 'R', 'ArcGIS', 'Python'],
      outcomes: [
        'Centralized data from 25 conservation sites',
        'Enabled predictive modeling for species protection',
        'Improved research collaboration and data sharing'
      ],
      timeline: '5 months',
      location: 'Global',
      image: 'biodiversity'
    },
    {
      title: 'Corporate Sustainability Reporting Toolkit',
      client: 'Fortune 500 Company',
      category: 'Policy Analysis',
      description: 'Developed comprehensive toolkit and guidelines for ESG reporting alignment with international sustainability standards.',
      technologies: ['ESG Frameworks', 'Data Visualization', 'Compliance Mapping'],
      outcomes: [
        'Streamlined sustainability reporting process',
        'Achieved alignment with 5 major ESG frameworks',
        'Reduced reporting preparation time by 60%'
      ],
      timeline: '7 months',
      location: 'North America',
      image: 'corporate'
    }
  ];

  const serviceCategories = [
    {
      icon: Database,
      title: 'Data Solutions',
      color: 'orange',
      projects: projects.filter(p => p.category === 'Data Solutions')
    },
    {
      icon: FileBarChart,
      title: 'Policy Analysis',
      color: 'green',
      projects: projects.filter(p => p.category === 'Policy Analysis')
    },
    {
      icon: Users,
      title: 'Community Engagement',
      color: 'primary',
      projects: projects.filter(p => p.category === 'Community Engagement')
    }
  ];

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'Data Solutions':
        return 'bg-diversa-orange text-white';
      case 'Policy Analysis':
        return 'bg-diversa-green text-white';
      case 'Community Engagement':
        return 'bg-primary text-primary-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 circle-bg-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-6">
              Our <span className="text-primary">Project Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped organizations worldwide transform complex 
              sustainability data into actionable change through innovative solutions 
              and collaborative approaches.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {serviceCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="border-border hover:shadow-lg transition-smooth">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 circle-accent flex items-center justify-center ${
                      category.color === 'orange' ? 'gradient-orange' : 
                      category.color === 'green' ? 'gradient-green' : 'gradient-primary'
                    }`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-heading font-semibold">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      {category.projects.length} completed projects
                    </p>
                    <div className="text-sm text-muted-foreground">
                      <p>Explore our portfolio of {category.title.toLowerCase()} projects below</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Portfolio */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-semibold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world solutions that demonstrate our commitment to translating 
              complex data into meaningful, sustainable impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-smooth">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <Badge className={getCategoryBadgeClass(project.category)}>
                      {project.category}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      {project.location}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-heading font-semibold text-foreground mb-2">
                    {project.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mb-4">
                    Client: {project.client}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-heading font-semibold text-foreground text-sm mb-2">
                        Technologies & Methods
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-heading font-semibold text-foreground text-sm mb-2">
                        Key Outcomes
                      </h4>
                      <ul className="space-y-1">
                        {project.outcomes.map((outcome, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 circle-accent bg-primary mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground text-sm">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {project.timeline}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-6">
                Ready to Start Your Project?
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                Every successful project starts with understanding your unique challenges 
                and objectives. Let's discuss how we can help transform your sustainability 
                data into actionable solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:info@diversaconsultancy.com?subject=Project Consultation Request"
                  className="inline-flex items-center justify-center px-6 py-3 gradient-primary text-white font-medium rounded-md hover:opacity-90 transition-smooth shadow-orange"
                >
                  Schedule a Consultation
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector('#contact');
                    if (element) {
                      window.location.href = '/#contact';
                    }
                  }}
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-primary-foreground transition-smooth"
                >
                  Contact Us
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;