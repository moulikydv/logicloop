import React from 'react';
import { motion } from 'framer-motion';
import {
    Star,
    Search,
    MessageSquare,
    PieChart,
    Settings,
    Bell,
    CheckCircle2,
    TrendingUp,
    MoreHorizontal
} from 'lucide-react';

export const DashboardMockup: React.FC = () => {
    return (
        <div className="relative rounded-3xl p-2 bg-gradient-to-b from-white to-slate-100 border border-slate-200 shadow-2xl overflow-hidden group">
            {/* Dashboard container */}
            <div className="bg-white rounded-2xl shadow-inner flex h-[500px] md:h-[600px] overflow-hidden">

                {/* Sidebar */}
                <div className="w-16 md:w-56 bg-slate-50 border-r border-slate-100 flex flex-col p-4">
                    <div className="flex items-center gap-3 mb-10 px-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </div>
                        <span className="hidden md:block font-bold text-slate-800 tracking-tight">Logic Loop</span>
                    </div>

                    <nav className="space-y-2">
                        <NavItem icon={<PieChart size={20} />} label="Overview" active />
                        <NavItem icon={<Star size={20} />} label="Reviews" />
                        <NavItem icon={<MessageSquare size={20} />} label="AI Replies" />
                        <NavItem icon={<TrendingUp size={20} />} label="Insights" />
                        <NavItem icon={<Settings size={20} />} label="Settings" />
                    </nav>

                    <div className="mt-auto p-2">
                        <div className="flex md:items-center gap-3 bg-slate-200/50 p-2 rounded-xl">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs uppercase"> Sar </div>
                            <div className="hidden md:block overflow-hidden">
                                <p className="text-xs font-bold text-slate-800 truncate">Sarah Johnson</p>
                                <p className="text-[10px] text-slate-500 truncate">Admin</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex flex-col bg-slate-50/30 overflow-hidden">
                    {/* Dashboard Header */}
                    <div className="h-16 border-b border-slate-100 flex items-center justify-between px-6 bg-white">
                        <h2 className="text-lg font-bold text-slate-800">Reputation Dashboard</h2>
                        <div className="flex items-center gap-4">
                            <div className="hidden sm:flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full text-slate-400">
                                <Search size={16} />
                                <span className="text-xs">Search...</span>
                            </div>
                            <div className="relative">
                                <Bell size={20} className="text-slate-400" />
                                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                            </div>
                        </div>
                    </div>

                    {/* Body */}
                    <div className="flex-1 p-6 overflow-y-auto custom-scrollbar space-y-6">
                        {/* Stats Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <StatCard label="Review Volume" value="1,284" trend="+12.5%" trendUp />
                            <StatCard label="Avg. Rating" value="4.8" trend="★ ★ ★ ★ ★" starColor />
                            <StatCard label="AI Replied" value="94%" trend="Auto-pilot active" active />
                        </div>

                        {/* Layout Split */}
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                            {/* Recent Reviews Table */}
                            <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-100 shadow-sm p-5 space-y-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-bold text-slate-800">Recent Feed</h3>
                                    <button className="text-xs text-blue-600 font-bold hover:underline">View All</button>
                                </div>

                                <div className="space-y-3">
                                    <ReviewItem
                                        author="Michael Dean"
                                        platform="Google"
                                        rating={5}
                                        comment="Incredible service! The response was so tailored..."
                                        replied
                                    />
                                    <ReviewItem
                                        author="Elena Rossi"
                                        platform="Facebook"
                                        rating={5}
                                        comment="Quickest support I have ever experienced."
                                        replied
                                    />
                                    <ReviewItem
                                        author="Chris P."
                                        platform="Yelp"
                                        rating={4}
                                        comment="Great overall, but the parking was a bit tight."
                                        needsAction
                                    />
                                </div>
                            </div>

                            {/* Insights Card */}
                            <div className="lg:col-span-2 space-y-6">
                                <div className="bg-slate-900 rounded-2xl p-5 text-white space-y-4 shadow-xl">
                                    <div className="flex items-center gap-2 mb-2">
                                        <TrendingUp size={18} className="text-emerald-400" />
                                        <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Sentiment Growth</span>
                                    </div>
                                    <div className="h-24 flex items-end gap-2">
                                        {[0.4, 0.6, 0.5, 0.8, 0.7, 0.9, 0.95].map((h, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 0 }}
                                                animate={{ height: `${h * 100}%` }}
                                                transition={{ delay: 0.5 + (i * 0.1), duration: 1 }}
                                                className="flex-1 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-md relative group/bar"
                                            >
                                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 text-[10px] transition-opacity">{(h * 100).toFixed(0)}%</div>
                                            </motion.div>
                                        ))}
                                    </div>
                                    <p className="text-xs text-slate-400 leading-relaxed italic">
                                        "Positive sentiment has increased by 22% since activating Logic Loop."
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-5 text-white shadow-lg space-y-3">
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-bold">Pro Account</h4>
                                        <CheckCircle2 size={18} />
                                    </div>
                                    <p className="text-xs text-blue-100">All platforms connected and synced.</p>
                                    <button className="w-full bg-white/10 hover:bg-white/20 transition-all rounded-xl py-2 text-xs font-bold border border-white/20">
                                        Upgrade Plan
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Design Elements */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 glass p-4 rounded-2xl shadow-xl border border-white/50 hidden md:block z-20"
            >
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                        <Star className="text-emerald-600 fill-emerald-600" size={20} />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Top Reviewer</p>
                        <p className="text-sm font-bold text-slate-900">+12% lift this week</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const NavItem = ({ icon, label, active = false }: { icon: any, label: string, active?: boolean }) => (
    <div className={`flex items-center gap-3 p-2.5 rounded-xl transition-all cursor-pointer group ${active ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'text-slate-500 hover:bg-white hover:text-blue-600'}`}>
        <span className="shrink-0">{icon}</span>
        <span className={`hidden md:block text-sm font-bold ${active ? 'text-white' : 'text-slate-600 group-hover:text-blue-600'}`}>{label}</span>
    </div>
);

const StatCard = ({ label, value, trend, trendUp, active, starColor }: any) => (
    <div className={`p-4 rounded-2xl border ${active ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-100' : 'bg-white border-slate-100 shadow-sm'}`}>
        <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${active ? 'text-blue-200' : 'text-slate-400'}`}>{label}</p>
        <div className="flex items-end justify-between">
            <p className="text-2xl font-extrabold">{value}</p>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${active ? 'bg-white/20 text-white' : starColor ? 'text-yellow-500' : trendUp ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-50 text-slate-500'}`}>
                {trend}
            </span>
        </div>
    </div>
);

const ReviewItem = ({ author, platform, rating, comment, replied, needsAction }: any) => (
    <div className="flex items-start gap-4 p-3 hover:bg-slate-50 rounded-xl transition-all border border-transparent hover:border-slate-100 cursor-pointer">
        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200 text-xs font-bold text-slate-500">
            {author.split(' ').map((n: string) => n[0]).join('')}
        </div>
        <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
                <h4 className="text-sm font-bold text-slate-800 truncate">{author}</h4>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">{platform}</span>
            </div>
            <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-slate-200"} />
                ))}
            </div>
            <p className="text-xs text-slate-500 truncate leading-relaxed">"{comment}"</p>
        </div>
        <div className="flex flex-col items-end gap-2 shrink-0">
            {replied ? (
                <div className="flex items-center gap-1 text-emerald-600">
                    <CheckCircle2 size={12} />
                    <span className="text-[10px] font-bold">Replied</span>
                </div>
            ) : needsAction ? (
                <div className="flex items-center gap-1 text-red-500">
                    <Bell size={12} className="animate-bounce" />
                    <span className="text-[10px] font-bold">Action Needed</span>
                </div>
            ) : null}
            <MoreHorizontal size={14} className="text-slate-300" />
        </div>
    </div>
);
