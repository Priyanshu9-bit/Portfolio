import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Download, Github, Linkedin, Sparkles } from 'lucide-react';
import AnimatedBlobs from './AnimatedBlobs';
import Placeholder from './Placeholder';
import { profile, heroRoles } from '@/data/portfolio';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

function useTypewriter(words: string[], speed = 90, pause = 1800) {
  const [text, setText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIdx((i) => i + 1);
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
          );
        },
        deleting ? speed / 2 : speed,
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIdx, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(heroRoles);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16">
      <AnimatedBlobs />

      {/* subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="section-pad mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="mb-5 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold text-accent-cyan"
          >
            <Sparkles className="h-3.5 w-3.5" /> Available for opportunities
          </motion.span>

          <motion.h1 variants={item} className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Hi, I'm <span className="gradient-text">{profile.name}</span> 👋
          </motion.h1>

          {/* Typewriter role */}
          <motion.div variants={item} className="mt-4 flex items-center gap-1 text-lg font-semibold text-slate-200 sm:text-xl">
            <span>{typed}</span>
            <span className="ml-0.5 inline-block h-6 w-0.5 animate-pulse bg-accent-violet sm:h-7" />
          </motion.div>

          <motion.p variants={item} className="mt-5 max-w-xl text-base leading-relaxed text-slate-400">
            {profile.description}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              View My Work <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-ghost">
              <Mail className="h-4 w-4" /> Contact Me
            </a>
            <a href={profile.resumeUrl} className="btn-ghost">
              <Download className="h-4 w-4" /> Resume
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider text-slate-500">Follow</span>
            <div className="h-px w-8 bg-white/10" />
            <div className="flex items-center gap-2">
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
          </motion.div>
        </motion.div>

        {/* Profile photo placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="gradient-border relative rounded-[2rem] p-2">
            <div className="relative overflow-hidden rounded-[1.6rem]">
              <img
  src={profile.photo}
  alt="Priyanshu Panda"
  className="w-full h-full object-cover rounded-[1.6rem]"
/>
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
            </div>
          </div>
          {/* floating glow ring */}
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gemini-grad opacity-20 blur-2xl animate-pulse-glow" />
          {/* rotating ring */}
          <div className="absolute -inset-6 -z-10 rounded-full border border-dashed border-white/[0.06] animate-spin-slow" />
        </motion.div>
      </div>
    </section>
  );
}
