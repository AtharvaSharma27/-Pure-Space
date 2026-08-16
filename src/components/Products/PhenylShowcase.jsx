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
    imagePlaceholderColor: '#E8F5E9',
    features: ['Cost-Efficient Concentration', 'Surface Versatility', 'Engineered for Professionals', 'Ultra-Stable Emulsion', 'Safe for daily use']
  },
  {
    name: 'Lavender',
    fullName: 'Lavender Phenyl',
    price: 'Contact for Best Price',
    fragrance: 'lavender',
    image: '/products/new_product_10_0.png',
    imagePlaceholderColor: '#EDE7F6',
    features: ['Aromatherapeutic Clean', 'Dual-Action Performance', 'Engineered for Professionals', 'Ultra-Stable Emulsion', 'Safe for daily use']
  },
  {
    name: 'Lemon',
    fullName: 'Lemongrass Phenyl',
    price: 'Contact for Best Price',
    fragrance: 'lemon',
    image: '/products/new_product_11_0.png',
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
    imagePlaceholderColor: '#E3F2FD',
    features: ['The Signature "Pure"', 'Dual-Action Performance', 'Engineered for Professionals', 'Ultra-Stable Emulsion', 'Safe for daily use']
  },
  {
    name: 'Rose',
    fullName: 'Rose Phenyl',
    price: 'Contact for Best Price',
    fragrance: 'rose',
    image: '/products/extracted_page0.png',
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
    image: '/products/pdf8_img1_0.png',
    imagePlaceholderColor: '#FCE4EC',
    features: ['Aromatherapeutic Clean', 'Dual-Action Performance', 'Engineered for Professionals', 'Ultra-Stable Emulsion', 'Safe for daily use']
  },
  {
    name: 'Pine',
    fullName: 'White Phenyl',
    price: 'Contact for Best Price',
    fragrance: 'pine',
    image: '/products/pdf5_product_1.jpeg',
    imagePlaceholderColor: '#E8F5E9',
    features: ['Cost-Efficient Concentration', 'Surface Versatility', 'Engineered for Professionals', 'Ultra-Stable Emulsion', 'Safe for daily use']
  },
  {
    name: 'Lavender',
    fullName: 'Lavender Phenyl',
    price: 'Contact for Best Price',
    fragrance: 'lavender',
    image: '/products/pdf5_product_3.png',
    imagePlaceholderColor: '#EDE7F6',
    features: ['Aromatherapeutic Clean', 'Dual-Action Performance', 'Engineered for Professionals', 'Ultra-Stable Emulsion', 'Safe for daily use']
  },
  {
    name: 'Lemon',
    fullName: 'Lemongrass Phenyl',
    price: 'Contact for Best Price',
    fragrance: 'lemon',
    image: '/products/pdf5_product_2.png',
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
