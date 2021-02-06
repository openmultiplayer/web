import { NextPage } from "next";

import withAuthRedirect from "./withAuthRedirect";

/**
 * Ensures a page is only displayed for users who are authenticated.
 *
 * @param WrappedComponent Page component.
 * @param location location to redirect to if not authenticated.
 */
export function withAuth<P>(
  WrappedComponent: NextPage<P>,
  location = "/login"
) {
  return withAuthRedirect(WrappedComponent, true, location);
}

/**
 * Ensures a page is only displayed for users who are NOT authenticated.
 *
 * @param WrappedComponent Page component.
 * @param location location to redirect to if user is actually authenticated.
 */
export function withoutAuth<P>(
  WrappedComponent: React.FunctionComponent<P>,
  location = "/dashboard"
) {
  return withAuthRedirect(WrappedComponent, false, location);
}
