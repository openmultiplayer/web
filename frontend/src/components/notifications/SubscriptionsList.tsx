import { Button } from "@chakra-ui/button";
import { Flex, Heading, ListItem, OrderedList, Text } from "@chakra-ui/layout";
import { map } from "lodash/fp";
import { FC, useCallback } from "react";
import { Subscription } from "src/types/_generated_Notification";
import { useNotification } from "./hooks";

type Props = {
  subscriptions: Subscription[];
};

const SubscriptionsList: FC<Props> = ({ subscriptions }) => {
  const { unsubscribe } = useNotification();

  const onUnsub = useCallback(
    (id: string) => {
      unsubscribe(id);
    },
    [unsubscribe]
  );

  const list = map((sub: Subscription) => (
    <ListItem
      key={sub.id}
      p="0"
      m="0"
      as="article"
      // backgroundColor={backgroundColor}
      // boxShadow={boxShadow}
      padding="0.5em 1em"
      border="1px solid hsla(0, 100%, 0%, 10%)"
      borderRadius="0.5em"
      display="flex"
      flexDirection="column"
      gridGap="0.5em"
    >
      <header>
        <Heading>{sub.refersType}</Heading>
      </header>

      <Flex justifyContent="space-between">
        <Text>ID: {sub.refersTo}</Text>

        <Button onClick={() => onUnsub(sub.id)}>Unsubscribe</Button>
      </Flex>
    </ListItem>
  ));

  return (
    <OrderedList listStyleType="none" display="flex">
      {list(subscriptions)}
    </OrderedList>
  );
};

export default SubscriptionsList;
