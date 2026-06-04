import { experience } from "@/data/profile";

export default function Timeline() {
  return (
    <section
      id="career"
      className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-border overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-heading)]">
            Career Chronology
          </h2>
          <p className="text-muted-foreground text-sm mt-2">
            Nine years of professional engineering leadership across fintech, telephony, and enterprise systems
          </p>
        </div>

        <div className="relative">
          <div className="timeline-line hidden md:block" />

          <div className="space-y-8">
            {experience.map((exp, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={`${exp.company}-${exp.period}`}
                  className="relative flex flex-col md:flex-row gap-6 md:gap-12 animate-fade-in-up"
                  style={{ animationDelay: `${i * 150}ms`, animationFillMode: "both" }}
                >
                  <div className={`flex-1 ${isLeft ? "md:text-right" : "md:order-2"}`}>
                    <div className="rounded-xl border border-border bg-card p-5 hover:bg-card-hover transition-all duration-300">
                      <div className="text-xs font-mono text-cyan-400 mb-1">
                        {exp.period}
                      </div>
                      <h3 className="text-lg font-bold font-[family-name:var(--font-heading)]">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-accent mb-3">
                        {exp.company} &middot; {exp.location}
                      </p>
                      <ul className="space-y-1.5 mb-3">
                        {exp.description.map((d) => (
                          <li key={d} className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                            <span className="text-cyan-400 shrink-0 mt-1">&bull;</span>
                            {d}
                          </li>
                        ))}
                      </ul>
                      {exp.achievement && (
                        <div className="text-xs sm:text-sm text-green border border-green/20 bg-green/5 rounded-lg p-3 leading-relaxed">
                          <span className="font-semibold text-green">Key Achievement:</span>{" "}
                          {exp.achievement}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="hidden md:flex items-center justify-center w-8 shrink-0">
                    <div className="w-3 h-3 rounded-full border-2 border-cyan-400 bg-background animate-pulse-glow" />
                  </div>

                  <div className="flex-1 md:invisible" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
