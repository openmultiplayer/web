import Link from "next/link";

const A = (props) => (
  <Link {...props}>
    <a>{props.children}</a>
  </Link>
);

export const MDX_COMPONENTS = {
  a: A,
};
