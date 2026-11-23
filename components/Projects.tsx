import { projects } from "@/data/projects";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projetos" className="section">
      <div className="container">
        <p className="label">
          <span className="accent">02</span> / Projetos
        </p>
        <h2 className="section-heading">Projetos selecionados</h2>

        <ol className="project-list">
          {projects.map((project, index) => (
            <li key={project.slug}>
              <Reveal>
                <article className="project-row">
                  <span className="project-index">{String(index + 1).padStart(2, "0")}</span>

                  <div className="project-main">
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                  </div>

                  <div className="project-meta">
                    <ul className="chips">
                      {project.stack.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                    <div className="project-links">
                      {project.repoUrl && (
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                          Código ↗
                        </a>
                      )}
                      {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          Demonstração ↗
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
