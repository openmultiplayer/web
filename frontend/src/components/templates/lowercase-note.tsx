import Admonition from "../Admonition";

export default function NoteLowercase({ name = "function" }) {
  return (
    <Admonition type="warning">
      <p>This {name} starts with a lowercase letter.</p>
    </Admonition>
  );
}
