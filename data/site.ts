import { fullControl } from "./full-control";
import { healthChallenges } from "./health-challenges";
import { BASE_PATH } from "@/lib/utils";

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
    { label: "Experience", href: "/#experience" },
    { label: "Software", href: "/#projects" },
  ] as NavLink[],
  socials: [
    { label: "Email", href: "mailto:aryanlivi@gmail.com" },
    { label: "GitHub", href: "https://github.com/Aryanlivi" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aryan-manandhar/" },
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
  tagline: "Mobile & Game Developer . Licensed Computer Engineer . Distributed System Engineer ",
  cta: {
    label: "Say Hi",
    href: "mailto:aryanlivi@gmail.com",
  },
  cv: {
    label: "Download CV",
    href: `${BASE_PATH}/assets/cv.pdf`,
  },
  photo: {
    src: `${BASE_PATH}/assets/images/me-nobg.png`,
    alt: "Aryan Manandhar",
  },
};

export const about = {
  paragraphs: [
    {
      text: `I am a Software Engineer and Licensed Computer Engineer based in Kathmandu, Nepal. Currently, I work remotely with {healthtek} 
      building mobile health applications and with {monkeybyte} developing and optimizing game systems in Unreal Engine 5 and ActionScript.
       I specialize in refactoring legacy codebases, real-time performance optimization, and cross-platform mobile systems.`,
      links: [
        { text: "HealthTek Inc.", href: "https://www.google.com/" },
        { text: "Monkey Byte Inc.", href: "https://www.google.com/" },
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
    company: "HealthTek Inc.",
    role: "Software Engineer",
    duration: "May 2025 — Present",
    location: "Remote (Castro Valley, CA)",
    highlights: [
      "Developed +Health Challenges App integrating native Android health features using Kotlin, React Native, and Health Connect SDK.",
      "Built backend services with Node.js, Koa, Redis Cache, and MySQL deployed on Linux/Nginx servers.",
      "Implemented timezone critical operations, dynamic app icons, OneSignal notifications, and QR code scanning with deep linking.",
      "Modernized legacy codebases, resolved security vulnerabilities, and ensured HIPAA compliance.",
    ],
  },
  {
    company: "Monkey Byte Inc.",
    role: "Game Developer",
    duration: "May 2025 — Present",
    location: "Remote (Castro Valley, CA)",
    highlights: [
      "Ported legacy C games to UE5 C++, re-implementing core gameplay, enemy AI, and data-driven systems.",
      "Upgraded Flash games with HARMAN AIR, custom Twitch OAuth, and high-frequency IRC message handling (3000+ msgs/sec).",
      "Optimized build size by 50%+ using async loading and pointer references, and published upgraded titles to Steam.",
    ],
  },
  {
    company: "Real Time Solutions",
    role: "Backend Engineer",
    duration: "Dec 2024 — Feb 2025",
    location: "Kathmandu, Nepal",
    highlights: [
      "Developed the YouTube-to-IDAQ system and Discharge Forecast project using Django, Celery, Redis, and PostgreSQL.",
      "Hosted systems on Linux servers and managed concurrent processing of multiple YouTube live streams.",
    ],
  },
];

export type Software = {
  name: string;
  tagline?: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  featured?: boolean;
  starred?: boolean;
  /** Optional video URL (mp4/webm) shown in the carousel instead of the image. */
  video?: string;
  /** Matching ProjectLog slug — when set, "Project Log" opens /projectlog/{slug} instead of `demo`. */
  slug?: string;
};

/**
 * Software / projects content.
 * `featured` items appear in the carousel (max 3).
 * `starred` items are pinned to the top of the card grid (max 3 shown).
 */
export const software: Software[] = [
  {
    name: "Full Control",
    tagline: "Game / AI",
    description:
      "A real-time pose detection fighting game built in UE5, utilizing MediaPipe and CNN+GRU models for action classification.",
    image: `${BASE_PATH}/assets/images/Project.png`,
    github: "https://github.com/Aryanlivi",
    slug: "full-control", 
    demo: "#",
    featured: true,
    starred: true,
  },
  {
    name: "PlayPals",
    tagline: "Mobile App",
    description:
      "A futsal opponent finder mobile app developed with Flutter, Django, PostgreSQL, Redis, and Google Maps API.",
    image: `${BASE_PATH}/assets/images/DoodleWhat.png`,
    github: "https://github.com/Aryanlivi",
    demo: "#",
    featured: true,
    starred: true,
  },
  {
    name: "Health Challenges",
    tagline: "Mobile App",
    description:
      "A health and activity challenge platform for organizations.",
    image: `${BASE_PATH}/assets/images/HealthChallenges.png`,
    github: "https://github.com/Aryanlivi",
    slug: "health-challenges", 
    demo: "https://apps.apple.com/us/app/health-challenges/id6743952494",
    featured: true,
    starred: true,

  },
  {
    name: "Fit Pose",
    tagline: "Computer Vision",
    description:
      "Real-time exercise tracking app developed for KIST Hackathon using MediaPipe, React, DRF, and PostgreSQL.",
    image: `${BASE_PATH}/assets/images/BouncyBean.png`,
    github: "https://github.com/Aryanlivi",
    demo: "#",
  },
  {
    name: "Proj X",
    tagline: "Computer Vision",
    description:
      "Real-time exercise tracking app developed for KIST Hackathon using MediaPipe, React, DRF, and PostgreSQL.",
    image: `${BASE_PATH}/assets/images/GalacticPatrol.png`,
    github: "https://github.com/Aryanlivi",
    demo: "#",
  },
  {
    name: "Proj Y",
    tagline: "Computer Vision",
    description:
      "Real-time exercise tracking app developed for KIST Hackathon using MediaPipe, React, DRF, and PostgreSQL.",
    image: `${BASE_PATH}/assets/images/CatapultGodot.png`,
    github: "https://github.com/Aryanlivi",
    demo: "#",
  },
];

/**
 * Project Log — employer-facing engineering deep-dives.
 * Each project lives in its own /data/{slug}.ts file and is aggregated
 * into `projectLogs` below. Add a new project by adding one entry there.
 */
export type ProjectMediaItem = {
  type: "image" | "video";
  src: string;
  alt?: string;
  caption?: string;
};

export type ProjectHighlight = {
  category: string;
  title: string;
  /** Only set this when a real, measured before/after exists. Never invent one. */
  metric?: { before: string; after: string };
  description: string;
};

export type ProjectContribution = {
  title: string;
  description: string;
  technologies?: string[];
};

export type ProjectLinks = {
  github?: string;
  live?: string;
  appStore?: string;
  playStore?: string;
};

export type ProjectLog = {
  slug: string;
  title: string;
  description: string;
  role: string;
  status: string;
  duration?: string;
  technologies: string[];
  links?: ProjectLinks;
  hero?: ProjectMediaItem;
  highlights: ProjectHighlight[];
  contributions?: ProjectContribution[];
  media?: ProjectMediaItem[];
  learned?: string[];
};

export const projectLogs: ProjectLog[] = [healthChallenges,fullControl];