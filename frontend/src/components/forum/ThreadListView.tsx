import { Stack } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import { FC, useCallback, useState } from "react";
import ErrorBanner from "src/components/ErrorBanner";
import ThreadList from "src/components/forum/ThreadList";
import LoadingBanner from "src/components/LoadingBanner";
import { apiSWR } from "src/fetcher/fetcher";
import { APIError } from "src/types/_generated_Error";
import { Category, CategorySchema, Post } from "src/types/_generated_Forum";
import { queryToParams } from "src/utils/query";
import useSWR from "swr";
import Measured from "../generic/Measured";
import Pagination, {
  offsetToPage,
  offsetToPaginationIndex,
  pageToOffset,
} from "../generic/Pagination";

export const PAGE_SIZE = 20;

type Props = {
  initialPosts?: Post[];
  initialCategory?: string;
  initialTags?: string[];
  initialText?: string;
  initialPage?: number;
};

export type APIQuery = {
  search: string;
  tags: string[];
  category: string | null;
  offset: number | null;
  max: number;
};

type BrowserQuery = {
  search: string;
  tags: string[];

  /**
   * Ranges from 1 to n inclusive, user-facing (browser address bar etc.)
   */
  page: number;
};

// On the browser, when constructing a new route for the address bar, because
// categories and pages are handled as a special case (part of the path) this
// function transforms API query params to browser address bar query params.
const getBrowserQuery = ({ search, tags, offset }: APIQuery) =>
  queryToParams({
    search: search ?? undefined,
    tags: tags ?? undefined,
    page: offset ? offsetToPage(PAGE_SIZE)(offset) : undefined,
  } as BrowserQuery);

const ThreadListView: FC<Props> = ({
  initialPosts,
  initialCategory = "",
  initialTags = [],
  initialText = "",
  initialPage = 1,
}) => {
  const router = useRouter();
  const currentPath = getPath(router.asPath);

  // NOTE: Category and query are two separate concepts. A search query is the
  // combination of a list of tags and/or a text search. A category is a
  // separate collection of threads entirely. So these are handled separately on
  // the actual user interface but internally, they use to the same API call.
  const [query, setQuery] = useState<APIQuery>({
    search: initialText,
    tags: initialTags,
    category: initialCategory,
    offset: pageToOffset(PAGE_SIZE)(initialPage),
    max: PAGE_SIZE,
  });

  // This sets the query fields and updates the route in the address bar,
  const updateQueryParameters = useCallback(
    (q: APIQuery) => {
      setQuery(q);
      // use currentPath here because the user may either be on the
      // /discussions page or the /discussions/category/ page.
      router.push(`${currentPath}?${getBrowserQuery(q)}`);
    },
    [setQuery, router, currentPath]
  );

  const onPage = useCallback(
    (page: number) => {
      updateQueryParameters({
        ...query,
        offset: pageToOffset(PAGE_SIZE)(page),
      });
    },
    [updateQueryParameters, query]
  );

  // As mentioned above, categories are separate from queries so this handles
  // changes to the category select and updates the address bar with.
  const setCategory = useCallback(
    (c) => {
      // NOTE: It's possible to be at /category/x?category=y
      // in this case, x will take precedence over the query param.
      router.push(
        `/discussion/category/${c}?${getBrowserQuery({
          ...query,
          category: "",
        })}`
      );
      setQuery({ ...query, category: c });
    },
    [router, query]
  );

  // Called when the Search button in <ThreadSearch /> is clicked.
  const onSearch = useCallback(
    (tags: string[], text: string) =>
      updateQueryParameters({ ...query, tags, search: text }),
    [updateQueryParameters, query]
  );

  const { data: categories } = useSWR<Category[], APIError>(
    "/forum/categories",
    apiSWR({ schema: CategorySchema.array() })
  );

  // NOTE: This doesn't use the apiSWR query field because we want query changes
  // to trigger useSWR to rerequest the data and we don't need to mutate anyway.
  const { data, error } = useSWR<Post[], APIError>(
    `/forum/threads?${queryToParams(query)}`,
    apiSWR(),
    { fallbackData: initialPosts }
  );
  if (error) {
    return <ErrorBanner {...error} />;
  }
  if (!data) {
    return <LoadingBanner />;
  }

  const totalItems = calculateTotalThreads(
    categories ?? [],
    query.category ?? undefined
  );

  return (
    <Measured>
      <Stack>
        <ThreadList
          data={data}
          category={query.category ?? ""}
          tags={initialTags}
          query={initialText}
          onSelectCategory={setCategory}
          onSearch={onSearch}
        />
        <Pagination
          totalItems={totalItems}
          initialPaginationIndex={offsetToPaginationIndex(PAGE_SIZE)(
            query.offset
          )}
          pageSize={PAGE_SIZE}
          onPage={onPage}
        />
      </Stack>
    </Measured>
  );
};

const getPath = (path: string): string => {
  const q = path.indexOf("?");
  if (q !== -1) {
    return path.slice(0, q);
  }
  return path;
};

const calculateTotalThreads = (categories: Category[], current?: string) => {
  if (current === "" || current === undefined) {
    return categories.reduce((acc, cur) => (acc += cur.postCount), 0);
  } else {
    return categories.find((c) => c.name === current)?.postCount ?? 0;
  }
};

export default ThreadListView;
