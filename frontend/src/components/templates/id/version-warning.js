import Admonition from "../../Admonition";

export default function WarningVersion({ version, name = "function" }) {
  return (
    <Admonition type="warning">
      <p>
        ${name} ini telah ditambahkan dalam ${version} dan tidak bekerja pada
        versi dibawahnya!
      </p>
    </Admonition>
  );
}
