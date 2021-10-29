import { useToast } from "@chakra-ui/toast";
import { APIError, APIErrorSchema } from "src/types/_generated_Error";

type HandleErrorFn = (e: unknown) => void;

const generic = "Unexpected error occurred";

export const useErrorHandler = (): HandleErrorFn => {
  const toast = useToast();

  const extractError = (e: unknown): APIError => {
    const apiError = APIErrorSchema.safeParse(e);

    if (apiError.success) {
      return apiError.data;
    }

    if (e instanceof Error) {
      return {
        message: e.message,
        error: e.name,
      };
    }

    return {
      message: generic,
    };
  };

  const formatDescription = (e: APIError) => {
    if (e.error && e.suggested) {
      return `${e.suggested} (Error: ${e.error})`;
    } else if (e.error) {
      return `Error: ${e.error}`;
    } else {
      return generic;
    }
  };

  const handleError = (e: unknown) => {
    const err = extractError(e);
    console.warn(err);
    toast({
      title: err.message,
      description: formatDescription(err),
      status: "error",
    });
  };

  return handleError;
};
