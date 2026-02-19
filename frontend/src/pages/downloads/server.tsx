import Translate from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import React from "react";

import { Release, ReleaseListPage } from "../../lib/downloads/common";

type ReleaseModule = {
  default: React.ComponentType;
  frontMatter?: {
    tag?: string;
    publishedAt?: string;
    htmlUrl?: string;
    highlights?: string[];
    admonition?: {
      type?: "tip" | "info" | "warning" | "danger" | "note";
      title?: string;
      body?: string;
    };
    assets?: { label?: string; url?: string; size?: string }[];
  };
};

type RequireWithContext = typeof require & {
  context: (path: string, deep?: boolean, filter?: RegExp) => {
    keys: () => string[];
    <T = unknown>(id: string): T;
  };
};

const baseCtx = (require as RequireWithContext).context("@site/content/releases/server", false, /\.md$/);
const i18nCtx = (require as RequireWithContext).context("../../../i18n", true, /content\/releases\/server\/.*\.md$/);

function toRelease(key: string, mod: ReleaseModule): Release {
  const fm = mod.frontMatter ?? {};
  return {
    tag: fm.tag ?? key.replace(/^\.\//, "").replace(/\.md$/, ""),
    publishedAt: fm.publishedAt ?? "",
    htmlUrl: fm.htmlUrl ?? "",
    body: mod.default,
    highlights: (fm.highlights ?? []).filter((feature): feature is string => typeof feature === "string"),
    admonition:
      fm.admonition?.type && fm.admonition?.title && fm.admonition?.body
        ? {
            type: fm.admonition.type,
            title: fm.admonition.title,
            body: fm.admonition.body,
          }
        : undefined,
    assets: (fm.assets ?? [])
      .filter((a) => a?.label && a?.url && a?.size)
      .map((a) => ({
        label: a.label as string,
        url: a.url as string,
        size: a.size as string,
      })),
  };
}

function fileNameFromKey(key: string): string {
  const parts = key.split("/");
  return parts[parts.length - 1] ?? key;
}

export default function ServerDownloadsPage(): React.ReactElement {
  const {
    i18n: { currentLocale, defaultLocale },
  } = useDocusaurusContext();

  const releases: Release[] = React.useMemo(() => {
    const modulesByFile = new Map<string, { key: string; mod: ReleaseModule }>();

    for (const key of baseCtx.keys()) {
      modulesByFile.set(fileNameFromKey(key), { key, mod: baseCtx(key) as ReleaseModule });
    }

    if (currentLocale !== defaultLocale) {
      const localePrefix = `./${currentLocale}/content/releases/server/`;
      for (const key of i18nCtx.keys()) {
        if (!key.startsWith(localePrefix)) continue;
        modulesByFile.set(fileNameFromKey(key), { key, mod: i18nCtx(key) as ReleaseModule });
      }
    }

    return Array.from(modulesByFile.values())
      .map(({ key, mod }) => toRelease(key, mod))
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }, [currentLocale, defaultLocale]);

  return (
    <ReleaseListPage
      config={{
        pageTitle: (
          <Translate id="downloads.server.pageTitle" description="Server downloads page title">
            open.mp Server
          </Translate>
        ),
        pageSubtitle: (
          <Translate id="downloads.server.pageSubtitle" description="Server downloads page subtitle">
            Host your own GTA San Andreas multiplayer server.
          </Translate>
        ),
        releasesUrl: "https://github.com/openmultiplayer/open.mp/releases",
        releases,
      }}
    />
  );
}
