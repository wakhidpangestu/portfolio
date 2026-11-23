import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { Github, Globe } from "lucide-react";

export default function ProjectsSection() {
  return (
    <div className="flex min-h-0 flex-col gap-y-6">
      <h2 className="text-xl font-bold">Selected Projects</h2>
      <div className="grid gap-5 sm:grid-cols-2">
        {DATA.projects.map((project) => {
          const website = "website" in project ? project.website : undefined;
          const links = [
            ...(website
              ? [
                  {
                    icon: <Globe className="size-3" aria-hidden />,
                    type: "Website",
                    href: website,
                  },
                ]
              : []),
            {
              icon: <Github className="size-3" aria-hidden />,
              type: "GitHub",
              href: project.github,
            },
          ];

          return (
            <ProjectCard
              key={project.title}
              title={project.title}
              dates={project.dates}
              description={project.description}
              tags={project.tags}
              image={project.image}
              href={website ?? project.github}
              links={links}
            />
          );
        })}
      </div>
    </div>
  );
}
