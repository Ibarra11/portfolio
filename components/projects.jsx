import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiGithub, FiGlobe } from "react-icons/fi";
import MOVIESPOT_IMG from "../public/moviespot.png";
import AUDIOPHILE_IMG from "../public/audiophile-2.png";
import WHEREINTHEWORLD_IMG from "../public/where-in-the-world.png";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-800 py-16 md:py-24 px-9">
      <div className="relative max-w-6xl mx-auto">
        <div className="relative text-center">
          <h2 className="text-4xl mb-12 text-center text-white">Projects</h2>
          <span className=" absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-5 h-2 bg-light-emerald w-16"></span>
        </div>
        {/* Start of MovieSpot */}
        <div className="relative grid grid-cols-3 items-center gap-6 mb-16 md:gap-9">
          <motion.div
            variants={variants}
            whileInView="visible"
            initial="hidden"
            viewport={{ amount: 0.4, once: true }}
            transition={{ duration: 0.4 }}
            className="col-span-3  w-full sm:w-3/4 mx-auto md:w-full md:mx-0 md:col-span-1 flex flex-col gap-2"
          >
            <h3 className="text-2xl mb-1 text-white text-center md:text-start">
              MovieSpot
            </h3>
            <p className=" text-light-grey mb-4 text-lg text-center md:text-start md:mb-1">
              MovieSpot is an entertainment web app showcasing the most popular
              Movies and TV-series.
            </p>
            <h4 className="hidden md:block text-white text-lg">Highlights</h4>
            <ul className="hidden space-y-1 md:block text-light-grey mb-4">
              <li className="flex items-center gap-2">
                <span
                  className=" h-1.5 w-1.5 bg-light-emerald rounded-full"
                  aria-hidden="true"
                ></span>
                <span>Authentication System</span>
              </li>
              <li className="flex items-center gap-2">
                <span
                  className=" h-1.5 w-1.5 bg-light-emerald rounded-full"
                  aria-hidden="true"
                ></span>
                <span>End to end typesafety</span>
              </li>
              <li className="flex items-center gap-2">
                <span
                  className=" h-1.5 w-1.5 bg-light-emerald rounded-full"
                  aria-hidden="true"
                ></span>
                <span>Protected Routes</span>
              </li>
            </ul>
            <div className="flex justify-center md:justify-start gap-4 mt-auto">
              <Link
                className="
                inline-flex bg-slate-900 text-white rounded-3xl  justify-center items-center px-5 h-12
                hover:bg-light-emerald focus:bg-light-emerald duration-200
                "
                href="/projects/moviespot"
              >
                View Details
              </Link>
              <Link
                className="flex items-center text-white px-4 h-12 duration-200 hover:text-light-emerald focus:text-light-emerald"
                href="https://flix-ibarra11.vercel.app/"
                target="_blank"
                aria-label="MovieSpot website"
              >
                <FiGlobe size={20} />
              </Link>
              <Link
                className="flex items-center text-white px-4 h-12 duration-200 hover:text-light-emerald focus:text-light-emerald"
                href="https://github.com/Ibarra11/Movie_App"
                target="_blank"
                aria-label="MovieSport github"
              >
                <FiGithub size={20} />
              </Link>
            </div>
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.4, once: true }}
            transition={{ duration: 0.4 }}
            className="relative h-80 md:h-96 row-start-1 md:row-start-auto col-span-3 md:col-span-2 overflow-hidden rounded-lg"
          >
            <Image
              src={MOVIESPOT_IMG}
              alt="a screenshot of the moviespots website"
              className=" object-cover object-top w-full h-full"
            />
          </motion.div>
        </div>
        {/* End of MovieSport */}
        {/* Start of AudioPhile */}
        <div className="relative  grid grid-cols-3 items-center gap-6 mb-16 md:gap-9">
          <motion.div
            variants={variants}
            whileInView="visible"
            initial="hidden"
            viewport={{ amount: 0.4, once: true }}
            transition={{ duration: 0.4 }}
            className="col-span-3  w-full sm:w-3/4 mx-auto md:w-full md:mx-0 md:col-span-1 flex flex-col gap-2"
          >
            <h3 className="text-2xl mb-1 text-white text-center md:text-start">
              Audiophile
            </h3>
            <p className=" text-light-grey mb-4 text-lg text-center md:text-start md:mb-1">
              Audiophile is a multi page ecommerce site for headphones.
            </p>
            <h4 className="hidden md:block text-white text-lg">Highlights</h4>{" "}
            <ul className="hidden md:block text-light-grey space-y-1 mb-4">
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
              <Link
                className="
                inline-flex bg-slate-900 text-white rounded-3xl  justify-center items-center px-5 h-12
                hover:bg-light-emerald focus:bg-light-emerald duration-200
                "
                href="/projects/audiophile"
              >
                View Details
              </Link>
              <Link
                className="flex items-center text-white px-4 h-12 duration-200 hover:text-light-emerald focus:text-light-emerald"
                href="https://audiophile-ruby.vercel.app/"
                target="_blank"
                aria-label="audiophile website"
              >
                <FiGlobe size={20} />
              </Link>
              <Link
                className="flex items-center text-white px-4 h-12 duration-200 hover:text-light-emerald focus:text-light-emerald"
                href="https://github.com/Ibarra11/audiophile"
                target="_blank"
                aria-label="audiophile github"
              >
                <FiGithub size={20} />
              </Link>
            </div>
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.4, once: true }}
            transition={{ duration: 0.4 }}
            className="relative h-80 md:h-96 row-start-1 md:row-start-auto col-span-3 md:col-span-2 overflow-hidden rounded-lg"
          >
            <Image
              src={AUDIOPHILE_IMG}
              alt="a screenshot of the audiophile website"
              className="object-cover object-top w-full h-full"
            />
          </motion.div>
        </div>
        {/* end of Audiophile */}
        {/* Start of Where in the world? */}
        <div className="relative grid grid-cols-3 items-center gap-6 mb-16 md:gap-9">
          <motion.div
            variants={variants}
            whileInView="visible"
            initial="hidden"
            viewport={{ amount: 0.4, once: true }}
            transition={{ duration: 0.4 }}
            className="col-span-3  w-full sm:w-3/4 mx-auto md:w-full md:mx-0 md:col-span-1 flex flex-col gap-2"
          >
            <h3 className="text-2xl mb-1 text-white text-center md:text-start">
              Where in the world?
            </h3>
            <p className=" text-light-grey mb-4 text-lg text-center md:text-start md:mb-1">
              Where in the world displays information about all the countries in
              the world provided by the REST countries API.
            </p>
            <h4 className="hidden md:block text-white text-lg">Highlights</h4>
            <ul className="hidden space-y-1 md:block text-light-grey mb-4">
              <li className="flex items-center gap-2">
                <span
                  className=" h-1.5 w-1.5 bg-light-emerald rounded-full"
                  aria-hidden="true"
                ></span>
                <span>Next.js 13</span>
              </li>
              <li className="flex items-center gap-2">
                <span
                  className=" h-1.5 w-1.5 bg-light-emerald rounded-full"
                  aria-hidden="true"
                ></span>
                <span>Server Components</span>
              </li>
              <li className="flex items-center gap-2">
                <span
                  className=" h-1.5 w-1.5 bg-light-emerald rounded-full"
                  aria-hidden="true"
                ></span>
                <span>Dark Mode / Light Mode</span>
              </li>
            </ul>
            <div className="flex justify-center md:justify-start gap-4 mt-auto">
              <Link
                className="
                inline-flex bg-slate-900 text-white rounded-3xl  justify-center items-center px-5 h-12
                hover:bg-light-emerald focus:bg-light-emerald duration-200
                "
                href="/projects/where-in-the-world"
              >
                View Details
              </Link>
              <Link
                className="flex items-center text-white px-4 h-12 duration-200 hover:text-light-emerald focus:text-light-emerald"
                href="https://rest-countries-hgak.vercel.app/"
                target="_blank"
                aria-label="where in the world website"
              >
                <FiGlobe size={20} />
              </Link>
              <Link
                className="flex items-center text-white px-4 h-12 duration-200 hover:text-light-emerald focus:text-light-emerald"
                href="https://github.com/Ibarra11/Rest_Countries"
                target="_blank"
                aria-label="where in the world github"
              >
                <FiGithub size={20} />
              </Link>
            </div>
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.4, once: true }}
            transition={{ duration: 0.4 }}
            className="relative h-80 md:h-96 row-start-1 md:row-start-auto col-span-3 md:col-span-2 overflow-hidden rounded-lg"
          >
            <Image
              src={WHEREINTHEWORLD_IMG}
              alt="a screenshot of the where in the world website"
              className="object-cover object-top w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
