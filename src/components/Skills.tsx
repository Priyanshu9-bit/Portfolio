import { motion } from 'framer-motion';
import {
  Code2,
  Palette,
  Terminal,
  Atom,
  Database,
  Flame,
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import { skills } from '@/data/portfolio';

const iconFor: Record<string, typeof Code2> = {
  HTML: Code2,
  CSS: Palette,
  Python: Terminal,
  React: Atom,
  SQL: Database,
  Firebase: Flame,
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-28">
      <div className="section-pad mx-auto max-w-7xl">
        <SectionHeading eyebrow="Skills" title="My Tech Stack" subtitle="Technologies I work with to build modern, practical applications." />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((s) => {
            const Icon = iconFor[s.name] ?? Code2;
            return (
              <motion.div
                key={s.name}
                variants={item}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl glass p-6 transition-all"
              >
                {/* hover glow */}
                <div className={`pointer-events-none absolute -inset-1 -z-10 bg-gradient-to-br ${s.gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30`} />

                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${s.gradient} text-white shadow-lg`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">{s.name}</h3>
                <p className="mt-1 text-sm text-slate-400">{s.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
