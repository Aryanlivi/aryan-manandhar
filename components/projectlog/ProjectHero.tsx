import type { ProjectMediaItem } from "@/data/site";

export default function ProjectHero({ media }: { media?: ProjectMediaItem }) {
  if (!media) return null;

  return (
    <div className="pl-hero">
      {media.type === "video" ? (
        <video
          className="pl-hero-media"
          src={media.src}
          controls
          playsInline
        />
      ) : (
        <img className="pl-hero-media" src={media.src} alt={media.alt ?? ""} />
      )}
    </div>
  );
}
