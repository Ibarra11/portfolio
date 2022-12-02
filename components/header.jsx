import { useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import brand from "../public/brand.png";
export default function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header
      id="header"
      className={`
      fixed top-0 px-9  z-20 bg-black opacity-95 border-b-2 border-b-light-emerald
      ${isOpen ? "modal" : "inset-x-0"}
      `}
    >
      <AnimatePresence>
        {isOpen && <MobileMenu isOpen={isOpen} handleOpenChange={setIsOpen} />}
      </AnimatePresence>
      <nav className="h-16">
        <ul className="h-full max-w-6xl mx-auto flex items-center text-gray-200">
          <li>
            <Link
              href={`${router.pathname === "/" ? "#home" : "/#home"}`}
              scroll={false}
            >
              <a
                id="logo"
                className="relative inline-flex items-center h-8 w-40 outline-none  focus:ring-4  focus:ring-light-emerald"
              >
                <Image src={brand} alt="home page" layout="fill" />
              </a>
            </Link>
          </li>
          {/* Hamburger Menu */}
          <div className="ml-auto md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="text-gray-300 hover:text-light-emerald duration-200 outline-none  focus:ring-4  focus:ring-light-emerald"
            >
              <FiMenu size={24} />
            </button>
          </div>
          <div className="ml-auto hidden md:flex md:gap-8 ">
            <li>
              <Link
                href={`${router.pathname === "/" ? "#home" : "/#home"}`}
                scroll={false}
              >
                <a className="p-3 hover:text-light-emerald duration-200 outline-none  focus:ring-4  focus:ring-light-emerald">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link
                href={`${router.pathname === "/" ? "#about" : "/#about"}`}
                scroll={false}
              >
                <a className="p-3 hover:text-light-emerald duration-200 outline-none  focus:ring-4  focus:ring-light-emerald">
                  About Me
                </a>
              </Link>
            </li>

            <li>
              <Link
                href={`${router.pathname === "/" ? "#projects" : "/#projects"}`}
                scroll={false}
              >
                <a className="p-3 hover:text-light-emerald duration-200 outline-none  focus:ring-4  focus:ring-light-emerald">
                  Projects
                </a>
              </Link>
            </li>
            <li>
              <Link
                href={`${router.pathname === "/" ? "#contact" : "/#contact"}`}
                scroll={false}
              >
                <a className="p-3 hover:text-light-emerald duration-200 outline-none  focus:ring-4  focus:ring-light-emerald">
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
