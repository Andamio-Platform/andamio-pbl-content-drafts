import Markdoc from "@markdoc/markdoc";
import { LMSObjectMetadata } from "@andamiojs/core";
import { parseMarkdocFrontmatter } from "../../utils/markdown";
import { getBlogPageContent, getBlogPostData } from "../../lib/blogposts";

export default async function BlogPage() {
  const blogPosts = await getBlogPostData();

  return (
    <div className="bg-primary text-primary-content p-5 w-2/3 mx-auto my-5 shadow-lg">
      <h1 className="text-4xl py-5">Blog Posts</h1>
      <pre>{JSON.stringify(blogPosts, null, 2)}</pre>
    </div>
  );
}
