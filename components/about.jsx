import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
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
export default function About() {
  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };
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
          <div className="col-span-2">
            <h3 className="text-2xl text-gray-700  mb-4">Get to Know Me</h3>
            <p className="text-lg text-dark-grey mb-3">
              Hi, my name is Alan Ibarra, a frontend developer with experience
              in building interactive, typesafe, and accessible web
              applications. I have a strong background in a variety of languages
              and frameworks, such as JavaScript, React, TypeScript, and
              HTML/CSS.
              {/* Hi, Im Alan Ibarra, a frontend developer based out of Northern
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
              hanging out with my family. */}
            </p>
            <p className="text-lg text-dark-grey">
              Aside from that, I am a first generation college graduate having
              graduated from CSU Stanislaus in the year 2018 with a bachelors of
              Computer Science. Outside of programming some of my hobbies
              include weightlifting and watching documentaries.
            </p>
          </div>
          <div className="col-span-2 text-gray-700">
            <h3 className=" text-2xl mb-4">My Skills</h3>
            <div className="grid grid-cols-4 gap-x-2 gap-y-4  items-start">
              <div className="flex flex-col gap-2 p-2 border-2 border-gray-200 shadow-md rounded-lg items-center">
                <SiReact size={36} />
                <span className="text-base">React</span>
              </div>
              <div className="flex flex-col  gap-2 p-2 shadow-md border-2 border-gray-200 rounded-lg items-center">
                <SiNextdotjs size={36} />
                <span className="text-base">Next.js</span>
              </div>
              <div className="flex flex-col  gap-2 p-2 shadow-md border-2 border-gray-200 rounded-lg items-center">
                <SiTypescript size={36} />
                <span className="text-base">TypeScript</span>
              </div>
              <div className="flex flex-col  gap-2 p-2 shadow-md border-2 border-gray-200 rounded-lg items-center">
                <SiJavascript size={36} />
                <span className="text-base">JavaScript</span>
              </div>
              <div className="flex flex-col  gap-2 p-2 shadow-md border-2 border-gray-200 rounded-lg items-center">
                <SiTailwindcss size={36} />
                <span className="text-base">Tailwind</span>
              </div>
              <div className="flex flex-col  gap-2 p-2 shadow-md border-2 border-gray-200 rounded-lg items-center">
                <SiCypress size={36} />
                <span className="text-base">Cypress</span>
              </div>
              <div className="flex flex-col  gap-2 p-2 shadow-md border-2 border-gray-200 rounded-lg items-center">
                <SiGraphql size={36} />
                <span className="text-base">GraphQL</span>
              </div>
              <div className="flex flex-col  gap-2 p-2 shadow-md border-2 border-gray-200 rounded-lg items-center">
                <SiPrisma size={36} />
                <span className="text-base">Prisma</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
