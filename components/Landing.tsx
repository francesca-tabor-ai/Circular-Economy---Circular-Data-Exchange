
import React, { useState, useEffect } from 'react';

interface LandingProps {
  onNavigateToDashboard: () => void;
}

const Landing: React.FC<LandingProps> = ({ onNavigateToDashboard }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-bold tracking-tight text-white">
                Circular Data Exchange
              </h1>
              <p className="text-[10px] font-semibold text-white/80 uppercase tracking-[0.2em]">Open Protocol</p>
            </div>
            <button
              onClick={onNavigateToDashboard}
              className="px-6 py-3 bg-white text-slate-900 rounded-xl font-semibold text-sm hover:bg-slate-100 transition-all duration-300 cdx-shadow hover:cdx-shadow-lg active:scale-95 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Go to Dashboard
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
              <div className="absolute inset-0 bg-slate-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://i.redd.it/fh33rw194gnf1.jpeg)'
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center pt-20 pb-24">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-8 leading-tight">
            The future of industry is circular.
            <br />
            <span className="text-white/90">But circular only works if it's trusted.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-16 font-normal leading-relaxed">
            Build, prove, and sell verified circular materials
          </p>
          <p className="text-lg text-white/80 mb-16 max-w-2xl mx-auto leading-relaxed">
            We help circular materials operators prove their materials are truly circular, so they can win better contracts, enter regulated markets faster, and capture premium pricing.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-10 mb-16 max-w-2xl mx-auto transition-all duration-300 hover:bg-white/15 hover:border-white/30 transform hover:scale-[1.02]">
            <p className="text-base text-white leading-relaxed mb-4">
              <strong>Hi, I'm Dr. Kai Navarro.</strong>
            </p>
            <p className="text-base text-white/90 leading-relaxed">
              I build coordination infrastructure for the physical economy — systems that help materials, assets, and value move transparently across supply chains.
            </p>
            <p className="text-base text-white/90 leading-relaxed mt-4">
              This platform exists to help you turn circular performance into trusted, tradable data.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => {
                const kaiButton = document.querySelector('[aria-label="Ask Kai"]') as HTMLElement;
                if (kaiButton) kaiButton.click();
              }}
              className="px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold text-base hover:bg-slate-100 transition-all duration-300 cdx-shadow hover:cdx-shadow-lg active:scale-95 group relative overflow-hidden transform hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                👉 Start a conversation with Kai
              </span>
              <div className="absolute inset-0 bg-slate-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
            <button
              onClick={onNavigateToDashboard}
              className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-xl font-semibold text-base hover:bg-white/10 transition-all duration-300 active:scale-95 group relative overflow-hidden transform hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                See how circular proof works
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
              <div className="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-8 text-center">
            Circular materials are growing.
            <br />
            <span className="text-slate-700">Trusted circular proof is still broken.</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16 mt-20">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-8">Today, most circular operators rely on:</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <span className="text-slate-500 mt-1">•</span>
                  <span className="text-slate-600 leading-relaxed">Spreadsheets and fragmented reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-500 mt-1">•</span>
                  <span className="text-slate-600 leading-relaxed">Expensive, slow audits</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-500 mt-1">•</span>
                  <span className="text-slate-600 leading-relaxed">Inconsistent standards across buyers and regulators</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-500 mt-1">•</span>
                  <span className="text-slate-600 leading-relaxed">Manual data requests from procurement teams</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-8">At the same time, buyers and regulators are demanding:</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <span className="text-slate-500 mt-1">•</span>
                  <span className="text-slate-600 leading-relaxed">Chain-of-custody traceability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-500 mt-1">•</span>
                  <span className="text-slate-600 leading-relaxed">Verifiable material origin</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-500 mt-1">•</span>
                  <span className="text-slate-600 leading-relaxed">Impact transparency</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-500 mt-1">•</span>
                  <span className="text-slate-600 leading-relaxed">Compliance-ready reporting</span>
                </li>
              </ul>
            </div>
          </div>
          
          <p className="text-center text-lg text-slate-600 font-normal mt-16 leading-relaxed">
            Circular supply is growing.<br />
            Trusted circular data infrastructure hasn't caught up.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-6 text-center">
            Circular data infrastructure — built for the physical economy
          </h2>
          <p className="text-xl text-slate-600 text-center mb-20 font-normal leading-relaxed">
            Our platform helps you:
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-10 rounded-2xl border border-slate-200 cdx-shadow hover:cdx-shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-slate-900 mb-5">Track</h3>
              <p className="text-slate-600 leading-relaxed">
                Capture material flows from input → processing → output at batch level.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl border border-slate-200 cdx-shadow hover:cdx-shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-slate-900 mb-5">Verify</h3>
              <p className="text-slate-600 leading-relaxed">
                Generate circular proof, chain-of-custody records, and audit-ready data automatically.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl border border-slate-200 cdx-shadow hover:cdx-shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-slate-900 mb-5">Monetise</h3>
              <p className="text-slate-600 leading-relaxed">
                Share verified circular data directly with buyers and unlock premium supply positioning.
              </p>
            </div>
          </div>
          
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Outcome:</h3>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="flex items-center gap-3">
                <span className="text-slate-600 font-semibold">✓</span>
                <span className="text-slate-700 leading-relaxed">Faster procurement approval</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-slate-600 font-semibold">✓</span>
                <span className="text-slate-700 leading-relaxed">Lower compliance cost</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-slate-600 font-semibold">✓</span>
                <span className="text-slate-700 leading-relaxed">Higher material pricing potential</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-slate-600 font-semibold">✓</span>
                <span className="text-slate-700 leading-relaxed">Stronger long-term buyer relationships</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Exists (Founder Section) */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-12 text-center">
            A note from Dr. Kai Navarro
          </h2>
          
          <div className="bg-white border border-slate-200 rounded-2xl p-12 space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed">
              I started working on coordination systems because I saw something early:
            </p>
            <p className="text-xl font-semibold text-slate-900 leading-relaxed">
              Digital systems scaled globally.<br />
              Physical systems didn't.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              During major global supply disruptions, it became clear:
            </p>
            <p className="text-xl font-semibold text-slate-900 leading-relaxed">
              The missing layer in the global economy isn't faster computation.<br />
              It's coordination intelligence for materials, assets, and value across time.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Circular systems aren't just environmental solutions.
            </p>
            <p className="text-xl font-semibold text-slate-900 leading-relaxed">
              They're the coordination protocol the physical economy has been missing.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              This platform is one step toward building that layer — starting with helping circular material operators prove and capture the value they already create.
            </p>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-8">
            Who this is for
          </h2>
          <p className="text-xl text-slate-600 mb-16 font-normal leading-relaxed">
            Built specifically for:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <p className="font-semibold text-slate-900 leading-relaxed">Material recyclers</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <p className="font-semibold text-slate-900 leading-relaxed">Recovery and reprocessing operators</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <p className="font-semibold text-slate-900 leading-relaxed">Remanufacturers</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <p className="font-semibold text-slate-900 leading-relaxed">Circular supply chain operators</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 md:col-span-2">
              <p className="font-semibold text-slate-900 leading-relaxed">Advanced material recovery innovators</p>
            </div>
          </div>
          
          <p className="text-lg text-slate-600 mt-16 font-normal leading-relaxed">
            If you sell recovered, recycled, or circular materials into industrial supply chains — this is built for you.
          </p>
        </div>
      </section>

      {/* Core Value Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-8 text-center">
            Turn circular performance into commercial advantage
          </h2>
          <p className="text-xl text-slate-600 text-center mb-12 font-normal leading-relaxed">
            With verified circular data, you can:
          </p>
          
          <div className="bg-white border border-slate-200 rounded-2xl p-12 space-y-5">
            <div className="flex items-center gap-4">
              <span className="text-xl text-slate-600 font-semibold">✔</span>
              <span className="text-lg text-slate-700 leading-relaxed">Win contracts that require traceability</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xl text-slate-600 font-semibold">✔</span>
              <span className="text-lg text-slate-700 leading-relaxed">Enter regulated markets faster</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xl text-slate-600 font-semibold">✔</span>
              <span className="text-lg text-slate-700 leading-relaxed">Reduce audit and reporting overhead</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xl text-slate-600 font-semibold">✔</span>
              <span className="text-lg text-slate-700 leading-relaxed">Become a preferred long-term supply partner</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xl text-slate-600 font-semibold">✔</span>
              <span className="text-lg text-slate-700 leading-relaxed">Defend pricing with verified proof</span>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Intelligence Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-8">
            Work directly with founder-level systems thinking
          </h2>
          <p className="text-xl text-slate-600 mb-8 font-normal leading-relaxed">
            Inside the platform, you can talk directly with me.
          </p>
          <p className="text-lg text-slate-600 mb-12 font-normal">
            Ask:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 text-left mb-12">
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <p className="text-slate-700 leading-relaxed">How to structure your traceability data</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <p className="text-slate-700 leading-relaxed">How buyers will evaluate circular proof</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <p className="text-slate-700 leading-relaxed">How regulations are likely to shape procurement</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <p className="text-slate-700 leading-relaxed">How circular markets are evolving globally</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 md:col-span-2">
              <p className="text-slate-700 leading-relaxed">How to position your materials strategically</p>
            </div>
          </div>
          
          <button
            onClick={() => {
              const kaiButton = document.querySelector('[aria-label="Ask Kai"]') as HTMLElement;
              if (kaiButton) kaiButton.click();
            }}
            className="px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold text-base hover:bg-slate-800 transition-all duration-200 cdx-shadow hover:cdx-shadow-lg active:scale-95"
          >
            👉 Ask Kai your question
          </button>
        </div>
      </section>

      {/* Belief Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-12">
            Our core belief
          </h2>
          <p className="text-2xl font-semibold text-slate-900 mb-6 leading-relaxed">
            The next leap in industrial progress is not faster computation.
          </p>
          <p className="text-2xl font-semibold text-slate-900 mb-8 leading-relaxed">
            It's coordinated physical systems.
          </p>
          <p className="text-xl text-slate-600 font-normal leading-relaxed mb-8">
            Or more simply:
          </p>
          <p className="text-2xl font-semibold text-slate-900 leading-relaxed">
            We digitised information.<br />
            Now we need to digitise how matter moves through society.
          </p>
        </div>
      </section>

      {/* Trust / Differentiation Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-8 text-center">
            Built by systems builders, not sustainability software vendors
          </h2>
          <p className="text-xl text-slate-600 text-center mb-16 font-normal leading-relaxed">
            We design for:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-10 rounded-xl border border-slate-200 text-center">
              <p className="text-lg font-semibold text-slate-900 leading-relaxed">Real facilities</p>
            </div>
            <div className="bg-slate-50 p-10 rounded-xl border border-slate-200 text-center">
              <p className="text-lg font-semibold text-slate-900 leading-relaxed">Real supply chains</p>
            </div>
            <div className="bg-slate-50 p-10 rounded-xl border border-slate-200 text-center">
              <p className="text-lg font-semibold text-slate-900 leading-relaxed">Real procurement decisions</p>
            </div>
            <div className="bg-slate-50 p-10 rounded-xl border border-slate-200 text-center">
              <p className="text-lg font-semibold text-slate-900 leading-relaxed">Real compliance pressure</p>
            </div>
          </div>
          
          <p className="text-center text-xl font-semibold text-slate-900 mt-16 leading-relaxed">
            This is infrastructure — not dashboards.
          </p>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8">
            Circular supply chains need trusted infrastructure
          </h2>
          <p className="text-xl text-slate-300 mb-12 font-normal leading-relaxed">
            If you're already doing the hard work of recovering and producing circular materials, you shouldn't have to fight to prove it.
          </p>
          <p className="text-xl text-slate-200 mb-16 font-semibold leading-relaxed">
            Let's make circular proof portable, trusted, and commercially valuable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => {
                const kaiButton = document.querySelector('[aria-label="Ask Kai"]') as HTMLElement;
                if (kaiButton) kaiButton.click();
              }}
              className="px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold text-base hover:bg-slate-100 transition-all duration-300 cdx-shadow hover:cdx-shadow-lg active:scale-95 group relative overflow-hidden transform hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                👉 Talk with Dr. Kai Navarro
              </span>
              <div className="absolute inset-0 bg-slate-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
            <button
              onClick={onNavigateToDashboard}
              className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-xl font-semibold text-base hover:bg-white/10 transition-all duration-300 active:scale-95 group relative overflow-hidden transform hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                See how the platform works
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
              <div className="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 sm:px-8 lg:px-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400 text-sm">
            Circular Data Exchange — Open Protocol
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-8 h-12 w-12 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-slate-800 transition-all duration-300 hover:scale-110 active:scale-95 z-30 group"
          aria-label="Scroll to top"
        >
          <svg 
            className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Landing;
