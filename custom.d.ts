declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module "@mdx-js/react" {
  import * as React from "react";
  type ComponentType =
    | "a"
    | "blockquote"
    | "code"
    | "delete"
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
    [key in ComponentType]?: React.ComponentType<{ children: React.ReactNode }>;
  };
  export interface IMDXProviderProps {
    children: React.ReactNode;
    components: Components;
  }
  export class MDXProvider extends React.Component<IMDXProviderProps> {}
}

declare module "*.mdx" {
  let MDXComponent: (props: any) => JSX.Element;
  const frontMatter: any;
  const tableOfContents: any;

  export { frontMatter, tableOfContents };
  export default MDXComponent;
}
