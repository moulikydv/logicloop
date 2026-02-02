import React from 'react';
import { motion } from 'framer-motion';
import { Search, PhoneCall, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';

const steps = [
    {
        icon: <Search className="w-8 h-8 text-blue-600" />,
        title: "Free Reputation Assessment",
        description: "We perform a deep-dive audit of your digital footprint, analyzing your location data, customer sentiment, and local competitors to identify growth gaps.",
        details: ["Competitor Benchmarking", "Customer Sentiment Analysis", "Location Search Performance"],
        color: "bg-blue-50"
    },
    {
        icon: <PhoneCall className="w-8 h-8 text-indigo-600" />,
        title: "Strategy & Pricing Briefing",
        description: "Connect with our experts for a brief overview of your custom automation workflow. We'll show you exactly how we generate value and provide clear pricing.",
        details: ["Custom Workflow Mapping", "ROI Projections", "Transparent Pricing Plans"],
        color: "bg-indigo-50"
    },
    {
        icon: <TrendingUp className="w-8 h-8 text-emerald-600" />,
        title: "Onboarding & Results",
        description: "Experience effortless setup as we deploy your reputation system. Start seeing measurable engagement and revenue growth within your first 90 days.",
        details: ["Seamless Tech Integration", "Ongoing Performance Tuning", "Results in < 3 Months"],
        color: "bg-emerald-50"
    }
];



export const HowItWorks: React.FC = () => {
    return (
        <section id="how-it-works" className="py-24 bg-[#FAFAFA] overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        The Logic Loop Process
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight"
                    >
                        How We Scale Your Reputation
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-500 leading-relaxed"
                    >
                        A streamlined, transparency-first approach to transforming your business's online presence and revenue.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-24 z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative z-10"
                        >
                            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 h-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-8 shadow-sm`}>
                                    {step.icon}
                                </div>

                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-900 text-white text-[10px] font-black">
                                        {index + 1}
                                    </span>
                                    <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                                </div>

                                <p className="text-slate-500 mb-8 leading-relaxed">
                                    {step.description}
                                </p>

                                <ul className="space-y-3">
                                    {step.details.map((detail, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                                            <CheckCircle2 size={16} className="text-blue-500" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-20 text-center"
                >
                    <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-xl shadow-blue-200/50">
                        <button
                            onClick={() => (window.location.href = '/get-started')}
                            className="bg-white text-slate-900 px-10 py-5 rounded-[0.9rem] font-black text-lg hover:bg-slate-50 transition-colors flex items-center gap-3"
                        >
                            Start Your Free Assessment
                            <ArrowRight size={20} className="text-blue-600" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};


