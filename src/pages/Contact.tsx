
import Layout from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", organization: "", message: "" });
    }, 1500);
  };

  return (
    <Layout>
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionHeading
              title="Get in Touch"
              subtitle="We'd love to hear from you and discuss how we can help address your socio-environmental challenges"
            />

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Leadership</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">Gabriela Russo Lopes</p>
                    <p className="text-gray-600">Co-CEO</p>
                  </div>
                  <div>
                    <p className="font-medium">Vivian Ribeiro</p>
                    <p className="text-gray-600">Co-CEO</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">How We Can Help</h3>
                <p className="text-gray-600">
                  Whether you're looking for consulting on a specific socio-environmental challenge, need support with data analysis and visualization, or want to discuss a custom technology solution, our team is ready to assist you.
                </p>
              </div>

              <div className="bg-diversa-teal/10 p-6 rounded-lg">
                <h3 className="font-semibold text-diversa-teal mb-2">Our Approach</h3>
                <p className="text-gray-700">
                  We believe in understanding your specific needs first. When you reach out, we'll schedule an initial consultation to discuss your challenges, goals, and how our expertise might best support your work.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Received!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for reaching out. We'll get back to you as soon as possible.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-diversa-teal hover:bg-diversa-teal/90"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-diversa-teal focus:border-diversa-teal"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-diversa-teal focus:border-diversa-teal"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block mb-2 font-medium text-gray-700">
                    Organization (Optional)
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-diversa-teal focus:border-diversa-teal"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
                    How Can We Help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-diversa-teal focus:border-diversa-teal"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-diversa-orange hover:bg-diversa-orange/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Common questions about working with Diversa"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">What geographical regions do you work in?</h3>
              <p className="text-gray-600">
                While we're based in Brazil, our team has experience working internationally across Latin America, Europe, and beyond. We've collaborated with organizations from multiple countries and can adapt to various regional contexts.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">How do you typically structure your projects?</h3>
              <p className="text-gray-600">
                Each project begins with a thorough needs assessment, followed by a custom project plan. We focus on collaborative development, regular progress updates, and measurable outcomes to ensure success.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Can you work with organizations of any size?</h3>
              <p className="text-gray-600">
                Yes, we work with organizations ranging from small NGOs to large international institutions. We scale our approach to match your specific needs and resources.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">What makes your consulting approach different?</h3>
              <p className="text-gray-600">
                Our approach combines scientific rigor with practical implementation, fair collaboration practices, and a deep commitment to understanding your specific needs before proposing solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
