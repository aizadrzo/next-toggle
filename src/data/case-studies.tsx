import React from "react";

export interface CaseStudy {
  slug: string;
  title: string;
  excerpt: string;
  link: string;
  client: {
    name: string;
    logo: string;
    industry: string;
    location: string;
    about: string;
    website: string;
  };
  heroImage: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "unitar",
    title: "From Moonshot to Milestone",
    excerpt:
      "UNITAR needed to scale student acquisition in a competitive market. We helped them increase lead volume while significantly reducing Cost Per Lead (CPL).",
    heroImage: "/images/client-works/unitar-ads-1.jpg",
    link: "/work/unitar",
    client: {
      name: "UNITAR Education Sdn. Bhd.",
      logo: "/images/client-logos/unitar-logo.png",
      industry: "Education",
      location: "Petaling Jaya, Malaysia",
      about:
        "UNITAR International University is one of the first private universities in Malaysia, offering a wide range of academic programs.",
      website: "https://unitar.my/",
    },
  },
  {
    slug: "kith-and-kin",
    title: "Unlocking New Growth Channels",
    excerpt:
      "Kith & Kin faced challenges with inconsistent leads from organic methods. We implemented a scalable paid advertising strategy to generate high-quality leads.",
    heroImage: "/images/client-works/kith-and-kin-ads-1.png",
    link: "/work/kith-and-kin",
    client: {
      name: "Kith & Kin Realty Sdn. Bhd.",
      logo: "/images/client-logos/kith-kin-logo.png",
      industry: "Real Estate",
      location: "Kuala Lumpur, Malaysia",
      about:
        "Kith & Kin is a boutique real estate agency focusing on high-end properties and personalized services.",
      website: "https://kithandkinrealty.com/",
    },
  },
  {
    slug: "bruno",
    title: "Serving Up Style",
    excerpt:
      "BRUNO is a Japanese lifestyle brand that seamlessly blends form and functionality, and we are proud to have worked with them to elevate their e-commerce presence. Known for their stunning features and signature retro-inspired kitchen appliances, BRUNO’s collection is a must-have for those looking to add a touch of vintage elegance to their homes.",
    heroImage: "/images/client-works/bruno-ads-1.jpg",
    link: "/work/bruno",
    client: {
      name: "Bruno Malaysia",
      logo: "/images/client-logos/bruno-logo.png",
      industry: "Lifestyle",
      location: "Petaling Jaya, Malaysia",
      about:
        "UNITAR International University is one of the first private universities in Malaysia, offering a wide range of academic programs.",
      website: "https://bruno.my/",
    },
  },
  {
    slug: "kualesa",
    title: "Stitching a Movement",
    excerpt:
      "As an innovative Malaysian apparel brand committed to sustainability and ethical practices, Kualesa Co. is a beacon of style and conscience in the apparel industry. Their dedication to using eco-conscious materials, creates not just clothing but a movement towards responsible fashion choices. Kualesa Co. embodies the perfect blend of chic design and mindful consumption, inviting customers to make a statement while making a positive impact on the planet.",
    heroImage: "/images/client-works/kualesa-ads-1.png",
    link: "/work/kualesa",
    client: {
      name: "Kualesa Apparel Sdn Bhd.",
      logo: "/images/client-logos/kualesa-logo.png",
      industry: "Apparel",
      location: "Petaling Jaya, Malaysia",
      about:
        "UNITAR International University is one of the first private universities in Malaysia, offering a wide range of academic programs.",
      website: "https://kualesa.co/",
    },
  },
  // {
  //   slug: "edukid",
  //   title: "Leading Children’s Book Publisher and Distributor in Malaysia",
  //   excerpt:
  //     "Edukid Books is the leading publisher and distributor dedicated to nurturing young minds through captivating and educational literature. Their diverse collection of books sparks imagination, curiosity, and a love for learning in children of all ages. With engaging storytelling and enriching content, Edukid Books fosters a lifelong passion for reading and knowledge acquisition, empowering the next generation of thinkers and dreamers.",
  //   heroImage: "/images/client-works/unitar-ads-1.jpg",
  //   link: "/work/edukid",
  //   client: {
  //     name: "Edukid Distributors Sdn Bhd",
  //     logo: "/images/client-logos/unitar-logo.png",
  //     industry: "Education",
  //     location: "Petaling Jaya, Malaysia",
  //     about:
  //       "UNITAR International University is one of the first private universities in Malaysia, offering a wide range of academic programs.",
  //     website: "https://unitar.my/",
  //   },
  // },
  // {
  //   slug: "restaurant-mahbub",
  //   title: "Malaysia’s Award Winning Nasi Briyani",
  //   excerpt:
  //     "A culinary gem nestled in the heart of the city, Restaurant Mahbub tantalizes taste buds with exquisite flavors and a rich cultural experience. Renowned for its authentic cuisine and warm hospitality, Restaurant Mahbub transports diners on a rollercoaster of flavour through traditional recipes passed down through generations. From aromatic spices to mouth watering delicacies, every dish at Mahbub is a celebration of culinary artistry and a testament to their heritage.",
  //   heroImage: "/images/client-works/unitar-ads-1.jpg",
  //   link: "/work/restaurant-mahbub",
  //   client: {
  //     name: "Restaurant Mahbub",
  //     logo: "/images/client-logos/unitar-logo.png",
  //     industry: "Food & Beverage",
  //     location: "Petaling Jaya, Malaysia",
  //     about:
  //       "UNITAR International University is one of the first private universities in Malaysia, offering a wide range of academic programs.",
  //     website: "https://unitar.my/",
  //   },
  // },
  // {
  //   slug: "supermama-lab",
  //   title: "Essential Tools for Every Mother's Journey",
  //   excerpt:
  //     "Supermama Lab understands that motherhood is a journey filled with joys and challenges. Their mission is to empower super mamas by providing high-quality essentials designed to make their journey smoother. From breast pumps to milk warmers, each product is crafted with care and precision to ensure both mom and baby receive the utmost comfort and convenience. With a range of thoughtfully designed essentials, they aim to support and uplift every super mama, every step of the way.",
  //   heroImage: "/images/client-works/unitar-ads-1.jpg",
  //   link: "/work/supermama-lab",
  //   client: {
  //     name: "Supermamalab",
  //     logo: "/images/client-logos/unitar-logo.png",
  //     industry: "Healthcare",
  //     location: "Petaling Jaya, Malaysia",
  //     about:
  //       "UNITAR International University is one of the first private universities in Malaysia, offering a wide range of academic programs.",
  //     website: "https://unitar.my/",
  //   },
  // },
];
