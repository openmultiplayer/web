import App, { AppInitialProps } from "next/app";
import type { AppProps, AppContext } from "next/app";
import Head from "next/head";
import Router from "next/router";
import cookie from "cookie";
import { NextSeo } from "next-seo";
import { ToastContainer } from "react-nextjs-toast";
import { MDXProvider } from "@mdx-js/react";
import NProgress from "nprogress";

import Nav from "src/components/Nav";
import Footer from "src/components/Footer";

import "normalize.css";
import "tachyons/css/tachyons.min.css";
import "nprogress/nprogress.css";
import "remark-admonitions/styles/classic.css";

import "src/styles/base.css";
import { AuthProvider } from "src/auth/hooks";
import { IncomingMessage } from "http";

// Trigger client-side progress bar for client-side page transitions.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

type Props = {
  authenticated: boolean;
};

const MyApp = ({
  Component,
  pageProps,
  router,
  authenticated,
}: AppProps & Props) => (
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
      <AuthProvider authenticated={authenticated}>
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
      </AuthProvider>
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

MyApp.getInitialProps = async (
  appContext: AppContext
): Promise<AppInitialProps & Props> => {
  const appProps = await App.getInitialProps(appContext);
  const authenticated = isAuthenticatedFromRequest(appContext.ctx.req);

  console.log("initial", { authenticated });

  return {
    ...appProps,
    authenticated,
  };
};

const isAuthenticatedFromRequest = (request?: IncomingMessage): boolean => {
  if (!request) {
    return false;
  }

  const c = cookie.parse(request.headers.cookie || "");
  console.log(c);
  return !!c["openmultiplayer-session"];
};

export default MyApp;
