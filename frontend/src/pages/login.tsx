import Link from "next/link";

import { getStaticPropsWithoutAuth, withoutAuth } from "src/auth/hoc";
import { GitHubLink } from "src/types/githubAuth";
import { apiSSP } from "src/fetcher/fetcher";
import GitHubIcon from "src/components/icons/GitHub";
import DiscordIcon from "src/components/icons/Discord";
import { DiscordLink } from "src/types/discordAuth";
import OAuthButton from "src/components/OAuthButton";

type Props = {
  github: string;
  discord: string;
};

const Page = ({ github, discord }: Props) => (
  <section className="measure center pa3">
    <h1>Login</h1>

    <p>Please log in using one of the providers below.</p>
    <p>Email based login is not currently available.</p>
    <p>
      You can link multiple account types to your open.mp account from your
      dashboard once you've logged in.
    </p>

    <br />

    <ul className="list pa0">
      <OAuthButton
        bg="black"
        icon={<GitHubIcon width={24} />}
        type="github"
        text="Login With GitHub"
        initialData={{ url: github }}
      />
      <OAuthButton
        bg="#2C2F33"
        icon={<DiscordIcon width={24} fill="white" />}
        type="discord"
        text="Login With Discord"
        initialData={{ url: discord }}
      />
    </ul>
  </section>
);

export const getServerSideProps = getStaticPropsWithoutAuth(async () => {
  const github = (await apiSSP<GitHubLink>("/auth/github/link")).unwrap();
  const discord = (await apiSSP<DiscordLink>("/auth/discord/link")).unwrap();

  return {
    props: {
      github: github.url,
      discord: discord.url,
    },
  };
});

export default withoutAuth(Page);
