import { GetServerSideProps, NextPage } from "next";
import ErrorBanner from "src/components/ErrorBanner";
import CategoryListView from "src/components/forum/CategoryListView";
import { apiSSP, SSP } from "src/fetcher/fetcher";
import { Category, CategorySchema } from "src/types/_generated_Forum";

type Props = SSP<Category[]>;

const Page: NextPage<Props> = (props) => {
  if (props.success === false) {
    return <ErrorBanner {...props.error} />;
  }
  return <CategoryListView initialCategories={props.data} />;
};

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  return {
    props: await apiSSP<Category[]>("/forum/categories", ctx, {
      schema: CategorySchema.array(),
    }),
  };
};

export default Page;
