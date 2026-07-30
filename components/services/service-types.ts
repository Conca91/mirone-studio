import type { LucideIcon } from "lucide-react";

export type ServiceCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type ServiceStep = {
  number: string;
  title: string;
  description: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceDetailConfig = {
  breadcrumbLabel: string;

  locationLabel: string;

  titleFirstLine: string;
  titleSecondLine: string;

  heroDescription: string;

  whatsappHref: string;
  emailHref: string;

  heroChecklist: string[];

  introduction: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };

  areas: {
    eyebrow: string;
    title: string;
    description: string;
    cards: ServiceCard[];
  };

  workflow: {
    eyebrow: string;
    title: string;
    description: string;
    steps: ServiceStep[];
  };

  benefits: {
    eyebrow: string;
    title: string;
    description: string;
    items: string[];
  };

  deliverables: {
    eyebrow: string;
    title: string;
    description: string;
    items: string[];
  };

  locations: {
    eyebrow: string;
    title: string;
    description: string;
    items: string[];
  };

  faqs: {
    eyebrow: string;
    title: string;
    items: ServiceFaq[];
  };

  finalCta: {
    eyebrow: string;
    title: string;
    description: string;
  };
};