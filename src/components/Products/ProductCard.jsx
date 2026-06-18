import React from 'react';
import { motion } from 'framer-motion';
import { Camera, ArrowRight, Package } from 'lucide-react';
import { fragranceConfig } from '../../data/fragranceMap';

const ProductCard = ({ product, index, onViewDetails }) => {
  const frag = fragranceConfig[product.fragrance] || fragranceConfig.none;

  const badgeColors = {
    'Best Seller': 'bg-brand-amber text-white',
    Premium: 'bg-gradient-to-r from-brand-blue to-brand-teal text-white',
    New: 'bg-emerald-500 text-white',
    'Eco Choice': 'bg-green-600 text-white',
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-teal/20 transition-all duration-300 hover:-translate-y-1 flex flex-col"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        {product.badge && (
          <span
            className={`absolute top-3 right-3 z-10 px-3 py-1 rounded-full text-xs font-bold shadow-md ${
              badgeColors[product.badge] || 'bg-brand-amber text-white'
            }`}
          >
            {product.badge}
          </span>
        )}

        <ProductImage product={product} />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        {/* Fragrance chip */}
        <div
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium w-fit mb-2.5"
          style={{ backgroundColor: frag.bg, color: frag.color }}
        >
          <span>{frag.emoji}</span>
          <span>{frag.label}</span>
        </div>

        {/* Product Name */}
        <h3 className="text-base sm:text-lg font-bold text-brand-blue leading-snug mb-1.5">
          {product.name}
        </h3>

        {/* Price */}
        <p className="text-base sm:text-xl font-bold text-brand-amber mb-3">
          {product.price}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {product.features.slice(0, 3).map((feat) => (
            <span
              key={feat}
              className="px-2.5 py-1 bg-gray-50 border border-gray-100 rounded-lg text-[11px] sm:text-xs font-medium text-brand-gray"
            >
              {feat}
            </span>
          ))}
        </div>

        {/* Pack info */}
        <div className="flex items-center gap-3 text-xs text-brand-gray mb-4 mt-auto">
          <span className="flex items-center gap-1">
            <Package size={13} />
            {product.packSize}
          </span>
          {product.minOrder && (
            <>
              <span className="text-gray-200">|</span>
              <span>Min: {product.minOrder}</span>
            </>
          )}
        </div>

        {/* CTA */}
        <button
          onClick={() => onViewDetails(product)}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-brand-teal/10 text-brand-teal rounded-xl font-semibold text-sm hover:bg-brand-teal hover:text-white transition-all duration-300"
        >
          View Details
          <ArrowRight size={16} />
        </button>
      </div>
    </motion.div>
  );
};

const ProductImage = ({ product }) => {
  const [imgError, setImgError] = React.useState(false);

  if (product.image && !imgError) {
    return (
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500"
        onError={() => setImgError(true)}
      />
    );
  }

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-500"
      style={{ backgroundColor: product.imagePlaceholderColor }}
    >
      <Camera size={36} className="text-brand-gray/30 mb-2" />
      <p className="text-xs font-medium text-brand-gray/50 text-center px-4 leading-snug">
        {product.name}
      </p>
      <p className="text-[10px] text-brand-gray/30 mt-1">Product Image</p>
    </div>
  );
};

export default ProductCard;
