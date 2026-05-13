// PERFORMANCE: Hero uses ZERO Framer Motion — pure CSS animations only.
// This eliminates all long tasks on initial load. Framer Motion stays lazy-loaded
// for below-fold sections only, so it doesn't block LCP or FCP.
import { MapPin, Mail, Download, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/icons.jsx';

const terminalLines = [
  { prompt: '$', text: 'php artisan serve', color: '#94a3b8' },
  { prompt: '',  text: 'Starting Laravel development server...', color: '#34d399' },
  { prompt: '$', text: 'git push origin main', color: '#94a3b8' },
  { prompt: '',  text: '✓ Deployed to production', color: '#60a5fa' },
  { prompt: '$', text: 'EXPLAIN SELECT * FROM payments\\G', color: '#94a3b8' },
  { prompt: '',  text: 'Execution plan: 0.002ms · Index: idx', color: '#06b6d4' },
];

const stats = [
  { value: '9+',   label: 'Years Engineering' },
  { value: '30+',  label: 'Production Systems' },
  { value: '5',    label: 'Companies Served' },
  { value: '100+', label: 'Countries Served' },
];

const socials = [
  { Icon: GithubIcon,   href: 'https://github.com/faruqimuneeb',         label: 'Muneeb Faruqi on GitHub' },
  { Icon: LinkedinIcon, href: 'https://linkedin.com/in/muneeb-faruqi',   label: 'Muneeb Faruqi on LinkedIn' },
  { Icon: Mail,         href: 'mailto:muneebfaruqi@email.com',           label: 'Email Muneeb Faruqi' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20" aria-label="Hero">
      {/* Background grid — CSS only */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)',
        backgroundSize: '60px 60px'
      }} aria-hidden="true" />

      {/* Orbs — CSS only, no JS */}
      <div className="absolute -top-48 -left-48 w-[500px] h-[500px] rounded-full bg-blue-600/15 blur-[80px] pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/2 -right-32 w-[350px] h-[350px] rounded-full bg-cyan-500/10 blur-[80px] pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#080808_100%)]" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left: Content ── */}
          <div>
            {/* Availability badge */}
            <div className="hero-fade-1 mb-8 inline-flex items-center gap-2.5 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              <span className="text-emerald-400 text-xs font-mono tracking-wider">
                Open to Senior Roles & Architecture Engagements
              </span>
            </div>

            {/* H1 — LCP element — NO animation, renders immediately */}
            <h1 className="hero-fade-2 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6"
                style={{ fontFamily: 'Syne, sans-serif' }}>
              Senior{' '}
              <span style={{
                background: 'linear-gradient(135deg,#60a5fa 0%,#06b6d4 60%,#818cf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Laravel<br />Backend
              </span>{' '}
              Engineer.
            </h1>

            {/* Subtext */}
            <p className="hero-fade-3 text-slate-400 text-base sm:text-lg leading-relaxed mb-6 max-w-xl">
              Laravel fintech backend developer · VICIdial customization expert · Asterisk PBX engineer · Multi-tenant SaaS architect.
              Nine years building backend infrastructure that holds under load.
            </p>

            {/* Location */}
            <div className="hero-fade-4 flex flex-wrap items-center gap-3 mb-4">
              <div className="flex items-center gap-1.5 text-slate-400 text-sm font-mono">
                <MapPin size={12} aria-hidden="true" />
                <span>Lahore, Pakistan · Remote-Ready</span>
              </div>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span className="text-slate-400 text-sm font-mono">US · UK · UAE · CA · AU</span>
            </div>

            {/* SEO keyword line */}
            <p className="hero-fade-4 text-[11px] font-mono text-slate-500 mb-8 leading-relaxed" aria-label="Specializations">
              Senior Laravel Developer · VICIdial Developer · Asterisk PBX Developer ·
              Multi-Tenant SaaS · GoHighLevel API · Payment Gateway Integration
            </p>

            {/* CTAs — full width on mobile */}
            <div className="hero-fade-5 flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="mailto:muneebfaruqi@email.com"
                aria-label="Send Muneeb Faruqi an email"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg,#2563eb,#0891b2)', boxShadow: '0 4px 24px rgba(37,99,235,0.3)' }}
              >
                <Mail size={15} aria-hidden="true" />
                Let's Talk
                <ArrowRight size={13} aria-hidden="true" />
              </a>
              <a
                href="/cv.pdf"
                aria-label="Download Muneeb Faruqi's CV"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/10 bg-white/5 text-slate-300 text-sm font-medium hover:text-white hover:border-white/25 hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Download size={15} aria-hidden="true" />
                Download CV
              </a>
            </div>

            {/* Socials */}
            <div className="hero-fade-5 flex items-center gap-3 flex-wrap">
              <span className="text-slate-500 text-xs font-mono">Find me on</span>
              <div className="flex gap-2" role="list" aria-label="Social media links">
                {socials.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    role="listitem"
                    className="p-2.5 bg-white/[0.04] border border-white/[0.07] rounded-lg text-slate-400 hover:text-white hover:border-white/[0.15] hover:bg-white/[0.08] transition-all duration-200"
                  >
                    <Icon size={16} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Terminal (hidden on small mobile, shown md+) ── */}
          <div className="hidden md:block hero-fade-right">
            {/* Terminal */}
            <div className="bg-[#0d0d0d] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl shadow-black/60"
                 role="img" aria-label="Code terminal showing Laravel and MySQL commands">
              {/* Terminal bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#111111]">
                <div className="w-3 h-3 rounded-full bg-red-500/70" aria-hidden="true" />
                <div className="w-3 h-3 rounded-full bg-amber-500/70" aria-hidden="true" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/70" aria-hidden="true" />
                {/* CONTRAST FIX: slate-600 → slate-400 */}
                <span className="ml-3 text-slate-400 text-xs font-mono" aria-hidden="true">muneeb@portfolio ~ </span>
              </div>
              <div className="p-5 font-mono text-sm space-y-2" aria-hidden="true">
                {terminalLines.map((line, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 terminal-line"
                    style={{ animationDelay: `${0.8 + i * 0.15}s` }}
                  >
                    {line.prompt && <span style={{ color: '#60a5fa' }}>{line.prompt}</span>}
                    <span style={{ color: line.color }}>{line.text}</span>
                  </div>
                ))}
                <div className="flex items-center gap-2">
                  <span style={{ color: '#60a5fa' }}>$</span>
                  <span className="w-2 h-4 bg-blue-400 inline-block cursor-blink" />
                </div>
              </div>
            </div>

            {/* Stats grid — CONTRAST FIX: slate-600 → slate-400 */}
            <div className="grid grid-cols-4 gap-2 mt-4" role="list" aria-label="Career statistics">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  role="listitem"
                  className="bg-[#0d0d0d] border border-white/[0.06] rounded-xl p-3 text-center hero-stats"
                >
                  <div className="text-xl sm:text-2xl font-bold" style={{
                    fontFamily: 'Syne, sans-serif',
                    background: 'linear-gradient(135deg,#60a5fa,#06b6d4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>
                    {stat.value}
                  </div>
                  {/* CONTRAST FIX: slate-600 → slate-400 */}
                  <div className="text-slate-400 text-[10px] font-mono mt-0.5 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile stats — show only on small screens */}
        <div className="md:hidden grid grid-cols-4 gap-2 mt-10" role="list" aria-label="Career statistics">
          {stats.map((stat) => (
            <div key={stat.label} role="listitem" className="text-center">
              <div className="text-xl font-bold" style={{
                fontFamily: 'Syne, sans-serif',
                background: 'linear-gradient(135deg,#60a5fa,#06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                {stat.value}
              </div>
              <div className="text-slate-400 text-[10px] font-mono mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hero-fade-5" aria-hidden="true">
        <span className="text-slate-500 text-[10px] font-mono tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </div>
    </section>
  );
}
