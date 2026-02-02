import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Integrations } from './components/Integrations';
import { FeatureSection } from './components/FeatureSection';
import { AIReplyDemo } from './components/AIReplyDemo';
import { ComingSoon } from './components/ComingSoon';
import { Footer } from './components/Footer';
const OnboardingPage = React.lazy(() => import('./components/OnboardingPage').then(m => ({ default: m.OnboardingPage })));
import { HowItWorks } from './components/HowItWorks';

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA]">
    <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const LandingPage: React.FC = () => (
  <>
    <Hero />
    <Integrations />
    <HowItWorks />
    <div id="features" className="py-20 bg-white">
      <FeatureSection
        title="Instant Alerts for Bad Reviews"
        description="Don't let a negative experience linger. Logic Loop identifies bad reviews across all platforms in real-time and alerts your team instantly via Slack, Email, or SMS."
        image="/alert.png"
        reversed={false}
        tag="Real-time Crisis Control"
      />
      <FeatureSection
        title="Auto AI Replies for Happy Customers"
        description="Engagement is key to ranking higher on Google and Yelp. Our specialized AI crafts personalized, brand-aligned responses to all positive feedback automatically."
        image="/ai_reply.png"
        reversed={true}
        tag="Seamless Engagement"
      />
    </div>
    <div id="demo">
      <AIReplyDemo />
    </div>
    <ComingSoon />
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <React.Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/get-started" element={<OnboardingPage />} />
            </Routes>
          </React.Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
