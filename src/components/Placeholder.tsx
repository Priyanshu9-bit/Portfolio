import type { ReactNode } from 'react';

type Props = {
  label: string;
  aspect?: string;
  className?: string;
  children?: ReactNode;
};

/** A polished placeholder for images/certificates not yet uploaded. */
export default function Placeholder({ label, aspect = 'aspect-video', className = '', children }: Props) {
  return (
    <div
      className={`relative ${aspect} w-full overflow-hidden rounded-2xl glass ${className}`}
      aria-label={label}
    >
      {/* shimmer sweep */}
      <div className="absolute inset-0 shimmer-bg" />
      <div className="absolute inset-0 bg-gemini-grad-soft" />
      {/* decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center px-4">
        {children ?? (
          <>
            <div className="grid h-12 w-12 place-items-center rounded-xl glass-strong text-slate-400">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.25a1.5 1.5 0 0 1 2.121 0l3.75 3.75a1.5 1.5 0 0 0 2.121 0l1.5-1.5a1.5 1.5 0 0 1 2.121 0L21.75 15.75M3 3.75h18a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5H3a1.5 1.5 0 0 1-1.5-1.5V5.25A1.5 1.5 0 0 1 3 3.75Z" />
              </svg>
            </div>
            <span className="text-xs font-medium uppercase tracking-wider text-slate-400">{label}</span>
          </>
        )}
      </div>
    </div>
  );
}
