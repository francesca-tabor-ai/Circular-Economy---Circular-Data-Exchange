
import React from 'react';

interface LandingProps {
  onNavigateToDashboard: () => void;
}

const Landing: React.FC<LandingProps> = ({ onNavigateToDashboard }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-bold tracking-tight text-slate-900">
                Circular Data Exchange
              </h1>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Open Protocol</p>
            </div>
            <button
              onClick={onNavigateToDashboard}
              className="px-6 py-3 bg-slate-900 text-white rounded-xl font-semibold text-sm hover:bg-slate-800 transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-slate-200"
            >
              Go to Dashboard →
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
            The Future of Industry Is Circular.
            <br />
            <span className="text-slate-600">But Circular Only Works If It's Trusted.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 mb-12 font-medium leading-relaxed">
            Build, Prove, and Sell Verified Circular Materials
          </p>
          <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            We help circular materials operators prove their materials are truly circular, so they can win better contracts, enter regulated markets faster, and capture premium pricing.
          </p>
          
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-12 max-w-2xl mx-auto">
            <p className="text-base text-slate-700 leading-relaxed mb-4">
              <strong>Hi, I'm Dr. Kai Navarro.</strong>
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              I build coordination infrastructure for the physical economy — systems that help materials, assets, and value move transparently across supply chains.
            </p>
            <p className="text-base text-slate-600 leading-relaxed mt-4">
              This platform exists to help you turn circular performance into trusted, tradable data.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => {
                const kaiButton = document.querySelector('[aria-label="Ask Kai"]') as HTMLElement;
                if (kaiButton) kaiButton.click();
              }}
              className="px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold text-base hover:bg-slate-800 transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl shadow-slate-200"
            >
              👉 Start a Conversation with Kai
            </button>
            <button
              onClick={onNavigateToDashboard}
              className="px-8 py-4 bg-white text-slate-900 border-2 border-slate-900 rounded-xl font-semibold text-base hover:bg-slate-50 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              → See How Circular Proof Works
            </button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-6 text-center">
            Circular Materials Are Growing.
            <br />
            <span className="text-slate-600">Trusted Circular Proof Is Still Broken.</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Today, most circular operators rely on:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-slate-400 mt-1">•</span>
                  <span className="text-slate-600">Spreadsheets and fragmented reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400 mt-1">•</span>
                  <span className="text-slate-600">Expensive, slow audits</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400 mt-1">•</span>
                  <span className="text-slate-600">Inconsistent standards across buyers and regulators</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400 mt-1">•</span>
                  <span className="text-slate-600">Manual data requests from procurement teams</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">At the same time, buyers and regulators are demanding:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-slate-400 mt-1">•</span>
                  <span className="text-slate-600">Chain-of-custody traceability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400 mt-1">•</span>
                  <span className="text-slate-600">Verifiable material origin</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400 mt-1">•</span>
                  <span className="text-slate-600">Impact transparency</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400 mt-1">•</span>
                  <span className="text-slate-600">Compliance-ready reporting</span>
                </li>
              </ul>
            </div>
          </div>
          
          <p className="text-center text-lg text-slate-600 font-medium mt-12">
            Circular supply is growing.<br />
            Trusted circular data infrastructure hasn't caught up.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-4 text-center">
            Circular Data Infrastructure — Built for the Physical Economy
          </h2>
          <p className="text-xl text-slate-600 text-center mb-16 font-medium">
            Our platform helps you:
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Track</h3>
              <p className="text-slate-600 leading-relaxed">
                Capture material flows from input → processing → output at batch level.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Verify</h3>
              <p className="text-slate-600 leading-relaxed">
                Generate circular proof, chain-of-custody records, and audit-ready data automatically.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Monetise</h3>
              <p className="text-slate-600 leading-relaxed">
                Share verified circular data directly with buyers and unlock premium supply positioning.
              </p>
            </div>
          </div>
          
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Outcome:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <span className="text-teal-600 font-bold">✓</span>
                <span className="text-slate-700">Faster procurement approval</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-teal-600 font-bold">✓</span>
                <span className="text-slate-700">Lower compliance cost</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-teal-600 font-bold">✓</span>
                <span className="text-slate-700">Higher material pricing potential</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-teal-600 font-bold">✓</span>
                <span className="text-slate-700">Stronger long-term buyer relationships</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Exists (Founder Section) */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-8 text-center">
            A Note from Dr. Kai Navarro
          </h2>
          
          <div className="bg-white border border-slate-200 rounded-2xl p-10 space-y-6">
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
      <section className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-8">
            Who This Is For
          </h2>
          <p className="text-xl text-slate-600 mb-12 font-medium">
            Built specifically for:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <p className="font-semibold text-slate-900">Material recyclers</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <p className="font-semibold text-slate-900">Recovery and reprocessing operators</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <p className="font-semibold text-slate-900">Remanufacturers</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <p className="font-semibold text-slate-900">Circular supply chain operators</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 md:col-span-2">
              <p className="font-semibold text-slate-900">Advanced material recovery innovators</p>
            </div>
          </div>
          
          <p className="text-lg text-slate-600 mt-12 font-medium">
            If you sell recovered, recycled, or circular materials into industrial supply chains — this is built for you.
          </p>
        </div>
      </section>

      {/* Core Value Section */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-8 text-center">
            Turn Circular Performance Into Commercial Advantage
          </h2>
          <p className="text-xl text-slate-600 text-center mb-12 font-medium">
            With verified circular data, you can:
          </p>
          
          <div className="bg-white border border-slate-200 rounded-2xl p-10 space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-2xl text-teal-600 font-bold">✔</span>
              <span className="text-lg text-slate-700">Win contracts that require traceability</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl text-teal-600 font-bold">✔</span>
              <span className="text-lg text-slate-700">Enter regulated markets faster</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl text-teal-600 font-bold">✔</span>
              <span className="text-lg text-slate-700">Reduce audit and reporting overhead</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl text-teal-600 font-bold">✔</span>
              <span className="text-lg text-slate-700">Become a preferred long-term supply partner</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl text-teal-600 font-bold">✔</span>
              <span className="text-lg text-slate-700">Defend pricing with verified proof</span>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Intelligence Section */}
      <section className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-8">
            Work Directly With Founder-Level Systems Thinking
          </h2>
          <p className="text-xl text-slate-600 mb-8 font-medium">
            Inside the platform, you can talk directly with me.
          </p>
          <p className="text-lg text-slate-600 mb-12">
            Ask:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 text-left mb-12">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <p className="text-slate-700">How to structure your traceability data</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <p className="text-slate-700">How buyers will evaluate circular proof</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <p className="text-slate-700">How regulations are likely to shape procurement</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <p className="text-slate-700">How circular markets are evolving globally</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 md:col-span-2">
              <p className="text-slate-700">How to position your materials strategically</p>
            </div>
          </div>
          
          <button
            onClick={() => {
              const kaiButton = document.querySelector('[aria-label="Ask Kai"]') as HTMLElement;
              if (kaiButton) kaiButton.click();
            }}
            className="px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold text-base hover:bg-slate-800 transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl shadow-slate-200"
          >
            👉 Ask Kai Your Question
          </button>
        </div>
      </section>

      {/* Belief Section */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-8">
            Our Core Belief
          </h2>
          <p className="text-2xl font-semibold text-slate-900 mb-6 leading-relaxed">
            The next leap in industrial progress is not faster computation.
          </p>
          <p className="text-2xl font-semibold text-slate-900 mb-6 leading-relaxed">
            It's coordinated physical systems.
          </p>
          <p className="text-xl text-slate-600 font-medium leading-relaxed">
            Or more simply:
          </p>
          <p className="text-2xl font-semibold text-slate-900 mt-6 leading-relaxed">
            We digitised information.<br />
            Now we need to digitise how matter moves through society.
          </p>
        </div>
      </section>

      {/* Trust / Differentiation Section */}
      <section className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-8 text-center">
            Built by Systems Builders, Not Sustainability Software Vendors
          </h2>
          <p className="text-xl text-slate-600 text-center mb-12 font-medium">
            We design for:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 text-center">
              <p className="text-lg font-semibold text-slate-900">Real facilities</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 text-center">
              <p className="text-lg font-semibold text-slate-900">Real supply chains</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 text-center">
              <p className="text-lg font-semibold text-slate-900">Real procurement decisions</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 text-center">
              <p className="text-lg font-semibold text-slate-900">Real compliance pressure</p>
            </div>
          </div>
          
          <p className="text-center text-xl font-semibold text-slate-900 mt-12">
            This is infrastructure — not dashboards.
          </p>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8">
            Circular Supply Chains Need Trusted Infrastructure
          </h2>
          <p className="text-xl text-slate-300 mb-12 font-medium leading-relaxed">
            If you're already doing the hard work of recovering and producing circular materials, you shouldn't have to fight to prove it.
          </p>
          <p className="text-xl text-slate-200 mb-12 font-semibold leading-relaxed">
            Let's make circular proof portable, trusted, and commercially valuable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => {
                const kaiButton = document.querySelector('[aria-label="Ask Kai"]') as HTMLElement;
                if (kaiButton) kaiButton.click();
              }}
              className="px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold text-base hover:bg-slate-100 transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl"
            >
              👉 Talk with Dr. Kai Navarro
            </button>
            <button
              onClick={onNavigateToDashboard}
              className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-xl font-semibold text-base hover:bg-white/10 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              → See How the Platform Works
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
    </div>
  );
};

export default Landing;
