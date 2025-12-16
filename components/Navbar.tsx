import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Scroll Spy Logic
      const sections = ['about', 'capabilities', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 120; // Offset for header + buffer

      // Default to empty if at top
      if (window.scrollY < 100) {
        setActiveSection('');
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Capabilities', href: '#capabilities', id: 'capabilities' },
    { name: 'Projects', href: '#projects', id: 'projects' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-transparent border-transparent text-sanity-orange'
          : 'bg-white bg-dot-pattern border-gray-200 text-sanity-black'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo Area */}
          <div className="flex items-center">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                window.history.pushState(null, '', ' ');
              }}
              className="font-serif text-3xl font-bold tracking-tight flex items-center gap-1"
            >
              AndyDev<span className={isScrolled ? "text-sanity-orange" : "text-sanity-red"}>.</span>io
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`text-[11px] uppercase tracking-[0.15em] font-semibold transition-colors border-b-2 ${
                  activeSection === link.id 
                    ? 'border-sanity-orange text-sanity-orange' 
                    : 'border-transparent'
                } ${
                  isScrolled
                    ? 'hover:text-white'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Side CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/assets/resume.pdf"
              download="resume.pdf"
              className={`text-[11px] uppercase tracking-[0.15em] font-bold border px-5 py-2.5 rounded-full transition-colors ${
                isScrolled
                  ? 'border-sanity-orange text-sanity-orange hover:bg-sanity-orange hover:text-black'
                  : 'border-gray-300 text-black hover:border-black'
              }`}
            >
              Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className={`text-[11px] uppercase tracking-[0.15em] font-bold px-5 py-2.5 rounded-full transition-colors flex items-center gap-2 ${
                isScrolled
                  ? 'bg-sanity-orange text-black hover:bg-white'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`${isScrolled ? 'text-sanity-orange' : 'text-gray-900'} focus:outline-none`}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 absolute w-full left-0 top-full">
          <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col items-start">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`block text-sm font-bold uppercase tracking-widest py-2 w-full border-b border-gray-100 ${
                    activeSection === link.id ? 'text-sanity-orange' : 'text-gray-900'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col w-full space-y-3">
               <a
                href="/assets/resume.pdf"
                download="resume.pdf"
                className="w-full text-center text-xs uppercase tracking-widest font-bold border border-gray-900 px-5 py-3 rounded-full"
              >
                View Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="w-full text-center text-xs uppercase tracking-widest font-bold bg-blue-600 text-white px-5 py-3 rounded-full"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};