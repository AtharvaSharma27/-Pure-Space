import { motion, AnimatePresence } from 'framer-motion';
import CategoryFilter from './CategoryFilter';
import ProductCard from './ProductCard';
import PhenylShowcase from './PhenylShowcase';
import LiquidShowcase from './LiquidShowcase';
import ProductRecommendations from './ProductRecommendations';
import { useProductFilter } from '../../hooks/useProductFilter';
import { products } from '../../data/products';

const getProductById = (id) => products.find(p => p.id === id) || {};

const phenylRecommendations = [
  { ...getProductById(23), name: 'Toilet Cleaner', category: 'Bathroom Care' }, // id 23 is Toilet Cleaner 5Ltr
  { ...getProductById(24), name: 'Glass Cleaner', category: 'Surface Care' }, // id 24 is Glass Cleaner 5Ltr
  { ...getProductById(13), name: 'Hand Wash', category: 'Personal Care' }, // id 13 is Liquid Hand Wash
  { ...getProductById(7), name: 'Dish Wash Liquid', category: 'Kitchen Care' } // id 7 is Dish Washing Liquid
];

const liquidRecommendations = [
  { ...getProductById(8), name: 'Premium White Phenyl', category: 'Floor Care' }, // id 8 is Premium White Phenyl
  { ...getProductById(12), name: 'Multi-Surface Cleaner', category: 'Surface Care' }, // id 12 is Multi-Surface Cleaner
  { ...getProductById(16), name: 'Air Freshener', category: 'Home Care' }, // id 16 is Air Freshener
  { ...getProductById(14), name: 'Liquid Detergent', category: 'Laundry Care' } // id 14 is Premium Liquid Detergent
];

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

        {/* Product Grid or Showcase */}
        {activeCategory === 'phenyl' ? (
          <>
            <PhenylShowcase onViewDetails={onViewDetails} />
            <ProductRecommendations recommendations={phenylRecommendations} onViewDetails={onViewDetails} />
          </>
        ) : activeCategory === 'liquid' ? (
          <>
            <LiquidShowcase onViewDetails={onViewDetails} />
            <ProductRecommendations recommendations={liquidRecommendations} onViewDetails={onViewDetails} />
          </>
        ) : activeCategory === 'all' ? (
          <>
            {/* Phenyls Section using Showcase */}
            <div id="phenyl-range" className="mb-16">
              <h3 className="text-2xl font-semibold text-brand-blue mb-8 text-center sm:text-left px-4">
                Premium Phenyl Range
              </h3>
              <PhenylShowcase onViewDetails={onViewDetails} />
            </div>

            {/* Liquid Floor Cleaners Section using Showcase */}
            <div id="liquid-cleaners" className="mb-16">
              <h3 className="text-2xl font-semibold text-brand-blue mb-8 text-center sm:text-left px-4">
                Liquid Floor Cleaners
              </h3>
              <LiquidShowcase onViewDetails={onViewDetails} />
            </div>

            {/* Other Products Section */}
            <div id="other-products" className="mb-8">
              <h3 className="text-2xl font-semibold text-brand-blue mb-8 text-center sm:text-left px-4">
                Other Cleaning Solutions
              </h3>
              <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                <AnimatePresence mode="popLayout">
                  {filteredProducts
                    .filter((product) => product.category !== 'phenyl' && product.category !== 'liquid')
                    .map((product, index) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      index={index}
                      onViewDetails={onViewDetails}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Products count */}
            <motion.p
              layout
              className="text-center text-sm text-brand-gray mt-8"
            >
              Showing {filteredProducts.length} of {products.length} products
            </motion.p>
          </>
        ) : (
          <>
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
              Showing {filteredProducts.length} of {products.length} products
            </motion.p>
          </>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
