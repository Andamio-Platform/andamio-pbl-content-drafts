import LessonList from "./LessonList";
import { Suspense } from "react";
import Loading from "../Loading";
import styles from "./CoursePage.module.css";
import ModuleBreadcrumbs from "./module/[moduleId]/[modulePage]/ModuleBreadcrumbs";
import CourseOutlineOffChain from "./CourseOutlineOffChain";

export const dynamic = "force-dynamic";

export default async function CoursePage() {
  const AllLessons = await LessonList();
  // const courseOutline = await CourseOutline();
  const courseOutlineOffChain = await CourseOutlineOffChain();

  return (
    <main className="items-center justify-center font-extrabold text-4xl" style={{ minHeight: "calc(100vh - 5rem)" }}>
      <div className="mb-5">
        <ModuleBreadcrumbs frontmatter={undefined} moduleId={undefined} />
      </div>
      {/* <div className={styles.coursePageContainer}>
        <Suspense fallback={<Loading />}>{courseOutline}</Suspense>
      </div> */}
      <Suspense fallback={<Loading />}>{courseOutlineOffChain}</Suspense>

      <Suspense fallback={<Loading />}>{AllLessons}</Suspense>
    </main>
  );
}
