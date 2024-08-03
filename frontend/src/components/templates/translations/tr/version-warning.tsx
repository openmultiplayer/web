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
        Bu {name} öğesi {version} sürümünde eklendi ve daha önceki sürümlerde çalışmayacaktır!
      </p>
    </Admonition>
  );
}
