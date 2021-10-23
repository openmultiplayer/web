import { useRouter } from "next/router";
import { NextPage } from "next";

import { useAuth } from "./hooks";
import LoadingBanner from "src/components/LoadingBanner";

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

export default function withAuthRedirect<CP = unknown, IP = CP>(
  WrappedComponent: NextPage<CP, IP>,
  expectedAuth: boolean,
  location: string,
  LoadingComponent = LoadingBanner
): NextPage<CP, IP> {
  const WithAuthRedirectWrapper: NextPage<CP, IP> = (props) => {
    const router = useRouter();
    const { isLoading, isAuthenticated } = useAuth();

    if (isLoading) {
      return <LoadingComponent />;
    }

    if (isBrowser() && expectedAuth !== isAuthenticated) {
      router.push(location);
      return <></>;
    }

    return <WrappedComponent {...props} />;
  };

  return WithAuthRedirectWrapper;
}
