import { Stack } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import { FC, useCallback, useEffect, useState } from "react";
import { usePagination } from "react-use-pagination";
import ErrorBanner from "src/components/ErrorBanner";
import ThreadList from "src/components/forum/ThreadList";
import LoadingBanner from "src/components/LoadingBanner";
import { apiSWR } from "src/fetcher/fetcher";
import { APIError } from "src/types/_generated_Error";
import { Post } from "src/types/_generated_Forum";
import { queryToParams } from "src/utils/query";
import useSWR from "swr";
import Measured from "../generic/Measured";
import Pagination, { PAGE_SIZE } from "../generic/Pagination";
import { allOption } from "./CategorySelect";

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
  category: string;
  offset: number;
  max: number;
};

type BrowserQuery = {
  search: string;
  tags: string[];
  page: number;
};

// On the browser, when constructing a new route for the address bar, because
// categories and pages are handled as a special case (part of the path) this
// function transforms API query params to browser address bar query params.
const getBrowserQuery = ({ search, tags, offset }: APIQuery) =>
  queryToParams({
    search,
    tags,
    page: Math.floor(offset / PAGE_SIZE),
  } as BrowserQuery);

const ThreadListView: FC<Props> = ({
  initialPosts,
  initialCategory = "",
  initialTags = [],
  initialText = "",
  initialPage = 0,
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
    offset: initialPage * PAGE_SIZE,
    max: PAGE_SIZE,
  });

  // Pagination state
  const [length, setLength] = useState(0);
  const pagination = usePagination({
    totalItems: length,
    initialPageSize: PAGE_SIZE,
  });

  // This sets the query fields and updates the route in the address bar,
  const updateQueryParameters = useCallback(
    (q: APIQuery) => {
      setQuery(q);
      // use currentPath here because the user may either be on the
      // /discussions page or the /discussions/category/ page.
      router.replace(`${currentPath}?${getBrowserQuery(q)}`);
    },
    [setQuery, router, currentPath]
  );

  const onPage = useCallback(
    (page: number) => {
      updateQueryParameters({ ...query, offset: page * PAGE_SIZE });
    },
    [updateQueryParameters, query]
  );

  // As mentioned above, categories are separate from queries so this handles
  // changes to the category select and updates the address bar with.
  const setCategory = useCallback(
    (c) => {
      // NOTE: It's possible to be at /category/x?category=y
      // in this case, x will take precedence over the query param.
      if (c === allOption) {
        router.replace(`/discussion?${getBrowserQuery(query)}`);
        setQuery({ ...query, category: "" });
      } else {
        router.replace(`/discussion/category/${c}?${getBrowserQuery(query)}`);
        setQuery({ ...query, category: c });
      }
    },
    [router, query]
  );

  // Called when the Search button in <ThreadSearch /> is clicked.
  const onSearch = useCallback(
    (tags: string[], text: string) =>
      updateQueryParameters({ ...query, tags, search: text }),
    [updateQueryParameters, query]
  );

  // NOTE: This doesn't use the apiSWR query field because we want query changes
  // to trigger useSWR to rerequest the data and we don't need to mutate anyway.
  const { data, error } = useSWR<Post[], APIError>(
    `/forum/threads?${queryToParams(query)}`,
    apiSWR(),
    { fallbackData: initialPosts }
  );
  useEffect(() => setLength(data?.length ?? 0), [data]);
  if (error) {
    return <ErrorBanner {...error} />;
  }
  if (!data) {
    return <LoadingBanner />;
  }
  return (
    <Measured>
      <Stack>
        <ThreadList
          data={data}
          category={query.category}
          tags={initialTags}
          query={initialText}
          onSelectCategory={setCategory}
          onSearch={onSearch}
        />
        <Pagination
          category={query.category}
          onPage={onPage}
          state={pagination}
        />
      </Stack>
    </Measured>
  );
};

const getPath = (path: string): string => {
  const q = path.indexOf("?");
  if (q) {
    return path.slice(0, q);
  }
  return path;
};

export default ThreadListView;
