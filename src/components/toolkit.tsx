import { toolkit } from "@/data/profile";

export default function Toolkit() {
  return (
    <section
      id="toolkit"
      className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-heading)]">
            Technical Toolkit{" "}
            <span className="text-muted-foreground font-normal">Matrix</span>
          </h2>
          <p className="text-muted-foreground text-sm mt-2">
            Production-grade technologies and frameworks across the full backend spectrum
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {toolkit.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-border bg-card p-5 hover:bg-card-hover transition-all duration-300"
            >
              <h3 className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3 font-[family-name:var(--font-mono)]">
                {group.category}
              </h3>
              <ul className="space-y-1.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <svg className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
