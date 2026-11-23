import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { profile } from "@/data/profile";
import "./globals.css";

const title = `${profile.name} | Analista de BI e Desenvolvedor Back-end`;
const description =
  "Portfólio de Diogo Lopes de França: analista de BI e estudante de Sistemas de Informação (UFRPE) em transição para desenvolvimento back-end com Node.js, Express e PostgreSQL.";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: profile.name }],
  openGraph: {
    type: "website",
    title,
    description,
    url: profile.siteUrl,
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0c0f",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
