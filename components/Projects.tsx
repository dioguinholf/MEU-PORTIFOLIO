import { projects } from "@/data/projects";
import { asset } from "@/data/asset";
import Reveal from "./Reveal";
import { ArrowUpRightIcon, GitHubIcon } from "./Icons";

// "Sistema de Biblioteca" -> "SB" (ignora palavras curtas como "de")
function initials(title: string) {
  return title
    .split(/\s+/)
    .filter((word) => word.length > 2)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
}

export default function Projects() {
  return (
    <section id="projetos" className="section">
      <div className="container">
        <p className="label">
          <span className="accent">02</span> / Projetos
        </p>
        <h2 className="section-heading">Projetos selecionados</h2>

        <ol className="project-grid">
          {projects.map((project, index) => {
            const number = String(index + 1).padStart(2, "0");
            // O print (ou a capa) leva para a demonstração; se não houver, para o código
            const mainLink = project.demoUrl ?? project.repoUrl;

            return (
              <li key={project.slug}>
                <Reveal className="reveal-fill">
                  <article className="project-card">
                    <a
                      className="project-thumb"
                      href={mainLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      {project.image ? (
                        <img
                          src={asset(project.image)}
                          alt=""
                          loading="lazy"
                          width={800}
                          height={500}
                        />
                      ) : (
                        // Sem print: uma capa gerada com as iniciais e a stack do projeto
                        <div className="project-cover">
                          <span className="cover-monogram">{initials(project.title)}</span>
                          <span className="cover-stack">{project.stack.join(" · ")}</span>
                        </div>
                      )}
                      {project.demoUrl && <span className="thumb-badge">Ao vivo</span>}
                    </a>

                    <div className="project-body">
                      <h3>
                        <span className="project-index">{number}</span>
                        {project.title}
                      </h3>
                      <p>{project.summary}</p>

                      <ul className="chips">
                        {project.stack.map((tech) => (
                          <li key={tech}>{tech}</li>
                        ))}
                      </ul>

                      <div className="project-links">
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            className="link-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Ver ao vivo <ArrowUpRightIcon />
                            <span className="sr-only"> (abre {project.title} em nova aba)</span>
                          </a>
                        )}
                        {project.repoUrl && (
                          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                            <GitHubIcon size={16} /> Código
                            <span className="sr-only"> de {project.title} no GitHub</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
