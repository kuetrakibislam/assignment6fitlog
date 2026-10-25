
"use client";

import React, { useState } from "react";

const WorkoutActions = ({ fit }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="flex flex-wrap items-center gap-3 pt-1">

      {/* Add to Plan */}
      <button
        type="button"
        onClick={() => setIsAdded((previous) => !previous)}
        aria-pressed={isAdded}
        className={`btn h-12 min-h-12 rounded-xl border-0 px-5 text-sm font-semibold shadow-none sm:px-6 ${
          isAdded
            ? "bg-[#a5d600] text-black hover:bg-[#b8ed00]"
            : "bg-[#c6ff00] text-black hover:bg-[#d7ff4a]"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M16 3v4M8 3v4M3 11h18M12 14v4M10 16h4" />
        </svg>

        {isAdded ? "Added to plan" : "Add to today's plan"}
      </button>

      {/* Save for Later */}
      <button
        type="button"
        onClick={() => setIsSaved((previous) => !previous)}
        aria-pressed={isSaved}
        className="btn h-12 min-h-12 rounded-xl border border-[#353b49] bg-transparent px-5 text-sm font-medium text-gray-200 shadow-none hover:border-[#c6ff00] hover:bg-[#17191e] hover:text-white sm:px-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill={isSaved ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21l-6-4-6 4V4.5Z" />
        </svg>

        {isSaved ? "Saved" : "Save for later"}
      </button>
    </div>
  );
};

export default WorkoutActions;
