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

export const useMutationAPI = <T, R = T>(
  mutatePrefix?: boolean
): UseMutationAPI<T, R> => {
  const toast = useToast();
  const handler = useErrorHandler();
  const { mutate: mutateExact } = useSWRConfig();
  const mutateWithPrefix = useMutateWithPrefix();

  const mutate = mutatePrefix ? mutateWithPrefix : mutateExact;

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
          progress && nProgress.done();
          return undefined;
        });
    };

  return request;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MutateWithPrefixFn = (prefix: string, ...args: any) => Promise<unknown>;
export const useMutateWithPrefix = (): MutateWithPrefixFn => {
  const { cache, mutate } = useSWRConfig();
  return (prefix, ...args) => {
    if (!(cache instanceof Map)) {
      throw new Error(
        "matchMutate requires the cache provider to be a Map instance"
      );
    }

    const keys = [];
    for (const key of cache.keys()) {
      if (key.startsWith(prefix)) {
        keys.push(key);
      }
    }

    return Promise.all(keys.map((key) => mutate(key, ...args)));
  };
};
