
import React from "react";

const Hero = () => {
  return (
    <main
      id="home"
      className="min-h-[calc(100vh-116px)] bg-[#0b0c0e] px-4 pb-4 pt-8 sm:px-6 sm:pt-10 lg:px-[34px] lg:pb-3 lg:pt-[68px]"
    >
      <section
        id="workouts"
        className="hero min-h-0 items-stretch overflow-hidden rounded-[24px] border border-[#292b34] bg-[#15161b] text-white"
      >
        <div className="hero-content flex w-full max-w-none flex-col gap-8 px-6 py-10 sm:px-10 lg:flex-row-reverse lg:gap-[30px] lg:px-20 lg:py-[65px]">

          {/* Right: Workout Image */}
          <div className="flex w-full items-center justify-center lg:w-[42%]">
            <img
              src="/banner.png"
              alt="Anatomical illustration of a person performing a seated gym curl"
              className="h-auto max-h-[300px] w-full max-w-[360px] object-contain sm:max-h-[370px] lg:max-h-[480px] lg:max-w-[510px]"
            />
          </div>

          {/* Left: Hero Text */}
          <div className="w-full lg:w-[58%]">

            <p className="mb-6 text-xs font-extrabold tracking-[1.4px] text-[#c6ff00] sm:mb-8 sm:text-[15px]">
              WORKOUT LIBRARY
            </p>

            <h1 className="text-[clamp(36px,4.1vw,76px)] font-black uppercase leading-[0.99] tracking-[-1.5px] text-[#f8f8fa] sm:tracking-[-2px]">
              TRAIN WITH INTENT. LOG
              <br className="hidden sm:block" />
              {" "}EVERY SET.
            </h1>

            <p className="mb-7 mt-5 max-w-[700px] text-[15px] leading-[1.7] text-[#a0a4b0] sm:mb-9 sm:mt-6 sm:text-lg lg:text-[21px] lg:leading-[1.6]">
              FitLog is a dark, no-nonsense gym companion:
              pick a lift, lock it into today's plan, and
              watch the week's work add up.
            </p>

            <a
              href="#workout-library"
              className="btn h-auto min-h-[54px] rounded-[9px] border-0 bg-[#c6ff00] px-7 text-sm font-extrabold text-black shadow-none hover:border-0 hover:bg-[#d7ff4a] hover:text-black sm:min-h-[58px] sm:px-[34px] sm:text-base"
            >
              BROWSE WORKOUTS
            </a>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
