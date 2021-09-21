import useSWR from "swr";

import { apiSWR } from "src/fetcher/fetcher";
import { Link } from "src/types/_generated_GitHub";
import { User } from "src/types/_generated_User";
import { APIError } from "src/types/_generated_Error";

type Props = {
  bg: string;
  icon: JSX.Element;
  type: string;
};

const OAuthButton = ({ bg, icon, type }: Props) => {
  const { data: link } = useSWR<Link>(`/auth/${type}/link`, apiSWR);
  const { data, error } = useSWR<User, APIError>("/users/self", apiSWR);

  let text: string;
  let href = link?.url;

  if (type === "github") {
    if (!error && data && data.github) {
      text = data.github;
      href = undefined;
    } else {
      text = "Login with GitHub";
      href = link?.url;
    }
  } else if (type === "discord") {
    if (!error && data && data.discord) {
      text = data.discord;
      href = undefined;
    } else {
      text = "Login with Discord";
      href = link?.url;
    }
  } else {
    throw new Error(`Unknown OAuth type: ${type}`);
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
