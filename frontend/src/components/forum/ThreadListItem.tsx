import Link from "next/link";
import React, { FC } from "react";
import { Post } from "src/types/_generated_Forum";
import { CategoryName, PostMetadata } from "./common";
import ThreadAdminMenu from "./ThreadMenu";

type Props = {
  post: Post;
};

const ThreadListItem: FC<Props> = ({ post }) => {
  return (
    <li>
      <article>
        <div>
          <header>
            <div className="category">
              <CategoryName category={post.category} />
              <ThreadAdminMenu post={post} />
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
          <PostMetadata post={post} showReplies={true} />
        </footer>
      </article>

      <style jsx>{`
        article {
          background-color: var(
            ${post.deletedAt
              ? "--chakra-colors-red-100"
              : "--chakra-colors-white"}
          );

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
      `}</style>
    </li>
  );
};

export default ThreadListItem;
