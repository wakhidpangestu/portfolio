import { DATA } from "@/data/resume";
import { Award } from "lucide-react";

export default function CredentialsSection() {
  return (
    <div className="flex min-h-0 flex-col gap-y-6">
      <h2 className="text-xl font-bold">Selected Credentials</h2>
      <div className="flex flex-col gap-6">
        {DATA.certifications.map((certification) => (
          <article key={`${certification.name}-${certification.issuer}`} className="flex items-start gap-x-3">
            <div className="flex size-8 flex-none items-center justify-center rounded-full border bg-muted shadow ring-2 ring-border md:size-10">
              <Award className="size-4 text-muted-foreground" aria-hidden />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold leading-none">{certification.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{certification.issuer}{certification.date ? ` · ${certification.date}` : ""}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
