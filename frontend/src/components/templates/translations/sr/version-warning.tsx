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
      <p>
        Ово {name} је додано у {version} и неће радити у ранијим
        верзијама!
      </p>
    </Admonition>
  );
}
