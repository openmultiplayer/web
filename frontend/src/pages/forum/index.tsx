import { formatRelative } from "date-fns";
import map from "lodash/fp/map";
import Link from "next/link";
import React, { FC } from "react";
import { apiSWR } from "src/fetcher/fetcher";
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

const threadToListItem = (t: PostModel) => (
  <li key={t.id} className="list pv2">
    <a href={`/forum/${t.slug}`} className="link">
      <article className="bb b--black-10 flex flex-column">
        <header>
          <h1 className="ma0">{t.title}</h1>
        </header>
        <div className="flex flex-row justify-between">
          <div className="left">
            <p className="ma0 black-80">{t.short}</p>
            <ul>{map(tagToPill)(t.tags)}</ul>
          </div>

          <div className="right flex-grow self-end black-50">
            <span>{`Posted by ${t.author?.name} ${formatRelative(
              new Date(t.createdAt as string),
              new Date()
            )}`}</span>
          </div>
        </div>
      </article>
    </a>
  </li>
);

type ThreadListProps = {
  data: PostModel[];
};

const ThreadList: FC<ThreadListProps> = ({ data }) => (
  <div>
    <ListHeader />

    <ol className="pa2">{map(threadToListItem)(data)}</ol>
  </div>
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
    <div className="center pv2">
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
