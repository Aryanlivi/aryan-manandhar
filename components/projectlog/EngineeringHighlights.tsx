import type { ProjectHighlight } from "@/data/site";

export default function EngineeringHighlights({
  highlights,
}: {
  highlights: ProjectHighlight[];
}) {
  if (!highlights || highlights.length === 0) return null;

  return (
    <section className="pl-highlights">
      <h2 className="pl-section-title">Engineering Highlights</h2>
      <div className="pl-highlights-list">
        {highlights.map((highlight) => (
          <article key={highlight.title} className="pl-highlight">
            <span className="pl-highlight-category">{highlight.category}</span>
            <h3 className="pl-highlight-title">{highlight.title}</h3>
            {highlight.metric && (
              <p className="pl-highlight-metric">
                <span className="pl-highlight-before">{highlight.metric.before}</span>
                <span className="pl-highlight-arrow">→</span>
                <span className="pl-highlight-after">{highlight.metric.after}</span>
              </p>
            )}
            <p className="pl-highlight-desc">{highlight.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
