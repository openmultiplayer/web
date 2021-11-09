import { useToast } from "@chakra-ui/react";
import nProgress from "nprogress";
import { useCallback } from "react";
import { apiSSP } from "src/fetcher/fetcher";
import { User } from "src/types/_generated_User";
import { useErrorHandler } from "src/utils/useErrorHandler";
import { useSWRConfig } from "swr";

type UpdateUserFn = (user: User) => void;
type BanStatusFn = (id: string, banned: boolean) => void;

export const useUpdateUser = (): UpdateUserFn => {
  const toast = useToast();
  const { mutate } = useSWRConfig();
  const handler = useErrorHandler();
  const onBan = useCallback(
    async (user: User) => {
      nProgress.start();
      try {
        await apiSSP<{ count: number }>(`/users/${user.id}`, {
          method: "PATCH",
          body: JSON.stringify(user),
        });
        toast({
          title: `Profile updated!`,
          status: "success",
        });
      } catch (e) {
        handler(e);
      }
      mutate(`/users/${user.id}`);
      mutate(`/users`);
      nProgress.done();
    },
    [handler, toast, mutate]
  );

  return onBan;
};

export const useBanStatus = (): BanStatusFn => {
  const toast = useToast();
  const { mutate } = useSWRConfig();
  const handler = useErrorHandler();
  const onBan = useCallback(
    async (id: string, banned: boolean) => {
      nProgress.start();
      try {
        await apiSSP<{ count: number }>(`/users/banstatus/${id}`, {
          method: "PUT",
          body: JSON.stringify({
            banned,
          }),
        });
        toast({
          title: `User ${banned ? "banned" : "unbanned"}!`,
          status: "success",
        });
      } catch (e) {
        handler(e);
      }
      mutate(`/users/${id}`);
      mutate(`/users`);
      nProgress.done();
    },
    [handler, toast, mutate]
  );

  return onBan;
};
