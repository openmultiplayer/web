import Admonition from "../Admonition";
import Translate, { translate } from "@docusaurus/Translate";

export default function WarningVersion({
  version,
  name = "function",
}: {
  version: string;
  name?: string;
}) {
  const translatedName =
    name === "function"
      ? translate({
          id: "versionWarn.name.function",
          message: "function",
          description: "Default item name in a version warning",
        })
      : name === "callback"
        ? translate({
            id: "versionWarn.name.callback",
            message: "callback",
            description: "Callback item name in a version warning",
          })
        : name;

  return (
    <Admonition type="warning">
      <p>
        <Translate
          id="versionWarn.message"
          description="Warning shown on scripting docs pages for APIs added in a specific server version"
          values={{
            name: translatedName,
            version,
          }}
        >
          {"This {name} was added in {version} and will not work in earlier versions!"}
        </Translate>
      </p>
    </Admonition>
  );
}
