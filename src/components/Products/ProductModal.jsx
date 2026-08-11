import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useDragControls } from 'framer-motion';
import { X, Camera, Package, Droplets, Palette, FlaskConical, MapPin, Boxes, Tag, Mail } from 'lucide-react';
import { fragranceConfig } from '../../data/fragranceMap';

const ProductModal = ({ product, onClose, onGetQuote }) => {
  const dragControls = useDragControls();
  const frag = fragranceConfig[product.fragrance] || fragranceConfig.none;

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const specs = [
    { icon: Package, label: 'Pack Size', value: product.packSize },
    { icon: Droplets, label: 'Fragrance', value: product.fragranceLabel },
    { icon: Palette, label: 'Color', value: product.color },
    { icon: Tag, label: 'Form', value: product.form },
    { icon: FlaskConical, label: 'Base', value: product.baseIngredient },
    { icon: MapPin, label: 'Usage', value: product.usageAreas?.join(', ') },
    { icon: Boxes, label: 'Min Order', value: product.minOrder || 'No minimum' },
    { icon: Package, label: 'Pack Type', value: product.packagingType },
  ];

  if (product.dilutionRatio) {
    specs.push({ icon: Droplets, label: 'Dilution', value: product.dilutionRatio });
  }
  if (product.shelfLife) {
    specs.push({ icon: Tag, label: 'Shelf Life', value: product.shelfLife });
  }
  if (product.clothesType) {
    specs.push({ icon: Tag, label: 'Clothes Type', value: product.clothesType });
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          drag="y"
          dragControls={dragControls}
          dragListener={false}
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={0.7}
          onDragEnd={(e, { offset, velocity }) => {
            if (offset.y > 100 || velocity.y > 500) {
              onClose();
            }
          }}
          className="relative w-full sm:max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl z-10 touch-pan-y"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 hover:bg-gray-100 shadow-md transition-colors"
            aria-label="Close modal"
          >
            <X size={20} className="text-brand-dark" />
          </button>

          {/* Draggable Header Area (Image + Handle) */}
          <div 
            className="w-full cursor-grab active:cursor-grabbing"
            onPointerDown={(e) => dragControls.start(e)}
            style={{ touchAction: 'none' }}
          >
            {/* Drag indicator (mobile) */}
            <div className="sm:hidden flex justify-center pt-3 pb-1">
              <div className="w-10 h-1 rounded-full bg-gray-300" />
            </div>

            {/* Product Image */}
            <ModalImage product={product} />
          </div>

          {/* Content */}
          <div className="p-5 sm:p-8">
            {/* Name + Price */}
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-blue">
                {product.name}
              </h2>
              {product.price === "Contact for Best Price" || product.price === "Contact for best Price" ? (
                <a 
                  href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || '919876543210'}?text=${encodeURIComponent('Hi, I am interested in the best price for ' + product.name)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg sm:text-xl font-bold text-brand-amber bg-brand-amber/10 px-3 py-1 rounded-lg hover:bg-brand-amber/20 transition-colors block"
                >
                  {product.price}
                </a>
              ) : (
                <span className="text-lg sm:text-xl font-bold text-brand-amber bg-brand-amber/10 px-3 py-1 rounded-lg">
                  {product.price}
                </span>
              )}
            </div>

            {/* Fragrance chip - large */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-5"
              style={{ backgroundColor: frag.bg, color: frag.color }}
            >
              <span className="text-lg">{frag.emoji}</span>
              <span>{frag.label}</span>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-brand-gray leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Specs Table */}
            <div className="bg-brand-bg-light rounded-2xl p-4 sm:p-5 mb-6">
              <h4 className="text-sm font-semibold text-brand-dark mb-3 uppercase tracking-wider">
                Specifications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {specs.map((spec) => {
                  const Icon = spec.icon;
                  return (
                    <div key={spec.label} className="flex items-start gap-2.5">
                      <Icon size={15} className="text-brand-teal mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-xs text-brand-gray">{spec.label}</span>
                        <p className="text-sm font-medium text-brand-dark">{spec.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-6">
              {product.features.map((feat) => (
                <span
                  key={feat}
                  className="px-3 py-1.5 bg-brand-teal/10 text-brand-teal rounded-lg text-xs sm:text-sm font-medium"
                >
                  {feat}
                </span>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => onGetQuote(product.name)}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-brand-blue text-white rounded-xl font-semibold text-base hover:bg-brand-blue/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Mail size={18} />
              📩 Get Best Quote for This Product
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

const ModalImage = ({ product }) => {
  const [imgError, setImgError] = useState(false);

  if (product.image && !imgError) {
    return (
      <div className="w-full aspect-[4/3] sm:aspect-[16/9] overflow-hidden bg-gray-50 flex items-center justify-center">
        <img
          src={product.image.startsWith("/") ? `${import.meta.env.BASE_URL}${product.image.slice(1)}` : product.image}
          alt={product.name}
          className="w-full h-full object-contain p-4"
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  return (
    <div
      className="w-full aspect-[4/3] sm:aspect-[16/9] flex flex-col items-center justify-center"
      style={{ backgroundColor: product.imagePlaceholderColor }}
    >
      <Camera size={48} className="text-brand-gray/30 mb-2" />
      <p className="text-sm font-medium text-brand-gray/50">{product.name}</p>
      <p className="text-xs text-brand-gray/30 mt-1">Product Image</p>
    </div>
  );
};

export default ProductModal;
