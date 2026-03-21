import { AnimatedSection } from "@/components/animated-section";
import { ContactConnectForm } from "@/components/contact-connect-form";
import { ExplorationGlassCards } from "@/components/exploration-glass-cards";
import { SiteFrame } from "@/components/site-frame";
import { profile } from "@/lib/portfolio-data";

export default function ContactPage() {
  return (
    <SiteFrame activePath="/contact">
      <AnimatedSection className="section-card p-7 sm:p-8">
        <p className="eyebrow mb-3">CONTACT</p>
        <h1 className="headline mb-5 text-3xl font-semibold text-white sm:text-4xl">Let us build something meaningful</h1>
        <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
          I am open to internships, full-time opportunities, collaborations, and technical discussions. Reach out through email or professional
          platforms.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatedSection delay={0.08} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-cyan-100 transition hover:border-cyan-300/50">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </AnimatedSection>
          <AnimatedSection delay={0.16} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-cyan-100 transition hover:border-cyan-300/50">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
          </AnimatedSection>
          <AnimatedSection delay={0.24} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-cyan-100 transition hover:border-cyan-300/50">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub Projects
            </a>
          </AnimatedSection>
          <AnimatedSection delay={0.32} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-cyan-100 transition hover:border-cyan-300/50">
            <a href={`tel:${profile.phone?.replace(/\s+/g, "")}`}>{profile.phone}</a>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.38} className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5 sm:p-6">
          <h2 className="headline text-xl font-semibold text-white sm:text-2xl">Send a direct connection email</h2>
          <p className="mt-2 text-sm leading-7 text-slate-300">
            Share a few details below and your message will be sent directly to {profile.email}. Choose a topic so I can prioritize your request faster.
          </p>
          <ContactConnectForm recipientEmail={profile.email} />
        </AnimatedSection>
      </AnimatedSection>

      <ExplorationGlassCards delay={0.12} />
    </SiteFrame>
  );
}
