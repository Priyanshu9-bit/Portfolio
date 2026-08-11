import { motion } from 'framer-motion';
import { Code2, Terminal, Database } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { services, skills } from '@/data/portfolio';

const iconMap = { Code2, Terminal, Database };

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

const ticker = [...skills, ...skills];

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-28">
      <div className="section-pad mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What I Do"
          title="Services & Focus"
          subtitle="The areas where I create value — combining clean code, practical thinking, and modern tools."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-14 grid gap-5 md:grid-cols-3"
        >
          {services.map((s) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap] ?? Code2;
            return (
              <motion.div
                key={s.title}
                variants={item}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl glass p-7 transition-all"
              >
                <div className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${s.gradient} opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-25`} />
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${s.gradient} text-white shadow-lg`}>
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Tech ticker marquee */}
      <div className="relative mt-16 overflow-hidden border-y border-white/5 py-5">
        <div className="flex w-max animate-marquee gap-12">
          {ticker.map((s, i) => (
            <span key={i} className="flex items-center gap-3 text-lg font-semibold text-slate-500">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-violet" />
              {s.name}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-950 to-transparent" />
      </div>
    </section>
  );
}
