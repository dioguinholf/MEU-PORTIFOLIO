import { profile } from "@/data/profile";
import Reveal from "./Reveal";

export default function Contact() {
  const email = profile.links.email.replace("mailto:", "");

  return (
    <section id="contato" className="section contact">
      <div className="container">
        <p className="label">
          <span className="accent">03</span> / Contato
        </p>

        <Reveal>
          <h2 className="contact-heading">Vamos conversar.</h2>
          <p className="contact-text">
            Estou aberto a oportunidades em desenvolvimento back-end e dados. Se quiser falar sobre
            uma vaga, um projeto ou tecnologia, será um prazer.
          </p>

          <a href={profile.links.email} className="contact-email">
            {email}
          </a>

          <div className="contact-links">
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
