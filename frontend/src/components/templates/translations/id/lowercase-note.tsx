import Admonition from "../../../Admonition";

export default function NoteLowercase({ name = "function" }) {
  return (
    <Admonition type="warning">
      <p>{name} ini diawali dengan huruf kecil.</p>
    </Admonition>
  );
}
