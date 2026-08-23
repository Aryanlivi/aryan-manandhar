import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectLogs } from "@/data/site";
import ProjectHeader from "@/components/projectlog/ProjectHeader";
import ProjectHero from "@/components/projectlog/ProjectHero";
import EngineeringHighlights from "@/components/projectlog/EngineeringHighlights";
import ContributionGrid from "@/components/projectlog/ContributionGrid";
import ProjectMedia from "@/components/projectlog/ProjectMedia";
import ProjectLearned from "@/components/projectlog/ProjectLearned";
import ProjectNavigation from "@/components/projectlog/ProjectNavigation";
import "../projectlog.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projectLogs.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectLogs.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} | Aryan Manandhar`,
    description: project.description,
  };
}

export default async function ProjectLogDetailPage({ params }: Props) {
  const { slug } = await params;
  const index = projectLogs.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projectLogs[index];
  const prev = projectLogs[index - 1];
  const next = projectLogs[index + 1];

  return (
    <div className="projectlog-page projectlog-detail">
      <div className="root-container">
        <ProjectHeader project={project} />
        <ProjectHero media={project.hero} />
        <EngineeringHighlights highlights={project.highlights} />
        <ContributionGrid contributions={project.contributions} />
        <ProjectMedia media={project.media} />
        <ProjectLearned items={project.learned} />
        <ProjectNavigation
          prev={prev ? { slug: prev.slug, title: prev.title } : undefined}
          next={next ? { slug: next.slug, title: next.title } : undefined}
        />
      </div>
    </div>
  );
}
