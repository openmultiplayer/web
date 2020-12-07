import Head from "next/head";
import Router from "next/router";
import type { AppProps } from "next/app";
import { NextSeo } from "next-seo";
import { ToastContainer } from "react-nextjs-toast";
import { MDXProvider } from "@mdx-js/react";
import NProgress from "nprogress";

import Nav from "src/components/Nav";
import Footer from "src/components/Footer";
import components from "src/components/templates";

import "normalize.css";
import "tachyons/css/tachyons.min.css";
import "nprogress/nprogress.css";
import "remark-admonitions/styles/classic.css";

import "src/styles/base.css";

// Trigger client-side progress bar for client-side page transitions.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const MyApp = ({ Component, pageProps, router }: AppProps) => (
  <>
    <Head>
      <link rel="stylesheet" href="/fonts.css" />
    </Head>

    <NextSeo
      title="Open Multiplayer"
      titleTemplate="open.mp | %s"
      canonical="https://www.open.mp"
      twitter={{
        cardType: "summary",
        site: "@openmultiplayer",
        handle: "@openmultiplayer",
      }}
    />

    {/* Toast notification positioning container */}
    <ToastContainer align="right" />

    {/* This is flex to make <section> elements gapless */}
    <div id="container">
      <Nav
        items={[
          { name: "Home", path: "/", exact: true },
          { name: "Servers", path: "/servers" },
          { name: "Docs", path: "/docs" },
        ]}
        route={router.pathname}
      />

      <main>
        {router.pathname.startsWith("/blog") ? (
          <MDXProvider
            components={{
              wrapper: ({ children }) => (
                <article className="measure-wide center">{children}</article>
              ),
            }}
          >
            <Component {...pageProps} />
          </MDXProvider>
        ) : (
          <Component {...pageProps} />
        )}
      </main>
    </div>

    <Footer />

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
      #container {
        flex: 1 0 auto;
      }
    `}</style>
  </>
);

export default MyApp;
