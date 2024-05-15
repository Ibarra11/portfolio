"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { FiGlobe, FiGithub } from "react-icons/fi";

FiGlobe;
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
export default function Project({
  title,
  description,
  highlights,
  detailPage,
  url,
  github,
  img,
}) {
  return (
    <>
      <motion.div
        variants={variants}
        whileInView="visible"
        initial="hidden"
        viewport={{ amount: 0.4, once: true }}
        transition={{ duration: 0.4 }}
        className="w-full sm:w-3/4 order-1 text-center lg:text-left lg:order-none mx-auto lg:w-[400px]"
      >
        <div className="mb-6 space-y-2 lg:space-y-4 lg:mb-4 ">
          <h3 className="text-xl lg:text-3xl  text-white">{title}</h3>
          <p className=" text-light-grey  text-base">{description}</p>
        </div>
        {/* <div className="hidden lg:block space-y-2 md:mb-6">
          <h4 className="text-white text-base lg:text-xl">Highlights</h4>
          <ul className="space-y-1 md:block text-light-grey mb-4">
            {highlights.map((highlight, i) => (
              <li key={i} className="flex items-center gap-2">
                <span
                  className=" h-1.5 w-1.5 bg-light-emerald rounded-full"
                  aria-hidden="true"
                ></span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div> */}
        <div className="flex justify-center lg:justify-start gap-2 lg:gap-4">
          <Link
            className={clsx(
              "text-sm   inline-flex bg-slate-900 text-white rounded-3xl justify-center items-center px-5 h-12 md:text-base outline-none duration-200",
              "hover:bg-light-emerald",
              "focus:bg-light-emerald"
            )}
            href={detailPage}
          >
            View Details
          </Link>
          <a
            className={clsx(
              "flex items-center text-white px-4 h-12 duration-200 outline-none ",
              "hover:text-light-emerald",
              "focus:text-light-emerald focus:ring-4 focus:ring-light-emerald"
            )}
            href={url}
            target="_blank"
            aria-label={`${title} website`}
          >
            <FiGlobe size={20} />
          </a>
          <a
            className={clsx(
              "flex items-center text-white px-4 h-12 duration-200 outline-none ",
              "hover:text-light-emerald",
              "focus:text-light-emerald focus:ring-4 focus:ring-light-emerald"
            )}
            href={github}
            target="_blank"
            aria-label={`${title} github`}
          >
            <FiGithub size={20} />
          </a>
        </div>
      </motion.div>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4, once: true }}
        transition={{ duration: 0.4 }}
        className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg lg:flex-1 md:w-3/4 md:mx-auto"
      >
        <Image
          fill={true}
          src={img}
          alt={`a screenshot of the ${img} website`}
          className=" object-cover object-top w-full h-full"
        />
      </motion.div>
    </>
  );
}
