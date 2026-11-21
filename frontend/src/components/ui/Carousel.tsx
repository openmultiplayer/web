import { translate } from "@docusaurus/Translate";
import React, { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const sideOf = (el: HTMLElement): 1 | -1 => (getComputedStyle(el).direction === "rtl" ? -1 : 1);

// A swipeable row of slides with previous and next buttons that also moves along by itself.
// The row's layout comes from className; the buttons and the fading of off-screen slides are
// handled here and in ui.css.
export const Carousel = ({
  className,
  children,
  interval = 5000,
}: {
  className?: string;
  children: ReactNode;
  /** Milliseconds between automatic moves; 0 turns it off. */
  interval?: number;
}): React.ReactElement => {
  const row = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = row.current;
    if (!el) return;
    // Right-to-left rows scroll into negative numbers.
    const side = sideOf(el);
    const position = el.scrollLeft * side;
    setAtStart(position <= 4);
    // Centered slides stop short of the scroll limit, so the last slide reaching the
    // middle also counts as the end.
    const last = el.lastElementChild?.getBoundingClientRect();
    const box = el.getBoundingClientRect();
    const lastCentered = last ? ((last.left + last.right) / 2 - (box.left + box.right) / 2) * side <= 4 : false;
    setAtEnd(lastCentered || position + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = row.current;
    if (!el) return undefined;
    update();
    // Also catches the row changing layout, not only the window resizing.
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [update]);

  // Slides that aren't mostly on screen fade back, so only the current one stands out.
  useEffect(() => {
    const el = row.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entry.target.toggleAttribute("data-faded", entry.intersectionRatio < 0.75);
        }
      },
      { root: el, threshold: [0, 0.75, 1] },
    );
    for (const slide of Array.from(el.children)) observer.observe(slide);
    return () => observer.disconnect();
  }, []);

  const move = useCallback((direction: 1 | -1) => {
    const el = row.current;
    const card = el?.firstElementChild;
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: direction * sideOf(el) * (card.getBoundingClientRect().width + gap), behavior: reduced ? "auto" : "smooth" });
  }, []);

  // Moves on by itself, and back to the start after the last slide. It waits while the
  // visitor is pointing at, touching or focused in the row, while the row is off screen or
  // the tab is hidden, and never runs for people who asked for reduced motion. Using the
  // arrows or swiping restarts the wait, so it never moves right after they did.
  const held = useRef(false);
  const visible = useRef(false);
  const lastMove = useRef(0);
  useEffect(() => {
    const el = row.current;
    if (!el || interval <= 0) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const seen = new IntersectionObserver(([entry]) => {
      visible.current = entry.isIntersecting && entry.intersectionRatio >= 0.5;
      if (visible.current) lastMove.current = Date.now();
    }, { threshold: [0, 0.5] });
    seen.observe(el);

    const timer = window.setInterval(() => {
      if (held.current || !visible.current || document.hidden) return;
      if (Date.now() - lastMove.current < interval) return;
      lastMove.current = Date.now();
      const side = sideOf(el);
      const position = el.scrollLeft * side;
      const last = el.lastElementChild?.getBoundingClientRect();
      const box = el.getBoundingClientRect();
      const lastCentered = last ? ((last.left + last.right) / 2 - (box.left + box.right) / 2) * side <= 4 : false;
      if (lastCentered || position + el.clientWidth >= el.scrollWidth - 4) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        move(1);
      }
    }, 250);

    return () => {
      window.clearInterval(timer);
      seen.disconnect();
    };
  }, [interval, move]);

  const hold = () => { held.current = true; };
  const release = () => { held.current = false; lastMove.current = Date.now(); };

  return (
    <div
      onPointerEnter={hold}
      onPointerLeave={release}
      onTouchStart={hold}
      onTouchEnd={release}
      onFocus={hold}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node)) release(); }}
    >
      <div ref={row} className={className} onScroll={() => { lastMove.current = Date.now(); update(); }} tabIndex={0}>
        {children}
      </div>
      <div className="omp-carousel-nav">
        <button
          type="button"
          disabled={atStart}
          onClick={() => { lastMove.current = Date.now(); move(-1); }}
          aria-label={translate({ id: "carousel.previous", message: "Previous", description: "Carousel previous button" })}
        >
          <FiChevronLeft aria-hidden="true" />
        </button>
        <button
          type="button"
          disabled={atEnd}
          onClick={() => { lastMove.current = Date.now(); move(1); }}
          aria-label={translate({ id: "carousel.next", message: "Next", description: "Carousel next button" })}
        >
          <FiChevronRight aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};
