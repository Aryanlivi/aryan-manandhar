export type Project = {
  name: string;
  category: string;
  year: string;
  description: string;
  tech: string[];
  demo: string;
  source: string;
};

export const featuredProjects: Project[] = [
  {
    name: "Habitual",
    category: "Productivity",
    year: "2026",
    description: "A habit tracking app with a focused dashboard, streaks, and simple routine planning.",
    tech: ["Next.js", "CSS Modules", "TypeScript"],
    demo: "#",
    source: "#",
  },
  {
    name: "Financery",
    category: "Finance",
    year: "2025",
    description: "A clean personal finance tracker for budgets, goals, and quick spending analysis.",
    tech: ["React", "Charts", "UI Design"],
    demo: "#",
    source: "#",
  },
  {
    name: "Taski",
    category: "Workflow",
    year: "2025",
    description: "A minimal task manager designed for daily planning, clarity, and low-friction capture.",
    tech: ["Next.js", "Supabase", "Shadcn-style UI"],
    demo: "#",
    source: "#",
  },
];

export const allProjects: Project[] = [
  ...featuredProjects,
  {
    name: "Linkly",
    category: "Publishing",
    year: "2024",
    description: "A link-sharing profile page with reusable cards, stats, and a modular content layout.",
    tech: ["React", "Accessibility", "Design System"],
    demo: "#",
    source: "#",
  },
  {
    name: "Weatherly",
    category: "Utility",
    year: "2024",
    description: "A simple weather interface focused on readable forecasts and fast local interactions.",
    tech: ["JavaScript", "API", "Responsive UI"],
    demo: "#",
    source: "#",
  },
];

export const stack = [
  { title: "code", text: "I write clean, maintainable interfaces and small, reusable components." },
  { title: "build", text: "I ship focused products with a practical approach to product and polish." },
  { title: "design", text: "I care about clarity, spacing, hierarchy, and the small details that matter." },
  { title: "learn", text: "I keep iterating across new tools, systems, and product ideas." },
];
