import { motion } from 'framer-motion';
import { GraduationCap, School, BookOpen, Code2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { aboutCards, aboutParagraph } from '@/data/portfolio';

const iconMap = { GraduationCap, School, BookOpen, Code2 };

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="section-pad mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About Me"
          title="A bit about me"
          subtitle={aboutParagraph}
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {aboutCards.map((c) => {
            const Icon = iconMap[c.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={c.title}
                variants={item}
                whileHover={{ y: -6 }}
                className="gradient-border group relative rounded-2xl glass p-6 transition-all"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gemini-grad-soft text-accent-violet transition-colors group-hover:text-accent-pink">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">{c.title}</h3>
                <p className="mt-2 text-sm font-medium text-white">{c.value}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
