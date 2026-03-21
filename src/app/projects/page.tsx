import { AnimatedSection } from "@/components/animated-section";
import { ExplorationGlassCards } from "@/components/exploration-glass-cards";
import { SiteFrame } from "@/components/site-frame";
import { projects } from "@/lib/portfolio-data";

export default function ProjectsPage() {
  return (
    <SiteFrame activePath="/projects">
      <AnimatedSection className="section-card p-7 sm:p-8">
        <p className="eyebrow mb-3">PROJECTS</p>
        <h1 className="headline mb-5 text-3xl font-semibold text-white sm:text-4xl">Featured builds</h1>
        <div className="grid gap-4 lg:grid-cols-3">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.title}
              delay={0.08 * index}
              className="rounded-2xl border border-white/10 bg-black/25 p-5 transition hover:-translate-y-1 hover:border-cyan-300/40"
            >
              <h2 className="headline text-xl font-semibold text-cyan-100">{project.title}</h2>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-cyan-300/80">{project.period}</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">{project.summary}</p>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-slate-400">{project.impact}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-white/15 px-3 py-1 text-[11px] text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      <ExplorationGlassCards delay={0.12} />
    </SiteFrame>
  );
}
