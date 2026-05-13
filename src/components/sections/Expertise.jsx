import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { SectionHeader, GradientOrb } from '../ui';
import { skills } from '../../data/portfolio';

const categories = [
  { key: 'backend', label: 'Backend & Frameworks', color: '#3b82f6' },
  { key: 'database', label: 'Database & Caching', color: '#06b6d4' },
  { key: 'telephony', label: 'Telephony Systems', color: '#10b981' },
  { key: 'cloud', label: 'Cloud & DevOps', color: '#f59e0b' },
  { key: 'integrations', label: 'Integrations & APIs', color: '#8b5cf6' },
  { key: 'frontend', label: 'Frontend & Mobile', color: '#ec4899' },
];

function SkillBar({ name, level, color, inView, delay }) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">
          {name}
        </span>
        <span className="text-xs font-mono text-slate-600 group-hover:text-slate-400 transition-colors">
          {level}%
        </span>
      </div>
      <div className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

function CategoryCard({ cat, inView, index }) {
  const categorySkills = skills[cat.key];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-[#0f0f0f] border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.1] transition-all duration-300"
    >
      <div className="flex items-center gap-2.5 mb-5">
        <div
          className="w-1.5 h-4 rounded-full"
          style={{ backgroundColor: cat.color }}
        />
        <h3
          className="text-white text-sm font-semibold"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          {cat.label}
        </h3>
      </div>

      <div className="space-y-4">
        {categorySkills.map((skill, si) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            color={cat.color}
            inView={inView}
            delay={index * 0.1 + si * 0.08 + 0.3}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Expertise() {
  const [ref, inView] = useInView();

  return (
    <section id="expertise" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#050505]" />
      <GradientOrb className="w-[600px] h-[600px] top-0 left-1/2 -translate-x-1/2 opacity-30" color="blue" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionHeader
            label="Technical Expertise"
            title={<>A decade of depth,<br />not breadth.</>}
            subtitle="I specialize rather than generalize. Nine years of focused investment in PHP/Laravel, database systems, and telephony infrastructure."
            center
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.key} cat={cat} inView={inView} index={i} />
          ))}
        </div>

        {/* Proficiency legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-6 mt-10"
        >
          {[
            { range: '90–100%', label: 'Expert' },
            { range: '80–89%', label: 'Advanced' },
            { range: '65–79%', label: 'Proficient' },
          ].map(({ range, label }) => (
            <div key={label} className="flex items-center gap-2 text-xs text-slate-600 font-mono">
              <span className="text-slate-500">{range}</span>
              <span>→</span>
              <span>{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
