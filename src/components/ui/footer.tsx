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
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2 space-y-4">
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
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Translating complex sustainability data into actionable change. 
              Technology with impact for meaningful, lasting transformation.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:info@diversaconsultancy.com"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                info@diversaconsultancy.com
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  {link.path.startsWith('#') ? (
                    <button
                      onClick={() => handleLinkClick(link.path)}
                      className="text-muted-foreground hover:text-primary transition-smooth text-left"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Diversa Socioenvironmental Consultancy. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-smooth text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-smooth text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};