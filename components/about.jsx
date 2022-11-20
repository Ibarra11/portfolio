import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  SiTypescript,
  SiCss3,
  SiTailwindcss,
  SiCypress,
  SiNextdotjs,
  SiReact,
} from "react-icons/si";
export default function About() {
  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };
  return (
    <section id="about" className=" bg-gray-100 py-24">
      <motion.div
        whileInView="animate"
        transition={{ duration: 0.4 }}
        initial="initial"
        viewport={{ amount: 0.4, once: true }}
        variants={variants}
        className=" max-w-6xl mx-auto"
      >
        <div className="relative text-center">
          <h2 className="text-4xl text- mb-12 text-center">About Me</h2>
          <span className="absolute  left-1/2 bottom-0 -translate-x-1/2 translate-y-5 h-2 bg-light-emerald w-16"></span>
        </div>
        <div className="grid grid-cols-3">
          <div className="col-span-3">
            <motion.p className=" text-lg text-dark-grey">
              Hi, Im Alan Ibarra, a frontend developer based out of Northern
              California. I am a first generation college graduate having
              graduated from CSU Stanislaus in the year 2018 with a bachelors of
              Computer Science. Originally, my goal in life was to work in law
              enforcement, that it is what I was going to school for. However, I
              started to have doubts about it and googled the most in demand
              jobs one day and seen software engineering and decided that is
              what I wanted to pursue a career in. The first programming
              language I learned was Java and the first memorable program I
              built with it was a calculator using the Eclipse IDE. I remember
              the enjoyment I felt when I completed the program, which led to
              the passion I have towards web development. Since then I have
              continued to explore and broaden my understanding of web
              development, while being extensive and constantly changing, it is
              something that I enjoy . Aside from that some of my personal
              hobbies include lifting weights, watching documentaries, and
              hanging out with my family.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
