import React from "react";

const Header = () => {
  return (
    <>
      <header className="bg-pink-500 text-white p-4">
        <h1 className="text-3xl font-bold">My todo app</h1>
        <nav className="flex space-x-4">
          <a href="#" className="hover:underline">
            Mes taches
          </a>
        </nav>
      </header>
    </>
  );
};

export default Header;
