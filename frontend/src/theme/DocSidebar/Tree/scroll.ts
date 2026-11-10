const MAX_DURATION = 700;

/**
 * react-window sets scrollTop directly, so tree.scrollTo() does not animate.
 */
export function animateScrollTo(element: HTMLElement, target: number): number {
  const start = element.scrollTop;
  const distance = target - start;
  const reducedMotion =
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (Math.abs(distance) < 1 || reducedMotion) {
    element.scrollTop = target;
    return 0;
  }

  const duration = Math.min(MAX_DURATION, 220 + Math.abs(distance) * 0.015);
  const startedAt = performance.now();
  let frame = 0;

  const step = (now: number) => {
    const progress = Math.min(1, (now - startedAt) / duration);
    if (progress >= 1) {
      element.scrollTop = target;
      return;
    }

    const eased =
      progress < 0.5
        ? 4 * progress ** 3
        : 1 - (-2 * progress + 2) ** 3 / 2;
    element.scrollTop = start + distance * eased;
    frame = requestAnimationFrame(step);
  };

  frame = requestAnimationFrame(step);
  return frame;
}
