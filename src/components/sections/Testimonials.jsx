import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { SectionHeader } from '../ui';
import { testimonials } from '../../data/portfolio';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const [ref, inView] = useInView();

  return (
    <section id="testimonials" className="relative py-28">
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="relative z-10 max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <SectionHeader
            label="Testimonials"
            title="What colleagues say."
            subtitle="Feedback from the engineers and managers who've worked alongside me."
            center
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -4 }}
              className="p-6 bg-[#0f0f0f] border border-white/[0.06] rounded-2xl hover:border-white/[0.12] transition-all duration-300 relative"
            >
              <Quote size={20} className="text-blue-500/30 mb-4" />
              <p className="text-slate-400 text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 text-xs font-bold font-mono">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {t.name}
                  </p>
                  <p className="text-slate-600 text-xs font-mono">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-slate-700 text-xs font-mono mt-8"
        >
          * Names anonymized per professional courtesy. Full references available on request.
        </motion.p>
      </div>
    </section>
  );
}
