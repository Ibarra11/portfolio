"use client";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation";
import clsx from "clsx";

import { FiGithub, FiGlobe, FiArrowLeft } from "react-icons/fi";

export default function ProjectDetail({
  title,
  img,
  url,
  github,
  description,
  stack,
  learned,
}) {
  const router = useRouter();

  return (
    <article className="max-w-4xl mx-auto">
      <button
        className="group flex items-center gap-2 text-slate-300 mb-4 outline-none focus:ring-2 focus:ring-light-emerald"
        onClick={() => router.back()}
      >
        <FiArrowLeft
          className="group-hover:-translate-x-2 transition-transform"
          size={16}
        />
        <span className=" group-hover:underline group-hover:underline-offset-4 group-hover:decoration-light-emerald">
          Go Back
        </span>
      </button>
      <div>
        <div className="relative h-52  md:h-96 shadow-lg">
          <Image
            className="object-cover object-top rounded-lg"
            layout="fill"
            src={img}
            alt={`${title} website screenshot`}
          />
        </div>
        <section className="mb-8">
          <div className="relative">
            <h1 className=" text-2xl lg:text-5xl text-gray-100 text-center mb-14 mt-9 sm:mb-9">
              {title}
            </h1>
            <div className="absolute text-gray-300 flex items-center top-full left-1/2 -translate-x-1/2  sm:left-auto sm:h-full sm:top-0 sm:bottom-auto sm:translate-y-0 sm:translate-x-0  sm:right-0">
              <a
                aria-label={`${title} website`}
                className={clsx(
                  "flex ml-auto items-center  px-4 h-12 duration-200 outline-none",
                  "hover:text-light-emerald",
                  "focus:text-light-emerald focus:ring-light-emerald focus:ring-4"
                )}
                href={url}
                target="_blank"
              >
                <FiGlobe size={20} />
              </a>
              <a
                aria-label={`${title} github`}
                className={clsx(
                  "flex ml-auto items-center  px-4 h-12 duration-200 outline-none",
                  "hover:text-light-emerald",
                  "focus:text-light-emerald focus:ring-light-emerald focus:ring-4"
                )}
                href={github}
                target="_blank"
              >
                <FiGithub size={20} />
              </a>
            </div>
          </div>
          <p className="text-base  lg:text-lg text-gray-300">{description}</p>
        </section>
        <section className="mb-8">
          <h2 className=" text-lg lg:text-2xl text-gray-100 mb-4">
            Built With
          </h2>
          <ul className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <li
                key={tech}
                className="bg-slate-900 text-gray-300 p-2 rounded-lg"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-lg lg:text-2xl text-gray-100 mb-6">
            What I Learned
          </h2>
          {learned.map((item) => (
            <div key={item.title} className="mb-4">
              <h3 className=" text-base lg:text-xl text-gray-100 mb-3">
                {item.title}
              </h3>
              {item.content.map((content, i) => (
                <p
                  dangerouslySetInnerHTML={{ __html: content }}
                  key={i}
                  className="text-sm lg:text-base text-gray-300"
                />
              ))}
            </div>
          ))}
        </section>
      </div>
    </article>
  );
}
