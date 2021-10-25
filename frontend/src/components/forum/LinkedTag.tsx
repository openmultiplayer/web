import Link from "next/link";
import { Tag, TagProps } from "@chakra-ui/tag";
import { FC } from "react";

type Props = {
  name: string;
} & TagProps;

const LinkedTag: FC<Props> = ({ name, ...rest }) => {
  return (
    <Link href={`/discussion/tag/${name}`}>
      <a>
        <Tag {...rest}>{name}</Tag>
      </a>
    </Link>
  );
};

export default LinkedTag;
