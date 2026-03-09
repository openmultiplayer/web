import Admonition from "../../../Admonition";

export default function WarningVersion({
  version,
  name = "function",
}: {
  version: string;
  name: string;
}) {
  return (
    <Admonition type="warning">
      <p>این {name} در {version} اضافه شده و در نسخه های قبلی کار نخواهد کرد!</p>
    </Admonition>
  );
}
