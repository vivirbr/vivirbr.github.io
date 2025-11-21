import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isPortuguese = location.pathname.startsWith('/pt');

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about', disabled: true },
    { name: 'Services', path: '/services', disabled: true },
    { name: 'Contact', path: '#contact' },
  ];

  const isActive = (path: string) => {
    if (path.startsWith('#')) {
      return false; // Handle scroll links separately
    }
    return location.pathname === path;
  };

  const handleLinkClick = (path: string) => {
    setIsOpen(false);
    if (path.startsWith('#')) {
      // If we're not on the home page, navigate there first
      if (location.pathname !== '/') {
        window.location.href = '/' + path;
      } else {
        const element = document.querySelector(path);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleLanguage = () => {
    if (isPortuguese) {
      navigate('/');
    } else {
      navigate('/pt');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
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
                {isPortuguese ? 'Consultoria socioambiental' : 'Socioenvironmental Consultancy'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.disabled ? (
                <span
                  key={item.name}
                  className="text-sm font-medium text-muted-foreground/50 cursor-not-allowed"
                  title="Coming soon"
                >
                  {item.name}
                </span>
              ) : item.path.startsWith('#') ? (
                <button
                  key={item.name}
                  onClick={() => handleLinkClick(item.path)}
                  className="text-sm font-medium text-foreground hover:text-primary transition-smooth"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-smooth ${
                    isActive(item.path)
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-sm font-medium"
            >
              <Globe className="h-4 w-4" />
              {isPortuguese ? 'EN' : 'PT'}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
            {navItems.map((item) => (
              item.disabled ? (
                <span
                  key={item.name}
                  className="block px-3 py-2 text-base font-medium text-muted-foreground/50 cursor-not-allowed"
                  title="Coming soon"
                >
                  {item.name}
                </span>
              ) : item.path.startsWith('#') ? (
                <button
                  key={item.name}
                  onClick={() => handleLinkClick(item.path)}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-smooth w-full text-left"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-smooth ${
                    isActive(item.path)
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2 mx-3 my-2"
            >
              <Globe className="h-4 w-4" />
              {isPortuguese ? 'English' : 'Português'}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};