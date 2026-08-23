import type { ProjectLog } from "./site";
import { BASE_PATH } from "@/lib/utils";

export const fullControl: ProjectLog = {
  slug: "full-control",
  title: "Full Control",
  description:
    "A health and activity challenge platform for organizations.",
  role: "Full-Stack Engineer",
  status: "Production",
  duration: "May 2025 — Present",
  technologies: [
    "React Native",
    "Kotlin",
    "Node.js",
    "Koa",
    "MySQL",
    "Redis",
    "Google Health API",
  ],
  links: {
    github: "https://github.com/Aryanlivi",
    appStore: "https://apps.apple.com/us/app/health-challenges/id6743952494",
  },
  hero: {
    type: "image",
    src: `${BASE_PATH}/assets/images/HealthChallenges.png`,
    alt: "Health Challenges application",
  },
  highlights: [
    {
      category: "Performance",
      title: "Optimized activity data retrieval",
      metric: { before: "~10s", after: "<1s" },
      description:
        "Batched reads and cache-aware retrieval reduced unnecessary database and network operations.",
    },
    {
      category: "Integration",
      title: "Migrated health-data integration",
      metric: { before: "Fitbit API", after: "Google Health API" },
      description:
        "Worked across OAuth, native Android integration, and backend synchronization.",
    },
    {
      category: "Reliability",
      title: "Hardened the platform for compliance",
      description:
        "Modernized legacy code paths and resolved security vulnerabilities to bring the app in line with HIPAA requirements.",
    },
  ],
  contributions: [
    {
      title: "Mobile",
      description: "Built mobile features and native Android integrations.",
      technologies: ["React Native", "Kotlin"],
    },
    {
      title: "Backend",
      description: "Developed APIs and challenge-processing logic.",
      technologies: ["Node.js", "Koa", "MySQL"],
    },
    {
      title: "Integrations",
      description:
        "Implemented health-data sync, push notifications, and QR-based deep linking.",
      technologies: ["OAuth", "Google Health API", "OneSignal"],
    },
    {
      title: "Performance",
      description:
        "Reduced unnecessary requests with caching and batch processing.",
      technologies: ["Redis", "Batch Processing"],
    },
  ],
  learned: [
    "Designing synchronization flows around external health APIs",
    "Handling inconsistent data across systems",
    "Bridging React Native with native Android functionality",
    "Operating under HIPAA compliance constraints",
  ],
};
