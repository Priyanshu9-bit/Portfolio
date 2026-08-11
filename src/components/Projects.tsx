import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Placeholder from './Placeholder';
import { projects } from '@/data/portfolio';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

function TiltCard({ project }: { project: (typeof projects)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      variants={item}
      style={{ perspective: 1000 }}
      className="[transform-style:preserve-3d]"
    >
      <motion.div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="group gradient-border relative overflow-hidden rounded-3xl glass p-5 transition-shadow hover:shadow-2xl hover:shadow-accent-violet/10"
      >
        <div className="overflow-hidden rounded-2xl" style={{ transform: 'translateZ(40px)' }}>
          <Placeholder
            label={project.image}
            aspect="aspect-[16/10]"
            className="transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        <div className="p-3 pt-5" style={{ transform: 'translateZ(30px)' }}>
          <h3 className="text-xl font-bold text-white">{project.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="rounded-full bg-white/[0.05] px-3 py-1 text-xs font-medium text-slate-300 ring-1 ring-white/10"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-3">
            <a
              href={project.liveUrl}
              className="btn-pill bg-gemini-grad text-white shadow-md shadow-accent-blue/20 hover:shadow-lg hover:shadow-accent-violet/30"
            >
              View Project <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={project.githubUrl}
              className="grid h-11 w-11 place-items-center rounded-full glass text-slate-300 transition-all hover:scale-110 hover:text-white"
              aria-label="GitHub repository"
            >
              <Github className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="section-pad mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Featured Projects"
          subtitle="A selection of things I've built. Replace the placeholders with your real projects anytime."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-14 grid gap-6 md:grid-cols-2"
        >
          {projects.map((p) => (
            <TiltCard key={p.id} project={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
