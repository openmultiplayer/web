import { GetServerSidePropsContext } from "next";

import { APIError } from "src/types/error";
import { Result } from "./result";

// TODO: Switch based on dev/prod or load from env vars
const API_ADDRESS = "https://api.open.mp";

const success = (code: number) => code >= 200 && code <= 299;

// For use in `useSWR` hooks.
export function apiSWR<T, E>(path: string) {
  return apiSSP<T, E>(path).then((r) => r.unwrap());
}

// For use in getServerSideProps.
export async function apiSSP<T, E extends APIError = APIError>(
  path: string,
  init?: RequestInit,
  ctx?: GetServerSidePropsContext, // pass ctx from GSSP for server side cookies
  responseHeaders?: boolean // encode headers into response object under `headers` key
): Promise<Result<T, E>> {
  // merge any specified headers with an additional cookie header - if given
  const headers = {
    ...{ "Content-Type": "application/json" },
    ...init?.headers,
    ...(ctx?.req ? { cookie: ctx.req.headers.cookie } : undefined),
  };

  const r = await fetch(`${API_ADDRESS}${path}`, {
    mode: "cors",
    credentials: "include",
    headers,
    ...init,
  });

  // TODO: handle empty responses
  const decoded = await r.json();

  if (!success(r.status)) {
    return Result.withError(decoded);
  } else {
    if (responseHeaders) {
      return Result.withValue({ ...decoded, headers: r.headers });
    } else {
      return Result.withValue({ ...decoded });
    }
  }
}
