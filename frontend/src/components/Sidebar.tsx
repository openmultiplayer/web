import Link from "next/link";
import { useRouter } from "next/router";
import { flow, map, sortBy } from "lodash/fp";
import { last } from "lodash";
import { useState } from "react";

export type SidebarCategory = {
  type: string;
  path: string;
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
  path: string;
  current: string;
  tree: SidebarItem[];
  open?: boolean;
};

export const DocsSidebar = () => {
  const [visible, setVisible] = useState(false);
  const { asPath } = useRouter();
  return (
    <nav className="br-ns bb b--black-30 pa2 b--black-30 truncate w4-ns w4-m w5-l flex-auto">
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

      {/* In desktop mode, always display, regardless of `visible` */}
      <div className={visible ? `db-ns` : `db-ns dn`}>
        <DocsSidebarNode
          title="Contents"
          path="/docs"
          current={asPath}
          tree={((process.env.tree as unknown) as SidebarTree).Sidebar}
          open={true}
        />
      </div>

      <style jsx global>{`
        nav details {
          user-select: none;
        }
        nav details > summary {
          border-radius: 0.25em;
          line-height: 1.1em;
          margin: 0em;
          font-size: 1.1em;
          font-weight: 600;
          cursor: pointer;
          padding: 0.25rem;
        }
        nav details > summary::marker,
        nav details > summary::-webkit-details-marker {
          color: var(--ifm-color-gray-700);
        }
        nav details a,
        nav details a:visited {
          text-decoration: none;
          padding: 0 0.2em 0 0.2em;
          color: var(--ifm-color-gray-700);
        }
        nav details a:hover {
          color: var(--ifm-color-primary-darkest);
          border-radius: 0.25em;
        }
        nav details > ul {
          list-style-type: none;
          margin: 0;
          padding-left: 0.5em;
        }
        nav details > ul > li {
          padding: 0.25em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        nav details > ul > li > a {
          margin-left: 1em;
          line-height: 1.5em;
        }
      `}</style>
    </nav>
  );
};

const DocsSidebarNode = ({ title, path, current, tree, open }: Props) => (
  <>
    <details open={open}>
      <summary>
        <Link href={path}>
          <a>{title}</a>
        </Link>
      </summary>
      <ul>
        {flow(
          sortBy((v: SidebarItem) => typeof v === "string"),
          map((v: SidebarItem) =>
            typeof v === "string" ? (
              <li key={v}>
                <Link href={`/${v}`}>
                  <a>{nicenPath(v)}</a>
                </Link>
              </li>
            ) : (
              <li key={v.label}>
                <DocsSidebarNode
                  title={v.label}
                  path={v.path}
                  current={current}
                  tree={v.items}
                  open={current.includes(v.path)}
                />
              </li>
            )
          )
        )(tree)}
      </ul>
    </details>
  </>
);
