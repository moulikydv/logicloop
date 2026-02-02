import React from 'react';
import { motion } from 'framer-motion';

interface FeatureSectionProps {
  title: string;
  description: string;
  image: string;
  reversed?: boolean;
  tag: string;
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({ title, description, image, reversed, tag }) => {
  return (
    <div className={`py-24 flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16 container mx-auto px-6`}>
      <motion.div
        initial={{ opacity: 0, x: reversed ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 space-y-6"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-bold text-xs tracking-widest uppercase border border-blue-100">{tag}</span>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
          {title}
        </h2>
        <p className="text-lg text-slate-500 leading-relaxed max-w-lg">
          {description}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 w-full"
      >
        <div className="relative group perspective-1000">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
          <img
            src={image}
            alt={title}
            className="relative rounded-3xl shadow-2xl w-full object-cover aspect-video border border-white/50 bg-slate-900"
          />
        </div>
      </motion.div>
    </div >
  );
};
