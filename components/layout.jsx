import { createContext, useRef, forwardRef, useEffect } from "react";
import { useState } from "react";
import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  // const [currentSection, setCurrentSection] = useState("home");
  // const prevCurrSection = useRef(currentSection);
  // useEffect(() => {
  //   const header = document.querySelector("#header").getBoundingClientRect();
  //   const about = document.querySelector("#about").getBoundingClientRect();
  //   const projects = document
  //     .querySelector("#projects")
  //     .getBoundingClientRect();

  //   const aboutUpperBound = about.height + about.top - header.height;
  //   const aboutLowerBound = about.top - header.height;
  //   const projectsUpperBound = projects.height + projects.top - header.height;
  //   const projectsLowerBound = projects.top - header.height;

  //   window.addEventListener("scroll", (e) => {
  //     if (
  //       prevCurrSection.current !== "about" &&
  //       window.scrollY >= aboutLowerBound &&
  //       window.scrollY < aboutUpperBound
  //     ) {
  //       setCurrentSection((prevSection) => {
  //         prevCurrSection.current = prevSection;
  //         return "about";
  //       });
  //     } else if (
  //       prevCurrSection.current !== "projects" &&
  //       window.scrollY >= projectsLowerBound &&
  //       window.scrollY < projectsUpperBound
  //     ) {
  //       setCurrentSection((prevSection) => {
  //         prevCurrSection.current = prevSection;
  //         return "projects";
  //       });
  //     }
  //   });
  // }, [setCurrentSection]);

  useEffect(() => {
    const header = document.querySelector("#header");
    const logo = document.querySelector("#logo");
  }, []);
  return (
    <div className="min-h-full flex flex-col bg">
      <Header />

      <main className="flex flex-1 ">{children}</main>

      <Footer />
    </div>
  );
}
