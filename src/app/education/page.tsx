import { AnimatedSection } from "@/components/animated-section";
import { ExplorationGlassCards } from "@/components/exploration-glass-cards";
import { SiteFrame } from "@/components/site-frame";
import { education, profile } from "@/lib/portfolio-data";

export default function EducationPage() {
  return (
    <SiteFrame activePath="/education">
      <AnimatedSection className="section-card p-7 sm:p-8">
        <p className="eyebrow mb-3">EDUCATION</p>
        <h1 className="headline mb-5 text-3xl font-semibold text-white sm:text-4xl">Academic and growth journey</h1>
        <div className="space-y-3">
          {education.map((item, index) => (
            <AnimatedSection key={`${item.institution}-${item.qualification}`} delay={0.08 * index} className="rounded-xl border border-white/10 bg-white/5 px-4 py-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-base font-semibold text-cyan-100">{item.qualification}</h2>
                <span className="text-xs uppercase tracking-[0.14em] text-slate-400">{item.period}</span>
              </div>
              <p className="mt-1 text-sm leading-7 text-slate-300">{item.institution}</p>
              <p className="mt-2 text-sm text-slate-200">
                <span className="font-semibold text-cyan-100">{item.scoreLabel}:</span> {item.score}
              </p>
            </AnimatedSection>
          ))}
        </div>
        <a
          href={profile.resumePath}
          download
          className="mt-5 inline-flex rounded-full border border-cyan-200/40 px-5 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-100/10"
        >
          Download Resume (PDF)
        </a>
      </AnimatedSection>

      <ExplorationGlassCards delay={0.12} />
    </SiteFrame>
  );
}
