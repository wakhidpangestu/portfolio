import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import ContactSection from "@/components/section/contact-section";
import CredentialsSection from "@/components/section/credentials-section";
import HackathonsSection from "@/components/section/hackathons-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";
import { siCrewai, siEthereum, siEthers, siGit, siHuggingface, siJavascript, siLangchain, siNextdotjs, siNodedotjs, siOpenapiinitiative, siPostgresql, siPython, siReact, siSolidity, siSupabase, siTailwindcss, siTensorflow, siTypescript, siVercel, siWalletconnect } from "simple-icons";

const BLUR_FADE_DELAY = 0.04;

const SKILL_ICONS = {
  Solidity: siSolidity, Ethereum: siEthereum, EVM: siEthereum,
  "Smart Contract Development": siSolidity, "Ethers.js": siEthers, "Wallet Integration": siWalletconnect,
  "React.js": siReact, "Next.js": siNextdotjs, TypeScript: siTypescript, JavaScript: siJavascript,
  "Tailwind CSS": siTailwindcss, "Node.js": siNodedotjs, Python: siPython, PostgreSQL: siPostgresql,
  Supabase: siSupabase, "REST APIs": siOpenapiinitiative, "AI / ML Fundamentals": siTensorflow,
  LLMs: siHuggingface, RAG: siLangchain, "AI Agents": siCrewai, LangChain: siLangchain,
  Git: siGit, Vercel: siVercel,
} as const;

type SkillWithIcon = keyof typeof SKILL_ICONS | "Arbitrum" | "AWS";

function SkillIcon({ skill }: { skill: SkillWithIcon }) {
  if (skill === "AWS") {
    return <img src="/aws.jpg" alt="AWS logo" className="size-4 shrink-0 object-contain" />;
  }

  if (skill === "Arbitrum") {
    return <svg viewBox="0 0 24 24" className="size-4 shrink-0" role="img" aria-label="Arbitrum logo"><path fill="#213147" d="m12 1 9.5 5.5v11L12 23l-9.5-5.5v-11L12 1Z" /><path fill="#28A0F0" d="m13.8 6.2-1.3 2.2 3.9 6.8 1.5-.9-4.1-8.1Z" /><path fill="#fff" d="m9.4 7.3-1.3 2.2 3.8 6.5h2.6L10.7 9l-1.3-1.7Z" /><path fill="#96BEDC" d="m6.3 9.1-1.2 2.1 2.8 4.9h2.6L6.3 9.1Z" /></svg>;
  }

  const icon = SKILL_ICONS[skill];
  return <svg viewBox="0 0 24 24" className="size-4 shrink-0" fill={icon.hex === "000000" ? "currentColor" : `#${icon.hex}`} role="img" aria-label={`${icon.title} logo`}><path d={icon.path} /></svg>;
}

export default function Page() {
  const skills = DATA.skillGroups.flatMap((group) => group.skills);

  return (
    <main className="relative flex min-h-dvh flex-col gap-14">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="flex flex-col justify-between gap-2 gap-y-6 md:flex-row">
            <div className="order-2 flex flex-col gap-2 md:order-1">
              <BlurFadeText delay={BLUR_FADE_DELAY} className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl" yOffset={8} text={`Hi, I'm ${DATA.name.split(" ")[0]}`} />
              <BlurFadeText className="max-w-[600px] text-muted-foreground md:text-lg lg:text-xl" delay={BLUR_FADE_DELAY} text={DATA.description} />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-24 rounded-full border shadow-lg ring-4 ring-muted md:size-32">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="about"><div className="flex min-h-0 flex-col gap-y-4"><BlurFade delay={BLUR_FADE_DELAY * 3}><h2 className="text-xl font-bold">About</h2></BlurFade><BlurFade delay={BLUR_FADE_DELAY * 4}><div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert"><Markdown>{DATA.summary}</Markdown></div></BlurFade></div></section>

      <section id="work"><div className="flex min-h-0 flex-col gap-y-6"><BlurFade delay={BLUR_FADE_DELAY * 5}><h2 className="text-xl font-bold">Work Experience</h2></BlurFade><BlurFade delay={BLUR_FADE_DELAY * 6}><WorkSection /></BlurFade></div></section>

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}><h2 className="text-xl font-bold">Education</h2></BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 8 + index * 0.05}>
                <Link href={education.href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-x-3">
                  <div className="flex min-w-0 flex-1 items-center gap-x-3">
                    {education.logoUrl ? (
                      <img src={education.logoUrl} alt={`${education.school} logo`} className="size-8 flex-none rounded-full border bg-white p-1 shadow ring-2 ring-border object-contain md:size-10" />
                    ) : (
                      <div className="size-8 flex-none rounded-full border bg-muted p-1 shadow ring-2 ring-border md:size-10" />
                    )}
                    <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                      <div className="flex items-center gap-2 font-semibold leading-none">{education.school}<ArrowUpRight className="size-3.5 -translate-x-2 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" aria-hidden /></div>
                      <div className="font-sans text-sm text-muted-foreground">{education.degree}</div>
                    </div>
                  </div>
                  <div className="flex flex-none items-center gap-1 text-right text-xs tabular-nums text-muted-foreground"><span>{education.start} - {education.end}</span></div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="skills"><div className="flex min-h-0 flex-col gap-y-4"><BlurFade delay={BLUR_FADE_DELAY * 9}><h2 className="text-xl font-bold">Skills</h2></BlurFade><div className="flex flex-wrap gap-2">{skills.map((skill, index) => <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + index * 0.05}><div className="flex h-8 w-fit items-center gap-2 rounded-xl border border-border bg-background px-4 ring-2 ring-border/20"><SkillIcon skill={skill} /><span className="text-sm font-medium text-foreground">{skill}</span></div></BlurFade>)}</div></div></section>

      <section id="projects"><BlurFade delay={BLUR_FADE_DELAY * 11}><ProjectsSection /></BlurFade></section>
      <section id="hackathons"><BlurFade delay={BLUR_FADE_DELAY * 13}><HackathonsSection /></BlurFade></section>
      <section id="credentials"><BlurFade delay={BLUR_FADE_DELAY * 15}><CredentialsSection /></BlurFade></section>
      <section id="contact"><BlurFade delay={BLUR_FADE_DELAY * 16}><ContactSection /></BlurFade></section>
    </main>
  );
}
