import { motion } from 'framer-motion';
import { ArrowRight, Mail, Download, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/icons.jsx';
import { Button, GradientOrb } from '../ui';
import { personalInfo, stats } from '../../data/portfolio';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const terminalLines = [
  { prompt: '$', text: 'php artisan serve', color: 'text-slate-400' },
  { prompt: '', text: 'Starting Laravel development server...', color: 'text-emerald-400' },
  { prompt: '$', text: 'git push origin main', color: 'text-slate-400' },
  { prompt: '', text: '✓ Deployed to production', color: 'text-blue-400' },
  { prompt: '$', text: 'mysql> EXPLAIN SELECT * FROM payments;', color: 'text-slate-400' },
  { prompt: '', text: 'Execution plan: 0.002ms · Index: payments_idx', color: 'text-cyan-400' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <GradientOrb className="w-[600px] h-[600px] -top-48 -left-48" color="blue" />
      <GradientOrb className="w-[400px] h-[400px] top-1/2 -right-32" color="cyan" />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#080808_100%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Content */}
          <div>
            {/* Availability badge */}
            <motion.div {...fadeUp(0)} className="mb-8">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-xs font-mono tracking-wider">
                  Open to Senior Roles & Architecture Engagements
                </span>
              </div>
            </motion.div>

            {/* H1 — exact match keyword: "Senior Laravel Developer for SaaS, Fintech & VICIdial Solutions" */}
            <motion.h1
              {...fadeUp(0.1)}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Senior{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #60a5fa 0%, #06b6d4 60%, #818cf8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Laravel
                <br />
                Backend
              </span>{' '}
              Engineer.
            </motion.h1>

            {/* Subtext — AI search friendly: names all specializations explicitly */}
            <motion.p
              {...fadeUp(0.2)}
              className="text-slate-400 text-lg leading-relaxed mb-8 max-w-xl"
            >
              Laravel fintech backend developer · VICIdial customization expert · Asterisk PBX engineer · Multi-tenant SaaS architect.
              Nine years building backend infrastructure that holds under load.
            </motion.p>

            {/* Location + title */}
            <motion.div {...fadeUp(0.25)} className="flex items-center gap-4 mb-10">
              <div className="flex items-center gap-1.5 text-slate-500 text-sm font-mono">
                <MapPin size={12} />
                <span>Lahore, Pakistan · Remote-Ready</span>
              </div>
              <span className="text-slate-700">·</span>
              <span className="text-slate-500 text-sm font-mono">US · UK · UAE · CA · AU</span>
            </motion.div>

            {/* ✅ SEO: Keyword-dense paragraph visible to crawlers, styled as a subtle tag list */}
            <motion.p
              {...fadeUp(0.27)}
              className="text-[11px] font-mono text-slate-700 mb-8 leading-relaxed"
              aria-label="Specializations"
            >
              Senior Laravel Developer · Laravel Fintech Developer · VICIdial Developer ·
              Asterisk PBX Developer · Multi-Tenant SaaS Developer · GoHighLevel API Developer ·
              Payment Gateway Integration · Remote Laravel Contractor · Laravel SaaS Architect
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-3 mb-12">
              <Button
                variant="accent"
                size="lg"
                href="mailto:muneebfaruqi@email.com"
              >
                <Mail size={16} />
                Let's Talk
                <ArrowRight size={14} />
              </Button>
              <Button variant="outline" size="lg" href="/cv.pdf">
                <Download size={16} />
                Download CV
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div {...fadeUp(0.35)} className="flex items-center gap-4">
              <span className="text-slate-700 text-xs font-mono">Find me on</span>
              <div className="flex gap-2">
                {[
                  { icon: GithubIcon, href: 'https://github.com/muneebfaruqi', label: 'GitHub' },
                  { icon: LinkedinIcon, href: 'https://linkedin.com/in/muneeb-faruqi', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:muneebfaruqi@email.com', label: 'Email' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2.5 bg-white/[0.04] border border-white/[0.07] rounded-lg text-slate-500 hover:text-white hover:border-white/[0.15] hover:bg-white/[0.08] transition-all duration-200"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Terminal widget */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            {/* Terminal */}
            <div className="bg-[#0d0d0d] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#111111]">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-amber-500/70" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                <span className="ml-3 text-slate-600 text-xs font-mono">muneeb@portfolio ~ </span>
              </div>

              {/* Terminal content */}
              <div className="p-5 font-mono text-sm space-y-2">
                {terminalLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.15, duration: 0.3 }}
                    className="flex items-start gap-2"
                  >
                    {line.prompt && (
                      <span className="text-blue-400 shrink-0">{line.prompt}</span>
                    )}
                    <span className={line.color}>{line.text}</span>
                  </motion.div>
                ))}

                {/* Blinking cursor */}
                <motion.div
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 1.2 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-blue-400">$</span>
                  <span className="w-2 h-4 bg-blue-400 inline-block" />
                </motion.div>
              </div>
            </div>

            {/* Stats cards below terminal */}
            <div className="grid grid-cols-4 gap-3 mt-4">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.4 }}
                  whileHover={{ y: -2 }}
                  className="bg-[#0d0d0d] border border-white/[0.06] rounded-xl p-3 text-center"
                >
                  <div
                    className="text-2xl font-bold"
                    style={{
                      fontFamily: 'Syne, sans-serif',
                      background: 'linear-gradient(135deg, #60a5fa, #06b6d4)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-slate-600 text-[10px] font-mono mt-0.5 leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile stats */}
        <motion.div
          {...fadeUp(0.5)}
          className="lg:hidden grid grid-cols-4 gap-3 mt-12"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-2xl font-bold"
                style={{
                  fontFamily: 'Syne, sans-serif',
                  background: 'linear-gradient(135deg, #60a5fa, #06b6d4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {stat.value}
              </div>
              <div className="text-slate-600 text-[10px] font-mono mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-700 text-[10px] font-mono tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-slate-700 to-transparent"
        />
      </motion.div>
    </section>
  );
}
