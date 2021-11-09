import { Box } from "@chakra-ui/layout";
import { FC } from "react";

/**
 * Provides a generic page wrapper that sets the correct max width.
 */
const Measured: FC = ({ children }) => {
  return (
    <Box maxWidth="48em" mx="auto" p="0.5em" height="100%">
      {children}
    </Box>
  );
};

export default Measured;
