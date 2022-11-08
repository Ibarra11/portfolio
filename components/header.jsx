import Link from "next/link";
import { useRouter } from "next/router";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Image from "next/image";
import brand from "../public/brand.png";
import headshot from "../public/headshot.jpeg";
export default function Header() {
  const router = useRouter();
  return (
    <header
      id="header"
      className="fixed h-16 top-0 w-full z-20 bg-black opacity-95 border-b-2 border-b-dark-emerald   "
    >
      <nav className="h-full">
        <ul className="h-full max-w-6xl mx-auto flex items-center text-light-grey">
          <li>
            <Link
              href={`${router.pathname === "/" ? "#home" : "/#home"}`}
              scroll={false}
            >
              <a
                id="logo"
                className="relative p-3 pl-0 text-base text-white inline-flex items-center h-8 w-40 hover:text-dark-emerald duration-200"
              >
                <Image src={brand} alt="home page" layout="fill" />
              </a>
            </Link>
          </li>
          <div className="ml-auto flex gap-8">
            <li>
              <Link
                href={`${router.pathname === "/" ? "#home" : "/#home"}`}
                scroll={false}
              >
                <a className="p-3 hover:text-dark-emerald duration-200">Home</a>
              </Link>
            </li>
            <li>
              <Link
                href={`${router.pathname === "/" ? "#about" : "/#about"}`}
                scroll={false}
              >
                <a className="p-3 hover:text-dark-emerald duration-200">
                  About Me
                </a>
              </Link>
            </li>

            <li>
              <Link
                href={`${router.pathname === "/" ? "#projects" : "/#projects"}`}
                scroll={false}
              >
                <a className="p-3 hover:text-dark-emerald duration-200">
                  Projects
                </a>
              </Link>
            </li>
            <li>
              <Link
                href={`${router.pathname === "/" ? "#contact" : "/#contact"}`}
                scroll={false}
              >
                <a className="p-3 hover:text-dark-emerald duration-200">
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
