"use client";
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

const SKILL_ICON = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Tailwind: SiTailwindcss,
  Cypress: SiCypress,
  GraphQL: SiGraphql,
  Prisma: SiPrisma,
};

const SKILLS = Object.keys(SKILL_ICON);

export default function About() {
  return (
    <section id="about" className="bg-gray-100 py-16 md:py-24 px-9">
      <motion.div
        whileInView="animate"
        transition={{ duration: 0.4 }}
        initial="initial"
        viewport={{ amount: 0.4, once: true }}
        variants={variants}
        className="max-w-6xl mx-auto space-y-12  lg:space-y-20 "
      >
        <div className="relative text-center">
          <h2 className=" text-3xl lg:text-4xl text-gray-700 text-center">
            About
          </h2>
          <span className="absolute  left-1/2 bottom-0 -translate-x-1/2 translate-y-5 h-2 bg-light-emerald w-16"></span>
        </div>
        <div className="grid grid-cols-4 gap-6 lg:gap-12">
          <div className="col-span-4 lg:col-span-2">
            <h3 className="text-xl lg:text-2xl text-gray-700 mb-4 lg:mb-6">
              Get to Know Me
            </h3>
            <p className="text-base lg:text-lg text-dark-grey mb-2">
              Hello, I'm Alan Ibarra, a dedicated Frontend Developer with a
              passion for crafting interactive, type-safe, and accessible web
              applications. My expertise spans several key technologies,
              including JavaScript, React, TypeScript, and HTML/CSS. I am
              constantly seeking to refine my skills and expand my knowledge to
              stay at the forefront of web development trends, ensuring that I
              provide user experiences that are both inclusive and engaging.
            </p>
            <p className="text-base lg:text-lg text-dark-grey">
              Beyond my professional life, I hold a Bachelor's degree in
              Computer Science from CSU Stanislaus, class of 2018, and take
              pride in being a first-generation college graduate. When not
              immersed in programming, I enjoy staying active through
              weightlifting and broadening my understanding of the world by
              watching documentaries.
            </p>
          </div>
          <div className={clsx("col-span-4 text-gray-700", "lg:col-span-2")}>
            <h3 className="text-xl lg:text-2xl mb-4 lg:mb-6">My Skills</h3>
            <motion.ul
              whileInView="animate"
              viewport={{ amount: 0.6, once: true }}
              initial="initial"
              variants={SkillsGridContainer}
              className="grid grid-cols-2  md:grid-cols-4 gap-x-4 lg:gap-x-2 gap-y-4"
            >
              {SKILLS.map((skill) => (
                <Skill key={skill} skill={skill} />
              ))}
            </motion.ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Skill({ skill }) {
  const Icon = SKILL_ICON[skill];
  return (
    <motion.li
      variants={SkillItem}
      className="flex flex-col gap-2 p-2 border-2 border-gray-200 shadow-md rounded-lg items-center"
    >
      <Icon size={36} />
      <span className="text-base">{skill}</span>
    </motion.li>
  );
}
