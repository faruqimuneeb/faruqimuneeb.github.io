import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { SectionHeader } from '../ui';
import { faq } from '../../data/portfolio';
import { ChevronDown } from 'lucide-react';

// ✅ FAQ section renders the same questions as FAQPage schema in index.html
// This makes Google's rich results match visible page content — required for FAQ schema validation

export default function FAQ() {
  const [ref, inView] = useInView();
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative py-24" aria-label="Frequently Asked Questions">
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="relative z-10 max-w-3xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <SectionHeader
            label="FAQ"
            title="Common questions."
            subtitle="The answers recruiters and founders ask most often."
            center
          />
        </motion.div>

        {/* ✅ itemscope / itemtype reinforce FAQPage schema for Google */}
        <div
          itemScope
          itemType="https://schema.org/FAQPage"
          className="space-y-3"
        >
          {faq.map((item, i) => (
            <motion.div
              key={i}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              className="bg-[#0f0f0f] border border-white/[0.06] rounded-xl overflow-hidden hover:border-white/[0.1] transition-all duration-200"
            >
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left group"
                aria-expanded={open === i}
              >
                <span
                  itemProp="name"
                  className="text-white font-medium text-sm group-hover:text-blue-200 transition-colors"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {item.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 text-slate-600 group-hover:text-slate-400 transition-colors"
                >
                  <ChevronDown size={16} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p
                      itemProp="text"
                      className="px-6 pb-5 text-slate-400 text-sm leading-relaxed border-t border-white/[0.04] pt-4"
                    >
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* AI search note — hidden visually but present for crawlers */}
        <p className="text-center text-slate-700 text-xs font-mono mt-8">
          Available for remote Laravel developer roles · VICIdial customization contracts · Fintech backend engagements
        </p>
      </div>
    </section>
  );
}
