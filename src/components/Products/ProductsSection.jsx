import { motion, AnimatePresence } from 'framer-motion';
import CategoryFilter from './CategoryFilter';
import ProductCard from './ProductCard';
import { useProductFilter } from '../../hooks/useProductFilter';

const ProductsSection = ({ onViewDetails }) => {
  const { activeCategory, setActiveCategory, filteredProducts, categoryCounts } =
    useProductFilter();

  return (
    <section id="products" className="py-16 sm:py-24 bg-brand-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-[26px] sm:text-4xl font-semibold text-brand-blue mb-3">
            Our Products
          </h2>
          <p className="text-sm sm:text-base text-brand-gray max-w-2xl mx-auto">
            Explore our complete range of cleaning solutions — from floor cleaners and
            disinfectants to glass cleaners and new hygiene products.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="mb-8 sm:mb-10">
          <CategoryFilter
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            categoryCounts={categoryCounts}
          />
        </div>

        {/* Product Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                onViewDetails={onViewDetails}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Products count */}
        <motion.p
          layout
          className="text-center text-sm text-brand-gray mt-8"
        >
          Showing {filteredProducts.length} of 17 products
        </motion.p>
      </div>
    </section>
  );
};

export default ProductsSection;
