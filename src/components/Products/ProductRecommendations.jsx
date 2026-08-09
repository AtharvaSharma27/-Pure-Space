import React from 'react';

const ProductRecommendations = ({ recommendations, onViewDetails }) => {
  if (!recommendations || recommendations.length === 0) return null;

  return (
    <div className="mt-16 border-t border-gray-200 pt-10">
      <h3 className="text-[20px] sm:text-2xl font-bold text-brand-blue mb-6">
        Recommended For You
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {recommendations.map((product, idx) => (
          <div 
            key={idx}
            onClick={() => onViewDetails && onViewDetails(product)}
            className="group bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:border-brand-teal/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 mb-4 flex-shrink-0 flex items-center justify-center">
              <img 
                src={product.image?.startsWith("/") ? `${import.meta.env.BASE_URL}${product.image.slice(1)}` : product.image} 
                alt={product.name} 
                className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <h4 className="text-sm font-semibold text-gray-800 leading-snug line-clamp-2 mb-1">
              {product.name}
            </h4>
            <span className="text-xs text-brand-blue/70">{product.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductRecommendations;
