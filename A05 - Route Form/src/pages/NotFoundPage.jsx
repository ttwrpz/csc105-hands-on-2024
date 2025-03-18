import React from "react";
import { NavLink } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-16 text-center font-mono">
      <div className="spacey-8">
        <h1 className="text-7xl font-bold">Error 404</h1>
        <h2 className="text-5xl">Page Not Found</h2>
      </div>
      <NavLink
        to="/"
        className="border-2 px-4 py-2 font-semibold transition hover:scale-105"
      >
        Back to Home
      </NavLink>
    </div>
  );
}

export default NotFoundPage;
