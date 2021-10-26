import { extendTheme } from "@chakra-ui/react";

const fonts = {
  body: `Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif`,
  heading: "english-grotesque",
  mono: "Menlo, monospace",
};

const styles = {
  global: {
    h1: {
      fontSize: "1.6em",
      fontWeight: 700,
    },
    h2: {
      fontSize: "1.5em",
      fontWeight: 700,
    },
    h3: {
      fontSize: "1.4em",
      fontWeight: 300,
    },
    h4: {
      fontSize: "1.3em",
      fontWeight: 300,
    },
    p: {
      marginTop: "0.5em",
    },
    ul: {
      paddingLeft: "1em",
    },
  },
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

const theme = extendTheme({ colors, fonts, styles });

export default theme;
