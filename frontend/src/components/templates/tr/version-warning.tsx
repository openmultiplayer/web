import Admonition from "../../Admonition";

export default function WarningVersion({
  version,
  name = "function",
}: {
  version: string;
  name: string;
}) {
  return (
    <Admonition type="warning">
      <p>
        This {name} was added in {version} and will not work in earlier
        versions!
      </p>
    </Admonition>
  );
}
