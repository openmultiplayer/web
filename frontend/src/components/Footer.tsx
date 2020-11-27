import Link from "next/link";
import { map } from "lodash/fp";

const footerList = (heading, items) => (
  <div className="flex flex-column">
    <h4 className="ma0">{heading}</h4>
    <ul className="list pa0">
      {map(([path, name]) => (
        <li key={path}>
          <Link href={path}>
            <a className="link near-white hover-white">{name}</a>
          </Link>
        </li>
      ))(items)}
    </ul>

    <style jsx>{`
      a:visited {
        color: light-blue;
      }
    `}</style>
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

export default Footer;
