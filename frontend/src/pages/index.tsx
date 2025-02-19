import Link from "@docusaurus/Link";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import Image from "@theme/ThemedImage";
import clsx from "clsx";
import type { ReactNode } from "react";

import Admonition from "../components/Admonition";
import styles from "./index.module.css";

const socials = [
  {
    alt: "discord icon",
    src: "/images/assets/discord-icon.svg",
    href: "https://discord.com/invite/samp",
    size: 45,
  },
  {
    alt: "facebook icon",
    src: "/images/assets/facebook.svg",
    href: "https://www.facebook.com/openmultiplayer",
    size: 33,
  },
  {
    alt: "instagram icon",
    src: "/images/assets/instagram.svg",
    href: "https://instagram.com/openmultiplayer/",
    size: 33,
  },
  {
    alt: "twitch icon",
    src: "/images/assets/twitch.svg",
    href: "https://twitch.tv/openmultiplayer",
    size: 29,
  },
  {
    alt: "x icon",
    src: "/images/assets/x.svg",
    href: "https://x.com/openmultiplayer",
    size: 29,
    background: false,
  },
  {
    alt: "youtube icon",
    src: "/images/assets/youtube.svg",
    href: "https://youtube.com/openmultiplayer",
    size: 35,
  },
];

function HomepageHeader() {
  return (
    <header className={clsx(styles.heroBanner)}>
      <Admonition
        className="container"
        type="tip"
        title="A new version of open.mp server and launcher is out now!"
      >
        Version <b>1.4.0.2779</b> of open.mp server is out with many fixes,
        performance boosts, and new features!{" "}
        <Link to="https://www.open.mp/docs/changelog">Changelog</Link> |{" "}
        <Link to="https://github.com/openmultiplayer/open.mp/releases/latest">
          Download
        </Link>
        .
        <br />
        The launcher also got an update!{" "}
        <Link to="https://github.com/openmultiplayer/launcher/releases/latest">
          See what's new
        </Link>
        .
      </Admonition>
      <div
        className="row"
        style={{ justifyContent: "space-evenly", alignItems: "center" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginRight: 0,
            marginLeft: 0,
            maxWidth: 600,
          }}
        >
          <Heading as="h1" className="hero__title" style={{ color: "#9083d2" }}>
            Open Multiplayer
          </Heading>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <p style={{ fontSize: "1.25rem" }}>
              A brand new multiplayer mod for Grand Theft Auto: San Andreas that
              is <b>fully backwards compatible</b> with{" "}
              <b>San Andreas Multiplayer</b>.
            </p>
          </div>
        </div>
        <div
          style={{
            justifyContent: "space-evenly",
          }}
        >
          <div className={clsx("margin-bottom--sm", styles.buttons)}>
            <Link
              className={clsx(
                "button button--primary button--md",
                styles.button
              )}
              title="Download open.mp launcher"
              to="https://github.com/openmultiplayer/launcher/releases/latest"
            >
              Download open.mp launcher 🎮
            </Link>
          </div>
          <div className={clsx("margin-bottom--sm", styles.buttons)}>
            <Link
              className={clsx(
                "button button--primary button--md",
                styles.button
              )}
              title="open.mp is released!"
              to="https://github.com/openmultiplayer/open.mp/releases/latest"
            >
              Download open.mp (server) 🖥️
            </Link>
          </div>
          <div className={clsx("margin-bottom--sm", styles.buttons)}>
            <Link
              className={clsx(
                "button button--secondary button--md",
                styles.button
              )}
              to="/docs"
            >
              Documentations 📜
            </Link>
          </div>
        </div>
      </div>
      <div
        className="row margin-horiz--none margin-top--xl"
        style={{
          justifyContent: "center",
        }}
      >
        {socials.map((social, index) => {
          const iconSize = `${social.size}px`;
          const style: React.CSSProperties = {
            display: "flex",
            justifyContent: "center",
            ...(social.background && {
              backgroundColor: "#9083d2",
              width: `${social.size + 17}px`,
              height: `${social.size + 17}px`,
              borderRadius: 5,
            }),
          };

          return (
            <div
              style={{
                width: 70,
                height: 70,
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <a key={index} href={social.href} style={style} target="__blank">
                <Image
                  sources={{ light: social.src, dark: social.src }}
                  alt={social.alt}
                  width={iconSize}
                  height={iconSize}
                />
              </a>
            </div>
          );
        })}
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title={`Open Multiplayer`}
      description="A multiplayer mod for Grand Theft Auto: San Andreas that is fully backwards compatible with San Andreas Multiplayer"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
