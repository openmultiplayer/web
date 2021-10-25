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
  initialQuery?: string;
  initialTags?: string[];
};

const ThreadView: FC<Props> = ({ initialCategory = "", initialQuery = "" }) => {
  const router = useRouter();
  const [category, _setCategory] = useState(initialCategory);
  const [query, _setQuery] = useState(initialQuery);

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
  const setQuery = useCallback((q) => _setQuery(q), []);

  const isAdmin = useIsAdmin();
  const { data, error } = useSWR<Post[], APIError>(
    "/forum?" + new URLSearchParams({ category, query }).toString(),
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
        onSelectCategory={setCategory}
        onSearch={setQuery}
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
