import { useCallback } from "react";
import { useMutationAPI } from "src/fetcher/hooks";
import { User } from "src/types/_generated_User";

type UpdateUserFn = (user: User) => void;
export const useUpdateUser = (): UpdateUserFn => {
  const api = useMutationAPI<User>();

  return useCallback(
    async (user: User) =>
      api("PATCH", `/users/${user.id}`, {
        mutate: `/users/${user.id}`,
        toast: {
          title: `Profile updated!`,
          status: "success",
        },
      })(user),
    [api]
  );
};

type BanStatusFn = (id: string, banned: boolean) => void;
export const useBanStatus = (): BanStatusFn => {
  const api = useMutationAPI();

  return useCallback(
    async (id: string, banned: boolean) => {
      api("PUT", `/users/banstatus/${id}`, {
        mutate: `/users/${id}`,
        toast: {
          title: `User ${banned ? "banned" : "unbanned"}!`,
          status: "success",
        },
      })({ banned });
    },
    [api]
  );
};
