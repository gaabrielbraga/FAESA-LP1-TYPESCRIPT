import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-8 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
          <Logo />
          <ProjectInfo />
          <Copyright year={currentYear} />
        </div>
      </div>
    </footer>
  );
};

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
      <span className="text-primary-foreground font-display font-bold text-lg">
        TS
      </span>
    </div>
    <span className="font-display font-medium">TypeScript</span>
  </div>
);

const ProjectInfo = () => {
  const authors = [
    "Gabriel Braga",
    "Davi Teixeira",
    "Jean Henrique Viega",
    "Lucas Lirio",
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-sm text-muted-foreground text-center md:text-left">
        Projeto acadêmico desenvolvido para Laboratório de Programação I por
      </p>
      <p className="text-sm text-muted-foreground font-bold text-center md:text-left">
        {authors.length > 1
          ? `${authors.slice(0, -1).join(", ")} e ${
              authors[authors.length - 1]
            }`
          : authors[0]}
      </p>
    </div>
  );
};

const Copyright = ({ year }: { year: number }) => (
  <p className="text-sm text-muted-foreground">
    &copy; {year} TypeScript. Todos os direitos reservados.
  </p>
);

export default Footer;
