import { zodResolver } from "@hookform/resolvers/zod";
import { formatRelative } from "date-fns";
import { map } from "lodash/fp";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import Editor from "rich-markdown-editor";
import { apiSSP } from "src/fetcher/fetcher";
import { PostModel } from "src/types/generated_server";
import { mutate } from "swr";
import * as z from "zod";

type Props = {
  id: string;
  posts?: PostModelWithMarkdown[];
  error?: string;
};

const niceDate = (d: string) => formatRelative(new Date(d), new Date());

const postToListItem = (p: PostModelWithMarkdown) => (
  <li key={p.postModel.id} className="list pv2">
    <article className="">
      <header className="bb b--black-20 pv2">
        <div className="flex justify-between content-center">
          <h1 className="mv2">{p.postModel.title}</h1>
          <div className="flex flex-row">
            {p.postModel.deletedAt !== null && (
              <span className="self-center white bg-red br2 lh-copy ph2 pv1 ma0">
                Deleted {niceDate(p.postModel.deletedAt as string)}
              </span>
            )}
          </div>
        </div>

        <span className="flex justify-between content-center">
          <p className="f5 mv0">
            <em>Posted by {p.postModel.author?.name}</em>
          </p>
          <time className="mv0 black-50">
            posted {formatRelative(new Date(p.postModel.createdAt as string), new Date())}
          </time>
        </span>
      </header>
      <div className="">
        <MDXRemote {...p.markdown}></MDXRemote>
      </div>
    </article>
  </li>
);

type PostListProps = {
  data: PostModelWithMarkdown[];
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

  // TODO Render markdown client side if applicable.

  return (
    <div className="center pv2">
      <Link href="/forum">
        <a>Back</a>
      </Link>

      <PostList data={posts ?? []} />

      <Reply id={id} slug={slug as string} />

      <style jsx>{`
        div {
          max-width: 48em;
        }
      `}</style>
    </div>
  );
};

type PostModelWithMarkdown = {
  postModel: PostModel,
  markdown: MDXRemoteSerializeResult<Record<string, unknown>>
}

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

  let posts = resp.value();

  // TODO This is a temporary hacky solution, for some reason this request is returning an object,
  // even though when you test it manually it returns an array. Possibly an issue with apiSSP.
  posts = [...Object.values(posts)].sort((a, b) => {
    const ac = new Date(a.createdAt as string);
    const bc = new Date(b.createdAt as string);
    return ac.getTime() - bc.getTime();
  });

  const postsWithMarkdown: PostModelWithMarkdown[] = [];

  for (const k in posts) {
    postsWithMarkdown.push({
      postModel: posts[k],
      markdown: await serialize(posts[k].body)
    })
  }

  return {
    props: {
      id: posts[0].id,
      posts: postsWithMarkdown,
    },
  };
}

export default Page;
