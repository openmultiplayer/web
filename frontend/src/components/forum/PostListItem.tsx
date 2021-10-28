import { Button, Flex } from "@chakra-ui/react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Link from "next/link";
import React, { FC, useCallback } from "react";
import { Post } from "src/types/_generated_Forum";
import { niceDate } from "src/utils/dates";
import LinkedTag from "./LinkedTag";

type Props = {
  post: Post;
  markdown?: MDXRemoteSerializeResult<Record<string, unknown>>;
  showAdminTools: boolean;
  onDelete: (id: string) => void;
};

const ThreadListItem: FC<Props> = ({
  post,
  markdown,
  showAdminTools,
  onDelete,
}) => {
  const onClick = useCallback(
    (e) => {
      // The whole element is wrapped inside an <a> tag so this prevents
      // clicking the button from navigating to the link.
      e.preventDefault();
      onDelete(post.id);
    },
    [post, onDelete]
  );

  const createdAt = niceDate(post.createdAt);
  const updatedAt = niceDate(post.updatedAt);
  const isUpdated = createdAt !== updatedAt;

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

              <Flex alignContent="center" justifyContent="space-between">
                {/* TODO: Profile pictures: <img
                  className="avatar"
                  src="https://via.placeholder.com/32"
                  width={24}
                  height={24}
                /> */}
                <Flex gridGap="0.25em">
                  <em>{post.author.name}</em> posted <em>{createdAt}</em>
                  {isUpdated && (
                    <span>
                      {" • updated "}
                      <em>{updatedAt}</em>
                    </span>
                  )}
                </Flex>
                <ul>
                  {post.tags.map((t) => (
                    <li key={t}>
                      <LinkedTag name={t} />
                    </li>
                  ))}
                </ul>
              </Flex>
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
            {showAdminTools && (
              <Flex justifyContent="end">
                {post.deletedAt === null ? (
                  <Button colorScheme="red" size="xs" onClick={onClick}>
                    Delete
                  </Button>
                ) : (
                  <span>{`Deleted ${niceDate(post.deletedAt as string)}`}</span>
                )}
              </Flex>
            )}
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
        header .avatar {
          display: inline-block;
        }
        header em {
          font-style: normal;
          color: var(--chakra-colors-gray-500);
        }
        header ul {
          display: flex;
          gap: 0.5em;
          list-style: none;
        }
      `}</style>
    </li>
  );
};

export default ThreadListItem;
