import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] lg:min-h-screen flex items-start sm:items-center justify-center sm:justify-start overflow-hidden pt-24 sm:pt-0 pb-12 sm:pb-0"
      style={{
        background: 'radial-gradient(ellipse at 30% 20%, #FEF9C3 0%, #FEFCE8 50%, #FFFFFF 100%)',
      }}
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 -left-10 w-60 h-60 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #0E7C7B 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{ y: [0, 15, 0], x: [0, -15, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-1/3 right-10 w-40 h-40 rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #1A4B8C 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{ y: [0, 10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #F0A500 0%, transparent 70%)' }}
        />

        {/* SVG wave shapes */}
        <motion.svg
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 left-0 w-full opacity-30"
          viewBox="0 0 1440 120"
          fill="none"
        >
          <path
            d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,60 1440,60 L1440,120 L0,120 Z"
            fill="#0E7C7B"
            fillOpacity="0.1"
          />
        </motion.svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-brand-teal/20 shadow-sm mb-6"
            >
              <span className="text-sm">🇮🇳</span>
              <span className="text-xs sm:text-sm font-medium text-brand-teal">
                Made in India | Trusted by 500+ Businesses
              </span>
            </motion.div>

            {/* Heading */}
            <h1 className="text-[40px] sm:text-5xl lg:text-[64px] font-bold text-brand-blue leading-[1.1] mb-4 sm:mb-6 flex flex-col gap-1 sm:gap-2">
              <span>Pure space</span>
              <span className="text-2xl sm:text-3xl lg:text-4xl font-medium bg-gradient-to-r from-brand-blue to-brand-teal bg-clip-text text-transparent">
                Enjoy Your Space
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-brand-gray leading-relaxed mb-4 max-w-xl">
              India's premium range of disinfectants, floor cleaners, glass cleaners &
              hygiene solutions — for homes, offices & industries.
            </p>
            
            {/* Promotional Highlight Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ delay: 0.4 }}
              className="relative group mb-8 inline-block max-w-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-slate-200 rounded-2xl blur-md opacity-40 group-hover:opacity-60 transition duration-500"></div>
              <img 
                src={`${import.meta.env.BASE_URL}images/offer-banner.png`} 
                alt="Limited Time Offer - Products starting from 59/-" 
                className="relative rounded-2xl shadow-xl border border-gray-200 object-contain w-full max-w-[450px]"
              />
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10">
              <a
                href="#products"
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-blue text-white rounded-full font-semibold text-base hover:bg-brand-blue/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <Sparkles size={18} />
                Explore Products
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-brand-teal text-brand-teal rounded-full font-semibold text-base hover:bg-brand-teal hover:text-white transition-all duration-300"
              >
                Contact Us
                <ArrowRight size={18} />
              </a>
            </div>


          </motion.div>

          {/* Hero Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="w-full aspect-[4/3] max-w-lg mx-auto rounded-3xl flex items-center justify-center shadow-2xl border border-white/40 overflow-hidden bg-white/60 backdrop-blur-sm">
                <img 
                  src={`${import.meta.env.BASE_URL}images/hero-products-new.png`} 
                  alt="Pure Space Cleaners" 
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🌲</span>
                  <div>
                    <p className="text-xs font-semibold text-brand-dark">Pine Oil Base</p>
                    <p className="text-[10px] text-brand-gray">Natural Formula</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-3 shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🦠</span>
                  <div>
                    <p className="text-xs font-semibold text-brand-dark">Clean 99.9% Germs</p>
                    <p className="text-[10px] text-brand-gray">Hospital Grade</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
