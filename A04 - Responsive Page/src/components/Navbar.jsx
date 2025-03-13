import React from "react";

function Navbar() {
  return (
    <nav className="flex flex-row items-center justify-between bg-gray-900 text-white px-8 py-2 shadow-sm">
      <h1 className="font-semibold">Champ</h1>
      <div className="flex flex-row gap-8 text-sm">
        <a className="transition hover:scale-105" href="#home">Home</a>
        <a className="transition hover:scale-105" href="#about">About Me</a>
        <a className="transition hover:scale-105" href="#gallery">Gallery</a>
      </div>
      <a className="rounded bg-green-800 px-4 py-2 text-white transition hover:scale-105">Contact</a>
    </nav>
  );
}

export default Navbar;
