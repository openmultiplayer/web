import { DeleteIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Button,
  CloseButton,
  Flex,
  Heading,
  Box,
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

type Props = {
  notifications: Notification[];

  /** @deprecated this is waiting for #462 */
  showRead: boolean;
};

const NotificationsList: FC<Props> = ({ notifications, showRead }) => {
  const { unsubscribe, setRead, deleteNotification } =
    useNotification(showRead);

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
      key={ntf.id}
      display="flex"
      flexDirection="column"
      gridGap="0.5em"
      color={ntf.read ? "blackAlpha.600" : "initial"}
    >
      <Flex justifyContent="space-between" gridGap="0.5em">
        <Stack as="header" flexDirection="column" overflow="hidden">
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

      <Flex>
        <ClampedParagraph lines={2}>{ntf.description}</ClampedParagraph>
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
    </Box>
  ));

  return <CardList>{list(notifications)}</CardList>;
};

export default NotificationsList;
