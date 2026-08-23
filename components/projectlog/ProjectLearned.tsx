export default function ProjectLearned({ items }: { items?: string[] }) {
  if (!items || items.length === 0) return null;

  return (
    <section className="pl-learned">
      <h2 className="pl-section-title pl-section-title-sm">What I Learned</h2>
      <ul className="pl-learned-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
