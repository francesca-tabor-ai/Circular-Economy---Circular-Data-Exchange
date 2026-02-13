
import React, { useState } from 'react';
import Layout from './components/Layout';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import BatchLedger from './components/BatchLedger';
import VerificationEngine from './components/VerificationEngine';
import BuyerPortal from './components/BuyerPortal';
import About from './components/About';
import KaiIntelligence from './components/KaiIntelligence';

export type View = 'landing' | 'dashboard' | 'ledger' | 'verification' | 'buyer' | 'about';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('landing');
  const [isKaiOpen, setIsKaiOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      {currentView === 'landing' ? (
        <Landing onNavigateToDashboard={() => setCurrentView('dashboard')} />
      ) : (
        <Layout 
          currentView={currentView} 
          setView={setCurrentView}
        >
          {currentView === 'dashboard' && <Dashboard />}
          {currentView === 'ledger' && <BatchLedger />}
          {currentView === 'verification' && <VerificationEngine />}
          {currentView === 'buyer' && <BuyerPortal />}
          {currentView === 'about' && <About />}
        </Layout>
      )}

      {/* Kai Floating Action Button */}
      <button 
        onClick={() => setIsKaiOpen(true)}
        className={`fixed bottom-8 right-8 h-16 w-16 rounded-full bg-slate-900 border-2 border-white shadow-2xl overflow-hidden flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 z-40 group ${isKaiOpen ? 'translate-y-24 opacity-0' : 'translate-y-0 opacity-100'}`}
        aria-label="Ask Kai"
      >
        <div className="absolute inset-0 rounded-full cdx-gradient opacity-0 group-hover:opacity-30 transition-opacity blur-md"></div>
        <img 
          src="https://i.postimg.cc/DShwwW1f/11-Aquarius-Circular-Data-Exchange-(CDX).png" 
          alt="Dr. Kai Navarro" 
          className="h-full w-full object-cover relative z-10 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-1 right-1 h-3.5 w-3.5 bg-teal-500 rounded-full border-2 border-slate-900 z-20 shadow-sm"></div>
      </button>
      
      <KaiIntelligence isOpen={isKaiOpen} onClose={() => setIsKaiOpen(false)} currentView={currentView} />
    </div>
  );
};

export default App;
