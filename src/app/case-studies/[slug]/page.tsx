import { notFound } from "next/navigation";
import Link from "next/link";
import { caseStudies } from "@/data/profile";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};

  return {
    title: study.title,
    description: study.summary,
    openGraph: {
      title: study.title,
      description: study.summary,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  return (
    <main className="min-h-screen">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/#case-studies"
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-cyan-400 transition-colors mb-8 font-mono"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Case Studies
        </Link>

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] mb-2">
            {study.title}
          </h1>
          <p className="text-lg text-accent font-[family-name:var(--font-mono)]">
            {study.subtitle}
          </p>
        </header>

        <div className="space-y-10">
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-cyan-400 font-[family-name:var(--font-mono)] mb-3">
              Executive Summary
            </h2>
            <p className="text-muted-foreground leading-relaxed">{study.summary}</p>
          </section>

          <section>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-rose font-[family-name:var(--font-mono)] mb-3">
              The Problem
            </h2>
            <p className="text-muted-foreground leading-relaxed">{study.problem}</p>
          </section>

          <section>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-green font-[family-name:var(--font-mono)] mb-3">
              The Solution
            </h2>
            <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
          </section>

          <section>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground font-[family-name:var(--font-mono)] mb-3">
              Technology Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {study.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 rounded-full bg-cyan-500/5 border border-cyan-500/10 text-cyan-300 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-amber font-[family-name:var(--font-mono)] mb-3">
              Key Results
            </h2>
            <ul className="space-y-2">
              {study.results.map((result) => (
                <li key={result} className="flex items-start gap-3 text-muted-foreground">
                  <svg className="w-5 h-5 text-green shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  {result}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <Link
            href="/#case-studies"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-cyan-400 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            View all case studies
          </Link>
        </div>
      </article>
    </main>
  );
}
