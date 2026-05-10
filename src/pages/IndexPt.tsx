import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/ui/footer';
import { HeroPt } from '@/components/sections/pt/Hero';
import { AboutPt } from '@/components/sections/pt/About';
import { ServicesPt } from '@/components/sections/pt/Services';
import { PortfolioPreview } from '@/components/sections/PortfolioPreview';
import { ClientsPt } from '@/components/sections/pt/Clients';
import { ContactPt } from '@/components/sections/pt/Contact';

const IndexPt = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroPt />
      <AboutPt />
      <ServicesPt />
      <PortfolioPreview language="pt" />
      <ClientsPt />
      <ContactPt />
      <Footer />
    </div>
  );
};

export default IndexPt;
