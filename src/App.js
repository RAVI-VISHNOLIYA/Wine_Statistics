import React from "react";

const data = [
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

//calculate Mean
const calculateMean = (data, property) => {
  const values = data.map((entry) => {
    const value = entry[property];
    return typeof value === "string" ? parseFloat(value) : value;
  });

  const filteredValues = values.filter((value) => !isNaN(value));

  if (filteredValues.length === 0) {
    return 0;
  }

  return (
    filteredValues.reduce((sum, value) => sum + value, 0) /
    filteredValues.length
  );
};

//calculate Median
const calculateMedian = (data, property) => {
  const values = data.map((entry) => {
    const value = entry[property];
    return typeof value === "string" ? parseFloat(value) : value;
  });

  const sortedValues = values.slice().sort((a, b) => a - b);
  const length = sortedValues.length;

  if (length === 0) {
    return 0; // or handle this case based on your requirements
  }

  // If the length is odd, return the middle value
  if (length % 2 === 1) {
    return sortedValues[Math.floor(length / 2)];
  } else {
    // If the length is even, return the average of the two middle values
    const mid1 = sortedValues[length / 2 - 1];
    const mid2 = sortedValues[length / 2];
    return (mid1 + mid2) / 2;
  }
};

//calculate Standard Deviation
const calculateStandardDeviation = (data, property) => {
  const values = data.map((entry) => {
    const value = entry[property];
    return typeof value === "string" ? parseFloat(value) : value;
  });

  const mean = values.reduce((sum, value) => sum + value, 0) / values.length;

  const squaredDifferences = values.map((value) => Math.pow(value - mean, 2));
  const meanOfSquaredDifferences =
    squaredDifferences.reduce((sum, value) => sum + value, 0) /
    squaredDifferences.length;

  const standardDeviation = Math.sqrt(meanOfSquaredDifferences);

  return standardDeviation;
};

//Mean of wine
const meanAlcohol = calculateMean(data, "Alcohol");
const meanMalicAcid = calculateMean(data, "Malic Acid");
const meanAsh = calculateMean(data, "Ash");
const meanAlcanlinity = calculateMean(data, "Alcalinity of ash");
const meanMagnesium = calculateMean(data, "Magnesium");
const meanTotalPhenols = calculateMean(data, "Total phenols");
const meanFlavanoids = calculateMean(data, "Flavanoids");
const meanNonflavanoidPhenols = calculateMean(data, "Nonflavanoid phenols");
const meanProanthocyanins = calculateMean(data, "Proanthocyanins");
const meanColorIntensity = calculateMean(data, "Color intensity");
const meanHue = calculateMean(data, "Hue");
const meanDilutedWines = calculateMean(data, "OD280/OD315 of diluted wines");
const meanUnknown = calculateMean(data, "Unknown");

//Median of wine
const medianAlcohol = calculateMedian(data, "Alcohol");
const medianMalicAcid = calculateMedian(data, "Malic Acid");
const medianAsh = calculateMedian(data, "Ash");
const medianAlcanlinity = calculateMedian(data, "Alcalinity of ash");
const medianMagnesium = calculateMedian(data, "Magnesium");
const medianTotalPhenols = calculateMedian(data, "Total phenols");
const medianFlavanoids = calculateMedian(data, "Flavanoids");
const medianNonflavanoidPhenols = calculateMedian(data, "Nonflavanoid phenols");
const medianProanthocyanins = calculateMedian(data, "Proanthocyanins");
const medianColorIntensity = calculateMedian(data, "Color intensity");
const medianHue = calculateMedian(data, "Hue");
const medianDilutedWines = calculateMedian(
  data,
  "OD280/OD315 of diluted wines"
);
const medianUnknown = calculateMedian(data, "Unknown");

//Standard Deviation
const stdDeviationAlcohol = calculateStandardDeviation(data, "Alcohol");
const stdDeviationMalicAcid = calculateStandardDeviation(data, "Malic Acid");
const stdDeviationAsh = calculateStandardDeviation(data, "Ash");
const stdDeviationAlcan = calculateStandardDeviation(data, "Alcalinity of ash");
const stdDeviationMagnesium = calculateStandardDeviation(data, "Magnesium");
const stdDeviationTotalPhenols = calculateStandardDeviation(
  data,
  "Total phenols"
);
const stdDeviationFlavanoids = calculateStandardDeviation(data, "Flavanoids");
const stdDeviationNonFlavanoids = calculateStandardDeviation(
  data,
  "Nonflavanoid phenols"
);
const stdDeviationProanthocyanins = calculateStandardDeviation(
  data,
  "Proanthocyanins"
);
const stdDeviationColInten = calculateStandardDeviation(
  data,
  "Color intensity"
);
const stdDeviationHue = calculateStandardDeviation(data, "Hue");
const stdDeviationDilwines = calculateStandardDeviation(
  data,
  "OD280/OD315 of diluted wines"
);
const stdDeviationUnknown = calculateStandardDeviation(data, "Unknown");

function App() {
  return (
    <React.Fragment>
      <div>
        <h1>Wine Statistics</h1>
        <table>
          <thead>
            <tr>
              <th>Property</th>
              <th>Mean</th>
              <th>Median</th>
              <th>Standard Deviation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alcohol</td>
              <td>{meanAlcohol}</td>
              <td>{medianAlcohol}</td>
              <td>{stdDeviationAlcohol}</td>
            </tr>
            <tr>
              <td>Malic Acid</td>
              <td>{meanMalicAcid}</td>
              <td>{medianMalicAcid}</td>
              <td>{stdDeviationMalicAcid}</td>
            </tr>
            <tr>
              <td>Ash</td>
              <td>{meanAsh}</td>
              <td>{medianAsh}</td>
              <td>{stdDeviationAsh}</td>
            </tr>
            <tr>
              <td>Alcalinity of ash</td>
              <td>{meanAlcanlinity}</td>
              <td>{medianAlcanlinity}</td>
              <td>{stdDeviationAlcan}</td>
            </tr>
            <tr>
              <td>Magnesium</td>
              <td>{meanMagnesium}</td>
              <td>{medianMagnesium}</td>
              <td>{stdDeviationMagnesium}</td>
            </tr>
            <tr>
              <td>Total phenols</td>
              <td>{meanTotalPhenols}</td>
              <td>{medianTotalPhenols}</td>
              <td>{stdDeviationTotalPhenols}</td>
            </tr>
            <tr>
              <td>Flavanoids</td>
              <td>{meanFlavanoids}</td>
              <td>{medianFlavanoids}</td>
              <td>{stdDeviationFlavanoids}</td>
            </tr>
            <tr>
              <td>Nonflavanoid phenols</td>
              <td>{meanNonflavanoidPhenols}</td>
              <td>{medianNonflavanoidPhenols}</td>
              <td>{stdDeviationNonFlavanoids}</td>
            </tr>
            <tr>
              <td>Proanthocyanins</td>
              <td>{meanProanthocyanins}</td>
              <td>{medianProanthocyanins}</td>
              <td>{stdDeviationProanthocyanins}</td>
            </tr>
            <tr>
              <td>Color intensity</td>
              <td>{meanColorIntensity}</td>
              <td>{medianColorIntensity}</td>
              <td>{stdDeviationColInten}</td>
            </tr>
            <tr>
              <td>Hue</td>
              <td>{meanHue}</td>
              <td>{medianHue}</td>
              <td>{stdDeviationHue}</td>
            </tr>
            <tr>
              <td>OD280/OD315 of diluted wines</td>
              <td>{meanDilutedWines}</td>
              <td>{medianDilutedWines}</td>
              <td>{stdDeviationDilwines}</td>
            </tr>
            <tr>
              <td>Unknown</td>
              <td>{meanUnknown}</td>
              <td>{medianUnknown}</td>
              <td>{stdDeviationUnknown}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default App;
