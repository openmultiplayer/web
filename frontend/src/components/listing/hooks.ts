import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";
import { API_ADDRESS } from "src/config";
import { useMutationAPI } from "src/fetcher/hooks";
import { All } from "src/types/_generated_Server";

// TODO: Remove this when server listing is refactored.
const mutateKey = `${API_ADDRESS}/servers/`;

type DeleteServerPayload = { time: string };
type DeleteServerFn = (ip: string) => void;
export const useDeleteServer = (): DeleteServerFn => {
  const api = useMutationAPI<DeleteServerPayload, All>(true);
  const toast = useToast();

  return useCallback(
    async (id: string) => {
      const r = await api("PATCH", `/servers/${id}/deleted`, {
        mutate: mutateKey,
      })({
        time: new Date().toISOString(),
      });
      if (r) {
        toast({
          title: "Server deleted!",
          description: `${r.ip} deleted.`,
          status: "success",
        });
      }
    },
    [api, toast]
  );
};
