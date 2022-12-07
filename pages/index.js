import Head from "next/head";
import Landing from "../components/landing";
import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";

export default function Home() {
  return (
    <div className="flex-1">
      <Head>
        <title>Alan Ibarra&apos;s Portfolio</title>
      </Head>
      <Landing />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
