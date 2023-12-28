import { readFileSync } from "fs";
import ProjectDetail from "@/components/ProjectDetail";
async function ProjectPage({ params }: { params: { slug: string } }) {
  const json = readFileSync(`./content/${params.slug}.json`, {
    encoding: "utf-8",
  });
  const data = JSON.parse(json);
  return (
    <div className=" bg-slate-800 pt-16 lg:pt-24 px-6">
      <ProjectDetail {...data} />;
    </div>
  );
}

export default ProjectPage;
