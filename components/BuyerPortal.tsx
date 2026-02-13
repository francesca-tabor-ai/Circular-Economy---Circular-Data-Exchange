
import React from 'react';

const BuyerPortal: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-16 animate-in fade-in duration-700">
      <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-100">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Data Vault & Permissions</h2>
            <p className="text-slate-500 mt-3 leading-relaxed">Grant secure, cryptographic access to your verified material batches for supply chain partners and regulators.</p>
          </div>
          <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl text-xs font-bold uppercase tracking-widest shadow-2xl shadow-slate-200 hover:scale-105 transition-transform active:scale-95">
            Authorize New Buyer
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Mercedes-Benz AG', type: 'Automotive OEM', activeShares: 12, status: 'Active' },
            { name: 'Samsung SDI', type: 'Energy Storage', activeShares: 8, status: 'Reviewing' },
            { name: 'Patagonia Inc.', type: 'Apparel Recovery', activeShares: 3, status: 'Active' },
          ].map((partner) => (
            <div key={partner.name} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-slate-200 hover:shadow-xl hover:shadow-slate-100 transition-all duration-300">
              <div className="flex justify-between items-start mb-8">
                <div className="h-14 w-14 bg-white rounded-2xl border border-slate-100 flex items-center justify-center font-black text-slate-200 text-xl group-hover:text-slate-900 transition-colors">
                  {partner.name[0]}
                </div>
                <span className={`text-[9px] font-bold px-3 py-1 rounded-full border tracking-widest uppercase ${
                  partner.status === 'Active' ? 'bg-teal-50 text-teal-600 border-teal-100' : 'bg-slate-100 text-slate-400 border-slate-200'
                }`}>
                  {partner.status}
                </span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 tracking-tight">{partner.name}</h4>
              <p className="text-xs font-medium text-slate-400 mb-6">{partner.type}</p>
              
              <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800">{partner.activeShares} Batch Accesses</span>
                <button className="text-[10px] font-bold text-teal-600 uppercase tracking-wider hover:underline underline-offset-4">Manage</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-end mb-8 px-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">Active Material Passports</h3>
            <p className="text-sm text-slate-400 font-medium">Public-facing verification records for open supply chains.</p>
          </div>
          <div className="h-1 w-24 cdx-gradient rounded-full"></div>
        </div>
        
        <div className="space-y-4">
          {[
            { emoji: '🔋', title: 'Lithium-Ion Black Mass (B-2901)', id: 'CDX-992-81', date: '2024-05-15', score: '92', tags: ['92% Circular', 'Low Carbon', 'Conflict-Free'] },
            { emoji: '♻️', title: 'rPET Flakes Premium (B-2882)', id: 'CDX-441-20', date: '2024-05-12', score: '88', tags: ['88% Circular', 'Post-Consumer', 'Food Grade'] },
          ].map((item, idx) => (
            <div key={idx} className="group flex items-center gap-8 p-8 rounded-3xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all cursor-pointer">
               <div className="h-20 w-20 bg-slate-50 rounded-[1.5rem] flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                  {item.emoji}
               </div>
               <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                     <h4 className="text-xl font-bold text-slate-900 tracking-tight">{item.title}</h4>
                     <span className="text-[10px] font-mono font-bold bg-slate-100 text-slate-500 px-3 py-1.5 rounded-lg border border-slate-200">
                       ID: {item.id}
                     </span>
                  </div>
                  <p className="text-xs font-medium text-slate-400">Published on: {item.date} • Origin Verified via CDX Protocol</p>
                  <div className="flex gap-4 mt-4">
                     {item.tags.map((tag, tIdx) => (
                       <span key={tIdx} className="text-[9px] font-bold uppercase tracking-wider px-3 py-1 bg-slate-50 border border-slate-100 text-slate-600 rounded-full">
                         {tag}
                       </span>
                     ))}
                  </div>
               </div>
               <div className="h-12 w-12 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-white transition-all">
                  <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuyerPortal;
