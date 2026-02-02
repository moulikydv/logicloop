import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, ArrowRight, CheckCircle2, Shield, Users, Award, Building2, Mail, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

const STEPS = [
    { id: 1, name: 'Business' },
    { id: 2, name: 'Qualification' },
    { id: 3, name: 'Commitment' }
];

const LOCATION_OPTIONS = ['1 Location', '2-5 Locations', '6+ Locations'];
const STRUGGLE_OPTIONS = [
    "Reputation Crisis: Need urgent recovery.",
    "SEO Ranking: Losing leads to competitors.",
    "Scaling : Need to automate reviews handling."
];

const EMAILJS_CONFIG = {
    PUBLIC_KEY: "btz5D4ZT1oUnd4vZk",
    NOTIFICATION: {
        SERVICE_ID: "service_n7dfet3",
        TEMPLATE_ID: "template_j47ztka"
    },
    CUSTOMER: {
        SERVICE_ID: "service_uvh8247",
        TEMPLATE_ID: "template_l9gj7ry"
    }
};



export const OnboardingPage: React.FC = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        businessName: '',
        email: '',
        websiteUrl: '',
        locations: '',
        struggle: '',
        customStruggle: '',
        fullName: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const updateData = useCallback((key: string, value: string) => {
        setFormData(prev => ({ ...prev, [key]: value }));
    }, []);

    const isEmailValid = useMemo(() => formData.email.includes('@') && formData.email.includes('.com'), [formData.email]);
    const isWebsiteValid = useMemo(() => formData.websiteUrl.includes('.'), [formData.websiteUrl]);

    const nextStep = useCallback(() => setStep(prev => Math.min(prev + 1, 4)), []);
    const prevStep = useCallback(() => setStep(prev => Math.max(prev - 1, 1)), []);

    const handleSubmit = useCallback(async () => {
        setIsSubmitting(true);
        try {
            const emailParams = {
                businessName: formData.businessName,
                email: formData.email,
                fullName: formData.fullName,
                websiteUrl: formData.websiteUrl,
                struggle: formData.struggle,
                locations: formData.locations,
                customStruggle: formData.customStruggle,
                reply_to: formData.email
            };

            await Promise.all([
                emailjs.send(
                    EMAILJS_CONFIG.NOTIFICATION.SERVICE_ID,
                    EMAILJS_CONFIG.NOTIFICATION.TEMPLATE_ID,
                    emailParams,
                    EMAILJS_CONFIG.PUBLIC_KEY
                ),
                emailjs.send(
                    EMAILJS_CONFIG.CUSTOMER.SERVICE_ID,
                    EMAILJS_CONFIG.CUSTOMER.TEMPLATE_ID,
                    emailParams,
                    EMAILJS_CONFIG.PUBLIC_KEY
                )
            ]);

            nextStep();
        } catch (error) {
            console.error('FAILED...', error);
            alert("Oops! Something went wrong while sending your request. Please try again or contact us directly.");
        } finally {
            setIsSubmitting(false);
        }
    }, [formData, nextStep]);

    return (
        <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center py-20 px-6">
            {/* Progress Bar */}
            <div className="max-w-xl w-full mb-12">
                <div className="flex justify-between mb-4">
                    {STEPS.map((s) => (
                        <div
                            key={s.id}
                            className={`flex flex-col items-center transition-all ${step >= s.id ? 'cursor-pointer hover:opacity-80' : 'cursor-default'}`}
                            onClick={() => {
                                if (step >= s.id) {
                                    setStep(s.id);
                                }
                            }}
                        >
                            <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${step >= s.id ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-200 text-slate-500'
                                    }`}
                            >
                                {step > s.id ? <CheckCircle2 size={16} /> : s.id}
                            </div>
                            <span className={`text-[10px] mt-2 font-bold uppercase tracking-wider ${step >= s.id ? 'text-blue-600' : 'text-slate-400'
                                }`}>
                                {s.name}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="h-1 w-full bg-slate-200 rounded-full relative">
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-blue-600 rounded-full shadow-sm"
                        initial={{ width: '0%' }}
                        animate={{ width: `${Math.min(100, ((step - 1) / (STEPS.length - 1)) * 100)}%` }}
                    />
                </div>
                <p className="text-[10px] text-slate-400 text-center mt-3">📊 Businesses with reputation systems see 20-40% more growth in under 3 months.</p>
            </div>

            <div className="max-w-xl w-full">
                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100"
                        >
                            <div className="mb-8">
                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-100 shadow-sm mb-6 w-fit">
                                    <img src="/logo.svg" alt="Logic Loop Logo" className="w-6 h-6 rounded-md" />
                                    <span className="text-sm font-bold tracking-tight">Logic Loop</span>
                                </div>
                                <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Unlock Your Free Reputation Report</h2>
                                <p className="text-slate-500">We'll analyze your business and create a custom automation strategy—100% free.</p>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                                        <Building2 size={14} /> Business Name
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="e.g. Logic Loop Cafe"
                                            value={formData.businessName}
                                            onChange={(e) => updateData('businessName', e.target.value)}
                                            className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-lg"
                                        />
                                        {formData.businessName && (
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                                <CheckCircle2 size={20} className="text-green-500" />
                                            </div>
                                        )}
                                    </div>
                                    {formData.businessName && (
                                        <p className="text-[10px] text-green-600 mt-2 font-bold uppercase tracking-wider">✓ Perfect! We'll analyze this business</p>
                                    )}
                                </div>
                                <div className="flex gap-4">
                                    <button onClick={() => navigate('/')} className="flex-1 py-5 rounded-2xl font-bold text-slate-400 hover:text-slate-600 transition-colors">Back</button>
                                    <button
                                        onClick={nextStep}
                                        disabled={!formData.businessName}
                                        className="flex-[2] bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2 disabled:opacity-50 group"
                                    >
                                        Continue to Analysis
                                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100"
                        >
                            <h2 className="text-3xl font-extrabold text-slate-900 mb-8">What's Holding You Back Right Now?</h2>

                            <div className="space-y-8">
                                <div>
                                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Number of Locations</label>
                                    <div className="grid grid-cols-3 gap-3">
                                        {LOCATION_OPTIONS.map((opt) => (
                                            <button
                                                key={opt}
                                                onClick={() => updateData('locations', opt)}
                                                className={`py-4 px-2 rounded-2xl border font-bold text-sm transition-all ${formData.locations === opt
                                                    ? 'border-blue-600 bg-blue-50 text-blue-600 ring-2 ring-blue-600/20'
                                                    : 'border-slate-100 bg-slate-50 text-slate-500 hover:border-slate-200'
                                                    }`}
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Biggest Reputation Struggle</label>
                                    <div className="space-y-3">
                                        {STRUGGLE_OPTIONS.map((opt) => (
                                            <button
                                                key={opt}
                                                onClick={() => updateData('struggle', opt)}
                                                className={`w-full p-5 rounded-2xl border font-bold text-left transition-all flex items-center justify-between group ${formData.struggle === opt
                                                    ? 'border-blue-600 bg-blue-50 text-blue-600'
                                                    : 'border-slate-100 bg-slate-50 text-slate-500 hover:border-slate-200'
                                                    }`}
                                            >
                                                {opt}
                                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${formData.struggle === opt ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-200'
                                                    }`}>
                                                    {formData.struggle === opt && <CheckCircle2 size={14} />}
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">(100% Optional) Got anything else to add?</label>
                                    <textarea
                                        rows={3}
                                        placeholder="Tell us a bit more about what you're looking for..."
                                        value={formData.customStruggle}
                                        onChange={(e) => updateData('customStruggle', e.target.value)}
                                        className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-base resize-none"
                                    />
                                </div>

                                <div className="flex gap-4">
                                    <button onClick={prevStep} className="flex-1 py-5 rounded-2xl font-bold text-slate-400 hover:text-slate-600 transition-colors">Back</button>
                                    <button
                                        onClick={nextStep}
                                        disabled={!formData.locations || !formData.struggle}
                                        className="flex-[2] bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 disabled:opacity-50"
                                    >
                                        Continue
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 text-center"
                        >
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
                                <CheckCircle2 size={40} className="text-blue-600" />
                            </div>
                            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Where Should We Send Your Report?</h2>
                            <p className="text-slate-500 mb-8">We're creating your custom automation plan for {formData.businessName}.</p>

                            <div className="space-y-6">
                                <div className="text-left">
                                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                                        <User size={14} /> Full Name
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            value={formData.fullName}
                                            onChange={(e) => updateData('fullName', e.target.value)}
                                            className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-lg"
                                        />
                                        {formData.fullName && (
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                                <CheckCircle2 size={20} className="text-green-500" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="text-left">
                                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                                        <Mail size={14} /> Work Email
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            placeholder="work@company.com"
                                            value={formData.email}
                                            onChange={(e) => updateData('email', e.target.value)}
                                            className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-lg"
                                        />
                                        {formData.email && isEmailValid && (
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                                <CheckCircle2 size={20} className="text-green-500" />
                                            </div>
                                        )}
                                    </div>
                                    {formData.email && !isEmailValid && (
                                        <p className="text-[10px] text-red-500 mt-2 font-bold uppercase tracking-wider">Please enter a valid work email.</p>
                                    )}
                                    {formData.email && isEmailValid && (
                                        <p className="text-[10px] text-green-600 mt-2 font-bold uppercase tracking-wider">✓ Perfect! Report will be sent here.</p>
                                    )}
                                    <p className="text-[10px] text-slate-400 mt-2 italic">No spam. We'll only send your report.</p>
                                </div>
                                <div className="text-left">
                                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                                        <Building2 size={14} /> Business Website or Google Maps URL
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="url"
                                            placeholder="https://maps.google.com/..."
                                            value={formData.websiteUrl}
                                            onChange={(e) => updateData('websiteUrl', e.target.value)}
                                            className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-lg"
                                        />
                                        {formData.websiteUrl && isWebsiteValid && (
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                                <CheckCircle2 size={20} className="text-green-500" />
                                            </div>
                                        )}
                                    </div>
                                    {formData.websiteUrl && !isWebsiteValid && (
                                        <p className="text-[10px] text-red-500 mt-2 font-bold uppercase tracking-wider">Please enter a valid URL</p>
                                    )}
                                    {formData.websiteUrl && isWebsiteValid && (
                                        <p className="text-[10px] text-green-600 mt-2 font-bold uppercase tracking-wider">✓ Great! We'll analyze your presence here.</p>
                                    )}
                                    <p className="text-[10px] text-slate-400 mt-2 italic">We'll check your current Google Maps presence.</p>
                                </div>
                                <button
                                    onClick={handleSubmit}
                                    disabled={!formData.fullName || !isEmailValid || !isWebsiteValid || isSubmitting}
                                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-6 rounded-2xl font-black text-xl hover:scale-[1.02] transition-all shadow-xl shadow-blue-200 uppercase tracking-tight flex items-center justify-center gap-3 disabled:opacity-50 grayscale-[0.5] disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? "Sending..." : "Book my Sales Call Now"}
                                    {!isSubmitting && <ArrowRight size={24} />}
                                </button>
                                <p className="text-[11px] text-slate-400 mt-4 leading-relaxed max-w-[90%] mx-auto">
                                    Next up: We'll deliver your custom reputation report and coordinate a call at a time that works best for you.
                                </p>
                            </div>

                            {/* Trust Footer */}
                            <div className="mt-12 pt-8 border-t border-slate-50">
                                <div className="flex flex-col items-center gap-6">
                                    <div className="flex items-center gap-2 opacity-80 scale-125 mb-2 grayscale-0">
                                        <img src="/logo.svg" alt="Logic Loop Logo" className="w-6 h-6 rounded-md" />
                                        <span className="text-xs font-bold tracking-tight">Logic Loop</span>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-[10px] font-bold text-slate-400 flex items-center justify-center gap-1">
                                            <Shield size={10} className="text-green-500" /> PRIVACY GUARD: PROTECTED BY 256-BIT ENCRYPTION
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 4 && (
                        <motion.div
                            key="success"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="bg-white p-12 rounded-[3rem] shadow-2xl shadow-blue-100 border border-blue-50 text-center"
                        >
                            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                                <CheckCircle2 size={48} className="text-green-600" />
                            </div>
                            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Setup Initiated!</h2>
                            <p className="text-slate-500 mb-10 text-lg leading-relaxed">
                                Details sent to our team, <strong>{formData.fullName}</strong>. We're gathering your online reputation data and will confirm your booking slot in under 24 hours.
                            </p>
                            <button
                                onClick={() => navigate('/')}
                                className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg"
                            >
                                Back to Home
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <button
                onClick={() => navigate('/')}
                className="mt-12 text-slate-400 hover:text-slate-600 transition-colors text-sm font-bold flex items-center gap-2"
            >
                ← Return to Home page
            </button>
        </div>
    );
};
