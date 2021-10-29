import Link from "next/link";
import React, { FC } from "react";
import { Post } from "src/types/_generated_Forum";
import { niceDate } from "src/utils/dates";
import { AdminTools, CategoryName } from "./common";
import LinkedTag from "./LinkedTag";

type Props = {
  post: Post;
  showAdminTools: boolean;
};

const ThreadListItem: FC<Props> = ({ post, showAdminTools }) => {
  const createdAt = niceDate(post.createdAt);
  const updatedAt = niceDate(post.updatedAt);
  const isUpdated = createdAt !== updatedAt;

  return (
    <li key={post.id}>
      <article>
        <div className="content">
          <header>
            <div className="category">
              <CategoryName value={post.category.name} />
              <AdminTools show={showAdminTools} post={post} />
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
