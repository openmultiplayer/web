import { Flex } from "@chakra-ui/react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Link from "next/link";
import React, { FC } from "react";
import { Post } from "src/types/_generated_Forum";
import { AdminTools, PostMetadata } from "./common";

type Props = {
  post: Post;
  markdown?: MDXRemoteSerializeResult<Record<string, unknown>>;
  showAdminTools: boolean;
};

const ThreadListItem: FC<Props> = ({ post, markdown, showAdminTools }) => {
  return (
    <li key={post.id}>
      <article>
        <div className="content">
          <header>
            <Flex direction="column" width="100%">
              <h1>
                <Link href={`/discussion/${post.slug}`}>
                  <a>{post.title}</a>
                </Link>
              </h1>

              <PostMetadata post={post} />
            </Flex>
          </header>

          <main>
            {markdown ? (
              <MDXRemote {...markdown}></MDXRemote>
            ) : (
              <p>{post.short}</p>
            )}
          </main>

          <footer>
            <AdminTools show={showAdminTools} post={post} />
          </footer>
        </div>
      </article>

      <style jsx>{`
        article {
          padding: 0.5em 1em;
          border: 1px solid hsla(0, 100%, 0%, 10%);
          border-radius: 0.5em;
          display: flex;
          flex-direction: column;
          gap: 0.5em;
        }
        .category {
          display: flex;
          justify-content: space-between;
          line-height: 1;
          font-size: 0.9em;
        }
        .category span {
          border-left: 0.25em solid lightblue;
          padding-left: 0.25em;
          height: min-content;
        }
        h1 {
          margin: 0;
          font-size: 1.6em;
        }
        header {
          display: flex;
          justify-content: space-between;
          align-items: end;
          font-size: 0.9em;
          color: var(--chakra-colors-gray-400);
        }
      `}</style>
    </li>
  );
};

export default ThreadListItem;
