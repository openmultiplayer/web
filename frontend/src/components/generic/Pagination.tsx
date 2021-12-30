import { Button, IconButton } from "@chakra-ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { ListItem, OrderedList, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/react";
import { isNull } from "lodash";
import { clamp, flow, map, reverse } from "lodash/fp";
import range from "lodash/range";
import { FC, useCallback, useState } from "react";

type OnPageFn = (page: number) => void;

/**
 * Page number is user-facing, it starts at 1 and goes to n.
 */
type PageNumber = number;

/**
 * A pagination index is an internal detail, it starts at 0 and goes to n - 1.
 */
type PaginationIndex = number;

type Props = {
  /**
   * How many individual items are in all the pages.
   */
  totalItems: number;

  /**
   * Pagination index ranges from 0 to items * page size non-inclusive. This
   * is not the "page" number that users see. This is because the
   * react-use-pagination library uses zero as an index for some reason.
   */
  initialPaginationIndex: PaginationIndex;

  /**
   * The size of the pages.
   */
  pageSize: number;

  /**
   * Called when the user navigates to another page.
   */
  onPage: OnPageFn;
};
const Pagination: FC<Props> = ({
  totalItems,
  initialPaginationIndex,
  pageSize,
  onPage,
}) => {
  const [paginationIndex, setPaginationIndex] = useState(
    initialPaginationIndex
  );
  const totalPages: PageNumber = Math.ceil(totalItems / pageSize);
  const visiblePages = useBreakpointValue({ base: 5, md: 9 }, "base") ?? 5;

  const clampPage = clamp(0)(totalPages);

  const _onPage = useCallback(
    (paginationIndex: PageNumber) => {
      const page: PageNumber = clampPage(paginationIndex) + 1;
      setPaginationIndex(paginationIndex);
      onPage(page);
    },
    [clampPage, setPaginationIndex, onPage]
  );
  const _setPreviousPage = useCallback(() => {
    _onPage(paginationIndex - 1);
  }, [_onPage, paginationIndex]);
  const _setNextPage = useCallback(() => {
    _onPage(paginationIndex + 1);
  }, [_onPage, paginationIndex]);

  // don't render anything if the items will fit on a single page.
  if (totalItems <= pageSize) {
    return null;
  }

  const allPages = range(0, totalPages);
  const end = allPages.length;
  const pageIndices =
    end <= visiblePages
      ? allPages
      : // If there are more than 10 pages, split up the list and only show the
        // first 4 and the last 4 page number in the pagination navigation list.
        generatePageList(paginationIndex, end, visiblePages);

  const previousEnabled = initialPaginationIndex > 1;
  const nextEnabled = initialPaginationIndex < totalPages - 1;

  const list = pageIndices.map((index) =>
    index === -1 ? (
      <Text>&hellip;</Text>
    ) : (
      <PageButton
        key={index}
        index={index}
        current={paginationIndex}
        onPage={_onPage}
      />
    )
  );

  return (
    <OrderedList
      display="flex"
      listStyleType="none"
      marginLeft={0}
      gridGap="0.5em"
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
  index: number;
  current: number;
  onPage: OnPageFn;
};
const PageButton: FC<PageButtonProps> = ({ index, current, onPage }) => {
  const onClick = useCallback(() => onPage(index), [onPage, index]);

  // A "page" is in the range 1 to n inclusive an index is 0 to n non-inclusive.
  const page = index + 1;

  return (
    <ListItem>
      <Button
        size="sm"
        variant={current === index ? "solid" : "outline"}
        onClick={onClick}
      >
        {page}
      </Button>
    </ListItem>
  );
};

/**
 *
 * @param index The current pagination index
 * @param end The last pagination index
 * @returns
 */
const generatePageList = (
  cur: PaginationIndex,
  end: PaginationIndex,
  max = 9
): PaginationIndex[] => {
  const halfMax = Math.floor(max / 2);
  // First, calculate the left-most index which is bounded by half the width of
  // the pagination strip (9 items, rounded down) this is 4 indices left of the
  // current with a minimum value of zero. This is needed to calculate the right
  const _before = Math.max(0, cur - halfMax);
  // Now calculate the right-most index, which is...
  const after = Math.min(
    end - 1,
    // the current page index
    cur + // plus half the pagination strip item count (9) rounded down
      halfMax +
      // then, with any unused slots on the left, because if the user is at page
      // 2 then there should be 1 item to the left (page 1) and 7 items on the
      // right, because first + 4 then + 3 because cur - _before = 1
      (halfMax -
        // subtract this from half the pagination width (9) rounded down
        (cur - _before))
    // and this gives us the number of items that should be on the right.
  );
  // Finally, do the same again for the left, but this time include the same
  // calculation as above so if the user is on page 17 out of 19, they don't
  // just see 14, 15, 16, 17 on the left, but all 9 page buttons.
  const before = Math.max(0, cur - halfMax - (halfMax + (cur - after)));

  // Now simply turn the page indices into an array and return it. The numbers
  // calculated above are offsets, so the code below just applies those offsets
  // to the current pagination index by constructing an array and iterating it.

  const left = flow(
    map((i: number) => cur - 1 - i),
    reverse // left side needs to be inverted because it goes right-to-left.
  )(range(cur - before));

  const right = map((i: number) => cur + 1 + i)(range(after - cur));

  return [...left, cur, ...right];
};

export const pageToOffset =
  (pageSize: number) =>
  (page: number): number =>
    Math.max(0, page - 1) * pageSize;

export const offsetToPage =
  (pageSize: number) =>
  (offset: number | null): number =>
    isNull(offset) ? 1 : 1 + Math.floor(offset / pageSize);

export const offsetToPaginationIndex =
  (pageSize: number) =>
  (offset: number | null): number =>
    isNull(offset) ? 0 : Math.floor(offset / pageSize);

export default Pagination;
