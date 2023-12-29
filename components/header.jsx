"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";

import MobileMenu from "./MobileMenu";
import brand from "../public/brand.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      id="header"
      className={`
      fixed top-0 inset-x-0 px-9  z-20 bg-black opacity-95 border-b-2 border-b-light-emerald`}
    >
      <AnimatePresence>
        {isOpen && <MobileMenu isOpen={isOpen} handleOpenChange={setIsOpen} />}
      </AnimatePresence>
      <nav className="h-16">
        <ul className="h-full max-w-6xl mx-auto flex items-center text-gray-200">
          <li>
            <a
              className="relative inline-flex items-center h-8 w-40 outline-none  focus:ring-4  focus:ring-dark-emerald"
              href="/"
            >
              <Image src={brand} alt="home page" className="w-full h-full" />
            </a>
          </li>
          {/* Hamburger Menu */}
          <li aria-label="open mobile menu" className="ml-auto md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="text-gray-300 hover:text-light-emerald duration-200 outline-none  focus:ring-4  focus:ring-light-emerald"
            >
              <FiMenu size={24} />
              <div className=" sr-only">open mobile menu</div>
            </button>
          </li>
          <li className="ml-auto hidden md:block ">
            <ul className="flex gap-8">
              <li>
                <a
                  className="p-3 hover:text-light-emerald duration-200 outline-none  focus:ring-4  focus:ring-light-emerald"
                  href="/#home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="p-3 hover:text-light-emerald duration-200 outline-none  focus:ring-4  focus:ring-light-emerald"
                  href="#about"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  className="p-3 hover:text-light-emerald duration-200 outline-none  focus:ring-4  focus:ring-light-emerald"
                  href="/#projects"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="p-3 hover:text-light-emerald duration-200 outline-none  focus:ring-4  focus:ring-light-emerald"
                  href="/#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
