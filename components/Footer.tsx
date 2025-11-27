import React from 'react';
import { MapPin, Phone, Instagram, Facebook } from 'lucide-react';
import { COLORS, CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  const handleSocialClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Optional: Alert or redirect to WhatsApp if social links aren't ready
    // window.open(CONTACT_INFO.whatsappLink, '_blank');
  };

  return (
    <footer className={`bg-[${COLORS.darkRed}] text-white pt-20 pb-10 rounded-t-[3rem] mt-12`}>
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-16 mb-16 border-b border-white/10 pb-12">
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-start gap-3">
             {/* Logo Icon White/Gold Variant */}
             <svg 
               width="40" 
               height="40"
               viewBox="0 0 100 100" 
               fill="none" 
               xmlns="http://www.w3.org/2000/svg" 
               className="flex-shrink-0"
             >
               <path 
                 d="M25 35 C25 15, 40 10, 50 20 C60 10, 75 15, 75 35 C75 65, 70 70, 65 85 C62 92, 58 85, 50 75 C42 85, 38 92, 35 85 C30 70, 25 65, 25 35 Z" 
                 stroke={COLORS.gold} 
                 strokeWidth="5" 
                 strokeLinecap="round" 
                 strokeLinejoin="round"
               />
               <path 
                 d="M32 35 C40 42, 60 42, 68 35" 
                 stroke={COLORS.gold} 
                 strokeWidth="4" 
                 strokeLinecap="round" 
                 strokeLinejoin="round" 
                 opacity="0.8"
               />
             </svg>
             <div>
                <h2 className="text-3xl font-serif font-bold leading-none text-white">CODS</h2>
                <p className={`text-[${COLORS.gold}] text-[0.65rem] uppercase tracking-widest mt-1 font-medium`}>Consultório Odontológico</p>
             </div>
          </div>
          <p className="text-white/80 text-base leading-relaxed max-w-xs">
            Cuidando do seu sorriso com excelência, tecnologia e atendimento humanizado.
          </p>
          <div className="flex space-x-4 pt-2">
            <a href="#" onClick={handleSocialClick} className="bg-white/10 p-3 rounded-full hover:bg-[${COLORS.gold}] hover:text-white transition-all transform hover:scale-110" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" onClick={handleSocialClick} className="bg-white/10 p-3 rounded-full hover:bg-[${COLORS.gold}] hover:text-white transition-all transform hover:scale-110" aria-label="Facebook">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h3 className={`text-[${COLORS.gold}] font-serif font-bold text-xl`}>Contato</h3>
          <ul className="space-y-5">
            <li>
              <a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group hover:opacity-100">
                <div className={`p-2 bg-white/5 rounded-full text-[${COLORS.gold}] group-hover:bg-[${COLORS.gold}] group-hover:text-white transition-colors`}>
                  <Phone size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-white/90">WhatsApp</span>
                  <span className="text-white/70 group-hover:text-white transition-colors">
                    {CONTACT_INFO.phone}
                  </span>
                </div>
              </a>
            </li>
            <li className="flex items-start gap-4 group">
              <div className={`p-2 bg-white/5 rounded-full text-[${COLORS.gold}] group-hover:bg-[${COLORS.gold}] group-hover:text-white transition-colors`}>
                <MapPin size={20} />
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-white/90">Localização</span>
                <span className="text-white/70 text-sm leading-relaxed">{CONTACT_INFO.address}</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Quick Links / Info */}
        <div className="space-y-6">
          <h3 className={`text-[${COLORS.gold}] font-serif font-bold text-xl`}>Informações</h3>
          <p className="text-white/80 leading-relaxed">
            Atendimento especializado para adultos, famílias e crianças em um ambiente acolhedor.
          </p>
          <a 
            href="https://www.google.com/business/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/30 px-6 py-3 rounded-full text-sm font-medium hover:bg-white hover:text-[${COLORS.darkRed}] transition-all duration-300"
          >
            Google Meu Negócio
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 text-center text-white/40 text-sm font-light">
        <p>&copy; {new Date().getFullYear()} CODS Consultório Odontológico. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;