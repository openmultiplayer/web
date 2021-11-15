import { FC } from "react";
import ErrorBanner from "src/components/ErrorBanner";
import LoadingBanner from "src/components/LoadingBanner";
import { apiSWR } from "src/fetcher/fetcher";
import { APIError } from "src/types/_generated_Error";
import { Category, CategorySchema } from "src/types/_generated_Forum";
import useSWR from "swr";
import Measured from "../generic/Measured";
import CategoryList from "./CategoryList";

type Props = {
  initialCategories?: Category[];
};

const CategoryListView: FC<Props> = ({ initialCategories }) => {
  const { data, error } = useSWR<Category[], APIError>(
    "/forum/categories",
    apiSWR({ schema: CategorySchema.array() }),
    { fallbackData: initialCategories }
  );
  if (error) {
    return <ErrorBanner {...error} />;
  }
  if (!data) {
    return <LoadingBanner />;
  }

  return (
    <Measured>
      <CategoryList categories={data} />
    </Measured>
  );
};

export default CategoryListView;
