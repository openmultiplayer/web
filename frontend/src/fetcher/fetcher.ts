import { GetServerSidePropsContext } from "next";

const API_ADDRESS = "http://localhost";

export default async function api(
  path: string,
  init?: RequestInit,
  ctx?: GetServerSidePropsContext // pass ctx from GSSP for server side cookies
): Promise<Response> {
  // merge any specified headers with an additional cookie header - if given
  const headers = {
    ...init?.headers,
    ...(ctx?.req ? { cookie: ctx.req.headers.cookie } : undefined),
  };

  const r = await fetch(`${API_ADDRESS}${path}`, {
    mode: "cors",
    credentials: "include",
    headers,
    ...init,
  });

  return await r.json();
}
