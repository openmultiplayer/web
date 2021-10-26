import { Global } from "@emotion/react";

const Fonts = () => {
  return (
    <Global
      styles={`
        @font-face {
            font-family: "nimbus-sans";
            src: url("/fonts/nimbus-sans_400.woff2") format("woff2"),
              url("/fonts/nimbus-sans_400.woff") format("woff"),
              url("/fonts/nimbus-sans_400.opentype") format("opentype");
            font-display: auto;
            font-style: normal;
            font-weight: 400;
          }
          
          @font-face {
            font-family: "nimbus-sans";
            src: url("/fonts/nimbus-sans_900.woff2") format("woff2"),
              url("/fonts/nimbus-sans_900.woff") format("woff"),
              url("/fonts/nimbus-sans_900.opentype") format("opentype");
            font-display: auto;
            font-style: normal;
            font-weight: 900;
          }
          
          @font-face {
            font-family: "signo";
            src: url("/fonts/signo_700.woff2") format("woff2"),
              url("/fonts/signo_700.woff") format("woff"),
              url("/fonts/signo_700.opentype") format("opentype");
            font-display: auto;
            font-style: normal;
            font-weight: 700;
          }
          
          @font-face {
            font-family: "signo";
            src: url("/fonts/signo_400.woff2") format("woff2"),
              url("/fonts/signo_400.woff") format("woff"),
              url("/fonts/signo_400.opentype") format("opentype");
            font-display: auto;
            font-style: normal;
            font-weight: 400;
          }
          
          @font-face {
            font-family: "english-grotesque";
            src: url("/fonts/english-grotesque_700.woff2") format("woff2"),
              url("/fonts/english-grotesque_700.woff") format("woff"),
              url("/fonts/english-grotesque_700.opentype") format("opentype");
            font-display: auto;
            font-style: normal;
            font-weight: 700;
          }
          
          @font-face {
            font-family: "english-grotesque";
            src: url("/fonts/english-grotesque_300.woff2") format("woff2"),
              url("/fonts/english-grotesque_300.woff") format("woff"),
              url("/fonts/english-grotesque_300.opentype") format("opentype");
            font-display: auto;
            font-style: normal;
            font-weight: 300;
          }
        `}
    />
  );
};

export default Fonts;
