
import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import WorkoutActions from "./WorkoutActions";

const FitlogDetails = async ({ params }) => {
  // Next.js App Router: params is asynchronous in Next.js 15+
  const { fitid } = await params;

  let fitlogData;

  try {
    const res = await fetch(
      `https://api.abcz.workers.dev/api/fitlog/${encodeURIComponent(fitid)}`,
      { cache: "no-store" }
    );

    if (res.status === 404) {
      notFound();
    }

    if (!res.ok) {
      throw new Error(`API request failed: ${res.status}`);
    }

    fitlogData = await res.json();
  } catch (error) {
    console.error("Failed to fetch workout details:", error);

    return (
      <main className="flex min-h-[60vh] items-center justify-center bg-[#0b0c0e] px-5 text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Unable to load workout</h1>
          <p className="mt-3 text-gray-400">
            Please try again later.
          </p>
        </div>
      </main>
    );
  }

  if (!fitlogData || !fitlogData.name) {
    notFound();
  }

  const {
    id,
    name,
    image,
    muscleGroups = [],
    equipment,
    difficulty,
    duration,
    caloriesBurned,
    sets,
    reps,
    rating,
    description,
    instructions = [],
  } = fitlogData;

  const stats = [
    { label: "Equipment", value: equipment },
    { label: "Difficulty", value: difficulty },
    { label: "Sets", value: sets },
    { label: "Reps", value: reps },
    { label: "Duration", value: `${duration} min` },
    { label: "Calories", value: `${caloriesBurned} kcal` },
    { label: "Rating", value: rating },
  ];

  return (
    <main className="min-h-screen bg-[#0b0c0e] px-4 py-8 text-white sm:px-6 lg:px-10 lg:py-12">
      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-14">

        {/* Left: Workout Image */}
        <div className="overflow-hidden rounded-2xl border border-[#292b34] bg-[#15161b]">
          {image ? (
            <img
              src={image}
              alt={name}
              className="block h-auto max-h-212.5 min-h-75 w-full object-cover sm:min-h-112.5 lg:min-h-150"
            />
          ) : (
            <div className="flex min-h-87.5 items-center justify-center text-gray-400">
              No workout image available
            </div>
          )}
        </div>

        {/* Right: Workout Information */}
        <section className="flex min-w-0 flex-col gap-7">

          {/* Title and Description */}
          <div>
            <h1 className="text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-[40px]">
              {name}
            </h1>

            <p className="mt-3 text-base leading-6 text-gray-400 sm:text-lg">
              {description}
            </p>

            {/* Muscle Groups */}
            <div className="mt-5 flex flex-wrap gap-2">
              {muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="badge h-7 border-0 bg-[#c6ff00] px-4 font-semibold text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>
          </div>

          {/* Workout Stats */}
          <div className="overflow-hidden rounded-2xl border border-[#252b37] bg-[#151821]">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex min-h-12.5 items-center justify-between gap-4 px-4 py-3 sm:px-6 ${
                  index !== stats.length - 1
                    ? "border-b border-[#252b37]"
                    : ""
                }`}
              >
                <span className="text-xs font-bold uppercase tracking-wide text-gray-400 sm:text-[13px]">
                  {stat.label}
                </span>

                <span className="text-right text-sm text-gray-200 sm:text-base">
                  {stat.value ?? "—"}
                </span>
              </div>
            ))}
          </div>

          {/* Instructions */}
          <div>
            <h2 className="text-lg font-extrabold uppercase tracking-wide text-white">
              Instructions
            </h2>

            {instructions.length > 0 ? (
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-6 text-gray-300 sm:text-base">
                {instructions.map((instruction, index) => (
                  <li key={`${id}-${index}`} className="pl-1">
                    {instruction}
                  </li>
                ))}
              </ol>
            ) : (
              <p className="mt-3 text-sm text-gray-400">
                No instructions available.
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <WorkoutActions fit={fitlogData} />

        </section>
      </div>
    </main>
  );
};

export default function FitlogDetailsPage({params}){
  return(
    <Suspense fallback={<p>Loading ....</p>}>
        <FitlogDetails params = {params}></FitlogDetails>
    </Suspense>
  );
}
