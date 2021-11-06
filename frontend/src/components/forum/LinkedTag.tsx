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
          color="rgba(0, 0, 0, 0.7)"
          backgroundColor={coloured ? generateColour(name) : "gray.100"}
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
