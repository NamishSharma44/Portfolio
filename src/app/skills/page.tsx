import { AnimatedSection } from "@/components/animated-section";
import { ExplorationGlassCards } from "@/components/exploration-glass-cards";
import { SiteFrame } from "@/components/site-frame";
import { skills } from "@/lib/portfolio-data";
import type { IconType } from "react-icons";
import {
  FaBrain,
  FaChartLine,
  FaCheck,
  FaClock,
  FaCodeBranch,
  FaCss3Alt,
  FaDatabase,
  FaDocker,
  FaJava,
  FaLinux,
  FaPeopleGroup,
  FaPython,
  FaReact,
} from "react-icons/fa6";
import {
  SiCplusplus,
  SiExpress,
  SiGooglecloud,
  SiJavascript,
  SiLangchain,
  SiMongodb,
  SiNodedotjs,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
} from "react-icons/si";

const groupLabels: Record<string, string> = {
  languages: "Languages",
  frameworks: "Frameworks",
  toolsPlatforms: "Tools/Platforms",
  others: "Others",
  softSkills: "Soft Skills",
};

const skillIcons: Record<string, IconType> = {
  Java: FaJava,
  "C++": SiCplusplus,
  Python: FaPython,
  JavaScript: SiJavascript,
  SQL: FaDatabase,
  HTML: FaCodeBranch,
  CSS: FaCss3Alt,
  NumPy: SiNumpy,
  Pandas: SiPandas,
  Matplotlib: FaChartLine,
  "Scikit-Learn": SiScikitlearn,
  LangChain: SiLangchain,
  NodeJS: SiNodedotjs,
  React: FaReact,
  ExpressJS: SiExpress,
  Docker: FaDocker,
  "Google Cloud Platform": SiGooglecloud,
  Linux: FaLinux,
  MongoDB: SiMongodb,
  "Data Structures and Algorithms": FaBrain,
  "System Design": FaCodeBranch,
  Leadership: FaPeopleGroup,
  "Problem-Solving": FaBrain,
  "Teamwork and Collaboration": FaPeopleGroup,
  Consistency: FaCheck,
  "Time Management": FaClock,
};

const DefaultSkillIcon = FaCodeBranch;

export default function SkillsPage() {
  return (
    <SiteFrame activePath="/skills">
      <AnimatedSection className="section-card p-7 sm:p-8">
        <p className="eyebrow mb-3">SKILLS AND TECHNOLOGIES</p>
        <h1 className="headline mb-5 text-3xl font-semibold text-white sm:text-4xl">Technical toolkit</h1>
        <div className="grid gap-5 md:grid-cols-2">
          {Object.entries(skills).map(([group, values], index) => (
            <AnimatedSection key={group} delay={0.08 * index} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-100">{groupLabels[group] ?? group}</h2>
              <div className="flex flex-wrap gap-2">
                {values.map((skill) => (
                  <span key={skill} className="chip inline-flex items-center gap-2 px-3 py-1 text-xs font-medium">
                    {(() => {
                      const Icon = skillIcons[skill] ?? DefaultSkillIcon;
                      return <Icon className="text-[13px] text-cyan-200" aria-hidden="true" />;
                    })()}
                    {skill}
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
