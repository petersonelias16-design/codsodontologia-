import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import { SERVICES, ADVANTAGES, CONTACT_INFO, COLORS, TESTIMONIALS } from './constants';
import { ArrowRight, Check, MapPin, Star, Quote, ChevronLeft, ChevronRight, Clock } from 'lucide-react';

const SectionTitle = ({ title, subtitle, light = false, align = 'center' }: { title: string; subtitle?: string; light?: boolean; align?: 'left' | 'center' }) => (
  <div className={`mb-16 max-w-3xl px-4 ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}>
    <h2 className={`text-3xl md:text-5xl font-serif font-bold mb-6 ${light ? 'text-white' : 'text-gray-900'} leading-tight`}>
      {title}
    </h2>
    <div className={`h-1 w-20 bg-[${COLORS.gold}] rounded-full mb-6 ${align === 'center' ? 'mx-auto' : ''}`}></div>
    {subtitle && (
      <p className={`text-lg md:text-xl font-light leading-relaxed ${light ? 'text-white/90' : 'text-gray-600'}`}>
        {subtitle}
      </p>
    )}
  </div>
);

const App: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-scroll for testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <div className="font-sans text-gray-700 bg-white overflow-x-hidden selection:bg-[#910D0D] selection:text-white">
      <Header />

      {/* 1. HERO SECTION */}
      {/* scroll-mt-20 ensures the section title isn't hidden by the header when linked */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden scroll-mt-20">
        {/* Abstract organic background shape */}
        <div className="absolute top-0 right-0 w-[60%] h-full bg-[#f8f5f2] rounded-bl-[10rem] -z-10 hidden md:block"></div>
        
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative z-10">
            <div className={`inline-block px-4 py-1 mb-6 rounded-full bg-[${COLORS.gold}]/10 text-[${COLORS.gold}] font-medium text-sm tracking-wide`}>
              Excelência em Odontologia
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 leading-[1.1] mb-6">
              CODS <br/>
              <span className={`text-[${COLORS.primaryRed}]`}>Consultório Odontológico</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 font-light max-w-lg leading-relaxed">
              Cuidando do seu sorriso com excelência, tecnologia e atendimento humanizado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={CONTACT_INFO.whatsappLink} target="_blank" className="shadow-red-900/20">
                Agendar consulta no WhatsApp <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button href="#servicos" variant="outline">
                Ver serviços
              </Button>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
             <div className="relative z-10 rounded-tl-[8rem] rounded-br-[6rem] overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-700">
               <img 
                 src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
                 alt="Dentista sorrindo com paciente" 
                 className="w-full h-auto object-cover"
               />
               <div className={`absolute inset-0 bg-gradient-to-t from-[${COLORS.primaryRed}]/50 to-transparent mix-blend-multiply opacity-60`}></div>
             </div>
             {/* Decorative element */}
             <div className={`absolute -bottom-10 -left-10 w-40 h-40 bg-[${COLORS.gold}]/20 rounded-full blur-2xl`}></div>
          </div>
        </div>
      </section>

      {/* 2. SECTION: SOBRE O CODS */}
      <section id="sobre" className="py-24 bg-white relative scroll-mt-28">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full md:w-1/2 relative">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800" 
                  alt="Tratamento humanizado" 
                  className="w-full h-auto rounded-tr-[5rem] rounded-bl-[5rem] shadow-xl z-10 relative"
                />
                <div className={`absolute -bottom-6 -right-6 w-full h-full border-2 border-[${COLORS.gold}] rounded-tr-[5rem] rounded-bl-[5rem] -z-0`}></div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                Seu sorriso merece o <span className={`text-[${COLORS.primaryRed}] underline decoration-[${COLORS.gold}] decoration-4 underline-offset-4`}>melhor cuidado</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
                <p>
                  No CODS Consultório Odontológico, unimos tecnologia avançada, atendimento acolhedor e profissionais altamente qualificados para transformar o seu sorriso com segurança e precisão.
                </p>
                <p>
                  Atendemos adultos, famílias e crianças com dedicação e respeito, sempre priorizando conforto, qualidade e resultados duradouros.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                {['Adultos', 'Crianças', 'Famílias', 'Prevenção'].map((tag) => (
                  <div key={tag} className="flex items-center gap-2 text-gray-800 font-medium">
                    <div className={`w-2 h-2 rounded-full bg-[${COLORS.gold}]`}></div>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION: NOSSOS SERVIÇOS */}
      <section id="servicos" className="py-24 bg-[#faf9f6] scroll-mt-28">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle 
            title="Conheça os nossos serviços" 
            subtitle="Oferecemos uma gama completa de tratamentos odontológicos personalizados para atender às suas necessidades específicas."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div 
                key={service.id} 
                className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-[#f0e6d2] relative overflow-hidden cursor-default"
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-[${COLORS.gold}]/10 rounded-bl-[4rem] transition-all group-hover:scale-110`}></div>
                
                <div className={`w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-6 group-hover:bg-[${COLORS.primaryRed}] transition-colors duration-300 relative z-10`}>
                  <service.icon size={26} className={`text-[${COLORS.primaryRed}] group-hover:text-white transition-colors duration-300`} />
                </div>
                
                <h3 className="text-xl font-serif font-bold mb-3 text-gray-900 group-hover:text-[${COLORS.primaryRed}] transition-colors">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SECTION: VANTAGENS CODS (Red Block) */}
      <section id="vantagens" className={`py-28 bg-[${COLORS.primaryRed}] text-white relative overflow-hidden rounded-[0rem] md:rounded-[3rem] mx-0 md:mx-4 scroll-mt-28`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <SectionTitle 
            title="Vantagens de fazer o seu tratamento no CODS" 
            light={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ADVANTAGES.map((adv) => (
              <div key={adv.id} className="bg-white/5 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all duration-300 text-center md:text-left">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 text-[${COLORS.gold}] mb-6`}>
                  <adv.icon size={32} />
                </div>
                <h3 className="text-xl font-serif font-bold mb-4 text-white">{adv.title}</h3>
                <p className="text-red-50/80 leading-relaxed">
                  {adv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SECTION: DEPOIMENTOS (CAROUSEL) */}
      <section id="depoimentos" className="py-24 bg-white relative overflow-hidden scroll-mt-28">
        {/* Organic background accent */}
        <div className={`absolute top-1/2 left-0 w-64 h-64 bg-[${COLORS.gold}]/5 rounded-full blur-3xl -translate-y-1/2`}></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
           <SectionTitle 
             title="O que dizem nossos pacientes" 
             subtitle="A satisfação e o sorriso dos nossos pacientes são a nossa maior motivação."
           />
           
           <div className="max-w-5xl mx-auto relative group">
             <div className="overflow-hidden">
               <div 
                 className="flex transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)"
                 style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
               >
                 {TESTIMONIALS.map((testimonial) => (
                   <div key={testimonial.id} className="w-full flex-shrink-0 px-4 md:px-12">
                     <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        {/* Image */}
                        <div className="flex-shrink-0">
                           <div className={`w-32 h-32 md:w-48 md:h-48 rounded-full md:rounded-[2rem] overflow-hidden border-4 border-white shadow-xl relative`}>
                             <img 
                               src={testimonial.image} 
                               alt={testimonial.name} 
                               className="w-full h-full object-cover"
                             />
                           </div>
                        </div>

                        {/* Content */}
                        <div className="text-center md:text-left flex-1">
                          <div className="flex justify-center md:justify-start gap-1 mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} size={20} className={`fill-[${COLORS.gold}] text-[${COLORS.gold}]`} />
                            ))}
                          </div>
                          <Quote className={`text-[${COLORS.primaryRed}]/10 mb-4 mx-auto md:mx-0`} size={40} />
                          <p className="text-gray-700 text-lg md:text-2xl font-light italic mb-6 leading-relaxed">
                            "{testimonial.text}"
                          </p>
                          <div>
                            <h4 className="text-xl font-bold font-serif text-gray-900">{testimonial.name}</h4>
                            <span className="text-sm text-gray-400 uppercase tracking-wider">Paciente CODS</span>
                          </div>
                        </div>
                     </div>
                   </div>
                 ))}
               </div>
             </div>

             {/* Navigation */}
             <div className="flex justify-center md:justify-end gap-4 mt-10 md:pr-12">
                <button 
                  onClick={prevTestimonial}
                  className={`p-4 rounded-full border border-gray-200 text-gray-400 hover:text-[${COLORS.primaryRed}] hover:border-[${COLORS.primaryRed}] transition-all cursor-pointer`}
                  aria-label="Anterior"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className={`p-4 rounded-full border border-gray-200 text-gray-400 hover:text-[${COLORS.primaryRed}] hover:border-[${COLORS.primaryRed}] transition-all cursor-pointer`}
                  aria-label="Próximo"
                >
                  <ChevronRight size={24} />
                </button>
             </div>
           </div>
        </div>
      </section>

      {/* 6. SECTION: AGENDAMENTO (CTA) */}
      <section className="py-12 px-4 md:px-8">
        <div className="container mx-auto">
          <div className={`bg-gradient-to-br from-gray-900 to-[#1a1a1a] rounded-[3rem] overflow-hidden shadow-2xl relative`}>
            {/* Abstract shapes */}
            <div className={`absolute top-0 right-0 w-96 h-96 bg-[${COLORS.primaryRed}]/20 rounded-full blur-[100px]`}></div>
            <div className={`absolute bottom-0 left-0 w-64 h-64 bg-[${COLORS.gold}]/10 rounded-full blur-[80px]`}></div>

            <div className="flex flex-col md:flex-row items-center relative z-10 p-8 md:p-16 gap-12">
              <div className="w-full md:w-2/3">
                 <h2 className={`text-3xl md:text-5xl font-serif font-bold mb-6 text-white`}>Agende sua consulta</h2>
                 <p className="text-gray-300 mb-8 text-lg font-light max-w-xl">
                   Estamos prontos para cuidar do seu sorriso com excelência. Fale conosco e marque sua avaliação hoje mesmo.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6">
                   <Button 
                    href={CONTACT_INFO.whatsappLink} 
                    target="_blank"
                    variant="secondary" // Using the #690301 dark red variant
                    className="shadow-lg shadow-red-900/50"
                   >
                     Agendar agora (WhatsApp)
                   </Button>
                   <div className="flex items-center gap-3 text-white/80">
                     <Clock className={`text-[${COLORS.gold}]`} />
                     <div className="text-sm">
                       <div>Seg - Sex: 08:00 - 18:00</div>
                       <div>Sáb: 08:00 - 12:00</div>
                     </div>
                   </div>
                 </div>
              </div>
              <div className="w-full md:w-1/3 flex justify-center">
                 <div className={`w-40 h-40 md:w-56 md:h-56 bg-white/5 rounded-full flex items-center justify-center border border-white/10 backdrop-blur-md`}>
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://wa.me/5511916427964" alt="QR Code WhatsApp" className="w-2/3 h-2/3 opacity-90 mix-blend-screen" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION: LOCALIZAÇÃO */}
      <section id="localizacao" className="py-24 bg-white scroll-mt-28">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/3">
               <div className="sticky top-24">
                 <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Onde estamos</h2>
                 <div className={`h-1 w-16 bg-[${COLORS.gold}] rounded-full mb-8`}></div>
                 
                 <div className="space-y-8">
                   <div className="flex items-start gap-4 group">
                      <div className={`p-4 bg-red-50 rounded-2xl text-[${COLORS.primaryRed}] group-hover:bg-[${COLORS.primaryRed}] group-hover:text-white transition-colors duration-300`}>
                         <MapPin size={28} />
                      </div>
                      <div>
                          <h4 className="font-bold text-gray-900 mb-2 text-lg">Endereço</h4>
                          <p className="text-gray-600 leading-relaxed">
                              {CONTACT_INFO.address}
                          </p>
                      </div>
                   </div>
                   
                   <div className="p-8 bg-[#faf9f6] rounded-[2rem] border border-gray-100">
                      <p className="text-gray-500 italic">
                        "Fácil acesso, estacionamento próximo e ambiente seguro para toda a família."
                      </p>
                   </div>
                 </div>
               </div>
            </div>
            
            <div className="w-full md:w-2/3">
               <div className="h-[500px] w-full bg-gray-100 rounded-[3rem] overflow-hidden shadow-inner border border-gray-100 relative z-0">
                  <iframe 
                      src={CONTACT_INFO.mapUrl} 
                      width="100%" 
                      height="100%" 
                      style={{border: 0}} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Localização CODS"
                      className="grayscale hover:grayscale-0 transition-all duration-500"
                  ></iframe>
               </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;