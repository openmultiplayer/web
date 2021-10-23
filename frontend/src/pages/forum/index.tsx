import { NextPage } from "next";
import React, { useCallback, useState } from "react";
import { useIsAdmin } from "src/auth/hooks";
import ThreadList from "src/components/forum/ThreadList";
import { apiSWR } from "src/fetcher/fetcher";
import { Post } from "src/types/_generated_Forum";
import useSWR from "swr";

const Page: NextPage = () => {
  const [category, _setCategory] = useState("");
  const [query, _setQuery] = useState("");

  const setCategory = useCallback((c) => _setCategory(c), []);
  const setQuery = useCallback((q) => _setQuery(q), []);

  const isAdmin = useIsAdmin();
  const { data, error } = useSWR<Post[]>(
    "/forum?" + new URLSearchParams({ category, query }).toString(),
    apiSWR()
  );
  if (error) {
    console.error(error);
    return <p>Error</p>;
  }
  if (!data) {
    return <p>Loading</p>;
  }
  return (
    <div className="center pv2">
      <ThreadList
        data={data}
        isAdmin={isAdmin}
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

export default Page;
