import { motion } from 'framer-motion';

// ─── Button ─────────────────────────────────────────────────────────────────
export function Button({ children, variant = 'primary', size = 'md', href, onClick, className = '', ...props }) {
  const base =
    'inline-flex items-center gap-2 font-medium rounded-lg transition-all duration-200 cursor-pointer select-none';

  const variants = {
    primary:
      'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/30 hover:shadow-blue-700/40 hover:-translate-y-0.5',
    outline:
      'border border-white/10 hover:border-white/25 text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 hover:-translate-y-0.5',
    ghost: 'text-slate-400 hover:text-white hover:bg-white/5',
    accent:
      'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-lg shadow-blue-900/30 hover:-translate-y-0.5',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  };

  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className={cls} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={cls} {...props}>
      {children}
    </button>
  );
}

// ─── Badge ───────────────────────────────────────────────────────────────────
export function Badge({ children, color = 'blue', className = '' }) {
  const colors = {
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    green: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    slate: 'bg-slate-700/50 text-slate-400 border-slate-600/30',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border font-mono ${colors[color]} ${className}`}
    >
      {children}
    </span>
  );
}

// ─── Section Header ──────────────────────────────────────────────────────────
export function SectionHeader({ label, title, subtitle, center = false, className = '' }) {
  return (
    <div className={`${center ? 'text-center' : ''} ${className}`}>
      {label && (
        <div className={`flex items-center gap-3 mb-4 ${center ? 'justify-center' : ''}`}>
          <span className="h-px w-8 bg-blue-500/50" />
          <span className="text-blue-400 text-xs font-mono tracking-widest uppercase">{label}</span>
          <span className="h-px w-8 bg-blue-500/50" />
        </div>
      )}
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
        style={{ fontFamily: 'Syne, sans-serif' }}
      >
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-slate-400 text-lg leading-relaxed max-w-2xl">{subtitle}</p>}
    </div>
  );
}

// ─── Card ────────────────────────────────────────────────────────────────────
export function Card({ children, className = '', hover = true, glow = false }) {
  return (
    <div
      className={`
        bg-[#111111] border border-white/[0.06] rounded-xl p-6
        ${hover ? 'transition-all duration-300 hover:border-white/[0.12] hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50' : ''}
        ${glow ? 'hover:shadow-blue-900/20' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

// ─── Dot Grid Background ─────────────────────────────────────────────────────
export function DotGrid() {
  return (
    <div
      className="absolute inset-0 opacity-[0.3]"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }}
    />
  );
}

// ─── Gradient Orb ────────────────────────────────────────────────────────────
export function GradientOrb({ className = '', color = 'blue' }) {
  const colors = {
    blue: 'bg-blue-600/20',
    cyan: 'bg-cyan-500/15',
    purple: 'bg-purple-600/20',
  };
  return (
    <div
      className={`absolute rounded-full blur-[80px] pointer-events-none ${colors[color]} ${className}`}
    />
  );
}

// ─── Stat Box ────────────────────────────────────────────────────────────────
export function StatBox({ value, label }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="flex flex-col items-center p-5 bg-white/[0.03] border border-white/[0.06] rounded-xl"
    >
      <span
        className="text-3xl font-bold text-white"
        style={{
          fontFamily: 'Syne, sans-serif',
          background: 'linear-gradient(135deg, #60a5fa, #06b6d4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {value}
      </span>
      <span className="text-slate-500 text-xs mt-1 text-center font-mono">{label}</span>
    </motion.div>
  );
}
