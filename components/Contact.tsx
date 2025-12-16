import React from 'react';
import { Mail, Phone, Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-sanity-black text-white border-t border-white/10 py-24 md:py-32 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">

          {/* Left Column: Info */}
          <div>
            <h2 className="text-sanity-orange font-mono text-xs md:text-sm uppercase tracking-[0.2em] mb-4 font-bold">
              Contact
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter-custom mb-8 leading-tight">
              Ready to make an <br />
              <span className="text-gray-500">impact.</span>
            </h3>
            <p className="text-xl text-gray-400 font-light mb-12 max-w-lg leading-relaxed">
              I am actively seeking new full-time opportunities in software engineering. If you are looking for a dedicated engineer to join your team, I'd love to chat.
            </p>

            <div className="space-y-8">
              <a href="mailto:gracefulandrei@gmail.com" className="flex items-center gap-4 group">
                <div className="p-3 border border-white/10 rounded-full group-hover:border-sanity-orange transition-colors bg-white/5">
                  <Mail size={20} className="text-white group-hover:text-sanity-orange transition-colors" />
                </div>
                <div>
                   <span className="block text-xs text-gray-500 font-mono uppercase tracking-wider mb-1">Email Me</span>
                   <span className="text-lg md:text-xl font-bold group-hover:text-sanity-orange transition-colors">gracefulandrei@gmail.com</span>
                </div>
              </a>

               <div className="flex items-center gap-4">
                <div className="p-3 border border-white/10 rounded-full bg-white/5">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                   <span className="block text-xs text-gray-500 font-mono uppercase tracking-wider mb-1">Phone</span>
                   <span className="text-lg md:text-xl font-bold">(+63) 0951 852 2737</span>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-16 border-t border-white/10">
               <span className="block text-xs text-gray-500 font-mono uppercase tracking-wider mb-6">Socials</span>
               <div className="flex gap-4">
                 <SocialLink href="https://github.com/andrei-g-dev" icon={<Github size={20} />} label="GitHub" />
                 <SocialLink href="https://linkedin.com/in/andrei-g" icon={<Linkedin size={20} />} label="LinkedIn" />
                 <SocialLink href="https://twitter.com/andrei_dev" icon={<Twitter size={20} />} label="Twitter" />
               </div>
            </div>
          </div>

          {/* Right Column: Mailto CTA (Replaces Form) */}
          <div className="bg-white/5 border border-white/10 p-8 md:p-12 relative overflow-hidden flex flex-col justify-center">
             {/* Decorative Corner */}
             <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/10 to-transparent"></div>
             
             <div className="relative z-10 space-y-8">
                <div>
                  <h4 className="text-2xl font-bold mb-4">Direct Inquiry</h4>
                  <p className="text-gray-400 font-light leading-relaxed">
                    Prefer to use your own email client? Click the button below to send me a direct message regarding open roles or opportunities.
                  </p>
                </div>

                <a 
                  href="mailto:gracefulandrei@gmail.com" 
                  className="w-full bg-sanity-red hover:bg-red-600 text-white font-bold uppercase tracking-widest text-xs py-5 transition-colors flex items-center justify-center gap-2 group"
                >
                  Send Email
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>

                <p className="text-xs text-gray-500 font-mono text-center">
                  Replies typically within 24 hours.
                </p>
             </div>
          </div>

        </div>
        
        {/* Footer Copyright */}
        <div className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-gray-500 text-sm">
             © {new Date().getFullYear()} Andrei G. All rights reserved.
           </p>
           <p className="text-gray-600 text-xs font-mono">
             Designed in the style of Sanity.io
           </p>
        </div>
      </div>
    </section>
  );
};

const SocialLink: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 flex items-center justify-center border border-white/10 text-gray-400 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all rounded-full"
    aria-label={label}
  >
    {icon}
  </a>
);