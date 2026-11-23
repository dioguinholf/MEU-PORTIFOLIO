// Lista de projetos exibidos no site. Para adicionar um projeto, inclua um objeto no array abaixo.

export type Project = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  repoUrl?: string; // link do código no GitHub
  demoUrl?: string; // link da demonstração online, se existir
  image?: string; // print do projeto, salvo em public/projects/
};

export const projects: Project[] = [
  {
    slug: "lopes-stores",
    title: "LOPES STORES",
    summary:
      "E-commerce full stack de camisas de futebol: catálogo com filtro por time, carrinho e checkout com escolha de tamanho e criação de pedidos. API REST em C (servidor Mongoose), banco MariaDB e front-end em React.",
    stack: ["C", "MariaDB", "React"],
    repoUrl: "https://github.com/dioguinholf/LOPES-STORES",
  },
  {
    slug: "sistema-biblioteca",
    title: "Sistema de Biblioteca",
    summary:
      "Aplicação de linha de comando em Python para gerenciar livros e usuários: cadastro, busca, listagem, remoção e validação. Versionado com Git e GitHub, com versionamento semântico e README.",
    stack: ["Python", "Git", "GitHub"],
    repoUrl: "https://github.com/dioguinholf/sistema-biblioteca",
  },
  {
    slug: "app-clima",
    title: "App de Clima",
    summary:
      "Previsão do tempo consumindo a API do OpenWeather: clima atual, próximas horas e 5 dias, busca por localização, tratamento de erros e fundo animado conforme o clima.",
    stack: ["JavaScript", "API REST", "CSS"],
    repoUrl: "https://github.com/dioguinholf/projeto-app-clima",
    demoUrl: "https://dioguinholf.github.io/projeto-app-clima/",
    image: "/projects/app-clima.jpg",
  },
  {
    slug: "calculadora",
    title: "Calculadora",
    summary:
      "Calculadora funcional com interface moderna, lógica matemática no front-end e tratamento de erros.",
    stack: ["JavaScript", "HTML", "CSS"],
    repoUrl: "https://github.com/dioguinholf/calculadora-portifolio",
    demoUrl: "https://dioguinholf.github.io/calculadora-portifolio/",
    image: "/projects/calculadora.jpg",
  },

  // PROJETOS PARA ADICIONAR (cole o link real do repositório e remova os comentários):
  //
  // {
  //   slug: "plataforma-delivery",
  //   title: "Plataforma de Delivery",
  //   summary:
  //     "Projeto full-stack estilo iFood com três perfis de usuário, máquina de estados para o status dos pedidos, cálculo de taxa de entrega pela fórmula de Haversine e alocação automática de entregadores.",
  //   stack: ["Node.js", "Express", "PostgreSQL", "Prisma", "Socket.io", "JWT"],
  //   repoUrl: "COLE_O_LINK_DO_REPOSITORIO",
  // },
  // {
  //   slug: "lopesports",
  //   title: "LopeSports",
  //   summary:
  //     "E-commerce de camisas de futebol com back-end em Node.js, autenticação JWT, controle de acesso por perfil e diagrama ER modelado no draw.io.",
  //   stack: ["Node.js", "Express", "PostgreSQL", "Prisma", "JWT"],
  //   repoUrl: "COLE_O_LINK_DO_REPOSITORIO",
  // },
];
