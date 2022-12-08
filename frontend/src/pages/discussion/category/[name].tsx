import { GetServerSideProps, NextPage } from "next";
import ErrorBanner from "src/components/ErrorBanner";
import ThreadListView, { PAGE_SIZE } from "src/components/forum/ThreadListView";
import { apiSSP, mapSSP, SSP } from "src/fetcher/fetcher";
import { Post } from "src/types/_generated_Forum";
import { queryToParams } from "src/utils/query";
import { z } from "zod";

export const QuerySchema = z.object({
  // Page number minimum is 1, and defaults to 1.
  page: z
    .string()
    .default("1")
    .transform((s: string) => parseInt(s))
    .transform((p) => Math.max(1, p))
    .transform((n: number) => (isNaN(n) ? 1 : n)),

  // Search string is only present when searching threads.
  search: z.string().optional(),

  // Browser queries are either strings or arrays of strings. This union
  // transform converts single strings to arrays of one element for consistency.
  tags: z
    .string()
    .array()
    .or(z.string().transform((v) => [v]))
    .optional(),
});
export type Query = z.infer<typeof QuerySchema>;

export const ParamsSchema = z.object({
  name: z.string(),
});
export type Params = z.infer<typeof ParamsSchema>;

type Data = {
  category: string | null;
  tags: string[] | null;
  search: string | null;
  posts: Post[];
};
type Props = SSP<Data>;

const Page: NextPage<Props> = (props) => {
  if (props.success === false) {
    return <ErrorBanner {...props.error} />;
  }

  const { category, tags, search, posts } = props.data;

  return (
    <ThreadListView
      initialCategory={category ?? undefined}
      initialTags={tags ?? undefined}
      initialText={search ?? undefined}
      initialPosts={posts}
    />
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const params = ParamsSchema.parse(ctx.params);
  const query = QuerySchema.parse(ctx.query);

  const { name } = params;
  const { page, search, tags } = query;

  const apiQuery = {
    search: search,
    tags: tags,
    offset: (page - 1) * PAGE_SIZE,
  };

  return {
    props: await apiSSP<Post[]>("/forum/threads", ctx, {
      query: queryToParams(apiQuery),
    }).then(
      mapSSP<Post[], Data>(async (posts) => ({
        category: name,
        tags: tags ?? null,
        search: search ?? null,
        posts,
      }))
    ),
  };
};

export default Page;
