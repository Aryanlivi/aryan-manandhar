"use client";

import { Row, Col } from "react-bootstrap";
import { software, sections } from "@/data/site";
import AutoCarousel from "@/components/ui/AutoCarousel/AutoCarousel";
import SoftwareCard from "./SoftwareCard";
import "./Software.css";

export default function Software() {
  // Starred items first, then the rest — show only the top 3.
  const cards = [...software]
    .sort((a, b) => Number(b.starred ?? false) - Number(a.starred ?? false))
    .slice(0, 3);

  // Featured items become carousel slides (video or image).
  const slides = software
    .filter((s) => s.featured)
    .slice(0, 3)
    .map((s) => ({
      src: s.video ?? s.image,
      type: (s.video ? "video" : "image") as "video" | "image",
      alt: `${s.name} preview`,
      tag: s.tagline,
      title: s.name,
      description: s.description,
    }));

  return (
    <section id="projects" className="section">
      <div className="section-header">
        <span className="section-title">{sections.software.title}</span>
        <a href={sections.software.viewAll.href} className="section-action">
          {sections.software.viewAll.label} →
        </a>
      </div>

      <AutoCarousel slides={slides} />

      <Row className="g-4">
        {cards.map((item) => (
          <Col key={item.name} xs={12} sm={6} lg={4}>
            <SoftwareCard item={item} />
          </Col>
        ))}
      </Row>
    </section>
  );
}
