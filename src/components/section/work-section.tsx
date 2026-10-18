import { DATA } from "@/data/resume";
import { BriefcaseBusiness } from "lucide-react";

export default function WorkSection() {
  return (
    <div className="flex flex-col gap-8">
      {DATA.work.map((work) => (
        <article key={`${work.company}-${work.title}`} className="flex items-start justify-between gap-x-3">
          <div className="flex min-w-0 flex-1 items-start gap-x-3">
            <div className="flex size-8 flex-none items-center justify-center rounded-full border bg-muted shadow ring-2 ring-border md:size-10">
              <BriefcaseBusiness className="size-4 text-muted-foreground" aria-hidden />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold leading-none">{work.company}</h3>
              <p className="mt-1 font-sans text-sm text-muted-foreground">{work.title} · {work.location}</p>
              <ul className="mt-3 grid gap-1.5 text-sm leading-relaxed text-muted-foreground">
                {work.highlights.map((highlight) => <li key={highlight} className="relative pl-3 before:absolute before:left-0 before:content-['-']">{highlight}</li>)}
              </ul>
            </div>
          </div>
          <time className="flex-none text-right text-xs tabular-nums text-muted-foreground">{work.start} - {work.end}</time>
        </article>
      ))}
    </div>
  );
}
