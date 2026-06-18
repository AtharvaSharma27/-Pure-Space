import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { categories } from '../../data/products';

const CategoryFilter = ({ activeCategory, setActiveCategory, categoryCounts }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const activeEl = scrollRef.current.querySelector('[data-active="true"]');
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeCategory]);

  return (
    <div
      ref={scrollRef}
      className="category-scroll flex gap-2 sm:gap-3 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center"
    >
      {categories.map((cat) => {
        const isActive = activeCategory === cat.id;
        return (
          <motion.button
            key={cat.id}
            data-active={isActive}
            onClick={() => setActiveCategory(cat.id)}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap border transition-all duration-200 flex-shrink-0 ${
              isActive
                ? 'bg-brand-teal text-white border-brand-teal shadow-md'
                : 'bg-white text-brand-gray border-gray-200 hover:border-brand-teal/40 hover:text-brand-teal'
            }`}
          >
            {cat.label}
            <span
              className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold ${
                isActive ? 'bg-white/25 text-white' : 'bg-gray-100 text-brand-gray'
              }`}
            >
              {categoryCounts[cat.id] || 0}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
