import clsx from "clsx";
import { motion } from "framer-motion";

import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiGraphql,
  SiPrisma,
  SiCypress,
  SiReact,
} from "react-icons/si";

const variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const SkillsGridContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const SkillItem = {
  initial: { opacity: 0, x: -12 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120 },
  },
};

export default function About() {
  return (
    <section id="about" className="bg-gray-100 py-16 md:py-24 px-9">
      <motion.div
        whileInView="animate"
        transition={{ duration: 0.4 }}
        initial="initial"
        viewport={{ amount: 0.4, once: true }}
        variants={variants}
        className=" max-w-6xl mx-auto"
      >
        <div className="relative text-center mb-12">
          <h2 className="text-4xl text-gray-700 mb-12 text-center">About</h2>
          <span className="absolute  left-1/2 bottom-0 -translate-x-1/2 translate-y-5 h-2 bg-light-emerald w-16"></span>
        </div>
        <div className="grid grid-cols-4 gap-12 mt-16">
          <div className={clsx("col-span-4", "lg:col-span-2")}>
            <h3 className="text-2xl text-gray-700  mb-6">Get to Know Me</h3>
            <p className="text-lg text-dark-grey mb-3">
              Hi, my name is Alan Ibarra, a frontend developer with experience
              in building interactive, typesafe, and accessible web
              applications. I have a strong background in a variety of languages
              and frameworks, such as JavaScript, React, TypeScript, and
              HTML/CSS. I pride myself in always trying to improve my skills and
              keep up with the latest trends in web development, in order to
              provide inclusive and engaging user experiences.
            </p>
            <p className="text-lg text-dark-grey">
              Aside from that, I am a first generation college graduate having
              graduated from CSU Stanislaus in the year 2018 with a bachelors of
              Computer Science. Outside of programming some of my hobbies
              include weightlifting and watching documentaries.
            </p>
          </div>
          <div className={clsx("col-span-4 text-gray-700", "lg:col-span-2")}>
            <h3 className=" text-2xl mb-6">My Skills</h3>
            <motion.div
              whileInView="animate"
              viewport={{ amount: 0.6, once: true }}
              initial="initial"
              variants={SkillsGridContainer}
              className="grid grid-cols-4 gap-x-2 gap-y-4"
            >
              <motion.div
                variants={SkillItem}
                className="flex flex-col gap-2 p-2 border-2 border-gray-200 shadow-md rounded-lg items-center"
              >
                <SiReact size={36} />
                <span className="text-base">React</span>
              </motion.div>
              <motion.div
                variants={SkillItem}
                className="flex flex-col  gap-2 p-2 shadow-md border-2 border-gray-200 rounded-lg items-center"
              >
                <SiNextdotjs size={36} />
                <span className="text-base">Next.js</span>
              </motion.div>
              <motion.div
                variants={SkillItem}
                className="flex flex-col  gap-2 p-2 shadow-md border-2 border-gray-200 rounded-lg items-center"
              >
                <SiTypescript size={36} />
                <span className="text-base">TypeScript</span>
              </motion.div>
              <motion.div
                variants={SkillItem}
                className="flex flex-col  gap-2 p-2 shadow-md border-2 border-gray-200 rounded-lg items-center"
              >
                <SiJavascript size={36} />
                <span className="text-base">JavaScript</span>
              </motion.div>
              <motion.div
                variants={SkillItem}
                className="flex flex-col  gap-2 p-2 shadow-md border-2 border-gray-200 rounded-lg items-center"
              >
                <SiTailwindcss size={36} />
                <span className="text-base">Tailwind</span>
              </motion.div>
              <motion.div
                variants={SkillItem}
                className="flex flex-col  gap-2 p-2 shadow-md border-2 border-gray-200 rounded-lg items-center"
              >
                <SiCypress size={36} />
                <span className="text-base">Cypress</span>
              </motion.div>
              <motion.div
                variants={SkillItem}
                className="flex flex-col  gap-2 p-2 shadow-md border-2 border-gray-200 rounded-lg items-center"
              >
                <SiGraphql size={36} />
                <span className="text-base">GraphQL</span>
              </motion.div>
              <motion.div
                variants={SkillItem}
                className="flex flex-col  gap-2 p-2 shadow-md border-2 border-gray-200 rounded-lg items-center"
              >
                <SiPrisma size={36} />
                <span className="text-base">Prisma</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
