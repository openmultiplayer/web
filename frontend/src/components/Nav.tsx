import Image from "next/image";
import Link from "next/link";
import { flow, map } from "lodash/fp";

import LanguageSelect from "./LanguageSelect";

type NavItem = {
  name: string;
  path: string;
  exact?: boolean;
  extra?: string;
};

const buildNav = (current: string) =>
  flow(
    map((v: NavItem) =>
      v.exact
        ? current === v.path
          ? { ...v, extra: "bg-black-10" }
          : v
        : current.startsWith(v.path)
        ? { ...v, extra: "bg-black-10" }
        : v
    ),
    map((v: NavItem) => (
      <li
        key={v.path}
        className={"self-center br2 pa2 mh2 hover-bg-black-10 " + v.extra}
      >
        <Link href={v.path}>
          <a className="link">{v.name}</a>
        </Link>
      </li>
    ))
  );

type Props = {
  items: NavItem[];
  route: string;
};

const Nav = ({ items, route }: Props) => (
  <>
    <nav role="main" className="flex items-stretch bb b--black-30 bg-white">
      <div className="flex-shrink-0 pa2">
        <Link href="/">
          <a>
            <Image
              src="/images/assets/logo-dark-trans.png"
              width={50}
              height={50}
            />
          </a>
        </Link>
      </div>
      <ul className="list flex pa3 ma0 justify-between align-center center">
        {buildNav(route)(items)}
      </ul>
      <LanguageSelect />
    </nav>

    <style jsx>{`
      nav {
        height: 4em;
      }
    `}</style>
  </>
);

export default Nav;
