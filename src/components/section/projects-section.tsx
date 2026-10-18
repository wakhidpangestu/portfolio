import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { Github } from "lucide-react";

export default function ProjectsSection() {
  return (
    <div className="flex min-h-0 flex-col gap-y-6">
      <h2 className="text-xl font-bold">Selected Projects</h2>
      <div className="grid gap-5 sm:grid-cols-2">
        {DATA.projects.map((project) => (
          <ProjectCard key={project.title} title={project.title} dates={project.dates} description={project.description} tags={project.tags} image={project.image} href={project.github} links={[{ icon: <Github className="size-3" aria-hidden />, type: "GitHub", href: project.github }]} />
        ))}
      </div>
    </div>
  );
}
