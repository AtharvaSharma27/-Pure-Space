import React from 'react';
import { motion } from 'framer-motion';
import ShowcaseCard from './ShowcaseCard';

// Hardcoded variants based on the phenyl products in data
const variants1L = [
  {
    name: 'Pine',
    fullName: 'Premium White Phenyl 1L',
    price: 'Contact for Best Price',
    fragrance: 'pine',
    image: '/products/new_product_9_0.jpeg',
    imagePlaceholderColor: '#E8F5E9',
    features: ['Cost-Efficient Concentration', 'Surface Versatility', 'Engineered for Professionals', 'Ultra-Stable Emulsion', 'Premium for use']
  },
  {
    name: 'Lavender',
    fullName: 'Premium Lavender Phenyl 1L',
    price: 'Contact for Best Price',
    fragrance: 'lavender',
    image: '/products/new_product_10_0.png',
    imagePlaceholderColor: '#EDE7F6',
    features: ['Aromatherapeutic Clean', 'Dual-Action Performance', 'Engineered for Professionals', 'Ultra-Stable Emulsion', 'Premium for use']
  },
  {
    name: 'Lemongrass',
    fullName: 'Premium Lemongrass Phenyl 1L',
    price: 'Contact for Best Price',
    fragrance: 'lemon',
    image: '/products/new_product_11_0.png',
    imagePlaceholderColor: '#FFFDE7',
    features: ['Aromatherapeutic Clean', 'Dual-Action Performance', 'Engineered for Professionals', 'Ultra-Stable Emulsion', 'Premium for use']
  },
  {
    name: 'Kapoor',
    fullName: 'Premium Kapoor Phenyl 1L',
    price: 'Contact for Best Price',
    fragrance: 'camphor',
    image: '/products/new_product_12_0.png',
    imagePlaceholderColor: '#E3F2FD',
    features: ['The Signature "Pure"', 'Dual-Action Performance', 'Engineered for Professionals', 'Ultra-Stable Emulsion', 'Premium for use']
  }
];

const variants5L = [
  {
    name: 'Pine',
    fullName: 'Premium White Phenyl 5L',
    price: 'Contact for Best Price',
    fragrance: 'pine',
    image: '/products/pdf5_product_1.jpeg',
    imagePlaceholderColor: '#E8F5E9',
    features: ['Cost-Efficient Concentration', 'Surface Versatility', 'Engineered for Professionals', 'Ultra-Stable Emulsion', 'Premium for use']
  },
  {
    name: 'Lavender',
    fullName: 'Premium Lavender Phenyl 5L',
    price: 'Contact for Best Price',
    fragrance: 'lavender',
    image: '/products/pdf5_product_3.png',
    imagePlaceholderColor: '#EDE7F6',
    features: ['Aromatherapeutic Clean', 'Dual-Action Performance', 'Engineered for Professionals', 'Ultra-Stable Emulsion', 'Premium for use']
  },
  {
    name: 'Lemongrass',
    fullName: 'Premium Lemongrass Phenyl 5L',
    price: 'Contact for Best Price',
    fragrance: 'lemon',
    image: '/products/pdf5_product_2.png',
    imagePlaceholderColor: '#FFFDE7',
    features: ['Aromatherapeutic Clean', 'Dual-Action Performance', 'Engineered for Professionals', 'Ultra-Stable Emulsion', 'Premium for use']
  }
];

const PhenylShowcase = ({ onViewDetails }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-5xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ShowcaseCard variants={variants1L} />
        <ShowcaseCard variants={variants5L} />
      </div>
    </motion.div>
  );
};

export default PhenylShowcase;
