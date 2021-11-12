import { useToast, UseToastOptions } from "@chakra-ui/toast";
import nProgress from "nprogress";
import { useErrorHandler } from "src/utils/useErrorHandler";
import { useSWRConfig } from "swr";
import { api } from "./fetcher";

export type UseMutationOptions = {
  mutate?: string;
  progress?: boolean;
  toast?: UseToastOptions;
};

export type UseMutationAPI<T, R> = (
  method: string,
  path: string,
  opts?: UseMutationOptions
) => (data?: T) => Promise<R | undefined>;

export const useMutationAPI = <T, R = T>(): UseMutationAPI<T, R> => {
  const toast = useToast();
  const handler = useErrorHandler();
  const { mutate } = useSWRConfig();

  const request =
    (method: string, path: string, opts?: UseMutationOptions) =>
    async (data?: T) => {
      const progress = opts?.progress ?? true;
      progress && nProgress.start();

      return api<R>(path, {
        method: method,
        body: data ? JSON.stringify(data) : undefined,
      })
        .then((response: R) => {
          mutate(opts?.mutate ?? path);
          progress && nProgress.done();
          opts?.toast && toast(opts.toast);
          return response;
        })
        .catch((e) => {
          handler(e);
          return undefined;
        });
    };

  return request;
};
