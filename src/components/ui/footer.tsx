import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Contact', path: '#contact' },
    ],
    services: [
      { name: 'Data Solutions', path: '/services#data' },
      { name: 'Policy Analysis', path: '/services#policy' },
      { name: 'Community Engagement', path: '/services#community' },
    ],
  };

  const handleLinkClick = (path: string) => {
    if (path.startsWith('#')) {
      const element = document.querySelector(path);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Diversa Socioenvironmental Consultancy"
              className="h-10 w-10 circle-accent"
            />
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-lg text-foreground">
                Diversa
              </span>
              <span className="text-xs text-muted-foreground -mt-1">
                Socioenvironmental Consultancy
              </span>
            </div>
          </div>
          
          {/* Headline */}
          <p className="text-muted-foreground leading-relaxed max-w-md">
            Translating complex sustainability data into actionable change. 
            Technology with impact for meaningful, lasting transformation.
          </p>
          
          {/* Email */}
          <a
            href="mailto:info@diversa.earth"
            className="text-muted-foreground hover:text-primary transition-smooth"
          >
            info@diversa.earth
          </a>
          
          {/* Copyright */}
          <p className="text-muted-foreground text-sm pt-4">
            © {currentYear} Diversa Socioenvironmental Consultancy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};