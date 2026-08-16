import React from 'react';
import { motion } from 'framer-motion';
import ShowcaseCard from './ShowcaseCard';

// Hardcoded variants based on the phenyl products in data
const variants1L = [
  {
    name: 'Pine',
    fullName: 'White Phenyl',
    price: 'Contact for Best Price',
    fragrance: 'pine',
    image: '/products/new_product_9_0.jpeg',
    imagePlaceholderColor: '#FFFFFF',
    features: ['Cost-Efficient Concentration', 'Surface Versatility', 'Engineered for Professionals', 'Ultra-Stable Emulsion', 'Safe for daily use']
  },
  {
    name: 'Lavender',
    fullName: 'Lavender Phenyl',
    price: 'Contact for Best Price',
    fragrance: 'lavender',
    image: '/products/final_product_1.png',
    imagePlaceholderColor: '#EDE7F6',
    features: ['Aromatherapeutic Clean', 'Dual-Action Performance', 'Engineered for Professionals', 'Ultra-Stable Emulsion', 'Safe for daily use']
  },
  {
    name: 'Lemon',
    fullName: 'Lemon Phenyl',
    price: 'Contact for Best Price',
    fragrance: 'lemon',
    image: '/products/final_product_2.png',
    imagePlaceholderColor: '#FFFDE7',
    features: ['Aromatherapeutic Clean', 'Dual-Action Performance', 'Engineered for Professionals', 'Ultra-Stable Emulsion', 'Safe for daily use']
  },
  {
    name: 'Lemongrass',
    fullName: 'Lemongrass Phenyl',
    price: 'Contact for Best Price',
    fragrance: 'lemon',
    image: '/products/extracted_page1.png',
    imagePlaceholderColor: '#FFFDE7',
    features: ['Aromatherapeutic Clean', 'Dual-Action Performance', 'Engineered for Professionals', 'Ultra-Stable Emulsion', 'Safe for daily use']
  },
  {
    name: 'Kapoor',
    fullName: 'Kapoor Phenyl',
    price: 'Contact for Best Price',
    fragrance: 'camphor',
    image: '/products/new_product_12_0.png',
    imagePlaceholderColor: '#FFFFFF',
    features: ['The Signature "Pure"', 'Dual-Action Performance', 'Engineered for Professionals', 'Ultra-Stable Emulsion', 'Safe for daily use']
  },
  {
    name: 'Rose',
    fullName: 'Rose Phenyl',
    price: 'Contact for Best Price',
    fragrance: 'rose',
    image: '/products/final_product_5.png',
    imagePlaceholderColor: '#FCE4EC',
    features: ['Aromatherapeutic Clean', 'Dual-Action Performance', 'Engineered for Professionals', 'Ultra-Stable Emulsion', 'Safe for daily use']
  }
];

const variants5L = [
  {
    name: 'Rose',
    fullName: 'Rose Phenyl',
    price: 'Contact for Best Price',
    fragrance: 'rose',
    image: '/products/final_product_12.png',
    imagePlaceholderColor: '#FCE4EC',
    features: ['Aromatherapeutic Clean', 'Dual-Action Performance', 'Engineered for Professionals', 'Ultra-Stable Emulsion', 'Safe for daily use']
  },
  {
    name: 'Pine',
    fullName: 'White Phenyl',
    price: 'Contact for Best Price',
    fragrance: 'pine',
    image: '/products/pdf5_product_1.jpeg',
    imagePlaceholderColor: '#FFFFFF',
    features: ['Cost-Efficient Concentration', 'Surface Versatility', 'Engineered for Professionals', 'Ultra-Stable Emulsion', 'Safe for daily use']
  },
  {
    name: 'Lavender',
    fullName: 'Lavender Phenyl',
    price: 'Contact for Best Price',
    fragrance: 'lavender',
    image: '/products/final_product_6.png',
    imagePlaceholderColor: '#EDE7F6',
    features: ['Aromatherapeutic Clean', 'Dual-Action Performance', 'Engineered for Professionals', 'Ultra-Stable Emulsion', 'Safe for daily use']
  },
  {
    name: 'Lemon',
    fullName: 'Lemon Phenyl',
    price: 'Contact for Best Price',
    fragrance: 'lemon',
    image: '/products/final_product_13.png',
    imagePlaceholderColor: '#FFFDE7',
    features: ['Aromatherapeutic Clean', 'Dual-Action Performance', 'Engineered for Professionals', 'Ultra-Stable Emulsion', 'Safe for daily use']
  },
  {
    name: 'Lemongrass',
    fullName: 'Lemongrass Phenyl',
    price: 'Contact for Best Price',
    fragrance: 'lemon',
    image: '/products/pdf8_img3_0.png',
    imagePlaceholderColor: '#FFFDE7',
    features: ['Aromatherapeutic Clean', 'Dual-Action Performance', 'Engineered for Professionals', 'Ultra-Stable Emulsion', 'Safe for daily use']
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
        <ShowcaseCard variants={variants1L} size="1 Ltr" onViewDetails={onViewDetails} />
        <ShowcaseCard variants={variants5L} size="5 Ltr" onViewDetails={onViewDetails} />
      </div>
    </motion.div>
  );
};

export default PhenylShowcase;
