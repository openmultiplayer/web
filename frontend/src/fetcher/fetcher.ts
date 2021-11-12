import { formatDistanceToNow } from "date-fns";
import { GetServerSidePropsContext } from "next";
import { API_ADDRESS } from "src/config";
import { APIError, APIErrorSchema } from "src/types/_generated_Error";
import { niceDate } from "src/utils/dates";
import { ZodSchema } from "zod";

const isSuccessStatus = (code: number) => code >= 200 && code <= 299;

const DEFAULT_HEADERS = {
  "Content-Type": "application/json",
};

type Opts<T> = {
  // TODO: Make this mandatory for all `api` calls.
  // The response object schema to validate against if there are no errors.
  schema?: ZodSchema<T>;

  // Query parameters, do not add these to the path manually when using swr.
  query?: URLSearchParams;
};

export type APIOptions<T> = Opts<T> & RequestInit;

// For general use API calls
//
// Builds a request and executes it, then processes the result by checking for
// errors, checking for rate limit violations and parsing the response using a
// supplied schema in the options.
//
export async function api<T>(path: string, opts?: APIOptions<T>): Promise<T> {
  const withQuery = `${path}${opts?.query ? "?" + opts.query.toString() : ""}`;
  const request = buildRequest(withQuery, opts);
  const response = await fetch(request);
  const data = await getData(response);

  if (!isSuccessStatus(response.status)) {
    handleError(data, response, path);
  }

  return opts?.schema?.parse(data) ?? (data as T);
}

/**
 * Build a request for the API server for use on either the server or client.
 * @param path The API path endpoint to call
 * @param opts Request options
 * @returns A Request object ready for use with `fetch`
 */
export const buildRequest = (path: string, opts?: RequestInit): Request => {
  const req = new Request(`${API_ADDRESS}${path}`, {
    mode: "cors",
    credentials: "include",
    ...DEFAULT_HEADERS,
    ...opts,
  });
  console.debug("Built request for", path, ":", req);
  return req;
};

const getData = async (response: Response): Promise<unknown> => {
  if (isJSON(response)) {
    return response.json();
  }
  throw new Error("Unexpected non-JSON response");
};

const isJSON = (response: Response): boolean => {
  const contentType = response.headers.get("Content-Type");
  return contentType === "application/json";
};

function handleError(raw: unknown, r: Response, path: string): never {
  if (r.status === 429) {
    throw new RateLimitError(r, path);
  }

  throw deriveError(raw);
}

// For use in `useSWR` hooks.
//
// This is curried in order to remove the need to pass the options on every call
// because this messes with swr's dependency code and results in repeated calls.
//
export function apiSWR<T>(opts?: APIOptions<T>) {
  return (path: string): Promise<T> => {
    return api<T>(path, opts);
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
//
export async function apiSSP<T>(
  path: string,
  ctx: GetServerSidePropsContext,
  opts?: RequestInit & APIOptions<T>
): Promise<T> {
  const headers = new Headers({
    ...opts?.headers,
    ...headersFromContext(ctx),
  });
  console.debug("Building SSP headers", headers);
  return api(path, { ...opts, headers }).catch((e) => {
    // TODO: Change this function to return { data, error } like SWR. This will
    // make getServerSideProps calls much more ergonomic and consistent.
    throw deriveError(e);
  });
}
/**
 * Builds a headers object for use in getServerSideProps.
 * @param ctx Next.js server side props context.
 * @returns A headers object with the cookies (if any) set correctly.
 */
const headersFromContext = (ctx: GetServerSidePropsContext): Headers => {
  const headers = new Headers();

  if (ctx.req.headers.cookie) {
    console.debug("Adding cookie to SSP headers", ctx.req.headers.cookie);
    headers.append("cookie", ctx.req.headers.cookie);
  }

  return headers;
};

/**
 * Derives a consistent error object from exception or response input.
 * @param e Exception or error response object
 * @returns An APIError object either parsed from `e` or built from toString
 */
const deriveError = (e: unknown): APIError => {
  const parsed = APIErrorSchema.safeParse(e);
  if (parsed.success) {
    return parsed.data;
  } else {
    return { message: (e as Error).toString() };
  }
};

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
