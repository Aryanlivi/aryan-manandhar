import Link from "next/link";

type NavTarget = { slug: string; title: string };

export default function ProjectNavigation({
  prev,
  next,
}: {
  prev?: NavTarget;
  next?: NavTarget;
}) {
  return (
    <nav className="pl-nav" aria-label="Project navigation">
      <div className="pl-nav-side">
        {prev && (
          <Link href={`/projectlog/${prev.slug}`} className="pl-nav-link">
            ← {prev.title}
          </Link>
        )}
      </div>
      <Link href="/projectlog" className="pl-nav-back">
        Back to Projects
      </Link>
      <div className="pl-nav-side pl-nav-side-right">
        {next && (
          <Link href={`/projectlog/${next.slug}`} className="pl-nav-link">
            {next.title} →
          </Link>
        )}
      </div>
    </nav>
  );
}
