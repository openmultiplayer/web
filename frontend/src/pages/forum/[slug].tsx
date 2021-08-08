import { map } from "lodash/fp";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { apiSWR } from "src/fetcher/fetcher";
import { PostModel } from "src/types/server";
import useSWR from "swr";

const postToListItem = (p: PostModel) => (
  <li key={p.id} className="list pv2">
    <article className="">
      <header className="bb b--black-20 pv2">
        <h1 className="mv2">{p.title}</h1>
        <span className="flex justify-between content-center">
          <p className="f5 mv0">
            <em>Posted by {p.author?.name}</em>
          </p>
          <time className="mv0 black-50">{p.createdAt}</time>
        </span>
      </header>
      <div className="">
        <p>{p.body}</p>
      </div>
    </article>
  </li>
);

type PostListProps = {
  data: PostModel[];
};

const PostList: FC<PostListProps> = ({ data }) => (
  <ol className="pa2">{map(postToListItem)(data)}</ol>
);

const Page = () => {
  const {
    query: { slug },
  } = useRouter();
  const { data, error } = useSWR<PostModel[]>(`/forum/${slug}`, apiSWR);
  if (error) {
    console.error(error);
    return "Error";
  }
  if (!data) {
    return "Loading...";
  }

  return (
    <div className="center">
      <PostList data={data} />

      <style jsx>{`
        div {
          max-width: 48em;
        }
      `}</style>
    </div>
  );
};

export default Page;
