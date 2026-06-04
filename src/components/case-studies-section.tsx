import Link from "next/link";
import { caseStudies } from "@/data/profile";

export default function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-heading)]">
            System Architecture{" "}
            <span className="text-muted-foreground font-normal">&amp; Case Studies</span>
          </h2>
          <p className="text-muted-foreground text-sm mt-2 max-w-2xl mx-auto">
            Deep-dive technical briefs documenting enterprise-grade engineering solutions
            across fintech, telephony, education, and e-commerce domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group rounded-xl border border-border bg-card p-6 hover:bg-card-hover transition-all duration-300"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-sm text-accent">{study.subtitle}</p>
                  </div>
                  <svg
                    className="w-5 h-5 text-muted-foreground group-hover:text-cyan-400 transition-colors shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {study.summary}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {study.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/5 border border-cyan-500/10 text-cyan-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {study.technologies.length > 5 && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-card border border-border text-muted-foreground font-mono">
                      +{study.technologies.length - 5}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
