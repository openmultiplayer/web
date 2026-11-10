import {type ReactNode} from 'react';
import clsx from 'clsx';

import ArrowUpIcon from './ArrowUpIcon';
import styles from './styles.module.css';

type BackToTopButtonProps = {
  label: string;
  visible: boolean;
  onClick: () => void;
  className?: string;
};

export default function BackToTopButton({
  label,
  visible,
  onClick,
  className,
}: BackToTopButtonProps): ReactNode {
  return (
    <button
      type="button"
      className={clsx(
        'clean-btn',
        styles.button,
        visible && styles.visible,
        className,
      )}
      aria-label={label}
      title={label}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      onClick={onClick}>
      <ArrowUpIcon />
    </button>
  );
}
