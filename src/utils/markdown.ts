import { LMSObjectMetadata } from '@andamiojs/core';
import { Node } from '@markdoc/markdoc';

export interface BlogPostMetadata {
  title: string;
  author: string;
  date: string;
}


export const parseMarkdocFrontmatter = (ast: Node) => {
  try {
    return ast.attributes.frontmatter
      ? (JSON.parse(ast.attributes.frontmatter) as LMSObjectMetadata)
      : undefined;
  } catch (error) {
    console.error('Error parsing JSON frontmatter:', error);
    return undefined;
  }
};

export const parseBlogMarkdocFrontmatter = (ast: Node) => {
  try {
    return ast.attributes.frontmatter
      ? (JSON.parse(ast.attributes.frontmatter) as BlogPostMetadata)
      : undefined;
  } catch (error) {
    console.error('Error parsing JSON frontmatter:', error);
    return undefined;
  }
};
