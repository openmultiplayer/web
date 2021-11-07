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
import { FC } from "react";
import { useIsAdmin } from "src/auth/hooks";
import { User } from "src/types/_generated_User";
import ProfilePicture from "../ProfilePicture";

type Props = {
  user: User;
};

const MemberMenu: FC<Props> = ({ user }) => {
  const admin = useIsAdmin();
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
      <MenuList>{admin && <MenuItem>Ban</MenuItem>}</MenuList>
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
                <StatLabel>Threads created</StatLabel>
                <StatNumber>{user.threadCount}</StatNumber>
              </Stat>

              <Stat>
                <StatLabel>Posts sent</StatLabel>
                <StatNumber>{user.postCount}</StatNumber>
              </Stat>
            </Flex>

            <Text>{user.bio ?? "(This user has no bio)"}</Text>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default MemberProfile;
