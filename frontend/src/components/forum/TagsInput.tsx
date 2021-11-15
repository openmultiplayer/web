import { Box, Flex, FlexProps } from "@chakra-ui/layout";
import {
  Kbd,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Tag,
  Text,
  useOutsideClick,
} from "@chakra-ui/react";
import debounce from "lodash.debounce";
import React, {
  ChangeEvent,
  Component,
  FC,
  KeyboardEvent,
  MutableRefObject,
  RefObject,
  useCallback,
  useRef,
  useState,
} from "react";
import { api } from "src/fetcher/fetcher";
import { TagButton } from "./LinkedTag";

type Tag = {
  id: string;
  name: string;
  posts: number;
};

type State = {
  chips: string[];
  tags?: Tag[];
  input: string;
};

type Props = {
  // The tags to show the component with when it's created
  initialTags?: string[];

  // The query to pre fill the end of the input box with
  initialQuery?: string;

  // Allow new tags to be added without being present in search
  allowNewTags?: boolean;

  // Placeholder text for input box
  placeholder: string;

  // Props to pass to <Box /> container
  containerProps?: FlexProps;

  // Open state for the tag selection popover
  open?: boolean;

  // Callback for typing queries
  onQueryChange?: (text: string) => void;

  // Callback to fire when the user adds a new tags
  onAdd?: (text: string) => void;

  // Callback to fire when the user removes a tag either by backspace or click
  onRemove?: (index: number, text: string) => void;
};

/**
 * TagsInput renders what appears to be a single input field that contains
 * small tag-like elements inside it known as "Chips". When the user types
 * something and presses Enter, their text is turned into an element inside the
 * interactive box which can be removed either by using backspace or by clicking
 * a small "delete" inside the chip.
 *
 * It achieves this by rendering a small input box after each chip. The final
 * chip sits next to an input that fills the rest of the container's width. To
 * the user, this appears as if it's one input with chips inside it but it's
 * actually many small inputs which don't allow input but only backspace to
 * delete the chip to its left.
 *
 * It doesn't handle arrow keys so you can't move around the whole element like
 * an input but that could be added easily.
 */
class TagsInputInner extends Component<Props, State> {
  private inputEndEvents = ["Space", "Comma", "Tab"];

  constructor(props: Props) {
    super(props);

    this.state = {
      chips: props.initialTags ?? [],
      tags: undefined,
      input: props.initialQuery ?? "",
    };
  }

  addTag(text: string): void {
    const stripped = text.trim();

    if (stripped.length < 3) {
      return;
    }

    const chips = this.state.chips.concat(text);
    this.props.onQueryChange?.call(this, "");
    this.props.onAdd?.call(this, text);
    this.setState({
      ...this.state,
      chips,
      tags: undefined,
    });
  }

  removeTag(idx: number): void {
    const newTags = [...this.state.chips];
    newTags.splice(idx, 1);
    this.setState({ ...this.state, chips: newTags });
    this.props.onRemove?.call(this, idx, this.state.chips[idx]);
  }

  handleBetweenInput(
    idx: number,
    event: KeyboardEvent<HTMLInputElement> | ChangeEvent<HTMLInputElement>
  ): void {
    event.preventDefault();

    if ((event as KeyboardEvent).code === "Backspace") {
      this.removeTag(idx);
    }
  }

  handlePrimaryInputKey(event: KeyboardEvent<HTMLInputElement>): void {
    if (
      event.code === "Backspace" &&
      // only remove the end item if the input box is empty otherwise,
      // allow the user to backspace text in the input box.
      this.state.input.length === 0
    ) {
      this.removeTag(this.state.chips.length - 1);
    } else if (
      this.props.allowNewTags &&
      this.inputEndEvents.includes(event.code)
    ) {
      event.preventDefault();
      const tag = this.state.input;
      this.setState(
        {
          input: "",
        },
        () => this.addTag(tag)
      );
    }
  }

  doTagQuery(query: string): void {
    debounce(
      () =>
        api<Tag[]>(`/forum/tags?query=${query}`).then((tags) =>
          this.setState({ ...this.state, tags: tags ?? [] })
        ),
      500
    )();

    this.setState({ ...this.state, input: query });
    this.props.onQueryChange?.call(this, query);
  }

  handlePrimaryInputChange(event: ChangeEvent<HTMLInputElement>): void {
    const query = event.target.value;
    this.doTagQuery(query);
  }

  handleClickSuggestion(text: string): void {
    this.setState(
      {
        ...this.state,
        input: "",
      },
      () => this.addTag(text)
    );
  }

  render(): JSX.Element {
    return (
      <>
        <Flex
          className="container"
          {...{
            height: "min-content",
            minHeight: "var(--chakra-sizes-10)",
            justifyContent: "start",
            alignItems: "center",
            flexWrap: "wrap",
            border: "1px solid hsla(1, 50%, 50%, 10%)",
            padding: "0em 0.2em",
            gridGap: "0.1em",
            ...this.props.containerProps,
          }}
        >
          {this.state.chips.map((data, idx) => {
            // Check if this chip is between two or at the end of the list since
            // if it's not don't render the input to the right hand side because
            // that input is rendered below as it's always shown regardless of a
            // list of current chips the user has entered into the field already
            const between = idx < this.state.chips.length - 1;
            return (
              <Chip
                key={data}
                idx={idx}
                name={data}
                between={between}
                onRemove={this.removeTag.bind(this)}
                onBetweenInput={this.handleBetweenInput.bind(this)}
              />
            );
          })}

          <Popover isOpen={this.props.open} matchWidth autoFocus={false}>
            <PopoverTrigger>
              <input
                onKeyDown={this.handlePrimaryInputKey.bind(this)}
                onChange={this.handlePrimaryInputChange.bind(this)}
                className="end"
                type="text"
                value={this.state.input}
                placeholder={this.props.placeholder}
              />
            </PopoverTrigger>
            <PopoverContent width="100%" className="tag-list">
              <PopoverArrow />
              <PopoverBody>
                <TagSuggestionList
                  tags={this.state.tags}
                  onClick={this.handleClickSuggestion.bind(this)}
                />
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>

        <style jsx>{`
          input {
            border: none;
            background-color: rgba(0, 0, 0, 0);
            height: 2em;
            padding-left: 0.2em;
            margin-left: 0;
          }
          input:focus {
            outline: none;
          }
          .end {
            flex-grow: 1;
            min-width: 1em;
          }
        `}</style>
      </>
    );
  }
}

type TagSuggestionListProps = {
  tags?: Tag[];
  onClick: (name: string) => void;
};
export const TagSuggestionList: FC<TagSuggestionListProps> = ({
  tags,
  onClick,
}) => {
  if (tags === undefined) {
    return (
      <Box textAlign="center" py="1em">
        <Text>Start typing to see existing tag suggestions</Text>
        <Text color="blackAlpha.500" letterSpacing="0.1em">
          <em>— or —</em>
        </Text>
        <Text>
          Add tags by typing a word and hitting <Kbd>space</Kbd>,
          <Kbd>comma</Kbd> or <Kbd>tab</Kbd>.
        </Text>
      </Box>
    );
  }

  if (tags.length == 0) {
    return (
      <Box textAlign="center" py="1em">
        <Text>
          Add a new tag after typing it by pressing <Kbd>space</Kbd>,{" "}
          <Kbd>comma</Kbd> or <Kbd>tab</Kbd>.
        </Text>
      </Box>
    );
  }

  return (
    <Flex
      wrap="wrap"
      maxW="48em"
      gridGap="0.2em"
      justifyContent="space-around"
      p="0.2em"
    >
      {tags.map((tag: Tag) => (
        <TagSuggestion key={tag.id} tag={tag} onClick={onClick} />
      ))}
    </Flex>
  );
};
type TagSuggestionProps = {
  tag: Tag;
  onClick: (name: string) => void;
};
const TagSuggestion: FC<TagSuggestionProps> = ({ tag, onClick }) => {
  const _onClick = useCallback(() => onClick(tag.name), [onClick, tag]);
  return (
    <TagButton
      key={tag.id}
      name={tag.name}
      posts={tag.posts}
      onClick={_onClick}
    />
  );
};

type ChipProps = {
  idx: number;
  name: string;
  between: boolean;
  onRemove: (idx: number) => void;
  onBetweenInput: (
    idx: number,
    event: KeyboardEvent<HTMLInputElement> | ChangeEvent<HTMLInputElement>
  ) => void;
};
export const Chip: FC<ChipProps> = ({
  idx,
  name,
  between,
  onRemove,
  onBetweenInput,
}) => {
  return (
    <span>
      <label htmlFor={`between-${idx}`}>
        <TagButton name={name} closeButton onClose={() => onRemove(idx)} />
      </label>
      {between ? (
        <input
          onKeyUp={(e) => onBetweenInput(idx, e)}
          onChange={(e) => onBetweenInput(idx, e)}
          id={`chips-between-${idx}`}
          className="chips-between"
          type="text"
          value=""
        />
      ) : null}

      <style jsx>{`
        span {
          display: flex;
          margin: 0.1em;
          align-content: center;
          justify-content: space-around;
          height: 2em;

          --gap-size: 0.1em;
        }
        button {
          padding: 0em;
          cursor: pointer;
          line-height: 1;
        }
        label {
          display: flex;
          align-items: center;
        }
        input {
          border: none;
          background-color: rgba(0, 0, 0, 0);
          height: 2em;
          padding-left: 0.2em;

          width: calc(var(--gap-size) * 10);
          margin-left: 0;
          margin-right: calc(var(--gap-size) * -4);
        }
        input:focus {
          outline: none;
        }
      `}</style>
    </span>
  );
};

const TagsInput: FC<Props> = (props) => {
  const ref: MutableRefObject<HTMLDivElement> = useRef<
    HTMLDivElement | undefined
  >() as MutableRefObject<HTMLDivElement>;
  const [open, setOpen] = useState(false);

  useOutsideClick({
    ref: ref as RefObject<HTMLElement>,
    handler: () => {
      setOpen(false);
    },
  });

  const onClick = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  return (
    <Box ref={ref} onClick={onClick} width="100%">
      <TagsInputInner {...props} open={open} />
    </Box>
  );
};

export default TagsInput;
