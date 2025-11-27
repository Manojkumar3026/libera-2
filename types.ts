import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProductFeature {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  quote: string;
  role?: string;
}

export interface ComparisonPoint {
  feature: string;
  libera: boolean | string;
  medication: boolean | string;
  heat: boolean | string;
}