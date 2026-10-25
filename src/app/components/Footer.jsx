
import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal flex flex-row items-center justify-between bg-neutral px-5 py-5">

      {/* Logo - Left Align */}
      <div className="flex items-center">
        <img
          src="/logo.png"
          width={20}
          height={20}
          alt="FitLog logo"
        />
      </div>

      {/* Copyright - Right Align */}
      <p className="text-right text-sm text-gray-400">
        {/* © {new Date().getFullYear()} FitLog - Workout Library.
        Train hard, log honest. */}
        © 2026 FitLog - Workout Library.
        Train hard, log honest.
      </p>

    </footer>
  );
};

export default Footer;
