import fs from "fs";
import path from "path";
import { ModuleMarkdocPage } from "@andamiojs/core";
import Markdoc from "@markdoc/markdoc";
import { BlogPostMetadata, parseBlogMarkdocFrontmatter } from "../utils/markdown";

export type BlogPost = {
  title: string;
  contents: string;
  frontmatter: BlogPostMetadata;
};

const blogDirectory = path.join(process.cwd(), "/src/blog");

export async function getBlogPostData(): Promise<BlogPost[]> {
  const blogPostFileNames = fs.readdirSync(blogDirectory);
  const pages: BlogPost[] = [];

  blogPostFileNames.forEach(async (blogPostFile) => {
    const _title = blogPostFile.replace(/\.md$/, "");
    const _pagePath = path.join(blogDirectory, blogPostFile);
    const _contents = fs.readFileSync(_pagePath, "utf8");

    const pageAST = Markdoc.parse(_contents);
    const frontmatter = parseBlogMarkdocFrontmatter(pageAST);

    if (frontmatter) {
      pages.push({ title: _title, contents: _contents, frontmatter: frontmatter });
    }
  });

  return pages;
}

export function getBlogPageContent(pageId: string) {
  const pageFileName = pageId + ".md";
  const fullPath = path.join(blogDirectory, pageFileName);
  const fileContents = fs.readFileSync(fullPath, "utf-8");

  return fileContents;
}
