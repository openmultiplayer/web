import Link from "next/link";
import { map } from "lodash/fp";
import { Box, useColorModeValue } from "@chakra-ui/react";

type Item = [string, string];

const footerList = (heading: string, items: Array<Item>) => (
  <div className="flex flex-column">
    <h4 className="ma0">{heading}</h4>
    <ul className="list pa0">
      {map(([path, name]) => (
        <li key={path}>
          <Link href={path}>
            <a className="link near-white" target="_blank">
              {name}
            </a>
          </Link>
        </li>
      ))(items)}
    </ul>
  </div>
);

const Footer = () => (
  <Box as="footer" bgColor={useColorModeValue("blackAlpha.800", "gray.900")}>
    <div className="near-white pa4-ns pv4 ph5 flex flex-column flex-row-ns justify-around center measure-wide">
      {/* {footerList("Docs", [
        ["/docs/scripting/resources/start", "Getting Started"],
        ["/docs/tutorials/_tutorials", "Tutorials"],
        ["/docs/scripting/functions", "Functions"],
        ["/docs/scripting/callbacks", "Callbacks"],
      ])} */}

      {footerList("Community", [
        ["https://sa-mp.mp/", "SA-MP"],
        ["https://discord.gg/samp", "Discord"],
        ["https://instagram.com/openmultiplayer/", "Instagram"],
        ["https://x.com/openmultiplayer", "X"],
        ["https://youtube.com/openmultiplayer", "YouTube"],
        ["https://facebook.com/openmultiplayer", "Facebook"],
        ["https://vk.com/open_mp", "VK"],
      ])}

      {footerList("More", [
        ["/blog", "Blog"],
        ["https://github.com/openmultiplayer/", "GitHub"],
      ])}
    </div>
  </Box>
);

export default Footer;
