import { Button, IconButton } from "@chakra-ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { ListItem, OrderedList, Text } from "@chakra-ui/layout";
import range from "lodash/range";
import { FC, useCallback } from "react";
import { usePagination } from "react-use-pagination";

type OnPageFn = (page: number) => void;

type Props = {
  totalItems: number;
  initialPage: number;
  initialPageSize: number;
  onPage: OnPageFn;
};
const Pagination: FC<Props> = ({
  totalItems,
  initialPage,
  initialPageSize,
  onPage,
}) => {
  const {
    pageSize,
    setPage,
    currentPage,
    previousEnabled,
    setPreviousPage,
    nextEnabled,
    setNextPage,
  } = usePagination({
    totalItems,
    initialPage,
    initialPageSize,
  });

  const _setPreviousPage = useCallback(() => {
    setPreviousPage();
    onPage(currentPage - 1);
  }, [setPreviousPage, onPage, currentPage]);
  const _setNextPage = useCallback(() => {
    setNextPage();
    onPage(currentPage + 1);
  }, [setNextPage, onPage, currentPage]);
  const _onPage = useCallback(
    (page: number) => {
      setPage(page);
      onPage(page);
    },
    [onPage, setPage]
  );

  // don't render anything if the items will fit on a single page.
  if (totalItems <= pageSize) {
    return null;
  }

  const allPages = range(1, totalItems);
  const end = allPages.length;
  const pages =
    end <= 10
      ? allPages
      : // If there are more than 10 pages, split up the list and only show the
        // first 4 and the last 4 page number in the pagination navigation list.
        [1, 2, 3, 4, -1, end - 3, end - 2, end - 1, end];

  const list = pages.map((page) =>
    page === -1 ? (
      <Text>&hellip;</Text>
    ) : (
      <PageButton
        key={page}
        page={page}
        current={currentPage}
        onPage={_onPage}
      />
    )
  );

  return (
    <OrderedList
      display="flex"
      listStyleType="none"
      marginLeft={0}
      gridGap={4}
      justifyContent="center"
    >
      <ListItem>
        <IconButton
          aria-label="Previous page"
          size="sm"
          variant="outline"
          icon={<ArrowLeftIcon />}
          disabled={!previousEnabled}
          onClick={_setPreviousPage}
        />
      </ListItem>

      {list}

      <ListItem>
        <IconButton
          aria-label="Previous page"
          size="sm"
          variant="outline"
          icon={<ArrowRightIcon />}
          disabled={!nextEnabled}
          onClick={_setNextPage}
        />
      </ListItem>
    </OrderedList>
  );
};

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
        {page}
      </Button>
    </ListItem>
  );
};

export default Pagination;
