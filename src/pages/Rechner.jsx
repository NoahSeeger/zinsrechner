import React from "react";
import Header from "../components/Header";
import Zinsrechner from "../components/Zinsrechner";

function Rechner() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Zinsrechner: Online Zinsen berechnen
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-500">
            Mit unserem Zinsrechner kannst du ganz einfach die Eckdaten einer
            Kapitalanlage ermitteln. Anfangs- und Endkapital, Zinssatz und
            Laufzeit können auf diese Weise schnell herausgefunden werden.
          </p>
        </div>
        <Zinsrechner />
      </main>
    </div>
  );
}

export default Rechner;
