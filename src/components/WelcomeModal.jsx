import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal after a short delay when page loads
    const timer = setTimeout(() => {
      setIsOpen(true);
      document.body.classList.add('modal-open');
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    document.body.classList.remove('modal-open');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden z-10"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 bg-gray-100 text-gray-500 hover:text-brand-dark rounded-full hover:bg-gray-200 transition-colors z-10"
            >
              <X size={20} />
            </button>

            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles size={32} />
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-4">
                Special Offer!
              </h2>
              
              <div className="bg-yellow-50/90 border border-yellow-200 rounded-xl p-4 mb-6 shadow-sm inline-block">
                <p className="font-bold text-red-600 text-lg sm:text-xl mb-2">
                  🔥 1Ltr starting from ₹49/- and 5Ltr starting from ₹199/- only!
                </p>
                <p className="text-sm sm:text-base text-brand-teal font-semibold">
                  Best quality at lowest prices & Cheapest price in bulk all over India.
                </p>
              </div>

              <button
                onClick={handleClose}
                className="w-full py-3.5 bg-brand-blue text-white rounded-xl font-semibold text-lg hover:bg-brand-blue/90 transition-colors shadow-lg"
              >
                Explore Products
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeModal;
