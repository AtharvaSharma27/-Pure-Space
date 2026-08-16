import React from 'react';
import { motion } from 'framer-motion';
import ShowcaseCard from './ShowcaseCard';

const variants1L = [
  {
    name: 'Rose',
    fullName: 'Rose Floor Cleaner',
    price: 'Contact for Best Price',
    fragrance: 'rose',
    image: '/products/final_product_7.png',
    imagePlaceholderColor: '#FCE4EC',
    features: ['Deep Cleaning (Remove Dirt & Grease)', 'Fresh Rose Fragrance', 'No harmful chemical used', 'Fight bad odour']
  },
  {
    name: 'Lemon',
    fullName: 'Lemon Floor Cleaner',
    price: 'Contact for Best Price',
    fragrance: 'lemon',
    image: '/products/pdf5_product_5.png',
    imagePlaceholderColor: '#FFFDE7',
    features: ['Deep Cleaning (Remove Dirt & Grease)', 'Fresh Lemon Fragrance', 'No harmful chemical used', 'Fight bad odour']
  },
  {
    name: 'Jasmine',
    fullName: 'Jasmine Floor Cleaner',
    price: 'Contact for Best Price',
    fragrance: 'jasmine',
    image: '/products/untitled_product_2.jpeg',
    imagePlaceholderColor: '#E8F5E9',
    features: ['Deep Cleaning Power', 'Refreshing Jasmine Fragrance', 'Safe for all floors', 'Removes Tough Stains']
  }
];

const variants5L = [
  {
    name: 'Rose',
    fullName: 'Rose Floor Cleaner',
    price: 'Contact for Best Price',
    fragrance: 'rose',
    image: '/products/final_product_8.png',
    imagePlaceholderColor: '#FCE4EC',
    features: ['Deep Cleaning (Remove Dirt & Grease)', 'Fresh Rose Fragrance', 'No harmful chemical used', 'Fight bad odour']
  },
  {
    name: 'Lemon',
    fullName: 'Lemon Floor Cleaner',
    price: 'Contact for Best Price',
    fragrance: 'lemon',
    image: '/products/final_product_11.png',
    imagePlaceholderColor: '#FFFDE7',
    features: ['Deep Cleaning (Remove Dirt & Grease)', 'Fresh Lemon Fragrance', 'No harmful chemical used', 'Fight bad odour']
  },
  {
    name: 'Jasmine',
    fullName: 'Jasmine Floor Cleaner',
    price: 'Contact for Best Price',
    fragrance: 'jasmine',
    image: '/products/untitled_product_3.jpeg',
    imagePlaceholderColor: '#E8F5E9',
    features: ['Deep Cleaning Power', 'Refreshing Jasmine Fragrance', 'Safe for all floors', 'Removes Tough Stains']
  },
  {
    name: 'Power Wipe',
    fullName: 'Power Wipe Cleaner',
    price: 'Contact for Best Price',
    fragrance: 'rose',
    image: '/products/untitled_product_6.jpeg',
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
        <ShowcaseCard variants={variants1L} size="1 Ltr" onViewDetails={onViewDetails} />
        <ShowcaseCard variants={variants5L} size="5 Ltr" onViewDetails={onViewDetails} />
      </div>
    </motion.div>
  );
};

export default LiquidShowcase;
