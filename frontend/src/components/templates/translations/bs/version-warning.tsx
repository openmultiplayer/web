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
        Ovo {name} je dodano u {version} i neće raditi u ranijim verzijama!
      </p>
    </Admonition>
  );
}
