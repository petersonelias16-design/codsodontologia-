import { Smile, BriefcaseMedical, Stethoscope, Syringe, HeartPulse, UserCheck, Star, ShieldCheck } from 'lucide-react';
import { Service, Advantage, ContactInfo, Testimonial } from './types';

export const COLORS = {
  primaryRed: '#910D0D',
  darkRed: '#690301',
  gold: '#BD9C55',
  white: '#FFFFFF',
  offWhite: '#F9FAFB',
  textGray: '#374151',
};

export const CONTACT_INFO: ContactInfo = {
  phone: '(11) 91642-7964',
  whatsappLink: 'https://wa.me/5511916427964?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20no%20CODS.',
  address: 'V. Somos Todos Iguais, 724 - Jardim da Conquista, São Paulo - SP, 08343-000',
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.7538562768045!2d-46.4678125!3d-23.6131875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce68987b0a7b4b%3A0x6b8b8b8b8b8b8b8b!2sR.%20Vl.%20Somos%20Todos%20Iguais%2C%20724%20-%20Jardim%20da%20Conquista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2008343-000!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr', 
  // Note: The map URL above is a constructed approximation for the embedded view based on the address provided.
};

export const SERVICES: Service[] = [
  {
    id: 'implantes',
    title: 'Implantes',
    description: 'Recupere a função e estética do seu sorriso com implantes dentários de alta qualidade e durabilidade.',
    icon: Syringe, 
  },
  {
    id: 'protese',
    title: 'Prótese',
    description: 'Próteses fixas e removíveis personalizadas para restaurar a sua mastigação e confiança.',
    icon: Smile,
  },
  {
    id: 'ortodontia',
    title: 'Ortodontia',
    description: 'Alinhamento dentário com aparelhos convencionais ou estéticos para um sorriso harmonioso.',
    icon: Star,
  },
  {
    id: 'cirurgias',
    title: 'Cirurgias',
    description: 'Procedimentos cirúrgicos realizados com segurança e precisão pela nossa equipe qualificada.',
    icon: Stethoscope,
  },
  {
    id: 'clinica-geral',
    title: 'Clínica Geral',
    description: 'Prevenção, diagnóstico e tratamento completo para manter a saúde da sua boca em dia.',
    icon: BriefcaseMedical,
  },
];

export const ADVANTAGES: Advantage[] = [
  {
    id: 'atendimento',
    title: 'Atendimento personalizado',
    description: 'Cada sorriso é único e merece um plano de tratamento individualizado. Ouvimos as suas necessidades e criamos soluções à sua medida.',
    icon: UserCheck,
  },
  {
    id: 'equipe',
    title: 'Equipe especializada',
    description: 'Profissionais constantemente atualizados e qualificados, comprometidos em oferecer os melhores resultados com as técnicas mais modernas.',
    icon: HeartPulse,
  },
  {
    id: 'ambiente',
    title: 'Ambiente moderno e acolhedor',
    description: 'Instalações pensadas para proporcionar conforto, tranquilidade e segurança durante todo o seu tratamento.',
    icon: ShieldCheck,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Carla Mendes',
    text: 'Profissionais excelentes! Fiz meu tratamento de canal e restauração, não senti dor alguma. O consultório é lindo e super limpo.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: '2',
    name: 'Ricardo Oliveira',
    text: 'A melhor clínica da região. Coloquei meus implantes com eles e o resultado ficou super natural. Atendimento nota 10!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: '3',
    name: 'Fernanda Souza',
    text: 'Lugar maravilhoso! Levo meus filhos e eles adoram as dentistas. Muito pacientes e atenciosas. Recomendo a todos.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];