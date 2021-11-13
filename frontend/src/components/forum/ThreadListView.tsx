import { useRouter } from "next/router";
import { FC, useCallback, useState } from "react";
import ErrorBanner from "src/components/ErrorBanner";
import ThreadList from "src/components/forum/ThreadList";
import LoadingBanner from "src/components/LoadingBanner";
import { apiSWR } from "src/fetcher/fetcher";
import { APIError } from "src/types/_generated_Error";
import { Post } from "src/types/_generated_Forum";
import useSWR from "swr";
import Measured from "../Measured";
import { allOption } from "./CategorySelect";

type Props = {
  initialPosts?: Post[];
  initialCategory?: string;
  initialTags?: string[];
  initialText?: string;
};

const ThreadListView: FC<Props> = ({
  initialPosts,
  initialCategory = "",
  initialTags = [],
  initialText = "",
}) => {
  const router = useRouter();
  const [category, _setCategory] = useState(initialCategory);

  const setCategory = useCallback(
    (c) => {
      router.push(`/discussion/category/${c}`);
      if (c === allOption) {
        _setCategory("");
      } else {
        _setCategory(c);
      }
    },
    [router]
  );
  const onSearch = useCallback(
    (tags: string[], text: string) => {
      router.push(
        `/discussion?${new URLSearchParams({
          tags: tags.join(","),
          query: text,
        })}`
      );
    },
    [router]
  );

  const { data, error } = useSWR<Post[], APIError>(
    "/forum/threads",
    apiSWR({
      query: new URLSearchParams([
        ["category", category],
        ["query", initialText],
        ...initialTags.map((tag) => ["tags", tag]),
      ]),
    }),
    {
      fallbackData: initialPosts,
    }
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
        category={category}
        tags={initialTags}
        query={initialText}
        onSelectCategory={setCategory}
        onSearch={onSearch}
      />
    </Measured>
  );
};

export default ThreadListView;
