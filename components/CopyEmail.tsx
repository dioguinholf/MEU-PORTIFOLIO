"use client";

import { useState } from "react";
import { CheckIcon, CopyIcon } from "./Icons";

// Botão que copia o e-mail. Útil para quem não usa um app de e-mail no navegador.
export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Se o navegador bloquear a cópia, o link de e-mail ao lado continua funcionando
    }
  }

  return (
    <button type="button" className="copy-btn" onClick={copy}>
      {copied ? <CheckIcon /> : <CopyIcon />}
      <span aria-live="polite">{copied ? "Copiado!" : "Copiar e-mail"}</span>
    </button>
  );
}
