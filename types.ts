import { LucideIcon } from 'lucide-react';
import React from 'react';

export interface ServiceDetailContent {
  heroImage: string;
  longDescription: string;
  benefits: { title: string; desc: string }[];
  processSteps: { title: string; desc: string }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ElementType;
  features: string[];
  detailContent?: ServiceDetailContent;
}

export interface ProjectStat {
  label: string;
  value: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  category: 'Website' | 'Mobile App' | 'Game';
  image: string;
  client: string;
  tech: string[];
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
}

// Auth & DB Types
export interface User {
  id: number;
  phone: string;
  name: string;
  role: 'user' | 'admin';
}

export interface Order {
  id: number;
  userId: number;
  userName?: string; // For Admin view
  userPhone?: string; // For Admin view
  planName: string;
  price: string;
  status: 'Pending' | 'In Progress' | 'Completed';
  createdAt: string;
}

export interface Application {
  id: number;
  name: string;
  email: string;
  phone: string;
  position: string;
  cvLink: string;
  message: string;
  status: 'New' | 'Contacted' | 'Rejected';
  createdAt: string;
}

export interface SiteSettings {
  logoUrl: string;
  hotline: string;
  email: string;
  address: string;
}