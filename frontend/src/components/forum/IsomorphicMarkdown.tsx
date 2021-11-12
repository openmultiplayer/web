import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import React, { FC } from "react";
import ReactMarkdown from "react-markdown";
import ErrorBanner from "../ErrorBanner";

type Props = {
  ssr?: MDXRemoteSerializeResult<Record<string, unknown>>;
  csr?: string;
};

const Wrapper: FC = ({ children }) => (
  <>
    <div className="isomorphic-markdown-container">{children}</div>

    <style jsx global>{`
      .isomorphic-markdown-container > * {
        padding: revert;
        margin: revert;
      }
    `}</style>
  </>
);

const IsomorphicMarkdown: FC<Props> = ({ ssr, csr }) => {
  if (ssr) {
    return (
      <Wrapper>
        <MDXRemote {...ssr}></MDXRemote>
      </Wrapper>
    );
  }

  if (csr) {
    return (
      <Wrapper>
        <ReactMarkdown>{csr}</ReactMarkdown>
      </Wrapper>
    );
  }

  console.warn(
    "IsomorphicMarkdown received neither csr or ssr props so it's rendering nothing. Ensure the parent is passing both optional server side rendered markdown (which isn't present during a client side page transition) and raw markdown direct from an SWR call (which should ALWAYS be present, regardless of client or server render)"
  );

  return (
    <ErrorBanner
      message="Markdown content was missing at the time of render."
      suggested="Please report this issue to a team member. Make sure to include the page URL and some details about how you encountered this problem."
      error="The IsomorphicMarkdown component was not provided with either server side or client side rendered markdown content."
    />
  );
};

export default IsomorphicMarkdown;
