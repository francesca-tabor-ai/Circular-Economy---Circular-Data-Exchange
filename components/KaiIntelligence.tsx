
import React, { useState, useEffect, useRef } from 'react';
import { createKaiChat, ApiKeyError } from '../services/kaiService';
import { Message } from '../types';
import { Chat, GenerateContentResponse } from '@google/genai';
import { hasApiKey } from '../utils/apiKeyCheck';

type View = 'dashboard' | 'ledger' | 'verification' | 'buyer' | 'about';

interface KaiIntelligenceProps {
  isOpen: boolean;
  onClose: () => void;
  currentView: View;
}

const STARTER_PROBES: Record<View, string[]> = {
  dashboard: [
    "How can I optimize my circular yield for this month?",
    "What do these verification trends mean for my pricing?",
    "How can I improve my CO2 avoided metrics?"
  ],
  ledger: [
    "How should I structure my batch data for best results?",
    "Which material origins are currently most valuable?",
    "Is my material class categorization correct?"
  ],
  verification: [
    "What factors drive my circularity score the most?",
    "How do I explain this proof to an enterprise buyer?",
    "What specific compliance standards are being checked?"
  ],
  buyer: [
    "How do I securely share data with specific OEMs?",
    "What do buyers look for in a high-integrity passport?",
    "How can I win more supply contracts using this data?"
  ],
  about: [
    "Tell me more about your vision for coordination.",
    "Why focus on physical infrastructure instead of software?",
    "What exactly is the CDX protocol layer?"
  ]
};

const KaiIntelligence: React.FC<KaiIntelligenceProps> = ({ isOpen, onClose, currentView }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      text: "Hello. I'm Kai. I designed CDX to solve a coordination problem in the physical economy. How can I help you navigate this transition today?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef<Chat | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chatRef.current && hasApiKey()) {
      try {
        chatRef.current = createKaiChat();
      } catch (error) {
        console.error("Failed to create Kai chat:", error);
      }
    }
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (overrideInput?: string) => {
    const textToSend = overrideInput || input;
    if (!textToSend.trim()) return;

    // Check for API key before proceeding
    if (!hasApiKey()) {
      setMessages(prev => [...prev, 
        { role: 'user', text: textToSend, timestamp: new Date() },
        { 
          role: 'model', 
          text: 'Google API key is required. Please set GEMINI_API_KEY in your .env.local file to use this feature.', 
          timestamp: new Date() 
        }
      ]);
      setInput('');
      return;
    }

    // Initialize chat if needed
    if (!chatRef.current) {
      try {
        chatRef.current = createKaiChat();
      } catch (error) {
        if (error instanceof ApiKeyError) {
          setMessages(prev => [...prev, 
            { role: 'user', text: textToSend, timestamp: new Date() },
            { 
              role: 'model', 
              text: 'Google API key is required. Please set GEMINI_API_KEY in your .env.local file to use this feature.', 
              timestamp: new Date() 
            }
          ]);
          setInput('');
          return;
        }
        throw error;
      }
    }

    const userMsg: Message = { role: 'user', text: textToSend, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const result = await chatRef.current.sendMessageStream({ message: textToSend });
      let fullText = '';
      
      setMessages(prev => [...prev, { role: 'model', text: '', timestamp: new Date() }]);

      for await (const chunk of result) {
        const chunkText = (chunk as GenerateContentResponse).text;
        fullText += chunkText;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].text = fullText;
          return newMessages;
        });
      }
    } catch (error) {
      console.error("Kai interrupted:", error);
      if (error instanceof ApiKeyError) {
        setMessages(prev => [...prev, { 
          role: 'model', 
          text: 'Google API key is required. Please set GEMINI_API_KEY in your .env.local file to use this feature.', 
          timestamp: new Date() 
        }]);
      } else {
        setMessages(prev => [...prev, { role: 'model', text: "I apologize, my connection to the protocol was momentarily interrupted. Could you repeat that?", timestamp: new Date() }]);
      }
    } finally {
      setIsTyping(false);
    }
  };

  if (!isOpen) return null;

  const currentProbes = STARTER_PROBES[currentView] || STARTER_PROBES.dashboard;

  return (
    <div className="fixed inset-y-0 right-0 w-full max-w-lg bg-white shadow-[0_0_50px_-12px_rgba(0,0,0,0.15)] z-50 flex flex-col border-l border-slate-100 animate-in slide-in-from-right duration-500">
      {/* Header */}
      <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
            <img src="https://i.postimg.cc/DShwwW1f/11-Aquarius-Circular-Data-Exchange-(CDX).png" alt="Kai Navarro" className="h-full w-full object-cover" />
            <div className="absolute bottom-0 right-0 h-2.5 w-2.5 bg-teal-500 border-2 border-white rounded-full"></div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-0.5">
               <h3 className="text-lg font-bold text-slate-900 tracking-tight">Founder Intelligence</h3>
            </div>
            <div className="flex items-center gap-2">
               <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Dr. Kai Navarro</span>
               <span className="h-1 w-1 rounded-full bg-slate-300"></span>
               <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Systems Architect</span>
            </div>
          </div>
        </div>
        <button 
          onClick={onClose} 
          className="h-10 w-10 flex items-center justify-center hover:bg-slate-50 rounded-xl text-slate-400 transition-colors group"
        >
          <span className="group-hover:rotate-90 transition-transform inline-block">✕</span>
        </button>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 scroll-smooth selection:bg-teal-50">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] space-y-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
              <div className={`inline-block p-6 rounded-[2rem] text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-slate-900 text-white rounded-tr-none shadow-xl shadow-slate-100' 
                  : 'bg-slate-50 text-slate-800 rounded-tl-none border border-slate-100'
              }`}>
                {msg.text || (isTyping && idx === messages.length - 1 ? '...' : '')}
              </div>
              <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest px-1">
                {msg.role === 'user' ? 'Operator' : 'Dr. Navarro'} • {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
        {isTyping && !messages[messages.length-1].text && (
          <div className="flex justify-start">
             <div className="bg-slate-50 border border-slate-100 p-6 rounded-[2rem] rounded-tl-none">
                <div className="flex gap-1.5">
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce delay-150"></div>
                </div>
             </div>
          </div>
        )}
      </div>

      {/* Input & Probes */}
      <div className="p-8 bg-white border-t border-slate-100 space-y-6">
        {/* Starter Probes */}
        {messages.length < 3 && !isTyping && (
          <div className="space-y-2">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-3 px-1">Suggested Inquiries</p>
            <div className="flex flex-wrap gap-2">
              {currentProbes.map((probe, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(probe)}
                  className="text-xs text-slate-600 bg-slate-50 hover:bg-teal-50 hover:text-teal-700 border border-slate-100 rounded-xl px-4 py-2.5 transition-all text-left max-w-full"
                >
                  {probe}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="relative group">
          <textarea
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
            placeholder="Inquire about circular strategy or systems..."
            className="w-full bg-slate-50 border border-slate-100 rounded-[1.5rem] px-6 py-5 pr-16 text-sm font-medium focus:bg-white focus:outline-none focus:ring-4 focus:ring-slate-50 transition-all resize-none overflow-hidden"
          />
          <button 
            onClick={() => handleSend()}
            disabled={!input.trim() || isTyping}
            className="absolute right-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-lg shadow-slate-200 transition-all active:scale-95 disabled:opacity-30 disabled:grayscale"
          >
            <span className="text-xl">↑</span>
          </button>
        </div>
        <div className="mt-4 flex justify-between items-center px-2">
           <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Founder Session Active</p>
           <div className="flex gap-1">
              <div className="h-1 w-1 bg-teal-400 rounded-full"></div>
              <div className="h-1 w-1 bg-teal-400/50 rounded-full"></div>
              <div className="h-1 w-1 bg-teal-400/20 rounded-full"></div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default KaiIntelligence;
