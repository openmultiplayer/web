import { Box, Flex, FlexProps } from "@chakra-ui/layout";
import React, { ReactElement, VFC } from "react";
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion";
import { SystemStyleObject } from "@chakra-ui/styled-system";
import { As } from "@chakra-ui/system";

interface ChildProps {
  sx: SystemStyleObject;
}

type Props = {
  /** What element should the list render as? Ordered or Unordered. */
  as?: "ol" | "ul";

  /** What elements should the list items render as? Defaults to `article`. */
  childrenAs?: As;

  /** Children must contain an `sx` prop for styles. */
  children: ReactElement<ChildProps>[];
} & FlexProps;

const duration = 0.1;

export const CardList: VFC<Props> = ({
  as = "ol",
  childrenAs = "article",
  children,
  ...pass
}) => {
  // these styles are passed to children. If the child is a Chakra component
  // it will automatically apply these. If not, the component must manually
  // union its props with `ChakraProps` and pass `sx` to its outermost element.
  const sx = {
    padding: "0.8em",
    borderColor: "blackAlpha.100",
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: "0.5em",
  };

  return (
    <Box className="static-container" overflowY="clip">
      <AnimateSharedLayout>
        <motion.div
          className="animated-container"
          layout
          transition={{ bounce: false, duration: duration }}
        >
          <Flex
            {...pass}
            as={as}
            display="flex"
            margin="0"
            flexDirection="column"
            listStyleType="none"
            gridGap="0.5em"
          >
            {React.Children.map(children, (child: ReactElement<ChildProps>) => {
              return (
                <AnimatePresence>
                  <motion.li
                    layout
                    key={child.key}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ bounce: false, duration: duration }}
                    exit={{ y: -50, opacity: 0 }}
                  >
                    <Box as={childrenAs}>
                      {React.cloneElement(child, {
                        sx,
                      })}
                    </Box>
                  </motion.li>
                </AnimatePresence>
              );
            })}
          </Flex>
        </motion.div>
      </AnimateSharedLayout>
    </Box>
  );
};
