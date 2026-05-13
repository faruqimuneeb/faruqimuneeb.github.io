import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { SectionHeader, Badge } from '../ui';
import { projects } from '../../data/portfolio';
import { ExternalLink, TrendingUp } from 'lucide-react';

function ProjectCard({ project, index, inView }) {
  const isEven = index % 2 === 0;

  const categoryColors = {
    Fintech: 'blue',
    Telephony: 'green',
    SaaS: 'purple',
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-[#0f0f0f] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/[0.12] transition-all duration-400 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60"
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-60"
        style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
      />

      <div className="p-7">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge color={categoryColors[project.category] || 'slate'}>{project.category}</Badge>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono">
                {project.status}
              </span>
            </div>
            <h3
              className="text-white text-xl font-bold group-hover:text-blue-100 transition-colors"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              {project.title}
            </h3>
            <p className="text-slate-600 text-sm font-mono mt-0.5">{project.company}</p>
          </div>

          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 opacity-60 group-hover:opacity-100 transition-opacity"
            style={{ backgroundColor: `${project.color}18`, border: `1px solid ${project.color}30` }}
          >
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: project.color }} />
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

        {/* Impact */}
        <div className="flex items-start gap-2 p-3 bg-white/[0.03] border border-white/[0.05] rounded-lg mb-5">
          <TrendingUp size={14} className="text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-emerald-300 text-xs leading-relaxed">{project.impact}</p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className="text-center p-2.5 bg-white/[0.03] border border-white/[0.05] rounded-lg"
            >
              <div
                className="text-lg font-bold"
                style={{
                  fontFamily: 'Syne, sans-serif',
                  color: project.color,
                }}
              >
                {metric.value}
              </div>
              <div className="text-slate-600 text-[10px] font-mono mt-0.5">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[11px] font-mono text-slate-500 bg-white/[0.03] border border-white/[0.05] rounded hover:text-slate-300 hover:border-white/[0.1] transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [ref, inView] = useInView();

  return (
    <section id="projects" className="relative py-28">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <SectionHeader
            label="Featured Work"
            title={<>Systems built for<br />production pressure.</>}
            subtitle="Selected projects from nine years of backend engineering — each one shipped, scaled, and still running."
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
