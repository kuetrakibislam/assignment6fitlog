
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const isWorkoutsActive =
    pathname === "/workouts" || pathname.startsWith("/fitlog/");

  const isMyPlanActive = pathname === "/myplan";

  const getLinkClass = (isActive) =>
    `rounded-full px-6 py-2 font-semibold transition-colors duration-200 ${
      isActive
        ? "bg-[#1b2410] text-[#c6ff00] hover:bg-[#253117] hover:text-[#c6ff00]"
        : "bg-transparent text-gray-400 hover:bg-[#17191e] hover:text-white"
    }`;

  const links = (
    <>
      <li>
        <Link
          href="/workouts"
          aria-current={isWorkoutsActive ? "page" : undefined}
          className={getLinkClass(isWorkoutsActive)}
        >
          Workouts
        </Link>
      </li>

      <li>
        <Link
          href="/myplan"
          aria-current={isMyPlanActive ? "page" : undefined}
          className={getLinkClass(isMyPlanActive)}
        >
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <div className="border-b border-[#25262c] bg-[#0b0c0e] text-white">
      <div className="navbar min-h-20.5 px-4 sm:min-h-25 sm:px-6 lg:min-h-20.5 lg:px-8">

        {/* Left: Logo */}
        <div className="navbar-start gap-1 sm:gap-2">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              aria-label="Open menu"
              className="btn btn-ghost btn-square text-white hover:bg-[#1b1c20] lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-50 mt-3 w-52 gap-1 rounded-xl border border-[#292b32] bg-[#15161b] p-3 text-gray-300 shadow-xl"
            >
              {links}
            </ul>
          </div>

          {/* Dumbbell Logo */}
          <Link
            href="/workouts"
            aria-label="FITLOG Home"
            className="flex shrink-0 items-center text-[#c6ff00]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 sm:h-9 sm:w-9"
              viewBox="0 0 40 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 5l28 30M5 12l7-7M2 9l7-7M28 35l7-7M31 38l7-7" />
              <path d="M3 15l12-12M25 37l12-12" />
            </svg>
          </Link>

          {/* Brand Name */}
          <Link
            href="/"
            className="btn btn-ghost h-auto min-h-0 px-1 text-xl font-black tracking-wide text-white hover:bg-transparent sm:text-2xl"
          >
            FITLOG
          </Link>
        </div>

        {/* Center: Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal items-center gap-1 px-1">
            {links}
          </ul>
        </div>

        {/* Right: Plan and Saved */}
        <div className="navbar-end gap-2 sm:gap-5 lg:gap-8">
          <Link
            href="/myplan"
            className="flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white sm:gap-3 sm:text-base"
          >
            <span>Plan</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#c6ff00] text-xs font-bold text-black sm:h-7 sm:w-7 sm:text-sm">
              0
            </span>
          </Link>

          <Link
            href="/myplan?saved=true"
            className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white sm:gap-3 sm:text-base"
          >
            <span>Saved</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#41434c] text-xs text-gray-300 sm:h-7 sm:w-7 sm:text-sm">
              0
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
