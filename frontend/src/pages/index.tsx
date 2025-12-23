import Link from "@docusaurus/Link";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import Image from "@theme/ThemedImage";
import clsx from "clsx";
import React, { useState } from "react";

import Admonition from "../components/Admonition";
import styles from "./index.module.css";
import { socials } from "../constants.ts";
import Translate from '@docusaurus/Translate';

const SocialIcons = () => {
  return (
    <div className={styles.socialLinks}>
      {socials.map((social, index) => (
        <a 
          key={index} 
          href={social.href} 
          className={styles.socialLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.alt}
        >
          <Image
            sources={{ 
              light: social.src, 
              dark: social.src 
            }}
            alt={social.alt}
            width={social.size}
            height={social.size}
            className={styles.socialIcon}
          />
        </a>
      ))}
    </div>
  );
};

const HomepageHeader = () => {
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  const closeAnnouncement = () => {
    setShowAnnouncement(false);
  };

  return (
    <header className={styles.heroBanner}>
      
      {showAnnouncement && (
        <div className={styles.announcementWrapper}>
          <Admonition
            className={styles.announcement}
            type="tip"
            title={
              <Translate id="announcement.title" description="Announcement: new version title">
                A new version of open.mp server and launcher is out now!
              </Translate>
            }
          >
            <Translate
              id="announcement.serverVersion"
              description="Announcement: server version and features"
              values={{ version: <b>v1.5.8.3079</b> }}
            >
              {'Version {version} of open.mp server is out with many fixes, performance boosts, and new features!'}
            </Translate>{" "}
            <Link 
              to="https://www.open.mp/docs/changelog" 
              className={styles.enhancedLink}
            >
              <Translate id="announcement.changelog" description="Announcement: changelog link">Changelog</Translate>
            </Link> |{" "}
            <Link 
              to="https://github.com/openmultiplayer/open.mp/releases/latest"
              className={styles.enhancedLink}
            >
              <Translate id="announcement.download" description="Announcement: download link">Download</Translate>
            </Link>
            .
            <br />
            <Translate id="announcement.launcherUpdate" description="Announcement: launcher update">The launcher also got an update!</Translate>{" "}
            <Link 
              to="https://github.com/openmultiplayer/launcher/releases/latest"
              className={styles.enhancedLink}
            >
              <Translate id="announcement.seeWhatsNew" description="Announcement: see what's new link">See what's new</Translate>
            </Link>
            .
            <div className={styles.dismissContainer}>
              <button 
                onClick={closeAnnouncement} 
                className={styles.dismissButton}
                aria-label="Dismiss announcement"
              >
                <Translate id="announcement.dismiss" description="Announcement: dismiss button">Dismiss this message</Translate>
              </button>
            </div>
          </Admonition>
        </div>
      )}
      
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <Heading as="h1" className={styles.heroTitle}>
            Open Multiplayer
          </Heading>
          <p className={styles.heroDescription}>
            <Translate
              id="homepage.heroDescription"
              description="Hero section description for open.mp homepage"
              values={{
                compatibility: (
                  <b>
                    <Translate id="homepage.heroDescription.compatibility" description="Fully backwards compatible bold text">
                      {"fully backwards compatible"}
                    </Translate>
                  </b>
                ),
                samp: <b>San Andreas Multiplayer</b>
              }}
            >
              {'A brand new multiplayer mod for Grand Theft Auto: San Andreas that is {compatibility} with {samp}.'}
            </Translate>
          </p>
        </div>
        
        <div className={styles.heroButtons}>
          <Link
            className={clsx("button button--primary button--lg", styles.button)}
            title="Download open.mp launcher"
            to="https://github.com/openmultiplayer/launcher/releases/latest"
          >
            <Translate id="homepage.downloadLauncher" description="Button label for downloading the launcher">Download Launcher 🎮</Translate>
          </Link>

          <Link
            className={clsx("button button--primary button--lg", styles.button)}
            title="open.mp is released!"
            to="https://github.com/openmultiplayer/open.mp/releases/latest"
          >
            <Translate id="homepage.downloadServer" description="Button label for downloading the server">Download Server 🖥️</Translate>
          </Link>

          <Link
            className={clsx("button button--secondary button--lg", styles.button)}
            to="/docs"
          >
            <Translate id="homepage.documentation" description="Button label for documentation">Documentation 📜</Translate>
          </Link>
        </div>
      </div>
      
      <SocialIcons />
    </header>
  );
};

const Home = (): React.ReactElement => {
  return (
    <Layout
      title="Open Multiplayer"
      description="A multiplayer mod for Grand Theft Auto: San Andreas that is fully backwards compatible with San Andreas Multiplayer"
    >
      <HomepageHeader />
      <main className={styles.mainContainer}>
        <HomepageFeatures />
      </main>
    </Layout>
  );
};

export default Home;