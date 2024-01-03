import fs from "fs";
import path from "path";
import { ModuleMarkdocPage } from "@andamiojs/core";

const blogDirectory = path.join(process.cwd(), "/src/blog");

export const getBlogPostData = async () => {
  const blogPostFileNames = fs.readdirSync(blogDirectory);
  const pages: ModuleMarkdocPage[] = [];

  blogPostFileNames.forEach(async (blogPostFile) => {
    const _title = blogPostFile.replace(/\.md$/, "");
    const _pagePath = path.join(blogDirectory, blogPostFile);
    const _contents = fs.readFileSync(_pagePath, "utf8");
    pages.push({ _title, _contents });
  });

  return pages;
};

export function getBlogPageContent(pageId: string) {
  const pageFileName = pageId + ".md";
  const fullPath = path.join(blogDirectory, pageFileName);
  const fileContents = fs.readFileSync(fullPath, "utf-8");

  return fileContents;
}
