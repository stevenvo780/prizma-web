import { CompanySection } from './components/CompanySection';
import { ComplianceSection } from './components/ComplianceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { OrganizationSection } from './components/OrganizationSection';
import { PricingSection } from './components/PricingSection';
import { ProductGrid } from './components/ProductGrid';
import { VisualProofSection } from './components/VisualProofSection';

function App() {
  return (
    <div className="cui-root" data-module="portal">
      <Header />
      <main>
        <Hero />
        <VisualProofSection />
        <CompanySection />
        <OrganizationSection />
        <ProductGrid />
        <PricingSection />
        <ComplianceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
