
import React from 'react';
import { CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'Jan', volume: 400, verified: 320, impact: 2100 },
  { name: 'Feb', volume: 300, verified: 280, impact: 1800 },
  { name: 'Mar', volume: 600, verified: 550, impact: 3500 },
  { name: 'Apr', volume: 800, verified: 780, impact: 4800 },
  { name: 'May', volume: 500, verified: 480, impact: 3100 },
  { name: 'Jun', volume: 900, verified: 890, impact: 5200 },
];

const StatCard: React.FC<{ title: string; value: string; trend: string; isPositive: boolean }> = ({ title, value, trend, isPositive }) => (
  <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-100 transition-all duration-300">
    <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-4">{title}</h3>
    <div className="flex items-baseline justify-between">
      <span className="text-4xl font-bold text-slate-900 tracking-tight">{value}</span>
      <span className={`text-xs font-bold ${isPositive ? 'text-teal-600' : 'text-slate-600'}`}>
        {trend}
      </span>
    </div>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-2 duration-700">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <StatCard title="Volume Tracked" value="4.2k t" trend="↑ 12.5%" isPositive={true} />
        <StatCard title="Verified Flow" value="3.8k t" trend="↑ 18.2%" isPositive={true} />
        <StatCard title="CO2 Avoided" value="12.5k t" trend="↑ 8.1%" isPositive={true} />
        <StatCard title="Price Premium" value="+14.2%" trend="↑ 2.4%" isPositive={true} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">Verification Efficiency</h3>
              <p className="text-sm text-slate-400 font-medium">Monthly throughput of verified circular assets.</p>
            </div>
            <div className="flex gap-2">
              <div className="w-10 h-1 cdx-gradient rounded-full"></div>
            </div>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0d9488" stopOpacity={0.05}/>
                    <stop offset="95%" stopColor="#0d9488" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f8fafc" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 500}} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 500}} 
                  dx={-10}
                />
                <Tooltip 
                  cursor={{ stroke: '#f1f5f9', strokeWidth: 2 }}
                  contentStyle={{ 
                    borderRadius: '16px', 
                    border: '1px solid #f1f5f9', 
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)',
                    padding: '12px 16px',
                    fontSize: '12px',
                    fontWeight: '600'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="verified" 
                  stroke="#0d9488" 
                  strokeWidth={3} 
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                  animationDuration={1500}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Action Items */}
        <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">Pending Proof</h3>
            <span className="text-[10px] font-bold bg-amber-50 text-amber-600 px-3 py-1 rounded-full border border-amber-100">Priority</span>
          </div>
          <div className="space-y-6">
            {[
              { id: 'B-2901', type: 'rPET Flakes', volume: '40t', status: 'Analysis' },
              { id: 'B-2904', type: 'Battery Mass', volume: '12t', status: 'Review' },
              { id: 'B-2898', type: 'LDPE Pellets', volume: '100t', status: 'Ready' },
            ].map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-teal-200 hover:bg-white transition-all duration-300 cursor-pointer">
                <div>
                  <p className="text-xs font-bold text-slate-400 mb-0.5">{item.id}</p>
                  <p className="text-sm font-bold text-slate-800">{item.type}</p>
                  <p className="text-[10px] text-slate-400 font-medium">{item.volume} • {item.status}</p>
                </div>
                <div className="h-8 w-8 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600 transition-all">
                  →
                </div>
              </div>
            ))}
            <button className="w-full py-4 text-slate-400 text-xs hover:text-slate-900 font-bold uppercase tracking-widest transition-colors">
              View All Pipeline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
