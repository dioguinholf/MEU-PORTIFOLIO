import type { ReactNode } from "react";
import { profile } from "@/data/profile";
import { asset } from "@/data/asset";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

// Atalhos para quem quer falar com você ou ver seu código sem rolar a página
const socials = [
  { href: profile.links.github, label: "GitHub", icon: <GitHubIcon />, external: true },
  { href: profile.links.linkedin, label: "LinkedIn", icon: <LinkedInIcon />, external: true },
  { href: profile.links.email, label: "E-mail", icon: <MailIcon />, external: false },
];

// Linhas do "cartão de código" exibido no hero.
const codeLines: { indent: number; content: ReactNode }[] = [
  {
    indent: 0,
    content: (
      <>
        <span className="c-kw">const</span> <span className="c-var">diogo</span>{" "}
        <span className="c-pun">=</span> <span className="c-pun">{"{"}</span>
      </>
    ),
  },
  {
    indent: 1,
    content: (
      <>
        <span className="c-key">papel</span>
        <span className="c-pun">:</span> <span className="c-str">&quot;Analista de BI&quot;</span>
        <span className="c-pun">,</span>
      </>
    ),
  },
  {
    indent: 1,
    content: (
      <>
        <span className="c-key">formacao</span>
        <span className="c-pun">:</span>{" "}
        <span className="c-str">&quot;Sistemas de Informação&quot;</span>
        <span className="c-pun">,</span>
      </>
    ),
  },
  {
    indent: 1,
    content: (
      <>
        <span className="c-key">foco</span>
        <span className="c-pun">: [</span>
        <span className="c-str">&quot;Node.js&quot;</span>
        <span className="c-pun">,</span> <span className="c-str">&quot;PostgreSQL&quot;</span>
        <span className="c-pun">,</span> <span className="c-str">&quot;Dados&quot;</span>
        <span className="c-pun">],</span>
      </>
    ),
  },
  {
    indent: 1,
    content: (
      <>
        <span className="c-key">cidade</span>
        <span className="c-pun">:</span> <span className="c-str">&quot;{profile.location}&quot;</span>
        <span className="c-pun">,</span>
      </>
    ),
  },
  {
    indent: 1,
    content: (
      <>
        <span className="c-key">aberto</span>
        <span className="c-pun">:</span> <span className="c-bool">true</span>
        <span className="c-pun">,</span>
      </>
    ),
  },
  {
    indent: 0,
    content: <span className="c-pun">{"};"}</span>,
  },
];

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-grid" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="label">
            <span className="status-dot" aria-hidden="true" />
            {profile.status}
          </p>

          <h1 className="headline">
            <span className="sr-only">{profile.name}: </span>
            Construo sistemas e transformo <em>dados</em> em decisões.
          </h1>

          <p className="lead">
            <strong>{profile.name}</strong> · {profile.role}. {profile.tagline}
          </p>

          <div className="hero-buttons">
            <a href="#projetos" className="btn btn-primary">
              Ver projetos
            </a>
            {profile.links.cv ? (
              <a href={asset(profile.links.cv)} className="btn btn-ghost" download>
                <DownloadIcon /> Baixar currículo
              </a>
            ) : (
              <a href="#contato" className="btn btn-ghost">
                Entrar em contato
              </a>
            )}
          </div>

          <ul className="hero-socials" aria-label="Redes e contato">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  title={social.label}
                  {...(social.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <aside className="code-card" aria-label="Resumo do perfil em código">
          <div className="code-head">
            <span />
            <span />
            <span />
            <b>perfil.ts</b>
          </div>
          <div className="code-body" aria-hidden="true">
            {codeLines.map((line, index) => (
              <div key={index} className={`code-line indent-${line.indent}`}>
                <span className="code-num">{index + 1}</span>
                <span className="code-text">{line.content}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
