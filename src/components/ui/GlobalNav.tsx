"use client";

import { CardanoWallet } from "@meshsdk/react";
import Image from "next/image";
import Link from "next/link";
import { andamioConfig } from "../../andamio/config";

const GlobalNav = () => (
  <div className="card bg-primary text-primary-content font-mono shadow-xl md:mx-5 md:mt-5 z-10">
    <div className="navbar">
      <div className="flex justify-between">
        <Link className="btn btn-ghost normal-case text-lg" href="/">
          <Image src="/andamio.png" height={40} width={40} alt="andamio" />
          <p className="hidden md:block">{andamioConfig.title}</p>
        </Link>
      </div>
      <ul className="menu menu-horizontal px-1">
        <li className="text-info font-bold">
          <Link href="/catalyst">Catalyst Fund 11</Link>
        </li>
        <li className="hidden md:block">
          <Link href={"/course"}>{`Start ${andamioConfig.title} Course`}</Link>
        </li>
        {/* <li>
          <Link href={"/course-management/roles/learner/dashboard"}>Learner Dashboard</Link>
        </li> */}
        {process.env.NEXT_PUBLIC_EXPERIMENTAL_FEATURES?.split(",").includes("cm") && (
          <li className="hidden md:block">
            <Link href={"/course-management"}>Course Management</Link>
          </li>
        )}
        {process.env.NEXT_PUBLIC_EXPERIMENTAL_FEATURES?.split(",").includes("pm") && (
          <li className="hidden md:block">
            <Link href={"/contributor-platform"}>Contributor Platform</Link>
          </li>
        )}
      </ul>
      <div className="ml-5">
        <div className="hidden md:block">
          <CardanoWallet />
        </div>
      </div>
    </div>
  </div>
);

export default GlobalNav;
