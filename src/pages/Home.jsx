import React from "react";
import Header from "../components/Header";
import DemoChart from "../components/DemoChart";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="mt-20 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center lg:text-left lg:col-span-7">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                Zinsrechner by <span className="text-blue-600">Noah</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Entdecke unseren präzisen Zinsrechner und erhalte detaillierte
                Statistiken zur Entwicklung deines Geldes. Verstehe den
                Zinseszinseffekt wie nie zuvor –{" "}
                <span className="text-blue-600">klar, einfach, präzise</span>.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/rechner"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                  >
                    Starte den Rechner
                    <svg
                      className="w-5 h-5 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-5">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <DemoChart />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
