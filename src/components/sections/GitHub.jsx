import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { SectionHeader } from '../ui';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '../ui/icons.jsx';

// Simulated contribution grid
function ContributionGrid({ inView }) {
  const weeks = 53;
  const days = 7;

  const getLevel = (week, day) => {
    // Create realistic-looking contribution pattern
    const seed = week * 7 + day;
    const base = Math.sin(seed * 0.3) * 0.5 + 0.5;
    const spike = seed % 17 === 0 ? 1 : 0;
    const val = base * 0.6 + spike * 0.4;
    if (val < 0.2) return 0;
    if (val < 0.4) return 1;
    if (val < 0.6) return 2;
    if (val < 0.8) return 3;
    return 4;
  };

  const colors = [
    '#0f0f0f',
    '#1a3a1a',
    '#1d5c1d',
    '#28a745',
    '#39d353',
  ];

  return (
    <div className="overflow-x-auto pb-2">
      <div className="flex gap-1 min-w-max">
        {Array.from({ length: weeks }).map((_, w) => (
          <div key={w} className="flex flex-col gap-1">
            {Array.from({ length: days }).map((_, d) => {
              const level = getLevel(w, d);
              return (
                <motion.div
                  key={d}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: (w * 7 + d) * 0.001, duration: 0.2 }}
                  className="w-3 h-3 rounded-sm cursor-pointer hover:ring-1 hover:ring-white/30 transition-all"
                  style={{ backgroundColor: colors[level] }}
                  title={`Level ${level}`}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GitHub() {
  const [ref, inView] = useInView();

  const githubStats = [
    { label: 'Repositories', value: '40+', icon: '📦' },
    { label: 'Contributions', value: '1.2K+', icon: '✅' },
    { label: 'Languages', value: 'PHP, JS', icon: '💻' },
    { label: 'Focus', value: 'Laravel', icon: '🔴' },
  ];

  return (
    <section id="github" className="relative py-28">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
          >
            <SectionHeader
              label="GitHub"
              title={<>Code that speaks<br />for itself.</>}
            />
            <p className="text-slate-400 mt-4 leading-relaxed">
              The majority of production work lives in private enterprise repositories — that's
              the nature of fintech and telecoms. What's public reflects the same principles:
              clean architecture, documented APIs, and code written to be maintained.
            </p>

            <div className="grid grid-cols-2 gap-3 mt-8">
              {githubStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="p-4 bg-[#0f0f0f] border border-white/[0.06] rounded-xl"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">{stat.icon}</span>
                    <span
                      className="text-xl font-bold text-white"
                      style={{ fontFamily: 'Syne, sans-serif' }}
                    >
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-slate-600 text-xs font-mono">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="https://github.com/muneebfaruqi"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-white/[0.05] border border-white/[0.08] rounded-lg text-sm text-slate-300 hover:text-white hover:border-white/[0.2] hover:bg-white/[0.08] transition-all duration-200"
            >
              <GithubIcon size={16} />
              View GitHub Profile
              <ExternalLink size={12} className="text-slate-600" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-[#0f0f0f] border border-white/[0.06] rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <GithubIcon size={16} className="text-slate-500" />
                  <span className="text-white text-sm font-mono">muneebfaruqi</span>
                </div>
                <span className="text-slate-600 text-xs font-mono">Last 12 months</span>
              </div>

              <ContributionGrid inView={inView} />

              <div className="flex items-center justify-between mt-4">
                <span className="text-slate-600 text-xs font-mono">Less</span>
                <div className="flex gap-1">
                  {['#0f0f0f', '#1a3a1a', '#1d5c1d', '#28a745', '#39d353'].map((c) => (
                    <div key={c} className="w-3 h-3 rounded-sm" style={{ backgroundColor: c }} />
                  ))}
                </div>
                <span className="text-slate-600 text-xs font-mono">More</span>
              </div>
            </div>

            {/* Top languages */}
            <div className="mt-4 bg-[#0f0f0f] border border-white/[0.06] rounded-xl p-5">
              <p className="text-slate-600 text-xs font-mono uppercase tracking-wider mb-4">
                Language Distribution
              </p>
              {[
                { lang: 'PHP', pct: 68, color: '#7a86c8' },
                { lang: 'JavaScript', pct: 18, color: '#f7df1e' },
                { lang: 'SQL', pct: 9, color: '#00758f' },
                { lang: 'Bash / Shell', pct: 5, color: '#4eaa25' },
              ].map((l, i) => (
                <div key={l.lang} className="mb-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400 font-mono">{l.lang}</span>
                    <span className="text-slate-600 font-mono">{l.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: l.color }}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${l.pct}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.4 + i * 0.1, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
