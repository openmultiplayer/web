import { Box, Button, HStack, Input, Stack } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import Editor from "rich-markdown-editor";
import { apiSWR } from "src/fetcher/fetcher";
import {
  SearchResults,
  SearchResultsSchema,
} from "src/types/_generated_SearchResult";
import * as z from "zod";
import CategoryList from "./CategoryList";
import TagsInput from "./TagsInput";

export const PostPayloadSchema = z.object({
  title: z.string(),
  // optional because it's not in the form
  body: z.string().optional(),
  tags: z.string().array().optional(),
  category: z.string().optional(),
});
export type PostPayload = z.infer<typeof PostPayloadSchema>;

type Props = {
  initialTitle?: string;
  initialBody?: string;
  onSubmit: (post: PostPayload) => void;
  disableThreadCreationOptions?: boolean;
  postButtonText?: string;
  placeholder?: string;
};

const PostEditor: FC<Props> = ({
  initialTitle,
  initialBody,
  onSubmit,
  disableThreadCreationOptions,
  postButtonText = "Create Post",
  placeholder = "Your post content...",
}) => {
  const [body, setBody] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [category, setCategory] = useState("General");
  const { register, handleSubmit } = useForm({
    // Only use the schema for creating new threads. Replies only contain a
    // body, no title, category or tags, so there's no point validating it.
    resolver: disableThreadCreationOptions
      ? undefined
      : zodResolver(PostPayloadSchema),
  });

  const _onSubmit = useCallback(
    (data: PostPayload) => {
      onSubmit({
        title: data.title,
        body,
        tags,
        category,
      });
    },
    [onSubmit, body, tags, category]
  );

  const onChange = useCallback(
    (body: () => string) => {
      setBody(body().trim());
    },
    [setBody]
  );
  const onAddTag = useCallback(
    (tag: string) => {
      setTags([...tags, tag]);
    },
    [setTags, tags]
  );
  const onRemoveTag = useCallback(
    (idx: number, tag: string) => {
      setTags(tags.filter((t) => t !== tag));
    },
    [setTags, tags]
  );
  const onSelectCategory = useCallback(
    (category) => {
      setCategory(category);
    },
    [setCategory]
  );

  return (
    <>
      <form onSubmit={handleSubmit(_onSubmit)} className="flex flex-column">
        <Stack spacing={2}>
          {disableThreadCreationOptions || (
            <Input
              {...register("title", { required: true, maxLength: 64 })}
              placeholder="Title..."
              defaultValue={initialTitle}
              required
            />
          )}

          <Box
            borderRadius="md"
            px="1.6em"
            border="solid 1px var(--chakra-colors-blackAlpha-200)"
            minHeight="12em"
          >
            <Editor
              className="mv2"
              defaultValue={initialBody}
              onChange={onChange}
              placeholder={placeholder}
              disableExtensions={[
                "container_notice",
                "table",
                "checkbox_list",
                "placeholder",
              ]}
              onSearchLink={async (term: string) => {
                // TODO: FIX THIS
                const result = await apiSWR<SearchResults>({
                  schema: SearchResultsSchema,
                })(`/docs/search?q=${term}`);
                return result.hits.map((hit) => ({
                  title: hit.title,
                  subtitle: hit.desc,
                  url: `https://open.mp/${hit.url}`,
                }));
              }}
            />
          </Box>

          {disableThreadCreationOptions || (
            <TagsInput
              allowNewTags={true}
              placeholder="Search for existing tags or add new tags"
              containerProps={{ borderRadius: "0.5em" }}
              onAdd={onAddTag}
              onRemove={onRemoveTag}
            />
          )}

          <HStack>
            {disableThreadCreationOptions || (
              <CategoryList category={category} onSelect={onSelectCategory} />
            )}
            <Button type="submit" px="2em">
              {postButtonText}
            </Button>
          </HStack>
        </Stack>
      </form>
    </>
  );
};

export default PostEditor;
