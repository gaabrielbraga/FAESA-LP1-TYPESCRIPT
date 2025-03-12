import { useEffect } from "react";
import { User, Code, FileCode, AppWindowMac } from "lucide-react";

const TypeScriptInfo = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".scroll-reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      title: "Quem Criou?",
      icon: <User className="w-6 h-6 mr-2 text-primary" />,
      content: (
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start mb-4">
          <div className="shrink-0">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Anders_Hejlsberg.jpg"
              alt="Anders Hejlsberg"
              className="w-32 h-32 object-cover rounded-lg shadow-md border border-primary/20"
            />
          </div>
          <div>
            <p className="text-muted-foreground mb-4">
              TypeScript foi criado pela <strong>Microsoft</strong> e seu
              principal desenvolvedor foi <strong>Anders Hejlsberg</strong>,
              também conhecido por ser o principal arquiteto do C# e criador do
              Delphi.
            </p>
            <p className="text-muted-foreground">
              O desenvolvimento começou em 2010 e a primeira versão pública
              (0.8) foi lançada em outubro de 2012. Desde então, a linguagem tem
              sido mantida como um projeto de código aberto no GitHub.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Qual o Paradigma?",
      icon: <Code className="w-6 h-6 mr-2 text-primary" />,
      content: (
        <>
          <p className="text-muted-foreground mb-4">
            TypeScript suporta{" "}
            <strong>múltiplos paradigmas de programação</strong>, incluindo:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
            <li>
              <strong>Orientação a Objetos</strong>: Com classes, interfaces,
              herança e encapsulamento
            </li>
            <li>
              <strong>Programação Funcional</strong>: Suportando funções de
              primeira classe, lambdas e composição de funções
            </li>
            <li>
              <strong>Imperativo</strong>: Permitindo instruções sequenciais e
              controle de fluxo tradicional
            </li>
            <li>
              <strong>Programação Genérica</strong>: Através de tipos genéricos
              para criar componentes reutilizáveis
            </li>
          </ul>
          <p className="text-muted-foreground">
            Esta flexibilidade permite que desenvolvedores escolham o estilo
            mais adequado para cada situação.
          </p>
        </>
      ),
    },
    {
      title: "Compilador ou Interpretador?",
      icon: <FileCode className="w-6 h-6 mr-2 text-primary" />,
      content: (
        <>
          <p className="text-muted-foreground mb-4">
            TypeScript é uma linguagem <strong>compilada</strong>, não
            interpretada. O processo funciona assim:
          </p>
          <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-4">
            <li>Você escreve código em TypeScript (.ts)</li>
            <li>
              O compilador TypeScript (tsc) converte este código para JavaScript
              (.js)
            </li>
            <li>
              O JavaScript gerado é então executado por um interpretador
              JavaScript (navegador, Node.js, etc.)
            </li>
          </ol>
          <p className="text-muted-foreground">
            Esta abordagem permite que TypeScript ofereça verificação de tipos
            estática durante o desenvolvimento, mas ainda mantenha a
            compatibilidade com ambientes JavaScript existentes.
          </p>
        </>
      ),
    },
    {
      title: "Qual Aplicação é Mais Indicada?",
      icon: <AppWindowMac className="w-6 h-6 mr-2 text-primary" />,
      content: (
        <>
          <p className="text-muted-foreground mb-4">
            TypeScript é especialmente recomendado para:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
            <li>
              <strong>Aplicações de grande escala</strong>: Projetos complexos
              onde a verificação de tipos ajuda a prevenir erros
            </li>
            <li>
              <strong>Desenvolvimento em equipe</strong>: A tipagem facilita a
              colaboração entre múltiplos desenvolvedores
            </li>
            <li>
              <strong>Aplicações front-end</strong>: Frameworks como React,
              Angular e Vue se beneficiam da tipagem estática
            </li>
            <li>
              <strong>APIs e serviços back-end</strong>: Usando Node.js com
              TypeScript para maior robustez
            </li>
            <li>
              <strong>Bibliotecas e frameworks</strong>: Para criar APIs bem
              documentadas através dos tipos
            </li>
          </ul>
          <p className="text-muted-foreground">
            Em geral, TypeScript é ideal quando a segurança de tipos e a
            manutenção a longo prazo são prioridades.
          </p>
        </>
      ),
    },
  ];

  return (
    <section
      id="info"
      className="py-24 bg-gradient-to-t from-background to-accent/30"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary scroll-reveal">
            Informações
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl scroll-reveal">
            Sobre o TypeScript
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed scroll-reveal">
            Conheça mais detalhes sobre esta linguagem de programação
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className="glass-card p-8 scroll-reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                {card.icon}
                {card.title}
              </h3>
              {card.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TypeScriptInfo;
