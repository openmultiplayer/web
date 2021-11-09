import {
  CheckIcon,
  EditIcon,
  HamburgerIcon,
  NotAllowedIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  IconButton,
  Heading,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import { FC, useCallback, useState, ChangeEvent } from "react";
import ReactMarkdown from "react-markdown";
import Editor from "rich-markdown-editor";
import { useAuth, useIsAdmin } from "src/auth/hooks";
import { User } from "src/types/_generated_User";
import { niceDate } from "src/utils/dates";
import { useBanStatus, useUpdateUser } from "./hooks";
import ProfilePicture from "./ProfilePicture";

type Props = {
  user: User;
};

const MemberMenu: FC<Props & { onEdit: () => void }> = ({ user, onEdit }) => {
  const loggedIn = useAuth();
  const isOwner = user.id === loggedIn?.user?.id;
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
        {isOwner && (
          <MenuItem icon={<EditIcon />} onClick={onEdit}>
            Edit
          </MenuItem>
        )}
        {admin && (
          <MenuItem icon={<NotAllowedIcon />} onClick={onClickBan}>
            {isBanned ? "Unban" : "Ban"}
          </MenuItem>
        )}
      </MenuList>
    </Menu>
  );
};

const clean = (md: string): string => {
  const cleaned = md.replace(/^\\/gm, "");
  return cleaned.trim();
};

const BioEditor: FC<{ bio?: string; onChange: (s: string) => void }> = ({
  bio,
  onChange,
}) => {
  const _onChange = useCallback(
    (body: () => string) => onChange(clean(body())),
    [onChange]
  );

  return (
    <Editor
      className="mv2"
      defaultValue={bio}
      onChange={_onChange}
      placeholder={"Enter your profile bio here"}
      disableExtensions={[
        "container_notice",
        "table",
        "checkbox_list",
        "placeholder",
      ]}
    />
  );
};

const MemberProfile: FC<Props> = ({ user }) => {
  const [editing, setEditing] = useState(false);
  const onEdit = useCallback(() => setEditing(true), [setEditing]);

  const [editedUser, setEditedUser] = useState(user);
  const onChangeName = useCallback(
    (event: ChangeEvent<HTMLInputElement>) =>
      setEditedUser({ ...user, name: event.target.value }),
    [user, setEditedUser]
  );
  const onChangeBio = useCallback(
    (bio: string) => setEditedUser({ ...user, bio }),
    [user, setEditedUser]
  );

  const update = useUpdateUser();
  const onSave = useCallback(() => {
    update(editedUser);
    setEditing(false);
  }, [update, editedUser]);

  return (
    <Box as="section" height="100%">
      <Flex gridGap="1em">
        <Box maxW="20%" flexGrow={1}>
          <ProfilePicture id={user.id} size="100%" />
        </Box>

        <Box maxW="80%" flexGrow={2}>
          <Stack>
            <Flex justifyContent="space-between" alignItems="center">
              {editing ? (
                <Input onChange={onChangeName} defaultValue={user.name} />
              ) : (
                <Heading>{user.name}</Heading>
              )}
              <MemberMenu user={user} onEdit={onEdit} />
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

            <Box width="80%">
              hi
              {editing ? (
                <BioEditor bio={user.bio ?? undefined} onChange={onChangeBio} />
              ) : (
                <ReactMarkdown>
                  {user.bio ?? "(This user has no bio)"}
                </ReactMarkdown>
              )}
            </Box>

            {editing && (
              <Box>
                <Button
                  leftIcon={<CheckIcon />}
                  colorScheme="green"
                  variant="solid"
                  onClick={onSave}
                >
                  Save
                </Button>
              </Box>
            )}
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default MemberProfile;
