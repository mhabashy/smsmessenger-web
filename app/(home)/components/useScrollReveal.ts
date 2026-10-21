'use client';

import { RefObject, useEffect } from 'react';

/**
 * Reveals every `[data-reveal]` element inside `rootRef` as it scrolls into view
 * by setting `data-visible="true"`. Elements entering the viewport together are
 * staggered one after another (in DOM order) by `staggerMs`.
 */
export function useScrollReveal(rootRef: RefObject<HTMLElement | null>, staggerMs = 90) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const targets = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'));

    // Fallback: no IntersectionObserver or user prefers reduced motion → show everything.
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!('IntersectionObserver' in window) || reduceMotion) {
      targets.forEach((el) => el.setAttribute('data-visible', 'true'));
      return;
    }

    const timers: number[] = [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target as HTMLElement)
          .sort((a, b) => targets.indexOf(a) - targets.indexOf(b))
          .forEach((el, i) => {
            el.style.transitionDelay = `${i * staggerMs}ms`;
            el.setAttribute('data-visible', 'true');
            observer.unobserve(el);

            // Clear the delay afterwards so hover transitions stay snappy.
            timers.push(
              window.setTimeout(
                () => {
                  el.style.transitionDelay = '';
                },
                i * staggerMs + 700,
              ),
            );
          });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    );

    targets.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, [rootRef, staggerMs]);
}
