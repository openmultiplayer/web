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
        {name} ini telah ditambahkan dalam {version} dan tidak bekerja pada
        versi dibawahnya!
      </p>
    </Admonition>
  );
}
