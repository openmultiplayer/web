import Admonition from "../../Admonition";

export default function NoteLowercase({ name = "函数" }) {
  return (
    <Admonition type="warning">
      <p>这个${name}以小写字母开头。</p>
    </Admonition>
  );
}
