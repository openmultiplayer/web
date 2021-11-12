import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import React, { FC } from "react";
import ReactMarkdown from "react-markdown";

type Props = {
  csr?: string;
  ssr?: MDXRemoteSerializeResult<Record<string, unknown>>;
};

const IsomorphicMarkdown: FC<Props> = ({ csr, ssr }) => {
  if (csr) {
    return <ReactMarkdown>{csr}</ReactMarkdown>;
  }

  if (ssr) {
    return <MDXRemote {...ssr}></MDXRemote>;
  }

  return null;
};

export default IsomorphicMarkdown;
