import Link from "next/link";
import React from "react";

const FitLogCard = ({ fit }) => {
  const {
    id,
    name,
    image,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = fit;

  return (
    <div>
      <Link href={`/details/${id}`}>
        <div className="card overflow-hidden rounded-xl border border-[#292b34] bg-[#15161b] text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:border-[#c6ff00]/50">
          {/* Workout Image */}
          <figure className="h-40 w-full overflow-hidden">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover"
            />
          </figure>

          {/* Card Body */}
          <div className="card-body gap-2 p-4">
            {/* Muscle Group Badges */}
            <div className="flex flex-wrap gap-2">
              {muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="badge h-5 border-none bg-[#c6ff00] px-2 text-[10px] font-extrabold uppercase text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Workout Name */}
            <h2 className="card-title mt-1 text-base font-extrabold uppercase leading-tight text-white">
              {name}
            </h2>

            {/* Equipment */}
            <p className="text-xs text-gray-400">{equipment}</p>

            {/* Divider */}
            <div className="my-1 border-t border-[#292b34]" />

            {/* Workout Stats */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] text-gray-400">
              <span className="flex items-center gap-1">
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
                {duration} min
              </span>

              <span className="flex items-center gap-1">
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13.5 2.5c.4 3-1 4.5-2.4 6.2C9.7 10.3 9 11.5 9 13a3 3 0 0 0 6 0c0-1-.4-2-1.1-3.1 3.1 1.8 5.1 4.7 5.1 7.6a7 7 0 0 1-14 0c0-3.2 1.7-5.7 4.1-8.4C11.2 6.8 12.3 4.8 13.5 2.5Z" />
                </svg>
                {caloriesBurned} kcal
              </span>

              <span className="flex items-center gap-1">
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
                </svg>
                {rating}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FitLogCard;
