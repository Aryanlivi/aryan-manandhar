"use client";

import Carousel from "react-bootstrap/Carousel";
import "./AutoCarousel.css";

export type CarouselSlide = {
  /** Media source — an image URL or a video URL (mp4/webm). */
  src: string;
  /** Media type. Defaults to "image". */
  type?: "image" | "video";
  /** Accessible label for the media. */
  alt?: string;
  /** Small uppercase label shown above the title. */
  tag?: string;
  /** Slide title. */
  title?: string;
  /** Slide description. */
  description?: string;
};

type AutoCarouselProps = {
  slides: CarouselSlide[];
  /** Milliseconds between auto-advancing slides. Defaults to 5000. */
  interval?: number;
  /** Fixed height for the slide media. Defaults to "420px". */
  mediaHeight?: string;
};

export default function AutoCarousel({
  slides,
  interval = 5000,
  mediaHeight = "420px",
}: AutoCarouselProps) {
  return (
    <div className="auto-carousel">
      <Carousel interval={interval} pause="hover" wrap>
        {slides.map((slide, i) => (
          <Carousel.Item key={i}>
            {slide.type === "video" ? (
              <video
                className="auto-carousel-media"
                style={{ height: mediaHeight }}
                src={slide.src}
                autoPlay
                muted
                loop
                playsInline
                controls
              />
            ) : (
              <img
                className="auto-carousel-media"
                style={{ height: mediaHeight }}
                src={slide.src}
                alt={slide.alt}
              />
            )}
            {(slide.tag || slide.title || slide.description) && (
              <div className="auto-carousel-caption">
                {slide.tag && <span className="auto-carousel-tag">{slide.tag}</span>}
                {slide.title && <h3 className="auto-carousel-name">{slide.title}</h3>}
                {slide.description && (
                  <p className="auto-carousel-desc">{slide.description}</p>
                )}
              </div>
            )}
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
