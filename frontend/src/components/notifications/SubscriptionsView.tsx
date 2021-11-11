import React, { FC } from "react";
import { apiSWR } from "src/fetcher/fetcher";
import { APIError } from "src/types/_generated_Error";
import {
  Subscription,
  SubscriptionSchema,
} from "src/types/_generated_Notification";
import useSWR from "swr";
import ErrorBanner from "../ErrorBanner";
import LoadingBanner from "../LoadingBanner";
import SubscriptionsList from "./SubscriptionsList";

const SubscriptionsView: FC = () => {
  const { data, error } = useSWR<Subscription[], APIError>(
    "/subscriptions",
    apiSWR({ schema: SubscriptionSchema.array() })
  );
  if (error) {
    return <ErrorBanner {...error} />;
  }
  if (!data) {
    return <LoadingBanner />;
  }

  return <SubscriptionsList subscriptions={data} />;
};

export default SubscriptionsView;
