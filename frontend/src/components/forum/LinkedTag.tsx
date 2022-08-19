import { CloseButton } from "@chakra-ui/close-button";
import { useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { FC, forwardRef, LegacyRef, useMemo } from "react";
import { alternativeColour, generateColour } from "src/utils/colour-hash";

type Props = {
  name: string;
  posts?: number;
  coloured?: boolean;
  onClick?: () => void;
  closeButton?: boolean;
  onClose?: () => void;
};

// eslint-disable-next-line react/display-name
export const TagButton: FC<Props & { href?: string }> = forwardRef(
  (
    { name, posts, coloured = false, onClick, closeButton, onClose, href },
    ref: LegacyRef<HTMLAnchorElement>
  ) => {
    const colour = useMemo(() => generateColour(name), [name]);
    const alt = alternativeColour(colour);
    return (
      <>
        <a ref={ref} href={href} className="tag-anchor">
          <div onClick={onClick} className="grid">
            <div className="background" />
            <div className="wipe" />
            <div className="tag">
              <span>
                {name} {posts && `(${posts})`}
              </span>
              {closeButton && (
                <span>
                  <CloseButton
                    ml="0.25em"
                    size="sm"
                    className="tag-remove"
                    onClick={() => onClose?.()}
                    aria-label="Remove tag"
                  />
                </span>
              )}
            </div>
          </div>
        </a>

        <style jsx>{`
          a:hover .tag {
            color: ${alt};
          }
          a {
            cursor: pointer;
            text-decoration: none;
          }
          .grid {
            display: grid;
          }
          .background {
            grid-row: 1/2;
            grid-column: 1/2;

            border-radius: 0.25em;

            background-color: ${useColorModeValue('var(--chakra-colors-gray-50)', 'var(--chakra-colors-gray-800)')};
          }
          .tag {
            transition: color 0.2s;
            display: flex;

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

            color: ${useColorModeValue('var(--chakra-colors-gray-700)', 'var(--chakra-colors-gray-400)')};
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
  }
);

const LinkedTag: FC<Props> = (props) => {
  return (
    <>
      <Link href={`/discussion/tag/${props.name}`} passHref>
        <TagButton {...props} />
      </Link>
    </>
  );
};

export default LinkedTag;
