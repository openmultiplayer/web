import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Editor from "rich-markdown-editor";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { apiSSP } from "src/fetcher/fetcher";
import { Post } from "src/types/_generated_Forum";
import { useRouter } from "next/router";

export const PostPayloadSchema = z.object({
  title: z.string(),
  body: z.string().optional(), // optional because it's not in the form
  tags: z.string().transform((s) => s.split(" ")),
});
export type PostPayload = z.infer<typeof PostPayloadSchema>;

const Page = () => {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(PostPayloadSchema),
  });
  const [body, setBody] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const onSubmit = async (data: PostPayload) => {
    if (body.length === 0 || body === "\\n") {
      setError("Post has no content");
      return;
    }

    setError("");
    const payload = { ...data, body };

    const resp = await apiSSP<Post>("/forum", {
      method: "POST",
      body: JSON.stringify(payload),
    });
    if (resp.isError()) {
      const err = resp.error();
      console.error(err);
      setError(err?.message ?? "Unexpected error occurred");
    } else {
      const post = resp.value();
      router.push(post.slug!);
    }
  };

  return (
    <div className="measure-wide center pv4">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-column">
        <input
          {...register("title", { required: true, maxLength: 64 })}
          placeholder="Title..."
          required
        />

        <Editor
          onChange={(v) => setBody(v)}
          placeholder="Your post content..."
          className="mv2"
        />

        <input
          {...register("tags", { required: true, maxLength: 64 })}
          placeholder="Tags separated by spaces"
          className="mv2"
          required
        />

        <button type="submit">Post</button>
        {<span>{error}</span>}
      </form>
    </div>
  );
};

export default Page;
