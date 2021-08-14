import { formatRelative } from "date-fns";
import map from "lodash/fp/map";
import Link from "next/link";
import nProgress from "nprogress";
import React, { FC } from "react";
import { useCallback } from "react";
import { toast } from "react-nextjs-toast";
import { useAuth, useIsAdmin } from "src/auth/hooks";
import { apiSSP, apiSWR } from "src/fetcher/fetcher";
import { PostModel, TagModel } from "src/types/generated_server";
import useSWR from "swr";

const ListHeader = () => {
  return (
    <div className="flex justify-end">
      <Link href="/forum/new">
        <a>New Thread</a>
      </Link>
    </div>
  );
};

const tagToPill = (t: TagModel) => (
  <>
    <li>{t.name}</li>
  </>
);

type PostItemProps = {
  post: PostModel;
  showAdminTools: boolean;
  onDelete: (id: string) => void;
};

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
    <li key={post.id} className="list pv2">
      <a href={`/forum/${post.slug}`} className="link">
        <article className="bb b--black-10 flex flex-column">
          <header className="flex justify-between">
            <h1 className="ma0">{post.title}</h1>
            {showAdminTools && (
              <span>
                <button onClick={onClick}>Delete</button>
              </span>
            )}
          </header>
          <div className="flex flex-row justify-between">
            <div className="left">
              <p className="ma0 black-80">{post.short}</p>
              <ul>{map(tagToPill)(post.tags)}</ul>
            </div>

            <div className="right flex-grow self-end black-50">
              <span>{`Posted by ${post.author?.name} ${formatRelative(
                new Date(post.createdAt as string),
                new Date()
              )}`}</span>
            </div>
          </div>
        </article>
      </a>
    </li>
  );
};

type ThreadListProps = {
  data: PostModel[];
  isAdmin: boolean;
};

const ThreadList: FC<ThreadListProps> = ({ data, isAdmin }) => {
  const onDelete = useCallback(async (id: string) => {
    nProgress.start();
    const result = await apiSSP(`/forum/${id}`, { method: "DELETE" });
    if (result.isError()) {
      const err = result.error();
      toast.notify(err.message ?? "An unknown error occurred", {
        title: err.error,
        type: "error",
      });
    } else {
      toast.notify("Post deleted!", {
        type: "success",
      });
    }
    nProgress.done();
  }, []);

  const mapping = map((post: PostModel) => (
    <PostItem post={post} showAdminTools={isAdmin} onDelete={onDelete} />
  ));

  return (
    <div>
      <ListHeader />

      <ol className="pa2">{mapping(data)}</ol>
    </div>
  );
};

const Page = () => {
  const isAdmin = useIsAdmin();
  const { data, error } = useSWR<PostModel[]>("/forum", apiSWR);
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
