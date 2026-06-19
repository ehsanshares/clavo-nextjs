import { MDXRemote } from "next-mdx-remote/rsc";

/**
 * Renders an MDX/Markdown body. The caller wraps this in the original rich-text
 * container (`.blog-single-rich-text`, `.work-single-rich-text`,
 * `.service-single-rich-text`), so styles.css styles the emitted h6/p/ul/strong/img
 * tags exactly as in the static template — no component overrides needed.
 */
export function MdxBody({ source }: { source: string }) {
  return <MDXRemote source={source} />;
}
