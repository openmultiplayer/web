import Admonition from "../../../Admonition";

export default function NoteLowercase({ name = "function" }) {
  return (
    <Admonition type="warning">
      <p>Ово {name} почиње малим словом.</p>
    </Admonition>
  );
}
