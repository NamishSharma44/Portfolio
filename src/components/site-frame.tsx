import Link from "next/link";
import type { ReactNode } from "react";

import { PageTransition } from "@/components/page-transition";
import { profile } from "@/lib/portfolio-data";

type SiteFrameProps = {
  activePath: string;
  variant?: "default" | "landing";
  children: ReactNode;
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Certifications", href: "/certifications" },
  { label: "Experience", href: "/experience" },
  { label: "Education", href: "/education" },
  { label: "Contact", href: "/contact" },
];

const dockItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export function SiteFrame({ activePath, variant = "default", children }: SiteFrameProps) {
  const isLanding = variant === "landing";

  return (
    <div className={`portfolio-shell relative min-h-screen px-4 text-white sm:px-8 lg:px-12 ${isLanding ? "py-4" : "py-6"}`}>
      <span className="hero-glow glow-float left-[-80px] top-[-100px] h-72 w-72 bg-cyan-400/35" />
      <span className="hero-glow glow-float-delay right-[-120px] top-20 h-80 w-80 bg-blue-500/25" />
      <span className="hero-glow glow-float left-[34%] top-[68%] h-72 w-72 bg-emerald-300/15" />
      <div className="ambient-beam" />

      <header className={`sticky top-0 z-30 rounded-3xl border border-white/12 bg-[#070b12]/72 px-4 py-3 backdrop-blur-xl sm:px-6 ${isLanding ? "mb-4" : "mb-8"}`}>
        <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-200/45 to-transparent" />
        <nav className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center justify-between gap-4">
            <div className="leading-tight">
              <Link href="/" className="headline block text-lg font-semibold text-cyan-100 sm:text-xl">
                {profile.name}
              </Link>
              <p className="mt-0.5 text-[10px] uppercase tracking-[0.14em] text-slate-400">Software developer</p>
            </div>
            <a
              href={profile.resumePath}
              download
              className="hidden rounded-full border border-cyan-300/40 px-3 py-1 text-xs font-medium text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-200/10 sm:inline-flex"
            >
              Resume PDF
            </a>
          </div>

          <div className="scroll-nav flex items-center gap-2 overflow-x-auto pb-1 text-xs sm:text-sm">
            {navItems.map((item) => {
              const isActive = activePath === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-pill shrink-0 rounded-full border px-3 py-1 transition ${
                    isActive
                      ? "border-cyan-200/75 bg-cyan-200/14 text-cyan-50"
                      : "border-white/14 text-slate-300 hover:border-cyan-300/60 hover:text-cyan-100"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      </header>

      <main className={`mx-auto grid w-full max-w-6xl gap-7 ${isLanding ? "landing-main pb-12" : "pb-24"}`}>
        {!isLanding && (
          <section className="meta-strip rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-[11px] uppercase tracking-[0.15em] text-slate-300">
            <div className="flex items-center justify-center gap-2">
              <span>{profile.role}</span>
            </div>
          </section>
        )}
        <PageTransition routeKey={activePath}>{children}</PageTransition>
      </main>

      <div className="bottom-dock" aria-label="Quick navigation">
        {dockItems.map((item) => (
          <Link key={item.href} href={item.href} aria-current={activePath === item.href ? "page" : undefined}>
            {item.label}
          </Link>
        ))}
      </div>

      <footer className="mx-auto mt-4 w-full max-w-6xl px-2 pb-8">
        <section className="relative overflow-hidden rounded-3xl border border-cyan-200/25 bg-gradient-to-r from-cyan-500/12 via-sky-500/10 to-blue-500/12 px-5 py-6 sm:px-7 sm:py-7">
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -left-10 bottom-0 h-36 w-36 rounded-full bg-blue-400/18 blur-3xl" aria-hidden />

          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-100/90">Ready To Build</p>
          <h2 className="headline mt-2 text-2xl font-semibold text-white sm:text-3xl">Let&apos;s build something impactful.</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-200/95 sm:text-base">
            I design and ship high-performance products that solve real business problems. If you are hiring, collaborating, or launching, let&apos;s connect.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="rounded-full border border-cyan-100/70 bg-cyan-100 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:border-white hover:bg-white"
            >
              Contact
            </Link>
            <a
              href={profile.resumePath}
              download
              className="rounded-full border border-white/35 px-4 py-2 text-sm font-semibold text-cyan-50 transition hover:border-cyan-100 hover:bg-cyan-200/12"
            >
              Resume
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/25 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-cyan-200/70 hover:bg-cyan-200/10"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </footer>
    </div>
  );
}
