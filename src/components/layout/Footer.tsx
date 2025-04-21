
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand and Description */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src="/lovable-uploads/1556a9c6-7d3e-41ca-94ae-eaffda7ddafa.png" 
                alt="Diversa Logo" 
                className="h-12 invert" 
              />
            </Link>
            <p className="text-gray-300 text-sm mt-4">
              A consulting firm founded and led by two Brazilian women scientists providing solutions in socio-environmental assessment, biodiversity chains, human rights, and data science.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-diversa-orange transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/expertise" className="text-gray-300 hover:text-diversa-orange transition-colors">Our Expertise</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-diversa-orange transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/technology" className="text-gray-300 hover:text-diversa-orange transition-colors">Technology</Link>
              </li>
              <li>
                <Link to="/clients" className="text-gray-300 hover:text-diversa-orange transition-colors">Clients</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-2 text-gray-300">
              <p>
                <strong>Co-CEOs:</strong> Gabriela Russo Lopes & Vivian Ribeiro
              </p>
              <p>
                <Link to="/contact" className="text-diversa-teal hover:text-diversa-orange transition-colors">
                  Get in touch with our team →
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Diversa Socio-Environmental Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
