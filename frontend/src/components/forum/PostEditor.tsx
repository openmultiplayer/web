import { Box, Button, HStack, Input, Stack, useColorMode } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useCallback, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import Editor from "rich-markdown-editor";
import { api } from "src/fetcher/fetcher";
import { editorDark, editorLight } from 'src/styles/theme'
import {
  SearchResults,
  SearchResultsSchema,
} from "src/types/_generated_SearchResult";
import * as z from "zod";
import CategorySelect from "./CategorySelect";
import TagsInput from "./TagsInput";

export const PostPayloadSchema = z.object({
  id: z.string().optional(),
  title: z.string(),
  // optional because it's not in the form
  body: z.string().optional(),
  tags: z.string().array().optional(),
  category: z.string().optional(),
});
export type PostPayload = z.infer<typeof PostPayloadSchema>;

type Props = {
  initialPostID?: string;
  initialTitle?: string;
  initialBody?: string;
  onSubmit: (post: PostPayload) => Promise<boolean>;
  disableThreadCreationOptions?: boolean;
  postButtonText?: string;
  placeholder?: string;
};

const clean = (md: string): string => {
  const cleaned = md.replace(/^\\/gm, "");
  return cleaned.trim();
};

const PostEditor: FC<Props> = ({
  initialPostID,
  initialTitle,
  initialBody,
  onSubmit,
  disableThreadCreationOptions,
  postButtonText = "Create Post",
  placeholder = "Your post content...",
}) => {
  const [body, setBody] = useState(initialBody);
  const [resetKey, setResetKey] = useState(Math.random());
  const [tags, setTags] = useState<string[]>([]);
  const [category, setCategory] = useState("General");
  const editorInput = useRef<Editor>(null);
  const { register, handleSubmit } = useForm({
    // Only use the schema for creating new threads. Replies only contain a
    // body, no title, category or tags, so there's no point validating it.
    resolver: disableThreadCreationOptions
      ? undefined
      : zodResolver(PostPayloadSchema),
  });
  const { colorMode } = useColorMode();

  const _onSubmit = useCallback(
    async (data: PostPayload) => {
      const shouldReset = await onSubmit({
        id: initialPostID,
        title: data.title ?? initialTitle,
        body,
        tags,
        category,
      });
      if (shouldReset) {
        // Trigger the editor to re-render and clear its content.
        setResetKey(Math.random());
      }
    },
    [initialPostID, initialTitle, onSubmit, body, tags, category]
  );

  const onChange = useCallback(
    (body: () => string) => {
      setBody(clean(body()));
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

  const handleInputClick = () => {
    editorInput.current?.focusAtStart();
  };

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
            onClick={body ? () => ({}) : handleInputClick}
          >
            <Editor
              theme={colorMode === 'dark' ? editorDark : editorLight}
              key={resetKey}
              ref={editorInput}
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
                const result = await api<SearchResults>(
                  `/docs/search?q=${term}`,
                  { schema: SearchResultsSchema }
                );
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
              <CategorySelect category={category} onSelect={onSelectCategory} />
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
