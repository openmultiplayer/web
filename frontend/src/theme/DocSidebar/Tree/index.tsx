import {
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEventHandler,
  type ReactNode,
} from 'react';
import clsx from 'clsx';
import useIsBrowser from '@docusaurus/useIsBrowser';
import useIsomorphicLayoutEffect from '@docusaurus/useIsomorphicLayoutEffect';
import {translate} from '@docusaurus/Translate';
import {ThemeClassNames, useThemeConfig} from '@docusaurus/theme-common';
import {Tree, type NodeApi, type TreeApi} from 'react-arborist';
import type {PropSidebarItem} from '@docusaurus/plugin-content-docs';

import BackToTopButton from '../../../components/BackToTopButton';
import {SidebarContext, type SidebarContextValue} from './context';
import {ClearIcon, SearchIcon} from './icons';
import {
  DEFAULT_SIDEBAR_WIDTH,
  INDENT,
  buildSidebarNodes,
  clearTextWidthCache,
  countMatchingNodes,
  findActiveNode,
  getInitialOpenState,
  getRowHeight,
  matchesSidebarNode,
  type SidebarNode,
} from './model';
import {
  SidebarNodeRenderer,
  SidebarTreeRow,
  StaticSidebarRows,
} from './rows';
import {animateScrollTo} from './scroll';
import styles from './styles.module.css';

const BACK_TO_TOP_THRESHOLD = 200;

export type DocsSidebarTreeProps = {
  sidebar: readonly PropSidebarItem[];
  path: string;
  variant?: 'desktop' | 'mobile';
  onItemClick?: (item: PropSidebarItem) => void;
};

export default function DocsSidebarTree({
  sidebar,
  path,
  variant = 'desktop',
  onItemClick,
}: DocsSidebarTreeProps): ReactNode {
  const isBrowser = useIsBrowser();
  const treeRef = useRef<TreeApi<SidebarNode> | undefined>(undefined);
  const treeViewportRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const linkRefs = useRef(new Map<string, HTMLAnchorElement>());
  const fontsReadyRef = useRef(false);
  const scrollAnimationRef = useRef<number | null>(null);
  const showBackToTopRef = useRef(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [filter, setFilter] = useState('');
  const deferredFilter = useDeferredValue(filter.trim());
  const hasFilter = deferredFilter.length > 0;
  const [size, setSize] = useState<{width: number; height: number} | null>(
    null,
  );
  const [animated, setAnimated] = useState(false);

  const {
    docs: {
      sidebar: {autoCollapseCategories},
    },
  } = useThemeConfig();

  const nodes = useMemo(
    () => buildSidebarNodes(sidebar, path),
    [path, sidebar],
  );
  const initialOpenState = useMemo(
    () => getInitialOpenState(nodes, path),
    [nodes, path],
  );
  const activeNode = useMemo(
    () => findActiveNode(nodes, path),
    [nodes, path],
  );
  const matchCount = useMemo(
    () => (hasFilter ? countMatchingNodes(nodes, deferredFilter) : 0),
    [deferredFilter, hasFilter, nodes],
  );
  const isEmpty = hasFilter && matchCount === 0;

  const filterPlaceholder = translate({
    id: 'theme.docs.sidebar.filterPlaceholder',
    message: 'Filter documentation',
    description: 'Placeholder for the docs sidebar filter input',
  });
  const clearFilterLabel = translate({
    id: 'theme.docs.sidebar.clearFilter',
    message: 'Clear filter',
    description: 'ARIA label for clearing the docs sidebar filter',
  });
  const noResultsTitle = translate({
    id: 'theme.docs.sidebar.filterNoResults',
    message: 'No matching docs',
    description: 'Title shown when the docs sidebar filter has no matches',
  });
  const noResultsHint = translate({
    id: 'theme.docs.sidebar.filterNoResultsHint',
    message: 'Try a different search term.',
    description: 'Hint shown when the docs sidebar filter has no matches',
  });
  const backToTopLabel = translate({
    id: 'theme.BackToTopButton.buttonAriaLabel',
    message: 'Scroll back to top',
    description: 'The ARIA label for the back to top button',
  });

  const clearFilter = useCallback(() => {
    setFilter('');
    inputRef.current?.focus();
  }, []);

  const cancelScrollAnimation = useCallback(() => {
    if (scrollAnimationRef.current !== null) {
      cancelAnimationFrame(scrollAnimationRef.current);
      scrollAnimationRef.current = null;
    }
  }, []);

  const scrollToActiveNode = useCallback(() => {
    const tree = treeRef.current;
    if (!tree || !activeNode || tree.isFiltered) {
      return;
    }

    cancelScrollAnimation();

    const node = tree.get(activeNode.id);
    const rowIndex = node?.rowIndex;
    const outer = tree.listEl.current;
    if (!node || typeof rowIndex !== 'number' || !outer) {
      tree.scrollTo(activeNode.id, 'center');
      return;
    }

    const itemTop =
      tree.rowTopPosition(rowIndex) +
      (tree.props.padding ?? tree.props.paddingTop ?? 0);
    const itemHeight = tree.rowHeightAt(rowIndex);
    const fullyVisible =
      itemTop >= outer.scrollTop &&
      itemTop + itemHeight <= outer.scrollTop + outer.clientHeight;
    if (fullyVisible) {
      return;
    }

    const centered = itemTop - (outer.clientHeight - itemHeight) / 2;
    const maxOffset = Math.max(0, outer.scrollHeight - outer.clientHeight);
    const target = Math.max(
      0,
      Math.min(Math.round(centered), maxOffset),
    );

    scrollAnimationRef.current = animateScrollTo(outer, target) || null;
  }, [activeNode, cancelScrollAnimation]);

  const updateBackToTop = useCallback((scrollTop: number) => {
    const next = scrollTop > BACK_TO_TOP_THRESHOLD;
    if (showBackToTopRef.current !== next) {
      showBackToTopRef.current = next;
      setShowBackToTop(next);
    }
  }, []);

  const scrollTreeToTop = useCallback(() => {
    const outer = treeRef.current?.listEl.current;
    if (!outer) {
      return;
    }

    cancelScrollAnimation();
    scrollAnimationRef.current = animateScrollTo(outer, 0) || null;
    treeViewportRef.current?.focus({preventScroll: true});
  }, [cancelScrollAnimation]);

  const registerLink = useCallback(
    (id: string, element: HTMLAnchorElement | null) => {
      if (element) {
        linkRefs.current.set(id, element);
      } else {
        linkRefs.current.delete(id);
      }
    },
    [],
  );

  const toggleNode = useCallback((id: string) => {
    treeRef.current?.get(id)?.toggle();
  }, []);

  const contextValue = useMemo<SidebarContextValue>(
    () => ({
      activePath: path,
      filter: deferredFilter,
      onToggle: toggleNode,
      onItemClick,
      registerLink,
    }),
    [deferredFilter, onItemClick, path, registerLink, toggleNode],
  );

  useIsomorphicLayoutEffect(() => {
    const element = treeViewportRef.current;
    if (!element) {
      return undefined;
    }

    const measure = () => {
      const rect = element.getBoundingClientRect();
      const width = Math.max(0, Math.floor(rect.width));
      const height =
        variant === 'mobile'
          ? Math.max(0, Math.floor(window.innerHeight - rect.top - 8))
          : Math.max(0, Math.floor(rect.height));

      setSize((previous) =>
        previous &&
        Math.abs(previous.width - width) < 1 &&
        Math.abs(previous.height - height) < 1
          ? previous
          : {width, height},
      );
    };

    measure();
    window.addEventListener('resize', measure);

    if (typeof ResizeObserver === 'undefined') {
      return () => window.removeEventListener('resize', measure);
    }

    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [variant]);

  const treeWidth = size?.width ?? DEFAULT_SIDEBAR_WIDTH;
  const showTree = Boolean(
    isBrowser && size && treeWidth > 0 && size.height > 0,
  );

  useEffect(() => {
    if (!showTree) {
      updateBackToTop(0);
    }
  }, [showTree, updateBackToTop]);

  useEffect(() => {
    const outer = treeRef.current?.listEl.current;
    if (outer) {
      updateBackToTop(outer.scrollTop);
    }
  }, [path, updateBackToTop]);

  useEffect(() => {
    if (!showTree) {
      return undefined;
    }

    const outer = treeRef.current?.listEl.current;
    if (!outer) {
      return undefined;
    }

    let timeout: number | null = null;
    const onScroll = () => {
      // Don't animate rows while the user is scrolling.
      outer.classList.add(styles.noTransition);
      if (timeout !== null) {
        window.clearTimeout(timeout);
      }
      timeout = window.setTimeout(() => {
        timeout = null;
        outer.classList.remove(styles.noTransition);
      }, 100);
      updateBackToTop(outer.scrollTop);
    };
    const cancel = () => cancelScrollAnimation();

    outer.addEventListener('scroll', onScroll, {passive: true});
    outer.addEventListener('wheel', cancel, {passive: true});
    outer.addEventListener('touchstart', cancel, {passive: true});
    outer.addEventListener('pointerdown', cancel, {passive: true});
    outer.addEventListener('keydown', cancel);
    return () => {
      outer.removeEventListener('scroll', onScroll);
      outer.removeEventListener('wheel', cancel);
      outer.removeEventListener('touchstart', cancel);
      outer.removeEventListener('pointerdown', cancel);
      outer.removeEventListener('keydown', cancel);
      cancel();
      if (timeout !== null) {
        window.clearTimeout(timeout);
      }
      outer.classList.remove(styles.noTransition);
    };
  }, [cancelScrollAnimation, showTree, updateBackToTop]);

  useEffect(() => {
    setAnimated(showTree);
  }, [showTree]);

  useEffect(() => {
    if (!hasFilter) {
      return;
    }

    cancelScrollAnimation();
    treeRef.current?.scrollToOffset(0);
    updateBackToTop(0);
  }, [cancelScrollAnimation, deferredFilter, hasFilter, updateBackToTop]);

  useEffect(() => {
    if (!showTree || !activeNode || hasFilter) {
      return undefined;
    }

    const tree = treeRef.current;
    if (!tree) {
      return undefined;
    }

    // Auto-collapse is handled by onToggle.
    tree.openParents(activeNode.id);
    if (activeNode.kind === 'category') {
      tree.open(activeNode.id);
    }

    const frame = requestAnimationFrame(scrollToActiveNode);
    return () => cancelAnimationFrame(frame);
  }, [activeNode, hasFilter, scrollToActiveNode, showTree]);

  useEffect(() => {
    if (!isBrowser || !document.fonts || fontsReadyRef.current) {
      return undefined;
    }

    let cancelled = false;
    let frame = 0;
    document.fonts.ready.then(() => {
      if (cancelled) {
        return;
      }
      fontsReadyRef.current = true;
      clearTextWidthCache();
      treeRef.current?.redrawList();
      // Fonts affect row heights; recenter once loaded.
      frame = requestAnimationFrame(scrollToActiveNode);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, [isBrowser, scrollToActiveNode]);

  const rowHeight = useCallback(
    (node: NodeApi<SidebarNode>) =>
      getRowHeight(node.data, node.level, treeWidth),
    [treeWidth],
  );

  const handleToggle = useCallback(
    (id: string) => {
      const tree = treeRef.current;
      if (!autoCollapseCategories || !tree || tree.isFiltered) {
        return;
      }

      const node = tree.get(id);
      if (!node?.isOpen) {
        return;
      }

      node.parent?.children?.forEach((sibling) => {
        if (sibling.id !== id && sibling.isInternal && sibling.isOpen) {
          tree.close(sibling.id, false);
        }
      });
      tree.redrawList();
    },
    [autoCollapseCategories],
  );

  const handleActivate = useCallback((node: NodeApi<SidebarNode>) => {
    if (node.isLeaf) {
      linkRefs.current.get(node.id)?.click();
    }
  }, []);

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key !== 'Enter') {
      return;
    }

    const activeElement = document.activeElement;
    if (
      !(activeElement instanceof HTMLElement) ||
      activeElement.getAttribute('role') !== 'treeitem'
    ) {
      return;
    }

    const link = activeElement.querySelector('a');
    if (link) {
      event.preventDefault();
      link.click();
    }
  };

  return (
    <div
      onKeyDown={handleKeyDown}
      className={clsx(
        ThemeClassNames.docs.docSidebarMenu,
        styles.container,
        variant === 'mobile' && styles.mobileContainer,
      )}>
      <div className={styles.filterBar} role="search">
        <div className={styles.filterField}>
          <SearchIcon className={styles.filterIcon} />
          <input
            ref={inputRef}
            type="search"
            className={clsx(
              styles.filterInput,
              filter.length > 0 && styles.filterInputWithActions,
            )}
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Escape' && filter) {
                event.preventDefault();
                clearFilter();
              }
            }}
            placeholder={filterPlaceholder}
            aria-label={filterPlaceholder}
            autoComplete="off"
            spellCheck={false}
          />
          {hasFilter && (
            <span className={styles.filterCount}>
              {matchCount.toLocaleString()}
            </span>
          )}
          {filter.length > 0 && (
            <button
              type="button"
              className={styles.clearButton}
              aria-label={clearFilterLabel}
              title={clearFilterLabel}
              onClick={clearFilter}>
              <ClearIcon />
            </button>
          )}
        </div>
      </div>
      <div
        ref={treeViewportRef}
        className={styles.treeViewport}
        tabIndex={-1}>
        <SidebarContext.Provider value={contextValue}>
          {showTree && size ? (
            <Tree<SidebarNode>
              ref={treeRef}
              data={nodes}
              searchTerm={deferredFilter}
              searchMatch={matchesSidebarNode}
              openByDefault={false}
              initialOpenState={initialOpenState}
              width={treeWidth}
              height={size.height}
              indent={INDENT}
              rowHeight={rowHeight}
              overscanCount={8}
              paddingBottom={8}
              disableDrag
              disableDrop
              disableEdit
              disableSelect
              disableMultiSelection
              onToggle={handleToggle}
              onActivate={handleActivate}
              renderRow={SidebarTreeRow}
              aria-label={translate({
                id: 'theme.docs.sidebar.navAriaLabel',
                message: 'Docs sidebar',
                description:
                  'The ARIA label for the sidebar navigation',
              })}
              className={clsx(
                'thin-scrollbar',
                styles.tree,
                animated && !hasFilter && styles.animated,
              )}>
              {SidebarNodeRenderer}
            </Tree>
          ) : (
            <StaticSidebarRows
              nodes={nodes}
              initialOpenState={initialOpenState}
              activePath={path}
              onItemClick={onItemClick}
              registerLink={registerLink}
            />
          )}
          {isEmpty && showTree && (
            <div
              className={styles.emptyState}
              role="status"
              aria-live="polite">
              <SearchIcon className={styles.emptyIcon} />
              <span className={styles.emptyTitle}>{noResultsTitle}</span>
              <span className={styles.emptyQuery}>
                &ldquo;{deferredFilter}&rdquo;
              </span>
              <span className={styles.emptyHint}>{noResultsHint}</span>
            </div>
          )}
        </SidebarContext.Provider>
        <BackToTopButton
          label={backToTopLabel}
          visible={showBackToTop}
          onClick={scrollTreeToTop}
          className={styles.backToTop}
        />
      </div>
    </div>
  );
}
