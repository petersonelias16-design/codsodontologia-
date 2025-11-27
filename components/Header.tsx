import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { COLORS, CONTACT_INFO } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Vantagens', href: '#vantagens' },
    { name: 'Localização', href: '#localizacao' },
  ];

  // Since the hero background is light, we use dark/branded colors by default.
  // The 'isScrolled' state mainly handles the background blur/shadow effect.
  const textColorClass = isScrolled ? 'text-gray-700' : 'text-gray-800';
  const logoTextClass = `text-[${COLORS.primaryRed}]`; 

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white/50 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo Section */}
        <a href="#" className="flex items-center gap-3 group relative z-50">
          {/* Custom SVG Logo simulating the Gold Tooth image */}
          <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
             <svg 
               viewBox="0 0 100 100" 
               fill="none" 
               xmlns="http://www.w3.org/2000/svg" 
               className="w-full h-full drop-shadow-sm"
             >
               {/* Main Tooth Outline */}
               <path 
                 d="M25 35 C25 15, 40 10, 50 20 C60 10, 75 15, 75 35 C75 65, 70 70, 65 85 C62 92, 58 85, 50 75 C42 85, 38 92, 35 85 C30 70, 25 65, 25 35 Z" 
                 stroke={COLORS.gold} 
                 strokeWidth="5" 
                 strokeLinecap="round" 
                 strokeLinejoin="round"
                 className="drop-shadow-sm"
               />
               {/* Decorative Swish/Shinyness */}
               <path 
                 d="M32 35 C40 42, 60 42, 68 35" 
                 stroke={COLORS.gold} 
                 strokeWidth="4" 
                 strokeLinecap="round" 
                 strokeLinejoin="round" 
                 opacity="0.8"
               />
             </svg>
          </div>
          
          {/* Logo Text */}
          <div className="flex flex-col justify-center">
            <span className={`text-2xl md:text-3xl font-serif font-bold tracking-wide leading-none ${logoTextClass} transition-colors duration-300`}>
              CODS
            </span>
            <span className={`text-[0.6rem] md:text-[0.7rem] font-sans font-medium tracking-[0.15em] text-[${COLORS.gold}] uppercase mt-0.5 leading-tight`}>
              Consultório Odontológico
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-wide hover:text-[${COLORS.gold}] transition-colors ${textColorClass}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={CONTACT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-medium text-sm transition-all shadow-md hover:shadow-lg bg-[${COLORS.primaryRed}] text-white hover:bg-[${COLORS.darkRed}]`}
          >
            <Phone size={16} />
            <span>Agendar</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden transition-colors relative z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
             <X className="text-gray-800" size={28} />
          ) : (
             <Menu className="text-gray-800" size={28} />
          )}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full bg-white shadow-xl border-b border-gray-100 md:hidden flex flex-col pt-28 pb-8 px-6 space-y-6 animate-fade-in rounded-b-[3rem] z-40">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 text-lg font-medium hover:text-[#910D0D] p-2 border-b border-gray-50 last:border-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
             href={CONTACT_INFO.whatsappLink}
             target="_blank"
             rel="noopener noreferrer"
             className={`block w-full text-center py-4 bg-[${COLORS.primaryRed}] text-white rounded-full font-bold shadow-lg mt-4`}
             onClick={() => setIsMobileMenuOpen(false)}
          >
            Agendar no WhatsApp
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;