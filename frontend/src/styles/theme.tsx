// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  o: {
    black: "#101013",
    darkpurple: "#282438",
    violet: "#463E55",
    bluepurple: "#8477B7",
    white: "#F3F2F5",
  },
};

const theme = extendTheme({ colors });

export default theme;
