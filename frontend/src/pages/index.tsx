import Link from "@docusaurus/Link";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import Image from "@theme/ThemedImage";
import clsx from "clsx";
import React, { useState } from "react";

import Admonition from "../components/Admonition";
import styles from "./index.module.css";

import { default as Translate, translate } from '@docusaurus/Translate';

const socials = [
  {
    labelId: "homepage.social.discord",
    labelMessage: "Discord icon",
    src: "/images/assets/discord-icon.svg",
    href: "https://discord.com/invite/samp",
    size: 45,
  },
  {
    labelId: "homepage.social.facebook",
    labelMessage: "Facebook icon",
    src: "/images/assets/facebook.svg",
    href: "https://www.facebook.com/openmultiplayer",
    size: 33,
  },
  {
    labelId: "homepage.social.instagram",
    labelMessage: "Instagram icon",
    src: "/images/assets/instagram.svg",
    href: "https://instagram.com/openmultiplayer/",
    size: 33,
  },
  {
    labelId: "homepage.social.twitch",
    labelMessage: "Twitch icon",
    src: "/images/assets/twitch.svg",
    href: "https://twitch.tv/openmultiplayer",
    size: 29,
  },
  {
    labelId: "homepage.social.x",
    labelMessage: "X (formerly Twitter) icon",
    src: "/images/assets/x.svg",
    href: "https://x.com/openmultiplayer",
    size: 29,
  },
  {
    labelId: "homepage.social.youtube",
    labelMessage: "YouTube icon",
    src: "/images/assets/youtube.svg",
    href: "https://youtube.com/openmultiplayer",
    size: 35,
  },
];

const SocialIcons = () => {
  return (
    <div className={styles.socialLinks}>
      {socials.map((social, index) => {
        const label = translate({
          id: social.labelId,
          message: social.labelMessage,
          description: "Accessible label and image alt text for homepage social link",
        });
        return (
        <a 
          key={index} 
          href={social.href} 
          className={styles.socialLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          <Image
            sources={{ 
              light: social.src, 
              dark: social.src 
            }}
            alt={label}
            width={social.size}
            height={social.size}
            className={styles.socialIcon}
          />
        </a>
        );
      })}
    </div>
  );
};

type HomepageAnnouncementMode = "launcher" | "server" | "both";

// Select the release announcement and update its version before publishing.
const homepageAnnouncementMode: HomepageAnnouncementMode = "both";
const homepageAnnouncementVersions = {
  launcher: "v1.7.0",
  server: "v1.6.7.3218",
};

const HomepageHeader = () => {
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [isClosingAnnouncement, setIsClosingAnnouncement] = useState(false);

  const closeAnnouncement = () => {
    setIsClosingAnnouncement(true);
    window.setTimeout(() => {
      setShowAnnouncement(false);
    }, 260);
  };

  const announcementTitle =
    homepageAnnouncementMode === "launcher" ? (
      <Translate
        id="announcement.launcherReleaseTitle"
        description="Announcement: launcher release title"
        values={{ version: <b>{homepageAnnouncementVersions.launcher}</b> }}
      >
        {'open.mp Launcher {version} is out now!'}
      </Translate>
    ) : homepageAnnouncementMode === "server" ? (
      <Translate
        id="announcement.serverReleaseTitle"
        description="Announcement: server release title"
        values={{ version: <b>{homepageAnnouncementVersions.server}</b> }}
      >
        {'open.mp server {version} is out now!'}
      </Translate>
    ) : (
      <Translate
        id="announcement.bothReleaseTitle"
        description="Announcement: server and launcher release title"
        values={{
          serverVersion: <b>{homepageAnnouncementVersions.server}</b>,
          launcherVersion: <b>{homepageAnnouncementVersions.launcher}</b>,
        }}
      >
        {'open.mp server {serverVersion} and Launcher {launcherVersion} are now available!'}
      </Translate>
    );

  return (
    <header className={styles.heroBanner}>
      
      {showAnnouncement && (
        <div
          className={clsx(
            styles.announcementWrapper,
            "dismissible-admonition-wrapper",
            isClosingAnnouncement && "dismissible-admonition-wrapper--closing",
          )}
        >
          <Admonition className={styles.announcement} type="tip" title={announcementTitle}>
            {homepageAnnouncementMode !== "launcher" && (
              <>
                <Translate id="announcement.serverReleaseSummary" description="Announcement: server release summary">
                  This server release adds NPC vehicle controls, improves NPC vehicle movement, and fixes networking and scripting issues.
                </Translate>{" "}
                <Link to="/docs/changelog" className={styles.enhancedLink}>
                  <Translate id="announcement.changelog" description="Announcement: server changelog link">Server changelog</Translate>
                </Link> |{" "}
                <Link to="/downloads/server" className={styles.enhancedLink}>
                  <Translate id="announcement.download" description="Announcement: server download link">Server download</Translate>
                </Link>
              </>
            )}
            {homepageAnnouncementMode === "both" && <br />}
            {homepageAnnouncementMode !== "server" && (
              <>
                <Translate id="announcement.launcherReleaseSummary" description="Announcement: launcher release summary">
                  The launcher improves its in-game overlay, graphics-mod support, and connection reliability.
                </Translate>{" "}
                <Link to="/downloads/launcher" className={styles.enhancedLink}>
                  <Translate id="announcement.seeWhatsNew" description="Announcement: launcher release notes link">Launcher updates</Translate>
                </Link>
              </>
            )}
            <div className="dismissible-admonition-actions">
              <button
                type="button"
                onClick={closeAnnouncement}
                className="dismissible-admonition-button"
                disabled={isClosingAnnouncement}
                aria-label={translate({
                  id: "announcement.dismissAria",
                  message: "Dismiss announcement",
                  description: "Accessible label for dismissing the homepage announcement",
                })}
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
            title={translate({
              id: "homepage.downloadLauncherTitle",
              message: "Download open.mp launcher",
              description: "Title attribute for the launcher download button",
            })}
            to="/downloads/launcher"
          >
            <Translate id="homepage.downloadLauncher" description="Button label for downloading the launcher">Download Launcher 🎮</Translate>
          </Link>

          <Link
            className={clsx("button button--primary button--lg", styles.button)}
            title={translate({
              id: "homepage.downloadServerTitle",
              message: "open.mp is released!",
              description: "Title attribute for the server download button",
            })}
            to="/downloads/server"
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
      description={translate({
        id: "homepage.layoutDescription",
        message:
          "A multiplayer mod for Grand Theft Auto: San Andreas that is fully backwards compatible with San Andreas Multiplayer",
        description: "Homepage meta description",
      })}
    >
      <HomepageHeader />
      <main className={styles.mainContainer}>
        <HomepageFeatures />
      </main>
    </Layout>
  );
};

export default Home;
