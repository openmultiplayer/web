import { FC, useCallback } from "react";
import range from "lodash/range";
import { PaginationMeta, PaginationState } from "react-use-pagination";
import { ListItem, OrderedList, Text } from "@chakra-ui/layout";
import { Button, IconButton } from "@chakra-ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Spinner } from "@chakra-ui/spinner";
import { useErrorHandler } from "src/utils/useErrorHandler";
import { apiSWR } from "src/fetcher/fetcher";
import { Category, CategorySchema } from "src/types/_generated_Forum";
import useSWR from "swr";
import { APIError } from "src/types/_generated_Error";

export const PAGE_SIZE = 20;
export const DEFAULT_PAGE_COUNT = 10;

type OnPageFn = (page: number) => void;

type PageButtonProps = {
  page: number;
  current: number;
  onPage: OnPageFn;
};
const PageButton: FC<PageButtonProps> = ({ page, current, onPage }) => {
  const onClick = useCallback(() => onPage(page), [onPage, page]);

  return (
    <ListItem>
      <Button
        size="sm"
        variant={current === page ? "solid" : "outline"}
        onClick={onClick}
      >
        {page + 1}
      </Button>
    </ListItem>
  );
};

type Props = {
  category: string;
  onPage: OnPageFn;
  state: PaginationState &
    PaginationMeta & {
      // why react-use-pagination doesn't export these? who knows...
      setPage: (page: number) => void;
      setNextPage: () => void;
      setPreviousPage: () => void;
      setPageSize: (pageSize: number, nextPage?: number) => void;
    };
};
const Pagination: FC<Props> = ({ category, onPage, state }) => {
  const handler = useErrorHandler();

  const _onPage = useCallback(
    (page: number) => {
      state.setPage(page);
      onPage(page);
    },
    [onPage, state]
  );

  const { data, error } = useSWR<Category[], APIError>(
    "/forum/categories",
    apiSWR({ schema: CategorySchema.array() })
  );
  if (error) {
    handler(error);
    return null;
  }
  if (!data) {
    return <Spinner />;
  }

  const total = calculateTotalPages(data, category);
  const allPages = range(0, total);
  const end = allPages.length;
  const pages = end <= 10 ? allPages : [0, 1, 2, -1, end - 3, end - 2, end - 1];

  const list = pages.map((page) =>
    page === -1 ? (
      <Text>&hellip;</Text>
    ) : (
      <PageButton
        key={page}
        page={page}
        current={state.currentPage}
        onPage={_onPage}
      />
    )
  );

  return (
    <OrderedList
      display="flex"
      listStyleType="none"
      marginLeft={0}
      gridGap={1}
      justifyContent="space-evenly"
    >
      <ListItem>
        <IconButton
          aria-label="Previous page"
          size="sm"
          variant="outline"
          icon={<ArrowLeftIcon />}
          disabled={!state.previousEnabled}
        />
      </ListItem>

      {list}

      <ListItem>
        <IconButton
          aria-label="Previous page"
          size="sm"
          variant="outline"
          icon={<ArrowRightIcon />}
          disabled={!state.nextEnabled}
        />
      </ListItem>
    </OrderedList>
  );
};

const calculateTotalPages = (categories: Category[], current?: string) =>
  Math.ceil(calculateTotalThreads(categories, current) / PAGE_SIZE);

const calculateTotalThreads = (categories: Category[], current?: string) => {
  if (current === "" || current === undefined) {
    return categories.reduce((acc, cur) => (acc += cur.postCount), 0);
  } else {
    return categories.find((c) => c.name === current)?.postCount ?? 0;
  }
};

export default Pagination;
