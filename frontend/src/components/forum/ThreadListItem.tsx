import { Button } from "@chakra-ui/react";
import Link from "next/link";
import React, { FC, useCallback } from "react";
import { Post } from "src/types/_generated_Forum";
import { niceDate } from "src/utils/dates";
import LinkedTag from "./LinkedTag";

type Props = {
  post: Post;
  showAdminTools: boolean;
  onDelete: (id: string) => void;
};

const ThreadListItem: FC<Props> = ({ post, showAdminTools, onDelete }) => {
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
            <div className="category">
              <span>{post.category.name}</span>

              {showAdminTools && (
                <div>
                  {post.deletedAt === null ? (
                    <Button colorScheme="red" size="xs" onClick={onClick}>
                      Delete
                    </Button>
                  ) : (
                    <span>{`Deleted ${niceDate(
                      post.deletedAt as string
                    )}`}</span>
                  )}
                </div>
              )}
            </div>

            <h1>
              <Link href={`/discussion/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </h1>
          </header>

          <main>
            <p>{post.short}</p>
          </main>
        </div>

        <footer>
          <div className="byline">
            {/* TODO: Profile pictures: <img
              className="avatar"
              src="https://via.placeholder.com/32"
              width={24}
              height={24}
            /> */}
            <em>{post.author.name}</em> posted <em>{createdAt}</em>
            {isUpdated && (
              <span>
                {" • updated "}
                <em>{updatedAt}</em>
              </span>
            )}
          </div>

          <ul>
            {post.tags.map((t) => (
              <li key={t}>
                <LinkedTag name={t} />
              </li>
            ))}
          </ul>
        </footer>
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
        footer {
          display: flex;
          justify-content: space-between;
          font-size: 0.9em;
          color: var(--chakra-colors-gray-400);
        }
        footer .byline {
          display: flex;
          gap: 0.25em;
          align-content: center;
        }
        footer .avatar {
          display: inline-block;
        }
        footer em {
          font-style: normal;
          color: var(--chakra-colors-gray-500);
        }
        footer ul {
          display: flex;
          gap: 0.5em;
          list-style: none;
        }
      `}</style>
    </li>
  );
};

export default ThreadListItem;
