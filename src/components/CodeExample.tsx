import { useState } from "react";
import { cn } from "@/lib/utils";

const CodeExample = () => {
  const [activeTab, setActiveTab] = useState(0);

  const examples = [
    {
      title: "Interfaces",
      description: "Defina contratos para seus objetos",
      code: `<span class="text-blue-500">interface</span> <span class="text-yellow-500">User</span> {
  <span class="text-teal-500">id</span>: <span class="text-blue-500">number</span>;
  <span class="text-teal-500">name</span>: <span class="text-blue-500">string</span>;
  <span class="text-teal-500">email</span>: <span class="text-blue-500">string</span>;
  <span class="text-teal-500">isActive</span>: <span class="text-blue-500">boolean</span>;
}

<span class="text-slate-400">// Usando a interface</span>
<span class="text-purple-500">function</span> <span class="text-yellow-400">createUser</span>(<span class="text-orange-400">user</span>: <span class="text-yellow-500">User</span>): <span class="text-yellow-500">User</span> {
  <span class="text-purple-500">return</span> user;
}

<span class="text-purple-500">const</span> <span class="text-orange-400">newUser</span>: <span class="text-yellow-500">User</span> = {
  <span class="text-teal-500">id</span>: <span class="text-green-500">1</span>,
  <span class="text-teal-500">name</span>: <span class="text-green-500">"João Silva"</span>,
  <span class="text-teal-500">email</span>: <span class="text-green-500">"joao@example.com"</span>,
  <span class="text-teal-500">isActive</span>: <span class="text-purple-500">true</span>
};</span>`,
    },
    {
      title: "Tipos Genéricos",
      description: "Crie componentes reutilizáveis",
      code: `<span class="text-slate-400">// Definindo um tipo genérico</span>
<span class="text-purple-500">function</span> <span class="text-yellow-400">identity</span>&lt;<span class="text-yellow-500">T</span>&gt;(<span class="text-orange-400">arg</span>: <span class="text-yellow-500">T</span>): <span class="text-yellow-500">T</span> {
  <span class="text-purple-500">return</span> arg;
}

<span class="text-slate-400">// Chamando com tipos diferentes</span>
<span class="text-purple-500">let</span> <span class="text-orange-400">stringOutput</span> = <span class="text-yellow-400">identity</span>&lt;<span class="text-blue-500">string</span>&gt;(<span class="text-green-500">"Olá"</span>);
<span class="text-purple-500">let</span> <span class="text-orange-400">numberOutput</span> = <span class="text-yellow-400">identity</span>&lt;<span class="text-blue-500">number</span>&gt;(<span class="text-green-500">42</span>);

<span class="text-slate-400">// TypeScript também infere o tipo</span>
<span class="text-purple-500">let</span> <span class="text-orange-400">inferredOutput</span> = <span class="text-yellow-400">identity</span>(<span class="text-green-500">"TypeScript"</span>);</span>`,
    },
    {
      title: "Enum",
      description: "Defina conjuntos de constantes nomeadas",
      code: `<span class="text-slate-400">// Definindo um enum para dias da semana</span>
<span class="text-blue-500">enum</span> <span class="text-yellow-500">DiaDaSemana</span> {
  <span class="text-teal-500">Domingo</span>,
  <span class="text-teal-500">Segunda</span>,
  <span class="text-teal-500">Terca</span>,
  <span class="text-teal-500">Quarta</span>,
  <span class="text-teal-500">Quinta</span>,
  <span class="text-teal-500">Sexta</span>,
  <span class="text-teal-500">Sabado</span>
}

<span class="text-slate-400">// Usando o enum</span>
<span class="text-purple-500">let</span> <span class="text-orange-400">dia</span>: <span class="text-yellow-500">DiaDaSemana</span> = <span class="text-yellow-500">DiaDaSemana</span>.<span class="text-teal-500">Segunda</span>;
<span class="text-yellow-400">console</span>.<span class="text-yellow-400">log</span>(dia); <span class="text-slate-400">// Saída: 1</span>

<span class="text-slate-400">// Enums podem ter valores personalizados</span>
<span class="text-blue-500">enum</span> <span class="text-yellow-500">StatusHttp</span> {
  <span class="text-teal-500">OK</span> = <span class="text-green-500">200</span>,
  <span class="text-teal-500">NotFound</span> = <span class="text-green-500">404</span>,
  <span class="text-teal-500">ServerError</span> = <span class="text-green-500">500</span>
}</span>`,
    },
  ];

  return (
    <section id="examples" className="py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary scroll-reveal">
            Exemplos
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl scroll-reveal">
            TypeScript na prática
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed scroll-reveal">
            Veja exemplos de como TypeScript melhora seu código
          </p>
        </div>

        <div className="mx-auto max-w-4xl border rounded-xl overflow-hidden bg-white shadow-sm">
          <div className="flex border-b">
            {examples.map((example, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors",
                  activeTab === index
                    ? "border-b-2 border-primary text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {example.title}
              </button>
            ))}
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">
              {examples[activeTab].title}
            </h3>
            <p className="text-muted-foreground mb-4">
              {examples[activeTab].description}
            </p>
            <pre className="code-block bg-[#1e1e1e] rounded-lg p-4 overflow-x-auto">
              <div
                dangerouslySetInnerHTML={{ __html: examples[activeTab].code }}
              />
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeExample;
