import { Button, InputGroup } from "@chakra-ui/react";
import React, { FC, useCallback, useState } from "react";
import TagsInput from "./TagsInput";

type Props = {
  // The tags to show the component with when it's created
  initialTags?: string[];

  // The query to pre fill the end of the input box with
  initialQuery?: string;

  // Callback for typing queries
  onQueryChange?: (text: string) => void;

  // Callback to fire when the user adds a new tags
  onAdd?: (text: string) => void;

  // Callback to fire when the user removes a tag either by backspace or click
  onRemove?: (index: number, text: string) => void;

  // Callback to fire when the user hits the search button
  onSearch: (tags: string[], query: string) => void;
};

const ThreadSearch: FC<Props> = (props) => {
  const [tags, setTags] = useState<string[]>(props.initialTags ?? []);
  const [query, setQuery] = useState(props.initialQuery);

  const onQueryChange = useCallback((q) => {
    setQuery(q);
  }, []);

  const onAdd = useCallback(
    (t) => {
      setTags([...tags, t]), [tags];
    },
    [tags]
  );

  const onRemove = useCallback(
    (t) => {
      setTags([...tags].filter((p) => p === t));
    },
    [tags]
  );

  const onSubmit = useCallback(() => {
    props.onSearch(tags, query ?? "");
  }, [props, tags, query]);

  return (
    <InputGroup width="100%" alignItems="start">
      <TagsInput
        placeholder="Filter by tags or search by content"
        onQueryChange={onQueryChange}
        onAdd={onAdd}
        onRemove={onRemove}
        containerProps={{ width: "100%", borderLeftRadius: "md" }}
        {...props}
      />

      <Button
        minWidth="min-content"
        borderLeftRadius={0}
        title="Search for threads"
        onClick={onSubmit}
      >
        Search
      </Button>
    </InputGroup>
  );
};

export default ThreadSearch;
