type NavLink = {
  label: string;
  href: string;
};

type SocialLink = {
  label: "Email" | "GitHub" | "LinkedIn";
  href: string;
};

type AboutLink = {
  text: string;
  href: string;
};

type AboutParagraph = {
  text: string;
  links?: AboutLink[];
};

export const site = {
  brand: "Aryan Manandhar",
  nav: [
    { label: "Home", href: "/#intro" },
    // { label: "About", href: "/#about" },
    { label: "Experience", href: "/#experience" },
    { label: "Software", href: "/#projects" },
    { label: "Blogs", href: "/#blogs" },
  ] as NavLink[],
  socials: [
    { label: "Email", href: "mailto:aryanliviwork@gmail.com" },
    { label: "GitHub", href: "https://github.com/aryanlivi" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aryanlivi/" },
  ] as SocialLink[],
};

/**
 * Section metadata — single source of truth for section titles and
 * optional header actions, so every section stays consistent.
 */
export const sections = {
  about: { title: "About" },
  experience: { title: "Experience" },
  software: {
    title: "Software",
    viewAll: { label: "View All Projects", href: "/projects" },
  },
};

export const intro = {
  name: "Aryan Manandhar",
  tagline: "Distributed System/Infrastructure Engineer . Mobile/Game Developer . Computer Engineer",
  cta: {
    label: "Say Hi",
    href: "mailto:aryanliviwork@gmail.com",
  },
  cv: {
    label: "Download CV",
    href: "/assets/cv.pdf",
  },
  photo: {
    src: "/assets/images/me-nobg.png",
    alt: "Aryan Manandhar",
  },
};

export const about = {
  paragraphs: [
    {
      text: `I am currently a Software Engineer at {monkeybyte}, where I help build mobile health apps to track personal health and compete in Challenges.Furthermore, 
      I Fix Legacy Code, Optimize Game Systems.In my free time, I play Futsal , train Calisthenics.`,
      links: [
        { text: "monkeybyte", href: "https://www.google.com/" },
      ],
    },
  ] as AboutParagraph[],
};

type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  location?: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Monkeybyte",
    role: "Software Engineer",
    duration: "2024 — Present",
    location: "Remote",
    highlights: [
      "Build and ship mobile health apps that help users track personal health and compete in challenges.",
      "Refactor legacy code and optimize game systems to improve performance and maintainability.",
    ],
  },
  {
    company: "Freelance",
    role: "Mobile & Game Developer",
    duration: "2022 — 2024",
    location: "Remote",
    highlights: [
      "Delivered cross-platform mobile and game features end-to-end, from design to release.",
      "Collaborated with clients to translate requirements into clean, testable implementations.",
    ],
  },
];

export type Software = {
  name: string;
  tagline: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  featured?: boolean;
  starred?: boolean;
  /** Optional video URL (mp4/webm) shown in the carousel instead of the image. */
  video?: string;
};

/**
 * Software / projects content.
 * `featured` items appear in the carousel (max 3).
 * `starred` items are pinned to the top of the card grid (max 3 shown).
 */
export const software: Software[] = [
  {
    name: "Habitual",
    tagline: "Productivity",
    description:
      "A habit tracking app with a focused dashboard, streaks, and simple routine planning.",
    image: "/assets/images/Project.png",
    github: "https://github.com/aryanlivi",
    demo: "#",
    featured: true,
    starred: true,
  },
  {
    name: "Financery",
    tagline: "Finance",
    description:
      "A clean personal finance tracker for budgets, goals, and quick spending analysis.",
    image: "/assets/images/Project.png",
    github: "https://github.com/aryanlivi",
    demo: "#",
    featured: true,
    starred: true,
  },
  {
    name: "Taski",
    tagline: "Workflow",
    description:
      "A minimal task manager designed for daily planning, clarity, and low-friction capture.",
    image: "/assets/images/Project.png",
    github: "https://github.com/aryanlivi",
    demo: "#",
    featured: true,
    starred: true,
  },
  {
    name: "Linkly",
    tagline: "Publishing",
    description:
      "A link-sharing profile page with reusable cards, stats, and a modular content layout.",
    image: "/assets/images/Project.png",
    github: "https://github.com/aryanlivi",
    demo: "#",
  },
  {
    name: "Weatherly",
    tagline: "Utility",
    description:
      "A simple weather interface focused on readable forecasts and fast local interactions.",
    image: "/assets/images/Project.png",
    github: "https://github.com/aryanlivi",
    demo: "#",
  },
];
