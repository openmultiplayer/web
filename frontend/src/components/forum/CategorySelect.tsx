import { Select, useToast } from "@chakra-ui/react";
import React, { useCallback, ChangeEvent, FC } from "react";
import { apiSWR } from "src/fetcher/fetcher";
import { APIError } from "src/types/_generated_Error";
import { Category, CategorySchema } from "src/types/_generated_Forum";
import { useErrorHandler } from "src/utils/useErrorHandler";
import useSWR from "swr";

export const allOption = "All";

type Props = {
  onSelect: (c: string | undefined, cat?: Category) => void;
  category?: string;
  includeAllOption?: boolean;
  exclude?: string;
};

const CategorySelect: FC<Props> = ({
  category,
  onSelect,
  includeAllOption = true,
  exclude,
}) => {
  const handler = useErrorHandler();
  const { data, error } = useSWR<Category[], APIError>(
    "/forum/categories",
    apiSWR({ schema: CategorySchema.array() })
  );
  const onChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const name = event.target.value;
      const cat = data?.find((c: Category) => c.name === name);
      onSelect(name === "None" ? undefined : name, cat);
    },
    [onSelect, data]
  );
  if (error) {
    handler(error);
    return (
      <Select disabled title={`An error occurred: ${error.message}`}>
        <option disabled>None</option>
      </Select>
    );
  }
  if (!data) {
    return <Select disabled title="Loading..."></Select>;
  }

  return (
    <Select onChange={onChange} title="Category" value={category ?? "None"}>
      {includeAllOption ? (
        <option>{allOption}</option>
      ) : (
        <option disabled>None</option>
      )}
      {data.map((c) => (
        <option key={c.id} disabled={c.name === exclude}>
          {c.name}
        </option>
      ))}
    </Select>
  );
};

export default CategorySelect;
