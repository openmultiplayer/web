import clsx from "clsx";
import React, { type ReactNode } from "react";

// Every standalone page is built from these two, so its width, spacing and header
// styling are changed here and in src/css/ui.css, not page by page.
export const Page = ({
  children,
  narrow = false,
}: {
  children: ReactNode;
  narrow?: boolean;
}): React.ReactElement => (
  <main className={clsx("omp-page", narrow && "omp-page--narrow")}>{children}</main>
);

export const PageHeader = ({
  title,
  subtitle,
  actions,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  actions?: ReactNode;
}): React.ReactElement => (
  <header className="omp-page-head omp-enter">
    <div className="omp-page-head-text">
      <h1 className="omp-page-title">{title}</h1>
      {subtitle && <p className="omp-page-subtitle">{subtitle}</p>}
    </div>
    {actions && <div className="omp-page-actions">{actions}</div>}
  </header>
);

// Explains what a page can't do without JavaScript. Browsers running it never show this.
export const NoScriptNotice = ({ children }: { children: ReactNode }): React.ReactElement => (
  <noscript>
    <p className="omp-noscript">{children}</p>
  </noscript>
);
