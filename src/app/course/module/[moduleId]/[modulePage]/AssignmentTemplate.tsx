import React, { Suspense } from "react";
import Loading from "../../../../Loading";
import styles from "../../../CoursePage.module.css";
import { TemplateProps } from "./common";

export const dynamic = "force-dynamic";

const AssignmentTemplate = async ({ frontmatter, moduleId, page, children }: TemplateProps) => {
  return (
    <div className={styles.coursePageContainer}>
      <div className="card bg-secondary text-secondary-content shadow-xl p-5">
        <h3 className="">{frontmatter.title}</h3>
        <h1 className="text-primary text-2xl">{frontmatter.description}</h1>

        {children}
      </div>
    </div>
  );
};

export default AssignmentTemplate;
