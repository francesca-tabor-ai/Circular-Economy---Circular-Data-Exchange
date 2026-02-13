
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  currentView: string;
  setView: (view: any) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentView, setView }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'ledger', label: 'Material Ledger', icon: '📋' },
    { id: 'verification', label: 'Verification Engine', icon: '🛡️' },
    { id: 'buyer', label: 'Buyer Portal', icon: '💼' },
    { id: 'about', label: 'About Us', icon: '✨' },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-white relative">
      {/* Signature Gradient Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 cdx-gradient z-50"></div>

      {/* Sidebar */}
      <aside className="w-72 border-r border-slate-200 flex flex-col pt-1">
        <div className="px-8 py-12">
          <h1 className="text-xl font-bold tracking-tight flex items-center gap-2 text-slate-900">
            Circular Data Exchange
          </h1>
          <p className="text-[10px] font-semibold text-slate-500 mt-2 uppercase tracking-[0.2em]">Open Protocol</p>
        </div>
        
        <nav className="flex-1 px-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setView(item.id)}
              className={`w-full text-left px-5 py-3.5 rounded-xl transition-all duration-300 flex items-center gap-4 group relative overflow-hidden ${
                currentView === item.id 
                  ? 'bg-slate-100 text-slate-900 font-semibold shadow-sm' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 hover:shadow-sm'
              }`}
            >
              {/* Subtle background animation */}
              <div className={`absolute inset-0 bg-slate-200/50 transform transition-transform duration-300 ${
                currentView === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              } origin-left`}></div>
              
              <span className={`text-lg transition-all duration-300 relative z-10 ${
                currentView === item.id 
                  ? 'scale-110 rotate-0' 
                  : 'scale-100 group-hover:scale-110 group-hover:rotate-12'
              }`}>
                {item.icon}
              </span>
              <span className="text-sm leading-relaxed relative z-10 transition-all duration-300 group-hover:translate-x-1">
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        <div className="p-6">
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-2 w-2 rounded-full bg-slate-400 animate-pulse"></div>
              <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Node Status: Active</p>
            </div>
            <p className="text-sm font-semibold text-slate-900 truncate">EcoRecover Solutions UK</p>
            <p className="text-xs text-slate-500 mt-1">ID: cdx_node_88219</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pt-1 relative">
        <header className="px-12 py-10 flex justify-between items-center bg-white/80 backdrop-blur-sm sticky top-0 z-10 border-b border-slate-200">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
              {currentView.replace('-', ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </h2>
            <p className="text-sm text-slate-500 font-normal leading-relaxed">The platform built exclusively for circular economy operators.</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex -space-x-2">
              <div className="h-8 w-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-semibold text-slate-700">MB</div>
              <div className="h-8 w-8 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center text-[10px] font-semibold text-slate-700">PA</div>
            </div>
            <button className="h-10 w-10 bg-slate-900 rounded-xl flex items-center justify-center text-white text-sm cdx-shadow hover:cdx-shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 group relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl"></div>
              <span className="relative z-10">ER</span>
            </button>
          </div>
        </header>
        <div className="px-12 pb-24">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
