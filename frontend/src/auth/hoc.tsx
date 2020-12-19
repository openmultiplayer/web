import { GetServerSideProps } from "next";

import { COOKIE_NAME } from ".";
import { useIsAuthenticated } from "./hooks";
import withConditionalRedirect from "./withConditionalRedirect";

/**
 * Ensures a page is only displayed for users who are authenticated.
 *
 * @param WrappedComponent Page component.
 * @param location location to redirect to if not authenticated.
 */
export function withAuth<P>(
  WrappedComponent: React.FunctionComponent<P>,
  location = "/login"
) {
  return withConditionalRedirect({
    WrappedComponent,
    location,
    clientCondition: function withAuthClientCondition() {
      return !useIsAuthenticated();
    },
  });
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
  return withConditionalRedirect({
    WrappedComponent,
    location,
    clientCondition: function withoutAuthClientCondition() {
      return useIsAuthenticated();
    },
  });
}

/**
 * Use this to wrap getServerSideProps functions for pages. This implements
 * server side redirects for unauthenticated page loads.
 *
 * @param gssp The actual getServerSideProps function.
 */
export function getStaticPropsWithAuth(gssp: GetServerSideProps) {
  return async (ctx) => {
    if (!ctx.req?.cookies[COOKIE_NAME]) {
      ctx.res.writeHead(302, { Location: "/login" });
      ctx.res.end();
      return { props: {} };
    }
    return await gssp(ctx);
  };
}

/**
 * Use this to wrap getServerSideProps functions for pages. This implements
 * server side redirects for authenticated page loads.
 *
 * @param gssp The actual getServerSideProps function.
 */
export function getStaticPropsWithoutAuth(gssp: GetServerSideProps) {
  return async (ctx) => {
    if (!!ctx.req?.cookies[COOKIE_NAME]) {
      ctx.res.writeHead(302, { Location: "/dashboard" });
      ctx.res.end();
      return { props: {} };
    }
    return await gssp(ctx);
  };
}
