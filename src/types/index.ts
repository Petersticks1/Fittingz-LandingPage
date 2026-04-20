export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  initials: string;
  name: string;
  city: string;
  quote: string;
  color: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
