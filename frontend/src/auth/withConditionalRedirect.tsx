import { useRouter } from "next/router";

function isBrowser() {
  return typeof window !== "undefined";
}

export default function withConditionalRedirect({
  WrappedComponent,
  clientCondition,
  serverCondition,
  location,
}) {
  const WithConditionalRedirectWrapper = (props) => {
    const router = useRouter();
    const redirectCondition = clientCondition();
    if (isBrowser() && redirectCondition) {
      router.push(location);
      return <></>;
    }
    return <WrappedComponent {...props} />;
  };

  WithConditionalRedirectWrapper.getInitialProps = async (ctx) => {
    if (!isBrowser() && ctx.res) {
      if (serverCondition(ctx)) {
        ctx.res.writeHead(302, { Location: location });
        ctx.res.end();
      }
    }

    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx));

    return { ...componentProps };
  };

  return WithConditionalRedirectWrapper;
}
