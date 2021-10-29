import Link from "next/link";
import React, { FC } from "react";
import { Post } from "src/types/_generated_Forum";
import { AdminTools, CategoryName, PostMetadata } from "./common";

type Props = {
  post: Post;
  showAdminTools: boolean;
};

const ThreadListItem: FC<Props> = ({ post, showAdminTools }) => {
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
          <PostMetadata post={post} />
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
      `}</style>
    </li>
  );
};

export default ThreadListItem;
