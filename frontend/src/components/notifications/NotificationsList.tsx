import NextLink from "next/link";
import { DeleteIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  CloseButton,
  Flex,
  Link,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { map } from "lodash/fp";
import { FC, useCallback } from "react";
import { Notification } from "src/types/_generated_Notification";
import { niceDate } from "src/utils/dates";
import { CardList } from "../generic/CardList";
import ClampedParagraph from "../generic/ClampedParagraph";
import { useNotification } from "./hooks";
import { LinkBox, LinkOverlay } from "@chakra-ui/react";

type Props = {
  notifications: Notification[];
};

const NotificationsList: FC<Props> = ({ notifications }) => {
  const { unsubscribe, setRead, deleteNotification } = useNotification();

  const onUnsub = useCallback(
    (id?: string) => id && unsubscribe(id),
    [unsubscribe]
  );
  const onSetRead = useCallback(
    (id: string, read: boolean) => setRead(id, read),
    [setRead]
  );
  const onDelete = useCallback(
    (id: string) => deleteNotification(id),
    [deleteNotification]
  );

  const list = map((ntf: Notification) => (
    <Box
      as="article"
      key={ntf.id}
      display="flex"
      flexDirection="column"
      color={ntf.read ? "blackAlpha.600" : "initial"}
    >
      <Flex justifyContent="space-between" gridGap="0.5em">
        <Stack as="header" overflow="hidden">
          <Heading
            size="sm"
            m="0"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            {ntf.title}
          </Heading>
        </Stack>

        <Flex gridGap="0.5em" flexDirection="column" alignItems="end">
          <CloseButton onClick={() => onDelete(ntf.id)} />
        </Flex>
      </Flex>

      <LinkBox display="flex" gridGap="0.5em" flexDirection="column">
        <Flex>
          <NextLink href={ntf.link} passHref>
            <LinkOverlay textDecor="none">
              <ClampedParagraph lines={2}>{ntf.description}</ClampedParagraph>
            </LinkOverlay>
          </NextLink>
        </Flex>

        <Flex as="footer" justifyContent="space-between">
          <Text as="time" color="blackAlpha.600" whiteSpace="nowrap">
            {niceDate(ntf.createdAt)}
          </Text>

          <Flex gridGap="0.5em">
            <Button
              size="xs"
              justifyContent="end"
              rightIcon={<DeleteIcon />}
              onClick={() => onUnsub(ntf.subscription?.id)}
              variant="ghost"
              title="Unsubscribe from this item and clear all related notifications"
            >
              Unsubscribe
            </Button>
            <Button
              size="xs"
              justifyContent="end"
              w="min-content"
              rightIcon={ntf.read ? <ViewOffIcon /> : <ViewIcon />}
              onClick={() => onSetRead(ntf.id, !ntf.read)}
              title={
                ntf.read
                  ? "Mark notification as unread"
                  : "Mark notification as read"
              }
            >
              {ntf.read ? "Unread" : "Read"}
            </Button>
          </Flex>
        </Flex>
      </LinkBox>
    </Box>
  ));

  return <CardList>{list(notifications)}</CardList>;
};

export default NotificationsList;
