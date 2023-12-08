import React from "react";

const wineData = [
  {
    Alcohol: 1,
    "Malic Acid": 14.23,
    Ash: 1.71,
    "Alcalinity of ash": 2.43,
    Magnesium: 15.6,
    "Total phenols": 127,
    Flavanoids: 2.8,
    "Nonflavanoid phenols": 3.06,
    Proanthocyanins: ".28",
    "Color intensity": 2.29,
    Hue: 5.64,
    "OD280/OD315 of diluted wines": 1.04,
    Unknown: 3.92,
  },
  {
    Alcohol: 1,
    "Malic Acid": 13.2,
    Ash: 1.78,
    "Alcalinity of ash": 2.14,
    Magnesium: 11.2,
    "Total phenols": 100,
    Flavanoids: 2.65,
    "Nonflavanoid phenols": 2.76,
    Proanthocyanins: ".26",
    "Color intensity": 1.28,
    Hue: 4.38,
    "OD280/OD315 of diluted wines": 1.05,
    Unknown: 3.4,
  },
  {
    Alcohol: 1,
    "Malic Acid": 13.16,
    Ash: 2.36,
    "Alcalinity of ash": 2.67,
    Magnesium: 18.6,
    "Total phenols": 101,
    Flavanoids: 2.8,
    "Nonflavanoid phenols": 3.24,
    Proanthocyanins: ".3",
    "Color intensity": 2.81,
    Hue: 5.68,
    "OD280/OD315 of diluted wines": 1.03,
    Unknown: 3.17,
  },
  {
    Alcohol: 1,
    "Malic Acid": 14.37,
    Ash: 1.95,
    "Alcalinity of ash": 2.5,
    Magnesium: 16.8,
    "Total phenols": 113,
    Flavanoids: 3.85,
    "Nonflavanoid phenols": 3.49,
    Proanthocyanins: ".24",
    "Color intensity": 2.18,
    Hue: 7.8,
    "OD280/OD315 of diluted wines": ".86",
    Unknown: 3.45,
  },
  {
    Alcohol: 1,
    "Malic Acid": 13.24,
    Ash: 2.59,
    "Alcalinity of ash": 2.87,
    Magnesium: 21,
    "Total phenols": 118,
    Flavanoids: 2.8,
    "Nonflavanoid phenols": 2.69,
    Proanthocyanins: ".39",
    "Color intensity": 1.82,
    Hue: 4.32,
    "OD280/OD315 of diluted wines": 1.04,
    Unknown: 2.93,
  },
  {
    Alcohol: 1,
    "Malic Acid": 14.2,
    Ash: 1.76,
    "Alcalinity of ash": 2.45,
    Magnesium: 15.2,
    "Total phenols": 112,
    Flavanoids: 3.27,
    "Nonflavanoid phenols": 3.39,
    Proanthocyanins: ".34",
    "Color intensity": 1.97,
    Hue: 6.75,
    "OD280/OD315 of diluted wines": 1.05,
    Unknown: 2.85,
  },
  {
    Alcohol: 1,
    "Malic Acid": 14.39,
    Ash: 1.87,
    "Alcalinity of ash": 2.45,
    Magnesium: 14.6,
    "Total phenols": 96,
    Flavanoids: 2.5,
    "Nonflavanoid phenols": 2.52,
    Proanthocyanins: ".3",
    "Color intensity": 1.98,
    Hue: 5.25,
    "OD280/OD315 of diluted wines": 1.02,
    Unknown: 3.58,
  },
  {
    Alcohol: 1,
    "Malic Acid": 14.06,
    Ash: 2.15,
    "Alcalinity of ash": 2.61,
    Magnesium: 17.6,
    "Total phenols": 121,
    Flavanoids: 2.6,
    "Nonflavanoid phenols": 2.51,
    Proanthocyanins: ".31",
    "Color intensity": 1.25,
    Hue: 5.05,
    "OD280/OD315 of diluted wines": 1.06,
    Unknown: 3.58,
  },
  {
    Alcohol: 1,
    "Malic Acid": 14.83,
    Ash: 1.64,
    "Alcalinity of ash": 2.17,
    Magnesium: 14,
    "Total phenols": 97,
    Flavanoids: 2.8,
    "Nonflavanoid phenols": 2.98,
    Proanthocyanins: ".29",
    "Color intensity": 1.98,
    Hue: 5.2,
    "OD280/OD315 of diluted wines": 1.08,
    Unknown: 2.85,
  },
  {
    Alcohol: 1,
    "Malic Acid": 13.86,
    Ash: 1.35,
    "Alcalinity of ash": 2.27,
    Magnesium: 16,
    "Total phenols": 98,
    Flavanoids: 2.98,
    "Nonflavanoid phenols": 3.15,
    Proanthocyanins: ".22",
    "Color intensity": 1.85,
    Hue: 7.22,
    "OD280/OD315 of diluted wines": 1.01,
    Unknown: 3.55,
  },
  {
    Alcohol: 1,
    "Malic Acid": 14.1,
    Ash: 2.16,
    "Alcalinity of ash": 2.3,
    Magnesium: 18,
    "Total phenols": 105,
    Flavanoids: 2.95,
    "Nonflavanoid phenols": 3.32,
    Proanthocyanins: ".22",
    "Color intensity": 2.38,
    Hue: 5.75,
    "OD280/OD315 of diluted wines": 1.25,
    Unknown: 3.17,
  },
  {
    Alcohol: 1,
    "Malic Acid": 14.12,
    Ash: 1.48,
    "Alcalinity of ash": 2.32,
    Magnesium: 16.8,
    "Total phenols": 95,
    Flavanoids: 2.2,
    "Nonflavanoid phenols": 2.43,
    Proanthocyanins: ".26",
    "Color intensity": 1.57,
    Hue: 5,
    "OD280/OD315 of diluted wines": 1.17,
    Unknown: 2.82,
  },
  {
    Alcohol: 1,
    "Malic Acid": 13.75,
    Ash: 1.73,
    "Alcalinity of ash": 2.41,
    Magnesium: 16,
    "Total phenols": 89,
    Flavanoids: 2.6,
    "Nonflavanoid phenols": 2.76,
    Proanthocyanins: ".29",
    "Color intensity": 1.81,
    Hue: 5.6,
    "OD280/OD315 of diluted wines": 1.15,
    Unknown: 2.9,
  },
  {
    Alcohol: 1,
    "Malic Acid": 14.75,
    Ash: 1.73,
    "Alcalinity of ash": 2.39,
    Magnesium: 11.4,
    "Total phenols": 91,
    Flavanoids: 3.1,
    "Nonflavanoid phenols": 3.69,
    Proanthocyanins: ".43",
    "Color intensity": 2.81,
    Hue: 5.4,
    "OD280/OD315 of diluted wines": 1.25,
    Unknown: 2.73,
  },
  {
    Alcohol: 1,
    "Malic Acid": 14.38,
    Ash: 1.87,
    "Alcalinity of ash": 2.38,
    Magnesium: 12,
    "Total phenols": 102,
    Flavanoids: 3.3,
    "Nonflavanoid phenols": 3.64,
    Proanthocyanins: ".29",
    "Color intensity": 2.96,
    Hue: 7.5,
    "OD280/OD315 of diluted wines": 1.2,
    Unknown: 3,
  },
  {
    Alcohol: 1,
    "Malic Acid": 13.63,
    Ash: 1.81,
    "Alcalinity of ash": 2.7,
    Magnesium: 17.2,
    "Total phenols": 112,
    Flavanoids: 2.85,
    "Nonflavanoid phenols": 2.91,
    Proanthocyanins: ".3",
    "Color intensity": 1.46,
    Hue: 7.3,
    "OD280/OD315 of diluted wines": 1.28,
    Unknown: 2.88,
  },
];

const calculateMean = (values) => {
  const sum = values.reduce((acc, value) => acc + value, 0);
  return +(sum / values.length).toFixed(3);
};

const calculateMedian = (values) => {
  const sortedValues = values.slice().sort((a, b) => a - b);
  const mid = Math.floor(sortedValues.length / 2);
  return +(
    sortedValues.length % 2 !== 0
      ? sortedValues[mid]
      : (sortedValues[mid - 1] + sortedValues[mid]) / 2
  ).toFixed(3);
};

const calculateMode = (values) => {
  const countMap = {};
  values.forEach((value) => {
    countMap[value] = (countMap[value] || 0) + 1;
  });

  let mode;
  let maxCount = 0;

  for (const value in countMap) {
    if (countMap[value] > maxCount) {
      mode = value;
      maxCount = countMap[value];
    }
  }

  return typeof mode === "number" ? +mode.toFixed(3) : mode;
};

// Function to calculate class-wise statistics for a given property
const calculateClassStatistics = (data, property) => {
  const classes = {};

  data.forEach((entry) => {
    const alcoholClass = entry.Alcohol;
    const value = parseFloat(entry[property]);

    if (!classes[alcoholClass]) {
      classes[alcoholClass] = [];
    }

    classes[alcoholClass].push(value);
  });

  const classStatistics = {};
  for (const alcoholClass in classes) {
    const values = classes[alcoholClass];
    classStatistics[alcoholClass] = {
      mean: calculateMean(values),
      median: calculateMedian(values),
      mode: calculateMode(values),
    };
  }

  return classStatistics;
};

// Function to create a new property "Gamma" for each data point
const calculateGamma = (data) => {
  return data.map((entry) => {
    const ash = parseFloat(entry.Ash);
    const hue = parseFloat(entry.Hue);
    const magnesium = parseFloat(entry.Magnesium);
    const gamma = +((ash * hue) / magnesium).toFixed(3);
    return { ...entry, Gamma: gamma };
  });
};

// Function to calculate class-wise statistics for the new property "Gamma"
const calculateGammaStatistics = (gammaData) => {
  return calculateClassStatistics(gammaData, "Gamma");
};

const StatisticsTable = ({ statistics, property }) => {
  const rows = ["mean", "median", "mode"];

  return (
    <table border="1" cellPadding="20">
      <thead>
        <tr>
          <th>Measures</th>
          {Object.keys(statistics).map((alcoholClass) => (
            <th key={alcoholClass}>{`Class ${alcoholClass}`}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row}>
            <td>{`${property} ${row}`}</td>
            {Object.keys(statistics).map((alcoholClass) => (
              <td key={`${alcoholClass}-${row}`}>
                {statistics[alcoholClass][row]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const App = () => {
  const flavanoidsStatistics = calculateClassStatistics(wineData, "Flavanoids");
  const gammaData = calculateGamma(wineData);
  const gammaStatistics = calculateGammaStatistics(gammaData);

  return (
    <div>
      <h1>Wine Statistics</h1>
      <h2>Flavanoids Statistics</h2>
      <StatisticsTable
        statistics={flavanoidsStatistics}
        property="Flavanoids"
      />

      <h2>Gamma Statistics</h2>
      <StatisticsTable statistics={gammaStatistics} property="Gamma" />
    </div>
  );
};

export default App;
