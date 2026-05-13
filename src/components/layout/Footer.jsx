import { Mail, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/icons.jsx';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#080808]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
              <Code2 size={12} className="text-white" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>
                Muneeb Faruqi
              </p>
              <p className="text-slate-600 text-xs font-mono">Senior PHP Laravel Engineer</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/muneebfaruqi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-white transition-colors hover:bg-white/5 rounded-lg"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href="https://linkedin.com/in/muneeb-faruqi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-blue-400 transition-colors hover:bg-white/5 rounded-lg"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href="mailto:muneebfaruqi@email.com"
              className="p-2 text-slate-600 hover:text-cyan-400 transition-colors hover:bg-white/5 rounded-lg"
            >
              <Mail size={16} />
            </a>
          </div>

          <p className="text-slate-700 text-xs font-mono">
            © {new Date().getFullYear()} · Built with React & Vite
          </p>
        </div>
      </div>
    </footer>
  );
}
