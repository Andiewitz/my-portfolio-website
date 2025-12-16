import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="bg-sanity-black text-white border-t border-white/10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[600px]">
          
          {/* Label Column */}
          <div className="md:col-span-3 py-12 md:py-24 border-b md:border-b-0 md:border-r border-white/10">
            <div className="sticky top-32">
              <h2 className="text-sanity-orange font-mono text-xs uppercase tracking-[0.2em] font-bold mb-4">
                Profile
              </h2>
              <div className="h-1 w-12 bg-white/20"></div>
            </div>
          </div>

          {/* Content Column */}
          <div className="md:col-span-9">
            {/* Intro Block */}
            <div className="p-8 md:p-16 border-b border-white/10">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter-custom mb-8">
                Andrei G.
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-3xl">
                A pragmatic software engineer focused on composable architectures. I bridge the gap between complex backend logic and fluid user interfaces.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Experience Block */}
              <div className="p-8 md:p-16 border-b md:border-b-0 md:border-r border-white/10 group hover:bg-white/5 transition-colors">
                <span className="block font-mono text-xs text-gray-500 mb-4 uppercase tracking-widest">Experience</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl md:text-7xl font-bold text-white group-hover:text-sanity-orange transition-colors">1+</span>
                  <span className="text-xl text-gray-400">Years</span>
                </div>
                <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                  Delivering production-grade code in fast-paced environments.
                </p>
              </div>

              {/* Focus Block */}
              <div className="p-8 md:p-16 border-b md:border-b-0 border-white/10 group hover:bg-white/5 transition-colors">
                 <span className="block font-mono text-xs text-gray-500 mb-4 uppercase tracking-widest">Focus</span>
                 <div className="flex items-baseline gap-2">
                  <span className="text-3xl md:text-4xl font-bold text-white">Full Stack</span>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-gray-400 font-mono">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-sanity-red rounded-full"></span>
                    Systems Design
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-sanity-orange rounded-full"></span>
                    API Development
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    UI Engineering
                  </li>
                </ul>
              </div>
            </div>

            {/* Quote / Footer of section */}
            <div className="p-8 md:p-16 bg-white/5">
               <p className="font-mono text-xs md:text-sm text-gray-400">
                 "Code is read much more often than it is written."
               </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};