import Link from "next/link";

export default function CourseBreadcrumb() {

  return (
    <div className="card bg-secondary text-secondary-content shadow-xl px-4 py-2 font-mono">
      <div className="breadcrumbs">
        <ul>
          <li>
            <Link href="/course" className="btn btn-sm btn-info text-sm uppercase">
              Andamio PBL
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
