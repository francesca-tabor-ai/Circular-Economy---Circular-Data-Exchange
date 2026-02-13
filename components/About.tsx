
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-24 py-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Hero Section */}
      <section className="space-y-6">
        <div className="inline-block px-3 py-1 bg-teal-50 border border-teal-100 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-teal-600 mb-2">
          Infrastructure for Trust
        </div>
        <h1 className="text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
          Building the Infrastructure for Trusted Circular Materials
        </h1>
        <p className="text-xl text-slate-500 leading-relaxed font-medium max-w-2xl">
          The world is moving toward circular supply chains — but the infrastructure to prove what’s truly circular is still broken.
        </p>
      </section>

      {/* The Challenge Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">The Current State</h2>
          <p className="text-slate-600 leading-relaxed">
            Today, recyclers, recovery operators, and remanufacturers do critical work recovering materials and keeping resources in use. Yet they’re forced to rely on fragmented spreadsheets, manual audits, and inconsistent standards to prove the value of what they produce.
          </p>
          <p className="text-slate-600 leading-relaxed font-bold">
            We exist to change that.
          </p>
        </div>
        <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <span className="text-7xl">🏗️</span>
          </div>
          <h3 className="text-teal-600 font-bold uppercase text-[10px] tracking-widest mb-4">Our Mission</h3>
          <p className="text-lg font-bold text-slate-800 leading-snug">
            We help circular materials companies prove, protect, and increase the value of their materials through trusted, verifiable circular data.
          </p>
          <div className="mt-8 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-400 font-medium">Goal: Make circular proof as reliable, tradable, and valuable as the materials themselves.</p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="space-y-12">
        <div className="h-1 w-20 cdx-gradient rounded-full"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Track", desc: "Material flows from input to output with precision." },
            { title: "Generate", desc: "Verifiable circular proof and chain-of-custody records." },
            { title: "Share", desc: "Trusted data directly with buyers, partners, and regulators." },
            { title: "Unlock", desc: "Premium pricing and faster procurement approval cycles." }
          ].map((item, i) => (
            <div key={i} className="space-y-3">
              <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who We Build For */}
      <section className="bg-slate-900 text-white p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 blur-[120px] rounded-full"></div>
        <div className="relative z-10 space-y-12">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Who We Build For</h2>
            <p className="text-slate-400 leading-relaxed">
              We focus on the companies doing the hard, real-world work of circularity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
            <div className="flex gap-4 items-start">
              <div className="text-teal-400 font-bold">01</div>
              <div>
                <p className="font-bold text-white">Materials Recyclers</p>
                <p className="text-xs text-slate-500 mt-1">Industrial scale processors of waste streams.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-teal-400 font-bold">02</div>
              <div>
                <p className="font-bold text-white">Recovery Operators</p>
                <p className="text-xs text-slate-500 mt-1">Specialized reprocessing and refinement facilities.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-teal-400 font-bold">03</div>
              <div>
                <p className="font-bold text-white">Industrial Remanufacturers</p>
                <p className="text-xs text-slate-500 mt-1">Extending lifecycle for high-value components.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-teal-400 font-bold">04</div>
              <div>
                <p className="font-bold text-white">Material Recovery Innovators</p>
                <p className="text-xs text-slate-500 mt-1">Advanced tech startups solving complex waste.</p>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-slate-500 italic border-t border-white/10 pt-8">
            These are the organisations turning waste streams into supply chains — and they deserve infrastructure built specifically for them.
          </p>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Why This Matters</h2>
          <p className="text-slate-600 leading-relaxed">
            Global supply chains are under pressure to prove sustainability, reduce risk, and comply with new regulations. At the same time, circular material producers are being asked to prove more — with fewer tools and less standardisation.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-1.5 w-1.5 rounded-full bg-teal-500"></div>
              <span className="text-sm font-bold text-slate-800">A market access requirement</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-1.5 w-1.5 rounded-full bg-teal-500"></div>
              <span className="text-sm font-bold text-slate-800">A pricing advantage</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-1.5 w-1.5 rounded-full bg-teal-500"></div>
              <span className="text-sm font-bold text-slate-800">A competitive differentiator</span>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <div className="space-y-4">
             <h3 className="text-xl font-bold text-slate-900 tracking-tight">Our Belief</h3>
             <p className="text-slate-500 leading-relaxed">
               We believe the future of industry is transparent, verifiable, collaborative, and circular by default. And we believe the companies already doing the work should capture more of the value.
             </p>
          </div>
          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
             <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Where We're Going</h3>
             <p className="text-sm font-bold text-slate-800 leading-relaxed">
               An open, interoperable infrastructure layer that helps circular supply chains scale globally — without gatekeepers.
             </p>
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="pt-20 border-t border-slate-100 text-center">
        <div className="inline-block h-1 w-32 cdx-gradient rounded-full mb-8"></div>
        <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.3em]">CDX Protocol © 2024</p>
      </footer>
    </div>
  );
};

export default About;
