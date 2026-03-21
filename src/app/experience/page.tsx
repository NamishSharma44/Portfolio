import { AnimatedSection } from "@/components/animated-section";
import { ExplorationGlassCards } from "@/components/exploration-glass-cards";
import { SiteFrame } from "@/components/site-frame";
import { experiences } from "@/lib/portfolio-data";

export default function ExperiencePage() {
  return (
    <SiteFrame activePath="/experience">
      <AnimatedSection className="section-card p-7 sm:p-8">
        <p className="eyebrow mb-3">EXPERIENCE</p>
        <h1 className="headline mb-5 text-3xl font-semibold text-white sm:text-4xl">Internships and work</h1>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <AnimatedSection key={exp.role} delay={0.08 * index} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-lg font-semibold text-cyan-100">{exp.role}</h2>
                <span className="text-xs uppercase tracking-[0.14em] text-slate-400">{exp.period}</span>
              </div>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-300">
                {exp.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      <ExplorationGlassCards delay={0.12} />
    </SiteFrame>
  );
}
