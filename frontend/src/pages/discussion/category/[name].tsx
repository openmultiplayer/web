import { GetServerSideProps, NextPage } from "next";
import ThreadListView from "src/components/forum/ThreadListView";
import { z } from "zod";

type Props = {
  name: string | null;
  query: Query | null;
};

export const QuerySchema = z.object({
  search: z.string().optional(),
  tags: z
    .string()
    .array()
    .or(z.string().transform((v) => [v]))
    .optional(),
});
export type Query = z.infer<typeof QuerySchema>;

const Page: NextPage<Props> = ({ name, query }) => {
  return (
    <ThreadListView
      initialCategory={name as string}
      initialTags={query?.tags}
      initialText={query?.search}
    />
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const name = (ctx.params?.["name"] as string) ?? null;

  if (!name) {
    return {
      redirect: {
        destination: "/discussion/category",
        permanent: false,
      },
    };
  }

  const result = QuerySchema.safeParse(ctx.query);
  const query = result.success ? result.data : null;

  return { props: { name, query } };
};

export default Page;
