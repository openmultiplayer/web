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
        Esta {name} foi implementada no {version} e não funcionará em versões
        anteriores.
      </p>
    </Admonition>
  );
}
