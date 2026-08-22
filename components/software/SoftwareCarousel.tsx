"use client";

import { Carousel } from "react-bootstrap";
import { software } from "@/data/site";
import "./SoftwareCarousel.css";

export default function SoftwareCarousel() {
  const featured = software.filter((s) => s.featured).slice(0, 3);

  return (
    <div className="software-carousel">
      <Carousel interval={5000} pause="hover" wrap>
        {featured.map((item) => (
          <Carousel.Item key={item.name}>
            {item.video ? (
              <video
                className="software-carousel-img"
                src={item.video}
                autoPlay
                muted
                loop
                playsInline
                controls
              />
            ) : (
              <img
                className="software-carousel-img"
                src={item.image}
                alt={`${item.name} preview`}
              />
            )}
            <div className="software-carousel-caption">
              <span className="software-carousel-tag">{item.tagline}</span>
              <h3 className="software-carousel-name">{item.name}</h3>
              <p className="software-carousel-desc">{item.description}</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
