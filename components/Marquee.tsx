import { profile } from "@/data/profile";

// Faixa contínua com as tecnologias, montada a partir das habilidades do perfil.
export default function Marquee() {
  const items = Array.from(new Set(profile.skills.flatMap((group) => group.items)));

  return (
    <div className="marquee" aria-label="Tecnologias que utilizo">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <ul key={copy} className="marquee-list" aria-hidden={copy === 1}>
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
