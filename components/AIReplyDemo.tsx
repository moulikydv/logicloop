
import React, { useState } from 'react';
import { generateReviewReply } from '../services/geminiService';

export const AIReplyDemo: React.FC = () => {
  const [review, setReview] = useState("I loved the atmosphere and the coffee was incredible! The staff was so welcoming.");
  const [author, setAuthor] = useState("Sarah J.");
  const [businessType, setBusinessType] = useState("Coffee Shop");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const result = await generateReviewReply(review, author, businessType);
    setReply(result || "");
    setLoading(false);
  };

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Try the Logic Loop AI</h2>
            <p className="text-slate-500">Experience how our engine handles reviews with perfect tone and context.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-sm font-bold text-slate-400 uppercase mb-4">Customer Review</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">Customer Name</label>
                  <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">Business Type</label>
                  <input
                    type="text"
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">Review Content</label>
                  <textarea
                    rows={3}
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  />
                </div>
                <button
                  onClick={handleGenerate}
                  disabled={loading}
                  className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-slate-800 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Thinking...
                    </>
                  ) : "Generate AI Reply"}
                </button>
                <div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-400 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  Note: Negative reviews alert admins first for manual reply before automation.
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-8 rounded-3xl shadow-xl text-white relative h-full flex flex-col">
              <div className="absolute top-4 right-4 text-blue-300">
                <svg className="w-8 h-8 opacity-20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14C19.017 11.2386 16.7784 9 14.017 9H11.017V7H14.017C17.883 7 21.017 10.134 21.017 14V21H14.017ZM3.017 21V14C3.017 10.134 6.151 7 10.017 7V9H7.017C4.25558 9 2.017 11.2386 2.017 14V16H5.017C6.12157 16 7.017 16.8954 7.017 18V21H3.017Z" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-blue-200 uppercase mb-4">Logic Loop AI Output</h3>
              <div className="flex-grow flex items-center justify-center">
                {reply ? (
                  <p className="text-lg italic leading-relaxed font-medium">"{reply}"</p>
                ) : (
                  <p className="text-blue-200 text-center">Click generate to see the AI in action.</p>
                )}
              </div>
              <div className="mt-6 pt-6 border-t border-blue-500/30 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-blue-200">
                <span>Tone: Professional & Warm</span>
                <span>Context: High</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
