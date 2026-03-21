import { skills } from "@/lib/portfolio-data";

const techItems = [
  ...skills.languages,
  ...skills.frameworks,
  ...skills.toolsPlatforms,
  ...skills.others,
];

export function TechMarquee() {
  const doubled = [...techItems, ...techItems];

  return (
    <div className="marquee-shell mt-8 rounded-2xl border border-white/10 bg-white/[0.03] py-3">
      <div className="marquee-track">
        {doubled.map((item, index) => (
          <span key={`${item}-${index}`} className="marquee-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
