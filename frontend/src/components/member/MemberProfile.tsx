import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import { FC, useCallback } from "react";
import { useIsAdmin } from "src/auth/hooks";
import { User } from "src/types/_generated_User";
import { niceDate } from "src/utils/dates";
import ProfilePicture from "./ProfilePicture";
import { useBanStatus } from "./hooks";

type Props = {
  user: User;
};

const MemberMenu: FC<Props> = ({ user }) => {
  const admin = useIsAdmin();
  const banstatus = useBanStatus();
  const isBanned = user.deletedAt != null;

  const onClickBan = useCallback(() => {
    banstatus(user.id, !isBanned);
  }, [banstatus, user, isBanned]);

  return (
    <Menu placement="left-start">
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
        boxSize="1.5em"
        borderWidth="0"
      ></MenuButton>
      <MenuList>
        {admin && (
          <MenuItem onClick={onClickBan}>{isBanned ? "Unban" : "Ban"}</MenuItem>
        )}
      </MenuList>
    </Menu>
  );
};

const MemberProfile: FC<Props> = ({ user }) => {
  return (
    <Box as="section" height="100%">
      <Flex gridGap="1em">
        <Box maxW="10em" flexGrow={1}>
          <ProfilePicture id={user.id} size="100%" />
        </Box>

        <Box flexGrow={1}>
          <Stack>
            <Flex justifyContent="space-between" alignItems="center">
              <Heading>{user.name}</Heading>
              <MemberMenu user={user} />
            </Flex>

            <Divider />

            <Flex>
              <Stat>
                <StatLabel>Joined</StatLabel>
                <StatNumber>{niceDate(user.createdAt)}</StatNumber>
              </Stat>

              {user.deletedAt && (
                <Stat color="red">
                  <StatLabel>Banned</StatLabel>
                  <StatNumber>{niceDate(user.deletedAt)}</StatNumber>
                </Stat>
              )}
            </Flex>

            <Divider />

            <Flex>
              <Stat>
                <StatLabel>Threads created</StatLabel>
                <StatNumber>{user.threadCount}</StatNumber>
              </Stat>

              <Stat>
                <StatLabel>Posts sent</StatLabel>
                <StatNumber>{user.postCount}</StatNumber>
              </Stat>
            </Flex>

            <Divider />

            <Text>{user.bio ?? "(This user has no bio)"}</Text>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default MemberProfile;
