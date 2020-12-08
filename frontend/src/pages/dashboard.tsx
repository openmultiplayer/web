import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { remove } from "js-cookie";
import Link from "next/link";
import useSWR from "swr";

import { getStaticPropsWithAuth, withAuth } from "src/auth/hoc";
import { COOKIE_NAME } from "src/auth";
import api from "src/fetcher/fetcher";

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
  const { data } = useSWR("/users/self", api, { initialData });

  return (
    <section className="measure-wide center">
      <h1>Dashboard</h1>
      <ul className="measure center list pa0">
        <InfoItem title="Discord" value={data?.name} />
        <InfoItem title="Email" value={data?.email} />
        <InfoItem title="Authentication Method" value={data?.authMethod} />
      </ul>
      <Link href="/">
        <a
          className="link"
          onClick={() => {
            console.log("removing cookie");
            remove(COOKIE_NAME);
          }}
        >
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
        initialData: await api("/users/self", {}, ctx),
      },
    };
  }
);

export default withAuth(Page);
