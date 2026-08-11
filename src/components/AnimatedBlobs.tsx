export default function AnimatedBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-accent-blue/20 blur-[120px] animate-blob-float" />
      <div className="absolute top-1/3 -right-24 h-[32rem] w-[32rem] rounded-full bg-accent-violet/20 blur-[130px] animate-blob-float [animation-delay:-6s]" />
      <div className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-accent-pink/15 blur-[120px] animate-blob-float [animation-delay:-12s]" />
    </div>
  );
}
