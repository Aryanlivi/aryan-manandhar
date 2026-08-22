"use client";

import { Button, Card } from "react-bootstrap";
import GitHubIcon from "@mui/icons-material/GitHub";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import type { Software } from "@/data/site";
import "./SoftwareCard.css";

export default function SoftwareCard({ item }: { item: Software }) {
  return (
    <Card className="software-card">
      {item.image && (
        <Card.Img
          variant="top"
          className="software-card-img"
          src={item.image}
          alt={`${item.name} preview`}
        />
      )}
      {item.starred && (
        <span className="software-card-star" aria-label="Starred project">
          <StarRoundedIcon fontSize="small" />
        </span>
      )}
      <Card.Body>
        {item.tagline && <span className="software-card-tag">{item.tagline}</span>}
        <Card.Title className="software-card-title">{item.name}</Card.Title>
        <Card.Text className="software-card-desc">{item.description}</Card.Text>
      </Card.Body>
      <Card.Footer className="software-card-footer">
        <a
          href={item.github}
          target="_blank"
          rel="noreferrer"
          className="software-card-github"
          aria-label={`View ${item.name} on GitHub`}
        >
          <GitHubIcon fontSize="small" />
        </a>
        <Button
          href={item.demo}
          variant="outline-light"
          size="sm"
          className="software-card-checkout"
        >
          Check Out
        </Button>
      </Card.Footer>
    </Card>
  );
}
