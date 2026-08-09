import React from 'react';
import { motion } from 'framer-motion';
import ShowcaseCard from './ShowcaseCard';

const variants1L = [
  {
    name: 'Rose',
    fullName: 'Rose Floor Cleaner 1L',
    price: 'Contact for Best Price',
    fragrance: 'rose',
    image: '/products/pdf5_product_4.png',
    imagePlaceholderColor: '#FCE4EC',
    features: ['Deep Cleaning (Remove Dirt & Grease)', 'Fresh Rose Fragrance', 'No harmful chemical used', 'Fight bad odour']
  },
  {
    name: 'Lemon',
    fullName: 'Lemon Floor Cleaner 1L',
    price: 'Contact for Best Price',
    fragrance: 'lemon',
    image: '/products/pdf5_product_5.png',
    imagePlaceholderColor: '#FFFDE7',
    features: ['Deep Cleaning (Remove Dirt & Grease)', 'Fresh Lemon Fragrance', 'No harmful chemical used', 'Fight bad odour']
  },
  {
    name: 'Jasmine',
    fullName: 'Jasmine Floor Cleaner 1L',
    price: 'Contact for Best Price',
    fragrance: 'jasmine',
    image: '/products/pdf6_product_4.png',
    imagePlaceholderColor: '#E8F5E9',
    features: ['Deep Cleaning Power', 'Refreshing Jasmine Fragrance', 'Safe for all floors', 'Removes Tough Stains']
  }
];

const variants5L = [
  {
    name: 'Rose',
    fullName: 'Rose Floor Cleaner 5L',
    price: 'Contact for Best Price',
    fragrance: 'rose',
    image: '/products/new_product_2_0.png',
    imagePlaceholderColor: '#FCE4EC',
    features: ['Deep Cleaning (Remove Dirt & Grease)', 'Fresh Rose Fragrance', 'No harmful chemical used', 'Fight bad odour']
  },
  {
    name: 'Lemon',
    fullName: 'Lemon Floor Cleaner 5L',
    price: 'Contact for Best Price',
    fragrance: 'lemon',
    image: '/products/lemon_cleaner_extracted.png',
    imagePlaceholderColor: '#FFFDE7',
    features: ['Deep Cleaning (Remove Dirt & Grease)', 'Fresh Lemon Fragrance', 'No harmful chemical used', 'Fight bad odour']
  },
  {
    name: 'Jasmine',
    fullName: 'Jasmine Floor Cleaner 5L',
    price: 'Contact for Best Price',
    fragrance: 'jasmine',
    image: '/products/pdf6_product_2.png',
    imagePlaceholderColor: '#E8F5E9',
    features: ['Deep Cleaning Power', 'Refreshing Jasmine Fragrance', 'Safe for all floors', 'Removes Tough Stains']
  },
  {
    name: 'Power Wipe',
    fullName: 'Power Wipe Cleaner 5L',
    price: 'Contact for Best Price',
    fragrance: 'rose',
    image: '/products/power_wipe_extracted.png',
    imagePlaceholderColor: '#FCE4EC',
    features: ['Deep Cleaning (Remove Dirt & Grease)', 'Power GYM cleaner', 'No harmful chemical used', 'Fight bad odour']
  }
];

const LiquidShowcase = ({ onViewDetails }) => {
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

export default LiquidShowcase;
