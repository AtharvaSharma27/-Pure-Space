import React, { useState } from 'react';
import { Camera, CheckCircle2, Sparkles, Package } from 'lucide-react';

const ProductImage = ({ variant }) => {
  const [imgError, setImgError] = useState(false);

  // Reset error state if variant changes
  React.useEffect(() => {
    setImgError(false);
  }, [variant]);

  if (variant.image && !imgError) {
    return (
      <img
        src={variant.image.startsWith("/") ? `${import.meta.env.BASE_URL}${variant.image.slice(1)}` : variant.image}
        alt={variant.fullName}
        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
        onError={() => setImgError(true)}
      />
    );
  }

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-500"
      style={{ backgroundColor: variant.imagePlaceholderColor }}
    >
      <Camera size={36} className="text-brand-gray/30 mb-2" />
      <p className="text-xs font-medium text-brand-gray/50 text-center px-4 leading-snug">
        {variant.name}
      </p>
    </div>
  );
};

const ShowcaseCard = ({ variants, size = "1 Ltr" }) => {
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);

  return (
    <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-teal/30 transition-all duration-300 hover:-translate-y-1 p-5 flex flex-col h-full">
      {/* Main Product Image Area */}
      <div className="relative w-full aspect-square overflow-hidden rounded-xl border border-gray-100 bg-gray-50/50 mb-5 cursor-pointer flex-shrink-0 group-hover:shadow-inner transition-all duration-500">
        <ProductImage variant={selectedVariant} />
      </div>

      {/* Main Product Info */}
      <div className="text-left mb-4 flex-shrink-0">
        <h2 className="text-xl font-bold text-brand-blue mb-1 leading-tight">{selectedVariant.fullName}</h2>
        <div className="text-lg font-bold text-brand-amber">
          {selectedVariant.price === "Contact for Best Price" ? (
            <a
              href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || '919876543210'}?text=${encodeURIComponent('Hi, I am interested in the best price for ' + selectedVariant.fullName)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-teal transition-colors underline decoration-brand-amber/30 hover:decoration-brand-teal underline-offset-4"
            >
              {selectedVariant.price}
            </a>
          ) : (
            selectedVariant.price
          )}
        </div>
        <div className="flex items-center gap-1.5 mt-2.5 text-sm text-brand-blue/80 font-medium">
          <Package size={16} className="text-brand-gray/80" />
          <span>{size}</span>
        </div>
      </div>

      {/* Premium Variant Selector */}
      <div className="mb-6 flex-shrink-0">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm text-gray-500 font-medium">Select Fragrance:</span>
          <span className="text-sm font-bold text-brand-teal capitalize">{selectedVariant.name}</span>
        </div>
        
        <div className="flex flex-wrap gap-2.5">
          {variants.map((v, i) => {
            const isActive = selectedVariant.name === v.name;
            return (
              <div 
                key={i}
                onClick={() => setSelectedVariant(v)}
                className={`relative cursor-pointer rounded-xl border-2 p-1.5 w-[72px] flex flex-col items-center justify-center transition-all duration-300 transform ${
                  isActive 
                    ? 'border-brand-teal bg-brand-teal/5 shadow-md scale-105' 
                    : 'border-gray-100 bg-white hover:border-brand-teal/30 hover:shadow-sm hover:-translate-y-0.5'
                }`}
              >
                {isActive && (
                  <div className="absolute -top-2 -right-2 bg-brand-teal text-white rounded-full p-0.5 shadow-sm">
                    <CheckCircle2 size={12} fill="currentColor" className="text-white" />
                  </div>
                )}
                <div className={`w-12 h-12 mb-1.5 rounded-lg overflow-hidden flex items-center justify-center ${isActive ? 'bg-white shadow-sm' : 'bg-gray-50'}`}>
                   {v.image ? (
                     <img src={v.image.startsWith("/") ? `${import.meta.env.BASE_URL}${v.image.slice(1)}` : v.image} alt={v.name} className="w-full h-full object-contain mix-blend-multiply" />
                   ) : (
                     <div className="w-full h-full" style={{ backgroundColor: v.imagePlaceholderColor }}></div>
                   )}
                </div>
                <span className={`text-[11px] leading-tight text-center truncate w-full px-1 ${isActive ? 'font-bold text-brand-teal' : 'font-medium text-gray-500'}`}>
                  {v.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Premium Properties / Features */}
      <div className="bg-gradient-to-br from-brand-teal/5 to-brand-blue/5 p-4 sm:p-5 rounded-2xl border border-brand-teal/10 mt-auto shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles size={16} className="text-brand-amber" />
          <h4 className="text-sm font-bold text-brand-blue">Key Features</h4>
        </div>
        <ul className="text-sm text-gray-700 space-y-2.5">
          {selectedVariant.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2.5 group/item">
              <CheckCircle2 size={16} className="text-brand-teal/70 mt-0.5 flex-shrink-0 group-hover/item:text-brand-teal transition-colors" />
              <span className="leading-snug">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShowcaseCard;
