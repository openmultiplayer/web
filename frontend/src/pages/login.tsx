import { withoutAuth } from "src/auth/hoc";
import GitHubIcon from "src/components/icons/GitHub";
import DiscordIcon from "src/components/icons/Discord";
import OAuthButton from "src/components/OAuthButton";

const Page = () => (
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
      <OAuthButton bg="black" icon={<GitHubIcon width={24} />} type="github" />
      <OAuthButton
        bg="#2C2F33"
        icon={<DiscordIcon width={24} fill="white" />}
        type="discord"
      />
    </ul>
  </section>
);

export default withoutAuth(Page);
