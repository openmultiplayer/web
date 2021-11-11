import { useToast } from "@chakra-ui/react";
import nProgress from "nprogress";
import { useCallback } from "react";
import { apiSSP } from "src/fetcher/fetcher";
import { useErrorHandler } from "src/utils/useErrorHandler";
import { useSWRConfig } from "swr";

type SubscribeFn = (refersType: string, refersTo: string) => void;
type UnsubscribeFn = (subId: string) => void;
type SetReadFn = (id: string, read: boolean) => void;

export const useNotification = (): {
  subscribe: SubscribeFn;
  unsubscribe: UnsubscribeFn;
  setRead: SetReadFn;
} => {
  const toast = useToast();
  const { mutate } = useSWRConfig();
  const handler = useErrorHandler();
  const subscribe = useCallback(
    async (refersType: string, refersTo: string) => {
      nProgress.start();
      try {
        await apiSSP<{ count: number }>(`/subscriptions`, {
          method: "POST",
          body: JSON.stringify({ refersType, refersTo }),
        });
        toast({
          title: `Subscribed!`,
          status: "success",
        });
      } catch (e) {
        handler(e);
      }
      mutate(`/subscriptions`);
      mutate(`/subscriptions/notifications`);
      nProgress.done();
    },
    [handler, toast, mutate]
  );

  const unsubscribe = useCallback(
    async (subId: string) => {
      nProgress.start();
      try {
        await apiSSP<{ count: number }>(`/subscriptions/${subId}`, {
          method: "DELETE",
        });
        toast({
          title: `Unsubscribed!`,
          status: "success",
        });
      } catch (e) {
        handler(e);
      }
      mutate(`/subscriptions`);
      mutate(`/subscriptions/notifications`);
      nProgress.done();
    },
    [handler, toast, mutate]
  );

  const setRead = useCallback(
    async (id: string, read: boolean) => {
      nProgress.start();
      try {
        await apiSSP<{ count: number }>(`/subscriptions/notifications/${id}`, {
          method: "PATCH",
          body: JSON.stringify({ read }),
        });
        toast({
          title: `Marked ${read ? "read" : "unread"}!`,
          status: "success",
        });
      } catch (e) {
        handler(e);
      }
      mutate(`/subscriptions/notifications`);
      nProgress.done();
    },
    [handler, toast, mutate]
  );

  return { subscribe, unsubscribe, setRead };
};
