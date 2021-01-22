import Link from "next/link";

const A = (props: any) => (
  <Link {...props}>
    <a>{props.children}</a>
  </Link>
);

export const MDX_COMPONENTS = {
  a: A,
};
