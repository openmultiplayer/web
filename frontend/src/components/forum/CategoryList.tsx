import { Select } from "@chakra-ui/react";
import React, { ChangeEvent, FC } from "react";
import { apiSWR } from "src/fetcher/fetcher";
import { APIError } from "src/types/_generated_Error";
import { Category, CategorySchema } from "src/types/_generated_Forum";
import useSWR from "swr";

const allOption = "All";

type Props = {
  onSelect: (c: string) => void;
};

const CategoryList: FC<Props> = ({ onSelect }) => {
  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    onSelect(value === allOption ? "" : value);
  };
  const { data, error } = useSWR<Category[], APIError>(
    "/forum/categories",
    apiSWR({ schema: CategorySchema.array() })
  );
  if (error) {
    return (
      <Select disabled title={`An error occurred: ${error.message}`}></Select>
    );
  }
  if (!data) {
    return <Select disabled title="Loading..."></Select>;
  }

  return (
    <Select onChange={onChange} title="Category">
      <option>{allOption}</option>
      {data.map((c) => (
        <option key={c.id}>{c.name}</option>
      ))}
    </Select>
  );
};

export default CategoryList;
