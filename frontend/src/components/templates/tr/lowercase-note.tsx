import Admonition from "../../Admonition";

export default function NoteLowercase({ name = "function" }) {
  return (
    <Admonition type="warning">
      <p>Bu {isim} küçük harfle başlar.</p>
    </Admonition>
  );
}
