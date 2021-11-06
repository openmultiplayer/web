import Link from "next/link";
import { Tag, TagProps } from "@chakra-ui/tag";
import { FC } from "react";
import { generateColour } from "src/utils/colour-hash";

type Props = {
  name: string;
  posts?: number;
  coloured?: boolean;
} & TagProps;

const LinkedTag: FC<Props> = ({ name, posts, coloured = false, ...rest }) => {
  return (
    <Link href={`/discussion/tag/${name}`}>
      <a>
        <Tag
          borderLeftWidth="0.25em"
          borderStyle="solid"
          borderLeftColor={generateColour(name)}
          paddingLeft="0.25em"
          paddingRight="0.5em"
          borderRadius="0.25em"
          height="min-content"
          pl="0.5em"
          color="rgba(0, 0, 0, 0.7)"
          _hover={{
            backgroundColor: coloured ? generateColour(name, true) : "gray.200",
          }}
          {...rest}
        >
          {name} {posts && `(${posts})`}
        </Tag>
      </a>
    </Link>
  );
};

export default LinkedTag;
