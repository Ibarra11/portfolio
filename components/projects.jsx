import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Audiophile_img from "../public/audiophile.png";
import Moviespot_img from "../public/moviespot.png";
import { FiGithub, FiGlobe } from "react-icons/fi";
export default function Projects() {
  const ref = useRef();
  const inView = useInView(ref, { amount: 0.5, once: true });
  console.log(inView);
  // bg - slate - 800;
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    slideStart: { clipPath: "inset(0 100% 0 0 round 8px)" },
    slideEnd: { clipPath: "inset(0 0% 0 0 round 8px)" },
  };
  return (
    <section id="projects" className=" bg-slate-800 py-24">
      <div className="relative max-w-6xl mx-auto">
        <div className=" relative text-center">
          <h2 className="text-4xl mb-12  text-center text-white">Projects</h2>
          <span className=" absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-5 h-2 bg-dark-emerald w-16"></span>
        </div>
        <div className="grid grid-cols-3 gap-x-9 h-80 mb-16">
          <div className="col-span-1 flex flex-col gap-2">
            <h3 className="text-2xl text-white">Movie Spot</h3>
            <p className=" text-light-grey text-lg">
              MovieSpot is an entertainment web app showcasing the most popular
              Movies and TV-series.
            </p>

            <h4 className="text-white text-lg">Features</h4>
            <ul className=" text-light-grey">
              <li className="flex items-center gap-2">
                <span
                  className=" h-1.5 w-1.5 bg-dark-emerald rounded-full"
                  aria-hidden="true"
                ></span>
                <span>Authentication</span>
              </li>
              <li className="flex items-center gap-2">
                <span
                  className=" h-1.5 w-1.5 bg-dark-emerald rounded-full"
                  aria-hidden="true"
                ></span>
                <span>Account Creation</span>
              </li>
              <li className="flex items-center gap-2">
                <span
                  className=" h-1.5 w-1.5 bg-dark-emerald rounded-full"
                  aria-hidden="true"
                ></span>
                <span>Data Persistence</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-auto">
              <Link href="/projects/moviespot">
                <a
                  className="
                inline-flex bg-slate-900 text-white rounded-3xl  justify-center items-center px-5 h-12
                hover:bg-dark-emerald focus:bg-dark-emerald duration-200
                "
                >
                  View Details
                </a>
              </Link>
              <Link href="https://flix-ibarra11.vercel.app/">
                <a className="flex items-center text-white px-4 h-12 duration-200 hover:text-dark-emerald focus:text-dark-emerald">
                  <FiGlobe size={20} />
                </a>
              </Link>
              <Link href="https://github.com/Ibarra11/Movie_App">
                <a className="flex items-center  text-white x-4 h-12 duration-200 hover:text-dark-emerald focus:text-dark-emerald">
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
            className="group isolate relative  col-span-2 "
          >
            <Image
              src={Moviespot_img}
              alt="a screenshot of the moviespots website"
              layout="fill"
              className="object-cover rounded-lg "
            />
            <div
              className="
            absolute h-full w-full translate-x-4 translate-y-4 bg-dark-emerald opacity-75 -z-10 rounded-lg
            group-hover:translate-x-0 group-hover:translate-y-0 duration-200 group-hover:duration-400
            "
            ></div>
          </motion.div>
        </div>
        <div className="grid grid-cols-3 gap-x-9 h-80">
          <div className="col-span-1 flex flex-col gap-2">
            <h3 className="text-2xl text-white">Audiophile</h3>
            <p className="text-light-grey text-lg">
              Audiophile is a multi page ecommerce site for headphones.
            </p>
            <h4 className="text-white text-lg">Features</h4>
            <ul className=" text-light-grey">
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
            <div className="flex gap-4 mt-auto">
              <Link href="/projects/audiophile">
                <a
                  className="
                inline-flex bg-slate-900 text-white rounded-3xl  justify-center items-center px-5 h-12
                hover:bg-dark-emerald focus:bg-dark-emerald duration-200
                "
                >
                  View Details
                </a>
              </Link>

              <button className=" text-white  px-4 h-12 duration-200 hover:text-dark-emerald focus:text-dark-emerald">
                <FiGlobe size={20} />
              </button>
              <button className="text-white    px-4 h-12 duration-200 hover:text-dark-emerald focus:text-dark-emerald">
                <FiGithub size={20} />
              </button>
            </div>
          </div>
          <div className="group relative col-span-2 isolate">
            <Image
              src={Audiophile_img}
              alt="a screenshot of the audiophile website"
              className="object-cover rounded-lg"
              layout="fill"
            />
            <div
              className="
            absolute h-full w-full translate-x-4 translate-y-4 bg-dark-emerald opacity-75 -z-10 rounded-lg
            group-hover:translate-x-0 group-hover:translate-y-0 duration-200 group-hover:duration-400
            "
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
