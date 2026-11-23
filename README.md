# Portfólio · Diogo Lopes de França

Portfólio pessoal de **Diogo Lopes de França**, analista de BI e estudante de Sistemas de Informação (UFRPE) em transição para o desenvolvimento back-end.

## Tecnologias

- **Next.js** (App Router) com **TypeScript**, exportado como site estático
- CSS puro (variáveis, Grid, Flexbox, media queries)
- Canvas API para o fundo animado
- Deploy automático no **GitHub Pages** via GitHub Actions

## Funcionalidades

- Layout responsivo, com menu hambúrguer em telas pequenas
- Conteúdo separado do código: textos em `data/profile.ts` e projetos em `data/projects.ts`
- Animações de entrada ao rolar a página, desativadas para quem prefere menos movimento
- Acessibilidade: link "ir para o conteúdo", foco visível e navegação por teclado
- SEO básico: título, descrição e metadados Open Graph

## Estrutura

```
├── app/            # layout, página principal, estilos globais e ícone
├── components/     # Navbar, Hero, About, Projects, Contact, Footer e efeitos
├── data/           # profile.ts (dados pessoais) e projects.ts (lista de projetos)
└── .github/        # workflow de deploy
```

## Como rodar localmente

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # checagem de tipos
npm run build      # gera o site estático na pasta out/
```

## Como adicionar um projeto

Abra `data/projects.ts` e inclua um objeto no array `projects`:

```ts
{
  slug: "meu-projeto",
  title: "Meu Projeto",
  summary: "O que o projeto faz, em uma ou duas frases.",
  stack: ["Node.js", "PostgreSQL"],
  repoUrl: "https://github.com/usuario/repositorio",
  demoUrl: "https://...", // opcional
}
```

## Deploy no GitHub Pages

1. No repositório, vá em **Settings → Pages** e, em **Source**, escolha **GitHub Actions**.
2. Faça push na branch `main`. O workflow `.github/workflows/deploy.yml` roda a checagem de tipos, gera o site e publica.

Também funciona na Vercel: importe o repositório e deixe as configurações padrão (nesse caso, não defina `NEXT_PUBLIC_BASE_PATH`).

## Contato

- E-mail: diogo.lopesf@ufrpe.br
- [LinkedIn](https://www.linkedin.com/in/diogolopesdev)
- [GitHub](https://github.com/dioguinholf)
