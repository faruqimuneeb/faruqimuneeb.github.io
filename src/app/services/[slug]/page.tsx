import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/data/profile";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <main className="min-h-screen">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/#services"
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-cyan-400 transition-colors mb-8 font-mono"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] mb-3">
            {service.title}
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            {service.description}
          </p>
        </header>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-cyan-400 font-[family-name:var(--font-mono)] mb-4">
            What&apos;s Included
          </h2>
          <ul className="space-y-3">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-muted-foreground">
                <svg className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row gap-4">
          <a
            href={`mailto:muneebfaruqi6@gmail.com?subject=Inquiry: ${service.title}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-medium text-sm hover:bg-cyan-500/20 transition-all duration-300"
          >
            Discuss This Engagement
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <Link
            href="/#services"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border text-muted-foreground font-medium text-sm hover:border-muted-foreground hover:text-foreground transition-all duration-300"
          >
            View All Services
          </Link>
        </div>
      </article>
    </main>
  );
}
