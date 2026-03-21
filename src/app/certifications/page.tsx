import { AnimatedSection } from "@/components/animated-section";
import { ExplorationGlassCards } from "@/components/exploration-glass-cards";
import { SiteFrame } from "@/components/site-frame";
import { certifications } from "@/lib/portfolio-data";
import { FaDatabase, FaJava, FaLinkedin, FaMicrosoft } from "react-icons/fa";
import { SiCplusplus, SiSap } from "react-icons/si";

function ProviderLogo({ provider }: { provider: string }) {
  const commonClass = "h-4 w-4";

  if (provider === "Oracle") {
    return <FaDatabase className={`${commonClass} text-red-300`} aria-hidden />;
  }

  if (provider === "Microsoft") {
    return <FaMicrosoft className={`${commonClass} text-sky-300`} aria-hidden />;
  }

  if (provider === "LinkedIn") {
    return <FaLinkedin className={`${commonClass} text-blue-300`} aria-hidden />;
  }

  if (provider === "SAP") {
    return <SiSap className={`${commonClass} text-cyan-300`} aria-hidden />;
  }

  if (provider === "C++") {
    return <SiCplusplus className={`${commonClass} text-indigo-300`} aria-hidden />;
  }

  if (provider === "Java") {
    return <FaJava className={`${commonClass} text-orange-300`} aria-hidden />;
  }

  return null;
}

export default function CertificationsPage() {
  return (
    <SiteFrame activePath="/certifications">
      <AnimatedSection className="section-card p-7 sm:p-8">
        <p className="eyebrow mb-3">CERTIFICATIONS AND COURSES</p>
        <h1 className="headline mb-5 text-3xl font-semibold text-white sm:text-4xl">Continuous learning highlights</h1>
        <ul className="space-y-3 text-slate-300">
          {certifications.map((item, index) => (
            <AnimatedSection key={item.title} delay={0.08 * index} className="rounded-xl border border-white/10 bg-white/5 px-4 py-4">
              <li>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h2 className="headline text-lg font-semibold text-white">{item.title}</h2>
                  <div className="flex flex-wrap items-center gap-2">
                    {item.providers.map((provider) => (
                      <span key={provider} className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-black/25 px-3 py-1 text-xs text-slate-200">
                        <ProviderLogo provider={provider} />
                        {provider}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.note}</p>
              </li>
            </AnimatedSection>
          ))}
        </ul>
      </AnimatedSection>

      <ExplorationGlassCards delay={0.12} />
    </SiteFrame>
  );
}
