import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import type { AppProps } from "next/app";
import { compose, flow, map, sortBy } from "lodash/fp";
import "normalize.css";
import "tachyons/css/tachyons.min.css";
import { NextSeo } from "next-seo";
import { last } from "lodash";

type NavItem = {
  name: string;
  path: string;
  exact?: boolean;
  extra?: string;
};

const NavItems: NavItem[] = [
  { name: "Home", path: "/", exact: true },
  { name: "Servers", path: "/servers" },
  { name: "Docs", path: "/docs" },
];

const buildNav = (current: string) =>
  compose(
    map((v: NavItem) => (
      <li
        key={v.path}
        className={"self-center br2 pa2 mh2 hover-bg-black-10 " + v.extra}
      >
        <Link href={v.path}>
          <a className="link">{v.name}</a>
        </Link>
      </li>
    )),
    map((v: NavItem) =>
      v.exact
        ? current === v.path
          ? { ...v, extra: "bg-black-10" }
          : v
        : current.startsWith(v.path)
        ? { ...v, extra: "bg-black-10" }
        : v
    )
  );

const Nav = ({ route }) => (
  <>
    <nav role="main" className="flex items-stretch bb b--black-30 bg-white">
      <div className="flex-shrink-0 pa2">
        <Link href="/">
          <a>
            <Image src="/img/logo-dark-trans.png" width={50} height={50} />
          </a>
        </Link>
      </div>
      <ul className="list flex pa3 ma0 justify-between align-center center">
        {buildNav(route)(NavItems)}
      </ul>
    </nav>

    <style jsx>{`
      nav {
        height: 4em;
      }
    `}</style>
  </>
);

type SidebarCategory = {
  type: string;
  label: string;
  items: SidebarItem[];
};

type SidebarItem = SidebarCategory | string;

// makes the path into a nicely readable string
const nicenPath = (s: string) => last(s.split("/"));

const DocsSidebar = ({
  title,
  tree,
  open = false,
}: {
  title: string;
  tree: SidebarItem[];
  open?: boolean;
}) => (
  <>
    <details open={open}>
      <summary>{title}</summary>
      <ul className="list ph2 ma1">
        {flow(
          sortBy((v: SidebarItem) => typeof v === "string"),
          map((v: SidebarItem) =>
            typeof v === "string" ? (
              <li key={v}>
                <Link href={`/docs/${v}`}>
                  <a>{nicenPath(v)}</a>
                </Link>
              </li>
            ) : (
              <li key={v.label}>
                <DocsSidebar title={v.label} tree={v.items} />
              </li>
            )
          )
        )(tree)}
      </ul>
    </details>
  </>
);

const footerList = (heading, items) => (
  <div className="flex flex-column">
    <h4 className="ma0">{heading}</h4>
    <ul>
      {map(([path, name]) => (
        <li key={path}>
          <Link href={path}>
            <a className="light-blue hover-white">{name}</a>
          </Link>
        </li>
      ))(items)}
    </ul>
  </div>
);

const Footer = () => (
  <footer className="bg-black-80">
    <div className="near-white pa4-ns pv4 ph5 flex flex-column flex-row-ns justify-around center measure-wide">
      {footerList("Docs", [
        ["/docs/scripting/resources/start", "Getting Started"],
        ["/docs/tutorials/_tutorials", "Tutorials"],
        ["/docs/scripting/functions", "Functions"],
        ["/docs/scripting/callbacks", "Callbacks"],
      ])}

      {footerList("Community", [
        ["https://discord.gg/samp", "Discord"],
        ["https://instagram.com/openmultiplayer/", "Instagram"],
        ["https://twitter.com/openmultiplayer", "Twitter"],
        ["https://facebook.com/openmultiplayer", "Facebook"],
        ["https://vk.com/open_mp", "VK"],
      ])}

      {footerList("More", [
        ["https://sa-mp.com", "SA-MP"],
        ["/blog", "Blog"],
        ["https://github.com/openmultiplayer/", "GitHub"],
      ])}
    </div>
  </footer>
);

type SidebarTree = {
  Sidebar: SidebarItem[];
};

const MyApp = ({ Component, pageProps, router }: AppProps) => (
  <>
    <Head>
      <link rel="stylesheet" href="/fonts.css" />
    </Head>

    <NextSeo
      title="Open Multiplayer"
      titleTemplate="open.mp | %s"
      canonical="https://www.open.mp"
      twitter={{
        cardType: "summary",
        site: "@openmultiplayer",
        handle: "@openmultiplayer",
      }}
    />

    <div id="container">
      <Nav route={router.pathname} />

      <main className="pa0 ma0 flex">
        {router.pathname.startsWith("/docs") && (
          <nav className="br pa2 b--black-30 mw6">
            <DocsSidebar
              title="Contents"
              tree={
                ((process.env.tree as unknown) as SidebarTree)
                  .Sidebar as SidebarItem[]
              }
              open={true}
            />
          </nav>
        )}

        <Component {...pageProps} />
      </main>
    </div>
    <Footer />

    <style jsx global>{`
      html,
      body,
      #__next {
        height: 100%;
        background-color: #fefefe;
        font-family: english-grotesque, sans-serif;
        display: flex;
        flex-direction: column;
      }
      #container {
        flex: 1 0 auto;
      }
    `}</style>
  </>
);

export default MyApp;
