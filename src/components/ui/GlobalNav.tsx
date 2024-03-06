"use client";

import Image from "next/image";
import Link from "next/link";

const GlobalNav = () => (
  <div className="card bg-primary text-primary-content font-mono shadow-xl md:mx-5 md:mt-5 z-10">
    <div className="navbar">
      <div className="flex flex-row w-full justify-between">
        <Link className="btn btn-ghost normal-case text-lg" href="/">
          <Image src="/andamio.png" height={40} width={40} alt="andamio" />
          <p className="hidden md:block">Andamio PBL Course Content Drafts</p>
        </Link>
        <Link href="/course">View Course</Link>
      </div>
    </div>
  </div>
);

export default GlobalNav;
