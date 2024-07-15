import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between items-center bg-blue-600 text-white p-5 rounded-xl w-[95vw] fixed left-[50%] top-5 -translate-x-1/2">
      <Link to="/home">
        <img
          src="logo.png"
          alt="Logo"
          className="w-10 hover:scale-110 transition-transform cursor-pointer"
        />
      </Link>
      <div className="flex gap-12">
        <Link to={"/rechner"}>Rechner</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/settings"}>Settings</Link>
      </div>
      <h1>Login</h1>
    </header>
  );
}

export default Header;
