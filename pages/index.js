import Head from "next/head";
import Landing from "../components/landing";
import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";

export default function Home() {
  return (
    <div className="flex-1">
      <Head>Alan Ibarra&apos;s Portfolio</Head>
      <Landing />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
