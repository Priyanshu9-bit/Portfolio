import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { profile } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="section-pad mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-6 text-center">
          <a href="#home" className="font-display text-xl font-bold text-white">
            {profile.name}
          </a>
          <p className="text-sm text-slate-400">{profile.role} | Aspiring Software Developer</p>

          <div className="flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full glass text-slate-300 transition-all hover:scale-110 hover:text-white"
              aria-label="GitHub"
            >
              <Github className="h-4.5 w-4.5" />
            </a>
            <a
              href={profile.linkedin}
              className="grid h-10 w-10 place-items-center rounded-full glass text-slate-300 transition-all hover:scale-110 hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4.5 w-4.5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="grid h-10 w-10 place-items-center rounded-full glass text-slate-300 transition-all hover:scale-110 hover:text-white"
              aria-label="Email"
            >
              <Mail className="h-4.5 w-4.5" />
            </a>
          </div>

          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium text-slate-400 transition-all hover:text-white"
          >
            <ArrowUp className="h-3.5 w-3.5" /> Back to top
          </a>

          <p className="mt-2 text-xs text-slate-500">
            © 2026 {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
