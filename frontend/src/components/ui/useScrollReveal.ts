import { useEffect } from "react";

// Elements marked data-reveal rise in the first time they scroll into view. Only ones
// still off screen are hidden, and only from here, so without JavaScript or with reduced
// motion everything is simply visible. Styles are in src/css/ui.css.
export const useScrollReveal = (): void => {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-reveal", "shown");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );
    for (const element of Array.from(document.querySelectorAll("[data-reveal]"))) {
      if (element.getBoundingClientRect().top < window.innerHeight * 0.88) continue;
      element.setAttribute("data-reveal", "pending");
      observer.observe(element);
    }
    return () => observer.disconnect();
  }, []);
};
