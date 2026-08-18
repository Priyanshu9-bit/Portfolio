import { motion } from 'framer-motion';
import { Trophy, Award, BadgeCheck } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { achievement } from '@/data/portfolio';

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-28">
      <div className="section-pad mx-auto max-w-5xl">
        <SectionHeading eyebrow="Achievements" title="Achievements" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="gradient-border relative mt-12 overflow-hidden rounded-3xl glass-strong p-8 sm:p-10"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent-violet/25 blur-[100px]" />

          <div className="relative grid items-center gap-8 lg:grid-cols-2">
            {/* Achievement information */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 px-4 py-1.5 text-xs font-semibold text-amber-300 ring-1 ring-amber-400/20">
                <BadgeCheck className="h-3.5 w-3.5" />
                Winner Badge
              </div>

              <div className="mt-5 flex items-center gap-4">
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg shadow-amber-500/30">
                  <Trophy className="h-8 w-8" />
                </div>

                <div>
                  <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                    {achievement.title}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-amber-300">
                    TechSprint 2026
                  </p>
                </div>
              </div>

              <p className="mt-5 text-base leading-relaxed text-slate-300">
                {achievement.description}
              </p>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium text-slate-200">
                <Award className="h-4 w-4 text-accent-pink" />
                Competitive Innovation & Teamwork
              </div>
            </div>

            {/* Certificate image */}
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-2xl shadow-black/40">
              <img
                src={achievement.image}
                alt={achievement.title}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}