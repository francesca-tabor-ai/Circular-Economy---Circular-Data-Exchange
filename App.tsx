
import React, { useState, useEffect, Suspense, lazy } from 'react';
import Layout from './components/Layout';
import Landing from './components/Landing';
import KaiIntelligence from './components/KaiIntelligence';

// Lazy load components for better performance
const Dashboard = lazy(() => import('./components/Dashboard'));
const BatchLedger = lazy(() => import('./components/BatchLedger'));
const VerificationEngine = lazy(() => import('./components/VerificationEngine'));
const BuyerPortal = lazy(() => import('./components/BuyerPortal'));
const About = lazy(() => import('./components/About'));

export type View = 'landing' | 'dashboard' | 'ledger' | 'verification' | 'buyer' | 'about';

// Loading component for lazy loaded routes
const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 border-4 border-slate-200 rounded-full"></div>
      <div className="absolute inset-0 border-4 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('landing');
  const [isKaiOpen, setIsKaiOpen] = useState(false);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  // Enhanced setView with scroll to top
  const handleViewChange = (view: View) => {
    setCurrentView(view);
    // Scroll to top immediately for instant feedback
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen">
      {currentView === 'landing' ? (
        <Landing onNavigateToDashboard={() => handleViewChange('dashboard')} />
      ) : (
        <Layout 
          currentView={currentView} 
          setView={handleViewChange}
        >
          <Suspense fallback={<LoadingSpinner />}>
            {currentView === 'dashboard' && <Dashboard />}
            {currentView === 'ledger' && <BatchLedger />}
            {currentView === 'verification' && <VerificationEngine />}
            {currentView === 'buyer' && <BuyerPortal />}
            {currentView === 'about' && <About />}
          </Suspense>
        </Layout>
      )}

      {/* Kai Floating Action Button */}
      <button 
        onClick={() => setIsKaiOpen(true)}
        className={`fixed bottom-8 right-8 h-16 w-16 rounded-full bg-slate-900 border-2 border-white shadow-2xl overflow-hidden flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-3 active:scale-95 z-40 group ${isKaiOpen ? 'translate-y-24 opacity-0' : 'translate-y-0 opacity-100'}`}
        aria-label="Ask Kai"
      >
        <div className="absolute inset-0 rounded-full cdx-gradient opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-md"></div>
        <img 
          src="https://i.postimg.cc/DShwwW1f/11-Aquarius-Circular-Data-Exchange-(CDX).png" 
          alt="Dr. Kai Navarro" 
          className="h-full w-full object-cover relative z-10 transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute bottom-1 right-1 h-3.5 w-3.5 bg-slate-400 rounded-full border-2 border-slate-900 z-20 shadow-sm animate-pulse group-hover:bg-slate-300 transition-colors duration-300"></div>
        {/* Ripple effect on hover */}
        <div className="absolute inset-0 rounded-full bg-white/20 transform scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
      </button>
      
      <KaiIntelligence isOpen={isKaiOpen} onClose={() => setIsKaiOpen(false)} currentView={currentView} />
    </div>
  );
};

export default App;
