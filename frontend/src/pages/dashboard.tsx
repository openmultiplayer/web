import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import Error from "next/error";
import useSWR from "swr";

import { getStaticPropsWithAuth, withAuth } from "src/auth/hoc";
import { UserModel } from "src/types/server";
import { apiSWR, apiSSP } from "src/fetcher/fetcher";
import GitHubIcon from "src/components/icons/GitHub";
import DiscordIcon from "src/components/icons/Discord";
import { APIError } from "src/types/error";
import OAuthButton from "src/components/OAuthButton";

type Props = {
  initialData: any;
};

const Placeholder: React.FC = (props) =>
  props.children ? (
    (props.children as React.ReactElement<any>)
  ) : (
    <span>...</span>
  );

const InfoItem = ({ title, value }: { title: string; value?: string }) => (
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
    <>
      <section className="measure-wide center ph3">
        <h1>Dashboard</h1>
        <ul className="measure center list pa0">
          <InfoItem title="Name" value={data?.name} />
          <InfoItem title="Email" value={data?.email} />
          <InfoItem title="Authentication Method" value={data?.authMethod} />
        </ul>
      </section>
      <section className="measure-wide center ph3">
        <h2>Link Accounts</h2>
        <ul className="measure center list pa0 flex flex-column justify-around">
          <OAuthButton
            bg="black"
            icon={<GitHubIcon width={24} />}
            account={data!.github}
            type="github"
            text="Link With GitHub"
          />
          <OAuthButton
            bg="#2C2F33"
            icon={<DiscordIcon width={24} fill="white" />}
            account={data!.discord}
            type="discord"
            text="Link With Discord"
          />
        </ul>
      </section>
      <section className="measure-wide center pa3 tc">
        <a href="/logout" className="link">
          Logout
        </a>
      </section>
    </>
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
