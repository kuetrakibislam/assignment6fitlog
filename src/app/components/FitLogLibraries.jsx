import React from "react";
import FitLogCard from "./FitLogCard";

const FitLogLibraries = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    cache: "force-cache",
  });
  const fitlogData = await res.json();
  return (
    <div>
      <div className="bg-black min-h-2.5 text-white py-6 px-6">
        <h1 className="font-bold text-3xl">THE LIBRARY</h1>
        <p className="text-gray-400">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto bg-black px-6">
        {fitlogData.map((fit) => (
          <FitLogCard key={fit.id} fit={fit}></FitLogCard>
        ))}
      </div>
    </div>
  );
};

export default FitLogLibraries;
