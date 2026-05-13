import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { SectionHeader, GradientOrb } from '../ui';
import { architectureCapabilities } from '../../data/portfolio';

export default function Architecture() {
  const [ref, inView] = useInView();

  return (
    <section id="architecture" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#050505]" />
      <GradientOrb className="w-[500px] h-[500px] bottom-0 left-0" color="purple" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              label="System Architecture"
              title={<>Designing systems<br />that outlast deadlines.</>}
            />
            <p className="text-slate-400 leading-relaxed mt-4">
              Backend code is easy to write. Systems that stay reliable under load, evolve without
              rewrites, and integrate cleanly with the rest of your stack — that takes architectural
              thinking from day one.
            </p>
            <p className="text-slate-400 leading-relaxed mt-4">
              I bring opinionated, experience-backed decisions to API contracts, database schemas,
              service boundaries, and integration patterns — the kind of decisions that determine
              whether your codebase is a foundation or a liability in two years.
            </p>

            {/* Pattern list */}
            <div className="mt-8 space-y-2">
              {[
                'Repository + Service layer pattern',
                'Domain-driven Laravel structure',
                'API versioning & deprecation strategies',
                'Queue-based job processing with retry logic',
                'Event sourcing for financial audit trails',
                'Multi-tenant data isolation patterns',
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-3 text-sm text-slate-400"
                >
                  <div className="w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Capability cards */}
          <div className="grid gap-4">
            {architectureCapabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ x: 4 }}
                className="flex gap-4 p-4 bg-[#0f0f0f] border border-white/[0.06] rounded-xl hover:border-white/[0.12] transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-lg shrink-0 group-hover:border-blue-500/30 transition-colors">
                  {cap.icon}
                </div>
                <div>
                  <h3
                    className="text-white text-sm font-semibold mb-1"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {cap.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{cap.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
