import AutoCarousel from "@/components/ui/AutoCarousel/AutoCarousel";
import type { ProjectMediaItem } from "@/data/site";

export default function ProjectMedia({ media }: { media?: ProjectMediaItem[] }) {
  if (!media || media.length === 0) return null;

  const slides = media.map((item) => ({
    src: item.src,
    type: item.type,
    alt: item.alt,
    description: item.caption,
  }));

  return (
    <section className="pl-media">
      <h2 className="pl-section-title">Evidence</h2>
      <AutoCarousel slides={slides} mediaHeight="440px" />
    </section>
  );
}
