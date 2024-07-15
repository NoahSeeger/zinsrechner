import React from "react";

function Header() {
  return (
    <header className="flex justify-between bg-blue-600 text-white p-5 rounded-xl w-[95vw] fixed left-[50%] top-5 -translate-x-1/2">
      <a href="/home">Logo</a>
      <div className="flex gap-12">
        <a href="/rechner">Rechner</a>
        <a href="/login">About</a>
        <a href="/register">Settings</a>
      </div>
      <h1>Login</h1>
    </header>
  );
}

export default Header;
