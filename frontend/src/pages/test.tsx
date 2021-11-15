import { Button } from "@chakra-ui/button";
import { Box, Flex, Stack, Text } from "@chakra-ui/layout";
import React, { FC, ReactElement, useCallback, useState } from "react";
import { CardList } from "src/components/generic/CardList";
import Measured from "src/components/generic/Measured";

const initial = [
  Math.random(),
  Math.random(),
  Math.random(),
  Math.random(),
  Math.random(),
  Math.random(),
  Math.random(),
  Math.random(),
  Math.random(),
  Math.random(),
  Math.random(),
  Math.random(),
  Math.random(),
  Math.random(),
  Math.random(),
  Math.random(),
  Math.random(),
  Math.random(),
  Math.random(),
  Math.random(),
  Math.random(),
  Math.random(),
  Math.random(),
  Math.random(),
];

const ListControls: FC = ({ children }) => {
  return (
    <Flex
      padding="0.5em"
      borderColor="blackAlpha.100"
      borderStyle="solid"
      borderWidth="1px"
      borderRadius="0.5em"
    >
      {children}
    </Flex>
  );
};

const Page: FC = () => {
  const [items, setItems] = useState(initial);
  const onAdd = useCallback(
    () => setItems([Math.random(), ...items]),
    [items, setItems]
  );
  const onRemove = useCallback(
    (idx: number) => () => {
      const newItems = [...items];
      newItems.splice(idx, 1);
      setItems(newItems);
    },
    [items, setItems]
  );

  const elements: ReactElement[] = items.map(
    (n, idx): ReactElement => (
      <Box key={n}>
        <Text m="0">List item {n}</Text>
        <Button onClick={onRemove(idx)}>Remove</Button>

        <style jsx>{`
          div {
            max-width: 10em;
          }
        `}</style>
      </Box>
    )
  );

  return (
    <Measured>
      <Stack>
        <ListControls>
          <Button onClick={onAdd}>Add</Button>
        </ListControls>
        <CardList>{elements}</CardList>
      </Stack>
    </Measured>
  );
};

export default Page;
