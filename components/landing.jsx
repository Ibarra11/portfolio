import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { ImProfile } from "react-icons/im";
import Profile_Img from "../public/headshot.jpeg";
export default function Landing() {
  return (
    <section id="home" className="h-screen  bg-slate-900 flex items-center">
      <div className=" flex justify-between w-full max-w-6xl  mx-auto ">
        <motion.div
          transition={{ staggerChildren: 0.5 }}
          className=" flex flex-col w-1/2 "
        >
          <motion.h3
            initial={{ opacity: 0, translateY: 32 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className=" text-dark-emerald text-2xl mb-1"
          >
            Frontend Developer
          </motion.h3>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="text-white text-6xl mb-4 "
          >
            Alan Ibarra
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.3 }}
            className=" text-xl  text-light-grey"
          >
            Web development for me is not a hobby, but a passion. Being able to
            take ideas and bring them to life is one of the most rewarding
            feelings.
          </motion.p>
          <motion.div className="mt-auto flex gap-4">
            <Link href="/">
              <motion.a
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, transition: 0.2 }}
                className="group ring-0 relative border-2 border-dark-emerald p-3 cursor-pointer focus:ring-0 focus:ring-offset-0"
              >
                <span
                  className="absolute top-0 left-0  bg-dark-emerald  h-full w-full scale-x-0 origin-left duration-150 group-hover:scale-x-100  group-hover:duration-300 group-focus:scale-x-100 group-focus:duration-300
                  "
                ></span>
                <FaLinkedinIn
                  className="relative z-10 text-white  duration-75 group-hover:text-black  group-hover:duration-100 group-hover:delay-150 group-focus:text-black group-focus:duration-100 group-focus:delay-150 "
                  size={24}
                />
              </motion.a>
            </Link>

            <Link href="/">
              <motion.a
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, transition: 0.2 }}
                className="group relative border-2 border-dark-emerald p-3 cursor-pointer focus:ring-0 focus:ring-offset-0"
              >
                <span
                  className="absolute top-0 left-0  bg-dark-emerald  h-full w-full scale-x-0 origin-left duration-150 group-hover:scale-x-100  group-hover:duration-300 group-focus:scale-x-100 group-focus:duration-300
                  "
                ></span>
                <FiGithub
                  className="relative z-10 text-white  duration-75 group-hover:text-black  group-hover:duration-100 group-hover:delay-150 group-focus:text-black group-focus:duration-100 group-focus:delay-150 "
                  size={24}
                />
              </motion.a>
            </Link>
            {/* <Link href="/">
              <motion.a
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, transition: 0.2 }}
                className="group relative border-2 border-dark-emerald p-3 cursor-pointer "
              >
                <span
                  className="absolute top-0 left-0  bg-dark-emerald  h-full w-full scale-x-0 origin-left duration-150 group-hover:scale-x-100  group-hover:duration-300 group-focus:scale-x-100 group-focus:duration-300
                  "
                ></span>
                <ImProfile
                  className="relative z-10 text-white  duration-75 group-hover:text-black  group-hover:duration-100 group-hover:delay-150 group-focus:text-black group-focus:duration-100 group-focus:delay-150 "
                  size={24}
                />
              </motion.a>
            </Link> */}
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="relative w-80 h-80 ml-auto rounded-full border-8 p-2 overflow-hidden border-dark-emerald"
        >
          <Image
            layout="fill"
            className="object-cover"
            src={Profile_Img}
            alt="profile picture"
          />
        </motion.div>
      </div>
    </section>
  );
}
