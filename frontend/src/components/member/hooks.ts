import { useToast } from "@chakra-ui/react";
import nProgress from "nprogress";
import { useCallback } from "react";
import { apiSSP } from "src/fetcher/fetcher";
import { useErrorHandler } from "src/utils/useErrorHandler";
import { useSWRConfig } from "swr";

type BanStatusFn = (id: string, banned: boolean) => void;

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
