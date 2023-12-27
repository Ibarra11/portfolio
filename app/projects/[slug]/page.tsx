import { readFileSync } from "fs";

import Project from "@/components/Project";
async function ProjectPage({ params }: { params: { slug: string } }) {
  const json = readFileSync(`./content/${params.slug}.json`, {
    encoding: "utf-8",
  });
  const data = JSON.parse(json);
  return <Project {...data} />;
}

export default ProjectPage;
