import { Checkbox } from "@chakra-ui/checkbox";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Stack, Text, VStack } from "@chakra-ui/layout";
import React, { FC, useCallback, useState } from "react";
import { apiSWR } from "src/fetcher/fetcher";
import { APIError } from "src/types/_generated_Error";
import {
  Notification,
  NotificationSchema,
} from "src/types/_generated_Notification";
import useSWR from "swr";
import ErrorBanner from "../ErrorBanner";
import LoadingBanner from "../LoadingBanner";
import NotificationsList from "./NotificationsList";

const NotificationsView: FC = () => {
  const [showRead, setShowRead] = useState(false);
  const onChangeShowRead = useCallback(
    () => setShowRead(!showRead),
    [showRead, setShowRead]
  );

  const { data, error } = useSWR<Notification[], APIError>(
    `/subscriptions/notifications`,
    apiSWR({
      schema: NotificationSchema.array(),
      query: new URLSearchParams({ read: `${showRead}` }),
    })
  );
  if (error) {
    return <ErrorBanner {...error} />;
  }
  if (!data) {
    return <LoadingBanner />;
  }

  if (data.length === 0) {
    return (
      <Box>
        <VStack>
          <CheckCircleIcon color="blackAlpha.600" boxSize="4em" />
          <Heading as="h1" size="md">
            No notifications
          </Heading>
          <Text size="xs" m="0">
            You're up to date
          </Text>
        </VStack>
      </Box>
    );
  }

  return (
    <Stack spacing="0.5em">
      <Flex
        p="0.5em"
        borderColor="blackAlpha.100"
        borderStyle="solid"
        borderWidth="1px"
        borderRadius="0.5em"
        justifyContent="space-between"
      >
        <Text m="0">
          <strong>Notifications</strong>
        </Text>
        <Checkbox onChange={onChangeShowRead} isChecked={showRead}>
          Show Read Notifications
        </Checkbox>
      </Flex>
      <NotificationsList notifications={data} />;
    </Stack>
  );
};

export default NotificationsView;
