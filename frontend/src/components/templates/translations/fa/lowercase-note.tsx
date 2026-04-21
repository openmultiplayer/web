import Admonition from "../../../Admonition";

export default function NoteLowercase({ name = "function" }) {
  return (
    <Admonition type="warning">
      <p>این {name} با یک حرف کوچک شروع می شود.</p>
    </Admonition>
  );
}
