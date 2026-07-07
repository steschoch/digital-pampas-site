import { useRef, useEffect, useState } from 'react';
import React from 'react';

export type AnimationType = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right';

interface Props {
  animation: AnimationType;
  delay?: number;
  once?: boolean;
  children: React.ReactNode;
  className?: string;
}

function initialTransform(animation: AnimationType): string {
  switch (animation) {
    case 'fade-up':     return 'translateY(28px)';
    case 'slide-left':  return 'translateX(-32px)';
    case 'slide-right': return 'translateX(32px)';
    case 'fade-in':     return 'none';
  }
}

export default function AnimatedSection({
  animation,
  delay = 0,
  once = true,
  children,
  className = '',
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced-motion: show immediately, no animation
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    // If the element is already in the viewport at mount time, show it
    // immediately without waiting for the observer (handles iframe/sandbox cases)
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 1.1 && rect.bottom > 0) {
      // Small delay so the CSS transition plays briefly even for in-view elements
      const t = setTimeout(() => setVisible(true), 60);
      return () => clearTimeout(t);
    }

    // Otherwise watch for the element entering the viewport.
    // rootMargin adds 80px of look-ahead above the bottom edge.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0, rootMargin: '0px 0px 80px 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const style: React.CSSProperties = {
    opacity:   visible ? 1 : 0,
    transform: visible ? 'none' : initialTransform(animation),
    transition: `opacity 0.5s ease ${delay}ms, transform 0.55s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
