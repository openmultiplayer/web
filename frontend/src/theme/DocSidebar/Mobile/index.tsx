import React, {type ReactNode} from 'react';
import {
  NavbarSecondaryMenuFiller,
  type NavbarSecondaryMenuComponent,
} from '@docusaurus/theme-common';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import DocsSidebarTree from '../Tree';
import type {Props} from '@theme/DocSidebar/Mobile';

import styles from './styles.module.css';

const DocSidebarMobileSecondaryMenu: NavbarSecondaryMenuComponent<Props> = ({
  sidebar,
  path,
}) => {
  const mobileSidebar = useNavbarMobileSidebar();
  return (
    <div className={styles.mobileMenu}>
      <DocsSidebarTree
        sidebar={sidebar}
        path={path}
        onItemClick={(item) => {
          // Mobile sidebar should only be closed if the category has a link
          if (item.type === 'category' && item.href) {
            mobileSidebar.toggle();
          }
          if (item.type === 'link') {
            mobileSidebar.toggle();
          }
        }}
      />
    </div>
  );
};

function DocSidebarMobile(props: Props): ReactNode {
  return (
    <NavbarSecondaryMenuFiller
      component={DocSidebarMobileSecondaryMenu}
      props={props}
    />
  );
}

export default React.memo(DocSidebarMobile);
