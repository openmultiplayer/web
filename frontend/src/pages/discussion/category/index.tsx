import { GetServerSideProps, NextPage } from "next";
import CategoryListView from "src/components/forum/CategoryListView";
import { apiSSP } from "src/fetcher/fetcher";
import { Category, CategorySchema } from "src/types/_generated_Forum";

type Props = {
  categories: Category[];
};

const Page: NextPage<Props> = ({ categories }) => {
  return <CategoryListView initialCategories={categories} />;
};

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  try {
    return {
      props: {
        categories: await apiSSP<Category[]>("/forum/categories", ctx, {
          schema: CategorySchema.array(),
        }),
      },
    };
  } catch (e) {
    return {
      props: {
        categories: [],
      },
    };
  }
};

export default Page;
