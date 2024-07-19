import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Rechner from "./pages/Rechner";
import About from "./pages/About";
import NoPage from "./pages/NoPage";

import Zinsrechner from "./components/Zinsrechner";
import Header from "./components/Header";

function InterestCalculator() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route index path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/rechner" element={<Rechner />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default InterestCalculator;
