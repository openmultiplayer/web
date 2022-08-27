import Admonition from "../../Admonition";

export default function WarningVersion({
  version,
  name = "函数",
}: {
  version: string;
  name: string;
}) {
  return (
    <Admonition type="warning">
      <p>
        这个{name}是在{version}中添加的，在以前的版本中不起作用!
      </p>
    </Admonition>
  );
}
