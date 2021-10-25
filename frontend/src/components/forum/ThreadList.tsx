import { Box, Button, Flex } from "@chakra-ui/react";
import map from "lodash/fp/map";
import Link from "next/link";
import nProgress from "nprogress";
import React, { FC, useCallback } from "react";
import { toast } from "react-nextjs-toast";
import ThreadSearch from "src/components/forum/ThreadSearch";
import { apiSSP } from "src/fetcher/fetcher";
import { APIError } from "src/types/_generated_Error";
import { Post } from "src/types/_generated_Forum";
import { mutate } from "swr";
import CategoryList from "./CategoryList";
import ThreadListItem from "./ThreadListItem";

type HeaderProps = {
  category: string;
  onSelectCategory: (c: string) => void;
  onSearch: (tags: string[], query: string) => void;
};

const NewThreadButton = () => (
  <Link href="/discussion/new" passHref>
    <Button colorScheme="green">New Thread</Button>
  </Link>
);

const ListHeader: FC<HeaderProps> = ({
  category,
  onSelectCategory,
  onSearch,
}) => {
  return (
    <Flex direction="row" gridGap="0.5em">
      <Box className="categories">
        <CategoryList category={category} onSelect={onSelectCategory} />
      </Box>

      <Box className="search" flexGrow={1}>
        <ThreadSearch onSearch={onSearch} />
      </Box>

      <Box className="new">
        <NewThreadButton />
      </Box>
    </Flex>
  );
};

type Props = {
  data: Post[];
  isAdmin: boolean;
  category: string;
} & HeaderProps;

const ThreadList: FC<Props> = ({
  data,
  isAdmin,
  category,
  onSelectCategory,
  onSearch,
}) => {
  const onDelete = useCallback(async (id: string) => {
    nProgress.start();
    try {
      await apiSSP(`/forum/${id}`, { method: "DELETE" });
      toast.notify("Post deleted!", {
        type: "success",
      });
    } catch (e) {
      const err = e as APIError;
      toast.notify(err.message ?? "An unknown error occurred", {
        title: err.error ?? "Error",
        type: "error",
      });
    }
    mutate("/forum");
    nProgress.done();
  }, []);

  const mapping = map((post: Post) => (
    <ThreadListItem
      post={post}
      showAdminTools={isAdmin}
      onDelete={onDelete}
      key={post.id}
    />
  ));

  return (
    <div>
      <ListHeader
        category={category}
        onSelectCategory={onSelectCategory}
        onSearch={onSearch}
      />

      <ol>{mapping(data)}</ol>

      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          gap: 0.5em;
        }
        ol {
          padding: 0;
          margin: 0;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5em;
        }
      `}</style>
    </div>
  );
};

export default ThreadList;
