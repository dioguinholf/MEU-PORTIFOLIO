// Dados pessoais do portfólio. Para atualizar textos e links, edite só este arquivo.

export type SkillGroup = {
  title: string;
  items: string[];
};

export const profile = {
  name: "Diogo Lopes de França",
  role: "Analista de BI e estudante de Sistemas de Informação",
  tagline:
    "Em transição para o desenvolvimento back-end, com foco em Node.js, PostgreSQL e dados.",
  location: "Maceió, AL",
  status: "Aberto a oportunidades",
  siteUrl: "https://dioguinholf.github.io/MEU-PORTIFOLIO/",
  links: {
    github: "https://github.com/dioguinholf",
    linkedin: "https://www.linkedin.com/in/diogolopesdev",
    email: "mailto:diogo.lopesf@ufrpe.br",
  },
  about: [
    "Tenho experiência em Business Intelligence, com dashboards, relatórios e indicadores em Power BI e Excel para apoiar decisões da operação. Cursando Bacharelado em Sistemas de Informação na UFRPE, estou construindo minha base em desenvolvimento back-end com Node.js, Express e PostgreSQL, com projetos próprios publicados no GitHub.",
    "Busco minha primeira oportunidade em tecnologia, atuando com desenvolvimento back-end e dados.",
  ],
  skills: [
    {
      title: "Back-end",
      items: ["Node.js", "Express", "JavaScript", "Prisma ORM", "JWT", "Socket.io"],
    },
    {
      title: "Banco de dados",
      items: ["PostgreSQL", "SQLite", "Modelagem ER"],
    },
    {
      title: "Dados e BI",
      items: ["Power BI", "Excel", "Dashboards", "Relatórios gerenciais"],
    },
    {
      title: "Linguagens e ferramentas",
      items: ["Python", "C", "Git", "GitHub", "draw.io"],
    },
  ] satisfies SkillGroup[],
};
