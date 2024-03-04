import {
  CourseOutline,
  CourseModule,
  queryCourseReferenceInfo,
} from "@andamiojs/core";
import courseOutline from "../../andamio/data/course.json";
import { andamioConfig } from "../../andamio/config";
import CourseModuleDetailsCardOffChain from "./CourseModuleDetailsCardOffChain";
import { getModuleOverviewData } from "../../lib/getModuleOverviewData";


export default async function CourseOutlineOffChain() {
  const moduleOverviewValues = await getModuleOverviewData();

  return (
    <div>
      <div className="card p-5 border border-primary bg-secondary text-secondary-content shadow-xl">
      <div className="pt-10 pb-5 text-2xl text-secondary-content">{courseOutline.courseTitle}</div>
      <h3 className="pb-3 text-xl text-secondary-content">Authors: {courseOutline.authors}</h3>
        <p className="font-medium text-base py-2">Welcome to Andamio!</p>
        <p className="font-medium text-base py-2">Andamio is a new kind of platform for learning and contribution management, and the best way to learn about it is by using it. This course is a hands-on example of how Andamio works.</p>
        <p className="font-medium text-base py-2">A Project-Based Learning course like this one is organized into <span className="font-bold">Course Modules</span>. Each module is numbered. Every course module includes a list of <span className="font-bold">Student Learning Targets</span> that describe you will know and be able to do after completing this course.</p>
        <p className="font-medium text-base py-2">On this page, you can read the outline of this Andamio Project-Based Learning course. Access to the course is free and open, and anyone can start learning any time.</p>
      </div>
      {courseOutline.modules.map((module: CourseModule, index: number) => (
        <CourseModuleDetailsCardOffChain courseJSON={module} publishedContent={moduleOverviewValues.modules} key={module.id} />
      ))}
    </div>
  );
}
