import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import type { AppProps /*, AppContext */ } from "next/app";
import { compose, map } from "lodash/fp";
import "normalize.css";
import "tachyons/css/tachyons.min.css";

const NavItems = [
  { name: "Home", path: "/" },
  { name: "Servers", path: "/servers" },
  { name: "Docs", path: "/docs" },
];

const buildNav = (current: string) =>
  compose(
    map((v) => (
      <li className={"self-center br2 pa2 mh2 hover-bg-black-10 " + v.extra}>
        <Link href={v.path}>
          <a className="link">{v.name}</a>
        </Link>
      </li>
    )),
    map((v) => (current === v.path ? { ...v, extra: "bg-black-10" } : v))
  );

const Nav = ({ route }) => (
  <>
    <nav className="flex items-stretch">
      <div className="flex-shrink-0">
        <Image src="/img/logo-dark-trans.png" width={64} height={64} />
      </div>
      <ul className="list flex pa3 ma0 justify-between align-center center">
        {buildNav(route)(NavItems)}
      </ul>
    </nav>

    <style jsx>{`
      nav {
        background-color: #8577ce;
      }
    `}</style>
  </>
);

const footerList = (heading, items) => (
  <div className="flex flex-column">
    <h4 className="ma0">{heading}</h4>
    <ul>
      {map(([path, name]) => (
        <li>
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

const MyApp = ({ Component, pageProps, router }: AppProps) => (
  <>
    <Head>
      <link rel="stylesheet" href="/fonts.css" />
    </Head>

    <div id="container">
      <Nav route={router.pathname} />

      <main className="near-white pa3 ma0">
        <Component {...pageProps} />
      </main>
    </div>
    <Footer />

    <style jsx global>{`
      html,
      body,
      #__next {
        height: 100%;
        background-color: #111119;
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
