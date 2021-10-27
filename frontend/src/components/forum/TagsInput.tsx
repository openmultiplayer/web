import { SmallCloseIcon } from "@chakra-ui/icons";
import { Flex, FlexProps } from "@chakra-ui/layout";
import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Tag,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import debounce from "lodash.debounce";
import React, { ChangeEvent, Component, KeyboardEvent } from "react";
import { apiSWR } from "src/fetcher/fetcher";

type Tag = {
  id: string;
  name: string;
  posts: number;
};

type State = {
  chips: string[];
  tags: Tag[];
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
class TagsInput extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      chips: props.initialTags ?? [],
      tags: [],
      input: props.initialQuery ?? "",
    };
  }

  addTag(text: string): void {
    const chips = this.state.chips.concat(text);
    this.props.onQueryChange?.call(this, "");
    this.props.onAdd?.call(this, text);
    this.setState({
      ...this.state,
      chips,
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

    if (event instanceof KeyboardEvent) {
      if (event.code === "Backspace") {
        this.removeTag(idx);
      }
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
    } else if (this.props.allowNewTags && event.code === "Space") {
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

  handlePrimaryInputChange(event: ChangeEvent<HTMLInputElement>): void {
    const query = event.target.value;

    if (query.length > 0) {
      debounce(
        () =>
          apiSWR<Tag[]>()(`/forum/tags?query=${query}`).then((tags) =>
            this.setState({ ...this.state, tags: tags ?? [] })
          ),
        500
      )();
      this.setState({ ...this.state, input: query });
    } else {
      this.setState({ ...this.state, input: query, tags: [] });
    }

    this.props.onQueryChange?.call(this, query);
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
            padding: "0.01em 0.1em",
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
              <span key={idx}>
                <label htmlFor={`between-${idx}`}>
                  {data}
                  <button onClick={() => this.removeTag(idx)}>
                    <SmallCloseIcon />
                  </button>
                </label>
                {between ? (
                  <input
                    onKeyUp={(e) => this.handleBetweenInput(idx, e)}
                    onChange={(e) => this.handleBetweenInput(idx, e)}
                    id={`chips-between-${idx}`}
                    className="chips-between"
                    type="text"
                    value=""
                  />
                ) : null}
              </span>
            );
          })}

          <Popover
            isOpen={this.state.input.length > 0 && this.state.tags.length > 0}
            matchWidth
            autoFocus={false}
          >
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
            <PopoverContent width="100%">
              <PopoverArrow />
              <PopoverBody>
                <Wrap>
                  {this.state.tags.map((tag: Tag) => (
                    <WrapItem key={tag.id}>
                      <Button
                        variant="solid"
                        colorScheme="teal"
                        cursor="pointer"
                        onClick={() =>
                          this.handleClickSuggestion.bind(this)(tag.name)
                        }
                      >
                        {tag.name} ({tag.posts})
                      </Button>
                    </WrapItem>
                  ))}
                </Wrap>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>

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

            border: 1px solid hsla(180, 50%, 60%, 30%);
            background-color: hsla(180, 50%, 60%, 30%);
            border-radius: 0.2em;
            padding: 0em 0.2em 0em 0.5em;
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
          .end {
            flex-grow: 1;
            min-width: 1em;
          }
        `}</style>
      </>
    );
  }
}

export default TagsInput;
