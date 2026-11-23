import { DATA } from "@/data/resume";
import { Github, MapPin } from "lucide-react";
import Image from "next/image";

export default function HackathonsSection() {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="max-w-xl">
        <h2 className="text-xl font-bold">Hackathons</h2>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          I build best in a sprint.
        </h3>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          Hackathons are where I pressure-test ideas, meet generous builders, and
          turn a rough concept into something real. The short timeline keeps the
          work focused on the people and problem that matter.
        </p>
      </div>
      <div className="relative">
        <div
          className="absolute bottom-0 left-4 top-4 w-px bg-border md:left-5 md:top-5"
          aria-hidden
        />
        <div className="grid gap-7">
          {DATA.hackathons.map((hackathon) => (
            <article
              key={hackathon.title}
              className="relative pl-12 md:pl-14"
            >
              <Image
                src={hackathon.logoUrl}
                alt={`${hackathon.title} logo`}
                width={40}
                height={40}
                className="absolute left-0 top-0 size-8 rounded-full border bg-white p-1 shadow ring-2 ring-border object-contain md:size-10"
              />
              <time className="text-sm tabular-nums text-muted-foreground">
                {hackathon.dates}
              </time>
              <h3 className="mt-1 text-lg font-semibold tracking-tight">
                {hackathon.title}
              </h3>
              <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4 shrink-0" aria-hidden />
                <span>{hackathon.location}</span>
              </div>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {hackathon.description}
              </p>
              <a
                href={hackathon.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-xs font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Github className="size-3.5" aria-hidden />
                GitHub
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
