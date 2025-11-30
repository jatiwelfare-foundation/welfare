import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface ValueCard {
  title: string;
  description: string;
  icon: LucideIcon;
}
