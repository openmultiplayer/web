import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import React, { useState } from "react";

import Admonition from "../../components/Admonition";
import { INITIAL_VISIBLE_RELEASES } from "./constants";
import styles from "../../pages/downloads.module.css";

export interface Release {
  tag: string;
  publishedAt: string;
  htmlUrl: string;
  body: string | React.ComponentType;
  highlights?: string[];
  admonition?: {
    type: "tip" | "info" | "warning" | "danger" | "note";
    title: React.ReactNode;
    body: React.ReactNode;
  };
  assets: { label: string; url: string; size: string }[];
}

export interface ProductConfig {
  pageTitle: React.ReactNode;
  pageSubtitle: React.ReactNode;
  releasesUrl: string;
  releases: Release[];
  announcement?: {
    type: "tip" | "info" | "warning" | "danger" | "note";
    title: React.ReactNode;
    body: React.ReactNode;
  };
}

function formatDate(iso: string): string {
  try {
    return new Intl.DateTimeFormat(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(iso));
  } catch {
    return iso.split("T")[0];
  }
}

function renderMarkdown(md: string): React.ReactNode {
  const lines = md.split("\n");
  const elements: React.ReactNode[] = [];
  let listItems: React.ReactNode[] = [];
  let key = 0;

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(<ul key={key++}>{listItems}</ul>);
      listItems = [];
    }
  };

  const inlineFormat = (text: string): React.ReactNode => {
    const parts: React.ReactNode[] = [];
    const regex = /(\*\*(.+?)\*\*)|(`(.+?)`)|(\[([^\]]+)\]\(([^)]+)\))/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }
      if (match[1]) {
        parts.push(<strong key={`i${match.index}`}>{match[2]}</strong>);
      } else if (match[3]) {
        parts.push(<code key={`i${match.index}`}>{match[4]}</code>);
      } else if (match[5]) {
        parts.push(
          <a key={`i${match.index}`} href={match[7]}>
            {match[6]}
          </a>
        );
      }
      lastIndex = regex.lastIndex;
    }
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }
    return parts.length === 1 ? parts[0] : parts;
  };

  for (const line of lines) {
    const trimmed = line.trimEnd();

    const headerMatch = trimmed.match(/^(#{1,3})\s+(.+)/);
    if (headerMatch) {
      flushList();
      const level = headerMatch[1].length;
      const Tag = (`h${level}` as "h1" | "h2" | "h3");
      elements.push(<Tag key={key++}>{inlineFormat(headerMatch[2])}</Tag>);
      continue;
    }

    const listMatch = trimmed.match(/^[-*]\s+(.+)/);
    if (listMatch) {
      listItems.push(<li key={key++}>{inlineFormat(listMatch[1])}</li>);
      continue;
    }

    if (trimmed === "") {
      flushList();
      continue;
    }

    flushList();
    elements.push(<p key={key++}>{inlineFormat(trimmed)}</p>);
  }

  flushList();
  return elements;
}

interface ReleaseListPageProps {
  config: ProductConfig;
}

export function ReleaseListPage({ config }: ReleaseListPageProps): React.ReactElement {
  const [showAll, setShowAll] = useState(false);

  const releases = config.releases;
  const visibleReleases = showAll ? releases : releases.slice(0, INITIAL_VISIBLE_RELEASES);
  const hasMore = releases.length > INITIAL_VISIBLE_RELEASES;

  return (
    <Layout title={typeof config.pageTitle === "string" ? config.pageTitle : "Downloads"} description="Download open.mp releases">
      <main className={styles.pageContainer}>
        <Heading as="h1" className={styles.pageTitle}>
          {config.pageTitle}
        </Heading>
        <p className={styles.pageSubtitle}>{config.pageSubtitle}</p>

        {config.announcement && (
          <div className={styles.topAdmonition}>
            <Admonition type={config.announcement.type} title={config.announcement.title}>
              {config.announcement.body}
            </Admonition>
          </div>
        )}

        {visibleReleases.map((release, index) => {
          const assets = release.assets;
          return (
            <div key={release.tag + release.publishedAt} className={styles.productSection}>
              <Heading as="h2" className={styles.productTitle}>
                {release.tag}
                {index === 0 && (
                  <span className={styles.newBadge}>
                    <Translate id="downloads.latestBadge" description="Badge for latest release">
                      LATEST
                    </Translate>
                  </span>
                )}
              </Heading>

              <p className={styles.versionInfo}>
                <Translate
                  id="downloads.releaseDate"
                  description="Release date label"
                  values={{ date: formatDate(release.publishedAt) }}
                >
                  {"Released {date}"}
                </Translate>
              </p>

              {release.admonition && (
                <div className={styles.releaseAdmonition}>
                  <Admonition type={release.admonition.type} title={release.admonition.title}>
                    {release.admonition.body}
                  </Admonition>
                </div>
              )}

              {release.highlights && release.highlights.length > 0 && (
                <div className={styles.keyFeatures}>
                  <h3 className={styles.keyFeaturesTitle}>
                    <Translate id="downloads.release.highlights" description="Release highlights heading">
                      Highlights
                    </Translate>
                  </h3>
                  <ul className={styles.keyFeaturesList}>
                    {release.highlights.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {release.body && (
                <details className={styles.changelogDetails}>
                  <summary className={styles.changelogSummary}>
                    <Translate id="downloads.release.viewChangelog" description="Expandable changelog summary">
                      View full changelog
                    </Translate>
                  </summary>
                  <div className={styles.changelogContent}>
                    {typeof release.body === "string" ? renderMarkdown(release.body) : React.createElement(release.body)}
                  </div>
                </details>
              )}

              <div className={styles.downloadRow}>
                {assets.length > 0 ? (
                  assets.map((asset) => (
                    <Link
                      key={asset.url}
                      className={`button button--primary button--lg ${styles.downloadButton}`}
                      to={asset.url}
                    >
                      {asset.label}{/dynssl/i.test(asset.label) && " *"}
                      <span className={styles.buttonSize}>({asset.size})</span>
                    </Link>
                  ))
                ) : (
                  <Link className={`button button--primary button--lg ${styles.downloadButton}`} to={release.htmlUrl}>
                    <Translate id="downloads.release.viewOnGitHub" description="Fallback button per release">
                      View release on GitHub
                    </Translate>
                  </Link>
                )}

                <Link className={styles.githubLink} to={release.htmlUrl} title="View release on GitHub">
                  <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  <span>
                    <Translate id="downloads.release.github" description="Link to release page on GitHub">
                      GitHub
                    </Translate>
                  </span>
                </Link>
              </div>

              {assets.some((a) => /dynssl/i.test(a.label)) && (
                <p className={styles.dynSslNote}>
                  <Translate id="downloads.release.dynSslNote" description="Note about DynSSL version requiring libssl">
                    * The DynSSL version requires libssl to be installed on your Linux distribution.
                  </Translate>
                </p>
              )}
            </div>
          );
        })}

        {hasMore && (
          <div className={styles.showMoreWrapper}>
            <button
              className={styles.showMoreButton}
              onClick={() => setShowAll((prev) => !prev)}
              type="button"
            >
              {showAll ? (
                <Translate id="downloads.hideOlderReleases" description="Button to hide older releases">
                  Hide older releases
                </Translate>
              ) : (
                <Translate
                  id="downloads.showOlderReleases"
                  description="Button to show older releases"
                  values={{ count: releases.length - INITIAL_VISIBLE_RELEASES }}
                >
                  {"See {count} older releases"}
                </Translate>
              )}
            </button>
          </div>
        )}

        <div className={styles.footerTrust}>
          <div className={styles.trustSection}>
            <p className={styles.trustText}>
              <Translate id="downloads.opensourceTrust" description="Open source trust message for downloads pages">
                Every release is open source. Build from source, or download directly from GitHub.
              </Translate>
            </p>
            <div className={styles.trustActions}>
              <Link className={`button button--secondary button--lg ${styles.downloadButton}`} to={config.releasesUrl}>
                <Translate id="downloads.downloadFromGithub" description="Button label to open GitHub releases page">
                  Download from GitHub
                </Translate>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
