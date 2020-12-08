import Link from "next/link";

import { getStaticPropsWithoutAuth, withoutAuth } from "src/auth/hoc";
import { GitHubLink } from "src/types/githubAuth";
import api from "src/fetcher/fetcher";
import GitHubIcon from "src/components/icons/GitHub";
import DiscordIcon from "src/components/icons/Discord";
import { DiscordLink } from "src/types/discordAuth";

type Props = {
  github: string;
  discord: string;
};

const Button = ({ children, bg, icon, link = "/" }) => (
  <li className="pv2">
    <Link href={link}>
      <a className="link pa2 br3 h3 flex align-center justify-center">
        <span className="pa2">{icon}</span>
        <span className="pa2">{children}</span>
      </a>
    </Link>

    <style jsx>{`
      a {
        background-color: ${bg};
        color: white;
      }
      span {
        margin: auto 0 auto 0;
      }
    `}</style>
  </li>
);

const Page = ({ github, discord }: Props) => (
  <section className="measure center ma2">
    <h1>Login</h1>

    <p>Please log in using one of the providers below.</p>
    <p>Email based login is not currently available.</p>

    <br />

    <ul className="list pa0">
      <Button bg="black" icon={<GitHubIcon />} link={github}>
        <h2 className="pa0 ma0">Continue with GitHub</h2>
      </Button>
      <Button bg="#2C2F33" icon={<DiscordIcon fill="white" />} link={discord}>
        <h2 className="pa0 ma0">Continue with Discord</h2>
      </Button>
    </ul>
  </section>
);

export const getServerSideProps = getStaticPropsWithoutAuth(async () => {
  const github = (await api<GitHubLink>("/auth/github/link")).unwrap();
  const discord = (await api<DiscordLink>("/auth/discord/link")).unwrap();

  return {
    props: {
      github: github.url,
      discord: discord.url,
    },
  };
});

export default withoutAuth(Page);
