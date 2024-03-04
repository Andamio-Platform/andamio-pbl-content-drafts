import { CourseModule, CourseReferenceInfo, hashCourseModule, ModuleOverview, SLT } from "@andamiojs/core";
import Image from "next/image";
import Link from "next/link";
import AddLearnerPolicyIDModal from "../../components/modals/course/AddLearnerPolicyIDModal";
import BurnCourseModuleTokenModal from "../../components/modals/course/BurnCourseModuleTokenModal";
import CommitToAssignmentModal from "../../components/modals/course/CommitToAssignmentModal";
import MintModuleTokenModal from "../../components/modals/course/MintModuleTokenModal";
import getAssignment from "./utils/getAssignment";
import getOnchainCourseModule from "./utils/getOnchainCourseModule";
import getPublishedCourseContent from "./utils/getPublishedCourseContent";

export default function CourseModuleDetailsCardOffChain(props: {
  courseJSON: CourseModule;
  publishedContent: ModuleOverview[];
}) {
  const modulePublished = getPublishedCourseContent(props.courseJSON, props.publishedContent);

  return (
    <div
      className="card border border-primary bg-secondary text-secondary-content shadow-xl my-5 p-5"
      key={props.courseJSON.id}
    >
      <div className="flex flex-col py-1 justify-between">
        <h5 className="text-accent text-sm font-bold">Module {props.courseJSON.id}</h5>
        <h3 className="text-lg">{props.courseJSON.title}</h3>
      </div>
      <div className="p-1 text-lg">
        <ul className="list-disc pl-5">
          {props.courseJSON.slts.map((slt: SLT, index: number) => (
            <li className="font-light" key={index}>
              {slt.id}: {slt.slt}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
