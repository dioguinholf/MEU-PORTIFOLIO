import { profile } from "@/data/profile";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <p className="label">
          <span className="accent">01</span> / Sobre
        </p>

        <div className="about-grid">
          <Reveal>
            <h2 className="section-heading">Dos dados ao código, do relatório à API.</h2>
          </Reveal>

          <Reveal>
            <div className="about-text">
              {profile.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>

        <p className="label skills-label">Stack e ferramentas</p>
        <div className="skills-grid">
          {profile.skills.map((group) => (
            <Reveal key={group.title} className="reveal-fill">
              <div className="skill-card">
                <h3>{group.title}</h3>
                <ul className="chips">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
