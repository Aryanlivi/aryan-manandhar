import Launch from "@mui/icons-material/Launch";
import type { ProjectLog } from "@/data/site";

const LINK_LABELS: Record<keyof NonNullable<ProjectLog["links"]>, string> = {
  github: "GitHub",
  live: "Live Demo",
  appStore: "App Store",
  playStore: "Play Store",
};

export default function ProjectHeader({ project }: { project: ProjectLog }) {
  const links = project.links ?? {};
  const linkEntries = (Object.keys(LINK_LABELS) as (keyof typeof LINK_LABELS)[])
    .filter((key) => links[key])
    .map((key) => ({ key, label: LINK_LABELS[key], href: links[key]! }));

  const meta = [project.role, project.status, project.duration]
    .filter(Boolean)
    .join(" · ");

  return (
    <header className="pl-header">
      <h1 className="pl-header-title">{project.title}</h1>
      <p className="pl-header-desc">{project.description}</p>
      <p className="pl-header-meta">{meta}</p>
      <p className="pl-header-tech">{project.technologies.join(" · ")}</p>
      {linkEntries.length > 0 && (
        <div className="pl-header-links">
          {linkEntries.map((link) => (
            <a
              key={link.key}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="pl-header-link"
            >
              {link.label}
              <Launch fontSize="inherit" />
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
