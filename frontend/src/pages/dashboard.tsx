import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { remove } from "js-cookie";
import Link from "next/link";
import Error from "next/error";
import useSWR from "swr";

import { getStaticPropsWithAuth, withAuth } from "src/auth/hoc";
import { COOKIE_NAME } from "src/auth";
import { UserModel } from "src/types/server";
import { apiSWR, apiSSP } from "src/fetcher/fetcher";
import { APIError } from "src/types/error";

type Props = {
  initialData: any;
};

const Placeholder = ({ children }) => (children ? children : <span>...</span>);

const InfoItem = ({ title, value }) => (
  <li className="pv2 mv2">
    <dl className="pa2 flex justify-between">
      <dt>{title}</dt>
      <dd className="">
        <Placeholder>{value}</Placeholder>
      </dd>
    </dl>
  </li>
);

const Page = ({ initialData }: Props) => {
  const { data, error } = useSWR<UserModel, APIError>("/users/self", apiSWR, {
    initialData,
  });

  if (error) {
    return <Error statusCode={500} title={error.message} />;
  }

  return (
    <section className="measure-wide center">
      <h1>Dashboard</h1>
      <ul className="measure center list pa0">
        <InfoItem title="Discord" value={data?.name} />
        <InfoItem title="Email" value={data?.email} />
        <InfoItem title="Authentication Method" value={data?.authMethod} />
      </ul>
      <Link href="/">
        {/* TODO: fix logout with an API endpoint */}
        <a className="link" onClick={() => remove(COOKIE_NAME)}>
          Logout
        </a>
      </Link>
    </section>
  );
};

export const getServerSideProps = getStaticPropsWithAuth(
  async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<Props>> => {
    return {
      props: {
        initialData: (await apiSSP<UserModel>("/users/self", {}, ctx)).unwrap(),
      },
    };
  }
);

export default withAuth(Page);
