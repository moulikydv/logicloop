import React from 'react';
import { motion } from 'framer-motion';
import { Video, Instagram, TrendingUp } from 'lucide-react';

export const ComingSoon: React.FC = () => {
  return (
    <section id="coming-soon" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-slate-50 skew-x-12 translate-x-32 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 order-2 md:order-1 relative"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-tr from-blue-400 to-blue-600 rounded-3xl blur opacity-30 group-hover:opacity-40 transition duration-1000"></div>
              {/* Use the specific artifact path if copying fails, but assuming copy works to public/video_analysis.png */}
              {/* Note: In previous step I am copying it to public/video_analysis.png. */}
              {/* Wait, the generate_image tool adds a timestamp to the filename! I must capture that. */}
              {/* I can't know the timestamped filename in the same turn before generation. */}
              {/* I need to do generation in one turn, and copy/code in the next. */}
              {/* For now, I will use a placeholder or assume I fix it next turn. */}
              {/* actually I will use a generic placeholder name in code and fix the file usage in next turn. */}
              <img src="/video_analysis.png" className="relative rounded-2xl shadow-2xl border border-white/50 w-full" alt="Video Review Analysis" />
            </div>

            {/* Design Elements */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-6 -right-6 glass p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-white/50"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 to-red-500 flex items-center justify-center text-white">
                <Instagram size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500">Instagram Reels</p>
                <p className="text-sm font-bold text-slate-900">Sentiment: Positive</p>
              </div>
            </motion.div>
          </motion.div>

          <div className="flex-1 order-1 md:order-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-xs uppercase tracking-widest"
            >
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              Coming in Q2 2026
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
              Video is the New <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Written Review.</span>
            </h2>

            <p className="text-xl text-slate-500 leading-relaxed">
              Your customers are talking about you on <span className="text-slate-900 font-bold">TikTok</span> and <span className="text-slate-900 font-bold">Instagram Reels</span>.
              Logic Loop's upcoming engine utilizes Computer Vision to analyze facial expressions and sentiment in video content.
            </p>

            <ul className="space-y-4 text-slate-600">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                  <TrendingUp size={14} className="text-green-600" />
                </div>
                <span>Automatic mention detection on TikTok & Reels</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                  <Video size={14} className="text-green-600" />
                </div>
                <span>Facial expression sentiment analysis</span>
              </li>
            </ul>

            <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center gap-3 shadow-xl hover:shadow-2xl">
              Join the Beta Waitlist
              <TrendingUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
