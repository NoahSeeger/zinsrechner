import React from "react";
import Header from "../components/Header";

function Home() {
  return (
    <>
      <Header />
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl">
            Zinsrechner by <span className="text-blue-600">Noah</span>
          </h1>
          <h3 className="w-1/3 text-lg">
            Berechne die Entwicklung deines Geldes und informiere dich mit
            genauen Statistiken über den weiteren Verlauf deines Zinseszins
            Effekts.
          </h3>
          <a
            href="/rechner"
            className="bg-blue-600 text-white text-xl p-4 rounded-xl w-80 text-center"
          >
            Starte den Rechner
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
