import { AnimatedSection } from "@/components/animated-section";
import { ExplorationGlassCards } from "@/components/exploration-glass-cards";
import { SiteFrame } from "@/components/site-frame";

export default function AboutPage() {
  return (
    <SiteFrame activePath="/about">
      <AnimatedSection className="section-card p-7 sm:p-8">
        <p className="eyebrow mb-3">ABOUT ME</p>
        <h1 className="headline mb-4 text-3xl font-semibold text-white sm:text-4xl">Building Scalable Intelligence at the Intersection of Software, AI, and Cloud</h1>
        <div className="space-y-4 text-slate-300 leading-8">
          <p>
            I am Namish Sharma, a Computer Science undergraduate at Lovely Professional University, driven by a deep interest in software engineering,
            artificial intelligence, and cloud-native systems. I build technology with a clear goal in mind: creating scalable, intelligent products that
            solve real-world problems and deliver measurable impact.
          </p>
          <p>
            My work sits at the intersection of engineering, AI, and business thinking, where I do not just write code, but design end-to-end systems
            from ideation and system architecture to deployment and optimization on the cloud. With hands-on experience across full-stack development,
            generative AI, and data-driven systems, I focus on building products that are both technically robust and user-centric.
          </p>
          <p>
            I care about clean architecture, performance, and practical innovation. My approach is to combine strong engineering fundamentals with product
            clarity so every feature contributes to user value, business outcomes, and long-term scalability.
          </p>
        </div>
      </AnimatedSection>

      <ExplorationGlassCards delay={0.1} />
    </SiteFrame>
  );
}
