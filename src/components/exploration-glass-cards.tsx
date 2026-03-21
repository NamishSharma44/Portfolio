import { AnimatedSection } from "@/components/animated-section";
import { FaChartLine, FaCloud, FaRobot, FaServer } from "react-icons/fa6";

const explorationCards = [
  {
    title: "AI Systems",
    icon: FaRobot,
    tag: "RAG, LLMs, Agents",
    detail: "Building practical AI workflows that combine retrieval, reasoning, and reliable response orchestration.",
  },
  {
    title: "Backend Architecture",
    icon: FaServer,
    tag: "Scalable Services",
    detail: "Designing API-first systems that prioritize clean contracts, observability, and long-term maintainability.",
  },
  {
    title: "Cloud-Native Engineering",
    icon: FaCloud,
    tag: "GCP Focus",
    detail: "Deploying and operating resilient cloud applications with automation, cost awareness, and production readiness.",
  },
  {
    title: "Data-Driven Applications",
    icon: FaChartLine,
    tag: "Insights and Analytics",
    detail: "Turning raw, noisy data into decision-ready signals through analytics, modeling, and clear product presentation.",
  },
];

type ExplorationGlassCardsProps = {
  delay?: number;
  title?: string;
  subtitle?: string;
};

export function ExplorationGlassCards({
  delay = 0.12,
  title = "Currently Exploring",
  subtitle = "Focused areas where I am building deeper expertise right now.",
}: ExplorationGlassCardsProps) {
  return (
    <AnimatedSection delay={delay} className="section-card relative mt-4 overflow-hidden p-7 sm:mt-5 sm:p-8">
      <div className="pointer-events-none absolute -right-24 bottom-0 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl" aria-hidden />
      <p className="eyebrow mb-3">CURRENTLY EXPLORING</p>
      <h2 className="headline mb-3 text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      <p className="max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">{subtitle}</p>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {explorationCards.map((item) => (
          <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-2">
              <item.icon className="text-sm text-cyan-200" aria-hidden="true" />
              <p className="headline text-lg font-semibold text-cyan-100">{item.title}</p>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-300">{item.detail}</p>
            <p className="mt-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-100">
              {item.tag}
            </p>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
