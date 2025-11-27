import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Advantage {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ContactInfo {
  phone: string;
  whatsappLink: string;
  address: string;
  mapUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  image: string;
}