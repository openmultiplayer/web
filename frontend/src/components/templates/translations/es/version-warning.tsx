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
        Esta {name} fue implementada en {version} y no funcionará en versiones
        anteriores.
      </p>
    </Admonition>
  );
}
