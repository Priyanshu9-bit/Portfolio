import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Placeholder from './Placeholder';
import { certificates } from '@/data/portfolio';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function Certificates() {
  return (
    <section id="certificates" className="relative py-24 sm:py-28">
      <div className="section-pad mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Certificates"
          title="Certificates & More"
          subtitle="Additional certifications and achievements. Add more cards anytime by editing the data file."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {certificates.map((c, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -6 }}
              className="group gradient-border rounded-2xl glass p-4 transition-all"
            >
              <Placeholder label={c.image} aspect="aspect-[4/3]" />
              <div className="mt-4 flex items-start gap-2">
                <Award className="mt-0.5 h-4 w-4 shrink-0 text-accent-violet" />
                <div>
                  <h3 className="text-sm font-bold text-white">{c.title}</h3>
                  <p className="mt-0.5 text-xs text-slate-400">{c.organization}</p>
                  <span className="mt-1 inline-block text-xs font-medium text-accent-blue">{c.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
