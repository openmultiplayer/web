import { useToast } from "@chakra-ui/toast";
import { useRouter } from "next/router";
import nProgress from "nprogress";
import { useCallback } from "react";
import { apiSSP } from "src/fetcher/fetcher";
import { Post, PostSchema } from "src/types/_generated_Forum";
import { useErrorHandler } from "src/utils/useErrorHandler";
import { mutate } from "swr";
import { PostPayload } from "./PostEditor";

type CreateThreadFn = (data: PostPayload) => void;
type CreatePostFn = (data: PostPayload) => void;
type DeleteFn = (id: string) => void;
type EditFn = (data: PostPayload) => void;

const isPostEmpty = (data: PostPayload) => data?.body?.length === 0;

export const useCreateThread = (): CreateThreadFn => {
  const toast = useToast();
  const handler = useErrorHandler();
  const router = useRouter();
  const onSubmit = useCallback(
    async (data: PostPayload) => {
      if (isPostEmpty(data)) {
        return toast({ title: "Post has no content", status: "error" });
      }

      try {
        const post = await apiSSP<Post>("/forum", {
          method: "POST",
          body: JSON.stringify(data),
        });
        router.push(post.slug ?? "");
        toast({
          title: "Thread created!",
          status: "success",
        });
      } catch (e) {
        handler(e);
      }
    },
    [toast, handler, router]
  );

  return onSubmit;
};

export const useCreatePost = (id: string, slug: string): CreatePostFn => {
  const toast = useToast();
  const handler = useErrorHandler();
  const router = useRouter();
  const onSubmit = useCallback(
    async (data: PostPayload) => {
      if (isPostEmpty(data)) {
        return toast({ title: "Post has no content", status: "error" });
      }

      try {
        await apiSSP<Post>(`/forum/${id}`, {
          method: "POST",
          body: JSON.stringify(data),
          schema: PostSchema,
        });
        toast({
          title: "Reply sent!",
          status: "success",
        });
        router.push(`/discussion/${slug}`);
      } catch (e) {
        handler(e);
      }
    },
    [toast, handler, router, id, slug]
  );

  return onSubmit;
};

export const useDeletePost = (): DeleteFn => {
  const toast = useToast();
  const handler = useErrorHandler();
  const onDelete = useCallback(
    async (id: string) => {
      nProgress.start();
      try {
        await apiSSP<Post>(`/forum/${id}`, { method: "DELETE" });
        toast({
          title: "Post deleted!",
          status: "success",
        });
      } catch (e) {
        handler(e);
      }
      mutate("/forum");
      nProgress.done();
    },
    [handler, toast]
  );

  return onDelete;
};

export const useEditPost = (): EditFn => {
  const toast = useToast();
  const handler = useErrorHandler();
  const onEdit = useCallback(
    async (data: PostPayload) => {
      nProgress.start();
      try {
        await apiSSP<Post>(`/forum/${data.id}`, {
          method: "PATCH",
          body: JSON.stringify(data),
        });
        toast({
          title: "Post edited!",
          status: "success",
        });
      } catch (e) {
        handler(e);
      }
      mutate("/forum");
      nProgress.done();
    },
    [handler, toast]
  );

  return onEdit;
};
