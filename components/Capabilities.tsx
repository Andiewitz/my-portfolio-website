import React, { useState, useRef, useEffect } from 'react';

const capabilities = [
  {
    id: 'apps',
    title: 'Apps & Full Stack',
    color: 'bg-green-500',
    shadowColor: 'shadow-green-500/50',
    description: 'Building robust, type-safe web applications with Next.js and React. I architect scalable frontends that consume complex APIs, ensuring pixel-perfect implementation of design systems.',
    gridPattern: [6, 7, 8, 11, 13, 16, 17, 18] // A box/ring shape
  },
  {
    id: 'ai',
    title: 'Compute + AI',
    color: 'bg-blue-600',
    shadowColor: 'shadow-blue-600/50',
    description: 'Automate complex workflows with custom agents. I integrate LLMs and vector databases into production systems to power content operations and intelligent search.',
    gridPattern: [12, 7, 11, 13, 17] // Cross/Star
  },
  {
    id: 'infrastructure',
    title: 'Content & Data Lake',
    color: 'bg-sanity-orange',
    shadowColor: 'shadow-sanity-orange/50',
    description: 'Designing resilient schemas and backend services. Whether it’s SQL, NoSQL, or a Headless CMS, I ensure data flows efficiently across your entire distributed architecture.',
    gridPattern: [0, 4, 12, 20, 24, 2, 10, 14, 22] // Corners and center + X
  }
];

export const Capabilities: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  // Handle mouse movement for dynamic tilt effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section 
      id="capabilities"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-sanity-black text-white py-24 md:py-32 relative overflow-hidden border-t border-white/5 scroll-mt-24"
    >
      
      {/* Background radial gradient for subtle depth */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">

          {/* Left Side: Content List */}
          <div className="flex flex-col relative z-20">
            <div className="mb-12">
              <h2 className="text-sanity-orange font-mono text-xs md:text-sm uppercase tracking-[0.2em] mb-4 font-bold">
                Capabilities
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tighter-custom leading-[1.1]">
                Empowering brands <br className="hidden md:block" /> with modern tech.
              </h3>
            </div>

            <div className="flex flex-col relative">
              {/* Vertical line connecting items */}
              <div className="absolute left-[5px] top-4 bottom-4 w-px bg-white/10 z-0"></div>

              {capabilities.map((cap, index) => (
                <div
                  key={cap.id}
                  className="group relative z-10 pl-8 md:pl-10 py-6 cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setActiveTab(index)}
                  onClick={() => setActiveTab(index)} // For mobile tap
                >
                  {/* Indicator Dot */}
                  <div 
                    className={`absolute left-0 top-[2.4rem] w-[11px] h-[11px] border-2 border-sanity-black transition-all duration-300 z-20 
                      ${activeTab === index ? cap.color : 'bg-gray-800'}`}
                  ></div>

                  <h4 className={`text-xs md:text-sm font-bold uppercase tracking-[0.15em] mb-2 transition-colors duration-300 ${activeTab === index ? 'text-white' : 'text-gray-500'}`}>
                    {cap.title}
                  </h4>
                  
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeTab === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-40'}`}>
                    <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-md">
                      {cap.description}
                    </p>
                  </div>
                  
                  {/* Subtle divider for inactive items */}
                  <div className={`absolute bottom-0 left-10 right-0 h-px bg-white/5 transition-opacity duration-300 ${activeTab === index ? 'opacity-0' : 'opacity-100'}`}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Isometric Visualization */}
          {/* Sticky container to keep visualization in view while scrolling content */}
          <div className="sticky top-24 h-[500px] w-full flex items-center justify-center perspective-1000">
             {/* Isometric Plane with dynamic rotation based on mouse position */}
             <div 
               className="relative w-64 h-64 md:w-80 md:h-80 preserve-3d transition-transform duration-100 ease-out"
               style={{ 
                 transform: `rotateX(${60 + mousePos.y * 10}deg) rotateZ(${45 + mousePos.x * 10}deg) translateZ(${mousePos.y * 20}px)`,
               }}
             >
                {/* Base Grid Layer */}
                <div className="absolute inset-0 grid grid-cols-5 grid-rows-5 gap-4">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div 
                      key={`base-${i}`} 
                      className="border border-white/10 bg-white/5 backdrop-blur-sm transition-colors duration-300 hover:bg-white/10"
                    ></div>
                  ))}
                </div>

                {/* Active Highlight Layer */}
                <div className="absolute inset-0 grid grid-cols-5 grid-rows-5 gap-4 pointer-events-none preserve-3d">
                   {Array.from({ length: 25 }).map((_, i) => {
                     const isActive = capabilities[activeTab].gridPattern.includes(i);
                     const isCenter = i === 12 && capabilities[activeTab].id === 'ai';
                     
                     return (
                       <div 
                         key={`active-${i}`}
                         className={`relative transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                           ${isActive ? 'opacity-100' : 'opacity-0'}
                         `}
                       >
                         {/* The Cube Face */}
                         <div 
                            className={`absolute inset-0 ${capabilities[activeTab].color} opacity-90 shadow-lg ${capabilities[activeTab].shadowColor} 
                                      ${isActive ? 'animate-float-slow' : ''}`}
                            style={{
                                animationDelay: `${i * 0.05}s`
                            }}
                         >
                            {/* Top Glint for 3D effect */}
                            <div className="absolute inset-0 bg-white/20"></div>

                            {/* Special pulsing effect for AI center node */}
                            {isActive && isCenter && (
                                <div className="absolute inset-0 animate-ping bg-blue-400 opacity-75"></div>
                            )}
                         </div>
                       </div>
                     );
                   })}
                </div>
             </div>
             
             {/* Labels floating around the grid (Decorative) - Parallaxed opposite to grid */}
             <div 
                className="absolute inset-0 pointer-events-none transition-transform duration-100 ease-out"
                style={{ 
                 transform: `translateX(${mousePos.x * -30}px) translateY(${mousePos.y * -30}px)`,
                }}
             >
                <div className={`absolute top-0 left-0 md:left-10 text-[10px] font-mono text-gray-500 transition-all duration-500 ${activeTab === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  &lt;Component /&gt;
                </div>
                 <div className={`absolute bottom-10 right-10 md:right-20 text-[10px] font-mono text-gray-500 transition-all duration-500 ${activeTab === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  {`{ prompt: "optimized" }`}
                </div>
                <div className={`absolute top-10 right-0 text-[10px] font-mono text-gray-500 transition-all duration-500 ${activeTab === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  SELECT * FROM content
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};