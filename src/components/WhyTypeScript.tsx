import { useEffect } from "react";
import { Check } from "lucide-react";

const WhyTypeScript = () => {
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

    const elements = document.querySelectorAll(".scroll-reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: "Detecção de erros antecipada",
      description:
        "Identifique erros durante o desenvolvimento, não em produção.",
    },
    {
      title: "Melhor documentação",
      description: "Tipos servem como documentação viva e sempre atualizada.",
    },
    {
      title: "Trabalho em equipe aprimorado",
      description:
        "Facilita a colaboração em projetos grandes com múltiplos desenvolvedores.",
    },
  ];

  return (
    <section
      id="why"
      className="py-24 bg-gradient-to-b from-background to-accent/50"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary scroll-reveal">
              Por quê TypeScript?
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl scroll-reveal">
              Desenvolva com confiança
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed scroll-reveal">
              TypeScript permite que você escreva código mais confiável e de
              fácil manutenção, reduzindo erros em tempo de execução e
              melhorando a experiência de desenvolvimento.
            </p>
            <ul className="space-y-4 mt-6">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 scroll-reveal"
                >
                  <div className="rounded-full bg-primary/10 p-1">
                    <Check className="text-primary" size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative rounded-xl overflow-hidden shadow-lg max-w-[500px] scroll-reveal">
              <img
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
                alt="TypeScript code"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent flex items-end">
                <div className="p-6">
                  <p className="text-white text-sm md:text-base font-medium">
                    "TypeScript é JavaScript com superpoderes, proporcionando
                    uma experiência de desenvolvimento mais produtiva e códigos
                    mais confiáveis."
                  </p>
                  <p className="text-white/80 text-sm mt-2">
                    — Microsoft (criadores do TypeScript)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTypeScript;
