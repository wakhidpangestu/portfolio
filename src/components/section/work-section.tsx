import { BriefcaseBusiness, MapPin } from "lucide-react";
import { DATA } from "@/data/resume";

export default function WorkSection() {
  return (
    <div className="grid gap-8">
      {DATA.work.map((work) => (
        <article
          key={`${work.company}-${work.title}`}
          className="border-l-2 border-border pl-5 sm:pl-6"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <BriefcaseBusiness className="size-4 shrink-0" aria-hidden />
                <span>{work.company}</span>
              </div>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">
                {work.title}
              </h3>
              <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="size-3.5 shrink-0" aria-hidden />
                <span>{work.location}</span>
              </div>
            </div>
            <time className="shrink-0 text-sm tabular-nums text-muted-foreground">
              {work.start} - {work.end}
            </time>
          </div>
          <ul className="mt-4 grid gap-2 text-sm leading-relaxed text-muted-foreground">
            {work.highlights.map((highlight) => (
              <li key={highlight} className="relative pl-4 before:absolute before:left-0 before:text-foreground before:content-['-']">
                {highlight}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
