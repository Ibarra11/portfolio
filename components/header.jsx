import Link from "next/link";
import { useRouter } from "next/router";
export default function Header() {
  const router = useRouter();
  return (
    <header
      id="header"
      className="bg-black backdrop-blur-lg backdrop-filter fixed top-0  w-full z-20 opacity-90 h-16 duration-200 origin-top"
    >
      <nav className=" h-full">
        <ul className="h-full max-w-6xl mx-auto flex items-center text-light-grey">
          <li>
            <Link
              href={`${router.pathname === "/" ? "#home" : "/#home"}`}
              scroll={false}
            >
              <a className="p-3 pl-0">Logo</a>
            </Link>
          </li>
          <div className="ml-auto flex gap-8">
            <li>
              <Link
                href={`${router.pathname === "/" ? "#home" : "/#home"}`}
                scroll={false}
              >
                <a className="p-3">Home</a>
              </Link>
            </li>
            <li>
              <Link
                href={`${router.pathname === "/" ? "#about" : "/#about"}`}
                scroll={false}
              >
                <a className="p-3">About Me</a>
              </Link>
            </li>

            <li>
              <Link
                href={`${router.pathname === "/" ? "#projects" : "/#projects"}`}
                scroll={false}
              >
                <a className="p-3">Projects</a>
              </Link>
            </li>
            <li>
              <Link
                href={`${router.pathname === "/" ? "#contact" : "/#contact"}`}
                scroll={false}
              >
                <a className="p-3">Contact</a>
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
