import Admonition from "../Admonition";
import Translate, { translate } from "@docusaurus/Translate";

export default function NoteLowercase({ name = "function" }) {
  const translatedName =
    name === "function"
      ? translate({
          id: "lowercaseNote.name.function",
          message: "function",
          description: "Default item name in a lowercase-name warning",
        })
      : name;

  return (
    <Admonition type="warning">
      <p>
        <Translate
          id="lowercaseNote.message"
          description="Warning shown on scripting docs pages for APIs whose names start with lowercase letters"
          values={{ name: translatedName }}
        >
          {"This {name} starts with a lowercase letter."}
        </Translate>
      </p>
    </Admonition>
  );
}
