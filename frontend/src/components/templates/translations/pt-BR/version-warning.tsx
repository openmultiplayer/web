import Admonition from "../../../Admonition";

export default function WarningVersion({
  version,
  name = "function",
}: {
  version: string;
  name?: string;
}) {
  const item =
    name === "function" ? "função" : name === "callback" ? "callback" : name;
  const startsWithFeminine = item === "função";
  const article = startsWithFeminine ? "Esta" : "Este";
  const added = startsWithFeminine ? "adicionada" : "adicionado";

  return (
    <Admonition type="warning">
      <p>
        {article} {item} foi {added} no {version} e não funcionará em versões
        anteriores!
      </p>
    </Admonition>
  );
}
