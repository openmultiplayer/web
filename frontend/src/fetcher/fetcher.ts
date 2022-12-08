import { formatDistanceToNow } from "date-fns";
import { GetServerSidePropsContext } from "next";
import { API_ADDRESS } from "src/config";
import { APIError, APIErrorSchema } from "src/types/_generated_Error";
import { niceDate } from "src/utils/dates";
import { z, ZodSchema } from "zod";

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

/**
 * For general use API calls
 *
 * Builds a request and executes it, then processes the result by checking for
 * errors, checking for rate limit violations and parsing the response using a
 * supplied schema in the options.
 *
 * @param path API endpoint
 * @param opts API options for the schema and query parameters. You don't have
 *             to use the query parameters here, it's fine to just stick them in
 *             the path for API calls outside of `useSWR`, though it does make
 *             it a little more ergonomic. See the `apiSWR` documentation for an
 *             explanation of why this option exists. The schema is for just for
 *             the response body JSON. It's optional.
 * @returns The resulting data from the API call. Throws APIError on failure.
 */
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

const isSuccessStatus = (code: number) => code >= 200 && code <= 299;

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
    headers: {
      ...DEFAULT_HEADERS,
    },
    ...opts,
  });
  return req;
};

const getData = async (response: Response): Promise<unknown> => {
  if (isJSON(response)) {
    return response.json();
  } else {
    return undefined;
  }
};

const isJSON = (response: Response): boolean => {
  const contentType = response.headers.get("Content-Type");
  return contentType === "application/json";
};

function handleError(raw: unknown, r: Response, path: string): never {
  if (r.status === 429) {
    throw new RateLimitError(r, path);
  }

  throw deriveError(raw ?? { error: `${r.status}: ${r.statusText}` });
}

/**
 * For use in `useSWR` hooks ONLY.
 *
 * This is curried in order to remove the need to pass the options on every call
 * because this messes with swr's dependency code and results in repeated calls.
 *
 * @param opts Set the query parameter here, not in the useSWR key if you want
 *             mutations to be generic and affect page updates regardless of the
 *             query parameters used for the page.
 * @returns A fetcher function for the second argument of `useSWR`.
 */
export function apiSWR<T>(opts?: APIOptions<T>) {
  return (path: string): Promise<T> => {
    return api<T>(path, opts);
  };
}

/**
 * The server side props discriminated type union. Looks very similar to what
 * `useSWR` calls to keep things consistent. If success is true, data will be
 * guaranteed not undefined. Makes things nice and ergonomic in page components.
 *
 * Usage:
 *
 * ```
 * type Props = SSP<User>
 *
 * const Page: NextPage<Props> = (props) => {
 *   if(!props.success) { return <ErrorBanner {...props.error} /> }
 *
 *   return <UserView fallbackData={props.data} />
 * }
 *
 * export const getServerSideProps: GetServerSideProps<Props> => { ... }
 * ```
 */
export type SSP<T> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      error: APIError;
    };

/**
 * For use in getServerSideProps ONLY!
 *
 * Makes an API call and returns a result type which is either the specified
 * payload type (T) or an APIError type. The result should be returned directly
 * from getServerSideProps to minimise additional code. If the data needs to be
 * pre-processed on the server side before being passed, use `mapSSP` inside a
 * `.then()` chain after the call:
 *
 * ```
 * return {
 *   props: await apiSSP(...).then(mapSSP((data) => preProcess(data)))
 * }
 * ```
 *
 * The page component should always have props that include `data?: T` and
 * `error?: APIError`. Because of the way the `SSP` type works, TypeScript will
 * know that if `error` is undefined, then `data` must be defined. Check `error`
 * early in the component's render and return an `<ErrorBanner {...error} />` if
 * it has a value. Otherwise, `data` is ready to use.
 *
 * Most of the time, you'll want to pass `data` into a "View" component which
 * should make use of `useSWR` - in order to make use of the server side
 * rendered `data` value, pass this in to useSWR's options under `fallbackData`.
 *
 * When being called from getServerSideProps, the request context must be
 * passed in so cookies are added to the request for authentication purposes.
 *
 * @param path API endpoint
 * @param ctx getServerSideProps context argument (for passing cookies)
 * @param opts API call options
 * @returns A discriminated union with data or error (similar to swr) this
 *
 */
export async function apiSSP<T>(
  path: string,
  ctx: GetServerSidePropsContext,
  opts?: RequestInit & APIOptions<T>
): Promise<SSP<T>> {
  const headers = new Headers({
    ...opts?.headers,
    ...headersFromContext(ctx),
  });
  return api(path, { ...opts, headers })
    .then((data) => ({
      success: true as const,
      data,
    }))
    .catch((e) => ({
      success: false as const,
      error: deriveError(e),
    }));
}

/**
 * A helper function for running post-processing operations on successful calls
 * to `apiSSP`. Handles success check boilerplate. For use in apiSSP().then().
 * @param input The immediate return value of `apiSSP`
 */
export function mapSSP<T, U = T>(fn: (input: T) => Promise<U>) {
  return async (input: SSP<T>): Promise<SSP<U>> => {
    if (input.success) {
      // If the API call succeeded, run the function on the data and return a
      // new SSP result with the new data type U.
      return {
        success: true as const,
        data: await fn(input.data),
      };
    } else {
      // If the API call faled, do nothing and pass the input along unchanged.
      return new Promise(() => input);
    }
  };
}

/**
 * Builds a headers object for use in getServerSideProps.
 * @param ctx Next.js server side props context.
 * @returns A headers object with the cookies (if any) set correctly.
 */
const headersFromContext = (ctx: GetServerSidePropsContext): Headers => {
  const headers = new Headers();

  if (ctx.req.headers.cookie) {
    headers.append("cookie", ctx.req.headers.cookie);
  }

  return headers;
};

/**
 * Derives a consistent error object from exception or response input.
 * @param e Exception or error response object
 * @returns An APIError object either parsed from `e` or built from toString
 */
export const deriveError = (e: unknown): APIError => {
  const parsed = APIErrorSchema.safeParse(e);
  if (parsed.success) {
    return parsed.data;
  } else if (e instanceof Error) {
    return { error: e.toString() };
  } else if (e === undefined) {
    return {
      error: "Unknown error",
      message: "deriveError was passed a value of `undefined`.",
    };
  } else {
    return {
      error: String(e),
      message:
        "deriveError was passed a value that was neither Error or APIError.",
    };
  }
};

/**
 * This error is thrown when the API responds with a "429 Too Many Requests". It
 * implements the `APIError` type and fills all the fields with some information
 * about the rate limit so instances of this class can go into `<ErrorBanner />`
 */
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

/**
 * OAuth2 Callback API call for use in getServerSideProps.
 */

export const OAuthCallbackPayloadSchema = z.object({
  code: z.string(),
  state: z.string(),
});
export type OAuthCallbackPayload = z.infer<typeof OAuthCallbackPayloadSchema>;

export const OAuthErrorSchema = z.object({
  error: z.string(),
  error_description: z.string(),
});
export type OAuthError = z.infer<typeof OAuthErrorSchema>;

export async function oauth(
  provider: "discord" | "github",
  ctx: GetServerSidePropsContext
): Promise<string> {
  const error = errorFromOAuthError(ctx.query);
  if (error) {
    throw error;
  }

  const payload = OAuthCallbackPayloadSchema.parse(ctx.query);
  const cookie = ctx?.req?.headers?.cookie;
  const path = `/auth/${provider}/callback`;

  const request = buildRequest(path, {
    method: "post",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
      Cookie: cookie ?? "",
    },
    credentials: "include",
  });

  const response = await fetch(request);
  const data = await getData(response);

  if (!isSuccessStatus(response.status)) {
    throw deriveError(
      data ?? { error: `${response.status}: ${response.statusText}` }
    );
  }

  const setCookie = response.headers.get("set-cookie");
  if (!setCookie) {
    throw deriveError({
      error: "No cookie in authentication response",
      message: `The server did not respond with an authentication cookie after verifying your ${payload} account.`,
    });
  }

  return setCookie;
}

const errorFromOAuthError = (e: unknown): APIError | undefined => {
  const parse = OAuthErrorSchema.safeParse(e);
  if (parse.success) {
    console.error(parse.data);
    return {
      error: parse.data.error,
      message: parse.data.error_description,
    };
  }
};
