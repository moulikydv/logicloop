import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(prev => prev !== isScrolled ? isScrolled : prev);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 cursor-pointer decoration-0 text-slate-900">
          <div className="loop-animation shrink-0">
            <img src="/logo.svg" alt="Logic Loop Logo" className="w-8 h-8 rounded-lg" />
          </div>
          <span className="text-xl font-bold tracking-tight">Logic Loop</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="/#how-it-works" className="hover:text-blue-600 transition-colors">How It Works</a>
          <a href="/#features" className="hover:text-blue-600 transition-colors">Features</a>
          <a href="/#integrations" className="hover:text-blue-600 transition-colors">Integrations</a>
          <a href="/#demo" className="hover:text-blue-600 transition-colors">Live Demo</a>
          <a href="/#coming-soon" className="hover:text-blue-600 transition-colors">Future Vision</a>
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/get-started" className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-md active:scale-95 decoration-0">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};
