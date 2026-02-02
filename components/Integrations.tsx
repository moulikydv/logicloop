import React from 'react';
import { motion } from 'framer-motion';

const platforms = [
  { name: 'Google Maps', icon: 'https://cdn-icons-png.flaticon.com/512/281/281764.png' },
  { name: 'Facebook', icon: 'https://cdn-icons-png.flaticon.com/512/733/733547.png' },
  { name: 'Yelp', icon: 'https://www.vectorlogo.zone/logos/yelp/yelp-icon.svg' },
  { name: 'Trustpilot', icon: 'https://static.cdnlogo.com/logos/t/66/trustpilot_800.png' },
];

export const Integrations: React.FC = () => {
  return (
    <section id="integrations" className="py-12 border-y border-slate-100 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-8">
        <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest">
          Integrated with your favorite platforms
        </p>
      </div>

      <div className="flex relative">
        <div className="flex animate-scroll whitespace-nowrap gap-16 md:gap-32 w-max">
          {/* Double the list for seamless scrolling */}
          {[...platforms, ...platforms, ...platforms].map((p, i) => (
            <div key={`${p.name}-${i}`} className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-pointer">
              <img src={p.icon} alt={p.name} className="w-8 h-8 object-contain" />
              <span className="text-xl font-bold text-slate-800">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .animate-scroll {
            animation: scroll 30s linear infinite;
        }
        @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  );
};
