import { useEffect, useRef } from "react";
import {
  SiTypescript,
  SiCss3,
  SiTailwindcss,
  SiCypress,
  SiNextdotjs,
  SiReact,
} from "react-icons/si";
export default function About({ onSectionEnter }) {
  const ref = useRef();
  // console.log(ref.current.offsetHeight);
  // useEffect(() => {
  //   const header = document.querySelector("#header");
  //   console.log(header);
  //   let options = {
  //     // root: header,
  //     // rootMargin: `${ref.current.offsetHeight * -1}px`,
  //     threshold: [.1,.2,.3,.4, .5,.6, .7, .8, .9, 1.0]
  //   };

  //   let observer = new IntersectionObserver((e) => {
  //     const { isIntersecting, boundingClientRect, intersectionRatio } = e[0];
  //     const ratio = Math.floor(intersectionRatio * 100);
  //     console.log(e);
  //     // console.log(e[0]);
  //     // console.log(e[0].boundingClientRect.y);
  //     // console.log(rootBounds);
  //     // console.log(intersectionRatio * 100);
  //     // if (
  //     //   isIntersecting &&
  //     //   (boundingClientRect.y < 20) & (boundingClientRect.y > 0)
  //     // ) {
  //     //   console.log("scrolling Down");
  //     //   onSectionEnter("about");
  //     // }

  //     // if (
  //     //   isIntersecting &&
  //     //   boundingClientRect.y < 0 &&
  //     //   Math.floor(intersectionRatio * 100) === 10
  //     // ) {
  //     //   onSectionEnter("about");
  //     // }
  //   }, options);
  //   observer.observe(ref.current);
  // }, [onSectionEnter]);
  return (
    <section id="about" ref={ref} className=" bg-slate-700 py-24">
      <div className=" max-w-6xl mx-auto">
        <h2 className="text-4xl text-black  mb-24 text-center">About Me</h2>
        <div className="grid grid-cols-3 gap-10">
          <div className="col-span-2">
            <p className=" text-base text-dark-grey">
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
            </p>
          </div>
          <div className=" col-start-3 grid grid-cols-3">
            <div className="w-20 h-20 bg-black inline-flex justify-center items-center  ">
              <SiReact size={48} />
            </div>
            <div className=" w-20 h-20 inline-flex justify-center items-center bg-light-emerald ">
              <SiTypescript size={48} />
            </div>
            <div className=" w-20 h-20 inline-flex justify-center items-center bg-light-emerald ">
              <SiCss3 size={48} />
            </div>
            <div className=" w-20 h-20 inline-flex justify-center items-center bg-light-emerald ">
              <SiTailwindcss size={48} />
            </div>
            <div className=" w-20 h-20 inline-flex justify-center items-center bg-light-emerald ">
              <SiCypress size={48} />
            </div>
            <div className=" w-20 h-20 inline-flex justify-center items-center bg-light-emerald ">
              <SiNextdotjs size={48} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
