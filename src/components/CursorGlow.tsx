import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorGlow() {
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { stiffness: 350, damping: 28, mass: 0.5 });
  const ringY = useSpring(dotY, { stiffness: 350, damping: 28, mass: 0.5 });

  const [hovering, setHovering] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(false);
  const rafRef = useRef(0);

  useEffect(() => {
    if (window.matchMedia('(pointer: fine)').matches === false) return;

    setVisible(true);

    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        dotX.set(e.clientX);
        dotY.set(e.clientY);
      });
    };

    const onDown = () => setClicked(true);
    const onUp = () => setClicked(false);

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(
        !!t.closest('a, button, input, textarea, [role="button"], [data-cursor="hover"]'),
      );
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('mouseover', onOver);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(rafRef.current);
    };
  }, [dotX, dotY]);

  if (!visible) return null;

  return (
    <>
      {/* Outer ring — lags behind with spring */}
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden md:block"
        aria-hidden
      >
        <motion.div
          animate={{
            width: hovering ? 56 : 36,
            height: hovering ? 56 : 36,
            borderColor: hovering ? 'rgba(255,122,198,0.7)' : 'rgba(155,109,255,0.5)',
            borderWidth: hovering ? 2 : 1.5,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="-translate-x-1/2 -translate-y-1/2 rounded-full border backdrop-blur-[1px]"
          style={{
            background: hovering
              ? 'radial-gradient(circle, rgba(155,109,255,0.12) 0%, transparent 70%)'
              : 'transparent',
          }}
        />
      </motion.div>

      {/* Inner dot — tracks instantly */}
      <motion.div
        style={{ x: dotX, y: dotY }}
        className="pointer-events-none fixed left-0 top-0 z-[91] hidden md:block"
        aria-hidden
      >
        <motion.div
          animate={{
            width: clicked ? 6 : hovering ? 10 : 8,
            height: clicked ? 6 : hovering ? 10 : 8,
          }}
          transition={{ type: 'spring', stiffness: 500, damping: 25 }}
          className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-gemini-grad shadow-[0_0_12px_rgba(155,109,255,0.6)]"
        />
      </motion.div>
    </>
  );
}
