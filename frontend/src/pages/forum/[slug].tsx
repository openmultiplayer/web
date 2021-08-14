import { zodResolver } from "@hookform/resolvers/zod";
import { formatRelative } from "date-fns";
import { map } from "lodash/fp";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import ReactMarkdown from "react-markdown";
import admonitions from "remark-admonitions";
import Editor from "rich-markdown-editor";
import { apiSSP, apiSWR } from "src/fetcher/fetcher";
import { PostModel } from "src/types/generated_server";
import useSWR, { mutate } from "swr";
import * as z from "zod";

type Props = {
  id: string;
  posts?: PostModel[];
  error?: string;
};

const niceDate = (d: string) => formatRelative(new Date(d), new Date());

const postToListItem = (p: PostModel) => (
  <li key={p.id} className="list pv2">
    <article className="">
      <header className="bb b--black-20 pv2">
        <div className="flex justify-between content-center">
          <h1 className="mv2">{p.title}</h1>
          <div className="flex flex-row">
            {p.deletedAt !== null && (
              <span className="self-center white bg-red br2 lh-copy ph2 pv1 ma0">
                Deleted {niceDate(p.deletedAt as string)}
              </span>
            )}
          </div>
        </div>

        <span className="flex justify-between content-center">
          <p className="f5 mv0">
            <em>Posted by {p.author?.name}</em>
          </p>
          <time className="mv0 black-50">
            posted {formatRelative(new Date(p.createdAt as string), new Date())}
          </time>
        </span>
      </header>
      <div className="">
        <ReactMarkdown>{p.body}</ReactMarkdown>
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

export const PostPayloadSchema = z.object({});
export type PostPayload = z.infer<typeof PostPayloadSchema>;

const Reply: FC<{ id: string; slug: string }> = ({ id, slug }) => {
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(PostPayloadSchema),
  });
  const [body, setBody] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (data: PostPayload) => {
    if (body.length === 0 || body === "\\n") {
      setError("Post has no content");
      return;
    }

    setError("");
    const payload = { ...data, body };

    const resp = await apiSSP<PostModel>(`/forum/${id}`, {
      method: "POST",
      body: JSON.stringify(payload),
    });
    if (resp.isError()) {
      const err = resp.error();
      console.error(err);
      setError(err?.message ?? "Unexpected error occurred");
    }
    mutate(`/forum/${slug}`);
  };

  return (
    <div className="measure-wide center pv4">
      <h2>Reply</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-column">
        {isSubmitting ? (
          "Posting..."
        ) : (
          <Editor
            value=""
            onChange={(v) => setBody(v)}
            placeholder="Your post content..."
            className="mv2"
            disableExtensions={[
              "container_notice",
              "table",
              "checkbox_list",
              "placeholder",
            ]}
          />
        )}

        <button type="submit">Post</button>
        {<span>{error}</span>}
      </form>
    </div>
  );
};

const Page: FC<Props> = ({ id, posts }) => {
  const {
    query: { slug },
  } = useRouter();
  const { data, error } = useSWR<PostModel[]>(`/forum/${slug}`, apiSWR, {
    initialData: posts,
  });
  if (error) {
    console.error(error);
    return <p>"Error"</p>;
  }
  if (!data) {
    return <p>"Loading..."</p>;
  }

  return (
    <div className="center pv2">
      <Link href="/forum">
        <a>Back</a>
      </Link>

      <PostList data={data} />

      <Reply id={id} slug={slug as string} />

      <style jsx>{`
        div {
          max-width: 48em;
        }
      `}</style>
    </div>
  );
};

export async function getServerSideProps(
  context: GetServerSidePropsContext<{ slug: string[] }>
): Promise<GetServerSidePropsResult<Props>> {
  const slug = context?.params?.slug;

  const resp = await apiSSP<PostModel[]>(`/forum/${slug}`);
  if (resp.isError()) {
    const err = resp.error();
    console.error(err.error);
    return {
      props: {
        id: "",
        error: err.message,
      },
    };
  }

  const posts = resp.value();

  return {
    props: {
      id: posts[0].id,
      posts: posts,
    },
  };
}

export default Page;
