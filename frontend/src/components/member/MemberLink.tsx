import { Flex, Link } from "@chakra-ui/layout";
import NextLink from "next/link";
import React, { FC } from "react";
import { WEB_ADDRESS } from "src/config";
import { User } from "src/types/_generated_User";
import ProfilePicture from "./ProfilePicture";

type Props = {
  user: Pick<User, "id" | "name">;
};

const MemberLink: FC<Props> = ({ user }) => {
  return (
    <NextLink href={`${WEB_ADDRESS}/members/${user.id}`} passHref>
      <Link>
        <Flex fontStyle="normal" color="black" gridGap="0.5em">
          <ProfilePicture id={user.id} />

          <span>
            <em className="author">{user.name}</em>
          </span>
        </Flex>
      </Link>
    </NextLink>
  );
};

export default MemberLink;
