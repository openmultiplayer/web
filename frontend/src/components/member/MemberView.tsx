import { useRouter } from "next/router";
import { FC } from "react";
import { apiSWR } from "src/fetcher/fetcher";
import { APIError } from "src/types/_generated_Error";
import { User, UserSchema } from "src/types/_generated_User";
import useSWR from "swr";
import ErrorBanner from "../ErrorBanner";
import Measured from "../generic/Measured";
import LoadingBanner from "../LoadingBanner";
import MemberProfile from "./MemberProfile";

type Props = {
  user?: User;
};

const MemberView: FC<Props> = ({ user }) => {
  const { query } = useRouter();
  const { data, error } = useSWR<User, APIError>(
    `/users/${query["id"]}`,
    apiSWR({ schema: UserSchema }),
    { fallbackData: user }
  );
  if (error) {
    return <ErrorBanner {...error} />;
  }
  if (!data) {
    return <LoadingBanner />;
  }

  return (
    <Measured>
      <MemberProfile user={data} />
    </Measured>
  );
};

export default MemberView;
