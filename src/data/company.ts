import type { CompanyInfo, Team, ServiceItem, CaseStudy, ClientList } from '@/types/company'

export const company: CompanyInfo = {
  name: 'toggle',
  taglines: ['YOUR MARKETING AGENCY', 'YOUR DIGITAL GROWTH PARTNER'],
  contact: {
    email: 'marketing@toggle.com',
    phone: '+60 12-568 8681',
    phone_person: 'Viknesh, Sales Director',
    website: 'https://toggle.solutions/',
  },
}

export const team: Team = {
  leadership: [
    {
      name: 'YI YANG',
      title: 'Strategy Director',
      details: [
        '5 years experience in performance marketing & e-commerce growth.',
        'RM60m budget managed.',
        'Handles regional digital strategy (SEA, US, EU, Middle East).',
      ],
      clients:
        'Kualesa, Montigo, Cosmic Cookware, Thousand Miles, UNA Brands, RPG Ventures & Fintech clients.',
    },
    {
      name: 'VIKNESH',
      title: 'Sales Director',
      details: [
        '5 years experience in B2B sales, governance, sustainability, and internal audit consulting.',
      ],
      clients:
        'BNM, Prolintas, Monash, PPB Group, Johor Plantations, Government Banks, Maybank, IOI Group, KLK Group.',
    },
    {
      name: 'JORDAN PINTO',
      title: 'Marketing Director',
      details: [
        '3 years experience in media buying, PM strategy & development, website tracking.',
        'USD 10m managed.',
        'Handles regional expansion efforts (SEA, EU, USA).',
      ],
      clients:
        'RPG Commerce, Brighttail, LTSE Equity, Avontus Software, Communardo, Marvelution, Elements Apps, and Catapult Labs.',
    },
    {
      name: 'ZAID SAAD',
      title: 'Digital Strategist',
      details: [
        '6 years experience in media buying and content strategy.',
        'RM45m managed.',
        'Handles regional expansion efforts (SEA and EU).',
      ],
      clients:
        'RPG Commerce, Mindvalley, Renault, Tokio Marine, Motul, Klook, Scoot Airlines, Changi Airports.',
    },
    {
      name: 'SHAUN BOEY',
      title: 'Performance Lead',
      details: [
        '6 years experience in media buying, ad-tech growth strategy, UI/UX strategy, and branding strategy.',
        'USD 5m managed.',
      ],
      clients: 'RPG Commerce, Antidote Lifestyle, AIA Malaysia, Zeiss, Bridgestone.',
    },
  ],
}

export const services: ServiceItem[] = [
  {
    name: 'PERFORMANCE MARKETING',
    description: 'Maximize your ROI with expert media buying and data-driven campaigns.',
  },
  {
    name: 'EMAIL DIGITAL MARKETING',
    description: 'Boost engagement and retention with personalized CRM solutions.',
  },
  {
    name: 'BRANDING',
    description:
      'Create a powerful brand presence with custom strategies that resonate with your audience.',
  },
  {
    name: 'CONTENT MARKETING',
    description: 'Elevate your brand with compelling content and innovative design.',
  },
  {
    name: 'WEB DEVELOPMENT',
    description: 'Captivate and convert visitors with sleek, user-friendly websites.',
  },
  {
    name: 'REPORTING & ANALYSIS',
    description: 'Transform complex data into actionable insights for continuous improvement.',
  },
  {
    name: 'ONLINE STORE MANAGEMENT',
    description: '',
  },
  {
    name: 'CREATIVE PRODUCTION',
    description: '',
  },
  {
    name: 'CONVERSION OPTIMISATION',
    description: '',
  },
  {
    name: 'SEARCH ENGINE OPTIMISATION',
    description: '',
  },
  {
    name: 'BUSINESS INTELLIGENCE',
    description: '',
  },
  {
    name: 'OUT OF HOME',
    description: '',
  },
]

export const caseStudies: CaseStudy[] = [
  {
    clientLogo: '/images/client-logos/kith&kin.svg',
    image: '/images/case-studies/kith-kin_case-study.png',
    clientName: 'KITH & KIN REALTY',
    metric: '392%',
    metricLabel: 'increase in qualified leads',
    services: ['PERFORMANCE MARKETING', 'CREATIVE PRODUCTION', 'REPORTING & ANALYSIS'],
    challenge:
      'Faced significant challenges in acquiring a consistent volume of high-quality leads, relying only on organic methods and cold-calling.',
    solution:
      'Increase the number of qualified leads via paid advertising while keeping the cost per lead (CPL) at a sustainable level.',
  },
  {
    clientLogo: '/images/client-logos/restoranmahbub.svg',
    clientName: 'MAHBUB - CATERING',
    metric: '+46%',
    metricLabel: 'catering leads',
    timeline: 'Q3 to Q4 2024',
    services: ['CONVERSION OPTIMISATION', 'PERFORMANCE MARKETING'],
    challenge: 'N/A',
    solution:
      'Curated sales messaging flows across Messenger, Instagram, and WhatsApp. Generated 300+ message conversations inquiring about their catering offering.',
  },
  {
    clientLogo: '/images/client-logos/restoranmahbub.svg',
    clientName: 'RESTORAN MAHBUB (Online Delivery)',
    metric: 'RM2.6M+',
    metricLabel: 'in online revenue',
    services: ['PERFORMANCE MARKETING', 'CREATIVE PRODUCTION', 'CONVERSION OPTIMISATION'],
    challenge:
      'The well-established restaurant was performing well offline but struggling to grow its online food delivery business.',
    solution:
      'Ran successful marketing campaigns on Meta and Google to generate revenue online, showing very healthy year-on-year growth from 2021 to 2023.',
  },
  {
    clientLogo: '/images/client-logos/tpl-fresh-meats.svg',
    clientName: 'TPL FRESH MEATS',
    metric: 'RM172K+',
    metricLabel: 'in sales from Meta',
    timeline: 'October 2021 - 2024',
    services: ['PERFORMANCE MARKETING', 'REPORTING & ANALYSIS'],
    challenge:
      'Ran retail stores with good walk-in sales but struggled with generating online sales and reaching new potential customers.',
    solution:
      'Ran ads on Meta and Google using their own social media content. Generated an additional RM172k in revenue at a +20 ROAS.',
  },
]

export const clientList: ClientList = [
  'Restoran Mahbub',
  'Al-Shah Meats',
  'Bruno',
  'Kualesa',
  'TPL Meats',
  'Sri Talamaz',
  'Kith & Kin Realty',
]


