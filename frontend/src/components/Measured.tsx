import { Box } from "@chakra-ui/layout";
import { FC } from "react";

/**
 * Provides a generic page wrapper that sets the correct max width.
 */
const Measured: FC = ({ children }) => {
  return (
    <Box maxWidth="48em" mx="auto" py="0.5em">
      {children}
    </Box>
  );
};

export default Measured;
