import { motion } from 'framer-motion';

const features = [
  { emoji: '🦠', title: 'Kills 99.9% Germs', desc: 'Hospital-grade disinfection in every product' },
  { emoji: '🌲', title: 'Pine Oil Base', desc: 'Authentic pine-oil for genuine germ kill' },
  { emoji: '🌸', title: 'Rich Fragrances', desc: '6+ unique fragrances — Lemon, Lavender, Rose, Camphor, Pine, Lemongrass' },
  { emoji: '💧', title: 'Ready-to-Use', desc: 'No dilution needed — just apply and clean' },
  { emoji: '🏭', title: 'Bulk Supply', desc: 'MOQ available for businesses and distributors' },
  { emoji: '♻️', title: 'Eco-Friendly', desc: 'Water-based, non-toxic formulations in select products' },
  { emoji: '📦', title: 'Multiple Pack Sizes', desc: '250ml to 5L to suit every need' },
  { emoji: '🏥', title: 'Industry Approved', desc: 'Hospitals, Hotels, Offices & Homes' },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-[26px] sm:text-4xl font-semibold text-brand-blue mb-3">
            Why Choose Pure Space?
          </h2>
          <p className="text-sm sm:text-base text-brand-gray max-w-2xl mx-auto">
            Every product is designed with care, quality, and performance in mind.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className={`rounded-2xl p-5 sm:p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                index % 2 === 0 ? 'bg-brand-bg-light' : 'bg-white border border-gray-100'
              }`}
            >
              <div className="text-4xl sm:text-5xl mb-3">{feature.emoji}</div>
              <h3 className="text-sm sm:text-base font-bold text-brand-blue mb-1.5">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-brand-gray leading-snug">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
