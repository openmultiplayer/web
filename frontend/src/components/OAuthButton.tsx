import useSWR from "swr";

import { apiSWR } from "src/fetcher/fetcher";
import { GitHubLink } from "src/types/githubAuth";
import { DiscordModel } from "src/types/user";
import { GitHubModel } from "src/types/server";
import { DiscordLink } from "src/types/discordAuth";

type Props = {
  bg: string;
  icon: JSX.Element;
  type: string;
  text: string;
  initialData?: GitHubLink | DiscordLink;
  account?: GitHubModel | DiscordModel;
};

const OAuthButton = ({
  bg,
  icon,
  type,
  text,
  initialData,
  account = undefined,
}: Props) => {
  const { data: link } = useSWR<GitHubLink>(`/auth/${type}/link`, apiSWR, {
    initialData,
  });

  let href = link?.url;

  // if the user has data for this account type
  if (account) {
    text = account.username; // show the user's linked account name
    href = undefined; // make the button unclickable
  }

  return (
    <li className="pv2">
      <a
        href={href}
        className="link pa2 br3 h3 flex align-center justify-center"
      >
        <span className="pa2">{icon}</span>
        <span className="pa2">
          <h2 className="pa0 ma0">{text}</h2>
        </span>
      </a>

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
};

export default OAuthButton;
