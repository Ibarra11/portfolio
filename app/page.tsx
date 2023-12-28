import Landing from "@/components/landing";
import About from "@/components/About";
import Projects from "@/components/Projects/";
import Contact from "@/components/contact";
import Header from "@/components/header";

function Home() {
  return (
    <>
      <Header />
      <main>
        <Landing />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default Home;
