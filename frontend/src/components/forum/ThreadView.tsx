import { useRouter } from "next/router";
import { FC, useCallback, useState } from "react";
import { useIsAdmin } from "src/auth/hooks";
import ErrorBanner from "src/components/ErrorBanner";
import ThreadList from "src/components/forum/ThreadList";
import LoadingBanner from "src/components/LoadingBanner";
import { apiSWR } from "src/fetcher/fetcher";
import { APIError } from "src/types/_generated_Error";
import { Post } from "src/types/_generated_Forum";
import useSWR from "swr";
import { allOption } from "./CategoryList";

type Props = {
  initialCategory?: string;
  initialTags?: string[];
  initialText?: string;
};

const ThreadView: FC<Props> = ({
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

  const isAdmin = useIsAdmin();
  const { data, error } = useSWR<Post[], APIError>(
    "/forum?" +
      new URLSearchParams([
        ["category", category],
        ["query", initialText],
        ...initialTags.map((tag) => ["tags", tag]),
      ]).toString(),
    apiSWR()
  );
  if (error) {
    console.error(error);
    return <ErrorBanner {...error} />;
  }
  if (!data) {
    return <LoadingBanner />;
  }
  return (
    <div className="center pv2">
      <ThreadList
        data={data}
        isAdmin={isAdmin}
        category={category}
        tags={initialTags}
        query={initialText}
        onSelectCategory={setCategory}
        onSearch={onSearch}
      />

      <style jsx>{`
        div {
          max-width: 48em;
        }
      `}</style>
    </div>
  );
};

export default ThreadView;
