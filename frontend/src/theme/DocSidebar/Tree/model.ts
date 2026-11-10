import isInternalUrl from '@docusaurus/isInternalUrl';
import {isSamePath} from '@docusaurus/theme-common/internal';
import {
  isActiveSidebarItem,
  isVisibleSidebarItem,
} from '@docusaurus/plugin-content-docs/client';
import type {NodeApi} from 'react-arborist';
import type {
  PropSidebarItem,
  PropSidebarItemCategory,
} from '@docusaurus/plugin-content-docs';

export const INDENT = 12; // 0.75rem, matches nested .menu__list padding
export const DEFAULT_SIDEBAR_WIDTH = 292; // 300px minus the menu's left padding
export const STATIC_ROW_LIMIT = 80;

const ROW_GAP = 4; // 0.25rem, matches .menu__list-item margin
const LINK_LINE_HEIGHT = 20; // 1.25rem, matches .menu__link line-height
const LINK_VERTICAL_PADDING = 12; // 0.375rem top and bottom
const LINK_HORIZONTAL_PADDING = 24; // 0.75rem left and right
const CLEAR_TEXT_WIDTH = 8.2; // rough fallback without a canvas
const SCROLLBAR_WIDTH = 10;
const MAX_TEXT_LINES = 2;

export type SidebarNode = {
  id: string;
  name: string;
  kind: 'category' | 'link' | 'html';
  label: string;
  href?: string;
  item: PropSidebarItem;
  className?: string;
  defaultStyle?: boolean;
  html?: string;
  autoAddBaseUrl?: boolean;
  children?: SidebarNode[];
};

export type OpenState = Record<string, boolean>;

export type FlattenedRow = {
  node: SidebarNode;
  level: number;
  top: number;
  height: number;
  isOpen: boolean;
};

let textMeasureContext: CanvasRenderingContext2D | null = null;
const textWidths = new Map<string, number>();

function measureTextWidth(text: string): number {
  if (typeof document === 'undefined') {
    return Array.from(text).reduce(
      (width, character) =>
        width +
        (character.charCodeAt(0) > 0x2e80 ? 15.5 : CLEAR_TEXT_WIDTH),
      0,
    );
  }

  if (!textMeasureContext) {
    const canvas = document.createElement('canvas');
    textMeasureContext = canvas.getContext('2d');
    if (textMeasureContext) {
      textMeasureContext.font = '600 16px Inter, sans-serif';
    }
  }

  if (!textMeasureContext) {
    return text.length * CLEAR_TEXT_WIDTH;
  }

  const cached = textWidths.get(text);
  if (cached !== undefined) {
    return cached;
  }

  const width = textMeasureContext.measureText(text).width;
  textWidths.set(text, width);
  return width;
}

export function clearTextWidthCache() {
  textWidths.clear();
}

export function getRowHeight(
  node: SidebarNode,
  level: number,
  containerWidth: number,
): number {
  const width = containerWidth > 0 ? containerWidth : DEFAULT_SIDEBAR_WIDTH;
  const isCategory = node.kind === 'category';
  const category = isCategory
    ? (node.item as PropSidebarItemCategory)
    : undefined;
  const isExternal =
    node.kind === 'link' && typeof node.href === 'string'
      ? !isInternalUrl(node.href)
      : false;
  const caretWidth =
    isCategory && category?.collapsible !== false
      ? node.href
        ? 44 // separate .menu__caret button
        : 26 // caret pseudo-element including its margin
      : 0;

  const availableWidth = Math.max(
    80,
    width -
      SCROLLBAR_WIDTH -
      level * INDENT -
      LINK_HORIZONTAL_PADDING -
      caretWidth -
      (isExternal ? 20 : 0),
  );

  const textWidth =
    node.kind === 'html' ? 0 : measureTextWidth(node.label || node.name);
  const lines = textWidth > availableWidth ? MAX_TEXT_LINES : 1;
  return lines * LINK_LINE_HEIGHT + LINK_VERTICAL_PADDING + ROW_GAP;
}

function createNodeId(
  item: PropSidebarItem,
  parentId: string,
  index: number,
): string {
  if (item.type === 'category') {
    return item.href
      ? `category:${parentId}/${index}:${item.href}`
      : `category:${parentId}/${index}:${item.label}`;
  }
  if (item.type === 'link') {
    return `link:${parentId}/${index}:${item.href}`;
  }
  return `html:${parentId}/${index}`;
}

export function buildSidebarNodes(
  items: readonly PropSidebarItem[],
  activePath: string,
  parentId = 'root',
): SidebarNode[] {
  const nodes: SidebarNode[] = [];

  items.forEach((item, index) => {
    if (!isVisibleSidebarItem(item, activePath)) {
      return;
    }

    if (item.type === 'category') {
      const id = createNodeId(item, parentId, index);
      const children = buildSidebarNodes(item.items, activePath, id);
      const href = item.href && !item.linkUnlisted ? item.href : undefined;

      if (children.length === 0) {
        if (!href) {
          return;
        }
        nodes.push({
          id,
          name: item.label,
          kind: 'link',
          label: item.label,
          href,
          item: {
            type: 'link',
            href,
            label: item.label,
            className: item.className,
          },
          className: item.className,
        });
        return;
      }

      nodes.push({
        id,
        name: item.label,
        kind: 'category',
        label: item.label,
        href,
        item,
        className: item.className,
        children,
      });
      return;
    }

    if (item.type === 'link') {
      nodes.push({
        id: createNodeId(item, parentId, index),
        name: item.label,
        kind: 'link',
        label: item.label,
        href: item.href,
        item,
        className: item.className,
        autoAddBaseUrl: item.autoAddBaseUrl,
      });
      return;
    }

    nodes.push({
      id: createNodeId(item, parentId, index),
      name: '',
      kind: 'html',
      label: '',
      item,
      className: item.className,
      defaultStyle: item.defaultStyle,
      html: item.value,
    });
  });

  return nodes;
}

export function getInitialOpenState(
  nodes: readonly SidebarNode[],
  activePath: string,
): OpenState {
  const openState: OpenState = {};

  const visit = (items: readonly SidebarNode[]) => {
    items.forEach((node) => {
      if (node.kind !== 'category') {
        return;
      }

      const item = node.item as PropSidebarItemCategory;
      if (
        item.collapsible === false ||
        isActiveSidebarItem(item, activePath) ||
        !item.collapsed
      ) {
        openState[node.id] = true;
      }

      visit(node.children ?? []);
    });
  };

  visit(nodes);
  return openState;
}

export function findActiveNode(
  nodes: readonly SidebarNode[],
  activePath: string,
): SidebarNode | undefined {
  for (const node of nodes) {
    if (node.kind === 'link' && isSamePath(node.href, activePath)) {
      return node;
    }

    if (node.kind === 'category') {
      const child = findActiveNode(node.children ?? [], activePath);
      if (child) {
        return child;
      }
      if (isSamePath(node.href, activePath)) {
        return node;
      }
    }
  }

  return undefined;
}

export function normalizeFilter(value: string): string {
  return value.toLocaleLowerCase();
}

/**
 * Match a node's own label. react-arborist keeps ancestor rows as context, so
 * matching a category does not pull its whole subtree into the results.
 */
export function matchesSidebarNode(
  node: NodeApi<SidebarNode>,
  searchTerm: string,
): boolean {
  const term = normalizeFilter(searchTerm.trim());
  return !term || normalizeFilter(node.data.label).includes(term);
}

export function countMatchingNodes(
  nodes: readonly SidebarNode[],
  filter: string,
): number {
  const term = normalizeFilter(filter.trim());
  if (!term) {
    return 0;
  }

  const visit = (items: readonly SidebarNode[]): number =>
    items.reduce(
      (count, node) =>
        count +
        (normalizeFilter(node.label).includes(term) ? 1 : 0) +
        (node.children ? visit(node.children) : 0),
      0,
    );

  return visit(nodes);
}

export function flattenVisibleNodes(
  nodes: readonly SidebarNode[],
  openState: OpenState,
  level = 0,
  rows: Array<{node: SidebarNode; level: number}> = [],
) {
  nodes.forEach((node) => {
    rows.push({node, level});
    if (node.kind === 'category' && openState[node.id]) {
      flattenVisibleNodes(node.children ?? [], openState, level + 1, rows);
    }
  });

  return rows;
}
