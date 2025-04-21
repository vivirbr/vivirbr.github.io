import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="container mx-auto px-6 py-32">
        <div className="max-w-xl mx-auto text-center">
          <div className="text-diversa-orange font-bold text-9xl mb-6">404</div>
          <h1 className="text-4xl font-bold mb-6">Page Not Found</h1>
          <p className="text-xl text-gray-600 mb-10">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Button asChild size="lg" className="bg-diversa-orange hover:bg-diversa-orange/90">
            <Link to="/">Return to Homepage</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
