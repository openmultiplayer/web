import Image from "next/image";
import Link from "next/link";
import { entries, flow, map } from "lodash/fp";
import { useState } from "react";

import LanguageSelect from "./LanguageSelect";
import Hamburger from "./Hamburger";
import { useIsAuthenticated } from "src/auth/hooks";

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

const UserIcon = () => (
  <svg width={50} height={50}>
    <path
      d="M22.766,0.001C10.194,0.001,0,10.193,0,22.766s10.193,22.765,22.766,22.765c12.574,0,22.766-10.192,22.766-22.765
  S35.34,0.001,22.766,0.001z M22.766,6.808c4.16,0,7.531,3.372,7.531,7.53c0,4.159-3.371,7.53-7.531,7.53
  c-4.158,0-7.529-3.371-7.529-7.53C15.237,10.18,18.608,6.808,22.766,6.808z M22.761,39.579c-4.149,0-7.949-1.511-10.88-4.012
  c-0.714-0.609-1.126-1.502-1.126-2.439c0-4.217,3.413-7.592,7.631-7.592h8.762c4.219,0,7.619,3.375,7.619,7.592
  c0,0.938-0.41,1.829-1.125,2.438C30.712,38.068,26.911,39.579,22.761,39.579z"
    />
  </svg>
);

const Nav = ({ items, route }: Props) => {
  const [show, setShow] = useState(false);
  const authenticated = useIsAuthenticated();

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
        {authenticated && (
          <div className="flex-shrink-0 pa2">
            <Link href="/dashboard">
              <a>
                <UserIcon />
              </a>
            </Link>
          </div>
        )}
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
