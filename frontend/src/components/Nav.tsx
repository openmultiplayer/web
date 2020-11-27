import Image from "next/image";
import Link from "next/link";
import { entries, flow, map } from "lodash/fp";
import { useState } from "react";

import LanguageSelect from "./LanguageSelect";
import Hamburger from "./Hamburger";

type NavItem = {
  name: string;
  path: string;
  exact?: boolean;
  extra?: string;
};

const NavListItem = ({ className = "", children }) => (
  <li className={"self-center br2 pa2 mh2 tc " + className}>{children}</li>
);

const getPathComparator = (exact: boolean) => (a: string, b: string) =>
  exact ? a === b : a.startsWith(b);

const hoverClasses = (leftMargin: boolean) =>
  leftMargin ? ["hover-bg-black-10", "ml-auto-ns"] : ["hover-bg-black-10"];

const selectedClass = (selected: boolean) => selected && "bg-black-10";

const hydrateNavItemClasses = (current: string) => ([i, v]: [
  string,
  NavItem
]) => ({
  ...v,
  extra: [
    v.extra,
    ...hoverClasses(i === "0"),
    selectedClass(getPathComparator(v.exact)(current, v.path)),
  ].join(" "),
});

const navItemToJSX = (v: NavItem) => (
  <NavListItem key={v.path} className={v.extra}>
    <Link href={v.path}>
      <a className="link">{v.name}</a>
    </Link>
  </NavListItem>
);

const buildNav = (current: string) =>
  flow(entries, map(hydrateNavItemClasses(current)), map(navItemToJSX));

type Props = {
  items: NavItem[];
  route: string;
};

const NavList = ({ items, route, show }) => (
  <ul
    className={[
      // Generic
      show ? "flex-ns" : "flex-ns dn",
      "list",
      "pa2",
      "pl0",
      "ma0",
      "flex-grow-1",
      "w-100",

      // Mobile
      "flex-column",

      // Desktop (-ns)
      "flex-row-ns",
      "justify-between-ns",
      "align-center-ns",
      "bg-white-ns",
    ].join(" ")}
  >
    {buildNav(route)(items)}
    <NavListItem className={show || "db-ns dn"}>
      <LanguageSelect />
    </NavListItem>
  </ul>
);

const Nav = ({ items, route }: Props) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav role="main" className="flex items-stretch bb b--black-30 bg-white">
        <div className="flex-shrink-0 pa2">
          <Link href="/">
            <a>
              <Image
                src="https://assets.open.mp/assets/images/assets/logo-dark-trans.png"
                width={50}
                height={50}
              />
            </a>
          </Link>
        </div>
        <NavList items={items} route={route} show={show} />
        <div className="flex-shrink-0 pa2 dn-ns ml-auto">
          <Hamburger active={show} toggle={setShow} />
        </div>
      </nav>

      <style jsx>{`
        nav {
          min-height: 4em;
        }
      `}</style>
    </>
  );
};

export default Nav;
