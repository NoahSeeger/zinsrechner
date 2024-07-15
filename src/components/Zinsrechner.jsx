import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Zinsrechner() {
  const [startCapital, setStartCapital] = useState(1000);
  const [monthlySavingRate, setMonthlySavingRate] = useState(100);
  const [annualInterestRate, setAnnualInterestRate] = useState(3);
  const [compoundingFrequency, setCompoundingFrequency] = useState("jährl");
  const [years, setYears] = useState(5);
  const [endCapitalArray, setEndCapitalArray] = useState([
    { year: 1, capital: "412" },
    { year: 2, capital: "5000" },
  ]);

  useEffect(() => {
    // Function to calculate end capital
    const calculateEndCapital = (
      startCapital,
      monthlySavingRate,
      annualInterestRate,
      compoundingFrequency,
      years
    ) => {
      const r = annualInterestRate / 100;
      let n;
      if (compoundingFrequency === "jährl") {
        n = 1;
      } else if (compoundingFrequency === "monatl") {
        n = 12;
      } else if (compoundingFrequency === "tägl") {
        n = 365;
      }

      const t = years;

      const P = startCapital;
      const S = monthlySavingRate;

      const compoundedFactor = Math.pow(1 + r / n, n * t);
      const totalCapital =
        P * compoundedFactor +
        S * ((compoundedFactor - 1) / (r / n)) * (1 + r / n);

      return totalCapital.toFixed(0);
    };

    // Function to update endCapitalArray
    const updateEndCapitalArray = () => {
      const newArray = [];
      for (let i = 1; i <= years; i++) {
        const result = calculateEndCapital(
          startCapital,
          monthlySavingRate,
          annualInterestRate,
          compoundingFrequency,
          i
        );
        newArray.push({ year: i, capital: result });
      }
      setEndCapitalArray(newArray);
    };

    // Call update function initially and whenever dependencies change
    updateEndCapitalArray();
  }, [
    startCapital,
    monthlySavingRate,
    annualInterestRate,
    compoundingFrequency,
    years,
  ]);

  const handleCalculate = () => {
    // This function can be used to recalculate if needed
    // You may customize this function further as per your requirements
    // For now, we are using useEffect to handle calculations
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="bg-gray-300 w-[60vw] p-5 rounded-xl flex flex-col gap-4">
        <h2 className="text-xl">💰 Zinsrechner</h2>
        <div className="flex flex-col">
          <label>Anfangskapital: </label>
          <input
            className="px-2 p-1 border-[1px] border-gray-300 rounded-md focus:border-blue-400"
            type="text"
            value={startCapital}
            onChange={(e) => setStartCapital(parseFloat(e.target.value))}
          />
        </div>
        <div className="flex flex-col">
          <label>Monatliche Sparrate: </label>
          <input
            className="px-2 p-1 border-[1px] border-gray-300 rounded-md focus:border-blue-400"
            type="number"
            value={monthlySavingRate}
            onChange={(e) => setMonthlySavingRate(parseFloat(e.target.value))}
          />
        </div>
        <div className="flex flex-col">
          <label>Zinsrate pro Jahr in %: </label>
          <input
            className="px-2 p-1 border-[1px] border-gray-300 rounded-md focus:border-blue-400"
            type="number"
            step="1"
            value={annualInterestRate}
            onChange={(e) => setAnnualInterestRate(parseFloat(e.target.value))}
          />
        </div>
        <div className="flex flex-col">
          <label>Ausschüttungen (pro Jahr): </label>
          <div className="flex">
            <label htmlFor="jährl">Jährlich</label>
            <input
              type="radio"
              value="jährl"
              name="ausschüttungen"
              onChange={(e) => setCompoundingFrequency(e.target.value)}
            />
            <label htmlFor="monatl">Monatlich</label>
            <input
              type="radio"
              value="monatl"
              name="ausschüttungen"
              onChange={(e) => setCompoundingFrequency(e.target.value)}
            />
            <label htmlFor="tägl">Täglich</label>
            <input
              type="radio"
              value="tägl"
              name="ausschüttungen"
              onChange={(e) => setCompoundingFrequency(e.target.value)}
            />
            <span>{compoundingFrequency}</span>
          </div>

          {/* <input
            className="px-2 p-1 border-[1px] border-gray-300 rounded-md focus:border-blue-400"
            type="number"
            value={compoundingFrequency}
            onChange={(e) =>
              setCompoundingFrequency(parseFloat(e.target.value))
            }
          /> */}
        </div>
        <div className="flex flex-col">
          <label>Jahre: </label>
          <input
            min="1"
            max="100"
            className="px-2 p-1 border-[1px] border-gray-300 rounded-md focus:border-blue-400"
            type="number"
            value={years}
            onChange={(e) =>
              parseFloat(e.target.value) >= 1
                ? setYears(parseFloat(e.target.value))
                : setYears(1)
            }
          />
        </div>
        {/* <button onClick={handleCalculate}>Berechnen</button> */}

        <div className="h-full w-full">
          <ResponsiveContainer width="100%" height="100%" aspect={500 / 300}>
            <AreaChart
              data={endCapitalArray}
              margin={{
                top: 10,
                right: 10,
                left: 10,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis
                domain={[
                  0,
                  Math.floor(
                    endCapitalArray[endCapitalArray.length - 1].capital
                  ),
                ]}
              />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="capital"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white">
          <BarChart width={550} height={450} data={endCapitalArray}>
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="year" />
            <YAxis
              domain={[
                0,
                Math.floor(
                  endCapitalArray[endCapitalArray.length - 1].capital * 1.2
                ),
              ]}
            />
            <Tooltip />
            <Bar dataKey="capital" fill="#f87171" />
          </BarChart>
        </div>
      </div>
    </div>
  );
}

export default Zinsrechner;
