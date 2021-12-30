import { useToast } from "@chakra-ui/toast";
import { omit, remove } from "lodash/fp";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useMutationAPI } from "src/fetcher/hooks";
import {
  Category,
  CategorySchema,
  Post,
  React,
} from "src/types/_generated_Forum";
import { User } from "src/types/_generated_User";
import { PostPayload } from "./PostEditor";

// NOTE:
// Some of these mutators return a simple boolean to indicate success so callers
// can clean up inputs etc.

const isPostEmpty = (data: PostPayload) => data?.body?.length === 0;

type CreateThreadFn = (data: PostPayload) => Promise<boolean>;
export const useCreateThread = (): CreateThreadFn => {
  const api = useMutationAPI<PostPayload, Post>(true);
  const router = useRouter();

  return useCallback(
    async (post: PostPayload) => {
      const newPost = await api("POST", "/forum/threads", {
        toast: {
          title: "Thread created!",
          status: "success",
        },
      })(post);

      if (newPost) {
        router.push(newPost.slug ?? "");
        return true;
      } else {
        return false;
      }
    },
    [api, router]
  );
};

type UpdateThreadFn = (data: Post) => void;
export const useUpdateThread = (): UpdateThreadFn => {
  const api = useMutationAPI(true);

  return useCallback(
    async (data: Post) =>
      api("PATCH", `/forum/threads/${data.id}`, {
        mutate: "/forum/threads",

        toast: {
          title: "Thread updated!",
          status: "success",
        },
      })(data),
    [api]
  );
};

type DeleteThreadFn = (id: string) => void;
export const useDeleteThread = (): DeleteThreadFn => {
  const api = useMutationAPI<Post, { count: number }>(true);
  const toast = useToast();

  return useCallback(
    async (id: string) => {
      const r = await api("DELETE", `/forum/threads/${id}`, {
        mutate: "/forum/threads",
      })();
      if (r) {
        toast({
          title: "Thread deleted!",
          description: `${r.count} posts deleted.`,
          status: "success",
        });
      }
    },
    [api, toast]
  );
};

type CreatePostFn = (data: PostPayload) => Promise<boolean>;
export const useCreatePost = (
  id: string,
  slug: string,
  replyTo?: Post
): CreatePostFn => {
  const toast = useToast();
  const api = useMutationAPI();

  return useCallback(
    async (data: PostPayload) => {
      if (isPostEmpty(data)) {
        toast({ title: "Post has no content", status: "error" });
        return false;
      }

      return !!api("POST", `/forum/posts/${id}`, {
        mutate: `/forum/posts/${slug}`,
        toast: {
          title: "Reply sent!",
          status: "success",
        },
      })({ ...data, replyTo: replyTo?.id ?? null });
    },
    [toast, api, id, slug, replyTo]
  );
};

type DeletePostFn = (id: string) => void;
export const useDeletePost = (threadSlug: string): DeletePostFn => {
  const api = useMutationAPI<Post>();

  return useCallback(
    async (id: string) =>
      api("DELETE", `/forum/posts/${id}`, {
        mutate: `/forum/posts/${threadSlug}`,
        toast: {
          title: "Post deleted!",
          status: "success",
        },
      })(),
    [api, threadSlug]
  );
};

type EditFn = (data: PostPayload) => Promise<boolean>;
export const useEditPost = (slug?: string): EditFn => {
  const api = useMutationAPI<PostPayload>();

  return useCallback(
    async (data: PostPayload) => {
      return !!api("PATCH", `/forum/posts/${data.id}`, {
        mutate: `/forum/posts/${slug}`,
        toast: {
          title: "Post edited!",
          status: "success",
        },
      })(data);
    },
    [api, slug]
  );
};

type AddReactFn = (id: string, react: string) => void;
type DeleteReactFn = (id: string) => void;
export const useReaction = (
  post: Post,
  user?: User
): {
  reacts: React[];
  addReact: AddReactFn;
  deleteReact: DeleteReactFn;
} => {
  const [reacts, setReacts] = useState(post.reacts);
  const api = useMutationAPI<{ emoji: string }, React>();

  const addReact = useCallback(
    async (id: string, react: string) => {
      // Update the list of reactions immediately before API call - note that
      // this is an incomplete react object, it has no ID.
      setReacts([
        ...reacts,
        { id: "", emoji: react, post: post.id, user: user?.id ?? "" },
      ]);

      const newReact = await api("POST", `/forum/reacts/${id}`, {
        progress: false,
      })({ emoji: react });
      if (newReact) {
        setReacts([...reacts, newReact]);
      } else {
        setReacts([...reacts]);
      }
    },
    [api, post, reacts, user]
  );

  const removeReact = (id: string) => remove((r: React) => r.id === id);

  const deleteReact = useCallback(
    async (id: string) => {
      setReacts([...removeReact(id)(reacts)]);
      const deleted: React | undefined = await api(
        "DELETE",
        `/forum/reacts/${id}`,
        {
          mutate: `/forum/posts/${id}`,
          progress: false,
        }
      )(undefined);
      if (!deleted) {
        setReacts(reacts);
      }
    },
    [api, setReacts, reacts]
  );

  return {
    reacts,
    addReact,
    deleteReact,
  };
};

type UpdateCategoriesFn = (categories: Category[]) => void;
export const useUpdateCategories = (): UpdateCategoriesFn => {
  const api = useMutationAPI();
  return api("PATCH", "/forum/categories", {
    toast: {
      title: "Categories updated!",
      status: "success",
    },
  });
};

type DeleteCategoryFn = (id: string, moveTo: string) => void;
export const useDeleteCategory = (): DeleteCategoryFn => {
  const api = useMutationAPI();

  const cb = useCallback(
    async (id: string, moveTo: string) => {
      return api("DELETE", `/forum/categories/${id}`, {
        mutate: "/forum/categories",
        toast: {
          title: "Category deleted!",
          status: "success",
        },
      })({ moveTo });
    },
    [api]
  );

  return cb;
};

const withoutRecent = omit("recent");

type UpdateCategoryFn = (category: Category) => void;
export const useUpdateCategory = (): UpdateCategoryFn => {
  const api = useMutationAPI();

  const cb = useCallback(
    async (category: Category) => {
      api("PATCH", `/forum/categories/${category.id}`, {
        mutate: "/forum/categories",
        toast: {
          title: "Category updated!",
          status: "success",
        },
      })(CategorySchema.parse(withoutRecent(category)));
    },
    [api]
  );

  return cb;
};
