import { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import CodeExample from "../components/CodeExample";
import WhyTypeScript from "../components/WhyTypeScript";
import Footer from "../components/Footer";
import TypeScriptInfo from "@/components/TypeScriptInfo";

const Index = () => {
  useEffect(() => {
    document.title = "TypeScript | Linguagem de Programação";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <CodeExample />
        <TypeScriptInfo />
        <WhyTypeScript />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
