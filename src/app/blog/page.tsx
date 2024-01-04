import { BlogPost, getBlogPostData } from "../../lib/blogposts";
import { Suspense } from "react";
import Link from "next/link";

export default async function BlogPage() {
  const blogPosts = await getBlogPostData();

  return (
    <div className="bg-primary text-primary-content p-5 w-2/3 mx-auto my-5 shadow-lg">
      <h1 className="text-4xl py-5">The Andamio Blog</h1>
      <div className="grid md:grid-cols-3">
        <Suspense fallback={<div>Loading...</div>}>
          {blogPosts &&
            blogPosts.map((blogPost: BlogPost) => (
              <Link href={`/blog/${blogPost.title}`}>
                <div key={blogPost.title} className="p-3 border-primary-content">
                  <h2>
                    {blogPost.title}: {blogPost.frontmatter.title}
                  </h2>
                  <p>{blogPost.frontmatter.date}</p>
                  <p>{blogPost.frontmatter.author}</p>
                </div>
              </Link>
            ))}
        </Suspense>
      </div>
    </div>
  );
}
