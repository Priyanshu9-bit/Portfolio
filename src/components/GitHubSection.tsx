import { motion } from 'framer-motion';
import { Github, ArrowUpRight, GitFork, Star, BookMarked } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { profile } from '@/data/portfolio';

const stats = [
  { icon: BookMarked, label: 'Repositories', value: '—' },
  { icon: Star, label: 'Stars', value: '—' },
  { icon: GitFork, label: 'Forks', value: '—' },
];

export default function GitHubSection() {
  return (
    <section id="github" className="relative py-24 sm:py-28">
      <div className="section-pad mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="GitHub"
          title="Building & Learning on GitHub"
          subtitle="My code lives here. Real stats will appear once the GitHub API is connected — for now these are placeholders."
        />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="gradient-border relative mt-12 overflow-hidden rounded-3xl glass p-8 sm:p-10"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent-blue/20 blur-[90px]" />

          <div className="relative flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-5">
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gemini-grad text-white shadow-lg shadow-accent-blue/30">
                <Github className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">@Priyanshu9-bit</h3>
                <p className="text-sm text-slate-400">Open source & personal projects</p>
              </div>
            </div>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Visit My GitHub <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="relative mt-8 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl glass p-4 text-center">
                <s.icon className="mx-auto h-5 w-5 text-accent-violet" />
                <p className="mt-2 font-display text-2xl font-bold text-white">{s.value}</p>
                <p className="text-xs uppercase tracking-wider text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="relative mt-6 rounded-2xl border border-dashed border-white/10 p-5 text-center">
            <p className="text-sm text-slate-400">
              Contribution activity & featured repositories will appear here once connected.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
