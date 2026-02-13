
import React, { useState } from 'react';
import { MaterialBatch } from '../types';

const INITIAL_BATCHES: MaterialBatch[] = [
  { id: '1', batchNumber: 'BAT-2024-001', materialType: 'Battery', origin: 'Tesla Giga Berlin (Scrap)', weightKg: 5000, status: 'Verified', circularityScore: 92, timestamp: '2024-05-15' },
  { id: '2', batchNumber: 'PLA-2024-088', materialType: 'Plastic', origin: 'Post-Consumer HDPE (Munich)', weightKg: 12000, status: 'Processing', circularityScore: 84, timestamp: '2024-05-14' },
  { id: '3', batchNumber: 'TEX-2024-012', materialType: 'Textile', origin: 'Recycled Cotton (Italy)', weightKg: 800, status: 'Inbound', circularityScore: 78, timestamp: '2024-05-16' },
  { id: '4', batchNumber: 'PET-2024-551', materialType: 'Plastic', origin: 'Marine Recovery Program', weightKg: 2500, status: 'Verified', circularityScore: 96, timestamp: '2024-05-12' },
];

const BatchLedger: React.FC = () => {
  const [batches] = useState<MaterialBatch[]>(INITIAL_BATCHES);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBatches = batches.filter(b => 
    b.batchNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.origin.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="relative w-full max-w-xl">
          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300">🔍</span>
          <input 
            type="text" 
            placeholder="Search material logs, origins, or IDs..." 
            className="w-full pl-14 pr-6 py-4 border border-slate-100 rounded-[1.25rem] bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-slate-50 transition-all text-sm font-medium"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <button className="flex-1 md:flex-none px-8 py-4 bg-white border border-slate-200 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-slate-50 transition-all">
            Export JSON
          </button>
          <button className="flex-1 md:flex-none px-8 py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest shadow-xl shadow-slate-100 hover:scale-[1.02] transition-transform active:scale-95">
            + Log Batch
          </button>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-8 py-6 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Flow Identifier</th>
                <th className="px-8 py-6 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Material Class</th>
                <th className="px-8 py-6 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Weight (NET)</th>
                <th className="px-8 py-6 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Circularity</th>
                <th className="px-8 py-6 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Protocol Status</th>
                <th className="px-8 py-6 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredBatches.map((batch) => (
                <tr key={batch.id} className="group hover:bg-slate-50/50 transition-all duration-200">
                  <td className="px-8 py-6">
                    <div>
                      <span className="font-mono text-xs font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded-md border border-slate-200">
                        {batch.batchNumber}
                      </span>
                      <p className="text-[10px] font-medium text-slate-400 mt-2 truncate max-w-[180px]">Origin: {batch.origin}</p>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-teal-500"></div>
                      <span className="text-sm font-bold text-slate-700">{batch.materialType}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-sm font-black text-slate-900">
                    {batch.weightKg.toLocaleString()} <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest ml-1">KG</span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="flex-1 min-w-[80px] h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-slate-900 group-hover:bg-teal-500 transition-colors duration-500" 
                          style={{ width: `${batch.circularityScore}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-black text-slate-900">{batch.circularityScore}%</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border ${
                      batch.status === 'Verified' ? 'bg-teal-50 text-teal-600 border-teal-100' : 
                      batch.status === 'Processing' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                      'bg-slate-100 text-slate-500 border-slate-200'
                    }`}>
                      {batch.status}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <button className="h-10 w-10 flex items-center justify-center rounded-xl hover:bg-white hover:shadow-md border border-transparent hover:border-slate-100 transition-all">
                      <span className="text-slate-300 group-hover:text-slate-900">🔍</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BatchLedger;
