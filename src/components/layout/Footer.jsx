import { Mail } from 'lucide-react';
import { Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/icons.jsx';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#080808]" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center" aria-hidden="true">
              <Code2 size={12} className="text-white" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>
                Muneeb Faruqi
              </p>
              {/* ACCESSIBILITY FIX: slate-600 → slate-400 for contrast */}
              <p className="text-slate-400 text-xs font-mono">Senior PHP Laravel Engineer</p>
            </div>
          </div>

          <div className="flex items-center gap-2" role="list" aria-label="Social links">
            {/* ACCESSIBILITY FIX: aria-label on all icon-only links */}
            <a
              href="https://github.com/faruqimuneeb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Muneeb Faruqi on GitHub"
              role="listitem"
              className="p-2.5 text-slate-400 hover:text-white transition-colors hover:bg-white/5 rounded-lg"
            >
              <GithubIcon size={16} aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com/in/muneeb-faruqi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Muneeb Faruqi on LinkedIn"
              role="listitem"
              className="p-2.5 text-slate-400 hover:text-blue-400 transition-colors hover:bg-white/5 rounded-lg"
            >
              <LinkedinIcon size={16} aria-hidden="true" />
            </a>
            <a
              href="mailto:muneebfaruqi@email.com"
              aria-label="Email Muneeb Faruqi"
              role="listitem"
              className="p-2.5 text-slate-400 hover:text-cyan-400 transition-colors hover:bg-white/5 rounded-lg"
            >
              <Mail size={16} aria-hidden="true" />
            </a>
          </div>

          {/* ACCESSIBILITY FIX: slate-700 → slate-400 for contrast */}
          <p className="text-slate-400 text-xs font-mono">
            © {new Date().getFullYear()} · Built with React & Vite
          </p>
        </div>
      </div>
    </footer>
  );
}
