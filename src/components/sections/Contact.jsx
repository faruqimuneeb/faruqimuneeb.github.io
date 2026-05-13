import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { SectionHeader, GradientOrb } from '../ui';
import { Mail, MapPin, Clock, ArrowRight, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/icons.jsx';
import { useState } from 'react';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'muneebfaruqi@email.com',
    href: 'mailto:muneebfaruqi@email.com',
    desc: 'Best for project enquiries & technical discussions',
    color: '#3b82f6',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/muneeb-faruqi',
    href: 'https://linkedin.com/in/muneeb-faruqi',
    desc: 'For professional connection & recruitment',
    color: '#0077b5',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/muneebfaruqi',
    href: 'https://github.com/muneebfaruqi',
    desc: 'Open source work & code samples',
    color: '#fff',
  },
];

export default function Contact() {
  const [ref, inView] = useInView();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:muneebfaruqi@email.com?subject=Portfolio Enquiry from ${form.name} at ${form.company}&body=${encodeURIComponent(form.message)}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <GradientOrb className="w-[600px] h-[600px] bottom-0 right-0 opacity-40" color="blue" />
      <GradientOrb className="w-[400px] h-[400px] top-0 left-0 opacity-30" color="cyan" />

      <div className="relative z-10 max-w-6xl mx-auto px-6" ref={ref}>
        {/* Top banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <SectionHeader
            label="Let's Talk"
            title={<>Ready to build<br />something that lasts?</>}
            subtitle="Available for senior backend roles, API architecture engagements, telephony system projects, and fintech platform development."
            center
          />

          <div className="flex items-center justify-center gap-6 mt-6">
            <div className="flex items-center gap-2 text-sm text-slate-500 font-mono">
              <MapPin size={13} />
              Lahore, Pakistan (Remote-ready)
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500 font-mono">
              <Clock size={13} />
              PKT / UTC+5
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-sm font-mono">Available Now</span>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-[#0f0f0f] border border-white/[0.06] rounded-2xl p-7">
              <h3
                className="text-white font-semibold mb-5"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                Send a message
              </h3>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4 text-2xl">
                    ✓
                  </div>
                  <p className="text-white font-semibold mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>
                    Mail client opened
                  </p>
                  <p className="text-slate-500 text-sm">Your message is ready to send. I'll respond within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-500 mb-1.5">Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full bg-white/[0.03] border border-white/[0.07] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-700 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-500 mb-1.5">Email</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full bg-white/[0.03] border border-white/[0.07] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-700 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-500 mb-1.5">Company</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="Your company"
                      className="w-full bg-white/[0.03] border border-white/[0.07] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-700 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-500 mb-1.5">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about the project, the stack, and what you're looking for..."
                      className="w-full bg-white/[0.03] border border-white/[0.07] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-700 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-900/40"
                  >
                    <Send size={14} />
                    Send Message
                    <ArrowRight size={14} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right: Contact methods */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {contactMethods.map((method, i) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 p-5 bg-[#0f0f0f] border border-white/[0.06] rounded-xl hover:border-white/[0.15] transition-all duration-300 group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${method.color}18`, border: `1px solid ${method.color}25` }}
                  >
                    <Icon size={16} style={{ color: method.color }} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-mono mb-0.5">{method.label}</p>
                    <p className="text-white text-sm font-medium group-hover:text-blue-100 transition-colors">
                      {method.value}
                    </p>
                    <p className="text-slate-600 text-xs mt-1">{method.desc}</p>
                  </div>
                  <ArrowRight
                    size={14}
                    className="ml-auto text-slate-700 group-hover:text-slate-400 transition-colors shrink-0 mt-2"
                  />
                </motion.a>
              );
            })}

            {/* What I'm looking for */}
            <div className="p-5 bg-blue-500/5 border border-blue-500/15 rounded-xl">
              <p
                className="text-white text-sm font-semibold mb-3"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                What I'm looking for
              </p>
              <ul className="space-y-2">
                {[
                  'Senior backend or lead backend engineer roles',
                  'Fintech or telecom platform projects',
                  'API architecture & system design engagements',
                  'VICIdial / Asterisk telephony contracts',
                  'SaaS product backend development',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-slate-400">
                    <span className="text-blue-500 mt-0.5 shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
