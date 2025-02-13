import { GetServerSideProps } from "next";
import { FC } from "react";
import ErrorBanner from "src/components/ErrorBanner";
import MemberView from "src/components/member/MemberView";
import { apiSSP, SSP } from "src/fetcher/fetcher";
import { User, UserSchema } from "src/types/_generated_User";

type Props = SSP<User>;

const Page: FC<Props> = (props) => {
  return null;

  // if (props.success === false) {
  //   return <ErrorBanner {...props.error} />;
  // }
  // return <MemberView user={props.data} />;
};

// export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
//   const id = ctx.params?.["id"];
//   return {
//     props: await apiSSP<User>(`/users/${id}`, ctx, {
//       schema: UserSchema,
//     }),
//   };
// };

export default Page;
