/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import ContactSection from "@/components/section/contact-section";
import WorkSection from "@/components/section/work-section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import { Award, Github, Instagram, Mail, MapPin, Phone, Trophy } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="relative flex min-h-dvh flex-col gap-16">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="order-2 flex min-w-0 flex-col gap-3 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={DATA.name}
              />
              <BlurFadeText
                className="max-w-[600px] text-lg text-muted-foreground sm:text-xl"
                delay={BLUR_FADE_DELAY * 2}
                text="Software Engineer | Indonesian Web3 Builder"
              />
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                  <a
                    href={DATA.locationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
                  >
                    <MapPin className="size-4" aria-hidden />
                    {DATA.location}
                  </a>
                  <a
                    href={`mailto:${DATA.contact.email}`}
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
                  >
                    <Mail className="size-4" aria-hidden />
                    {DATA.contact.email}
                  </a>
                  <a
                    href={`tel:${DATA.contact.tel}`}
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
                  >
                    <Phone className="size-4" aria-hidden />
                    +62 851-9061-5356
                  </a>
                  <a
                    href={DATA.contact.social.Instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
                  >
                    <Instagram className="size-4" aria-hidden />
                    @wakhidpangestu
                  </a>
                  <a
                    href={DATA.contact.social.GitHub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
                  >
                    <Github className="size-4" aria-hidden />
                    @wakhidpangestu
                  </a>
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-24 border shadow-lg ring-4 ring-muted md:size-32">
                {DATA.avatarUrl && <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />}
                <AvatarFallback className="bg-primary text-2xl font-semibold text-primary-foreground md:text-3xl">
                  {DATA.initials}
                </AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-8">
        <div className="flex flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <p className="max-w-2xl leading-relaxed text-muted-foreground">
              {DATA.summary}
            </p>
          </BlurFade>
        </div>
      </section>

      <section id="work" className="scroll-mt-8">
        <div className="flex flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <h2 className="text-xl font-bold">Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>

      <section id="education" className="scroll-mt-8">
        <div className="flex flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          <div className="grid gap-6">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 9 + index * 0.05}
              >
                <article className="border-l-2 border-border pl-5 sm:pl-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-semibold">{education.school}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {education.degree}
                      </p>
                    </div>
                    <time className="shrink-0 text-sm tabular-nums text-muted-foreground">
                      {education.start} - {education.end}
                    </time>
                  </div>
                  <p className="mt-3 text-sm font-medium">{education.detail}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    <span className="font-medium text-foreground">Relevant coursework: </span>
                    {education.coursework}
                  </p>
                </article>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="scroll-mt-8">
        <div className="flex flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="grid gap-5 sm:grid-cols-2">
            {DATA.skillGroups.map((group, index) => (
              <BlurFade
                key={group.title}
                delay={BLUR_FADE_DELAY * 12 + index * 0.05}
              >
                <div className="border-l-2 border-border pl-5">
                  <h3 className="text-sm font-semibold">{group.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-border bg-muted/40 px-2.5 py-1 text-xs font-medium text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="web3" className="scroll-mt-8">
        <div className="flex flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <h2 className="text-xl font-bold">Web3 Journey</h2>
          </BlurFade>
          {DATA.web3Highlights.map((highlight) => (
            <BlurFade key={highlight.title} delay={BLUR_FADE_DELAY * 15}>
              <article className="flex gap-4 border-l-2 border-border pl-5 sm:pl-6">
                <Trophy className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden />
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <h3 className="font-semibold">{highlight.title}</h3>
                    <span className="text-sm text-muted-foreground">{highlight.meta}</span>
                  </div>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
              </article>
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="certifications" className="scroll-mt-8">
        <div className="flex flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <h2 className="text-xl font-bold">Selected Credentials</h2>
          </BlurFade>
          <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {DATA.certifications.map((certification, index) => (
              <BlurFade
                key={certification.name}
                delay={BLUR_FADE_DELAY * 17 + index * 0.04}
              >
                <article className="flex gap-3">
                  <Award className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden />
                  <div>
                    <h3 className="text-sm font-semibold leading-snug">
                      {certification.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {certification.issuer}
                      {certification.date ? ` / ${certification.date}` : ""}
                    </p>
                  </div>
                </article>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-8">
        <BlurFade delay={BLUR_FADE_DELAY * 20}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
