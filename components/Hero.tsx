import React from 'react';
import { motion } from 'framer-motion';
import { Bot, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden bg-[#FAFAFA]">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto text-center max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-blue-700 text-sm font-bold mb-8 shadow-sm hover:shadow-md transition-shadow border border-blue-100"
        >
          <Bot size={18} className="text-blue-600" />
          <span className="tracking-wide uppercase text-xs">93% of customers read online reviews before visiting</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8 tracking-tight"
        >
          Automate your <br />
          <span className="gradient-text">5-Star Reputation.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-500 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Logic Loop captures positive reviews on autopilot and intercepts negative ones instantly.
          Master Google Maps, Facebook, and Yelp from one intelligent dashboard.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
        >
          <Link to="/get-started" className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl active:scale-95 flex items-center justify-center gap-2 group decoration-0">
            Get Started Free
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a href="#demo" className="w-full sm:w-auto glass text-slate-900 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-white transition-all active:scale-95 flex items-center justify-center gap-2 border border-slate-200">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              <Play size={14} className="text-blue-600 fill-blue-600 ml-0.5" />
            </div>
            Watch Demo
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 relative"
        >
          {/* Dashboard mockup removed as requested */}
        </motion.div>
      </div>
    </section>
  );
};
