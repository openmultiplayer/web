import { formatRelative } from "date-fns";
import map from "lodash/fp/map";
import Link from "next/link";
import nProgress from "nprogress";
import React, { FC, useCallback } from "react";
import { toast } from "react-nextjs-toast";
import { useIsAdmin } from "src/auth/hooks";
import { apiSSP, apiSWR } from "src/fetcher/fetcher";
import { PostModel, TagModel } from "src/types/generated_server";
import useSWR, { mutate } from "swr";

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
    <li key={post.id} className="list pv2">
      <Link href={`/forum/${post.slug}`}>
        <a className="link">
          <article className="bb b--black-10 flex flex-column">
            <header className="flex justify-between">
              <h1 className="ma0">{post.title}</h1>
              {showAdminTools && (
                <div>
                  {post.deletedAt === null ? (
                    <span>
                      <button onClick={onClick}>Delete</button>
                    </span>
                  ) : (
                    <span className="white bg-red br2 lh-copy ph2 pv1 ma0">{`Deleted ${niceDate(
                      post.deletedAt as string
                    )}`}</span>
                  )}
                </div>
              )}
            </header>
            <div className="flex flex-row justify-between">
              <div className="left">
                <p className="ma0 black-80">{post.short}</p>
                <ul>{map(tagToPill)(post.tags)}</ul>
              </div>

              <div className="right flex-grow self-end black-50">
                <span>{`Posted by ${post.author?.name} ${niceDate(
                  post.createdAt as string
                )}`}</span>
              </div>
            </div>
          </article>
        </a>
      </Link>
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
    mutate("/forum");
    nProgress.done();
  }, []);

  const mapping = map((post: PostModel) => (
    <PostItem
      post={post}
      showAdminTools={isAdmin}
      onDelete={onDelete}
      key={post.id}
    />
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
