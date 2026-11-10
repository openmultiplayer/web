import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useLocationChange} from '@docusaurus/theme-common/internal';

import BackToTopButton from '../../components/BackToTopButton';
import styles from './styles.module.css';

const SHOW_THRESHOLD = 300;

export default function PageBackToTopButton(): ReactNode {
  const [shown, setShown] = useState(false);
  const shownRef = useRef(false);

  useEffect(() => {
    const update = () => {
      const nextShown = window.scrollY > SHOW_THRESHOLD;
      if (shownRef.current === nextShown) {
        return;
      }
      shownRef.current = nextShown;
      setShown(nextShown);
    };

    update();
    window.addEventListener('scroll', update, {passive: true});
    return () => window.removeEventListener('scroll', update);
  }, []);

  useLocationChange(() => {
    // New routes start at the top.
    shownRef.current = false;
    setShown(false);
  });

  const scrollToTop = () => {
    const reducedMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? 'auto' : 'smooth',
    });
  };

  const label = translate({
    id: 'theme.BackToTopButton.buttonAriaLabel',
    message: 'Scroll back to top',
    description: 'The ARIA label for the back to top button',
  });

  return (
    <BackToTopButton
      label={label}
      visible={shown}
      onClick={scrollToTop}
      className={clsx(
        styles.pageButton,
        ThemeClassNames.common.backToTopButton,
      )}
    />
  );
}
