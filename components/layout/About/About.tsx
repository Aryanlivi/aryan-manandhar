import React from "react";
import { about, sections } from "../../../data/site";
import "./About.css";

type AboutParagraph = (typeof about.paragraphs)[number];

function renderParagraph(paragraph: AboutParagraph) {
  // Split text on {linkName} markers and interleave the links.
  const parts = paragraph.text.split(/\{(\w+)\}/g);
  return parts.map((part, i) => {
    if (i % 2 === 1) {
      const link = paragraph.links?.find((l) => l.text === part);
      if (link) {
        return (
          <a key={part} href={link.href}>
            {link.text}
          </a>
        );
      }
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="section-header">
        <span className="section-title">{sections.about.title}</span>
      </div>
      <div className="about-description">
        {about.paragraphs.map((paragraph, i) => (
          <p key={i}>{renderParagraph(paragraph)}</p>
        ))}
      </div>
    </section>
  );
}
