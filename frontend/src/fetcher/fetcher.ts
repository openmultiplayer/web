import { formatDistanceToNow } from "date-fns";
import { GetServerSidePropsContext } from "next";
import { API_ADDRESS } from "src/config";
import { APIError, APIErrorSchema } from "src/types/_generated_Error";
import { niceDate } from "src/utils/dates";
import { ZodSchema } from "zod";

const success = (code: number) => code >= 200 && code <= 299;

export interface APIOptions<T> {
  // pass ctx from GSSP for server side cookies
  ctx?: GetServerSidePropsContext;

  // encode headers into response object under `headers` key
  responseHeaders?: boolean;

  // the response schema
  schema?: ZodSchema<T>;
}

export type MaybeWithHeaders<T> = T | (T & { headers: Headers });

// For use in `useSWR` hooks.
//
// This is curried in order to remove the need to pass the options on every call
// because this messes with swr's dependency code and results in repeated calls.
export function apiSWR<T>(opts?: APIOptions<T>) {
  return (path: string): Promise<MaybeWithHeaders<T>> => {
    return apiSSP<T>(path, opts);
  };
}

// For use in getServerSideProps.
//
// Makes an API call and returns a Result type which is either the specified
// payload type (T) or an APIError type. The result should be `.unwrap`d in
// order to access the value or throw the error.
//
// When being called from getServerSideProps, the request context may be passed
// in so cookies are passed along for authentication.
export async function apiSSP<T>(
  path: string,
  opts?: RequestInit & APIOptions<T>
): Promise<T | (T & { headers: Headers })> {
  // merge any specified headers with an additional cookie header - if given
  const headers = new Headers({
    ...{ "Content-Type": "application/json" },
    ...opts?.headers,
    ...(opts?.ctx?.req.headers.cookie && {
      cookie: opts?.ctx?.req.headers.cookie,
    }),
  });

  const r = await fetch(`${API_ADDRESS}${path}`, {
    mode: "cors",
    credentials: "include",
    headers,
    ...opts,
  });

  const contentType = r.headers.get("Content-Type");
  const isJson = contentType === "application/json";

  const raw = isJson ? await r.json() : undefined;

  if (!success(r.status)) {
    const parsed = APIErrorSchema.safeParse(raw);
    if (parsed.success) {
      throw parsed.data;
    } else if (r.status === 429) {
      throw new RateLimitError(r, path);
    } else {
      throw new Error(`unknown error: ${r.statusText}: ${r.status}`);
    }
  } else {
    const decoded: T = opts?.schema?.parse(raw) ?? raw;
    if (opts?.responseHeaders) {
      return { ...decoded, headers: r.headers };
    } else {
      return decoded;
    }
  }
}

export class RateLimitError implements APIError {
  public message: string;
  public error: string;
  public suggested: string;

  constructor(r: Response, path: string) {
    const limit = r.headers.get("x-ratelimit-limit");
    const reset = r.headers.get("x-ratelimit-reset");

    this.message = limit
      ? `You have exceeded the request rate limit (${limit} requests per minute) for a particular resource (${path}) required for this page.`
      : `You have exceeded the request rate limit for a particular resource (${path}) required for this page.`;

    this.suggested = reset
      ? `Wait until ${niceDate(reset)} (${formatDistanceToNow(
          new Date(reset)
        )}) for the rate limit to reset`
      : "Wait for a while for the rate limit to reset.";

    this.error = "rate limit exceeded";
  }
}
