import type { ProjectContribution } from "@/data/site";

export default function ContributionGrid({
  contributions,
}: {
  contributions?: ProjectContribution[];
}) {
  if (!contributions || contributions.length === 0) return null;

  return (
    <section className="pl-contrib">
      <h2 className="pl-section-title">What I Built</h2>
      <div className="pl-contrib-grid">
        {contributions.map((item) => (
          <div key={item.title} className="pl-contrib-item">
            <h3 className="pl-contrib-title">{item.title}</h3>
            {item.technologies && item.technologies.length > 0 && (
              <p className="pl-contrib-tech">{item.technologies.join(" · ")}</p>
            )}
            <p className="pl-contrib-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
