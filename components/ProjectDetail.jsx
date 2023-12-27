import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { FiGithub, FiGlobe } from "react-icons/fi";

export default function WhereInTheWorld({
  title,
  img,
  url,
  github,
  description,
  stack,
  learned,
}) {
  return (
    <article className="flex-1 pt-16 pb-8 px-9 bg-slate-800">
      <Head>
        <title>{title}</title>
      </Head>

      <div className="max-w-4xl mx-auto pt-9">
        <div className="relative h-96 shadow-lg">
          <Image
            className="object-cover object-top rounded-lg"
            layout="fill"
            src={img}
            alt={`${title} website screenshot`}
          />
        </div>
        <section className="mb-8">
          <div className="relative">
            <h1 className="text-5xl text-gray-100 text-center mb-14 mt-9 sm:mb-9">
              {title}
            </h1>
            <div className="absolute text-gray-300 flex items-center top-full left-1/2 -translate-x-1/2  sm:left-auto sm:h-full sm:top-0 sm:bottom-auto sm:translate-y-0 sm:translate-x-0  sm:right-0">
              <Link
                aria-label={`website`}
                className={clsx(
                  "flex ml-auto items-center  px-4 h-12 duration-200 outline-none",
                  "hover:text-light-emerald",
                  "focus:text-light-emerald focus:ring-light-emerald focus:ring-4"
                )}
                href={url}
                target="_blank"
              >
                <FiGlobe size={20} />
              </Link>
              <Link
                aria-label={`github`}
                className={clsx(
                  "flex ml-auto items-center  px-4 h-12 duration-200 outline-none",
                  "hover:text-light-emerald",
                  "focus:text-light-emerald focus:ring-light-emerald focus:ring-4"
                )}
                href={github}
                target="_blank"
              >
                <FiGithub size={20} />
              </Link>
            </div>
          </div>
          <p className="text-lg text-gray-300">{description}</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl text-gray-100 mb-4">Built With</h2>
          <ul className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <li
                key={tech}
                className=" bg-slate-900 text-gray-300 p-2 rounded-lg"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl text-gray-100 mb-6">What I Learned</h2>
          {learned.map((item) => (
            <div key={item.title} className="mb-4">
              <h3 className="text-xl text-gray-100 mb-3">{item.title}</h3>
              {item.content.map((content, i) => (
                <p
                  dangerouslySetInnerHTML={{ __html: content }}
                  key={i}
                  className="text-base text-gray-300 mb-4"
                />
              ))}
            </div>
          ))}
        </section>
      </div>
    </article>
  );
}
