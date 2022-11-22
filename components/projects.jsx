import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { FiGithub, FiGlobe } from "react-icons/fi";
export default function Projects() {
  const ref = useRef();
  const inView = useInView(ref, { amount: 0.5, once: true });
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    slideStart: { clipPath: "inset(0 100% 0 0 round 8px)" },
    slideEnd: { clipPath: "inset(0 0% 0 0 round 8px)" },
  };
  return (
    <section id="projects" className="bg-gray-800 py-16 md:py-24 px-9">
      <div className="relative max-w-6xl mx-auto">
        <div className="relative text-center">
          <h2 className="text-4xl mb-12 text-center text-white">Projects</h2>
          <span className=" absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-5 h-2 bg-light-emerald w-16"></span>
        </div>
        {/* Start of MovieSpot */}
        <div className="relative grid grid-cols-3 gap-6 md:gap-9 mb-16">
          <div className="col-span-3 w-full sm:w-3/m-4 mx-auto md:w-full md:mx-0   md:col-span-1 flex flex-col gap-2">
            <h3 className="text-2xl text-white text-center md:text-start">
              Movie Spot
            </h3>
            <p className=" text-light-grey mb-4 text-lg text-center md:text-start md:mb-0">
              MovieSpot is an entertainment web app showcasing the most popular
              Movies and TV-series.
            </p>
            <h4 className="hidden md:block text-white text-lg">Features</h4>
            <ul className="hidden md:block text-light-grey">
              <li className="flex items-center gap-2">
                <span
                  className=" h-1.5 w-1.5 bg-light-emerald rounded-full"
                  aria-hidden="true"
                ></span>
                <span>Authentication</span>
              </li>
              <li className="flex items-center gap-2">
                <span
                  className=" h-1.5 w-1.5 bg-light-emerald rounded-full"
                  aria-hidden="true"
                ></span>
                <span>Users can filter movies by keyword</span>
              </li>
              <li className="flex items-center gap-2">
                <span
                  className=" h-1.5 w-1.5 bg-light-emerald rounded-full"
                  aria-hidden="true"
                ></span>
                <span>Users can bookmark movies</span>
              </li>
            </ul>
            <div className="flex justify-center md:justify-start gap-4 mt-auto">
              <Link href="/projects/moviespot">
                <a
                  className="
                inline-flex bg-slate-900 text-white rounded-3xl  justify-center items-center px-5 h-12
                hover:bg-light-emerald focus:bg-light-emerald duration-200
                "
                >
                  View Details
                </a>
              </Link>
              <Link href="https://flix-ibarra11.vercel.app/">
                <a className="flex items-center text-white px-4 h-12 duration-200 hover:text-light-emerald focus:text-light-emerald">
                  <FiGlobe size={20} />
                </a>
              </Link>
              <Link href="https://github.com/Ibarra11/Movie_App">
                <a className="flex items-center  text-white x-4 h-12 duration-200 hover:text-light-emerald focus:text-light-emerald">
                  <FiGithub size={20} />
                </a>
              </Link>
            </div>
          </div>
          <motion.div
            // ref={ref}
            // style={{
            //   // opacity: inView ? 1 : 0,
            //   scaleX: inView ? 1 : 0,
            // }}
            // initial={["hidden", "slideStart"]}
            // whileInView={["visible", "slideEnd"]}
            // transition={{ type: "spring", duration: 1 }}
            // viewport={{ amount: 0.5 }}
            // variants={variants}
            className="relative h-80 row-start-1 md:row-start-auto  col-span-3 md:col-span-2  rounded-lg overflow-hidden"
          >
            <Image
              src={"/moviespot.png"}
              alt="a screenshot of the moviespots website"
              layout="fill"
              className="object-cover object-top  "
            />
          </motion.div>
        </div>
        {/* End of MovieSport */}
        {/* Start of AudioPhile */}
        <div className="relative grid grid-cols-3 gap-6 md:gap-9 mb-16">
          <div className="col-span-3 w-full sm:w-3/m-4 mx-auto md:w-full md:mx-0   md:col-span-1 flex flex-col gap-2">
            <h3 className="text-2xl text-white text-center md:text-start">
              Audiophile
            </h3>
            <p className=" text-light-grey mb-4 text-lg text-center md:text-start md:mb-0">
              Audiophile is a multi page ecommerce site for headphones.
            </p>
            <h4 className="hidden md:block text-white text-lg">Features</h4>
            <ul className="hidden md:block text-light-grey">
              <li className="flex items-center gap-2">
                <span
                  className=" h-1.5 w-1.5 bg-light-emerald rounded-full"
                  aria-hidden="true"
                ></span>
                <span>Shopping Cart</span>
              </li>
              <li className="flex items-center gap-2">
                <span
                  className=" h-1.5 w-1.5 bg-light-emerald rounded-full"
                  aria-hidden="true"
                ></span>
                <span>Checkout Process</span>
              </li>
              <li className="flex items-center gap-2">
                <span
                  className=" h-1.5 w-1.5 bg-light-emerald rounded-full"
                  aria-hidden="true"
                ></span>
                <span>Page Animations</span>
              </li>
            </ul>
            <div className="flex justify-center md:justify-start gap-4 mt-auto">
              <Link href="/projects/audiophile">
                <a
                  className="
                inline-flex bg-slate-900 text-white rounded-3xl  justify-center items-center px-5 h-12
                hover:bg-light-emerald focus:bg-light-emerald duration-200
                "
                >
                  View Details
                </a>
              </Link>
              <Link href="https://audiophile-ruby.vercel.app/">
                <a className="flex items-center text-white px-4 h-12 duration-200 hover:text-light-emerald focus:text-light-emerald">
                  <FiGlobe size={20} />
                </a>
              </Link>
              <Link href="https://github.com/Ibarra11/audiophile">
                <a className="flex items-center  text-white x-4 h-12 duration-200 hover:text-light-emerald focus:text-light-emerald">
                  <FiGithub size={20} />
                </a>
              </Link>
            </div>
          </div>
          <motion.div
            // ref={ref}
            // style={{
            //   // opacity: inView ? 1 : 0,
            //   scaleX: inView ? 1 : 0,
            // }}
            // initial={["hidden", "slideStart"]}
            // whileInView={["visible", "slideEnd"]}
            // transition={{ type: "spring", duration: 1 }}
            // viewport={{ amount: 0.5 }}
            // variants={variants}
            className="relative h-80 row-start-1 md:row-start-auto  col-span-3 md:col-span-2  rounded-lg overflow-hidden"
          >
            <Image
              src={"/audiophile-2.png"}
              alt="a screenshot of the audiophile website"
              className=" object-cover object-top"
              layout="fill"
            />
          </motion.div>
        </div>
        {/* end of Audiophile */}
        {/* Start of Where in the world? */}
        <div className="relative grid grid-cols-3 gap-6 md:gap-9">
          <div className="col-span-3 w-full sm:w-3/m-4 mx-auto md:w-full md:mx-0   md:col-span-1 flex flex-col gap-2">
            <h3 className="text-2xl text-white text-center md:text-start">
              Where in the world?
            </h3>
            <p className=" text-light-grey mb-4 text-lg text-center md:text-start md:mb-0">
              Where in the world text
            </p>
            <h4 className="hidden md:block text-white text-lg">Features</h4>
            <ul className="hidden md:block text-light-grey">
              <li className="flex items-center gap-2">
                <span
                  className=" h-1.5 w-1.5 bg-light-emerald rounded-full"
                  aria-hidden="true"
                ></span>
                <span>Shopping Cart</span>
              </li>
              <li className="flex items-center gap-2">
                <span
                  className=" h-1.5 w-1.5 bg-light-emerald rounded-full"
                  aria-hidden="true"
                ></span>
                <span>Checkout Process</span>
              </li>
              <li className="flex items-center gap-2">
                <span
                  className=" h-1.5 w-1.5 bg-light-emerald rounded-full"
                  aria-hidden="true"
                ></span>
                <span>Page Animations</span>
              </li>
            </ul>
            <div className="flex justify-center md:justify-start gap-4 mt-auto">
              <Link href="/projects/where-in-the-world">
                <a
                  className="
                inline-flex bg-slate-900 text-white rounded-3xl  justify-center items-center px-5 h-12
                hover:bg-light-emerald focus:bg-light-emerald duration-200
                "
                >
                  View Details
                </a>
              </Link>
              <Link href="https://rest-countries-hgak.vercel.app/">
                <a className="flex items-center text-white px-4 h-12 duration-200 hover:text-light-emerald focus:text-light-emerald">
                  <FiGlobe size={20} />
                </a>
              </Link>
              <Link href="https://github.com/Ibarra11/Rest_Countries">
                <a className="flex items-center  text-white x-4 h-12 duration-200 hover:text-light-emerald focus:text-light-emerald">
                  <FiGithub size={20} />
                </a>
              </Link>
            </div>
          </div>
          <motion.div
            // ref={ref}
            // style={{
            //   // opacity: inView ? 1 : 0,
            //   scaleX: inView ? 1 : 0,
            // }}
            // initial={["hidden", "slideStart"]}
            // whileInView={["visible", "slideEnd"]}
            // transition={{ type: "spring", duration: 1 }}
            // viewport={{ amount: 0.5 }}
            // variants={variants}
            className="relative h-80 row-start-1 md:row-start-auto  col-span-3 md:col-span-2  rounded-lg overflow-hidden"
          >
            <Image
              src={"/country_grid3.png"}
              alt="a screenshot of the where in the world website"
              className="object-cover  "
              layout="fill"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
