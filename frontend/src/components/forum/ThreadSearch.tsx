import { SmallCloseIcon } from "@chakra-ui/icons";
import { Flex, FlexProps } from "@chakra-ui/layout";
import {
  Button,
  InputGroup,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Tag,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React, { Component, FC } from "react";
import { apiSWR } from "src/fetcher/fetcher";

type Callbacks = {
  onSearch: (tags: string[], query: string) => void;
};

const ThreadSearch: FC<Callbacks> = ({ onSearch }) => {
  // const [tags, setTags] = useState([]);

  // const onSubmit = () => {
  //   onSearch(tags, query);
  // };

  return (
    <InputGroup width="100%" alignItems="start">
      <InputWithChips
        containerProps={{ width: "100%", borderLeftRadius: "md" }}
      />

      <Button
        minWidth="min-content"
        borderLeftRadius={0}
        title="Search for threads"
      >
        Search
      </Button>
    </InputGroup>
  );
};

type Props = {
  // The tags to show the component with when it's created
  initialTags?: string[];

  // Callback to fire when the user adds a new tags
  onAdd?: (text: string) => void;

  // Callback to fire when the user removes a tag either by backspace or click
  onRemove?: (index: number, text: string) => void;

  // Props to pass to <Box /> container
  containerProps?: FlexProps;
};

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

/**
 * InputWithChips renders what appears to be a single input field that contains
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
class InputWithChips extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      chips: this.props.initialTags ?? [],
      tags: [],
      input: "",
    };
  }

  addTag(text: string): void {
    const chips = this.state.chips.concat(text);
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

  handleBetweenInput(idx: number, event: any): void {
    event.preventDefault();

    if (event.code === "Backspace") {
      this.removeTag(idx);
    }
  }

  handlePrimaryInput(event: any): void {
    if (
      event.code === "Backspace" &&
      // only remove the end item if the input box is empty otherwise,
      // allow the user to backspace text in the input box.
      this.state.input.length === 0
    ) {
      this.removeTag(this.state.chips.length - 1);
    } else if (event.code === "Comma" || event.code === "Space") {
      //   event.preventDefault();
      //   this.props.onAdd?.call(this, this.state.input);
      //   this.setState({
      //     chips: [...this.state.chips, this.state.input],
      //     input: "",
      //   });
    }
  }

  handlePrimaryInputChange(event: any): void {
    const query = event.target.value;

    if (query.length > 0) {
      apiSWR<Tag[]>()(`/forum/tags?query=${query}`).then((tags) =>
        this.setState({ ...this.state, tags: tags ?? [] })
      );
      this.setState({ ...this.state, input: query });
    } else {
      this.setState({ ...this.state, input: query, tags: [] });
    }
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
                  <button onClick={() => this.removeTag.bind(this)(idx)}>
                    <SmallCloseIcon />
                  </button>
                </label>
                {between ? (
                  <input
                    onKeyUp={(e) => this.handleBetweenInput.bind(this)(idx, e)}
                    onChange={(e) => this.handleBetweenInput.bind(this)(idx, e)}
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
            isOpen={this.state.tags.length > 0}
            matchWidth
            autoFocus={false}
          >
            <PopoverTrigger>
              <input
                onKeyDown={(e) => this.handlePrimaryInput.bind(this)(e)}
                onChange={(e) => this.handlePrimaryInputChange.bind(this)(e)}
                className="end"
                type="text"
                value={this.state.input}
                placeholder="Filter by tags or search by content"
              />
            </PopoverTrigger>
            <PopoverContent width="100%">
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                <Wrap>
                  {this.state.tags.map((tag: Tag) => (
                    <WrapItem key={tag.id}>
                      <Button
                        variant="solid"
                        colorScheme="teal"
                        onClick={() => {
                          this.addTag(tag.name);
                        }}
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

export default ThreadSearch;
