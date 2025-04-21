
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="py-20 bg-diversa-orange/10 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-diversa-orange/20 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-diversa-teal/20 translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make a <span className="text-diversa-orange">Sustainable</span> Impact?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Partner with Diversa for expert socio-environmental consulting that delivers real value and measurable results for your organization and the planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-diversa-orange hover:bg-diversa-orange/90">
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-diversa-teal text-diversa-teal hover:bg-diversa-teal/10">
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
