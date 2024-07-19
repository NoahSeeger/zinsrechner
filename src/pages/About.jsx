import React from "react";
import Header from "../components/Header";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import noah from "../assets/noah.jpg";

function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-8 text-center">
            Über das Projekt & den Entwickler
          </h1>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Projekt-Sektion */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Das Projekt
              </h2>
              <p className="text-gray-600 mb-4">
                Der Zinsrechner ist ein Projekt, das entwickelt wurde, um
                Nutzern eine einfache und intuitive Möglichkeit zu bieten,
                Zinsberechnungen durchzuführen. Es kombiniert präzise
                Berechnungen mit einer benutzerfreundlichen Oberfläche und
                aussagekräftigen Visualisierungen.
              </p>
              <p className="text-gray-600 mb-4">Hauptmerkmale:</p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Genaue Zinsberechnung mit Zinseszinseffekt</li>
                <li>
                  Interaktive Grafiken zur Darstellung des Kapitalwachstums
                </li>
                <li>Anpassbare Parameter für verschiedene Szenarien</li>
                <li>Responsive Design für die Nutzung auf allen Geräten</li>
              </ul>
              <p className="text-gray-600">
                Dieses Projekt wurde mit React und Tailwind CSS entwickelt, um
                eine moderne und effiziente Web-Anwendung zu schaffen.
              </p>
            </section>

            {/* Entwickler-Sektion */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Der Entwickler
              </h2>
              <div className="flex items-center mb-4">
                <img
                  src={noah}
                  alt="Noah"
                  className="w-24 h-24 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Noah</h3>
                  <p className="text-gray-600">Full-Stack Entwickler</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Hallo! Ich bin Noah, der Entwickler hinter diesem Zinsrechner.
                Als leidenschaftlicher Programmierer und Finanz-Enthusiast habe
                ich dieses Projekt ins Leben gerufen, um komplexe
                Finanzberechnungen für jeden zugänglich zu machen.
              </p>
              <p className="text-gray-600 mb-6">
                Mein Ziel ist es, Technologie zu nutzen, um praktische Lösungen
                für alltägliche Probleme zu schaffen. Ich bin immer auf der
                Suche nach neuen Herausforderungen und Möglichkeiten, meine
                Fähigkeiten zu erweitern.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/NoahSeeger/zinsrechner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="mailto:nomail.com"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <FaEnvelope size={24} />
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default About;
