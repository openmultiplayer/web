import { IncomingMessage } from "http";
import cookie from "cookie";

export const COOKIE_NAME = "openmultiplayer-session";

export const isAuthenticatedFromRequest = (
  request?: IncomingMessage
): boolean => {
  if (!request) {
    return false;
  }

  const c = cookie.parse(request.headers.cookie || "");

  return !!c[COOKIE_NAME];
};
