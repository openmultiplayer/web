import { useIsAuthenticated } from "./hooks";
import withConditionalRedirect from "./withConditionalRedirect";

export function withAuth(WrappedComponent: JSX.Element, location = "/signin") {
  return withConditionalRedirect({
    WrappedComponent,
    location,
    clientCondition: function withAuthClientCondition() {
      return !useIsAuthenticated();
    },
    serverCondition: function withAuthServerCondition(ctx) {
      return !ctx.req?.cookies.session;
    },
  });
}

export function withoutAuth(WrappedComponent: JSX.Element, location = "/home") {
  return withConditionalRedirect({
    WrappedComponent,
    location,
    clientCondition: function withoutAuthClientCondition() {
      return useIsAuthenticated();
    },
    serverCondition: function withoutAuthServerCondition(ctx) {
      return !!ctx.req?.cookies.session;
    },
  });
}
