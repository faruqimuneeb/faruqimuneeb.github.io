import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { SectionHeader, Badge } from '../ui';
import { telephonyCapabilities } from '../../data/portfolio';

const telephonyStack = [
  { name: 'VICIdial', desc: 'Contact center platform — core customization & multi-tenant SaaS' },
  { name: 'Asterisk PBX', desc: 'Dialplan authoring · AGI scripts · AMI integration' },
  { name: 'SIP / VoIP', desc: 'Trunk configuration · Codec selection · Carrier management' },
  { name: 'AGI Scripts', desc: 'PHP-based AGI for dynamic IVR and CRM-driven call routing' },
  { name: 'CDR Analytics', desc: 'Call data records · Performance reporting · Live dashboards' },
  { name: 'IVR Design', desc: 'Multi-level menus · Time-based routing · TTS integration' },
];

export default function Telephony() {
  const [ref, inView] = useInView();

  return (
    <section id="telephony" className="relative py-28">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <SectionHeader
            label="Telephony Infrastructure"
            title={<>Contact center systems<br />built from the inside out.</>}
            subtitle="Not just integration experience — years of engineering directly inside VICIdial and Asterisk codebases, extending and customizing at the system level."
            center
          />
        </motion.div>

        {/* Full-width banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="relative overflow-hidden bg-[#0a0f1a] border border-blue-500/20 rounded-2xl p-8 mb-10"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">📞</span>
                <Badge color="green">Specialized Domain</Badge>
              </div>
              <h3
                className="text-2xl font-bold text-white mb-4"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                VICIdial Multi-Tenant SaaS Engineering
              </h3>
              <p className="text-slate-400 leading-relaxed">
                At Primo Dialler, I didn't just configure VICIdial — I extended it. Custom campaign
                logic, predictive dial ratio algorithms, agent performance tracking, and API bridges
                that connected the dialer to CRM systems and reporting platforms. The result was a
                multi-tenant SaaS platform built on the VICIdial core that processed tens of
                thousands of daily calls across multiple client accounts.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Daily Call Volume', value: '50K+', color: '#10b981' },
                { label: 'Uptime SLA', value: '99.9%', color: '#3b82f6' },
                { label: 'Tenant Accounts', value: 'Multi', color: '#06b6d4' },
                { label: 'Asterisk Version', value: '16/18', color: '#8b5cf6' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 bg-white/[0.03] border border-white/[0.06] rounded-xl text-center"
                >
                  <div
                    className="text-2xl font-bold"
                    style={{ fontFamily: 'Syne, sans-serif', color: stat.color }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-slate-600 text-xs font-mono mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Capability cards */}
        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {telephonyCapabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="p-6 bg-[#0f0f0f] border border-white/[0.06] rounded-xl hover:border-emerald-500/20 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-xl shrink-0">
                  {cap.icon}
                </div>
                <div>
                  <h3
                    className="text-white font-semibold mb-2"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {cap.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-3">{cap.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cap.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stack reference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="bg-[#0f0f0f] border border-white/[0.06] rounded-2xl overflow-hidden"
        >
          <div className="px-6 py-4 border-b border-white/[0.06]">
            <p className="text-slate-500 text-xs font-mono uppercase tracking-widest">
              Telephony Stack Reference
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 divide-x divide-y divide-white/[0.04]">
            {telephonyStack.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.08 }}
                className="p-4 hover:bg-white/[0.02] transition-colors"
              >
                <p className="text-white text-sm font-mono font-medium mb-1">{item.name}</p>
                <p className="text-slate-600 text-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
