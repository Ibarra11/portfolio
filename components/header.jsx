import { useEffect, useRef, useState, forwardRef } from "react";
import Link from "next/link";

function isCurrentSection(section, currentSection) {
  return section === currentSection ? " text-light-emerald" : "";
}
export default function Header({ currentSection }) {
  const navRef = useRef();
  // useEffect(() => {
  //   let previousScrollY = 0;
  //   const appearAt = window.innerHeight * 0.9;
  //   window.addEventListener("scroll", (e) => {
  //     const navHeight = navRef.current.offsetHeight;
  //     const direction = window.scrollY > previousScrollY ? "DOWN" : "UP";
  //     if (
  //       direction === "DOWN" &&
  //       window.scrollY > navHeight &&
  //       window.scrollY < appearAt
  //     ) {
  //       navRef.current.classList.remove("scale-y-100");
  //       navRef.current.classList.add("scale-y-0");
  //     } else if (direction === "DOWN" && window.scrollY > appearAt) {
  //       navRef.current.classList.add("scale-y-100");
  //     } else if (
  //       direction === "UP" &&
  //       window.scrollY < appearAt &&
  //       window.scrollY > navHeight
  //     ) {
  //       navRef.current.classList.remove("scale-y-100");
  //       navRef.current.classList.add("scale-y-0");
  //     } else if (direction === "UP" && window.scrollY < navHeight) {
  //       navRef.current.classList.remove("scale-y-0");
  //       navRef.current.classList.add("scale-y-100");
  //     }
  //     previousScrollY = window.scrollY;
  //   });
  // }, []);
  return (
    <header
      id="header"
      className="bg-black backdrop-blur-lg backdrop-filter fixed top-0  w-full z-20 opacity-90 h-16 duration-200 origin-top"
      ref={navRef}
    >
      <nav className=" h-full">
        <ul className="h-full max-w-6xl mx-auto flex items-center text-light-grey">
          <li>
            <Link href="#">
              <a className="p-3 pl-0">Logo</a>
            </Link>
          </li>
          <div className="ml-auto flex gap-8">
            <li>
              <Link href="#">
                <a className={`p-3${isCurrentSection("home", currentSection)}`}>
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a
                  className={`p-3${isCurrentSection("about", currentSection)}`}
                >
                  About Me
                </a>
              </Link>
            </li>
            {/* <li>
              <Link href="#">
                <a
                  className={`p-3${isCurrentSection("Skills", currentSection)}`}
                >
                  Skills
                </a>
              </Link>
            </li> */}
            <li>
              <Link href="#">
                <a
                  className={`p-3${isCurrentSection(
                    "projects",
                    currentSection
                  )}`}
                >
                  Projects
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a
                  className={`p-3${isCurrentSection(
                    "contact",
                    currentSection
                  )}`}
                >
                  Contact
                </a>
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
