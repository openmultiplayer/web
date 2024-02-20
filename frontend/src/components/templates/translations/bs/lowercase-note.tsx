import Admonition from "../../Admonition";

export default function NoteLowercase({ name = "function" }) {
  return (
    <Admonition type="warning">
      <p>Ovo {name} počinje malim slovom.</p>
    </Admonition>
  );
}
