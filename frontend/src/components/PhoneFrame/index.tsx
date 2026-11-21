import React, { type ReactNode } from "react";

import styles from "./styles.module.css";

// Turns the phone in the homepage hero on or off.
export const SHOW_PHONE = true;

const PhoneFrame = ({ children }: { children?: ReactNode }): React.ReactElement => (
  <div className={styles.phone}>
    <div className={styles.screen}>
      <span className={styles.notch} aria-hidden="true" />
      {children ?? (
        <div className={styles.placeholder}>
          <img src="/images/launcher/omp.png" width={44} height={44} alt="" />
        </div>
      )}
    </div>
  </div>
);

export default PhoneFrame;
