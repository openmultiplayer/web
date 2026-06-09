import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import type { Props } from "@theme/NotFound/Content";
import clsx from "clsx";
import React, { type ReactNode } from "react";

import styles from "./styles.module.css";

export default function NotFoundContent({ className }: Props): ReactNode {
  return (
    <main className={clsx(styles.notFound, className)}>
      <section className={styles.content}>
        <h1 className={styles.title}>
          <Translate id="notFound.title" description="404 page title">
            Page Not Found
          </Translate>
        </h1>
        <img
          src="/images/assets/404.jpg"
          alt={translate({
            id: "notFound.imageAlt",
            message: "GTA train mission screenshot",
            description: "Alt text for the 404 page image",
          })}
          className={styles.image}
        />
        <div className={styles.actions}>
          <Link
            className={clsx("button button--primary button--lg", styles.button)}
            to="/"
          >
            <Translate id="notFound.home" description="404 page home button">
              Home
            </Translate>
          </Link>
          <Link
            className={clsx("button button--secondary button--lg", styles.button)}
            to="/docs"
          >
            <Translate id="notFound.docs" description="404 page documentation button">
              Documentation
            </Translate>
          </Link>
          <Link
            className={clsx("button button--secondary button--lg", styles.button)}
            to="/servers"
          >
            <Translate id="notFound.servers" description="404 page servers button">
              Servers
            </Translate>
          </Link>
        </div>
      </section>
    </main>
  );
}
