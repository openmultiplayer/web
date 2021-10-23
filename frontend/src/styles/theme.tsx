import { extendTheme } from "@chakra-ui/react";

const fonts = {
  heading: "english-grotesque, sans-serif",
};

const colors = {
  o: {
    black: "#101013",
    darkpurple: "#282438",
    violet: "#463E55",
    bluepurple: "#8477B7",
    white: "#F3F2F5",
  },
};

const theme = extendTheme({ colors, fonts });

export default theme;
