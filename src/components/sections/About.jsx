import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { SectionHeader, Card, GradientOrb } from '../ui';
import { personalInfo, techStack } from '../../data/portfolio';
import { Server, Database, Phone, Cpu } from 'lucide-react';

const pillars = [
  {
    icon: Server,
    title: 'Backend Engineering',
    description: 'PHP / Laravel · RESTful APIs · MVC architecture at production scale',
    color: '#3b82f6',
  },
  {
    icon: Database,
    title: 'Database Architecture',
    description: 'Schema design · Query optimization · Redis caching · High-volume write workloads',
    color: '#06b6d4',
  },
  {
    icon: Phone,
    title: 'Telephony Systems',
    description: 'VICIdial · Asterisk PBX · AGI scripting · Contact center infrastructure',
    color: '#10b981',
  },
  {
    icon: Cpu,
    title: 'Systems Thinking',
    description: 'Fault tolerance · Performance profiling · Integration design · SaaS multi-tenancy',
    color: '#8b5cf6',
  },
];

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="relative py-16 sm:py-24 overflow-hidden">
      <GradientOrb className="w-[500px] h-[500px] bottom-0 right-0 opacity-50" color="cyan" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionHeader
              label="About"
              title={<>The engineer behind<br />the infrastructure.</>}
              className="mb-8"
            />

            <div className="space-y-5">
              {personalInfo.aboutText.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="text-slate-400 leading-relaxed"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="mt-8 p-4 bg-white/[0.03] border border-white/[0.06] rounded-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 text-sm">
                  🎓
                </div>
                <div>
                  <p className="text-white text-sm font-medium">University of South Asia</p>
                  <p className="text-slate-400 text-xs font-mono">
                    BS Computer Science · 2012 – 2016
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Pillars + Tech */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8"
            >
              {pillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    whileHover={{ y: -3 }}
                    className="p-4 bg-[#111111] border border-white/[0.06] rounded-xl hover:border-white/[0.12] transition-all duration-300 group cursor-default"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${p.color}18` }}
                    >
                      <Icon size={16} style={{ color: p.color }} />
                    </div>
                    <h3 className="text-white text-sm font-semibold mb-1.5" style={{ fontFamily: 'Syne, sans-serif' }}>
                      {p.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed">{p.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Tech Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <p className="text-slate-400 text-xs font-mono uppercase tracking-wider mb-3">
                Core Technology Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.04 }}
                    whileHover={{ scale: 1.05, y: -1 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.04] border border-white/[0.07] rounded-lg text-xs text-slate-400 hover:text-white hover:border-white/[0.15] transition-all duration-200 cursor-default"
                  >
                    <span>{tech.icon}</span>
                    <span className="font-mono">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
