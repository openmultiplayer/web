import { useIsAuthenticated } from "./hooks";
import withConditionalRedirect from "./withConditionalRedirect";

export function withAuth(WrappedComponent, location = "/login") {
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

export function withoutAuth(WrappedComponent, location = "/dashboard") {
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
