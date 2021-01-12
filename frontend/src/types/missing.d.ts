declare module "react-nextjs-toast" {
  export interface ToastContainerProps {
    align?: "left" | "center" | "right";
    position?: "top" | "bottom";
    id?: string;
  }

  declare class ToastContainer extends React.Component<
    ToastContainerProps,
    any
  > {}

  export interface ToastOptions {
    duration?: number; // Number of seconds to show toast on screen
    type?: string; // Type of toast - info, error, success and warning
    title?: string; // The title of the toast
    targetId?: string; // Target container id
    position?: string; // top , bottom
  }

  declare namespace toast {
    declare function notify(message: string, opts: ToastOptions);
  }
}

declare module "@mdx-js/mdx";

declare module "@mdx-js/react" {
  import * as React from "react";
  type ComponentType =
    | "a"
    | "blockquote"
    | "code"
    | "del"
    | "em"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "hr"
    | "img"
    | "inlineCode"
    | "li"
    | "ol"
    | "p"
    | "pre"
    | "strong"
    | "sup"
    | "table"
    | "td"
    | "thematicBreak"
    | "tr"
    | "ul";
  export type Components = {
    [key in ComponentType]?: React.ComponentType<any>;
  };
  export interface MDXProviderProps {
    children?: React.ReactNode;
    components: Components;
  }
  export class MDXProvider extends React.Component<MDXProviderProps> {}
  export class mdx {}
}

declare module "@babel/preset-react";

declare module "remark-admonitions";
