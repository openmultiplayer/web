import type { AppProps } from "next/app";
import Router from "next/router";
import { DefaultSeo } from "next-seo";
import { ToastContainer } from "react-nextjs-toast";
import NProgress from "nprogress";

import Nav from "src/components/site/Nav";
import Footer from "src/components/site/Footer";

import "normalize.css";
import "tachyons/css/tachyons.min.css";
import "nprogress/nprogress.css";
import "remark-admonitions/styles/classic.css";

import "src/styles/base.css";
import { AuthProvider } from "src/auth/hooks";
import { Chakra } from "src/components/Chakra";
import Fonts from "src/styles/Fonts";
import React from "react";
import { NextPage } from "next";

// Trigger client-side progress bar for client-side page transitions.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const App: NextPage<AppProps> = ({ Component, pageProps, router }) => (
  <Chakra cookies={pageProps.cookies}>
    <Fonts />

    {/*
      Sets the default meta tags for all pages.
      https://github.com/garmeeh/next-seo
    */}
    <DefaultSeo
      title="Open Multiplayer"
      titleTemplate="open.mp | %s"
      description="A multiplayer mod for Grand Theft Auto: San Andreas that is fully backwards compatible with San Andreas Multiplayer"
      canonical="https://open.mp"
      twitter={{
        cardType: "summary",
        site: "@openmultiplayer",
        handle: "@openmultiplayer",
      }}
    />

    <ToastContainer align="right" />

    <AuthProvider>
      <Nav
        items={[
          { name: "Home", path: "/", exact: true },
          { name: "FAQ", path: "/faq" },
          { name: "Forums", path: "https://forum.open.mp" },
          { name: "Servers", path: "/servers" },
          { name: "Partners", path: "/partners" },
          { name: "Docs", path: "/docs" },
          { name: "Blog", path: "/blog" },
        ]}
        route={router.asPath}
      />

      <main>
        <Component {...pageProps} />
      </main>

      <Footer />
    </AuthProvider>

    <style jsx global>{`
      html,
      body,
      #__next {
        height: 100%;
      }
      #__next {
        display: flex;
        flex-direction: column;
      }
      main {
        flex: 1 0 auto;
      }
    `}</style>
  </Chakra>
);

export default App;
