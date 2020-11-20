import Link from "next/link";
import { flow, map, sortBy } from "lodash/fp";
import { last } from "lodash";
import { useState } from "react";

export type SidebarCategory = {
  type: string;
  label: string;
  items: SidebarItem[];
};

export type SidebarItem = SidebarCategory | string;

export type SidebarTree = {
  Sidebar: SidebarItem[];
};

// makes the path into a nicely readable string
const nicenPath = (s: string) => last(s.split("/"));

type Props = {
  title: string;
  tree: SidebarItem[];
  open?: boolean;
};

export const DocsSidebar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <nav className="br-ns bb b--black-30 pa2 b--black-30 truncate">
      <div className="tr pa2 dn-ns">
        <label htmlFor="sidebar">{visible ? "Hide" : "Show"} Menu</label>
        <input
          className="dn"
          type="checkbox"
          name="sidebar"
          id="sidebar"
          checked={visible}
          onChange={(e) => setVisible(e.target.checked)}
        />
      </div>
      {visible ? (
        <DocsSidebarNode
          title="Contents"
          tree={((process.env.tree as unknown) as SidebarTree).Sidebar}
          open={true}
        />
      ) : null}
    </nav>
  );
};

const DocsSidebarNode = ({ title, tree, open = false }: Props) => (
  <>
    <details open={open}>
      <summary className="pointer pa1 hover-blue">{title}</summary>
      <ul className="list pl2 ma0">
        {flow(
          sortBy((v: SidebarItem) => typeof v === "string"),
          map((v: SidebarItem) =>
            typeof v === "string" ? (
              <li key={v} className="pa1 truncate">
                <Link href={`/${v}`}>
                  <a className="link black hover-blue">{nicenPath(v)}</a>
                </Link>
              </li>
            ) : (
              <li key={v.label} className="">
                <DocsSidebarNode title={v.label} tree={v.items} />
              </li>
            )
          )
        )(tree)}
      </ul>
    </details>

    <style jsx>{`
      details {
        user-select: none;
      }
    `}</style>
  </>
);
