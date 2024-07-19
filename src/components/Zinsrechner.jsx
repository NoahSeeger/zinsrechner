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
    { year: 1, capital: "412", interest: "12" },
    { year: 2, capital: "5000", interest: "1000" },
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

      const interest = (totalCapital - P - S * t).toFixed(0);

      return [totalCapital.toFixed(0), interest];
    };

    // Function to update endCapitalArray
    const updateEndCapitalArray = () => {
      const newArray = [];
      for (let i = 1; i <= years; i++) {
        const [capital, interest] = calculateEndCapital(
          startCapital,
          monthlySavingRate,
          annualInterestRate,
          compoundingFrequency,
          i
        );
        console.log(capital, interest);
        newArray.push({
          year: i,
          capital: capital,
          interest: interest,
        });
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
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            💰 Zinsrechner
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <InputField
              label="Anfangskapital"
              value={startCapital}
              onChange={(e) => setStartCapital(parseFloat(e.target.value))}
            />
            <InputField
              label="Monatliche Sparrate"
              value={monthlySavingRate}
              onChange={(e) => setMonthlySavingRate(parseFloat(e.target.value))}
            />
            <InputField
              label="Zinsrate pro Jahr in %"
              value={annualInterestRate}
              onChange={(e) =>
                setAnnualInterestRate(parseFloat(e.target.value))
              }
              step="0.1"
            />
            <InputField
              label="Jahre"
              value={years}
              onChange={(e) =>
                parseFloat(e.target.value) >= 1
                  ? setYears(parseFloat(e.target.value))
                  : setYears(1)
              }
              min="1"
              max="100"
            />
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ausschüttungen (pro Jahr)
            </label>
            <div className="flex space-x-4">
              <RadioButton
                id="jaehrl"
                value="jährl"
                label="Jährlich"
                checked={compoundingFrequency === "jährl"}
                onChange={(e) => setCompoundingFrequency(e.target.value)}
              />
              <RadioButton
                id="monatl"
                value="monatl"
                label="Monatlich"
                checked={compoundingFrequency === "monatl"}
                onChange={(e) => setCompoundingFrequency(e.target.value)}
              />
              <RadioButton
                id="taegl"
                value="tägl"
                label="Täglich"
                checked={compoundingFrequency === "tägl"}
                onChange={(e) => setCompoundingFrequency(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-8">
            <ChartSection
              title="Entwicklung des Kapitals"
              chart={
                <AreaChart
                  data={endCapitalArray}
                  margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
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
                    stroke="#4F46E5"
                    fill="#818CF8"
                  />
                </AreaChart>
              }
            />

            <ChartSection
              title="Jährliche Steigerung des Kapitals"
              chart={
                <BarChart data={endCapitalArray}>
                  <XAxis dataKey="year" />
                  <YAxis
                    domain={[
                      0,
                      Math.floor(
                        endCapitalArray[endCapitalArray.length - 1].interest *
                          1.2
                      ),
                    ]}
                  />
                  <Tooltip />
                  <Bar dataKey="interest" fill="#F87171" />
                </BarChart>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function InputField({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        type="number"
        {...props}
      />
    </div>
  );
}

function RadioButton({ id, label, ...props }) {
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="radio"
        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
        {...props}
      />
      <label htmlFor={id} className="ml-2 block text-sm text-gray-900">
        {label}
      </label>
    </div>
  );
}

function ChartSection({ title, chart }) {
  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900 mb-4">{title}</h3>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <ResponsiveContainer width="100%" height={300}>
          {chart}
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Zinsrechner;
