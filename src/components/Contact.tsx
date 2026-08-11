import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import AnimatedBlobs from './AnimatedBlobs';
import { profile } from '@/data/portfolio';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend-only demo form — messages are not actually sent.
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  const field =
    'w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-all focus:border-accent-violet/60 focus:ring-2 focus:ring-accent-violet/20';

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <AnimatedBlobs />
      <div className="section-pad relative mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Connect"
          subtitle="Have a project idea, internship opportunity, or just want to connect? I'd love to hear from you."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            onSubmit={handleSubmit}
            className="gradient-border rounded-3xl glass p-6 sm:p-8 lg:col-span-3"
          >
            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className={field}
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className={field}
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Your message..."
                  className={`${field} resize-none`}
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                {sent ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" /> Message ready!
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Send Message
                  </>
                )}
              </button>
              <p className="text-center text-xs text-slate-500">
                This is a demo form — connect an email service to receive real messages.
              </p>
            </div>
          </motion.form>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
            className="space-y-4 lg:col-span-2"
          >
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 rounded-2xl glass p-5 transition-all hover:bg-white/[0.06]"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gemini-grad-soft text-accent-blue">
                <Mail className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-slate-500">Email</p>
                <p className="truncate text-sm font-medium text-white">{profile.email}</p>
              </div>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl glass p-5 transition-all hover:bg-white/[0.06]"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gemini-grad-soft text-accent-violet">
                <Github className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-slate-500">GitHub</p>
                <p className="truncate text-sm font-medium text-white">github.com/Priyanshu9-bit</p>
              </div>
            </a>

            <a
              href={profile.linkedin}
              className="flex items-center gap-4 rounded-2xl glass p-5 transition-all hover:bg-white/[0.06]"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gemini-grad-soft text-accent-pink">
                <Linkedin className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-slate-500">LinkedIn</p>
                <p className="truncate text-sm font-medium text-white">[Add LinkedIn URL]</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
