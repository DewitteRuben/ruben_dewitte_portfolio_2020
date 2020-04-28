declare module "*.mdx" {
  let MDXComponent: () => JSX.Element;
  const frontMatter;
  export { frontMatter };
  export default MDXComponent;
}
