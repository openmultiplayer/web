import Admonition from "../../../Admonition";

export default function WarningVersion({
  version,
  name = "функција",
}: {
  version: string;
  name: string;
}) {
  return (
    <Admonition type="warning">
      <p>
        Ова {name} је додана у {version} и неће радити у ранијим
        верзијама!
      </p>
    </Admonition>
  );
}
