"use client";

import data from "./data.json";
import Project from "../Project";

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-800 py-16 md:py-24 px-9">
      <div className="relative max-w-6xl mx-auto space-y-12">
        <div className="relative text-center">
          <h2 className="text-4xl  text-center text-white">Projects</h2>
          <span className=" absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-5 h-2 bg-light-emerald w-16"></span>
        </div>
        <div className="space-y-12 lg:space-y-16">
          {data.projects.map((project, i) => (
            <Project
              key={i}
              title={project.title}
              description={project.description}
              highlights={project.highlights}
              detailPage={project.detailPage}
              url={project.url}
              github={project.github}
              img={project.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
