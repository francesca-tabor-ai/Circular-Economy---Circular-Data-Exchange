
import React, { useState } from 'react';
import { MaterialBatch, VerificationResult } from '../types';
import { verifyBatchCircularity } from '../services/geminiService';

const VerificationEngine: React.FC = () => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [result, setResult] = useState<VerificationResult | null>(null);

  const mockBatch: MaterialBatch = {
    id: 'temp-123',
    batchNumber: 'PET-TEST-99',
    materialType: 'Plastic',
    origin: 'Ocean Bound Plastic (Bali, Indonesia)',
    weightKg: 2500,
    status: 'Inbound',
    circularityScore: 0,
    timestamp: new Date().toISOString()
  };

  const handleVerify = async () => {
    setIsVerifying(true);
    const verification = await verifyBatchCircularity(mockBatch);
    setResult(verification);
    setIsVerifying(false);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-12 animate-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-2xl">
        <h2 className="text-4xl font-bold text-slate-900 tracking-tight leading-tight">
          Verify and prove your circular impact.
        </h2>
        <p className="text-lg text-slate-500 mt-4 leading-relaxed">
          The CDX Protocol uses multi-layered verification to turn raw material data into high-value verified assets for global supply chains.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Input Form */}
        <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-10 w-1 cdx-gradient rounded-full"></div>
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">Batch Configuration</h3>
          </div>
          
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Source Identification</label>
                <input 
                  type="text" 
                  value={mockBatch.batchNumber} 
                  disabled 
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-sm font-semibold text-slate-900 outline-none" 
                />
              </div>
              <div className="col-span-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Material Origin Details</label>
                <textarea 
                  rows={3} 
                  value={mockBatch.origin} 
                  disabled 
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-sm font-semibold text-slate-900 resize-none outline-none" 
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Net Weight</label>
                <div className="relative">
                   <input type="text" value={mockBatch.weightKg.toLocaleString()} disabled className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-sm font-semibold text-slate-900 outline-none" />
                   <span className="absolute right-5 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400 uppercase">KG</span>
                </div>
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Asset Class</label>
                <input type="text" value={mockBatch.materialType} disabled className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-sm font-semibold text-slate-900 outline-none" />
              </div>
            </div>
            
            <button 
              onClick={handleVerify}
              disabled={isVerifying}
              className={`w-full py-5 rounded-2xl font-bold text-sm tracking-wider uppercase transition-all duration-300 transform ${
                isVerifying 
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                  : 'bg-slate-900 text-white shadow-2xl shadow-slate-200 hover:scale-[1.02] active:scale-95'
              }`}
            >
              {isVerifying ? 'Analyzing via Protocol...' : 'Run CDX Verification'}
            </button>
          </div>
        </div>

        {/* Verification Report */}
        <div className="bg-slate-900 text-white p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden flex flex-col min-h-[500px]">
          {/* Subtle Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 blur-[80px] rounded-full"></div>

          <div className="relative z-10 flex flex-col h-full">
            <div className="flex justify-between items-center mb-12">
              <span className="text-[10px] font-bold text-teal-400 uppercase tracking-[0.3em]">Protocol Output</span>
              {result && (
                <div className="px-3 py-1 bg-teal-500/20 text-teal-400 rounded-full text-[10px] font-bold uppercase border border-teal-500/20">
                  Verified Integrity
                </div>
              )}
            </div>

            {!result && !isVerifying && (
               <div className="flex-1 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl mb-6">
                    🛡️
                  </div>
                  <h4 className="text-lg font-bold mb-2">Awaiting verification</h4>
                  <p className="text-sm text-slate-500 max-w-xs mx-auto">Upload batch parameters to run the circularity verification engine.</p>
               </div>
            )}

            {isVerifying && (
               <div className="flex-1 flex flex-col items-center justify-center text-center space-y-8 animate-pulse">
                  <div className="relative w-12 h-12">
                    <div className="absolute inset-0 border-4 border-teal-500/20 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                  <p className="text-sm font-bold text-teal-500 uppercase tracking-widest">Cross-referencing data sources...</p>
               </div>
            )}

            {result && !isVerifying && (
               <div className="flex-1 space-y-10 animate-in zoom-in-95 duration-500">
                  <div className="flex items-baseline justify-between">
                     <h4 className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">Circularity Index</h4>
                     <span className="text-6xl font-black text-white tracking-tighter">{result.score}%</span>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                     <h5 className="text-[10px] font-bold text-teal-400 uppercase tracking-widest mb-4">Integrity Summary</h5>
                     <p className="text-lg leading-relaxed font-medium text-slate-200 italic">
                       "{result.integrityInsights}"
                     </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                     <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                        <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-2">Compliance</p>
                        <p className={`text-sm font-bold ${result.complianceStatus === 'Passed' ? 'text-green-400' : 'text-amber-400'}`}>
                          {result.complianceStatus} Standard
                        </p>
                     </div>
                     <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                        <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-2">Economic Yield</p>
                        <p className="text-sm font-bold text-teal-400">{result.suggestedPremium} Premium</p>
                     </div>
                  </div>

                  <button className="w-full py-5 bg-white text-slate-900 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-slate-100 transition-colors mt-auto">
                    Issue Material Passport
                  </button>
               </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-slate-100">
        <div className="flex gap-4">
          <div className="text-2xl">📈</div>
          <div>
            <h4 className="font-bold text-slate-900">Revenue Unlock</h4>
            <p className="text-sm text-slate-500 mt-1 leading-relaxed">Verification bridges the trust gap between materials recovery and enterprise buyers, allowing for premium pricing on high-integrity batches.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="text-2xl">⚖️</div>
          <div>
            <h4 className="font-bold text-slate-900">Regulatory Guardrails</h4>
            <p className="text-sm text-slate-500 mt-1 leading-relaxed">Automated compliance mapping against EU Battery Passport, Plastic Packaging waste directives, and ESG reporting standards.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationEngine;
