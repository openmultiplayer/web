import type { Props } from "@theme/Footer/Layout";
import clsx from "clsx";
import React, { type ReactNode } from "react";

// The site's footer: wordmark with the copyright under it, and the links beside them.
// Styled in src/css/custom.css.
export default function FooterLayout({ style, links, logo, copyright }: Props): ReactNode {
  return (
    <footer className={clsx("footer", style === "dark" && "footer--dark")}>
      <div className="omp-footer">
        <div className="omp-footer-brand">
          {logo}
          {copyright && <div className="omp-footer-copyright">{copyright}</div>}
        </div>
        <div className="omp-footer-links">{links}</div>
      </div>
    </footer>
  );
}
