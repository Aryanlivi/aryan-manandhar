"use client";

import Link from "next/link";
import { Card } from "react-bootstrap";
import type { ProjectLog } from "@/data/site";

export default function ProjectCard({ project }: { project: ProjectLog }) {
  const teaser = project.highlights?.[0];

  return (
    <Card className="pl-card">
      {project.hero?.type === "image" && (
        <Card.Img
          variant="top"
          className="pl-card-img"
          src={project.hero.src}
          alt={project.hero.alt ?? project.title}
        />
      )}
      <Card.Body>
        <Card.Title className="pl-card-title">{project.title}</Card.Title>
        <Card.Text className="pl-card-desc">{project.description}</Card.Text>
        <p className="pl-card-tech">{project.technologies.slice(0, 4).join(" · ")}</p>
        {teaser && (
          <div className="pl-card-teaser">
            {teaser.metric && (
              <p className="pl-card-teaser-metric">
                {teaser.metric.before} <span className="pl-highlight-arrow">→</span>{" "}
                {teaser.metric.after}
              </p>
            )}
            <p className="pl-card-teaser-title">{teaser.title}</p>
          </div>
        )}
      </Card.Body>
      <Card.Footer className="pl-card-footer">
        <Link href={`/projectlog/${project.slug}`} className="pl-card-link">
          View Project →
        </Link>
      </Card.Footer>
    </Card>
  );
}
