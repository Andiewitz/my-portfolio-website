import React from 'react';
import { Home, Terminal, ArrowLeft, AlertCircle } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-sanity-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Background Grid Pattern - Reusing style for consistency but subtle */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{
             backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
             backgroundSize: '40px 40px'
          }}
        ></div>
      </div>
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-sanity-black opacity-80 pointer-events-none"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-lg mx-auto">
        
        {/* Icon Badge */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/5 border border-white/10 mb-8 shadow-2xl shadow-sanity-red/10 animate-float-slow">
          <AlertCircle size={32} className="text-sanity-orange" />
        </div>

        {/* Glitchy 404 */}
        <h1 className="text-8xl md:text-9xl font-bold font-mono tracking-tighter text-white mb-2 relative inline-block">
          <span className="relative z-10">404</span>
          <span className="absolute top-0 left-1 -z-10 text-sanity-red opacity-50 blur-[1px]">404</span>
          <span className="absolute top-0 -left-1 -z-10 text-blue-500 opacity-50 blur-[1px]">404</span>
        </h1>

        <div className="flex items-center justify-center gap-3 text-sanity-orange font-mono text-xs uppercase tracking-widest mb-8">
           <span className="w-2 h-2 bg-sanity-orange rounded-full animate-pulse"></span>
           <span>System Malfunction</span>
           <span className="w-2 h-2 bg-sanity-orange rounded-full animate-pulse"></span>
        </div>

        <p className="text-xl text-gray-400 font-light leading-relaxed mb-10">
          The page you are looking for has been moved, removed, renamed, or might never have existed.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="/"
            className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-gray-200 transition-all hover:scale-105"
          >
            <Home size={16} />
            Return Home
          </a>
          
          <button 
            onClick={() => window.history.back()}
            className="w-full sm:w-auto group flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white/5 hover:border-white transition-all"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>
        </div>
      </div>

      {/* Footer / Terminal Output */}
      <div className="absolute bottom-12 left-0 right-0 text-center px-4">
         <div className="inline-block text-left bg-black/50 border border-white/5 rounded p-4 backdrop-blur-sm max-w-md w-full">
            <div className="flex gap-1.5 mb-2">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
            <code className="font-mono text-[10px] text-gray-500 block">
              <span className="text-green-500">➜</span> <span className="text-blue-400">~</span> navigation.locate(target)
              <br/>
              <span className="text-red-500">Error: Target undefined.</span>
              <br/>
              <span className="text-gray-600">   at Router.resolve (main.js:12:34)</span>
            </code>
         </div>
      </div>

    </div>
  );
};