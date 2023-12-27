"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import Profile_Img from "../public/headshot.jpeg";
const variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export default function Landing() {
  return (
    <section
      id="home"
      className="h-screen  bg-slate-900 flex items-center px-9 "
    >
      <div className="flex  flex-col-reverse gap-8 items-center max-w-6xl mx-auto md:gap-0  md:flex-row md:justify-between ">
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.4 }}
          className="  flex flex-col w-full sm:w-3/4  md:w-1/2 text-center md:text-start"
        >
          <h3 className=" text-light-emerald text-xl font-medium md:text-2xl mb-2">
            Software Developer
          </h3>
          <h1 className="text-white text-5xl font-semibold  md:text-6xl mb-2 ">
            Alan Ibarra
          </h1>
          <p className="text-lg md:text-xl text-light-grey mb-4">
            Being able to take ideas and bring them to life is one of the most
            rewarding feelings
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Link
              className="group ring-0 relative border-2 border-light-emerald p-3 cursor-pointer outline-none"
              aria-label="linkedin"
              href="https://www.linkedin.com/in/alanjibarra/"
              target="_blank"
            >
              <span
                className="absolute top-0 left-0  bg-light-emerald  h-full w-full scale-x-0 origin-left duration-150 group-hover:scale-x-100  group-hover:duration-300 group-focus:scale-x-100 group-focus:duration-300
                  "
              ></span>
              <FaLinkedinIn
                className="relative z-10 text-white  duration-75 group-hover:text-black  group-hover:duration-100 group-hover:delay-150 group-focus:text-black group-focus:duration-100 group-focus:delay-150 "
                size={24}
              />
            </Link>
            <Link
              className="group relative border-2 border-light-emerald p-3 cursor-pointer outline-none"
              aria-label="github"
              href="https://github.com/Ibarra11"
            >
              <span
                className="absolute  top-0 left-0  bg-light-emerald  h-full w-full scale-x-0 origin-left duration-150 group-hover:scale-x-100  group-hover:duration-300 group-focus:scale-x-100 group-focus:duration-300
                  "
              ></span>
              <FiGithub
                className="relative z-10 text-white  duration-75 group-hover:text-black  group-hover:duration-100 group-hover:delay-150 group-focus:text-black group-focus:duration-100 group-focus:delay-150 "
                size={24}
              />
            </Link>
          </div>
        </motion.div>
        <div
          initial="initial"
          animate="animate"
          variants={variants}
          transition={{ duration: 0.4 }}
          className="relative w-60 h-60 p-0  md:w-80 md:h-80 md:ml-auto rounded-full border-8  overflow-hidden border-light-emerald"
        >
          <Image
            className="w-full h-full object-cover"
            src={Profile_Img}
            alt="profile picture"
          />
        </div>
      </div>
    </section>
  );
}
