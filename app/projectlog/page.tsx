import type { Metadata } from "next";
import { Row, Col } from "react-bootstrap";
import { projectLogs } from "@/data/site";
import ProjectCard from "@/components/projectlog/ProjectCard";
import "./projectlog.css";

export const metadata: Metadata = {
  title: "Project Log | Aryan Manandhar",
  description: "Engineering deep-dives into projects built by Aryan Manandhar.",
};

export default function ProjectLogPage() {
  return (
    <div className="projectlog-page">
      <div className="root-container">
        <div className="section-header">
          <span className="section-title">Project Log</span>
        </div>

        <Row className="g-4">
          {projectLogs.map((project) => (
            <Col key={project.slug} xs={12} sm={6} lg={4}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
