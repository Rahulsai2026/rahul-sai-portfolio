import type { Project } from "./portfolio-data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-heading"><span className="project-index">{project.index}</span><div><p className="eyebrow">Featured system</p><h3>{project.title}</h3><p className="project-subtitle">{project.subtitle}</p></div></div>
      <div className="project-grid">
        <div><p className="label">Problem</p><p>{project.problem}</p></div>
        <div><p className="label">What I built</p><p>{project.built}</p></div>
      </div>
      <div className="methods"><p className="label">Methods</p><ul>{project.methods.map((method) => <li key={method}>{method}</li>)}</ul></div>
      <div className="finding"><p className="label">Result / current finding</p><p>{project.result}</p></div>
      <p className="project-impact"><span>Why it matters</span>{project.impact}</p>
      <div className="artifacts" aria-label={`${project.title} artifacts`}>
        {project.artifacts.map((artifact) => (
          artifact.href ? (
            <a
              href={artifact.href}
              key={artifact.label}
              target={artifact.href.startsWith("http") ? "_blank" : undefined}
              rel={artifact.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {artifact.label}<span aria-hidden="true">↗</span>
            </a>
          ) : (
            <span className="artifact-pending" key={artifact.label}>{artifact.label}<small>Available soon</small></span>
          )
        ))}
      </div>
    </article>
  );
}
