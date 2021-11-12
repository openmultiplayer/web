import { useCallback } from "react";
import { useMutationAPI } from "src/fetcher/hooks";

type SubscribeFn = (refersType: string, refersTo: string) => void;
type UnsubscribeFn = (subId: string) => void;
type SetReadFn = (id: string, read: boolean) => void;
type DeleteFn = (id: string) => void;

export const useNotification = (
  // Temporary, see issue #462.
  showRead: boolean
): {
  subscribe: SubscribeFn;
  unsubscribe: UnsubscribeFn;
  setRead: SetReadFn;
  deleteNotification: DeleteFn;
} => {
  const api = useMutationAPI();

  const subscribe = useCallback(
    async (refersType: string, refersTo: string) =>
      api("POST", "/subscriptions", {
        mutate: `/subscriptions/notifications?read=${showRead}`,
        toast: {
          title: `Subscribed!`,
          status: "success",
        },
      })({ refersType, refersTo }),
    [api, showRead]
  );

  const unsubscribe = useCallback(
    async (subId: string) =>
      api("DELETE", `/subscriptions/${subId}`, {
        mutate: `/subscriptions/notifications?read=${showRead}`,
        toast: {
          title: `Unsubscribed!`,
          status: "success",
        },
      })(),
    [api, showRead]
  );

  const setRead = useCallback(
    async (id: string, read: boolean) =>
      api("PATCH", `/subscriptions/notifications/${id}`, {
        mutate: `/subscriptions/notifications?read=${showRead}`,
        toast: {
          title: `Marked ${read ? "read" : "unread"}!`,
          status: "success",
        },
      })({ read }),
    [api, showRead]
  );

  const deleteNotification = useCallback(
    async (id: string) =>
      api("DELETE", `/subscriptions/notifications/${id}`, {
        mutate: `/subscriptions/notifications?read=${showRead}`,
        toast: {
          title: `Deleted notification!`,
          status: "success",
        },
      })(),
    [api, showRead]
  );

  return { subscribe, unsubscribe, setRead, deleteNotification };
};
