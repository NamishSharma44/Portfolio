import Link from "next/link";

import { AnimatedSection } from "@/components/animated-section";
import { ExplorationGlassCards } from "@/components/exploration-glass-cards";
import { HeroPortrait } from "@/components/hero-portrait";
import { InteractiveHero } from "@/components/interactive-hero";
import { SiteFrame } from "@/components/site-frame";
import { TechMarquee } from "@/components/tech-marquee";
import { profile } from "@/lib/portfolio-data";

const sectionLinks = [
  { label: "About Me", desc: "Who I am and how I work", href: "/about" },
  { label: "Skills", desc: "Frontend, backend, tools", href: "/skills" },
  { label: "Projects", desc: "Selected practical builds", href: "/projects" },
  { label: "Experience", desc: "Internship and work highlights", href: "/experience" },
  { label: "Certifications", desc: "Learning and certifications", href: "/certifications" },
  { label: "Education", desc: "Academic background", href: "/education" },
  { label: "Contact", desc: "Get in touch quickly", href: "/contact" },
];

const philosophyPoints = [
  {
    title: "Design for Scale, Start with Fundamentals",
    detail:
      "I architect solutions that stay stable when usage grows, so core decisions do not become future bottlenecks.",
  },
  {
    title: "Build Systems, Not One-Off Scripts",
    detail:
      "I prefer reusable, composable modules with clear ownership over quick fixes that are hard to extend and maintain.",
  },
  {
    title: "Ship Outcomes, Not Just Features",
    detail:
      "I optimize for real user and business impact, measuring success through reliability, speed, and workflow improvement.",
  },
  {
    title: "Keep Performance and Clarity Non-Negotiable",
    detail:
      "Readable code, predictable behavior, and performance-aware implementation are part of delivery from day one.",
  },
];

const problemSolutionSnapshots = [
  {
    problem: "Manual appointment booking chaos across patients, doctors, and admin workflows",
    solution:
      "Built a role-based healthcare system with real-time slot allocation, conflict-aware scheduling, and payment-integrated appointment lifecycle.",
  },
  {
    problem: "Unstructured financial data made timely investment decisions inconsistent",
    solution:
      "Developed an AI-powered stock analyzer combining multi-source sentiment, technical indicators, and Gemini-guided risk-reward scoring.",
  },
  {
    problem: "Long-form documents were hard to search and slower to convert into decisions",
    solution:
      "Engineered a RAG pipeline with semantic retrieval and source-grounded Q&A to deliver reliable answers from large document sets.",
  },
];


export default function Home() {
  return (
    <SiteFrame activePath="/" variant="landing">
      <AnimatedSection className="landing-hero section-card relative overflow-hidden px-6 pb-20 pt-6 sm:px-10">
        <InteractiveHero>
          <div className="landing-stars" />

          <div className="landing-top flex items-center justify-end">
            <Link
              href="/contact"
              className="cta-alt rounded-full border border-cyan-200/35 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-200/10"
            >
              Start a Project
            </Link>
          </div>

          <div className="landing-copy parallax-copy relative z-10 mx-auto mt-4 w-full max-w-5xl text-center sm:mt-6">
            <h1 className="landing-title headline font-semibold leading-none text-cyan-100">
              <span className="block">Future</span>
              <span className="mt-1 block text-[0.52em] opacity-55 sm:mt-2">Ready Systems</span>
            </h1>
            <p className="headline mt-2 text-xl text-cyan-100 sm:text-3xl">Developer</p>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:mt-6 sm:text-base">{profile.intro}</p>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:mt-7">
              <Link href="/projects" className="cta-main rounded-full bg-cyan-300 px-5 py-2 text-sm font-semibold text-slate-950">
                Explore
              </Link>
              <Link
                href="/about"
                className="cta-alt rounded-full border border-cyan-200/35 px-5 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-200/10"
              >
                Case Studies
              </Link>
            </div>
          </div>

          <div className="portrait-halo" aria-hidden />

          <div className="landing-portrait-wrap parallax-portrait" aria-hidden>
            <div className="portrait-stage">
              <HeroPortrait alt="Namish Sharma portrait" />
            </div>
          </div>

          <aside className="social-rail parallax-rail">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">GH</a>
            <a href={`mailto:${profile.email}`}>@</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">in</a>
          </aside>

          <div className="avatar-chip">
            <HeroPortrait alt="Namish Sharma avatar" />
          </div>

          <div className="parallax-marquee mt-5 w-full max-w-5xl sm:mt-8">
            <TechMarquee />
          </div>

          <a href="#home-scroll" className="scroll-cue">
            Scroll to explore
          </a>
        </InteractiveHero>
      </AnimatedSection>

      <AnimatedSection delay={0.06} className="section-card relative overflow-hidden p-7 sm:p-8">
        <div className="pointer-events-none absolute -right-20 top-0 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl" aria-hidden />
        <p className="eyebrow mb-3">ENGINEERING PHILOSOPHY</p>
        <h2 className="headline mb-3 text-3xl font-semibold text-white sm:text-4xl">How I Think</h2>
        <p className="max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
          My approach focuses on building resilient products that remain fast, understandable, and valuable long after the first release.
        </p>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {philosophyPoints.map((point) => (
            <article key={point.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="headline text-lg font-semibold text-cyan-100">{point.title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{point.detail}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.07} className="section-card relative overflow-hidden p-7 sm:p-8">
        <div className="pointer-events-none absolute -left-24 bottom-0 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl" aria-hidden />
        <p className="eyebrow mb-3">PROBLEM TO SOLUTION SNAPSHOT</p>
        <h2 className="headline mb-3 text-3xl font-semibold text-white sm:text-4xl">How I Solve Problems</h2>
        <p className="max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
          I break complex challenges into clear execution paths, then ship reliable systems that solve the root issue, not just the symptoms.
        </p>
        <div className="mt-6 grid gap-3 lg:grid-cols-3">
          {problemSolutionSnapshots.map((snapshot) => (
            <article key={snapshot.problem} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-rose-200/90">Problem</p>
              <p className="mt-2 text-sm leading-6 text-slate-200">{snapshot.problem}</p>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-200">Solution</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{snapshot.solution}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection id="home-scroll" delay={0.08} className="section-card p-7 sm:p-8">
        <p className="eyebrow mb-3">START HERE</p>
        <h2 className="headline mb-3 text-3xl font-semibold text-white sm:text-4xl">Everything important below</h2>
        <p className="max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
          Scroll this page to navigate through your profile quickly, or jump into dedicated pages for deeper details. This section brings back the
          complete first-page experience.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {sectionLinks.map((item) => (
            <Link key={item.href} href={item.href} className="home-nav-card rounded-2xl border border-white/10 bg-white/5 p-4">
              <h3 className="headline text-lg font-semibold text-cyan-100">{item.label}</h3>
              <p className="mt-2 text-xs leading-6 text-slate-300">{item.desc}</p>
            </Link>
          ))}
        </div>
      </AnimatedSection>

      <ExplorationGlassCards
        delay={0.1}
        title="What I am learning deeply right now"
        subtitle="I continuously invest in areas that compound long-term engineering impact and help me build smarter, faster, and more scalable products."
      />

      <AnimatedSection delay={0.14} className="grid gap-4">
        <section className="section-card p-7 sm:p-8">
          <p className="eyebrow mb-3">FAST ACTIONS</p>
          <h2 className="headline text-2xl font-semibold text-white sm:text-3xl">Jump links</h2>
          <div className="mt-5 flex flex-col gap-3 text-sm">
            <Link href="/projects" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-cyan-100 hover:border-cyan-300/50">
              View Projects
            </Link>
            <a href={profile.resumePath} download className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-cyan-100 hover:border-cyan-300/50">
              Download Resume
            </a>
            <Link href="/contact" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-cyan-100 hover:border-cyan-300/50">
              Contact Me
            </Link>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.18} className="flex min-h-[88px] items-center justify-center text-center sm:min-h-[120px]">
        <p className="headline text-lg font-semibold text-cyan-100 sm:text-2xl">
          I build systems that think, scale, and solve real problems.
        </p>
      </AnimatedSection>
    </SiteFrame>
  );
}
