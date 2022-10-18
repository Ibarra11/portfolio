import Link from "next/link";
export default function Header() {
  return (
    <header className="absolute  w-full">
      <nav className=" h-16 max-w-6xl mx-auto">
        <ul className="h-full flex items-center text-light-grey">
          <li>
            <Link href="#">
              <a className="p-3 pl-0">Logo</a>
            </Link>
          </li>
          <div className="ml-auto flex gap-8">
            <li>
              <Link href="#">
                <a className="p-3">Home</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="p-3">About Me</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="p-3">Skills</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="p-3">Projects</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="p-3">Contact</a>
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
