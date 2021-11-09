import { useToast } from "@chakra-ui/toast";
import { omit } from "lodash/fp";
import { useRouter } from "next/router";
import nProgress from "nprogress";
import { useCallback } from "react";
import { apiSSP } from "src/fetcher/fetcher";
import {
  Category,
  CategorySchema,
  Post,
  PostSchema,
  React,
} from "src/types/_generated_Forum";
import { useErrorHandler } from "src/utils/useErrorHandler";
import { useSWRConfig } from "swr";
import { PostPayload } from "./PostEditor";

type CreateThreadFn = (data: PostPayload) => void;
type UpdateThreadFn = (data: Post) => void;
type CreatePostFn = (data: PostPayload) => void;
type DeleteFn = (id: string) => void;
type EditFn = (data: PostPayload) => void;
type AddReactFn = (id: string, react: string) => void;
type DeleteReactFn = (id: string) => void;
type UpdateCategoriesFn = (categories: Category[]) => void;
type DeleteCategoryFn = (id: string, moveTo: string) => void;
type UpdateCategoryFn = (category: Category) => void;

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
        const post = await apiSSP<Post>("/forum/threads", {
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

export const useUpdateThread = (): UpdateThreadFn => {
  const toast = useToast();
  const { mutate } = useSWRConfig();
  const handler = useErrorHandler();
  const onUpdate = useCallback(
    async (data: Post) => {
      nProgress.start();
      try {
        await apiSSP<Post>(`/forum/threads/${data.id}`, {
          method: "PATCH",
          body: JSON.stringify(data),
        });
        toast({
          title: "Thread updated!",
          status: "success",
        });
      } catch (e) {
        handler(e);
      }
      mutate("/forum/threads");
      nProgress.done();
    },
    [handler, toast, mutate]
  );

  return onUpdate;
};

export const useDeleteThread = (): DeleteFn => {
  const toast = useToast();
  const { mutate } = useSWRConfig();
  const handler = useErrorHandler();
  const onDelete = useCallback(
    async (id: string) => {
      nProgress.start();
      try {
        const r = await apiSSP<{ count: number }>(`/forum/threads/${id}`, {
          method: "DELETE",
        });
        toast({
          title: "Thread deleted!",
          description: `${r.count} posts deleted.`,
          status: "success",
        });
      } catch (e) {
        handler(e);
      }
      mutate("/forum/threads");
      nProgress.done();
    },
    [handler, toast, mutate]
  );

  return onDelete;
};

export const useCreatePost = (
  id: string,
  slug: string,
  replyTo?: Post
): CreatePostFn => {
  const toast = useToast();
  const handler = useErrorHandler();
  const router = useRouter();
  const onSubmit = useCallback(
    async (data: PostPayload) => {
      if (isPostEmpty(data)) {
        return toast({ title: "Post has no content", status: "error" });
      }

      try {
        await apiSSP<Post>(`/forum/posts/${id}`, {
          method: "POST",
          body: JSON.stringify({ ...data, replyTo: replyTo?.id ?? null }),
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
    [toast, handler, router, id, slug, replyTo]
  );

  return onSubmit;
};

export const useDeletePost = (): DeleteFn => {
  const toast = useToast();
  const { mutate } = useSWRConfig();
  const handler = useErrorHandler();
  const onDelete = useCallback(
    async (id: string) => {
      nProgress.start();
      try {
        await apiSSP<Post>(`/forum/posts/${id}`, { method: "DELETE" });
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
    [handler, toast, mutate]
  );

  return onDelete;
};

export const useEditPost = (): EditFn => {
  const toast = useToast();
  const { mutate } = useSWRConfig();
  const handler = useErrorHandler();
  const onEdit = useCallback(
    async (data: PostPayload) => {
      nProgress.start();
      try {
        await apiSSP<Post>(`/forum/posts/${data.id}`, {
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
    [handler, toast, mutate]
  );

  return onEdit;
};

export const useReaction = (): {
  addReact: AddReactFn;
  deleteReact: DeleteReactFn;
} => {
  const { mutate } = useSWRConfig();
  const handler = useErrorHandler();
  const addReact = useCallback(
    async (id: string, react: string) => {
      try {
        await apiSSP<React>(`/forum/reacts/${id}`, {
          method: "POST",
          body: JSON.stringify({
            emoji: react,
          }),
        });
      } catch (e) {
        handler(e);
      }
      mutate("/forum/posts/${id}");
    },
    [handler, mutate]
  );
  const deleteReact = useCallback(
    async (id: string) => {
      try {
        await apiSSP<React>(`/forum/reacts/${id}`, {
          method: "DELETE",
        });
      } catch (e) {
        handler(e);
      }
      mutate("/forum/posts/${id}");
    },
    [handler, mutate]
  );

  return {
    addReact,
    deleteReact,
  };
};

export const useUpdateCategories = (): UpdateCategoriesFn => {
  const toast = useToast();
  const { mutate } = useSWRConfig();
  const handler = useErrorHandler();
  const onEdit = useCallback(
    async (data: Category[]) => {
      nProgress.start();
      try {
        await apiSSP<Post>(`/forum/categories`, {
          method: "PATCH",
          body: JSON.stringify(data),
        });
        toast({
          title: "Categories updated!",
          status: "success",
        });
      } catch (e) {
        handler(e);
      }
      mutate("/forum/categories");
      nProgress.done();
    },
    [handler, toast, mutate]
  );

  return onEdit;
};

export const useDeleteCategory = (): DeleteCategoryFn => {
  const toast = useToast();
  const { mutate } = useSWRConfig();
  const handler = useErrorHandler();
  const onEdit = useCallback(
    async (id: string, moveTo: string) => {
      nProgress.start();
      try {
        await apiSSP<Post>(`/forum/categories/${id}`, {
          method: "DELETE",
          body: JSON.stringify({ moveTo }),
        });
        toast({
          title: "Category deleted!",
          status: "success",
        });
      } catch (e) {
        handler(e);
      }
      mutate("/forum/categories");
      nProgress.done();
    },
    [handler, toast, mutate]
  );

  return onEdit;
};

const withoutRecent = omit("recent");

export const useUpdateCategory = (): UpdateCategoryFn => {
  const toast = useToast();
  const { mutate } = useSWRConfig();
  const handler = useErrorHandler();
  const onEdit = useCallback(
    async (category: Category) => {
      nProgress.start();
      try {
        await apiSSP<Post>(`/forum/categories/${category.id}`, {
          method: "PATCH",
          body: JSON.stringify(CategorySchema.parse(withoutRecent(category))),
        });
        toast({
          title: "Category updated!",
          status: "success",
        });
      } catch (e) {
        handler(e);
      }
      mutate("/forum/categories");
      nProgress.done();
    },
    [handler, toast, mutate]
  );

  return onEdit;
};
