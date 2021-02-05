import useSWR from "swr";

import { withAuth } from "src/auth/hoc";
import { UserModel } from "src/types/server";
import { apiSWR } from "src/fetcher/fetcher";
import GitHubIcon from "src/components/icons/GitHub";
import DiscordIcon from "src/components/icons/Discord";
import { APIError } from "src/types/error";
import OAuthButton from "src/components/OAuthButton";

const placeholder = (key: string, data: any, error?: APIError): JSX.Element => {
  if (error) return <span>(error)</span>;
  if (!data) return <span>(no data)</span>;
  return <span>{(data as any)[key]}</span>;
};

const InfoItem = ({ title, key }: { title: string; key: string }) => {
  const { data, error } = useSWR<UserModel, APIError>("/users/self", apiSWR);
  return (
    <li className="pv2 mv2">
      <dl className="pa2 flex justify-between">
        <dt>{title}</dt>
        <dd>{placeholder(key, data, error)}</dd>
      </dl>
    </li>
  );
};

const Page = () => (
  <>
    <section className="measure-wide center ph3">
      <h1>Dashboard</h1>
      <ul className="measure center list pa0">
        <InfoItem title="Name" key="name" />
        <InfoItem title="Email" key="email" />
        <InfoItem title="Authentication Method" key="authMethod" />
      </ul>
    </section>
    <section className="measure-wide center ph3">
      <h2>Link Accounts</h2>
      <ul className="measure center list pa0 flex flex-column justify-around">
        <OAuthButton
          bg="black"
          icon={<GitHubIcon width={24} />}
          type="github"
        />
        <OAuthButton
          bg="#2C2F33"
          icon={<DiscordIcon width={24} fill="white" />}
          type="discord"
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

export default withAuth(Page);
