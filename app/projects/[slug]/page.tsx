import { readFileSync, readdirSync } from "fs";
import ProjectDetail from "@/components/ProjectDetail";
import React from "react";

const getContent = React.cache((slug) => {
  const json = readFileSync(`./content/${slug}.json`, {
    encoding: "utf-8",
  });
  const data = JSON.parse(json);
  return data;
});

export function generateStaticParams() {
  const files = readdirSync("./content");
  return files.map((file) => ({
    slug: file.replace(".json", ""),
  }));
}

export async function generateMetadata({ params }) {
  const content = getContent(params.slug);
  return {
    title: content.title,
    description: content.description,
  };
}

/* 
  Essentially its just 100vh - footer.height.  I don't have to worry about navbar because it is fixed
  min-h-[calc(100vh-theme(space.16))]
*/

async function ProjectPage({ params }: { params: { slug: string } }) {
  const content = getContent(params.slug);
  return (
    <main className="bg-slate-800 pt-32 px-6  min-h-[calc(100vh-theme(space.16))]">
      <ProjectDetail {...content} />;
    </main>
  );
}

export default ProjectPage;
