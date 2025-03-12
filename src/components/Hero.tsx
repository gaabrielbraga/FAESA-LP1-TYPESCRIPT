import { useEffect, useRef } from "react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    heroRef.current.classList.add("animate-fade-in");
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center py-16 pt-32 "
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                  TypeScript
                </span>
                <span className="block mt-2">JavaScript com superpoderes</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl mt-4">
                TypeScript é uma linguagem de programação fortemente tipada que
                se baseia em JavaScript, proporcionando melhores ferramentas em
                qualquer escala.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
              <a
                href="#info"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Explorar informações
              </a>
              <a
                href="#examples"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Ver exemplos
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-[500px] overflow-hidden rounded-xl bg-muted p-4">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent p-0.5 opacity-50 rounded-xl">
                <div className="h-full w-full rounded-[calc(0.75rem-1px)] bg-muted"></div>
              </div>
              <div className="relative z-10 p-4 h-full w-full">
                <pre className="code-block bg-[#1e1e1e] rounded-lg p-4 overflow-x-auto h-full w-full">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `<span class="text-slate-400">// JavaScript</span>
<span class="text-purple-500">function</span> <span class="text-yellow-400">greet</span>(<span class="text-orange-400">person</span>) {
  <span class="text-purple-500">return</span> <span class="text-green-500">"Hello, "</span> + person;
}

<span class="text-slate-400">// TypeScript</span>
<span class="text-purple-500">function</span> <span class="text-yellow-400">greet</span>(<span class="text-orange-400">person</span>: <span class="text-blue-500">string</span>): <span class="text-blue-500">string</span> {
  <span class="text-purple-500">return</span> <span class="text-green-500">"Hello, "</span> + person;
}

<span class="text-slate-400">// Erro de tipo capturado durante a compilação</span>
<span class="text-purple-500">let</span> <span class="text-orange-400">user</span> = [<span class="text-green-500">0</span>, <span class="text-green-500">1</span>, <span class="text-green-500">2</span>];
<span class="text-yellow-400">greet</span>(user); <span class="text-red-500">// Error!</span>`,
                    }}
                  />
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
