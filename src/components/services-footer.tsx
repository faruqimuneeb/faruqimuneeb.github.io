import Link from "next/link";
import { services } from "@/data/profile";

export default function ServicesFooter() {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-lg font-bold font-[family-name:var(--font-heading)]">
            Engineering Services
          </h2>
          <p className="text-xs text-muted-foreground mt-1">
            Specialized backend architecture and development engagements
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-xs text-muted-foreground hover:border-cyan-500/30 hover:text-cyan-300 hover:bg-cyan-500/5 transition-all duration-200"
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              {service.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
