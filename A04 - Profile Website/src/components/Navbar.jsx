import React from "react";

function Navbar() {
  return (
    <nav className="flex flex-col items-center justify-between gap-8 bg-gray-900 px-8 py-4 text-white shadow-sm sm:flex-row sm:py-2">
      <h1 className="font-semibold">Champ</h1>
      <div className="flex flex-col gap-8 text-center text-sm sm:flex-row">
        <a className="transition hover:scale-105" href="#home">
          Home
        </a>
        <a className="transition hover:scale-105" href="#about">
          About Me
        </a>
        <a className="transition hover:scale-105" href="#gallery">
          Gallery
        </a>
      </div>
      <a className="rounded bg-green-800 px-4 py-2 text-white transition hover:scale-105">
        Contact
      </a>
    </nav>
  );
}

export default Navbar;
