import { useState, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProductsSection from './components/Products/ProductsSection';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';

const ProductModal = lazy(() => import('./components/Products/ProductModal'));

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    document.body.classList.add('modal-open');
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    document.body.classList.remove('modal-open');
  };

  const handleGetQuote = () => {
    handleCloseModal();
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-brand-bg-light font-poppins">
      <Navbar />
      <Hero />
      <About />
      <ProductsSection onViewDetails={handleViewDetails} />
      <WhyUs />
      <Contact />
      <Footer />
      <WhatsAppFAB />

      <Suspense fallback={null}>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={handleCloseModal}
            onGetQuote={handleGetQuote}
          />
        )}
      </Suspense>
    </div>
  );
}

export default App;
