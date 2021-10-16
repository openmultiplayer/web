import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Tag,
} from "@chakra-ui/react";
import { formatRelative } from "date-fns";
import map from "lodash/fp/map";
import Link from "next/link";
import nProgress from "nprogress";
import React, { FC, useCallback } from "react";
import { toast } from "react-nextjs-toast";
import { useIsAdmin } from "src/auth/hooks";
import { apiSSP, apiSWR } from "src/fetcher/fetcher";
import { Category, CategorySchema, Post } from "src/types/_generated_Forum";
import useSWR, { mutate } from "swr";
import { APIError } from "src/types/_generated_Error";

const CategoryList = ({ onSelect }) => {
  const { data, error } = useSWR<Category[], APIError>(
    "/forum/categories",
    apiSWR({ schema: CategorySchema.array() })
  );
  if (error) {
    return (
      <Select disabled title={`An error occurred: ${error.message}`}></Select>
    );
  }
  if (!data) {
    return <Select disabled title="Loading..."></Select>;
  }

  return (
    <Select onSelect={onSelect}>
      {data.map((c) => (
        <option key={c.id}>{c.name}</option>
      ))}
    </Select>
  );
};

const ListHeader = ({ categories }) => {
  return (
    <div>
      <div>
        <span className="categories">
          <CategoryList />
        </span>

        <span className="search">
          <InputGroup>
            <InputRightElement pointerEvents="none">
              <Button minWidth="min-content">Search</Button>
            </InputRightElement>
            <Input type="tel" placeholder="Search query" />
          </InputGroup>
        </span>
      </div>

      <div>
        <span className="new">
          <Link href="/forum/new" passHref>
            <Button colorScheme="green">New Thread</Button>
          </Link>
        </span>
      </div>

      <style jsx>{`
        div {
          display: flex;
          justify-content: space-between;
          gap: 0.5em;
        }
      `}</style>
    </div>
  );
};

type PostItemProps = {
  post: Post;
  showAdminTools: boolean;
  onDelete: (id: string) => void;
};

const niceDate = (d: string) => formatRelative(new Date(d), new Date());

const PostItem: FC<PostItemProps> = ({ post, showAdminTools, onDelete }) => {
  const onClick = useCallback(
    (e) => {
      // The whole element is wrapped inside an <a> tag so this prevents
      // clicking the button from navigating to the link.
      e.preventDefault();
      onDelete(post.id);
    },
    [post, onDelete]
  );
  return (
    <li key={post.id}>
      <article>
        <div className="content">
          <header>
            <div className="category">
              <span>general</span>

              {!showAdminTools && (
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
              <Link href={`/forum/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </h1>
          </header>

          <main>
            <p>{post.short}</p>
          </main>
        </div>

        <footer>
          <p>
            <em>{post.author.name}</em> posted{" "}
            <em>{niceDate(post.createdAt)}</em> • updated{" "}
            <em>{niceDate(post.updatedAt)}</em>
          </p>

          <ul>
            {["open.mp", "question", "help"].map((t) => (
              <li key={t}>
                <Tag>{t}</Tag>
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
        }
        .category span {
          border-left: 0.25em solid lightblue;
          padding-left: 0.25em;
          height: min-content;
        }
        h1 {
          margin: 0;
        }
        footer {
          display: flex;
          justify-content: space-between;
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

type ThreadListProps = {
  data: Post[];
  isAdmin: boolean;
};

const ThreadList: FC<ThreadListProps> = ({ data, isAdmin }) => {
  const onDelete = useCallback(async (id: string) => {
    nProgress.start();
    try {
      await apiSSP(`/forum/${id}`, { method: "DELETE" });
      toast.notify("Post deleted!", {
        type: "success",
      });
    } catch (e) {
      const err = e as APIError;
      toast.notify(err.message ?? "An unknown error occurred", {
        title: err.error ?? "Error",
        type: "error",
      });
    }
    mutate("/forum");
    nProgress.done();
  }, []);

  const mapping = map((post: Post) => (
    <PostItem
      post={post}
      showAdminTools={isAdmin}
      onDelete={onDelete}
      key={post.id}
    />
  ));

  return (
    <div>
      <ListHeader categories={["general", "games", "music", "random"]} />

      <ol>{mapping(data)}</ol>

      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          gap: 0.5em;
        }
        ol {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5em;
        }
      `}</style>
    </div>
  );
};

const Page = () => {
  const isAdmin = useIsAdmin();
  const { data, error } = useSWR<Post[]>("/forum", apiSWR());
  if (error) {
    console.error(error);
    return "error";
  }
  if (!data) {
    return "loading";
  }
  return (
    <div className="center pv2">
      <ThreadList data={data} isAdmin={isAdmin} />

      <style jsx>{`
        div {
          max-width: 48em;
        }
      `}</style>
    </div>
  );
};

export default Page;
