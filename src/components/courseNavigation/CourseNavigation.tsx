"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation({ sortedPaths }: { sortedPaths: string[] }) {
  const path = usePathname();
  let currentPath = "";
  if (path?.includes("/course/module/")) {
    const startIndex = path.indexOf("/course/module/") + "/course/module/".length;
    currentPath = path.substring(startIndex);
  }
  const index = sortedPaths.indexOf(currentPath);

  let prePath = null;
  let nextPath = null;

  if (index !== -1) {
    if (index > 0) {
      prePath = sortedPaths[index - 1];
    }
    if (index < sortedPaths.length - 1) {
      nextPath = sortedPaths[index + 1];
    }
  }

  let prePathString = null;
  let nextPathString = null;

  const lessonPattern = /^\d{3}\/\d{4}$/;
  const assignmentPattern = /^\d{3}\/assignment\d{3}$/;
  const overviewPattern = /^\d{3}\/overview$/;

  if (prePath) {
    if (lessonPattern.test(prePath)) {
      prePathString = `Lesson ${prePath.substring(4, 7)}` + "." + `${prePath.substring(7)}`;
    } else if (assignmentPattern.test(prePath)) {
      prePathString = `Assignment ${prePath.substring(0, 3)}`;
    } else if (overviewPattern.test(prePath)) {
      prePathString = `Module ${prePath.substring(0, 3)} Overview`;
    } else {
      prePathString = prePath;
    }
  }

  if (nextPath) {
    if (lessonPattern.test(nextPath)) {
      nextPathString = `Lesson ${nextPath.substring(4, 7)}` + "." + `${nextPath.substring(7)}`;
    } else if (assignmentPattern.test(nextPath)) {
      nextPathString = `Assignment ${nextPath.substring(0, 3)}`;
    } else if (overviewPattern.test(nextPath)) {
      nextPathString = `Module ${nextPath.substring(0, 3)} Overview`;
    } else {
      nextPathString = nextPath;
    }
  }

  console.log("prepath:", prePath);
  console.log("nextpath:", nextPath);

  return (
    <nav className="flex flex-row space-x-24">
      <div key="back">
        {prePath && (
          <Link href={`/course/module/${prePath}`}>
            <div className="btn btn-info hover:scale-105">&lt;&lt; {prePathString}</div>
          </Link>
        )}
      </div>
      <div key="fwd">
        {nextPath && (
          <Link href={`/course/module/${nextPath}`}>
            <div className="btn btn-info hover:scale-105">{nextPathString} &gt;&gt;</div>
          </Link>
        )}
      </div>
    </nav>
  );
}
