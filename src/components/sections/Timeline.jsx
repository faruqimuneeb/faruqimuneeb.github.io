import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { SectionHeader, GradientOrb } from '../ui';
import { experience } from '../../data/portfolio';
import { MapPin, Calendar, Briefcase } from 'lucide-react';
import { useState } from 'react';

export default function Timeline() {
  const [ref, inView] = useInView();
  const [expanded, setExpanded] = useState(0);

  return (
    <section id="experience" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#050505]" />
      <GradientOrb className="w-[500px] h-[500px] top-1/2 right-0 opacity-40" color="blue" />

      <div className="relative z-10 max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <SectionHeader
            label="Experience"
            title={<>Nine years.<br />Five companies.<br />One discipline.</>}
          />
          <p className="text-slate-400 mt-4 max-w-xl">
            A consistent focus on backend engineering, system architecture, and production-grade
            software — across fintech, telecoms, and enterprise software development.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-white/[0.06] hidden md:block" />

          <div className="space-y-4">
            {experience.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="md:pl-12 relative"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-5 w-10 h-10 rounded-full border-2 border-[#050505] flex items-center justify-center hidden md:flex"
                  style={{ backgroundColor: `${job.color}20`, borderColor: job.color + '40' }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: job.color }} />
                </div>

                {/* Card */}
                <div
                  className="bg-[#0f0f0f] border border-white/[0.06] rounded-xl overflow-hidden hover:border-white/[0.1] transition-all duration-300 cursor-pointer"
                  onClick={() => setExpanded(expanded === i ? -1 : i)}
                >
                  {/* Top accent */}
                  <div
                    className="h-px"
                    style={{ background: `linear-gradient(90deg, ${job.color}, transparent)` }}
                  />

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <span
                            className="text-xs font-mono px-2 py-0.5 rounded-full border"
                            style={{
                              color: job.color,
                              backgroundColor: job.color + '15',
                              borderColor: job.color + '30',
                            }}
                          >
                            {job.industry}
                          </span>
                        </div>

                        <h3
                          className="text-white text-lg font-bold"
                          style={{ fontFamily: 'Syne, sans-serif' }}
                        >
                          {job.role}
                        </h3>
                        <p className="text-slate-400 font-medium">{job.company}</p>

                        <div className="flex flex-wrap items-center gap-4 mt-2">
                          <span className="flex items-center gap-1.5 text-slate-600 text-xs font-mono">
                            <Calendar size={11} />
                            {job.period}
                          </span>
                          <span className="flex items-center gap-1.5 text-slate-600 text-xs font-mono">
                            <MapPin size={11} />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1.5 text-slate-600 text-xs font-mono">
                            <Briefcase size={11} />
                            {job.type}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-2 shrink-0">
                        <span className="text-slate-600 text-xs font-mono">{job.duration}</span>
                        <motion.div
                          animate={{ rotate: expanded === i ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-slate-600 text-xs"
                        >
                          ▼
                        </motion.div>
                      </div>
                    </div>

                    {/* Expanded content */}
                    <motion.div
                      initial={false}
                      animate={{ height: expanded === i ? 'auto' : 0, opacity: expanded === i ? 1 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pt-5 mt-5 border-t border-white/[0.06]">
                        <ul className="space-y-2.5 mb-4">
                          {job.highlights.map((h, hi) => (
                            <li key={hi} className="flex items-start gap-2.5 text-sm text-slate-400">
                              <span style={{ color: job.color }} className="mt-1 shrink-0 text-xs">
                                ◆
                              </span>
                              {h}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((s) => (
                            <span
                              key={s}
                              className="px-2 py-0.5 text-[10px] font-mono rounded border text-slate-500"
                              style={{ borderColor: job.color + '30', backgroundColor: job.color + '08' }}
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
