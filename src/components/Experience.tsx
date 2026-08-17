import { motion } from 'framer-motion';
import { Briefcase, ExternalLink } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { internships } from '@/data/portfolio';

const item = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut' as const,
    },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-28">
      <div className="section-pad mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Experience"
          title="Internships & Experience"
          subtitle="Where I've put learning into practice."
        />

        <div className="relative mt-14">
          {/* Vertical timeline line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-accent-blue via-accent-violet to-accent-pink sm:left-1/2" />

          <div className="space-y-16">
            {internships.map((exp, i) => (
              <motion.div
                key={exp.title}
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
                className={`relative flex flex-col gap-6 sm:flex-row sm:items-center ${
                  i % 2 === 0
                    ? 'sm:flex-row'
                    : 'sm:flex-row-reverse'
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-4 top-2 -translate-x-1/2 sm:left-1/2">
                  <div className="grid h-8 w-8 place-items-center rounded-full bg-ink-900 ring-2 ring-accent-violet/60">
                    <Briefcase className="h-4 w-4 text-accent-violet" />
                  </div>
                </div>

                {/* Certificate */}
                <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8">
                  <div className="gradient-border overflow-hidden rounded-2xl glass p-3">
                    <div className="overflow-hidden rounded-xl bg-white">
                      {exp.image.toLowerCase().endsWith('.pdf') ? (
                        <iframe
                          src={exp.image}
                          title={exp.title}
                          className="h-[420px] w-full"
                        />
                      ) : (
                        <img
                          src={exp.image}
                          alt={exp.title}
                          className="h-[420px] w-full object-cover"
                        />
                      )}
                    </div>

                    {/* Open certificate button */}
                    <a
                      href={exp.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 rounded-lg bg-accent-violet px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                    >
                      Open Certificate
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* Internship information */}
                <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent-blue">
                    Internship 0{i + 1}
                  </span>

                  <h3 className="mt-2 text-lg font-bold text-white">
                    {exp.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}