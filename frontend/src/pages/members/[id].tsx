import { GetServerSideProps } from "next";
import { FC } from "react";
import ErrorBanner from "src/components/ErrorBanner";
import MemberView from "src/components/member/MemberView";
import { apiSSP } from "src/fetcher/fetcher";
import { APIError } from "src/types/_generated_Error";
import { User, UserSchema } from "src/types/_generated_User";

type Props = {
  initialData?: User;
  initialError?: APIError;
};

const Page: FC<Props> = ({ initialData, initialError }) => {
  if (initialError) {
    return <ErrorBanner {...initialError} />;
  }
  return <MemberView user={initialData} />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.params?.["id"];

  try {
    const initialData = await apiSSP(`/users/${id}`, {
      ctx,
      schema: UserSchema,
    });
    return {
      props: {
        initialData,
      },
    };
  } catch (e) {
    const err = e as APIError;
    console.error(err.error);
    return {
      props: {
        initialError: {
          error: err.error ?? "",
          message: err.message ?? "",
          suggested: err.suggested ?? "",
        },
      },
    };
  }
};

export default Page;
