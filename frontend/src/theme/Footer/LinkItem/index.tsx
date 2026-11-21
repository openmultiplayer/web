import Link from "@docusaurus/Link";
import isInternalUrl from "@docusaurus/isInternalUrl";
import useBaseUrl from "@docusaurus/useBaseUrl";
import type { Props } from "@theme/Footer/LinkItem";
import clsx from "clsx";
import React, { type ReactNode } from "react";
import type { IconType } from "react-icons";
import { FaDiscord, FaGithub, FaHeart, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";

// Footer links: outside links get their service's icon, and an arrow that moves on hover.
const SERVICE_ICONS: [RegExp, IconType][] = [
  [/discord\.gg|discord\.com/, FaDiscord],
  [/github\.com/, FaGithub],
  [/youtube\.com/, FaYoutube],
  [/\bx\.com/, FaXTwitter],
  [/opencollective\.com/, FaHeart],
];

export default function FooterLinkItem({ item }: Props): ReactNode {
  const { to, href, label, prependBaseUrlToHref, className, ...props } = item;
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, { forcePrependBaseUrl: true });
  const external = Boolean(href) && !isInternalUrl(href);
  const ServiceIcon = external ? SERVICE_ICONS.find(([pattern]) => pattern.test(href as string))?.[1] : undefined;

  return (
    <Link
      className={clsx("footer__link-item", className)}
      {...(href ? { href: prependBaseUrlToHref ? normalizedHref : href } : { to: toUrl })}
      {...props}
    >
      {ServiceIcon && <ServiceIcon className="omp-footer-link-icon" aria-hidden="true" />}
      {label}
      {external && <FiArrowUpRight className="omp-footer-link-arrow" aria-hidden="true" />}
    </Link>
  );
}
