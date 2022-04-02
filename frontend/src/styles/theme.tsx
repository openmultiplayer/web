import { extendTheme } from "@chakra-ui/react";

const fonts = {
  body: `Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif`,
  heading: `English Grotesque, Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif`,
  mono: "Menlo, monospace",
};

const styles = {
  global: {
    h1: {
      marginTop: "0.5em",
      fontFamily: "english-grotesque",
      fontSize: "1.6em",
      fontWeight: 700,
    },
    h2: {
      marginTop: "0.5em",
      fontFamily: "english-grotesque",
      fontSize: "1.5em",
      fontWeight: 700,
    },
    h3: {
      marginTop: "0.5em",
      fontFamily: "english-grotesque",
      fontSize: "1.4em",
      fontWeight: 300,
    },
    h4: {
      marginTop: "0.5em",
      fontFamily: "english-grotesque",
      fontSize: "1.3em",
      fontWeight: 300,
    },
    p: {
      marginTop: "0.5em",
    },
    ul: {
      paddingLeft: "1em",
    },
    a: {
      color: "#9083D2",
      _hover: {
        textDecoration: "underline",
      },
    },
  },
};

const colors = {
  brand: {
    black: "#101013",
    darkpurple: "#282438",
    violet: "#463E55",
    bluepurple: "#8477B7",
    white: "#F3F2F5",
  },
};

const theme = extendTheme({ colors, fonts, styles });

export default theme;
