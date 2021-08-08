import map from "lodash/fp/map";
import React, { FC } from "react";
import { apiSWR } from "src/fetcher/fetcher";
import { PostModel, TagModel } from "src/types/server";
import useSWR from "swr";

const tagToPill = (t: TagModel) => (
  <>
    <li>{t.name}</li>
  </>
);

const threadToListItem = (t: PostModel) => (
  <li key={t.id} className="list pv2">
    <a href={`/forum/${t.slug}`} className="link">
      <article className="bb b--black-10 flex justify-between">
        <div className="left">
          <h1 className="ma0">{t.title}</h1>
          <p className="ma0 black-80">{t.short}</p>
          <ul>{map(tagToPill)(t.tags)}</ul>
        </div>

        <div className="right self-end black-50">
          {t.author?.name}
          {t.createdAt}
        </div>
      </article>
    </a>
  </li>
);

type ThreadListProps = {
  data: PostModel[];
};

const ThreadList: FC<ThreadListProps> = ({ data }) => (
  <ol className="pa2">{map(threadToListItem)(data)}</ol>
);

const Page = () => {
  const { data, error } = useSWR<PostModel[]>("/forum", apiSWR);
  if (error) {
    console.error(error);
    return "error";
  }
  if (!data) {
    return "loading";
  }
  return (
    <div className="center">
      <ThreadList data={data} />

      <style jsx>{`
        div {
          max-width: 48em;
        }
      `}</style>
    </div>
  );
};

export default Page;
