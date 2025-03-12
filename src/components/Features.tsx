import { useEffect } from "react";
import { Type, Code, Layout, Circle } from "lucide-react";

const features = [
  {
    title: "Tipagem Estática",
    description:
      "Define tipos para variáveis, parâmetros e retornos de funções, garantindo consistência no código.",
    icon: Type,
  },
  {
    title: "Intellisense Avançado",
    description:
      "Obtenha sugestões de código inteligentes e detecção de erros em tempo de desenvolvimento.",
    icon: Code,
  },
  {
    title: "Interfaces e Tipos",
    description:
      "Crie estruturas de dados reutilizáveis e organize melhor seu código com interfaces.",
    icon: Layout,
  },
  {
    title: "Compatível com JavaScript",
    description:
      "Todo código JavaScript válido também é TypeScript válido, facilitando a migração gradual.",
    icon: Circle,
  },
];

const Features = () => {
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

  return (
    <section id="features" className="py-24 bg-accent/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary scroll-reveal">
            Recursos
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl scroll-reveal">
            Por que usar TypeScript?
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed scroll-reveal">
            TypeScript oferece diversos recursos que tornam o desenvolvimento
            mais seguro e produtivo
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-6 flex flex-col items-center text-center space-y-4 scroll-reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="p-3 rounded-full bg-primary/10">
                <feature.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
