import { Button } from "@chakra-ui/button";
import { DeleteIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Flex,
  Stack,
  Heading,
  ListItem,
  OrderedList,
  Text,
} from "@chakra-ui/layout";
import { map } from "lodash/fp";
import { FC, useCallback } from "react";
import { Notification } from "src/types/_generated_Notification";
import { niceDate } from "src/utils/dates";
import { useNotification } from "./hooks";

type Props = {
  notifications: Notification[];
};

const NotificationsList: FC<Props> = ({ notifications }) => {
  const { unsubscribe, setRead } = useNotification();

  const onUnsub = useCallback(
    (id?: string) => id && unsubscribe(id),
    [unsubscribe]
  );

  const onSetRead = useCallback(
    (id: string, read: boolean) => setRead(id, read),
    [setRead]
  );

  const list = map((ntf: Notification) => (
    <ListItem
      key={ntf.id}
      p="0"
      m="0"
      as="article"
      // backgroundColor={backgroundColor}
      // boxShadow={boxShadow}
      padding="0.5em"
      border="1px solid hsla(0, 100%, 0%, 10%)"
      borderRadius="0.5em"
      display="flex"
      flexDirection="column"
      gridGap="0.5em"
      w="100%"
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
            {ntf.title} really long title xDD wow so long very much text to
            render
          </Heading>
        </Stack>

        <Flex gridGap="0.5em" flexDirection="column" alignItems="end">
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

      <Flex>
        <p>{ntf.description}</p>

        <style jsx>{`
          p {
            margin: 0.1em;
            text-overflow: ellipsis;
            overflow: hidden;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            max-lines: 2;
            line-clamp: 2;
          }
        `}</style>
      </Flex>

      <Flex as="footer" justifyContent="space-between">
        <Text as="time" color="blackAlpha.600" whiteSpace="nowrap">
          {niceDate(ntf.createdAt)}
        </Text>

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
      </Flex>
    </ListItem>
  ));

  return (
    <OrderedList
      listStyleType="none"
      display="flex"
      flexDirection="column"
      gridGap="0.5em"
    >
      {list(notifications)}
    </OrderedList>
  );
};

export default NotificationsList;
