import {
  useMemo,
  type MouseEventHandler,
  type ReactNode,
} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import isInternalUrl from '@docusaurus/isInternalUrl';
import {translate} from '@docusaurus/Translate';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {isSamePath} from '@docusaurus/theme-common/internal';
import {
  findFirstSidebarItemLink,
  isActiveSidebarItem,
} from '@docusaurus/plugin-content-docs/client';
import IconExternalLink from '@theme/Icon/ExternalLink';
import type {
  NodeRendererProps,
  RowRendererProps,
} from 'react-arborist';
import type {
  PropSidebarItem,
  PropSidebarItemCategory,
  PropSidebarItemLink,
} from '@docusaurus/plugin-content-docs';

import {useSidebarContext} from './context';
import {
  DEFAULT_SIDEBAR_WIDTH,
  INDENT,
  STATIC_ROW_LIMIT,
  flattenVisibleNodes,
  getRowHeight,
  normalizeFilter,
  type FlattenedRow,
  type OpenState,
  type SidebarNode,
} from './model';
import styles from './styles.module.css';

type SidebarRowContentProps = {
  data: SidebarNode;
  isOpen: boolean;
  activePath: string;
  filter: string;
  onToggle: (id: string) => void;
  onItemClick?: (item: PropSidebarItem) => void;
  registerLink: (id: string, element: HTMLAnchorElement | null) => void;
  staticMode?: boolean;
};

function getRowClassName(
  node: SidebarNode,
  level: number,
  isOpen: boolean,
): string {
  return clsx(
    'menu__list-item',
    node.kind === 'category'
      ? [
          ThemeClassNames.docs.docSidebarItemCategory,
          ThemeClassNames.docs.docSidebarItemCategoryLevel(level + 1),
          !isOpen && 'menu__list-item--collapsed',
        ]
      : [
          ThemeClassNames.docs.docSidebarItemLink,
          ThemeClassNames.docs.docSidebarItemLinkLevel(level + 1),
        ],
    node.className,
  );
}

function HighlightedLabel({
  label,
  filter,
  className,
}: {
  label: string;
  filter: string;
  className: string;
}) {
  const term = normalizeFilter(filter);
  const index = term ? normalizeFilter(label).indexOf(term) : -1;

  if (index < 0) {
    return (
      <span title={label} className={className}>
        {label}
      </span>
    );
  }

  return (
    <span title={label} className={className}>
      {label.slice(0, index)}
      <mark className={styles.highlight}>
        {label.slice(index, index + filter.length)}
      </mark>
      {label.slice(index + filter.length)}
    </span>
  );
}

function CategoryCollapseButton({
  isOpen,
  label,
  onClick,
}: {
  isOpen: boolean;
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  const ariaLabel = isOpen
    ? translate(
        {
          id: 'theme.DocSidebarItem.collapseCategoryAriaLabel',
          message: "Collapse sidebar category '{label}'",
          description: 'The ARIA label to collapse the sidebar category',
        },
        {label},
      )
    : translate(
        {
          id: 'theme.DocSidebarItem.expandCategoryAriaLabel',
          message: "Expand sidebar category '{label}'",
          description: 'The ARIA label to expand the sidebar category',
        },
        {label},
      );

  return (
    <button
      type="button"
      className="clean-btn menu__caret"
      aria-label={ariaLabel}
      aria-expanded={isOpen}
      onClick={onClick}
    />
  );
}

function SidebarCategoryRow({
  data,
  isOpen,
  activePath,
  filter,
  onToggle,
  onItemClick,
  registerLink,
  staticMode,
}: SidebarRowContentProps) {
  const item = data.item as PropSidebarItemCategory;
  const hasHref = Boolean(data.href);
  const isActive = isActiveSidebarItem(item, activePath);
  const isCurrentPage = isSamePath(data.href, activePath);
  const linkHref =
    data.href ??
    (staticMode ? findFirstSidebarItemLink(item) : undefined);

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    if (staticMode) {
      return;
    }

    if (hasHref) {
      onItemClick?.(item);
    }

    if (!item.collapsible) {
      return;
    }

    if (!hasHref) {
      event.preventDefault();
      onToggle(data.id);
    } else if (isCurrentPage) {
      event.preventDefault();
      onToggle(data.id);
    } else if (!isOpen) {
      onToggle(data.id);
    }
  };

  return (
    <div
      className={clsx(
        'menu__list-item-collapsible',
        styles.categoryWrapper,
        isCurrentPage && 'menu__list-item-collapsible--active',
      )}>
      <Link
        ref={(element) => registerLink(data.id, element)}
        className={clsx('menu__link', styles.categoryLink, {
          'menu__link--sublist': item.collapsible,
          'menu__link--sublist-caret': item.collapsible && !hasHref,
          'menu__link--active': isActive,
        })}
        onClick={handleClick}
        aria-current={isCurrentPage ? 'page' : undefined}
        role={item.collapsible && !hasHref ? 'button' : undefined}
        aria-expanded={
          item.collapsible && !hasHref ? isOpen : undefined
        }
        to={linkHref ?? '#'}
        autoAddBaseUrl>
        <HighlightedLabel
          label={data.label}
          filter={filter}
          className={styles.categoryLabel}
        />
      </Link>
      {hasHref && item.collapsible && (
        <CategoryCollapseButton
          isOpen={isOpen}
          label={data.label}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            if (!staticMode) {
              onToggle(data.id);
            }
          }}
        />
      )}
    </div>
  );
}

function SidebarLinkRow({
  data,
  activePath,
  filter,
  onItemClick,
  registerLink,
}: SidebarRowContentProps) {
  const item = data.item as PropSidebarItemLink;
  const isActive = isSamePath(data.href, activePath);
  const isInternal = isInternalUrl(data.href);

  return (
    <Link
      ref={(element) => registerLink(data.id, element)}
      className={clsx('menu__link', !isInternal && styles.menuExternalLink, {
        'menu__link--active': isActive,
      })}
      autoAddBaseUrl={data.autoAddBaseUrl}
      aria-current={isActive ? 'page' : undefined}
      to={data.href}
      {...(isInternal && onItemClick
        ? {onClick: () => onItemClick(item)}
        : {})}>
      <HighlightedLabel
        label={data.label}
        filter={filter}
        className={styles.linkLabel}
      />
      {!isInternal && <IconExternalLink />}
    </Link>
  );
}

function SidebarHtmlRow({data}: {data: SidebarNode}) {
  return (
    <div
      className={clsx(styles.htmlRow, data.defaultStyle && 'menu__list-item')}
      dangerouslySetInnerHTML={{__html: data.html ?? ''}}
    />
  );
}

function SidebarRowContent(props: SidebarRowContentProps) {
  if (props.data.kind === 'category') {
    return <SidebarCategoryRow {...props} />;
  }
  if (props.data.kind === 'html') {
    return <SidebarHtmlRow data={props.data} />;
  }
  return <SidebarLinkRow {...props} />;
}

export function SidebarNodeRenderer({
  node,
  style,
}: NodeRendererProps<SidebarNode>): ReactNode {
  const context = useSidebarContext();

  return (
    <div
      className={clsx(
        styles.rowInner,
        getRowClassName(node.data, node.level, node.isOpen),
      )}
      style={style}>
      <SidebarRowContent
        data={node.data}
        isOpen={node.isOpen}
        activePath={context.activePath}
        filter={context.filter}
        onToggle={context.onToggle}
        onItemClick={context.onItemClick}
        registerLink={context.registerLink}
      />
    </div>
  );
}

export function SidebarTreeRow({
  innerRef,
  attrs,
  children,
}: RowRendererProps<SidebarNode>): ReactNode {
  return (
    <div
      {...attrs}
      ref={innerRef}
      className={clsx(attrs.className, styles.treeRow)}>
      {children}
    </div>
  );
}

export function StaticSidebarRows({
  nodes,
  initialOpenState,
  activePath,
  onItemClick,
  registerLink,
}: {
  nodes: readonly SidebarNode[];
  initialOpenState: OpenState;
  activePath: string;
  onItemClick?: (item: PropSidebarItem) => void;
  registerLink: (id: string, element: HTMLAnchorElement | null) => void;
}): ReactNode {
  const rows = useMemo<FlattenedRow[]>(() => {
    let top = 0;

    return flattenVisibleNodes(nodes, initialOpenState)
      .slice(0, STATIC_ROW_LIMIT)
      .map(({node, level}) => {
        const height = getRowHeight(node, level, DEFAULT_SIDEBAR_WIDTH);
        const row = {
          node,
          level,
          top,
          height,
          isOpen: Boolean(initialOpenState[node.id]),
        };
        top += height;
        return row;
      });
  }, [initialOpenState, nodes]);

  return (
    <div className={styles.staticList}>
      {rows.map(({node, level, top, height, isOpen}) => (
        <div
          key={node.id}
          className={styles.staticRow}
          style={{top, height}}>
          <div
            className={clsx(
              styles.rowInner,
              getRowClassName(node, level, isOpen),
            )}
            style={{paddingLeft: level * INDENT}}>
            <SidebarRowContent
              data={node}
              isOpen={isOpen}
              activePath={activePath}
              filter=""
              onToggle={() => undefined}
              onItemClick={onItemClick}
              registerLink={registerLink}
              staticMode
            />
          </div>
        </div>
      ))}
    </div>
  );
}
