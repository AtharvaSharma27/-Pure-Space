import { motion } from 'framer-motion';
import { ShieldCheck, Trees, Flower2, Leaf, Package, Flag, Building2, Droplets } from 'lucide-react';

const trustBadges = [
  { icon: ShieldCheck, label: 'Kills 99.9% Germs' },
  { icon: Trees, label: 'Pine Oil Base Formula' },
  { icon: Flower2, label: '6+ Unique Fragrances' },
  { icon: Leaf, label: 'Eco-Friendly Options' },
  { icon: Package, label: 'Bulk Supply Available' },
  { icon: Flag, label: 'Made in India' },
  { icon: Building2, label: 'Hospital Grade' },
  { icon: Droplets, label: 'Ready to Use' },
];

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <h2 className="text-[26px] sm:text-4xl font-semibold text-brand-blue mb-6">
              About Pure Space
            </h2>
            <p className="text-sm sm:text-base text-brand-gray leading-relaxed">
              Pure Space is an Indian cleaning solutions brand committed to delivering
              hospital-grade hygiene with everyday affordability. Manufactured using authentic
              Pine Oil base and natural fragrances, our products are trusted by households,
              hospitals, hotels, offices, and industrial facilities across India.
            </p>
            <p className="text-sm sm:text-base text-brand-gray leading-relaxed mt-4">
              From powerful disinfectants to rich-fragranced floor cleaners — every Pure Space
              product is crafted to leave your spaces genuinely clean, fresh, and safe.
            </p>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-2 gap-3">
              {trustBadges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <motion.div
                    key={badge.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 + 0.3 }}
                    className="group flex items-center gap-2.5 px-3 py-3 rounded-xl border border-brand-teal/20 bg-white hover:bg-brand-teal hover:border-brand-teal transition-all duration-300 cursor-default shadow-sm"
                  >
                    <Icon
                      size={18}
                      className="text-brand-teal group-hover:text-white transition-colors flex-shrink-0"
                    />
                    <span className="text-xs sm:text-sm font-medium text-brand-dark group-hover:text-white transition-colors leading-tight">
                      {badge.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
