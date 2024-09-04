import Admonition from "../../../Admonition";

export default function NoteLowercase({ name = "функција" }) {
  return (
    <Admonition type="warning">
      <p>Ова {name} почиње малим словом.</p>
    </Admonition>
  );
}
