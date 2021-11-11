import { CheckCircleIcon } from "@chakra-ui/icons";
import { Box, Center, Heading, Text, VStack } from "@chakra-ui/layout";
import React, { FC } from "react";
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
  const { data, error } = useSWR<Notification[], APIError>(
    "/subscriptions/notifications",
    apiSWR({ schema: NotificationSchema.array() })
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

  return <NotificationsList notifications={data} />;
};

export default NotificationsView;
