import React, { useMemo } from 'react';
import { Terminal, Copy, ArrowRight, Play } from 'lucide-react';
import { LogoStrip } from './LogoStrip';

export const Hero: React.FC = () => {
  // Configuration for the grid
  const gridSize = 48; // Size of each grid cell in pixels
  
  // Generate random filled squares
  // We use useMemo to ensure the pattern is stable across re-renders
  const filledSquares = useMemo(() => {
    // Generate a deterministically random set of squares for the viewport
    // Assuming a max layout size of roughly 1920x1080, we want scattered density
    const squares = [];
    const rows = 30;
    const cols = 60;
    
    for (let i = 0; i < 60; i++) {
      squares.push({
        id: i,
        // Randomly position within a reasonable grid range
        row: Math.floor(Math.random() * rows),
        col: Math.floor(Math.random() * cols),
        // Random opacity for depth
        opacity: Math.random() * 0.1 + 0.05,
      });
    }
    return squares;
  }, []);

  const handleHeroScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-sanity-black text-white overflow-hidden pt-20">
      
      {/* --- GRID BACKGROUND START --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Base Grid Lines - using linear gradient for performance */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`,
            backgroundSize: `${gridSize}px ${gridSize}px`,
            maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', // Fade out at bottom
            WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
          }}
        ></div>

        {/* Randomly Filled Grey Cells */}
        <div className="absolute inset-0 overflow-hidden">
             {filledSquares.map((sq) => (
              <div
                key={sq.id}
                className="absolute bg-white"
                style={{
                  top: sq.row * gridSize,
                  left: sq.col * gridSize,
                  width: gridSize - 1, // Subtract 1px to fit inside lines
                  height: gridSize - 1,
                  opacity: sq.opacity,
                }}
              />
            ))}
        </div>
        
        {/* Vignette / Fade overlay to blend edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sanity-black/10 to-sanity-black"></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-sanity-black opacity-60"></div>
      </div>
      {/* --- GRID BACKGROUND END --- */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-24 pb-32">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Text Content */}
          <div className="lg:col-span-12 flex flex-col items-start lg:items-center text-left lg:text-center max-w-5xl mx-auto">
            
            {/* Super Header / Tag */}
            <h2 className="text-sanity-orange font-mono text-xs md:text-sm uppercase tracking-[0.2em] mb-6 font-bold">
              Senior Software Engineer
            </h2>
            
            {/* Hero Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] leading-[0.95] font-bold tracking-tighter-custom mb-8 font-sans">
              Building Scalable <br className="hidden lg:block"/> Software Systems
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mb-10 leading-relaxed">
              Specializing in distributed systems, modern frontend architectures, and high-performance backend services. I transform complex requirements into elegant, maintainable code.
            </p>

            {/* CTA Container */}
            <div className="flex flex-col md:flex-row items-center gap-6 w-full lg:w-auto">
              
              {/* Primary Buttons */}
              <div className="flex items-center gap-4 w-full md:w-auto">
                <a 
                  href="#projects" 
                  onClick={(e) => handleHeroScroll(e, 'projects')}
                  className="group relative bg-sanity-red text-white font-bold uppercase tracking-widest text-xs py-4 px-8 rounded-full overflow-hidden transition-all hover:bg-red-600 w-full md:w-auto text-center inline-block"
                >
                   <span className="relative z-10 flex items-center justify-center gap-2">
                    View Work <ArrowRight size={16} />
                   </span>
                </a>
                
                <a 
                  href="#contact" 
                  onClick={(e) => handleHeroScroll(e, 'contact')}
                  className="group border border-white/20 hover:border-white text-white font-bold uppercase tracking-widest text-xs py-4 px-8 rounded-full transition-all w-full md:w-auto text-center flex items-center justify-center gap-2 inline-block"
                >
                  <Play size={14} fill="currentColor" />
                  Contact Me
                </a>
              </div>

              {/* Code Snippet Visual */}
              <div className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-full px-1 pl-4 py-1 backdrop-blur-sm">
                <span className="font-mono text-sm text-gray-300 mr-3">
                  <span className="text-sanity-orange">git</span> commit -m "feat: ship it"
                </span>
                <button className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white" aria-label="Copy command">
                  <Copy size={16} />
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Sticky Logo Strip at Bottom */}
      <div className="w-full border-t border-white/10 bg-sanity-black/95 backdrop-blur-md">
        <LogoStrip />
      </div>
    </div>
  );
};