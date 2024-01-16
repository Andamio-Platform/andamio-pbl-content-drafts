// import { Metadata } from "next";
import { TransformedPageContent } from "../../course/module/[moduleId]/[modulePage]/transformedPageContent";
import { getBlogPageContent } from "../../../lib/blogposts";
import Markdoc from "@markdoc/markdoc";
import { parseMarkdocFrontmatter } from "../../../utils/markdown";
import styles from "./Blog.module.css";

export type Props = {
  blogPostId: string;
};

function getFrontmatter(blogPostId: string) {
  const content = getBlogPageContent(blogPostId);
  const pageAST = Markdoc.parse(content);
  const frontmatter = parseMarkdocFrontmatter(pageAST);

  return frontmatter;
}

// async function generateMetadata({ params }: { params: Props }): Promise<Metadata> {
//   const frontmatter = getFrontmatter(params);

//   if (frontmatter) {
//     return {
//       title: frontmatter.title,
//     };
//   } else {
//     return {
//       title: "A Blog Post",
//     };
//   }
// }

export default function Page({ params }: { params: Props }) {
  const content = getBlogPageContent(params.blogPostId);
  const data = getFrontmatter(params.blogPostId);

  return (
    <div className="bg-primary text-primary-content p-5 m-5 shadow-lg grid grid-cols-3">
      <div className="p-5">
        <h1 className="text-4xl leading-[4rem] font-bold">{data?.title}</h1>
        {/* <h3 className="text-xl leading-[4rem]">{data?.date}</h3> */}
        <p>{data?.author}</p>
      </div>
      <div className="col-span-2 p-5">
        <div className={styles.blogPostContainer}>{<TransformedPageContent content={content} />}</div>
      </div>
    </div>
  );
}
