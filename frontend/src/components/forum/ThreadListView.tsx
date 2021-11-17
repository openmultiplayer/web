import { omit } from "lodash";
import { useRouter } from "next/router";
import { FC, useCallback, useState } from "react";
import ErrorBanner from "src/components/ErrorBanner";
import ThreadList from "src/components/forum/ThreadList";
import LoadingBanner from "src/components/LoadingBanner";
import { apiSWR } from "src/fetcher/fetcher";
import { APIError } from "src/types/_generated_Error";
import { Post } from "src/types/_generated_Forum";
import { queryToParams } from "src/utils/query";
import useSWR from "swr";
import Measured from "../generic/Measured";
import { allOption } from "./CategorySelect";

type Props = {
  initialPosts?: Post[];
  initialCategory?: string;
  initialTags?: string[];
  initialText?: string;
};

type Query = {
  search: string;
  tags: string[];
  category: string;
};

const ThreadListView: FC<Props> = ({
  initialPosts,
  initialCategory = "",
  initialTags = [],
  initialText = "",
}) => {
  const router = useRouter();
  const currentPath = getPath(router.asPath);

  // NOTE: Category and query are two separate concepts. A search query is the
  // combination of a list of tags and/or a text search. A category is a
  // separate collection of threads entirely. So these are handled separately on
  // the actual user interface but internally, they use to the same API call.
  const [query, setQuery] = useState<Query>({
    search: initialText,
    tags: initialTags,
    category: initialCategory,
  });

  // On the browser, when constructing a new route for the address bar, because
  // categories are handled as a special case (part of the path) this function
  // is used to construct the history replacement.
  const queryToParamsBrowser = (o: Query) => queryToParams(omit(o, "category"));

  // This sets the query fields and updates the route in the address bar,
  const updateQueryParameters = useCallback(
    (q: Query) => {
      setQuery(q);
      // use currentPath here because the user may either be on the
      // /discussions page or the /discussions/category/ page.
      router.replace(`${currentPath}?${queryToParamsBrowser(q)}`);
    },
    [setQuery, router, currentPath]
  );

  // As mentioned above, categories are separate from queries so this handles
  // changes to the category select and updates the address bar with.
  const setCategory = useCallback(
    (c) => {
      // NOTE: It's possible to be at /category/x?category=y
      // in this case, x will take precedence over the query param.
      router.replace(
        `/discussion/category/${c}?${queryToParamsBrowser(query)}`
      );
      if (c === allOption) {
        setQuery({ ...query, category: "" });
      } else {
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
  if (error) {
    return <ErrorBanner {...error} />;
  }
  if (!data) {
    return <LoadingBanner />;
  }
  return (
    <Measured>
      <ThreadList
        data={data}
        category={query.category}
        tags={initialTags}
        query={initialText}
        onSelectCategory={setCategory}
        onSearch={onSearch}
      />
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
