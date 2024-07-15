import React from "react";
import Header from "../components/Header";
import Zinsrechner from "../components/Zinsrechner";

function Rechner() {
  return (
    <div className="">
      <Header />
      <div className="mt-[12vh] flex flex-col justify-center items-center">
        <div className="flex flex-col items-start">
          <h1 className="text-5xl inline-block">
            Zinsrechner: Online Zinsen berechnen
          </h1>
          <p className="w-1/2">
            Mit unserem Zinsrechner kannst du ganz einfach die Eckdaten einer
            Kapitalanlage ermitteln. Anfangs- und Endkapital, Zinssatz und
            Laufzeit können auf diese schnell herausgefunden werden.
          </p>
        </div>
        <br />
        <Zinsrechner />
      </div>
    </div>
  );
}

export default Rechner;
