export type Page = 'home' | 'about' | 'services' | 'industries' | 'security' | 'blog' | 'contact' | 'faq';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
  details: string[];
  features: string[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  items: {
    title: string;
    description: string;
  }[];
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  challenges: string[];
  solutions: string[];
  benefits: string[];
}

export interface SoftwareExpertiseItem {
  name: string;
  category: string;
  badgeUrl?: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: 'Tax' | 'Accounting' | 'Compliance' | 'Updates' | 'Outsourcing';
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  author: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  country: 'USA' | 'UK' | 'Canada' | 'Australia' | 'UAE';
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  qualifications: string[];
  linkedinUrl?: string;
}
