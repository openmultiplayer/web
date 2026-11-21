import clsx from "clsx";
import React, { type ReactNode } from "react";
import { FiAlertOctagon, FiAlertTriangle, FiCheckCircle, FiInfo, FiX } from "react-icons/fi";

export type NoticeType = "note" | "info" | "tip" | "warning" | "danger";

const ICONS: Record<NoticeType, typeof FiInfo> = {
  note: FiInfo,
  info: FiInfo,
  tip: FiCheckCircle,
  warning: FiAlertTriangle,
  danger: FiAlertOctagon,
};

// A quiet card for page notices: a small coloured icon says what kind it is, and the card
// itself stays in the site's colours instead of a loud filled banner. Styled in ui.css.
export const Notice = ({
  type = "info",
  title,
  children,
  onDismiss,
  dismissLabel,
  dismissDisabled,
  className,
}: {
  type?: NoticeType;
  title?: ReactNode;
  children: ReactNode;
  /** Shows a close button when given. */
  onDismiss?: () => void;
  dismissLabel?: string;
  dismissDisabled?: boolean;
  className?: string;
}): React.ReactElement => {
  const Icon = ICONS[type] ?? FiInfo;
  return (
    <aside className={clsx("omp-notice", `omp-notice--${type}`, className)} role="note">
      <Icon className="omp-notice-icon" aria-hidden="true" />
      <div className="omp-notice-text">
        {title && <strong>{title}</strong>}
        <p>{children}</p>
      </div>
      {onDismiss && (
        <button
          type="button"
          className="omp-notice-close"
          onClick={onDismiss}
          disabled={dismissDisabled}
          aria-label={dismissLabel}
        >
          <FiX aria-hidden="true" />
        </button>
      )}
    </aside>
  );
};
