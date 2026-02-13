
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
      <aside className="w-72 border-r border-slate-100 flex flex-col pt-1">
        <div className="px-8 py-10">
          <h1 className="text-xl font-bold tracking-tight flex items-center gap-2 text-slate-900">
            Circular Data Exchange
          </h1>
          <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-[0.2em]">Open Protocol</p>
        </div>
        
        <nav className="flex-1 px-4 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setView(item.id)}
              className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center gap-4 ${
                currentView === item.id 
                  ? 'bg-slate-50 text-slate-900 font-semibold' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span className={`text-lg transition-transform ${currentView === item.id ? 'scale-110' : ''}`}>
                {item.icon}
              </span>
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-6">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-2 w-2 rounded-full bg-teal-500 animate-pulse"></div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Node Status: Active</p>
            </div>
            <p className="text-sm font-bold text-slate-800 truncate">EcoRecover Solutions UK</p>
            <p className="text-xs text-slate-400 mt-1">ID: cdx_node_88219</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pt-1 relative">
        <header className="px-10 py-8 flex justify-between items-center bg-white/80 backdrop-blur-sm sticky top-0 z-10">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight capitalize">
              {currentView.replace('-', ' ')}
            </h2>
            <p className="text-sm text-slate-400 mt-0.5 font-medium">Verify and monetize circular material flows.</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex -space-x-2">
              <div className="h-8 w-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold">MB</div>
              <div className="h-8 w-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold">PA</div>
            </div>
            <button className="h-10 w-10 bg-slate-900 rounded-xl flex items-center justify-center text-white text-sm shadow-xl shadow-slate-200 hover:scale-105 transition-transform active:scale-95">
              ER
            </button>
          </div>
        </header>
        <div className="px-10 pb-20">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
