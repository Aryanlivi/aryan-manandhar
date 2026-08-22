import type { Metadata } from "next";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import { software, sections } from "@/data/site";
import SoftwareCard from "@/components/software/SoftwareCard";
import "./projects.css";

export const metadata: Metadata = {
  title: "Projects | Aryan Manandhar",
  description: "All software projects by Aryan Manandhar.",
};

export default function ProjectsPage() {
  return (
    <div className="projects-page">
      <div className="root-container">
        <div className="section-header">
          <span className="section-title">{sections.software.title}</span>
        </div>

        <Row className="g-4">
          {software.map((item) => (
            <Col key={item.name} xs={12} sm={6} lg={4}>
              <SoftwareCard item={item} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
