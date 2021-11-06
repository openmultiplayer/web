import { Grid, GridItem, TagProps } from "@chakra-ui/react";
import Link from "next/link";
import { FC, useMemo } from "react";
import { alternativeColour, generateColour } from "src/utils/colour-hash";

type Props = {
  name: string;
  posts?: number;
  coloured?: boolean;
  onClick?: () => void;
};

const LinkedTag: FC<Props> = ({ name, posts, coloured = false, onClick }) => {
  const colour = useMemo(() => generateColour(name), [name]);
  const alt = alternativeColour(colour);
  return (
    <>
      <Link href={`/discussion/tag/${name}`}>
        <a>
          <div onClick={onClick} className="grid">
            <div className="background" />
            <div className="wipe" />
            <div className="tag">
              {name} {posts && `(${posts})`}
            </div>
          </div>
        </a>
      </Link>

      <style jsx>{`
        .grid {
          display: grid;
        }
        .background {
          grid-row: 1/2;
          grid-column: 1/2;

          border-radius: 0.25em;

          background-color: var(--chakra-colors-gray-50);
        }
        .tag {
          transition: color 0.2s;

          grid-row: 1/2;
          grid-column: 1/2;
          height: min-content;
          padding: 0em 0.75em 0em 0.5em;

          border-top-right-radius: 0em;
          border-bottom-right-radius: 0em;
          border-left-width: 0.25em;
          border-style: solid;
          border-left-color: ${colour};
          border-radius: 0.25em;

          color: var(--chakra-colors-gray-700);
        }
        a:hover .tag {
          color: ${alt};
        }
        a {
          text-decoration: none;
        }
        .wipe {
          transition: all 0.2s;

          grid-row: 1/2;
          grid-column: 1/2;
          width: 0.25em;

          border-top-right-radius: 0em;
          border-bottom-right-radius: 0em;
          border-top-left-radius: 0.25em;
          border-bottom-left-radius: 0.25em;
          border-left-width: 0.25em;
          border-style: solid;
          border-left-color: ${colour};

          background-color: ${colour};
        }
        a:hover .wipe {
          width: 100%;
          border-top-right-radius: 0.25em;
          border-bottom-right-radius: 0.25em;
          background-color: ${coloured ? generateColour(name) : "gray.200"};
        }
      `}</style>
    </>
  );
};

export default LinkedTag;
