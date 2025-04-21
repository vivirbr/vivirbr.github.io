
import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Expertise", path: "/expertise" },
    { name: "Services", path: "/services" },
    { name: "Technology", path: "/technology" },
    { name: "Clients", path: "/clients" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Use only logo (not banner) */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/20981c5c-0387-4719-a2aa-a94fdbc3e699.png" 
              alt="Diversa Logo" 
              className="h-12 md:h-16" 
              style={{ objectFit: "contain" }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-800 hover:text-diversa-orange font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="bg-diversa-orange hover:bg-diversa-orange/90">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-diversa-orange"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={cn(
            "md:hidden absolute left-0 right-0 bg-white border-b border-gray-100 transition-all duration-300 ease-in-out z-20",
            isMenuOpen ? "max-h-96 py-4 opacity-100" : "max-h-0 py-0 opacity-0 overflow-hidden"
          )}
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-800 hover:text-diversa-orange py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              asChild 
              className="bg-diversa-orange hover:bg-diversa-orange/90 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
