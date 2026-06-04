import { impactMetrics } from "@/data/profile";

export default function Metrics() {
  return (
    <section
      id="metrics"
      className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-heading)]">
            Engineering Impact{" "}
            <span className="text-muted-foreground font-normal">by the Numbers</span>
          </h2>
          <p className="text-muted-foreground text-sm mt-2">
            Hard performance metrics derived directly from production engineering milestones
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {impactMetrics.map((metric, i) => (
            <div
              key={metric.label}
              className="group relative rounded-xl border border-border bg-card p-5 hover:bg-card-hover transition-all duration-300 animate-count-up"
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
            >
              <div className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-mono)] text-cyan-400 mb-1">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-foreground mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-muted-foreground leading-relaxed">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
